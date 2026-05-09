import { API_BASE_URL } from "@/constants";
import type { Product } from "@/types";

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, init);
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export async function getProducts(): Promise<Product[]> {
  return apiFetch<Product[]>("/products");
}

export async function getProduct(id: number): Promise<Product> {
  return apiFetch<Product>(`/products/${id}`);
}

export async function getCategories(): Promise<string[]> {
  return apiFetch<string[]>("/products/categories");
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return apiFetch<Product[]>(
    `/products/category/${encodeURIComponent(category)}`
  );
}

export async function login(
  username: string,
  password: string
): Promise<{ token: string }> {
  return apiFetch<{ token: string }>("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}
