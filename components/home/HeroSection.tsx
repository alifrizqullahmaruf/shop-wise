import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-20 lg:py-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-125 w-125 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute -bottom-32 right-0 h-100 w-100 rounded-full bg-orange-500/10 blur-[80px]" />
        <div className="absolute left-1/2 top-1/3 h-75 w-75 -translate-x-1/2 rounded-full bg-amber-400/5 blur-[60px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Pill badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            New arrivals every week · Free shipping $50+
          </div>

          {/* Headline */}
          <h1
            className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Discover
            <span className="block bg-linear-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Quality Products
            </span>
            <span className="block text-stone-400 text-4xl sm:text-5xl lg:text-6xl font-bold">
              you&apos;ll love.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg leading-relaxed text-stone-400 sm:text-xl">
            A modern shopping experience — electronics, fashion, jewelry and more.
            Curated for quality, delivered to your door.
          </p>

          {/* CTAs */}
          <div className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-amber-500 px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-amber-500/30 transition-all hover:bg-amber-400 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex h-13 items-center justify-center rounded-2xl border border-stone-700 bg-stone-900/50 px-8 py-3.5 text-base font-semibold text-stone-300 transition-all hover:border-stone-500 hover:text-white hover:bg-stone-800"
            >
              Explore Products
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-stone-800 pt-10 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-amber-500" />
              <span>Free shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-amber-500" />
              <span>30-day returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">200+</span>
              <span>products</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">4</span>
              <span>categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
