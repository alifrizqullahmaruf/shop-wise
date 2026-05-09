"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { checkoutSchema, type CheckoutFormValues } from "@/components/checkout/checkout-schema";
import { CreditCard } from "lucide-react";

export function CheckoutForm() {
  const router = useRouter();
  const clearCart = useCartStore((s) => s.clearCart);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 800));
    clearCart();
    toast.success("Order placed successfully!");
    router.push("/order-success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <section className="rounded-xl border border-zinc-100 bg-white p-6">
        <h2 className="mb-4 text-lg font-bold text-zinc-900">
          Shipping Information
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Input
              label="Full Name"
              placeholder="John Doe"
              error={errors.fullName?.message}
              {...register("fullName")}
            />
          </div>
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 234 567 890"
            error={errors.phone?.message}
            {...register("phone")}
          />
          <div className="sm:col-span-2">
            <Input
              label="Address"
              placeholder="123 Main Street, Apt 4"
              error={errors.address?.message}
              {...register("address")}
            />
          </div>
          <Input
            label="City"
            placeholder="New York"
            error={errors.city?.message}
            {...register("city")}
          />
          <Input
            label="Postal Code"
            placeholder="10001"
            error={errors.postalCode?.message}
            {...register("postalCode")}
          />
        </div>
      </section>

      <section className="rounded-xl border border-zinc-100 bg-white p-6">
        <h2 className="mb-4 text-lg font-bold text-zinc-900">Payment Method</h2>
        <div className="flex items-center gap-3 rounded-lg border-2 border-zinc-900 bg-zinc-50 p-4">
          <CreditCard className="h-5 w-5 text-zinc-700" />
          <div>
            <p className="text-sm font-medium text-zinc-900">Credit / Debit Card</p>
            <p className="text-xs text-zinc-500">Demo — no real charge</p>
          </div>
          <span className="ml-auto inline-flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
        </div>
      </section>

      <Button type="submit" size="lg" loading={isSubmitting}>
        Place Order
      </Button>
    </form>
  );
}
