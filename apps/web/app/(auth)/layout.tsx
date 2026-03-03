import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account | Himalayan Gold",
  description: "Sign in to your Himalayan Gold account.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
