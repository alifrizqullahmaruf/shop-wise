"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlist-store";

export function WishlistCount() {
  const count = useWishlistStore((s) => s.items.length);

  return (
    <Link
      href="/wishlist"
      className="relative flex items-center gap-1 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
      aria-label={`Wishlist (${count} items)`}
    >
      <Heart className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
