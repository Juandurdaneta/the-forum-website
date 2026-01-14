import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <div className="w-[140px] h-[45px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="The Forum"
          width={280}
          height={120}
          className={`scale-[1.8] ${variant === "light" ? "brightness-0 invert" : ""}`}
          priority
        />
      </div>
    </Link>
  );
}
