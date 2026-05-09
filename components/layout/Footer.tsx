import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/layout/Container";

const links = {
  Shop: [
    { label: "All Products", href: "/products" },
    { label: "Electronics", href: "/products?category=electronics" },
    { label: "Clothing", href: "/products?category=men's+clothing" },
    { label: "Jewelry", href: "/products?category=jewelery" },
  ],
  Account: [
    { label: "Sign In", href: "/login" },
    { label: "Cart", href: "/cart" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Orders", href: "/order-success" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                <ShoppingBag className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-extrabold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>
                Store<span className="text-amber-400">Lab</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-stone-400">
              A modern e-commerce demo showcasing quality products with a clean and
              professional shopping experience.
            </p>
            <p className="mt-4 text-xs text-stone-600">
              Powered by{" "}
              <Link href="https://fakestoreapi.com" target="_blank" rel="noopener noreferrer" className="text-amber-500/70 hover:text-amber-400">
                Fake Store API
              </Link>
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-500">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-stone-800 pt-6 sm:flex-row">
          <p className="text-xs text-stone-600">
            © 2026 StoreLab. Portfolio project.
          </p>
          <p className="text-xs text-stone-600">
            Built with Next.js · Tailwind CSS · Zustand
          </p>
        </div>
      </Container>
    </footer>
  );
}
