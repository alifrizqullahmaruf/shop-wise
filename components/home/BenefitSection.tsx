import { Truck, RotateCcw, ShieldCheck, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $50",
    color: "bg-blue-100 text-blue-600",
    ring: "ring-blue-200",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
    color: "bg-emerald-100 text-emerald-600",
    ring: "ring-emerald-200",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your data is protected",
    color: "bg-amber-100 text-amber-600",
    ring: "ring-amber-200",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options",
    color: "bg-violet-100 text-violet-600",
    ring: "ring-violet-200",
  },
];

export function BenefitSection() {
  return (
    <section className="border-y border-stone-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description, color, ring }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all hover:bg-stone-50"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${color} ${ring}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900">{title}</p>
                <p className="mt-0.5 text-xs text-stone-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
