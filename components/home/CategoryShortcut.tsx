"use client";

import Link from "next/link";

type CategoryShortcutProps = {
  categories: string[];
};

const categoryEmoji: Record<string, string> = {
  "electronics": "💻",
  "jewelery": "💍",
  "men's clothing": "👔",
  "women's clothing": "👗",
};

export function CategoryShortcut({ categories }: CategoryShortcutProps) {
  return (
    <section className="py-10">
      <h2 className="mb-6 text-center text-xl font-semibold text-zinc-900">
        Shop by Category
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/products?category=${encodeURIComponent(cat)}`}
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-zinc-400 hover:shadow-md capitalize"
          >
            <span>{categoryEmoji[cat] ?? "🛍️"}</span>
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
}
