import { Suspense } from "react";
import { LoginForm } from "@/components/login/LoginForm";
import { Container } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/Skeleton";

function LoginFallback() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
          <Skeleton className="mb-8 h-16 w-full" />
          <Skeleton className="mb-4 h-10 w-full" />
          <Skeleton className="mb-4 h-10 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </Container>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}
