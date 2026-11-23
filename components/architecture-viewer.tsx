"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Layers,
  Shield,
  ArrowRight,
} from "lucide-react";

interface LayerDetail {
  tier: string;
  tech: string;
  description: string;
  protocol: string;
  points: string[];
}

interface ArchTab {
  id: string;
  name: string;
  badge: string;
  title: string;
  subtitle: string;
  layers: LayerDetail[];
  securityNote: string;
}

const ARCHITECTURES: ArchTab[] = [
  {
    id: "jewelcore",
    name: "JewelCore ERP",
    badge: "Bullion metrology & vault custody",
    title: "Mission-critical 4-tier topology & dual-custody governance",
    subtitle:
      "Engineered for sub-milligram precision (0.001g), hardware load-cell telemetry, and strict statutory compliance (BIS IS 1417:2016, Form GST ITC-04, NIC IRN).",
    layers: [
      {
        tier: "Client & workstations",
        tech: "Next.js 15 (React 19) • Mettler Toledo RS-232 • Impinj R420",
        description:
          "15 specialized workstation consoles across showroom, analytical assaying, vault, and karigar ateliers.",
        protocol: "HTTPS / TLS 1.3 & Serial RS-232 / LLRP sweeps",
        points: [
          "Mettler Toledo RS-232 auto-tare gravimetric weighing scales",
          "Impinj Speedway R420 360° UHF RFID batch intake sweeps",
          "Showroom QuickLock Terminal PIN (1234) for POS cashiers",
        ],
      },
      {
        tier: "API & telemetry gateway",
        tech: "Node.js 22 • Express 5 • Argon2id • Zod schema validation",
        description:
          "High-performance REST API gateway enforcing Policy-Based Access Control (PBAC) role tokens.",
        protocol: "REST API (RFC 7807 errors) & SSE telemetry stream",
        points: [
          "Decouples staff job titles from cryptographic PBAC tokens (ADMIN, MANAGER, STAFF)",
          "High-assurance two-person quorum rule for bullion transfers ≥ ₹1,000,000",
          "WebCrypto ECDSA hardware device binding preventing unauthorized remote logins",
        ],
      },
      {
        tier: "Statutory regulatory engines",
        tech: "BIS hallmarking • CGST Act Rule 45 • NIC schema v1.03",
        description:
          "Native compliance micro-engines adhering strictly to Indian precious metals statutes.",
        protocol: "Synchronous sandbox validation & signed B2B/B2C QR",
        points: [
          "IS 1417:2016 6-character alphanumeric HUID laser hallmark tracking",
          "Form GST ITC-04 mass-balance conservation: Issued = Finished + Scrap + Shrinkage",
          "NIC Statutory GST E-Invoice 64-char SHA-256 IRN and 12-digit E-Way bills",
        ],
      },
      {
        tier: "ACID database & cache",
        tech: "PostgreSQL 17 • Redis 7 • BullMQ 5 • 47 migrations",
        description:
          "Pessimistic concurrency serialization and append-only Merkle audit logging.",
        protocol: "Pooled TCP (PgBouncer) & deterministic UUID locks",
        points: [
          "SELECT ... FOR UPDATE row locks prevent double-allocating 0.001g bullion stock",
          "Optimistic Concurrency Control (OCC) atomic version counters on spot boards",
          "Immutable SHA-256 state-chained audit logs recording before/after JSON states",
        ],
      },
    ],
    securityNote:
      "Maker-Checker dual-custody: Physical vault stock dispatches ≥ ₹1M require dual co-signatures from a Custodian (MANAGER) and Executive Overseer (ADMIN) before state mutation.",
  },
  {
    id: "opsengine",
    name: "OpsEngine SaaS",
    badge: "Zero-cost cloud DevOps mesh",
    title: "Server-authoritative ReBAC & $0.00/month cloud infrastructure",
    subtitle:
      "76,755-line Turborepo monorepo running on a high-availability serverless mesh delivering enterprise operations at $0.00 recurring infrastructure cost.",
    layers: [
      {
        tier: "Edge application & WAF",
        tech: "Vercel Edge Network • Next.js 16 App Router (apps/web)",
        description:
          "Edge Middleware route guards, Server Actions, and standalone static pre-rendering.",
        protocol: "HTTP/2 & TLS 1.3 edge proxy",
        points: [
          "Cryptographically isolated multi-tenant workspaces with dedicated subdomains",
          "Edge Middleware tenant token inspection and fail-closed anti-SSRF defenses",
          "React Server Components (RSC) with zero-bundle-size server execution",
        ],
      },
      {
        tier: "ReBAC authorization layer",
        tech: "Server-authoritative ReBAC engine • Scrypt tenant auth",
        description:
          "Hierarchical scope resolution tree enforcing mandatory Segregation of Duties (SoD).",
        protocol: "Fail-closed context (60s TTL) -> 403 Forbidden",
        points: [
          "Scope tree: Tenant -> Strategic Business Unit (SBU) -> Team -> Reporting Tree -> Self",
          "Segregation of Duties strictly forbids self-approval on payroll runs and expenses",
          "Scrypt tenant root key derivation with TOTP 2FA step-up verification",
        ],
      },
      {
        tier: "Database & storage mesh ($0/mo)",
        tech: "Neon Serverless Postgres • Cloudflare R2 ($0 egress)",
        description:
          "Zero-cost enterprise cloud primitives with auto-scaling and zero egress bandwidth fees.",
        protocol: "Dual URL: Pooled (Port 6543) & Direct DDL (Port 5432)",
        points: [
          "Neon Serverless PostgreSQL: PgBouncer pooling with auto-scale to zero compute",
          "Cloudflare R2: 100% S3-compatible document storage with zero egress bandwidth charges",
          "BigInt integer-cent financial ledger arithmetic preventing floating-point rounding drift",
        ],
      },
      {
        tier: "Automated DevOps & recovery",
        tech: "GitHub Actions CI/CD • OpenSSL AES-256-CBC • CodeQL",
        description:
          "Automated nightly disaster recovery archives and multi-stage testing gates.",
        protocol: "Cron 02:00 UTC & encrypted S3 object API",
        points: [
          "Nightly cron creates AES-256 encrypted pg_dump archives uploaded to R2",
          "Multi-stage pipeline: Gitleaks secret scan + Vitest + Playwright + Typecheck",
          "GitHub CodeQL static code analysis passing with 0 security & quality vulnerabilities",
        ],
      },
    ],
    securityNote:
      "Zero Trust boundary: UI visibility checks are for client UX only. The serverless backend independently re-evaluates authorize(subject, action, resource, context) on every database mutation.",
  },
  {
    id: "neuraldesk",
    name: "NeuralDesk AI",
    badge: "Deterministic DAG engine",
    title: "Autonomous multi-model agent orchestrator & telemetry stream",
    subtitle:
      "Transforming generative AI graphs into inspectable, mathematically deterministic Directed Acyclic Graphs (DAGs) with microsecond observability.",
    layers: [
      {
        tier: "Visual graph canvas tier",
        tech: "React 18 SPA • @xyflow/react v12 • Zustand reactive store",
        description:
          "Interactive node-graph visual builder with 8-node taxonomy and topological cycle protection.",
        protocol: "Reactive DOM canvas & local state subscriptions",
        points: [
          "8-Node taxonomy: Trigger, Prompt, Gemini LLM, Condition Router, Tool, Gate, Output",
          "In-memory Kahn's Topological Sorting (O(V+E)) rejects any cycle-creating edge in real time",
          "Dynamic Mustache prompt compiler with live variable extraction and preview",
        ],
      },
      {
        tier: "Orchestration & execution tier",
        tech: "Node.js 20 • Hono 4.6 REST engine • Micro-event hub",
        description:
          "Linear topological DAG traversal dispatching async node handlers with retry policies.",
        protocol: "Hono REST API & Server-Sent Events (SSE) broadcast",
        points: [
          "Microsecond step-by-step latency tracking with Server-Sent Events (SSE) live broadcast",
          "Dual execution modes: Live Gemini inference vs MurmurHash3 seeded deterministic simulation",
          "Human-in-the-Loop (HITL) approval gates pausing execution until authorized resume",
        ],
      },
      {
        tier: "Model routing & security tier",
        tech: "Google Gemini 1.5 / 2.0 streaming • AES-256-GCM BYOK",
        description:
          "Secure model invocation gateway with granular USD token economics accounting.",
        protocol: "HTTPS / streaming chunks & HMAC webhook verification",
        points: [
          "Real-time percentile computation: P50 median, P90, P95, and P99 tail latencies",
          "Live USD cost accounting based on prompt ($0.075/1M) and completion ($0.30/1M) rates",
          "AES-256-GCM Bring-Your-Own-Key (BYOK) credential encryption at rest",
        ],
      },
      {
        tier: "Forensic audit & storage tier",
        tech: "Neon PostgreSQL 16 • Drizzle ORM • Scalar OpenAPI 3.1",
        description:
          "Immutable execution trace waterfalls with 1-click replay and abort capabilities.",
        protocol: "PostgreSQL ACID ledgers & Scalar interactive docs",
        points: [
          "Detailed forensic modal trace inspecting input payloads, node outputs, and waterfall latencies",
          "1-Click execution re-run replay (POST /executions/:id/rerun) and live abort",
          "Interactive Scalar OpenAPI 3.1 documentation hosted live on Render",
        ],
      },
    ],
    securityNote:
      "Mathematical cycle invariant: Graph execution fails fast before hitting the AI runtime if topological traversal fails, guaranteeing zero runaway token spend.",
  },
  {
    id: "paypulse",
    name: "PayPulse Engine",
    badge: "High-throughput idempotent ledger",
    title: "950 req/sec double-entry transaction engine & BullMQ pipeline",
    subtitle:
      "High-concurrency financial ledger maintaining mathematical balance across simultaneous multi-tenant disbursements with microsecond Redis idempotency.",
    layers: [
      {
        tier: "Edge ingress & idempotency filter",
        tech: "Cloudflare Edge • SHA-256 hashing • Rate limiter",
        description:
          "Frontline gateway verifying incoming idempotency keys and dropping malicious mutation replays.",
        protocol: "HTTPS / TLS 1.3 & Idempotency-Key HTTP headers",
        points: [
          "Custom SHA-256 request signature verification caching responses in Redis for 24h",
          "Leaky-bucket distributed rate limiting preventing upstream database saturation",
          "Payload validation ensuring integer-cent BigInt precision before queueing",
        ],
      },
      {
        tier: "Router & async dispatch tier",
        tech: "Node.js 22 • Express 5 • BullMQ 5 job producer",
        description:
          "Decouples synchronous HTTP mutations from heavy external webhook and ledger notifications.",
        protocol: "Fastify-core HTTP router & Redis stream socket",
        points: [
          "Synchronous 202 Accepted response in <12ms for asynchronous batch payouts",
          "BullMQ job producer partitioning workloads by tenant account shards",
          "Correlation ID injection enabling end-to-end distributed tracing across microservices",
        ],
      },
      {
        tier: "Distributed locking & queue mesh",
        tech: "Redis 7 Cluster • Redlock algorithm • BullMQ workers",
        description:
          "In-memory distributed coordination preventing race conditions across multi-node worker clusters.",
        protocol: "RESP3 binary protocol & exponential backoff retries",
        points: [
          "Redlock distributed lock acquiring deterministic mutexes on ledger account pairs",
          "BullMQ Dead-Letter Queues (DLQ) with automatic exponential retry schedules",
          "Zero duplicate transactions verified across 10,000 concurrent load-test transfers",
        ],
      },
      {
        tier: "Double-entry ACID ledger tier",
        tech: "PostgreSQL 17 • Pessimistic row locks • BigInt math",
        description:
          "Strict double-entry accounting where every debit is balanced by an exact credit in integer cents.",
        protocol: "SELECT ... FOR UPDATE & append-only journal entries",
        points: [
          "Deterministic UUID sorted locks eliminate database deadlocks under high load",
          "k6 stress tested sustaining 950 req/sec under 3,000+ concurrent virtual users",
          "Zero floating-point rounding errors via BigInt currency calculations",
        ],
      },
    ],
    securityNote:
      "Double-Entry ledger invariant: SUM(debits) - SUM(credits) === 0 at the commit boundary of every ACID transaction, enforced by PostgreSQL deferred constraint checks.",
  },
];

export function ArchitectureViewer() {
  const [activeTab, setActiveTab] = React.useState<string>("jewelcore");
  const arch = ARCHITECTURES.find((a) => a.id === activeTab) || ARCHITECTURES[0];

  return (
    <section id="architecture" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-hairline">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted-foreground">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Enterprise systems architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Production Topology &amp; Data Flows
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
          Deep architectural breakdowns of 4-tier system topologies, PBAC governance, zero-cost cloud meshes, and deterministic DAG pipelines.
        </p>
      </div>

      {/* 4 Flagship Architecture Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-hairline pb-4 mb-8 sm:mb-10">
        {ARCHITECTURES.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative px-4 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                isActive
                  ? "text-background font-medium"
                  : "bg-surface-50 border border-hairline text-muted-foreground hover:text-foreground hover:border-hairline-hover"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeArchTab"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-foreground rounded-lg -z-0"
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Architecture Showcase Card */}
      <div className="rounded-2xl bg-surface-50 border border-hairline p-6 sm:p-8">
        {/* Banner */}
        <div className="border-b border-hairline pb-6 mb-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-surface-100 text-foreground border border-hairline">
                {arch.badge}
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Verified production blueprint
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              {arch.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-3xl leading-relaxed">
              {arch.subtitle}
            </p>
          </div>
        </div>

        {/* 4-Tier Flow Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {arch.layers.map((layer, index) => (
            <div
              key={layer.tier}
              className="p-5 sm:p-6 rounded-xl bg-surface-100/70 border border-hairline hover:border-hairline-hover transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-muted-foreground">
                  <span className="text-foreground font-medium">Tier 0{index + 1}</span>
                  <span className="text-[10px] text-muted-foreground/80 truncate max-w-[130px] text-right">
                    {layer.protocol}
                  </span>
                </div>

                <h4 className="font-semibold text-foreground text-sm tracking-tight mb-1">
                  {layer.tier}
                </h4>

                <span className="text-[11px] font-mono text-muted-foreground block mb-3">
                  {layer.tech}
                </span>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {layer.description}
                </p>

                <ul className="space-y-2 border-t border-hairline/60 pt-3">
                  {layer.points.map((pt, i) => (
                    <li key={i} className="text-[11px] text-muted-foreground leading-tight flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Invariant Note Callout */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-surface-100 border border-hairline flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
          <Shield className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
          <div>
            <strong className="text-foreground font-medium">Architectural invariant: </strong>
            <span>{arch.securityNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
