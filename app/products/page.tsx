import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { ProductsClient } from "@/components/product/ProductsClient";
import { ProductCardSkeleton } from "@/components/ui/Skeleton";

function ProductsPageFallback() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Container className="py-10">
      <div className="mb-8">
        <h1
          className="text-3xl font-extrabold text-stone-900"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          All Products
        </h1>
        <p className="mt-1 text-stone-500">Browse our complete collection</p>
      </div>
      <Suspense fallback={<ProductsPageFallback />}>
        <ProductsClient />
      </Suspense>
    </Container>
  );
}
