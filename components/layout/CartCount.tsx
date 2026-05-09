"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

export function CartCount() {
  const totalItems = useCartStore((s) => s.getTotalItems());

  return (
    <Link
      href="/cart"
      className="relative flex h-9 w-9 items-center justify-center rounded-xl text-stone-600 transition-all hover:bg-stone-100 hover:text-stone-900"
      aria-label={`Cart (${totalItems} items)`}
    >
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-white shadow-sm">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </Link>
  );
}
