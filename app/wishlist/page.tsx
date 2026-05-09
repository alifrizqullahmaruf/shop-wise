"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import { useWishlistStore } from "@/stores/wishlist-store";
import { useCartStore } from "@/stores/cart-store";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import type { WishlistItem } from "@/types";

function WishlistCard({ item }: { item: WishlistItem }) {
  const removeFromWishlist = useWishlistStore((s) => s.removeFromWishlist);
  const addToCart = useCartStore((s) => s.addToCart);

  function handleAddToCart() {
    addToCart({ ...item, description: "", category: "", rating: { rate: 0, count: 0 } });
    toast.success("Added to cart");
  }

  function handleRemove() {
    removeFromWishlist(item.id);
    toast.success("Removed from wishlist");
  }

  return (
    <div className="flex flex-col rounded-xl border border-zinc-100 bg-white shadow-sm">
      <Link href={`/products/${item.id}`} className="relative block h-48 overflow-hidden rounded-t-xl bg-zinc-50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link
          href={`/products/${item.id}`}
          className="mb-2 line-clamp-2 text-sm font-medium text-zinc-900 hover:underline"
        >
          {item.title}
        </Link>
        <p className="mb-4 text-lg font-bold text-zinc-900">
          ${item.price.toFixed(2)}
        </p>
        <div className="mt-auto flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
          <button
            onClick={handleRemove}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-red-300 hover:text-red-500"
            aria-label="Remove from wishlist"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WishlistPage() {
  const items = useWishlistStore((s) => s.items);

  if (items.length === 0) {
    return (
      <Container className="py-20">
        <EmptyState
          icon={<Heart className="h-8 w-8" />}
          title="Your wishlist is empty"
          description="Save items you love by clicking the heart icon on any product."
          action={
            <Link
              href="/products"
              className="inline-flex h-10 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-700"
            >
              Browse Products
            </Link>
          }
        />
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900">
        Wishlist
        <span className="ml-2 text-lg font-normal text-zinc-400">
          ({items.length})
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
