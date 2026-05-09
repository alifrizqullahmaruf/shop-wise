"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";
import { QuantityControl } from "@/components/cart/QuantityControl";
import type { CartItem as CartItemType } from "@/types";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  function handleRemove() {
    removeFromCart(item.id);
    toast.success("Item removed from cart");
  }

  return (
    <div className="flex gap-4 rounded-xl border border-zinc-100 bg-white p-4">
      <Link href={`/products/${item.id}`} className="shrink-0">
        <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-zinc-50">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="80px"
            className="object-contain p-2"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/products/${item.id}`}
            className="line-clamp-2 text-sm font-medium text-zinc-900 hover:underline"
          >
            {item.title}
          </Link>
          <button
            onClick={handleRemove}
            className="shrink-0 text-zinc-400 transition-colors hover:text-red-500"
            aria-label="Remove item"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <QuantityControl productId={item.id} quantity={item.quantity} />
          <span className="text-sm font-bold text-zinc-900">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
