"use client";

import Link from "next/link";
import { CheckCircle2, Package, ShoppingBag } from "lucide-react";
import { Container } from "@/components/layout/Container";

function generateOrderNumber() {
  return `SL-${Date.now().toString(36).toUpperCase()}`;
}

export default function OrderSuccessPage() {
  const orderNumber = generateOrderNumber();

  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Order Placed!</h1>
        <p className="mb-6 text-zinc-500">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="mb-8 rounded-xl border border-zinc-100 bg-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Package className="h-4 w-4" />
              <span>Order Number</span>
            </div>
            <span className="font-mono text-sm font-bold text-zinc-900">
              {orderNumber}
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3">
            <span className="text-sm text-zinc-600">Status</span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
              Processing
            </span>
          </div>
          <p className="mt-4 text-xs text-zinc-400">
            This is a demo order. No actual charge has been made.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </Container>
  );
}
