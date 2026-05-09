import { getProducts, getCategories } from "@/lib/api";
import { Container } from "@/components/layout/Container";
import { ProductsClient } from "@/components/product/ProductsClient";

type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <Container className="py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900">Products</h1>
        <p className="mt-1 text-zinc-500">
          {products.length} products available
        </p>
      </div>
      <ProductsClient
        products={products}
        categories={categories}
        initialCategory={category ?? ""}
      />
    </Container>
  );
}
