"use client";

import * as React from "react";
import { ShieldCheck, GitBranch, Database, Cpu, Activity, Coins, Server } from "lucide-react";

interface MetricItem {
  label: string;
  value: string;
  unit: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
}

const METRICS: MetricItem[] = [
  {
    label: "Monorepo Codebase",
    value: "76,755",
    unit: "LOC",
    subtext: "Turborepo 2 • 46 modules",
    icon: GitBranch,
  },
  {
    label: "Prisma Domain Models",
    value: "97",
    unit: "models",
    subtext: "PostgreSQL 17 ACID schemas",
    icon: Database,
  },
  {
    label: "Automated Test Suites",
    value: "1,406+",
    unit: "tests",
    subtext: "Vitest (1,252) + Playwright (154)",
    icon: Activity,
  },
  {
    label: "CodeQL Security Gate",
    value: "0",
    unit: "CVEs",
    subtext: "Clean static analysis audit",
    icon: ShieldCheck,
  },
  {
    label: "Custody Metrology",
    value: "0.001g",
    unit: "precision",
    subtext: "SELECT FOR UPDATE row locks",
    icon: Coins,
  },
  {
    label: "Sustained Throughput",
    value: "950",
    unit: "req/sec",
    subtext: "<28ms p95 (3,000+ VUs)",
    icon: Cpu,
  },
  {
    label: "Cloud DevOps Mesh",
    value: "$0.00",
    unit: "/month",
    subtext: "Neon + Cloudflare R2 + Vercel",
    icon: Server,
  },
];

export function MetricsStrip() {
  return (
    <section className="border-y border-hairline bg-surface-50/40 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-3.5">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-surface-50 border border-hairline hover:border-hairline-hover transition-colors"
              >
                <div className="flex items-center justify-between text-muted-foreground/80 mb-2">
                  <span className="text-[11px] font-mono text-muted-foreground truncate">
                    {metric.label}
                  </span>
                  <Icon className="w-3.5 h-3.5 text-muted-foreground/70 shrink-0 ml-1" />
                </div>

                <div className="flex items-baseline gap-1.5 my-0.5">
                  <span className="text-xl sm:text-2xl font-semibold font-mono tracking-tight text-foreground tabular-nums">
                    {metric.value}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {metric.unit}
                  </span>
                </div>

                <span className="text-[11px] text-muted-foreground/80 mt-1 truncate">
                  {metric.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
