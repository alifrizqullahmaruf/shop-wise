import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
          <Search className="h-8 w-8" />
        </div>
        <div>
          <p className="text-6xl font-bold text-zinc-200">404</p>
          <h2 className="text-xl font-bold text-zinc-900">Page not found</h2>
          <p className="mt-1 text-sm text-zinc-500">
            The page you are looking for doesn&apos;t exist.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-700"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
}
