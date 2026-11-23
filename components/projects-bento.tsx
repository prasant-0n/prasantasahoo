"use client";

import * as React from "react";
import Image from "next/image";
import { toast } from "sonner";
import {
  ExternalLink,
  Key,
  Layers,
  Copy,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SpotlightCard } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";

export function ProjectsBento() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

  const copyCreds = (text: string, label: string, keyId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyId);
    toast.success(`Copied ${label}: ${text}`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Flagship engineering showcases</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Production-Grade Enterprise Systems
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
          Tested, benchmarked, and live in cloud deployment. Click any link to test live instances with pre-seeded personas.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ========================================================= */}
        {/* CARD 1: JewelCore ERP (7 cols on lg) */}
        {/* ========================================================= */}
        <SpotlightCard className="lg:col-span-7">
          <BorderBeam size={280} duration={16} delay={0} />

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-100 border border-hairline flex items-center justify-center text-foreground font-mono font-medium text-xs">
                  JC
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                    JewelCore ERP
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    Bullion treasury &amp; vault custody platform
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-100 text-muted-foreground border border-hairline">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Live production</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Mission-critical resource planning and statutory compliance platform engineered for fine jewellery ateliers, bullion treasuries, and luxury retail salons. Enforces microsecond spot parity down to <strong className="text-foreground font-medium">0.001g precision</strong> via PostgreSQL pessimistic locks, preventing race condition metal losses.
            </p>

            {/* Core Architectural Pillars */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-100/70 border border-hairline">
                <span className="font-medium text-foreground block mb-1">0.001g Custody Metrology</span>
                <span className="text-muted-foreground text-[11px] leading-relaxed block">
                  Pessimistic row locking (<code className="text-foreground font-mono">SELECT FOR UPDATE</code>) across 75 PostgreSQL 17 tables, 47 migrations.
                </span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-100/70 border border-hairline">
                <span className="font-medium text-foreground block mb-1">Statutory Indian Compliance</span>
                <span className="text-muted-foreground text-[11px] leading-relaxed block">
                  BIS 6-char HUID (IS 1417:2016), Karigar Form GST ITC-04 mass balance &amp; NIC 64-char IRN E-Invoicing.
                </span>
              </div>
            </div>

            {/* Verified Test Metrics */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-mono text-muted-foreground">
              <span className="px-2 py-0.5 rounded bg-surface-100 border border-hairline">
                897 Vitest tests
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-100 border border-hairline">
                154 Playwright E2E
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-100 border border-hairline text-foreground">
                0 CodeQL CVEs
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-100 border border-hairline">
                15 workstations
              </span>
            </div>

            {/* 1-Click Interactive Login Persona Drawer */}
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-surface-100/60 border border-hairline">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-foreground font-medium">
                  <Key className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>1-Click test credentials</span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">
                  QuickLock PIN: <code className="text-foreground">1234</code>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                <button
                  onClick={() => copyCreds("rachel.r@jewelcore.internal", "Managing Director email", "jc-email")}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-50 border border-hairline hover:border-hairline-hover text-left transition-colors cursor-pointer"
                >
                  <div className="truncate">
                    <span className="text-muted-foreground block text-[10px]">Managing director (Admin):</span>
                    <span className="text-foreground truncate">rachel.r@jewelcore.internal</span>
                  </div>
                  {copiedKey === "jc-email" ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-1.5" />
                  )}
                </button>

                <button
                  onClick={() => copyCreds("JewelCore@2026", "Password", "jc-pw")}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-50 border border-hairline hover:border-hairline-hover text-left transition-colors cursor-pointer"
                >
                  <div>
                    <span className="text-muted-foreground block text-[10px]">Universal password:</span>
                    <span className="text-foreground">JewelCore@2026</span>
                  </div>
                  {copiedKey === "jc-pw" ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-1.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="px-6 py-4 sm:px-8 sm:py-4.5 border-t border-hairline bg-surface-100/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://jewel-core-erp.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
              >
                <span>Live web platform</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://jewelcore-erp-dsq7.onrender.com/api-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-50 border border-hairline text-foreground text-xs hover:border-hairline-hover transition-colors"
              >
                <span>Swagger docs</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </a>
            </div>

            <a
              href="https://github.com/prasant-0n/JewelCore-ERP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source repository</span>
            </a>
          </div>
        </SpotlightCard>

        {/* ========================================================= */}
        {/* CARD 2: NeuralDesk AI (5 cols on lg) */}
        {/* ========================================================= */}
        <SpotlightCard className="lg:col-span-5">
          <BorderBeam size={220} duration={14} delay={3} />

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-100 border border-hairline flex items-center justify-center text-foreground font-mono font-medium text-xs">
                  ND
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                    NeuralDesk
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    Visual AI workflow intelligence
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-100 text-muted-foreground border border-hairline">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Live on Vercel</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Autonomous multi-model AI agent orchestrator transforming black-box LLM pipelines into inspectable Directed Acyclic Graphs (DAGs). Prevents infinite execution loops via in-memory <strong className="text-foreground font-medium">Kahn’s Topological Sorting</strong> (O(V + E)).
            </p>

            {/* Real Screenshot Preview */}
            <div
              className="mt-5 relative rounded-xl border border-hairline overflow-hidden group/img cursor-pointer"
              onClick={() => setSelectedImage("/assets/neuraldesk/01-workflow-canvas.png")}
            >
              <div className="relative h-44 w-full bg-surface-100">
                <Image
                  src="/assets/neuraldesk/01-workflow-canvas.png"
                  alt="NeuralDesk visual DAG workflow canvas"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-foreground font-medium">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to expand canvas</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Microsecond SSE telemetry: Real-time P50, P90, P99 SLAs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Gemini 1.5/2.0 + MurmurHash3 seeded deterministic simulation</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="px-6 py-4 sm:px-8 sm:py-4.5 border-t border-hairline bg-surface-100/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://neuraldesk-lovat.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
              >
                <span>Live canvas</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://neuraldesk-xfe2.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-50 border border-hairline text-foreground text-xs hover:border-hairline-hover transition-colors"
              >
                <span>Scalar API</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </a>
            </div>

            <a
              href="https://github.com/prasant-0n/NeuralDesk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source code</span>
            </a>
          </div>
        </SpotlightCard>

        {/* ========================================================= */}
        {/* CARD 3: OpsEngine (6 cols on lg) */}
        {/* ========================================================= */}
        <SpotlightCard className="lg:col-span-6">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-100 border border-hairline flex items-center justify-center text-foreground font-mono font-medium text-xs">
                  OE
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                    OpsEngine
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    Multi-tenant SaaS operations OS
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-100 text-muted-foreground border border-hairline">
                76,755 LOC monorepo
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Enterprise multi-tenant operating system unifying CRM, Workforce Scheduling, Presales Estimation, Statutory Payroll, and Double-Entry ERP Sync into a high-performance Next.js 16 App Router architecture across 97 Prisma domain models.
            </p>

            {/* Zero-Cost Mesh Breakdown */}
            <div className="mt-5 p-4 sm:p-5 rounded-xl bg-surface-100/70 border border-hairline">
              <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                <span className="text-foreground font-medium">Zero-cost ($0.00/mo) cloud DevOps mesh</span>
                <span className="text-emerald-400 font-medium">$0.00 forever</span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 text-[11px] font-mono text-muted-foreground">
                <div className="p-2 sm:p-2.5 rounded-lg bg-surface-50 border border-hairline">
                  <span className="block text-foreground text-[10px]">Database:</span>
                  <span>Neon Postgres</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-surface-50 border border-hairline">
                  <span className="block text-foreground text-[10px]">Storage:</span>
                  <span>Cloudflare R2</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-surface-50 border border-hairline">
                  <span className="block text-foreground text-[10px]">Edge compute:</span>
                  <span>Vercel Edge</span>
                </div>
              </div>
            </div>

            {/* Seed Credentials */}
            <div className="mt-4 flex items-center justify-between p-3 rounded-lg bg-surface-100/50 border border-hairline text-[11px] font-mono">
              <span className="text-muted-foreground">Tenant superadmin:</span>
              <button
                onClick={() => copyCreds("admin@acme.opsengine.enterprise", "OpsEngine admin", "oe-admin")}
                className="flex items-center gap-1.5 text-foreground hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <code>admin@acme.opsengine.enterprise</code>
                {copiedKey === "oe-admin" ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          <div className="px-6 py-4 sm:px-8 sm:py-4.5 border-t border-hairline bg-surface-100/30 flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground">
              509 Passing Vitest tests (6.77s)
            </span>
            <a
              href="https://github.com/prasant-0n/opsengine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-50 border border-hairline text-foreground text-xs hover:border-hairline-hover transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Explore monorepo</span>
            </a>
          </div>
        </SpotlightCard>

        {/* ========================================================= */}
        {/* CARD 4: PayPulse High-Throughput Pipeline (6 cols on lg) */}
        {/* ========================================================= */}
        <SpotlightCard className="lg:col-span-6">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-100 border border-hairline flex items-center justify-center text-foreground font-mono font-medium text-xs">
                  PP
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                    PayPulse Engine
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    High-throughput idempotent ledger
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-100 text-muted-foreground border border-hairline">
                k6 benchmarked
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Concurrency-safe double-entry financial ledger and asynchronous webhook delivery pipeline. Eliminates race-condition double-spending and network mutation duplicates via custom SHA-256 idempotency headers.
            </p>

            {/* k6 Benchmark Metrics */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-100/70 border border-hairline">
                <span className="text-lg sm:text-xl font-semibold font-mono text-foreground block tabular-nums">
                  950
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  req/sec throughput
                </span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-100/70 border border-hairline">
                <span className="text-lg sm:text-xl font-semibold font-mono text-emerald-400 block tabular-nums">
                  &lt;28ms
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  p95 latency
                </span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-100/70 border border-hairline">
                <span className="text-lg sm:text-xl font-semibold font-mono text-foreground block tabular-nums">
                  3,000+
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  virtual users
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Deterministic UUID sorted locks eliminate database deadlocks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>BullMQ Dead-Letter Queues (DLQ) with exponential backoff retries</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 sm:px-8 sm:py-4.5 border-t border-hairline bg-surface-100/30 flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground">
              Zero race conditions across 10,000 transfers
            </span>
            <button
              onClick={() => {
                const el = document.getElementById("architecture");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-50 border border-hairline text-foreground text-xs hover:border-hairline-hover transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-muted-foreground" />
              <span>View system architecture →</span>
            </button>
          </div>
        </SpotlightCard>
      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-hairline bg-surface-50 p-2 shadow-2xl">
            <div className="relative h-[70vh] w-full">
              <Image
                src={selectedImage}
                alt="Expanded UI view"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-3 text-center text-xs font-mono text-muted-foreground">
              Click anywhere outside or press ESC to close lightbox
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
