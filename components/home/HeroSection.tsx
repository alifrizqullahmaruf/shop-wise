import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
          Free shipping on orders over $50
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          Discover quality products
          <span className="block text-zinc-500">with a simple experience.</span>
        </h1>
        <p className="mb-10 text-lg text-zinc-500">
          Discover quality products with a simple and modern shopping experience.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-6 text-base font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Shop Now
          </Link>
          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
