"use client";

import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";

export function CartSummary() {
  const totalItems = useCartStore((s) => s.getTotalItems());
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  return (
    <div className="rounded-xl border border-zinc-100 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-zinc-900">Order Summary</h2>
      <div className="mb-4 flex flex-col gap-2 border-b border-zinc-100 pb-4">
        <div className="flex justify-between text-sm text-zinc-600">
          <span>Items ({totalItems})</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-zinc-600">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
      </div>
      <div className="mb-6 flex justify-between font-bold text-zinc-900">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <Link
        href="/checkout"
        className="block w-full rounded-lg bg-zinc-900 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-700"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
