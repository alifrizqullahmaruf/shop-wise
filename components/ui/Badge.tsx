export type BadgeColor = "zinc" | "green" | "blue" | "amber" | "purple";

type BadgeProps = {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
};

const colorClasses: Record<BadgeColor, string> = {
  zinc: "bg-zinc-100 text-zinc-700",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
  purple: "bg-purple-100 text-purple-700",
};

export function Badge({ children, color = "zinc", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
}
