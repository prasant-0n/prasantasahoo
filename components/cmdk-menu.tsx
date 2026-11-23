"use client";

import * as React from "react";
import { Command } from "cmdk";
import { toast } from "sonner";
import {
  ExternalLink,
  FileDown,
  Copy,
  Layers,
  Code2,
  Terminal,
  Phone,
  Mail,
  FileText,
  GitBranch,
  HelpCircle,
  Cpu,
} from "lucide-react";

interface CmdkMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenResumeModal: () => void;
}

export function CmdkMenu({ open, onOpenChange, onOpenResumeModal }: CmdkMenuProps) {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  if (!open) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText("pkumarsahoo025@gmail.com");
    toast.success("Email copied to clipboard: pkumarsahoo025@gmail.com");
    onOpenChange(false);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+916372686212");
    toast.success("Phone number copied: +91 63726 86212");
    onOpenChange(false);
  };

  const jumpTo = (id: string) => {
    onOpenChange(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="fixed inset-0 -z-10"
        onClick={() => onOpenChange(false)}
      />

      <div className="w-full max-w-lg rounded-xl border border-hairline bg-surface-50 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        <Command className="w-full">
          <div className="flex items-center px-3 border-b border-hairline">
            <Command.Input
              autoFocus
              placeholder="Type a command or search (e.g. JewelCore, Resume, Call)..."
              className="w-full py-3 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 text-xs">
            <Command.Empty className="py-6 text-center text-muted-foreground">
              No results found.
            </Command.Empty>

            {/* Recruiter Fast Actions */}
            <Command.Group heading="Recruiter fast actions" className="text-muted-foreground font-mono text-[10px] px-2 py-1">
              <Command.Item
                onSelect={() => {
                  window.open("/Prasanta_Kumar_Sahoo_Resume.pdf", "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-muted-foreground" />
                  <span>Download single-page ATS resume (PDF)</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">PDF</span>
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  onOpenChange(false);
                  onOpenResumeModal();
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span>View clean ATS resume in browser</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">MODAL</span>
              </Command.Item>

              <Command.Item
                onSelect={copyEmail}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>Copy direct email (pkumarsahoo025@gmail.com)</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">COPY</span>
              </Command.Item>

              <Command.Item
                onSelect={copyPhone}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>Copy phone number (+91 63726 86212)</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">COPY</span>
              </Command.Item>
            </Command.Group>

            {/* Jump to Sections */}
            <Command.Group heading="Page sections" className="text-muted-foreground font-mono text-[10px] px-2 py-1 mt-2">
              <Command.Item
                onSelect={() => jumpTo("projects")}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span>Showcase projects (4 flagship systems)</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">#projects</span>
              </Command.Item>

              <Command.Item
                onSelect={() => jumpTo("architecture")}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-muted-foreground" />
                  <span>4-Tier interactive architecture topology</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">#architecture</span>
              </Command.Item>

              <Command.Item
                onSelect={() => jumpTo("war-stories")}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-muted-foreground" />
                  <span>Production war stories (code snippets)</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">#war-stories</span>
              </Command.Item>

              <Command.Item
                onSelect={() => jumpTo("skills")}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span>Unified competencies matrix</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">#skills</span>
              </Command.Item>

              <Command.Item
                onSelect={() => jumpTo("faq")}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-muted-foreground" />
                  <span>Recruiter screening FAQ</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">#faq</span>
              </Command.Item>

              <Command.Item
                onSelect={() => jumpTo("contact")}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>Executive contact &amp; terminal</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">#contact</span>
              </Command.Item>
            </Command.Group>

            {/* Live Flagship Projects */}
            <Command.Group heading="Flagship platforms &amp; live demos" className="text-muted-foreground font-mono text-[10px] px-2 py-1 mt-2">
              <Command.Item
                onSelect={() => {
                  window.open("https://jewel-core-erp.vercel.app", "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span>JewelCore ERP — Live web demo (Vercel)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  window.open("https://jewelcore-erp-dsq7.onrender.com/api-docs", "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-muted-foreground" />
                  <span>JewelCore ERP — Swagger OpenAPI gateway (Render)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  window.open("https://neuraldesk-lovat.vercel.app", "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span>NeuralDesk — Visual AI DAG engine (Vercel)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  window.open("https://neuraldesk-xfe2.onrender.com/docs", "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-muted-foreground" />
                  <span>NeuralDesk — Scalar API interactive docs</span>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  window.open("https://github.com/prasant-0n/opsengine", "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground"
              >
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-muted-foreground" />
                  <span>OpsEngine — 76K LOC monorepo repository (GitHub)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </Command.Item>
            </Command.Group>

            {/* Terminal CLI */}
            <Command.Group heading="Terminal &amp; CLI" className="text-muted-foreground font-mono text-[10px] px-2 py-1 mt-2">
              <Command.Item
                onSelect={() => {
                  navigator.clipboard.writeText("curl -s https://prasantasahoo.vercel.app/api/profile");
                  toast.success("Command copied: curl -s https://prasantasahoo.vercel.app/api/profile");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-surface-100 cursor-pointer text-foreground font-mono text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                  <span>curl -s https://prasantasahoo.vercel.app/api/profile</span>
                </div>
                <Copy className="w-3 h-3 text-muted-foreground" />
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="p-2 border-t border-hairline flex items-center justify-between text-[11px] text-muted-foreground font-mono">
            <span>Navigation: ↑ ↓ Enter</span>
            <span>ESC to close</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
