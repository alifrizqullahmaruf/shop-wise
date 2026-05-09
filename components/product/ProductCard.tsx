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
    toast.success(`${product.title.slice(0, 30)}... added to cart`);
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col rounded-xl border border-zinc-100 bg-white p-4 shadow-sm transition-all hover:border-zinc-200 hover:shadow-md"
    >
      <div className="absolute right-4 top-4 z-10">
        <WishlistButton product={product} />
      </div>

      <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-zinc-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mb-2">
        <ProductBadge product={product} />
      </div>

      <p className="mb-1 line-clamp-2 text-sm font-medium text-zinc-900">
        {product.title}
      </p>

      <p className="mb-1 text-xs text-zinc-400 capitalize">{product.category}</p>

      <div className="mb-3 flex items-center gap-1">
        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
        <span className="text-xs text-zinc-600">
          {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-base font-bold text-zinc-900">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={handleAddToCart}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-zinc-700"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
    </Link>
  );
}
