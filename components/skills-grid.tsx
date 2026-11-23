"use client";

import * as React from "react";
import { toast } from "sonner";
import { Server, Database, Cloud, ShieldAlert, Copy, CheckCircle2 } from "lucide-react";

interface SkillItem {
  name: string;
  detail: string;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & distributed systems",
    badge: "Node.js & microservices",
    icon: Server,
    skills: [
      {
        name: "Node.js (v20/22 LTS)",
        detail: "Non-blocking event loop, stream pipelines, worker threads",
        highlight: true,
      },
      {
        name: "Express.js 5",
        detail: "Fastify-core architecture, custom middleware engines",
      },
      {
        name: "TypeScript 5.6",
        detail: "Strict compiler flags, branded types, discriminated unions",
        highlight: true,
      },
      {
        name: "NestJS",
        detail: "Modular dependency injection, interceptors, guards",
      },
      {
        name: "RESTful API design",
        detail: "RFC 7807 problem details, correlation ID tracing",
      },
      {
        name: "Microservices",
        detail: "Decoupled domain bounded contexts, transactional outbox",
      },
      {
        name: "BullMQ 5",
        detail: "Asynchronous job queues, exponential retries, DLQ",
        highlight: true,
      },
      {
        name: "WebSockets & SSE",
        detail: "Real-time microsecond telemetry broadcast pipelines",
      },
    ],
  },
  {
    title: "Databases, ledgers & storage",
    badge: "PostgreSQL & caching",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL 17",
        detail: "75 tables, ACID ledgers, 47 schema migrations",
        highlight: true,
      },
      {
        name: "Pessimistic row locks",
        detail: "SELECT FOR UPDATE down to 0.001g precision",
        highlight: true,
      },
      {
        name: "Neon serverless",
        detail: "Dual pooled PgBouncer & direct DDL connection meshes",
      },
      {
        name: "Redis 7 & Redlock",
        detail: "In-memory caching, distributed mutex locking",
        highlight: true,
      },
      {
        name: "Prisma ORM 5",
        detail: "97 strongly-typed models, relational query maps",
        highlight: true,
      },
      {
        name: "Drizzle ORM",
        detail: "Lightweight SQL-like schema definitions with zero runtime bloat",
      },
      {
        name: "BigInt financials",
        detail: "Integer-cent math eliminating floating-point drift",
        highlight: true,
      },
      {
        name: "Cloudflare R2",
        detail: "Zero-egress S3-compatible document storage",
      },
    ],
  },
  {
    title: "Cloud, DevOps & tooling",
    badge: "CI/CD & serverless mesh",
    icon: Cloud,
    skills: [
      {
        name: "Turborepo 2",
        detail: "High-velocity pnpm workspaces, remote build caching",
        highlight: true,
      },
      {
        name: "Docker & OCI",
        detail: "Multi-stage minimal Alpine images, GHCR registry",
      },
      {
        name: "Kubernetes (K8s)",
        detail: "StatefulSets, Horizontal Pod Autoscalers (HPA)",
      },
      {
        name: "GitHub Actions CI/CD",
        detail: "7 automated workflow pipelines with quality gates",
        highlight: true,
      },
      {
        name: "Next.js 16 App Router",
        detail: "React Server Components (RSC), Server Actions",
        highlight: true,
      },
      {
        name: "Vercel Edge & Render",
        detail: "Hybrid edge network deployment and container services",
      },
      {
        name: "Linux / Bash",
        detail: "Shell automation, process monitoring, systemd",
      },
      {
        name: "Zero-cost cloud mesh",
        detail: "Neon + Cloudflare R2 + Vercel Edge ($0.00/month)",
        highlight: true,
      },
    ],
  },
  {
    title: "Security, FinTech & testing",
    badge: "ReBAC & verification",
    icon: ShieldAlert,
    skills: [
      {
        name: "ReBAC authorization",
        detail: "Hierarchical scopes (Tenant/SBU/Team/Reporting-Tree)",
        highlight: true,
      },
      {
        name: "Segregation of Duties",
        detail: "Strict policy forbidding self-approval on financial flows",
        highlight: true,
      },
      {
        name: "Argon2id & TOTP 2FA",
        detail: "Modern cryptographic key derivation and step-up auth",
      },
      {
        name: "GitHub CodeQL (0 CVEs)",
        detail: "Automated static analysis clean of vulnerabilities",
        highlight: true,
      },
      {
        name: "Vitest (1,406+ tests)",
        detail: "Unit, domain, and negative security testing suites",
        highlight: true,
      },
      {
        name: "Playwright E2E",
        detail: "Multi-browser user journey verification (Chromium)",
      },
      {
        name: "k6 stress benchmarking",
        detail: "Load testing sustaining 950 req/sec under 3,000 VUs",
        highlight: true,
      },
      {
        name: "Indian FinTech compliance",
        detail: "BIS 6-char HUID, Form GST ITC-04, NIC IRN E-Invoicing",
      },
    ],
  },
];

export function SkillsGrid() {
  const [copiedSkill, setCopiedSkill] = React.useState<string | null>(null);

  const handleCopySkill = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedSkill(name);
    toast.success(`Copied ATS keyword: ${name}`);
    setTimeout(() => setCopiedSkill(null), 2000);
  };

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-hairline">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Unified competencies matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Core Engineering Strengths
          </h2>
        </div>
        <div className="mt-3 md:mt-0 flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Copy className="w-3.5 h-3.5 text-muted-foreground/80" />
          <span>Click any skill to copy ATS keyword</span>
        </div>
      </div>

      {/* Authoritative 4-Column Competencies Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="p-5 sm:p-6 rounded-2xl bg-surface-50 border border-hairline hover:border-hairline-hover transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Column Category Header */}
                <div className="flex items-center gap-2.5 mb-4 pb-3.5 border-b border-hairline">
                  <div className="w-7 h-7 rounded-md bg-surface-100 border border-hairline flex items-center justify-center text-foreground">
                    <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[10px] font-mono text-muted-foreground block">
                      {category.badge}
                    </span>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => {
                    const isCopied = copiedSkill === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => handleCopySkill(skill.name)}
                        className={`w-full p-3 rounded-xl border text-left transition-colors cursor-pointer group ${
                          skill.highlight
                            ? "bg-surface-100/70 border-hairline hover:border-hairline-hover"
                            : "bg-surface-50 border-hairline hover:border-hairline-hover"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-medium text-foreground group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                          </span>
                          {isCopied ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : skill.highlight ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          ) : null}
                        </div>
                        <span className="text-[11px] text-muted-foreground block mt-1 line-clamp-2 leading-tight">
                          {skill.detail}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
