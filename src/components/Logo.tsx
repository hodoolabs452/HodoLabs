import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105">
        <svg
          className="h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Hodo<span className="text-indigo-600">Labs</span>
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] font-medium text-slate-500 tracking-normal mt-0.5">
            Digital Learning Experiences
          </span>
        )}
      </div>
    </Link>
  );
}
