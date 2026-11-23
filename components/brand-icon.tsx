import * as React from "react";

export function BrandIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        className="fill-surface-100 dark:fill-[#0f0f11] stroke-black/10 dark:stroke-white/20 transition-colors"
        strokeWidth="1"
      />
      {/* Top subtle glare accent */}
      <line
        x1="7"
        y1="1.5"
        x2="25"
        y2="1.5"
        className="stroke-black/10 dark:stroke-white/25"
        strokeLinecap="round"
      />
      {/* P Stem & Loop */}
      <path
        d="M9.5 8.5v15M9.5 8.5h5.5a3.75 3.75 0 0 1 0 7.5H9.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />
      {/* S Curve */}
      <path
        d="M18 12.5h3.2a2.2 2.2 0 0 1 0 4.4h-2.8a2.2 2.2 0 0 0 0 4.4H22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"
      />
      {/* Emerald Live Status Beacon */}
      <circle cx="24.5" cy="7.5" r="3.5" fill="#10b981" opacity="0.25" />
      <circle cx="24.5" cy="7.5" r="2" fill="#34d399" />
    </svg>
  );
}
