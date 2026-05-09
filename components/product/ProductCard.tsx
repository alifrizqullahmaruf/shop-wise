"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";
import { WishlistButton } from "@/components/wishlist/WishlistButton";
import { ProductBadge } from "@/components/product/ProductBadge";
import type { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((s) => s.addToCart);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addToCart(product);
    toast.success("Added to cart!");
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/60"
    >
      {/* Wishlist button */}
      <div className="absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <WishlistButton product={product} />
      </div>

      {/* Image area */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-linear-to-br from-stone-50 to-stone-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category pill */}
        <span className="absolute bottom-2 left-2 rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold capitalize text-stone-600 backdrop-blur-sm shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <ProductBadge product={product} />
        </div>

        <p className="mb-2 line-clamp-2 text-sm font-semibold leading-snug text-stone-800">
          {product.title}
        </p>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.round(product.rating.rate)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-stone-200 text-stone-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-stone-500">
            {product.rating.rate} <span className="text-stone-300">·</span> {product.rating.count} reviews
          </span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-extrabold text-stone-900">${product.price.toFixed(2)}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-200 transition-all hover:bg-amber-600 hover:scale-105 active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
