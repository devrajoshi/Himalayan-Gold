"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/components/auth/AuthShell";
import { ForgotPasswordSchema, type ForgotPasswordValues } from "@/lib/validations/auth";

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    // Handle forgot password logic here
    console.log("Forgot password data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <AuthShell
      brandHeading={
        <>
          Restore Your <br />
          <span className="text-primary italic">Journey</span>
        </>
      }
      brandTagline="Every journey may pause, but it never truly ends. Let us guide you back."
      brandFooter="Established in the High Altitudes"
    >
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-neutral-900/80 backdrop-blur-xl p-10 sm:p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10">
          {/* Header */}
          <header className="text-center mb-12">
            <h2 className="font-display text-white text-4xl mb-4">Restore Your Journey</h2>
            <p className="text-white/60 font-medium text-sm leading-relaxed">
              Enter your email address to receive a recovery link.
            </p>
          </header>

          {/* Form */}
          <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label
                htmlFor="forgot-email"
                className="block text-[10px] font-bold text-white uppercase tracking-[0.15em] ml-1"
              >
                Email Address
              </label>
              <input
                id="forgot-email"
                className={`w-full px-0 py-3 bg-transparent border-0 border-b ${errors.email ? "border-red-500" : "border-white/20"} focus:ring-0 input-underline-glow transition-all duration-300 text-white placeholder:text-white/30 text-sm`}
                placeholder="name@premium.com"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-[10px] font-semibold mt-1 ml-1 uppercase tracking-wider">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              className="shimmer-btn w-full bg-primary text-neutral-950 text-xs font-bold py-5 rounded-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-primary/30 transition-all duration-500 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          {/* Back to login */}
          <footer className="mt-12 text-center">
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
          </footer>
        </div>
      </div>
    </AuthShell>
  );
}
