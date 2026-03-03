"use client";

import { AuthShell } from "@/components/auth/AuthShell";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginValues } from "@/lib/validations/auth";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginValues>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginValues) => {
        // Handle login logic here
        console.log("Login data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    return (
        <AuthShell>
            <div className="w-full max-w-md animate-fade-in">
                <div className="bg-neutral-900/80 backdrop-blur-xl p-10 sm:p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10">
                    {/* Header */}
                    <header className="text-center mb-10">
                        <h2 className="font-display text-white text-4xl mb-3">
                            Welcome Back
                        </h2>
                        <p className="text-white/60 font-medium text-sm leading-relaxed">
                            Sign in to continue your Himalayan journey.
                        </p>
                    </header>

                    {/* Form */}
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <label
                                htmlFor="login-email"
                                className="block text-[10px] font-bold text-white uppercase tracking-[0.15em] ml-1"
                            >
                                Email Address
                            </label>
                            <input
                                id="login-email"
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

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="login-password"
                                    className="block text-[10px] font-bold text-white uppercase tracking-[0.15em] ml-1"
                                >
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-[10px] font-semibold text-primary uppercase tracking-[0.1em] hover:text-forest transition-colors duration-300"
                                >
                                    Forgot?
                                </Link>
                            </div>
                            <input
                                id="login-password"
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

                        <button
                            className="shimmer-btn w-full bg-primary text-neutral-950 text-xs font-bold py-5 rounded-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-primary/30 transition-all duration-500 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Signing In..." : "Sign In"}
                        </button>
                    </form>


                    {/* Divider */}
                    <div className="flex items-center my-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="px-4 text-[10px] text-white/40 uppercase tracking-[0.15em] font-semibold">
                            Or continue with
                        </span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Social Login */}
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-white/10 rounded-sm text-white/60 text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/20 hover:bg-forest/[0.02] transition-all duration-300"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button
                            type="button"
                            className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-white/10 rounded-sm text-white/60 text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/20 hover:bg-forest/[0.02] transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Apple
                        </button>
                    </div>

                    {/* Register link */}
                    <footer className="mt-10 text-center">
                        <p className="text-xs text-white/50">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="font-bold text-white uppercase tracking-[0.1em] hover:text-primary transition-colors duration-300"
                            >
                                Create One
                            </Link>
                        </p>
                    </footer>
                </div>
            </div>
        </AuthShell>
    );
}
