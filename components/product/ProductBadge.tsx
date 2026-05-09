import { Badge } from "@/components/ui/Badge";
import { getProductBadge } from "@/lib/badge";
import type { Product } from "@/types";
import type { BadgeColor } from "@/components/ui/Badge";

const badgeColors: Record<string, BadgeColor> = {
  "Best Rated": "green",
  "Popular Choice": "blue",
  "Budget Pick": "amber",
  "Premium Item": "purple",
  "Standard Product": "zinc",
};

type ProductBadgeProps = {
  product: Product;
};

export function ProductBadge({ product }: ProductBadgeProps) {
  const label = getProductBadge(product);
  return <Badge color={badgeColors[label]}>{label}</Badge>;
}
