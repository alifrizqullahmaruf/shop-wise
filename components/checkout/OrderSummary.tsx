"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/cart-store";

export function OrderSummary() {
  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  return (
    <div className="rounded-xl border border-zinc-100 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-zinc-900">Order Summary</h2>
      <div className="mb-4 flex flex-col gap-3 border-b border-zinc-100 pb-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-xs font-medium text-zinc-900">
                {item.title}
              </p>
              <p className="text-xs text-zinc-500">Qty: {item.quantity}</p>
            </div>
            <span className="text-xs font-medium text-zinc-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm text-zinc-600">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-zinc-600">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between border-t border-zinc-100 pt-2 font-bold text-zinc-900">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
