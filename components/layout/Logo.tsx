import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-brand-black" : "text-white";

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <div className="flex flex-col items-center">
        <span
          className={`text-[10px] tracking-[0.4em] font-body font-medium ${textColor} mb-0.5`}
        >
          T H E
        </span>
        <span
          className={`font-heading text-3xl font-semibold tracking-wide ${textColor}`}
          style={{ fontFeatureSettings: '"liga" 1, "kern" 1' }}
        >
          FORUM
        </span>
      </div>
    </Link>
  );
}
