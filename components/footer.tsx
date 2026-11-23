"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  FileDown,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const [copiedCli, setCopiedCli] = React.useState(false);
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const copyCli = () => {
    navigator.clipboard.writeText("curl -s https://prasantasahoo.dev/api/profile");
    setCopiedCli(true);
    toast.success("cURL command copied to clipboard");
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("pkumarsahoo025@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-hairline bg-surface-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-10 sm:space-y-12">
        {/* Section Superhead */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Direct contact &amp; recruitment channels</span>
        </div>

        {/* 2-Column Balanced Executive Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Direct Communication Channels (7 Cols on lg) */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-100/60 border border-hairline p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-50 text-foreground border border-hairline">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
                  <span>Immediate joiner (0 days notice)</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-50 text-muted-foreground border border-hairline">
                  <MapPin className="w-3 h-3 text-muted-foreground/70" />
                  <span>Bengaluru • Pune • Hyderabad • Remote</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Ready to Contribute from Day 1
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                Actively interviewing for full-time backend systems and full-stack engineering roles. Fully documented MCA (2023) credentials and degree transcripts ready for instant background verification.
              </p>
            </div>

            {/* 4 Aligned Channel Cards in 2x2 Grid */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/916372686212?text=Hi%20Prasanta%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-50 border border-hairline hover:border-hairline-hover transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-mono font-medium text-foreground group-hover:text-foreground block truncate">
                    WhatsApp direct
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground block truncate">
                    +91 63726 86212 (Instant)
                  </span>
                </div>
              </a>

              {/* Direct Phone Call */}
              <a
                href="tel:+916372686212"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-50 border border-hairline hover:border-hairline-hover transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-foreground shrink-0">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-mono font-medium text-foreground group-hover:text-foreground block truncate">
                    Phone direct
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground block truncate">
                    +91 63726 86212 (Voice)
                  </span>
                </div>
              </a>

              {/* Copy Email */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-50 border border-hairline hover:border-hairline-hover transition-colors group text-left cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-foreground shrink-0">
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
                <div className="truncate">
                  <span className="text-xs font-mono font-medium text-foreground group-hover:text-foreground block truncate">
                    {copiedEmail ? "Email copied" : "Copy direct email"}
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground block truncate">
                    pkumarsahoo025@gmail.com
                  </span>
                </div>
              </button>

              {/* Download ATS Resume */}
              <a
                href="/resume.pdf"
                download="Prasanta_Kumar_Sahoo_NodeJS_Backend_Developer_MCA2023_ImmediateJoiner.pdf"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-50 border border-hairline hover:border-hairline-hover transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-foreground shrink-0">
                  <FileDown className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="truncate">
                  <span className="text-xs font-mono font-medium text-foreground group-hover:text-foreground block truncate">
                    ATS resume (PDF)
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground block truncate">
                    Single-page ATS verified
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Live Terminal CLI Gateway (5 Cols on lg) */}
          <div className="lg:col-span-5 rounded-2xl bg-surface-50 dark:bg-[#0f0f10] border border-hairline p-6 sm:p-8 flex flex-col justify-between transition-colors shadow-sm">
            {/* Terminal Window Chrome */}
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-hairline text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="ml-1.5 text-[11px] text-muted-foreground font-mono">zsh — 80x24</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
                  HTTP 200 OK
                </span>
              </div>

              {/* Terminal Code Body */}
              <div className="font-mono text-[11.5px] leading-relaxed text-muted-foreground space-y-1.5 overflow-x-auto p-4 rounded-xl bg-surface-100/60 dark:bg-[#09090a] border border-hairline transition-colors">
                <div className="text-foreground flex items-center gap-1 font-semibold">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">$</span>
                  <span>curl -s https://prasantasahoo.dev/api/profile</span>
                </div>
                <div className="text-muted-foreground pt-1">
                  <span>{"{"}</span>
                  <div className="pl-3 space-y-0.5">
                    <div>
                      <span className="text-violet-600 dark:text-violet-400 font-medium">"name"</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">"Prasanta Kumar Sahoo"</span>,
                    </div>
                    <div>
                      <span className="text-violet-600 dark:text-violet-400 font-medium">"role"</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">"Backend &amp; Full-Stack Systems Engineer"</span>,
                    </div>
                    <div>
                      <span className="text-violet-600 dark:text-violet-400 font-medium">"status"</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">"Immediate Joiner (0d)"</span>,
                    </div>
                    <div>
                      <span className="text-violet-600 dark:text-violet-400 font-medium">"metrics"</span>: {"{ "}
                      <span className="text-violet-600 dark:text-violet-400 font-medium">"loc"</span>:{" "}
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">76755</span>,{" "}
                      <span className="text-violet-600 dark:text-violet-400 font-medium">"models"</span>:{" "}
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">97</span>
                      {" }"},
                    </div>
                    <div>
                      <span className="text-violet-600 dark:text-violet-400 font-medium">"email"</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">"pkumarsahoo025@gmail.com"</span>
                    </div>
                  </div>
                  <span>{"}"}</span>
                </div>
              </div>
            </div>

            {/* Quick-Action Copy cURL Command Button */}
            <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
              <span className="text-[10px] font-mono text-muted-foreground">
                JSON serverless route
              </span>
              <button
                onClick={copyCli}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-50 dark:bg-surface-100 border border-hairline hover:border-hairline-hover text-xs font-mono text-foreground transition-colors cursor-pointer"
              >
                {copiedCli ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                )}
                <span>{copiedCli ? "Copied" : "Copy cURL"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar with Symmetrical Three-Way Alignment */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-muted-foreground gap-4">
          <div className="flex items-center gap-3 text-[11px]">
            <span>MCA 2023 (IGIT Sarang)</span>
            <span>•</span>
            <span>B.Sc Physics (FMU)</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/prasant-0n"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5 text-muted-foreground" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/prasant-0n"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-muted-foreground" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-[11px] text-muted-foreground/80">
            Engineered with Next.js 15, TypeScript &amp; precision craft
          </div>
        </div>
      </div>
    </footer>
  );
}
