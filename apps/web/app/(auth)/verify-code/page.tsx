"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/components/auth/AuthShell";
import { VerifyCodeSchema, type VerifyCodeValues } from "@/lib/validations/auth";

export default function VerifyCodePage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VerifyCodeValues>({
    resolver: zodResolver(VerifyCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  useEffect(() => {
    setValue("code", otp.join(""), { shouldValidate: true });
  }, [otp, setValue]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      next[i] = pasted[i]!;
    }
    setOtp(next);
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const onSubmit = async (data: VerifyCodeValues) => {
    // Handle verification logic here
    console.log("Verify code data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <AuthShell
      brandHeading={
        <>
          Verify Your <br />
          <span className="text-primary italic">Identity</span>
        </>
      }
      brandTagline="A simple step to ensure the safety and sanctity of your account."
      brandFooter="Premium Security Standards"
    >
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-neutral-900/80 backdrop-blur-xl p-10 sm:p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10">
          {/* Header */}
          <header className="text-center mb-10">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </div>
            <h2 className="font-display text-white text-4xl mb-3">Check Your Email</h2>
            <p className="text-white/60 font-medium text-sm leading-relaxed">
              We&apos;ve sent a 6-digit verification code to your email. Enter it below.
            </p>
          </header>

          {/* OTP Input */}
          <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center">
              <div className="flex justify-center gap-3" onPaste={handlePaste}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => {
                      inputRefs.current[i] = el;
                    }}
                    className={`w-12 h-14 text-center text-xl font-display text-forest bg-transparent border-0 border-b-2 ${errors.code ? "border-red-500" : "border-forest/20"} focus:ring-0 input-underline-glow transition-all duration-300`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    aria-label={`Digit ${i + 1}`}
                  />
                ))}
              </div>
              {errors.code && (
                <p className="text-red-500 text-[10px] font-semibold mt-4 uppercase tracking-wider text-center">
                  {errors.code.message}
                </p>
              )}
            </div>

            <input type="hidden" {...register("code")} />

            <button
              className="shimmer-btn w-full bg-primary text-neutral-950 text-xs font-bold py-5 rounded-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-primary/30 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Verifying..." : "Verify Code"}
            </button>
          </form>

          {/* Resend + Back */}
          <div className="mt-10 text-center space-y-4">
            <button
              type="button"
              className="text-xs font-semibold text-primary uppercase tracking-[0.1em] hover:text-forest transition-colors duration-300"
            >
              Resend Code
            </button>
            <div>
              <Link
                href="/login"
                className="inline-flex items-center text-xs font-bold text-white uppercase tracking-[0.15em] transition-all duration-300 hover:text-primary group"
              >
                <svg
                  className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthShell>
  );
}
