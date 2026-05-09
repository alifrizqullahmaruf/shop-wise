"use client";

import Link from "next/link";

type CategoryShortcutProps = {
  categories: string[];
};

const categoryConfig: Record<string, { emoji: string; gradient: string; text: string }> = {
  "electronics":     { emoji: "💻", gradient: "from-blue-500 to-indigo-600",   text: "text-blue-50"   },
  "jewelery":        { emoji: "💍", gradient: "from-amber-400 to-yellow-500",  text: "text-amber-950" },
  "men's clothing":  { emoji: "👔", gradient: "from-slate-700 to-stone-900",   text: "text-stone-50"  },
  "women's clothing":{ emoji: "👗", gradient: "from-rose-400 to-pink-600",     text: "text-rose-50"   },
};

const defaultConfig = { emoji: "🛍️", gradient: "from-stone-400 to-stone-600", text: "text-stone-50" };

export function CategoryShortcut({ categories }: CategoryShortcutProps) {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2
          className="text-2xl font-extrabold text-stone-900 sm:text-3xl"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Shop by Category
        </h2>
        <p className="mt-2 text-stone-500">Find exactly what you&apos;re looking for</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((cat) => {
          const cfg = categoryConfig[cat] ?? defaultConfig;
          return (
            <Link
              key={cat}
              href={`/products?category=${encodeURIComponent(cat)}`}
              className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${cfg.gradient} p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5`}
            >
              {/* Decorative circle */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-black/10" />

              <div className="relative">
                <span className="mb-3 block text-3xl">{cfg.emoji}</span>
                <p className={`text-sm font-bold capitalize leading-tight ${cfg.text}`}>
                  {cat}
                </p>
                <p className={`mt-1 text-xs font-medium opacity-75 ${cfg.text}`}>
                  Shop now →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
