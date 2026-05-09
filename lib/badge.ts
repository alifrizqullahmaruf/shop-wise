import { BADGE_THRESHOLDS } from "@/constants";
import type { Product } from "@/types";

export type BadgeLabel =
  | "Best Rated"
  | "Popular Choice"
  | "Budget Pick"
  | "Premium Item"
  | "Standard Product";

export function getProductBadge(product: Product): BadgeLabel {
  if (product.rating.rate >= BADGE_THRESHOLDS.BEST_RATED_MIN_RATE)
    return "Best Rated";
  if (product.rating.count >= BADGE_THRESHOLDS.POPULAR_CHOICE_MIN_COUNT)
    return "Popular Choice";
  if (product.price <= BADGE_THRESHOLDS.BUDGET_PICK_MAX_PRICE)
    return "Budget Pick";
  if (product.price >= BADGE_THRESHOLDS.PREMIUM_ITEM_MIN_PRICE)
    return "Premium Item";
  return "Standard Product";
}
