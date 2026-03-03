"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/components/auth/AuthShell";
import { ResetPasswordSchema, type ResetPasswordValues } from "@/lib/validations/auth";

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordValues) => {
    // Handle reset password logic here
    console.log("Reset password data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <AuthShell
      brandHeading={
        <>
          Define Your <br />
          <span className="text-primary italic">New Path</span>
        </>
      }
      brandTagline="A fresh beginning awaits. Secure your account with a new password."
      brandFooter="High Altitude Sanctuary"
    >
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-neutral-900/80 backdrop-blur-xl p-10 sm:p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10">
          {/* Header */}
          <header className="text-center mb-10">
            <h2 className="font-display text-white text-4xl mb-4">Define Your New Path</h2>
            <p className="text-white/60 font-medium text-sm leading-relaxed">
              Please choose a strong password to secure your account.
            </p>
          </header>

          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label
                htmlFor="new-password"
                className="block text-[10px] font-bold text-white uppercase tracking-[0.15em] ml-1"
              >
                New Password
              </label>
              <input
                id="new-password"
                className={`w-full px-0 py-3 bg-transparent border-0 border-b ${errors.password ? "border-red-500" : "border-white/20"} focus:ring-0 input-underline-glow transition-all duration-300 text-white placeholder:text-white/30 text-sm`}
                placeholder="••••••••"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-[10px] font-semibold mt-1 ml-1 uppercase tracking-wider">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirm-new-password"
                className="block text-[10px] font-bold text-white uppercase tracking-[0.15em] ml-1"
              >
                Confirm New Password
              </label>
              <input
                id="confirm-new-password"
                className={`w-full px-0 py-3 bg-transparent border-0 border-b ${errors.confirmPassword ? "border-red-500" : "border-white/20"} focus:ring-0 input-underline-glow transition-all duration-300 text-white placeholder:text-white/30 text-sm`}
                placeholder="••••••••"
                type="password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-[10px] font-semibold mt-1 ml-1 uppercase tracking-wider">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              className="shimmer-btn w-full bg-primary text-neutral-950 text-xs font-bold py-5 rounded-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-primary/30 transition-all duration-500 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Password"}
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
