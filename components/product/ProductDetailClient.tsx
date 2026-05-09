"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle, PackageX } from "lucide-react";
import { getProduct, getProductsByCategory } from "@/lib/api";
import { Container } from "@/components/layout/Container";
import { ProductDetail } from "@/components/product/ProductDetail";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { EmptyState } from "@/components/ui/EmptyState";
import { Skeleton } from "@/components/ui/Skeleton";
import type { Product } from "@/types";

export function ProductDetailClient() {
  const params = useParams<{ id: string }>();
  const productId = Number(params.id);

  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<"none" | "notfound" | "fetch">("none");

  useEffect(() => {
    if (isNaN(productId)) {
      setError("notfound");
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError("none");

    getProduct(productId)
      .then(async (p) => {
        if (cancelled) return;
        setProduct(p);
        try {
          const rel = await getProductsByCategory(p.category);
          if (!cancelled) setRelated(rel);
        } catch {
          // related is optional, ignore failure
        }
      })
      .catch((err) => {
        if (cancelled) return;
        const msg = String(err?.message ?? "");
        if (msg.includes("404")) setError("notfound");
        else setError("fetch");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [productId]);

  if (loading) {
    return (
      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Skeleton className="h-80 w-full lg:h-[500px]" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </Container>
    );
  }

  if (error === "notfound") {
    return (
      <Container className="py-20">
        <EmptyState
          icon={<PackageX className="h-8 w-8" />}
          title="Product not found"
          description="The product you are looking for does not exist or has been removed."
          action={
            <Link
              href="/products"
              className="inline-flex h-10 items-center rounded-xl bg-amber-500 px-4 text-sm font-semibold text-white shadow-md shadow-amber-200 hover:bg-amber-600"
            >
              Back to Products
            </Link>
          }
        />
      </Container>
    );
  }

  if (error === "fetch" || !product) {
    return (
      <Container className="py-20">
        <EmptyState
          icon={<AlertCircle className="h-8 w-8" />}
          title="Failed to load product"
          description="Please refresh the page to try again."
        />
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <ProductDetail product={product} />
      <RelatedProducts products={related} currentId={product.id} />
    </Container>
  );
}
