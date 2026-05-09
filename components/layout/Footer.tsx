import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white py-10 mt-auto">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-semibold text-zinc-900">StoreLab</p>
          <p className="text-xs text-zinc-400">
            Demo e-commerce app powered by{" "}
            <Link
              href="https://fakestoreapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-600"
            >
              Fake Store API
            </Link>
          </p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <Link href="/products" className="hover:text-zinc-900">
              Products
            </Link>
            <Link href="/cart" className="hover:text-zinc-900">
              Cart
            </Link>
            <Link href="/wishlist" className="hover:text-zinc-900">
              Wishlist
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
