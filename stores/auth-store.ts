"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "@/types";

type AuthStore = AuthState & {
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,

      login: (token) => set({ token, isAuthenticated: true }),
      logout: () => set({ token: null, isAuthenticated: false }),
    }),
    { name: "auth-storage" }
  )
);
