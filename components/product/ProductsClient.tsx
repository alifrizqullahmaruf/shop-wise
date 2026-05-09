"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductSearch } from "@/components/product/ProductSearch";
import { ProductFilter } from "@/components/product/ProductFilter";
import { ProductSort } from "@/components/product/ProductSort";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/types";
import type { SortOption } from "@/constants";

type ProductsClientProps = {
  products: Product[];
  categories: string[];
  initialCategory?: string;
};

export function ProductsClient({
  products,
  categories,
  initialCategory = "",
}: ProductsClientProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption | "">("");

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [products, activeCategory, search, sort]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-xs">
            <ProductSearch value={search} onChange={setSearch} />
          </div>
          <ProductSort value={sort} onChange={setSort} />
        </div>
        <ProductFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        <p className="text-sm text-zinc-500">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}
