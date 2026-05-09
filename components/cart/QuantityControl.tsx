"use client";

import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

type QuantityControlProps = {
  productId: number;
  quantity: number;
};

export function QuantityControl({ productId, quantity }: QuantityControlProps) {
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => decreaseQuantity(productId)}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
        aria-label="Decrease quantity"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="w-6 text-center text-sm font-medium text-zinc-900">
        {quantity}
      </span>
      <button
        onClick={() => increaseQuantity(productId)}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
        aria-label="Increase quantity"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}
