import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PackageX } from "lucide-react";

export default function ProductNotFound() {
  return (
    <Container className="py-20">
      <EmptyState
        icon={<PackageX className="h-8 w-8" />}
        title="Product not found"
        description="The product you are looking for does not exist or has been removed."
        action={
          <Link
            href="/products"
            className="inline-flex h-10 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-700"
          >
            Back to Products
          </Link>
        }
      />
    </Container>
  );
}
