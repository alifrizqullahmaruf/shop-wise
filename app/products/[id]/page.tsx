import { notFound } from "next/navigation";
import { getProduct, getProductsByCategory } from "@/lib/api";
import { Container } from "@/components/layout/Container";
import { ProductDetail } from "@/components/product/ProductDetail";
import { RelatedProducts } from "@/components/product/RelatedProducts";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number(id);

  if (isNaN(productId)) notFound();

  let product;
  try {
    product = await getProduct(productId);
  } catch {
    notFound();
  }

  const related = await getProductsByCategory(product.category);

  return (
    <Container className="py-10">
      <ProductDetail product={product} />
      <RelatedProducts products={related} currentId={product.id} />
    </Container>
  );
}
