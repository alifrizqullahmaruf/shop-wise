import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "dark";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-500 text-white shadow-amber-200 hover:bg-amber-600 shadow-md hover:shadow-lg hover:shadow-amber-200 disabled:bg-amber-300",
  secondary:
    "bg-white text-stone-800 border border-stone-200 hover:bg-stone-50 hover:border-stone-300 shadow-sm disabled:opacity-50",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 disabled:opacity-50",
  danger:
    "bg-red-500 text-white hover:bg-red-600 shadow-sm disabled:bg-red-300",
  dark:
    "bg-stone-900 text-white hover:bg-stone-800 shadow-sm disabled:bg-stone-400",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs font-semibold",
  md: "h-10 px-4 text-sm font-semibold",
  lg: "h-12 px-6 text-sm font-semibold",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", loading = false, disabled, className = "", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:shadow-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
