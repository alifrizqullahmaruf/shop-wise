"use client";

import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { getProducts, getCategories } from "@/lib/api";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryShortcut } from "@/components/home/CategoryShortcut";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BenefitSection } from "@/components/home/BenefitSection";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProductCardSkeleton } from "@/components/ui/Skeleton";
import type { Product } from "@/types";

export function HomeClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([getProducts(), getCategories()])
      .then(([p, c]) => {
        setProducts(p);
        setCategories(c);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <HeroSection />
      <BenefitSection />
      <Container>
        {error ? (
          <div className="py-20">
            <EmptyState
              icon={<AlertCircle className="h-8 w-8" />}
              title="Failed to load products"
              description="Please refresh the page to try again."
            />
          </div>
        ) : loading ? (
          <>
            <div className="py-12">
              <div className="mb-8 text-center">
                <div className="mx-auto h-9 w-64 animate-pulse rounded-lg bg-stone-200" />
                <div className="mx-auto mt-2 h-5 w-48 animate-pulse rounded-lg bg-stone-200" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-32 animate-pulse rounded-2xl bg-stone-200" />
                ))}
              </div>
            </div>
            <div className="py-14">
              <div className="mb-8 h-9 w-48 animate-pulse rounded-lg bg-stone-200" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <CategoryShortcut categories={categories} />
            <FeaturedProducts products={products} />
          </>
        )}
      </Container>
    </div>
  );
}
