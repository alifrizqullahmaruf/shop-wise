"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlist-store";

export function WishlistCount() {
  const count = useWishlistStore((s) => s.items.length);

  return (
    <Link
      href="/wishlist"
      className="relative flex h-9 w-9 items-center justify-center rounded-xl text-stone-600 transition-all hover:bg-rose-50 hover:text-rose-500"
      aria-label={`Wishlist (${count} items)`}
    >
      <Heart className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white shadow-sm">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </Link>
  );
}
