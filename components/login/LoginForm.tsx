"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { login as apiLogin } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { DEMO_CREDENTIALS } from "@/constants";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authLogin = useAuthStore((s) => s.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { token } = await apiLogin(username, password);
      authLogin(token);
      toast.success("Login successful");
      const redirect = searchParams.get("redirect");
      router.push(redirect ? `/${redirect}` : "/");
    } catch {
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function fillDemo() {
    setUsername(DEMO_CREDENTIALS.username);
    setPassword(DEMO_CREDENTIALS.password);
  }

  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-zinc-900">Welcome back</h1>
            <p className="mt-1 text-sm text-zinc-500">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            {error && (
              <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <Button type="submit" loading={loading} size="lg" className="mt-2 w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 rounded-lg bg-zinc-50 p-4">
            <p className="mb-2 text-xs font-medium text-zinc-500">Demo credentials</p>
            <p className="text-xs text-zinc-600">
              Username: <code className="font-mono">{DEMO_CREDENTIALS.username}</code>
            </p>
            <p className="text-xs text-zinc-600">
              Password: <code className="font-mono">{DEMO_CREDENTIALS.password}</code>
            </p>
            <button
              type="button"
              onClick={fillDemo}
              className="mt-2 text-xs font-medium text-zinc-700 underline hover:text-zinc-900"
            >
              Use demo credentials
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
