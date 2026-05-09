import { Badge } from "@/components/ui/Badge";
import { getProductBadge } from "@/lib/badge";
import type { Product } from "@/types";
import type { BadgeColor } from "@/components/ui/Badge";

const badgeConfig: Record<string, { color: BadgeColor; emoji: string }> = {
  "Best Rated":      { color: "green",  emoji: "⭐" },
  "Popular Choice":  { color: "blue",   emoji: "🔥" },
  "Budget Pick":     { color: "amber",  emoji: "💰" },
  "Premium Item":    { color: "purple", emoji: "👑" },
  "Standard Product":{ color: "zinc",   emoji: "•"  },
};

type ProductBadgeProps = {
  product: Product;
};

export function ProductBadge({ product }: ProductBadgeProps) {
  const label = getProductBadge(product);
  const { color, emoji } = badgeConfig[label] ?? { color: "zinc" as BadgeColor, emoji: "•" };
  return (
    <Badge color={color}>
      {emoji !== "•" && <span className="mr-1">{emoji}</span>}
      {label}
    </Badge>
  );
}
