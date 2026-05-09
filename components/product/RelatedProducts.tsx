import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types";

type RelatedProductsProps = {
  products: Product[];
  currentId: number;
};

export function RelatedProducts({ products, currentId }: RelatedProductsProps) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);
  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-900">Related Products</h2>
        <Link
          href="/products"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
