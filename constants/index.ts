export const API_BASE_URL = "https://fakestoreapi.com";

export const BADGE_THRESHOLDS = {
  BEST_RATED_MIN_RATE: 4.5,
  POPULAR_CHOICE_MIN_COUNT: 300,
  BUDGET_PICK_MAX_PRICE: 50,
  PREMIUM_ITEM_MIN_PRICE: 200,
} as const;

export const SORT_OPTIONS = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Rating: Highest" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];

export const DEMO_CREDENTIALS = {
  username: "mor_2314",
  password: "83r5^_",
} as const;
