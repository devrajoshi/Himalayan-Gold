"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HexagonBackground } from "@/components/shared/HexagonBackground";
import { HexagonLoader } from "@/components/shared/HexagonLoader";

interface AuthShellProps {
  children: React.ReactNode;
  brandHeading?: React.ReactNode;
  brandTagline?: string;
  brandFooter?: string;
}

export function AuthShell({
  children,
  brandHeading = (
    <>
      Pure Himalayan <br />
      <span className="text-primary italic">Nectar</span>
    </>
  ),
  brandTagline = "Sustainably harvested from the untouched peaks of the Himalayas, delivering the world\u2019s most premium organic honey.",
  brandFooter = "Established in the High Altitudes",
}: AuthShellProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HexagonBackground
      className="!fixed inset-0 w-full h-full"
      glowColor="rgba(212, 175, 55, 0.5)"
      borderColor="rgba(6, 78, 59, 0.35)"
      hexagonSize={55}
      hexagonMargin={2}
    >
      <main className="pointer-events-none flex min-h-screen w-full">
        {/* ── Left: Branding area ── */}
        <div className="hidden lg:flex w-7/12 relative h-screen">
          <div className="flex flex-col items-start justify-center h-full px-16 xl:px-20">
            <div className="mb-5">
              <svg
                className="w-12 h-12 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <h1 className="font-display text-5xl xl:text-6xl text-white font-normal mb-4 tracking-tight leading-tight">
              {brandHeading}
            </h1>
            <p className="text-white/70 text-lg max-w-md font-light tracking-wide leading-relaxed">
              {brandTagline}
            </p>
            <div className="mt-12 w-16 h-[1px] bg-primary" />
          </div>

          <div className="absolute bottom-10 left-16 xl:left-20 text-white/40 text-xs tracking-[0.2em] uppercase">
            {brandFooter}
          </div>
        </div>

        {/* ── Right: Form card area ── */}
        <div className="w-full lg:w-5/12 min-h-screen flex items-center justify-center p-6 sm:p-8 relative">
          {/* Top-right brand badge */}
          <div className="absolute top-8 right-8 flex items-center space-x-2">
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em]">
              Himalayan Gold
            </span>
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>

          {/* Mobile logo */}
          <div className="lg:hidden absolute top-8 left-8">
            <Link
              href="/"
              className="pointer-events-auto text-white font-display text-xl font-bold"
            >
              HG
            </Link>
          </div>

          {/* Loader → Form transition */}
          {isLoading ? (
            <div className="relative w-20 h-20">
              <HexagonLoader loading />
            </div>
          ) : (
            <div className="pointer-events-auto w-full max-w-md animate-fade-in">{children}</div>
          )}
        </div>
      </main>
    </HexagonBackground>
  );
}
