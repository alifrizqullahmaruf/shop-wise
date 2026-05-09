"use client";

import { SORT_OPTIONS } from "@/constants";
import type { SortOption } from "@/constants";

type ProductSortProps = {
  value: SortOption | "";
  onChange: (value: SortOption | "") => void;
};

export function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption | "")}
      className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-700 outline-none transition-colors focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
    >
      <option value="">Sort by</option>
      {SORT_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
