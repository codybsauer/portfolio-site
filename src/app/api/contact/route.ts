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
  website?: string;
  preferredContact?: string;
  submissionTime: number;
  humanInteractions?: {
    mouseMovements: number;
    keyPresses: number;
    totalTime: number;
  };
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

const ONE_HOUR_IN_SECONDS = 3600;
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: ONE_HOUR_IN_SECONDS,
});

const SECURITY_THRESHOLDS = {
  MIN_SUBMISSION_TIME: 3000,
  MIN_MOUSE_MOVEMENTS: 2,
  MIN_KEY_PRESSES: 3,
  MIN_TOTAL_TIME: 5000,
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 100,
  MAX_MESSAGE_LENGTH: 5000,
} as const;

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

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, SECURITY_THRESHOLDS.MAX_MESSAGE_LENGTH);
}

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "anonymous";

    try {
      await rateLimiter.consume(ip);
    } catch (rateLimitError) {
      const error = rateLimitError as RateLimitError;
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json<ApiResponse>(
        {
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil(error.msBeforeNext / 1000),
        },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactFormRequest;
    const {
      name,
      email,
      inquiryType,
      message,
      captchaToken,
      website,
      preferredContact,
      submissionTime,
      humanInteractions,
    } = body;

    if (website || preferredContact) {
      console.warn(`Honeypot triggered from IP: ${ip}`);
      return NextResponse.json<ApiResponse>(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    const submissionDuration = Date.now() - submissionTime;
    if (submissionDuration < SECURITY_THRESHOLDS.MIN_SUBMISSION_TIME) {
      console.warn(`Rapid submission detected from IP: ${ip}`);
      return NextResponse.json<ApiResponse>(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    if (humanInteractions) {
      const { mouseMovements, keyPresses, totalTime } = humanInteractions;
      if (
        mouseMovements < SECURITY_THRESHOLDS.MIN_MOUSE_MOVEMENTS ||
        keyPresses < SECURITY_THRESHOLDS.MIN_KEY_PRESSES ||
        totalTime < SECURITY_THRESHOLDS.MIN_TOTAL_TIME
      ) {
        console.warn(`Low interaction submission detected from IP: ${ip}`);
        return NextResponse.json<ApiResponse>(
          { error: "Invalid submission" },
          { status: 400 }
        );
      }
    }

    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json<ApiResponse>(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const from = process.env.FROM_EMAIL;
    const to = process.env.TO_EMAIL;
    if (!from || !to) {
      console.error("Missing required environment variables");
      return NextResponse.json<ApiResponse>(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const isValidCaptcha = await verifyCaptcha(captchaToken);
    if (!isValidCaptcha) {
      console.warn(`Invalid captcha from IP: ${ip}`);
      return NextResponse.json<ApiResponse>(
        { error: "Invalid captcha" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<ApiResponse>(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeInput(name).slice(
      0,
      SECURITY_THRESHOLDS.MAX_NAME_LENGTH
    );
    const sanitizedEmail = sanitizeInput(email).slice(
      0,
      SECURITY_THRESHOLDS.MAX_EMAIL_LENGTH
    );
    const sanitizedMessage = sanitizeInput(message);

    await resend.emails.send({
      from: `Cody Sauer <${from}>`,
      to,
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact: ${inquiryType}`,
      react: ContactEmail({
        name: sanitizedName,
        email: sanitizedEmail,
        inquiryType,
        message: sanitizedMessage,
      }),
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
