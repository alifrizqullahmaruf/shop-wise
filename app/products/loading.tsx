import { Container } from "@/components/layout/Container";
import { ProductCardSkeleton } from "@/components/ui/Skeleton";

export default function ProductsLoading() {
  return (
    <Container className="py-10">
      <div className="mb-8">
        <div className="h-9 w-32 animate-pulse rounded-lg bg-zinc-200" />
        <div className="mt-1 h-5 w-48 animate-pulse rounded-lg bg-zinc-200" />
      </div>
      <div className="mb-6 flex flex-col gap-4">
        <div className="h-10 w-full animate-pulse rounded-lg bg-zinc-200 sm:max-w-xs" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 animate-pulse rounded-full bg-zinc-200"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
