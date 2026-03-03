import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "@/lib/api";
import { LoginValues, RegisterValues } from "@/lib/validations/auth";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (data: LoginValues) => Promise<void>;
  register: (data: RegisterValues) => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
  clearError: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      clearError: () => set({ error: null }),

      login: async (data: LoginValues) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api<{ user: User }>("/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
          });
          set({ user: response.user, isAuthenticated: true, isLoading: false });
        } catch (error: any) {
          set({
            error: error.message,
            isLoading: false,
            isAuthenticated: false,
          });
          throw error;
        }
      },

      register: async (data: RegisterValues) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api<{ user: User }>("/auth/signup", {
            method: "POST",
            body: JSON.stringify(data),
          });
          set({ user: response.user, isAuthenticated: true, isLoading: false });
        } catch (error: any) {
          set({
            error: error.message,
            isLoading: false,
            isAuthenticated: false,
          });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          await api("/auth/logout", { method: "POST" });
        } catch (error) {
          console.error("Logout failed", error);
        } finally {
          set({ user: null, isAuthenticated: false, isLoading: false });
        }
      },

      fetchUser: async () => {
        try {
          const user = await api<User>("/auth/me");
          set({ user, isAuthenticated: true });
        } catch (error) {
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: "himalayan-auth",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
