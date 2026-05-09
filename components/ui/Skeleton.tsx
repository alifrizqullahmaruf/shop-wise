type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-zinc-200 ${className}`}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
      <Skeleton className="mb-4 h-48 w-full" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="mb-2 h-4 w-1/2" />
      <Skeleton className="mb-4 h-4 w-1/4" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}
