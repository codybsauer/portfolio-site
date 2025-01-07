import { Resend } from "resend";
import { NextResponse } from "next/server";
import { RateLimiterMemory } from "rate-limiter-flexible";
import ContactEmail from "@/app/components/Contact/ContactEmail";

export interface ContactFormRequest {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  captchaToken: string;
}

interface RateLimitError {
  msBeforeNext: number;
  remainingPoints: number;
  consumedPoints: number;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
  retryAfter?: number;
  details?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 30 * 60,
});

async function verifyCaptcha(token: string) {
  const response = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      response: token,
      secret: process.env.HCAPTCHA_SECRET_KEY || "",
    }),
  });

  const data = await response.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "anonymous";

    try {
      await rateLimiter.consume(ip);
    } catch (rateLimitError) {
      const error = rateLimitError as RateLimitError;
      return NextResponse.json<ApiResponse>(
        {
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil(error.msBeforeNext / 1000),
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactFormRequest;
    const { name, email, inquiryType, message, captchaToken } = body;

    const from = process.env.FROM_EMAIL;
    const to = process.env.TO_EMAIL;

    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json<ApiResponse>(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!from || !to) {
      return NextResponse.json<ApiResponse>(
        { error: "Server Error!" },
        { status: 500 }
      );
    }

    const isValidCaptcha = await verifyCaptcha(captchaToken);
    if (!isValidCaptcha) {
      return NextResponse.json({ error: "Invalid captcha" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<ApiResponse>(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio Contact: ${inquiryType}`,
      react: ContactEmail({ name, email, inquiryType, message }),
    });

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Failed to send email:", errorMessage);

    return NextResponse.json<ApiResponse>(
      {
        error: "Failed to send email. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
