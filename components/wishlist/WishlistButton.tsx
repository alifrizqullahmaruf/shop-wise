"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";
import { useWishlistStore } from "@/stores/wishlist-store";
import type { Product } from "@/types";

type WishlistButtonProps = {
  product: Product;
  className?: string;
};

export function WishlistButton({ product, className = "" }: WishlistButtonProps) {
  const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist);
  const wishlisted = isInWishlist(product.id);

  function handleToggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    toast.success(
      wishlisted ? "Removed from wishlist" : "Added to wishlist"
    );
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
        wishlisted
          ? "bg-red-50 text-red-500 hover:bg-red-100"
          : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600"
      } ${className}`}
    >
      <Heart
        className="h-4 w-4"
        fill={wishlisted ? "currentColor" : "none"}
      />
    </button>
  );
}
