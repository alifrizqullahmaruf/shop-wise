export type BadgeColor = "zinc" | "green" | "blue" | "amber" | "purple" | "rose";

type BadgeProps = {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
};

const colorClasses: Record<BadgeColor, string> = {
  zinc:   "bg-stone-100 text-stone-600 ring-1 ring-stone-200",
  green:  "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  blue:   "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
  amber:  "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  purple: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
  rose:   "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
};

export function Badge({ children, color = "zinc", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
}
