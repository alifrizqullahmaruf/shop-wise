"use client";

type ProductFilterProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export function ProductFilter({
  categories,
  activeCategory,
  onChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("")}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          activeCategory === ""
            ? "bg-zinc-900 text-white"
            : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
            activeCategory === cat
              ? "bg-zinc-900 text-white"
              : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
