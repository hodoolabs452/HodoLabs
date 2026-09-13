import Link from "next/link";
import Image from "next/image";

const OFFICIAL_LOGO_URL =
  "https://res.cloudinary.com/kyvmgbzw/image/upload/v1789295065/hodoo_labs_Logo.png";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <div className="relative flex items-center rounded-lg px-1 py-0.5 dark:bg-white/95 dark:shadow-xs transition-colors">
        <Image
          src={OFFICIAL_LOGO_URL}
          alt="HodoLabs"
          width={150}
          height={100}
          priority
          className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
        />
      </div>
      {showTagline && (
        <span className="hidden sm:inline-block text-xs font-medium text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-800 pl-2.5">
          Digital Learning Experiences
        </span>
      )}
    </Link>
  );
}
