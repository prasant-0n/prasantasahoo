"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  X,
  FileDown,
  Printer,
  Copy,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  FileCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleCopyText = () => {
    const text = document.getElementById("ats-resume-sheet")?.innerText || "";
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Resume text copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    // Isolated iframe print method - completely eliminates the 10-page bug by isolating the resume
    let iframe = document.getElementById("resume-print-iframe") as HTMLIFrameElement | null;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "resume-print-iframe";
      iframe.style.position = "fixed";
      iframe.style.right = "0";
      iframe.style.bottom = "0";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";
      iframe.style.visibility = "hidden";
      document.body.appendChild(iframe);
    }

    const doc = iframe.contentWindow?.document;
    if (!doc) {
      window.print();
      return;
    }

    const printHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Prasanta_Kumar_Sahoo_Resume</title>
          <style>
            @page {
              size: letter portrait;
              margin: 7mm 9mm 7mm 9mm;
            }
            *, *::before, *::after {
              box-sizing: border-box;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            html, body {
              margin: 0;
              padding: 0;
              background: #ffffff !important;
              color: #111827 !important;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              font-size: 8.6pt;
              line-height: 1.32;
              -webkit-font-smoothing: antialiased;
            }
            .sheet {
              width: 100%;
              max-width: 100%;
              margin: 0 auto;
            }
            /* Header */
            .header-banner {
              text-align: center;
              border-bottom: 2px solid #111827;
              padding-bottom: 4px;
              margin-bottom: 6px;
            }
            .candidate-name {
              font-size: 17pt;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin: 0;
              color: #111827;
              line-height: 1.1;
            }
            .candidate-title {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 8.4pt;
              font-weight: 700;
              color: #047857;
              margin-top: 2px;
              margin-bottom: 3px;
            }
            .contact-row {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 7.7pt;
              color: #4b5563;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 5px;
            }
            .contact-row a {
              color: #4b5563;
              text-decoration: none;
            }
            /* Sections */
            .section {
              margin-bottom: 6px;
              page-break-inside: avoid;
            }
            .section-title {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 8.5pt;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              color: #111827;
              border-bottom: 1.5px solid #111827;
              padding-bottom: 1.5px;
              margin-top: 0;
              margin-bottom: 3.5px;
            }
            .summary-text {
              font-size: 8.4pt;
              line-height: 1.34;
              color: #374151;
              text-align: justify;
              margin: 0;
            }
            .summary-text strong {
              color: #111827;
              font-weight: 600;
            }
            /* Competencies */
            .comp-list {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .comp-item {
              font-size: 8.1pt;
              line-height: 1.3;
              color: #374151;
              margin-bottom: 2px;
              padding-left: 10px;
              position: relative;
            }
            .comp-item::before {
              content: "•";
              color: #059669;
              font-weight: bold;
              position: absolute;
              left: 0;
            }
            .comp-item strong {
              color: #111827;
              font-weight: 600;
            }
            /* Projects */
            .project-entry {
              margin-bottom: 5px;
              page-break-inside: avoid;
            }
            .project-head {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            }
            .project-title {
              font-size: 8.8pt;
              font-weight: 700;
              color: #111827;
            }
            .project-dates {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 7.7pt;
              color: #6b7280;
              white-space: nowrap;
            }
            .project-meta {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 7.5pt;
              color: #4b5563;
              margin-top: 0.5px;
              margin-bottom: 1.5px;
            }
            .project-meta a {
              color: #047857;
              text-decoration: underline;
            }
            .bullet-list {
              margin: 0;
              padding-left: 14px;
            }
            .bullet-list li {
              font-size: 8.1pt;
              line-height: 1.28;
              color: #374151;
              margin-bottom: 1px;
            }
            /* Education */
            .edu-entry {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
              font-size: 8.2pt;
              margin-bottom: 2px;
            }
            .edu-degree {
              color: #111827;
            }
            .edu-degree strong {
              font-weight: 600;
            }
            .edu-meta {
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 7.7pt;
              color: #6b7280;
              white-space: nowrap;
            }
            /* Footer */
            .footer-strip {
              border-top: 1px solid #111827;
              padding-top: 3px;
              margin-top: 5px;
              display: flex;
              justify-content: space-between;
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 7.6pt;
              color: #4b5563;
            }
            .footer-strip strong {
              color: #111827;
            }
          </style>
        </head>
        <body>
          <div class="sheet">
            <div class="header-banner">
              <h1 class="candidate-name">Prasanta Kumar Sahoo</h1>
              <div class="candidate-title">Backend &amp; Full-Stack Systems Engineer | Next.js 16, TypeScript, Node.js, PostgreSQL | Immediate Joiner</div>
              <div class="contact-row">
                <span>Bengaluru, Karnataka</span>
                <span>•</span>
                <a href="tel:+916372686212">+91 63726 86212</a>
                <span>•</span>
                <a href="mailto:pkumarsahoo025@gmail.com">pkumarsahoo025@gmail.com</a>
                <span>•</span>
                <a href="https://github.com/prasant-0n">github.com/prasant-0n</a>
                <span>•</span>
                <a href="https://linkedin.com/in/prasant-0n">linkedin.com/in/prasant-0n</a>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Professional Summary</div>
              <p class="summary-text">
                Accomplished Backend &amp; Full-Stack Systems Engineer (MCA 2023) specializing in high-throughput enterprise architectures using TypeScript, Next.js 16, Node.js/Express 5, PostgreSQL, and Cloud DevOps. Architected two production-grade enterprise platforms: <strong>OpsEngine</strong> (76,755 LOC Turborepo monorepo, 97 Prisma models, ReBAC authorization, BigInt integer-cent billing, Cloudflare R2, 509 Vitest tests) and <strong>JewelCore ERP</strong> (bullion custody engine, 0.001g metrology, 96 OpenAPI REST endpoints, 0 open CodeQL vulnerabilities, 897 Vitest &amp; 154 Playwright tests). Proven track record designing zero-cost serverless DevOps meshes (Neon Serverless Postgres, Cloudflare R2, Vercel). Immediate Joiner (0 Days Notice).
              </p>
            </div>

            <div class="section">
              <div class="section-title">Technical Competencies</div>
              <ul class="comp-list">
                <li class="comp-item"><strong>Languages &amp; Full-Stack:</strong> TypeScript 5.6, Node.js (v20/22 LTS), Express 5, Next.js 16 (App Router, RSC, Server Actions), React 19, JavaScript (ES6+), NestJS</li>
                <li class="comp-item"><strong>Databases &amp; Storage:</strong> PostgreSQL 17 (Prisma ORM 97 Models, 75 Tables, ACID), Neon Serverless Postgres, Cloudflare R2 (S3 API), Redis 7 (BullMQ), MongoDB</li>
                <li class="comp-item"><strong>Cloud, DevOps &amp; Mesh:</strong> Turborepo 2 (pnpm), Kubernetes (K8s StatefulSets/HPA), Docker OCI, 7 GitHub Actions CI/CD Pipelines, OpenTelemetry, Prometheus, Vercel, Render</li>
                <li class="comp-item"><strong>Security, FinTech &amp; Testing:</strong> ReBAC Authorization, Merkle-Tree Hash Chaining, BigInt Financials, Stripe/Razorpay Webhooks, Vitest (1,406 Tests), Playwright, CodeQL Clean (0 CVEs)</li>
              </ul>
            </div>

            <div class="section">
              <div class="section-title">Production &amp; Systems Engineering Projects</div>

              <div class="project-entry">
                <div class="project-head">
                  <span class="project-title">1. OpsEngine — Unified Enterprise Operations &amp; Workforce ERP Platform</span>
                  <span class="project-dates">Jan 2025 – Present</span>
                </div>
                <div class="project-meta">
                  GitHub: <a href="https://github.com/prasant-0n/opsengine">https://github.com/prasant-0n/opsengine</a> | 76,755 LOC | 97 Domain Models | 46 Modules | Monorepo
                </div>
                <ul class="bullet-list">
                  <li>Engineered a 76,755-line Turborepo 2 monorepo with Next.js 16 App Router (RSC, Server Actions) and PostgreSQL across 97 strongly-typed Prisma models.</li>
                  <li>Built declarative ReBAC authorization engine enforcing Segregation of Duties (SoD), Scrypt tenant root authentication, and TOTP 2FA step-up verification.</li>
                  <li>Implemented BigInt integer-cent financial arithmetic, Stripe &amp; Razorpay idempotent billing webhooks, and Merkle-tree cryptographic audit logging.</li>
                  <li>Architected zero-cost serverless DevOps mesh (Neon Postgres, Cloudflare R2 zero-egress S3 storage, Vercel), anti-SSRF DLQ webhooks, and 509 passing Vitest tests (6.77s execution).</li>
                </ul>
              </div>

              <div class="project-entry">
                <div class="project-head">
                  <span class="project-title">2. JewelCore ERP — Enterprise Bullion Treasury &amp; Custody Platform</span>
                  <span class="project-dates">Oct 2023 – Dec 2024</span>
                </div>
                <div class="project-meta">
                  Live Demo: <a href="https://jewel-core-erp.vercel.app">https://jewel-core-erp.vercel.app</a> | Swagger: <a href="https://jewelcore-erp-dsq7.onrender.com/api-docs">https://jewelcore-erp-dsq7.onrender.com/api-docs</a>
                </div>
                <ul class="bullet-list">
                  <li>Architected a 6-package monorepo (pnpm + Turborepo) with Next.js 15, Express 5, and 96 OpenAPI REST endpoints across 15 interactive workstations.</li>
                  <li>Engineered pessimistic row locks (SELECT FOR UPDATE) across 75 PostgreSQL 17 tables &amp; 47 migrations, preventing race conditions down to 0.001g precision.</li>
                  <li>Built zero-trust hardware device binding (ECDSA WebCrypto), Argon2id auth, Merkle audit logs, and Indian statutory compliance (BIS HUID, NIC GST E-Invoice).</li>
                  <li>Orchestrated 7 GitHub Actions CI/CD pipelines, Kubernetes manifests, and DevSecOps gates achieving 0 open CodeQL alerts (from 330) and 897 Vitest &amp; 154 Playwright tests.</li>
                </ul>
              </div>

              <div class="project-entry">
                <div class="project-head">
                  <span class="project-title">3. High-Concurrency Event &amp; Asynchronous Queue Pipeline (PayPulse)</span>
                  <span class="project-dates">Jun 2024 – Dec 2024</span>
                </div>
                <div class="project-meta">
                  Tech: Node.js, Express.js, Redis 7, BullMQ, Docker, Postman, k6 Benchmarking
                </div>
                <ul class="bullet-list">
                  <li>Architected an asynchronous event pipeline pairing Redis and BullMQ with idempotent consumer deduplication and Dead-Letter Queues (DLQ).</li>
                  <li>Executed k6 load-testing simulations with 3,000+ virtual users, sustaining 950 req/sec without memory leaks or event loop lag (&lt;28ms p95 latency).</li>
                </ul>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Education</div>
              <div class="edu-entry">
                <span class="edu-degree"><strong>Master of Computer Applications (MCA)</strong> — Indira Gandhi Institute of Technology (IGIT), Sarang</span>
                <span class="edu-meta">Nov 2021 – Sep 2023 | CGPA: 8.2 / 10.0</span>
              </div>
              <div class="edu-entry">
                <span class="edu-degree"><strong>Bachelor of Science (B.Sc. Physics Honours)</strong> — Fakir Mohan University, Balasore</span>
                <span class="edu-meta">Jul 2018 – Jun 2021 | Aggregate: 74%</span>
              </div>
            </div>

            <div class="footer-strip">
              <span><strong>Notice Period:</strong> Immediate Joiner (0 Days Notice)</span>
              <span><strong>Preferred Locations:</strong> Bengaluru, Pune, Hyderabad, Remote</span>
            </div>
          </div>
        </body>
      </html>
    `;

    doc.open();
    doc.write(printHtml);
    doc.close();

    // Trigger isolated print
    setTimeout(() => {
      iframe?.contentWindow?.focus();
      iframe?.contentWindow?.print();
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0f0f10] border border-hairline shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Document Viewer Chrome Header */}
        <div className="p-3 sm:p-4 border-b border-hairline flex flex-wrap items-center justify-between gap-3 bg-surface-100/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-50 border border-hairline flex items-center justify-center text-emerald-400">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                  Prasanta_Kumar_Sahoo_Resume.pdf
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>1-Page Verified • ATS 100/100</span>
                </span>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
                Harvard/FAANG Engineering Format • MCA 2023 • Immediate Joiner
              </span>
            </div>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-50 border border-hairline text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Copy plain ATS resume text"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-50 border border-hairline text-xs font-mono text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors cursor-pointer"
              title="Print exact 1-page document or save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print (1-Page)</span>
            </button>

            <a
              href="/resume.pdf"
              download="Prasanta_Kumar_Sahoo_NodeJS_Backend_Developer_MCA2023_ImmediateJoiner.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity shadow-sm"
              title="Direct PDF download"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-50 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Canvas Area */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#09090a] flex justify-center">
          {/* Authentic High-Precision Executive Resume Paper Sheet */}
          <div
            id="ats-resume-sheet"
            className="w-full max-w-[820px] bg-white text-[#18181b] dark:bg-[#121214] dark:text-[#f4f4f5] rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10 font-sans text-xs leading-relaxed transition-colors"
          >
            {/* Header / Identity Banner */}
            <div className="border-b-2 border-zinc-900 dark:border-zinc-200 pb-3 mb-3.5 text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                Prasanta Kumar Sahoo
              </h1>
              <p className="font-mono text-xs sm:text-[13px] font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide mt-1">
                Backend &amp; Full-Stack Systems Engineer | Next.js 16, TypeScript, Node.js, PostgreSQL | Immediate Joiner
              </p>

              {/* Clickable Multi-Channel Contact Strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  <span>Bengaluru, Karnataka</span>
                </span>
                <span>•</span>
                <a href="tel:+916372686212" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Phone className="w-3 h-3 text-zinc-500" />
                  <span>+91 63726 86212</span>
                </a>
                <span>•</span>
                <a href="mailto:pkumarsahoo025@gmail.com" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Mail className="w-3 h-3 text-zinc-500" />
                  <span>pkumarsahoo025@gmail.com</span>
                </a>
                <span>•</span>
                <a href="https://github.com/prasant-0n" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <GithubIcon className="w-3 h-3 text-zinc-500" />
                  <span>github.com/prasant-0n</span>
                </a>
                <span>•</span>
                <a href="https://linkedin.com/in/prasant-0n" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <LinkedinIcon className="w-3 h-3 text-zinc-500" />
                  <span>linkedin.com/in/prasant-0n</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-3.5">
              <h2 className="text-[11px] sm:text-xs font-bold font-mono uppercase tracking-[0.15em] text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-1.5">
                Professional Summary
              </h2>
              <p className="text-justify leading-relaxed text-[11.5px] sm:text-xs text-zinc-700 dark:text-zinc-300">
                Accomplished Backend &amp; Full-Stack Systems Engineer (MCA 2023) specializing in high-throughput enterprise architectures using TypeScript, Next.js 16, Node.js/Express 5, PostgreSQL, and Cloud DevOps. Architected two production-grade enterprise platforms: <strong className="text-zinc-900 dark:text-white font-semibold">OpsEngine</strong> (76,755 LOC Turborepo monorepo, 97 Prisma models, ReBAC authorization, BigInt integer-cent billing, Cloudflare R2, 509 Vitest tests) and <strong className="text-zinc-900 dark:text-white font-semibold">JewelCore ERP</strong> (bullion custody engine, 0.001g metrology, 96 OpenAPI REST endpoints, 0 open CodeQL vulnerabilities, 897 Vitest &amp; 154 Playwright tests). Proven track record designing zero-cost serverless DevOps meshes (Neon Serverless Postgres, Cloudflare R2, Vercel). Immediate Joiner (0 Days Notice).
              </p>
            </div>

            {/* Technical Competencies */}
            <div className="mb-3.5">
              <h2 className="text-[11px] sm:text-xs font-bold font-mono uppercase tracking-[0.15em] text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-1.5">
                Technical Competencies
              </h2>
              <ul className="space-y-1 text-[11px] sm:text-[11.5px] text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white font-semibold">Languages &amp; Full-Stack:</strong> TypeScript 5.6, Node.js (v20/22 LTS), Express 5, Next.js 16 (App Router, RSC, Server Actions), React 19, JavaScript (ES6+), NestJS
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white font-semibold">Databases &amp; Storage:</strong> PostgreSQL 17 (Prisma ORM 97 Models, 75 Tables, ACID), Neon Serverless Postgres, Cloudflare R2 (S3 API), Redis 7 (BullMQ), MongoDB
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white font-semibold">Cloud, DevOps &amp; Mesh:</strong> Turborepo 2 (pnpm), Kubernetes (K8s StatefulSets/HPA), Docker OCI, 7 GitHub Actions CI/CD Pipelines, OpenTelemetry, Prometheus, Vercel, Render
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-zinc-900 dark:text-white font-semibold">Security, FinTech &amp; Testing:</strong> ReBAC Authorization, Merkle-Tree Hash Chaining, BigInt Financials, Stripe/Razorpay Webhooks, Vitest (1,406 Tests), Playwright, CodeQL Clean (0 CVEs)
                  </span>
                </li>
              </ul>
            </div>

            {/* Production & Systems Engineering Projects */}
            <div className="mb-3.5">
              <h2 className="text-[11px] sm:text-xs font-bold font-mono uppercase tracking-[0.15em] text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-2">
                Production &amp; Systems Engineering Projects
              </h2>

              <div className="space-y-3">
                {/* 1. OpsEngine */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <strong className="text-xs sm:text-[13px] font-semibold text-zinc-900 dark:text-white">
                      1. OpsEngine — Unified Enterprise Operations &amp; Workforce ERP Platform
                    </strong>
                    <span className="font-mono text-[10.5px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 shrink-0">
                      Jan 2025 – Present
                    </span>
                  </div>
                  <div className="font-mono text-[10.5px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                    GitHub: <a href="https://github.com/prasant-0n/opsengine" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline decoration-dotted hover:decoration-solid">https://github.com/prasant-0n/opsengine</a> | 76,755 LOC | 97 Domain Models | 46 Modules | Monorepo
                  </div>
                  <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-zinc-700 dark:text-zinc-300 marker:text-zinc-400 dark:marker:text-zinc-500">
                    <li>Engineered a 76,755-line Turborepo 2 monorepo with Next.js 16 App Router (RSC, Server Actions) and PostgreSQL across 97 strongly-typed Prisma models.</li>
                    <li>Built declarative ReBAC authorization engine enforcing Segregation of Duties (SoD), Scrypt tenant root authentication, and TOTP 2FA step-up verification.</li>
                    <li>Implemented BigInt integer-cent financial arithmetic, Stripe &amp; Razorpay idempotent billing webhooks, and Merkle-tree cryptographic audit logging.</li>
                    <li>Architected zero-cost serverless DevOps mesh (Neon Postgres, Cloudflare R2 zero-egress S3 storage, Vercel), anti-SSRF DLQ webhooks, and 509 passing Vitest tests (6.77s execution).</li>
                  </ul>
                </div>

                {/* 2. JewelCore ERP */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <strong className="text-xs sm:text-[13px] font-semibold text-zinc-900 dark:text-white">
                      2. JewelCore ERP — Enterprise Bullion Treasury &amp; Custody Platform
                    </strong>
                    <span className="font-mono text-[10.5px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 shrink-0">
                      Oct 2023 – Dec 2024
                    </span>
                  </div>
                  <div className="font-mono text-[10.5px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                    Live Demo: <a href="https://jewel-core-erp.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline decoration-dotted hover:decoration-solid">https://jewel-core-erp.vercel.app</a> | Swagger: <a href="https://jewelcore-erp-dsq7.onrender.com/api-docs" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline decoration-dotted hover:decoration-solid">https://jewelcore-erp-dsq7.onrender.com/api-docs</a>
                  </div>
                  <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-zinc-700 dark:text-zinc-300 marker:text-zinc-400 dark:marker:text-zinc-500">
                    <li>Architected a 6-package monorepo (pnpm + Turborepo) with Next.js 15, Express 5, and 96 OpenAPI REST endpoints across 15 interactive workstations.</li>
                    <li>Engineered pessimistic row locks (SELECT FOR UPDATE) across 75 PostgreSQL 17 tables &amp; 47 migrations, preventing race conditions down to 0.001g precision.</li>
                    <li>Built zero-trust hardware device binding (ECDSA WebCrypto), Argon2id auth, Merkle audit logs, and Indian statutory compliance (BIS HUID, NIC GST E-Invoice).</li>
                    <li>Orchestrated 7 GitHub Actions CI/CD pipelines, Kubernetes manifests, and DevSecOps gates achieving 0 open CodeQL alerts (from 330) and 897 Vitest &amp; 154 Playwright tests.</li>
                  </ul>
                </div>

                {/* 3. PayPulse */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <strong className="text-xs sm:text-[13px] font-semibold text-zinc-900 dark:text-white">
                      3. High-Concurrency Event &amp; Asynchronous Queue Pipeline (PayPulse)
                    </strong>
                    <span className="font-mono text-[10.5px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 shrink-0">
                      Jun 2024 – Dec 2024
                    </span>
                  </div>
                  <div className="font-mono text-[10.5px] text-zinc-600 dark:text-zinc-400 mt-0.5">
                    Tech: Node.js, Express.js, Redis 7, BullMQ, Docker, Postman, k6 Benchmarking
                  </div>
                  <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-zinc-700 dark:text-zinc-300 marker:text-zinc-400 dark:marker:text-zinc-500">
                    <li>Architected an asynchronous event pipeline pairing Redis and BullMQ with idempotent consumer deduplication and Dead-Letter Queues (DLQ).</li>
                    <li>Executed k6 load-testing simulations with 3,000+ virtual users, sustaining 950 req/sec without memory leaks or event loop lag (&lt;28ms p95 latency).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-3.5">
              <h2 className="text-[11px] sm:text-xs font-bold font-mono uppercase tracking-[0.15em] text-zinc-900 dark:text-zinc-100 border-b border-zinc-300 dark:border-zinc-700 pb-1 mb-1.5">
                Education
              </h2>
              <div className="space-y-1 text-[11px] text-zinc-700 dark:text-zinc-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                  <span>
                    <strong className="text-zinc-900 dark:text-white font-semibold">Master of Computer Applications (MCA)</strong> — Indira Gandhi Institute of Technology (IGIT), Sarang
                  </span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 text-[10.5px] sm:text-[11px] shrink-0">
                    Nov 2021 – Sep 2023 | CGPA: 8.2 / 10.0
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                  <span>
                    <strong className="text-zinc-900 dark:text-white font-semibold">Bachelor of Science (B.Sc. Physics Honours)</strong> — Fakir Mohan University, Balasore
                  </span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 text-[10.5px] sm:text-[11px] shrink-0">
                    Jul 2018 – Jun 2021 | Aggregate: 74%
                  </span>
                </div>
              </div>
            </div>

            {/* Operational Availability & Footnote */}
            <div className="border-t border-zinc-300 dark:border-zinc-700 pt-2 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10.5px] sm:text-[11px] text-zinc-600 dark:text-zinc-400 font-mono">
              <span>
                <strong className="text-zinc-900 dark:text-white font-semibold">Notice Period:</strong> Immediate Joiner (0 Days Notice)
              </span>
              <span>
                <strong className="text-zinc-900 dark:text-white font-semibold">Preferred Locations:</strong> Bengaluru, Pune, Hyderabad, Remote
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
