import { getProducts, getCategories } from "@/lib/api";

export const dynamic = "force-dynamic";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryShortcut } from "@/components/home/CategoryShortcut";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BenefitSection } from "@/components/home/BenefitSection";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div>
      <HeroSection />
      <BenefitSection />
      <Container>
        <CategoryShortcut categories={categories} />
        <FeaturedProducts products={products} />
      </Container>
    </div>
  );
}
