"use client";

import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";
import { WishlistButton } from "@/components/wishlist/WishlistButton";
import { ProductBadge } from "@/components/product/ProductBadge";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/types";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const addToCart = useCartStore((s) => s.addToCart);

  function handleAddToCart() {
    addToCart(product);
    toast.success("Added to cart");
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 lg:h-[500px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-8"
          priority
        />
      </div>

      <div className="flex flex-col">
        <div className="mb-3 flex items-center gap-2">
          <ProductBadge product={product} />
          <span className="text-sm capitalize text-zinc-400">
            {product.category}
          </span>
        </div>

        <h1 className="mb-4 text-2xl font-bold text-zinc-900 lg:text-3xl">
          {product.title}
        </h1>

        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.round(product.rating.rate)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-zinc-200 text-zinc-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-zinc-600">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>

        <p className="mb-6 text-3xl font-bold text-zinc-900">
          ${product.price.toFixed(2)}
        </p>

        <p className="mb-8 leading-relaxed text-zinc-600">
          {product.description}
        </p>

        <div className="flex items-center gap-3">
          <Button onClick={handleAddToCart} size="lg" className="flex-1">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
          <WishlistButton product={product} className="h-12 w-12 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
