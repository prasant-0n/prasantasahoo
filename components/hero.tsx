"use client";

import * as React from "react";
import Image from "next/image";
import { toast } from "sonner";
import {
  FileDown,
  FileText,
  MessageSquare,
  Mail,
  Phone,
  CheckCircle2,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Zap,
  ExternalLink,
  Award,
  Fingerprint,
  Cpu,
  Copy,
} from "lucide-react";
import { BrandIcon } from "@/components/brand-icon";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export function Hero({ onOpenResumeModal }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pkumarsahoo025@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Recruiter Trust & Availability Metadata Strip */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
        {/* Immediate Joiner Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-50 border border-hairline text-foreground font-mono text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
          <span>Immediate joiner (0 days notice)</span>
        </div>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-50 border border-hairline text-muted-foreground font-mono text-xs">
          <MapPin className="w-3 h-3 text-muted-foreground/70" />
          <span>Bengaluru, Karnataka (Open to Pune, Hyderabad, Remote)</span>
        </div>

        {/* Degree Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-50 border border-hairline text-muted-foreground font-mono text-xs">
          <GraduationCap className="w-3 h-3 text-muted-foreground/70" />
          <span>MCA (2021–2023) • CGPA 8.2 / 10.0</span>
        </div>
      </div>

      {/* Asymmetric Split: Editorial Typography on Left + Live Systems Cockpit on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 xl:col-span-7">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.12]">
            Backend &amp; Full-Stack Systems Engineer
          </h1>

          {/* Value Proposition */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Engineering high-throughput Node.js microservices, deterministic PostgreSQL ACID ledgers,
            inspectable AI agent workflows, and zero-cost serverless DevOps meshes. Architected{" "}
            <strong className="text-foreground font-medium">OpsEngine</strong> (76K LOC monorepo, 97 Prisma models),{" "}
            <strong className="text-foreground font-medium">JewelCore ERP</strong> (0.001g bullion custody, 1,000+ tests),{" "}
            <strong className="text-foreground font-medium">NeuralDesk</strong> (visual AI DAG engine), and{" "}
            <strong className="text-foreground font-medium">PayPulse</strong> (950 req/sec idempotent financial ledger).
          </p>

          {/* 6-Second Recruiter Fast-Action Bar */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* PDF ATS Resume Download */}
            <a
              href="/Prasanta_Kumar_Sahoo_Resume.pdf"
              download="Prasanta_Kumar_Sahoo_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download ATS resume (PDF)</span>
            </a>

            {/* In-Browser Resume Modal Trigger */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-50 border border-hairline hover:border-hairline-hover text-foreground font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View in browser</span>
            </button>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/916372686212?text=Hi%20Prasanta%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-50 border border-hairline hover:border-hairline-hover text-foreground text-xs sm:text-sm font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp (+91 63726 86212)</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-surface-50 border border-hairline hover:border-hairline-hover text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
              <span>{copiedEmail ? "Copied" : "Copy email"}</span>
            </button>

            {/* Direct Phone Call */}
            <a
              href="tel:+916372686212"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-surface-50 border border-hairline hover:border-hairline-hover text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call direct</span>
            </a>
          </div>

          {/* Recruiter Trust Proof Points */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-hairline flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Production-grade architectures</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Strict TypeScript daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>PostgreSQL ACID ledgers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>38 ATS search filters indexed below</span>
            </div>
          </div>
        </div>

        {/* Right Column: Executive Engineer Identity Credential Card */}
        <div className="lg:col-span-5 xl:col-span-5">
          <div className="rounded-2xl border border-hairline bg-surface-50 dark:bg-[#0f0f10] p-6 sm:p-7 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_12px_36px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden transition-colors">
            {/* Subtle top glare highlight in dark mode */}
            <div className="hidden dark:block absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* Header: Credential Authority & Security Status */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-hairline text-xs font-mono">
              <div className="flex items-center gap-2">
                <BrandIcon className="w-5 h-5 shrink-0" />
                <span className="text-foreground font-medium tracking-tight">
                  SYS-ARCH CREDENTIAL #2023-097
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 ring-2 ring-emerald-500/20" />
                <span>0d Notice • Immediate</span>
              </span>
            </div>

            {/* Candidate Identity Dossier: Clean Photo Frame + Professional Meta */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-hairline">
              {/* Framed Executive Portrait with Brand Seal */}
              <div className="relative shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-hairline bg-surface-100 shadow-md ring-1 ring-black/5 dark:ring-white/10 group">
                  <Image
                    src="/avatar.png"
                    alt="Prasanta Kumar Sahoo — Backend & Full-Stack Systems Engineer"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                {/* Official Brand Seal Anchor */}
                <div className="absolute -bottom-1.5 -right-1.5 p-0.5 rounded-lg bg-surface-50 dark:bg-[#0f0f10] shadow-md border border-hairline">
                  <BrandIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Verified Candidate Typography */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-1">
                  <h2 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                    Prasanta Kumar Sahoo
                  </h2>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-surface-100 border border-hairline text-muted-foreground">
                    MCA 2023
                  </span>
                </div>

                <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 font-medium block mb-2">
                  Backend &amp; Full-Stack Systems Engineer
                </span>

                <div className="space-y-1 text-[11px] font-mono text-muted-foreground">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <GraduationCap className="w-3 h-3 text-muted-foreground/70 shrink-0" />
                    <span>MCA (8.2 CGPA) • IGIT Sarang</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <Award className="w-3 h-3 text-muted-foreground/70 shrink-0" />
                    <span>B.Sc Physics (74%) • FMU</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <MapPin className="w-3 h-3 text-muted-foreground/70 shrink-0" />
                    <span>Bengaluru, Karnataka (Ready to Relocate)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications Grid (2x2 Matrix) */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-surface-100/60 dark:bg-surface-50/70 border border-hairline hover:border-hairline-hover transition-colors">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                  Monorepo Codebase
                </span>
                <span className="text-base font-semibold text-foreground tabular-nums block mt-0.5">
                  76,755 LOC
                </span>
                <span className="text-[10px] text-muted-foreground block truncate">
                  Turborepo 2 • 46 Modules
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-100/60 dark:bg-surface-50/70 border border-hairline hover:border-hairline-hover transition-colors">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                  Data Metrology
                </span>
                <span className="text-base font-semibold text-foreground tabular-nums block mt-0.5">
                  0.001g Precision
                </span>
                <span className="text-[10px] text-muted-foreground block truncate">
                  PostgreSQL Row Locks
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-100/60 dark:bg-surface-50/70 border border-hairline hover:border-hairline-hover transition-colors">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                  Load Throughput
                </span>
                <span className="text-base font-semibold text-emerald-500 dark:text-emerald-400 tabular-nums block mt-0.5">
                  950 req/sec
                </span>
                <span className="text-[10px] text-muted-foreground block truncate">
                  &lt;28ms p95 (3,000+ VUs)
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-100/60 dark:bg-surface-50/70 border border-hairline hover:border-hairline-hover transition-colors">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                  Automated Tests
                </span>
                <span className="text-base font-semibold text-foreground tabular-nums block mt-0.5">
                  1,406+ Passing
                </span>
                <span className="text-[10px] text-emerald-500 dark:text-emerald-400 block truncate">
                  0 CodeQL CVEs Alert
                </span>
              </div>
            </div>

            {/* Cryptographic Seal & Verification Authority Footer */}
            <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <button
                onClick={() => {
                  navigator.clipboard.writeText("0x97a246bc5e88d12093f1");
                  toast.success("Security fingerprint copied to clipboard");
                }}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                title="Click to copy security fingerprint"
              >
                <Fingerprint className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>SHA-256: 0x97a2...46b</span>
              </button>

              <a
                href="https://github.com/prasant-0n"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors flex items-center gap-1"
              >
                <span>GitHub @prasant-0n →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
