"use client";

import { useEffect } from "react";
import { useAuth } from "@/store/useAuth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { fetchUser } = useAuth();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return <>{children}</>;
}
