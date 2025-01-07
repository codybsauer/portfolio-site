"use client";

import React, { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Card, CardContent } from "../UI/Card";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const inquiryTypes = [
    {
      value: "full-time",
      title: "Full-Time Position",
      description: "Looking to hire for a full-time role",
      icon: "💼",
    },
    {
      value: "freelance",
      title: "Freelance Development",
      description: "Need help with a development project",
      icon: "💻",
    },
    {
      value: "tutoring",
      title: "Programming Tutoring",
      description: "Interested in learning computer science",
      icon: "📚",
    },
    {
      value: "gamemaster",
      title: "Game Master Services",
      description: "Looking for a GM for a TTRPG campaign",
      icon: "🎲",
    },
  ];

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    if (!captchaToken) {
      setSubmitStatus({
        type: "error",
        message: "Please complete the captcha verification",
      });
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        inquiryType: "",
        message: "",
      });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVerificationSuccess = (token: string) => {
    setCaptchaToken(token);
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          CONTACT
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-gradient-to-b from-gray-900 to-indigo-950 border border-indigo-500">
          <CardContent className="p-8">
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg font-mono text-center ${
                  submitStatus.type === "success"
                    ? "bg-green-900/50 text-green-200 border border-green-500"
                    : "bg-red-900/50 text-red-200 border border-red-500"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className={`space-y-6 ${isSubmitting ? "opacity-50" : ""}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-200 font-mono mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full bg-indigo-950/50 border ${
                        errors.name ? "border-red-500" : "border-indigo-500/50"
                      } rounded-lg p-3 text-blue-200 font-mono focus:outline-none focus:border-blue-400`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-blue-200 font-mono mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full bg-indigo-950/50 border ${
                        errors.email ? "border-red-500" : "border-indigo-500/50"
                      } rounded-lg p-3 text-blue-200 font-mono focus:outline-none focus:border-blue-400`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 font-mono mb-2">
                    SERVICE REQUESTED
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-start p-4 rounded-lg cursor-pointer border 
                          ${
                            formData.inquiryType === type.value
                              ? "border-blue-400 bg-indigo-900/50"
                              : "border-indigo-500/50 bg-indigo-950/50"
                          } hover:border-blue-400 transition-colors`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formData.inquiryType === type.value}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="sr-only"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span>{type.icon}</span>
                            <span className="text-blue-200 font-mono">
                              {type.title}
                            </span>
                          </div>
                          <p className="text-sm text-blue-200/70 mt-1">
                            {type.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 font-mono mb-2">
                    ADDITIONAL DETAILS
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={4}
                    className={`w-full bg-indigo-950/50 border ${
                      errors.message ? "border-red-500" : "border-indigo-500/50"
                    } rounded-lg p-3 text-blue-200 font-mono focus:outline-none focus:border-blue-400`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center items-center min-h-[100px] bg-indigo-950/50 rounded-lg border border-indigo-500/50 p-4">
                  <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""}
                    onVerify={handleVerificationSuccess}
                    ref={captchaRef}
                    theme="dark"
                    size="normal"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !captchaToken}
                    className={`px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                      rounded-lg text-white font-mono transition-all
                      ${
                        isSubmitting || !captchaToken
                          ? "opacity-75 cursor-not-allowed"
                          : "hover:from-blue-600 hover:to-purple-600"
                      }
                      focus:outline-none focus:ring-2 focus:ring-blue-400 
                      focus:ring-offset-2 focus:ring-offset-gray-900`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        SENDING...
                      </span>
                    ) : (
                      "SEND MESSAGE"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
