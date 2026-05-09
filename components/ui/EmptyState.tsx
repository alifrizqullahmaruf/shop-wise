import { PackageOpen } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
};

export function EmptyState({
  title = "Nothing here",
  description,
  action,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
        {icon ?? <PackageOpen className="h-8 w-8" />}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold text-zinc-900">{title}</p>
        {description && (
          <p className="max-w-xs text-sm text-zinc-500">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
