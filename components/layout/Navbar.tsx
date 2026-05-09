import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CartCount } from "@/components/layout/CartCount";
import { WishlistCount } from "@/components/layout/WishlistCount";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 shadow-md shadow-amber-200 transition-transform group-hover:scale-105">
              <ShoppingBag className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-stone-900" style={{ fontFamily: "var(--font-jakarta)" }}>
              Store<span className="text-amber-500">Lab</span>
            </span>
          </Link>

          {/* Center Nav */}
          <div className="hidden items-center gap-1 sm:flex">
            <Link
              href="/products"
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-all hover:bg-stone-100 hover:text-stone-900"
            >
              Products
            </Link>
            <Link
              href="/wishlist"
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-all hover:bg-stone-100 hover:text-stone-900"
            >
              Wishlist
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <WishlistCount />
            <CartCount />
            <Link
              href="/login"
              className="hidden rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:shadow-md hover:shadow-amber-200 sm:flex"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
