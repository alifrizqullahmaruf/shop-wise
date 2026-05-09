import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CartCount } from "@/components/layout/CartCount";
import { WishlistCount } from "@/components/layout/WishlistCount";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-zinc-900 hover:text-zinc-700"
          >
            StoreLab
          </Link>

          <div className="hidden items-center gap-6 sm:flex">
            <Link
              href="/products"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Products
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <WishlistCount />
            <CartCount />
            <Link
              href="/login"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Login
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
