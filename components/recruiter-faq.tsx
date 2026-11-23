"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Career & timeline",
    question: "You completed your MCA in late 2023. What were you doing until now? Why this timeline?",
    answer:
      "Right after graduating with my MCA in late 2023, I made a conscious choice not to pursue passive exam prep or generic tutorial clones. Instead, I dedicated myself full-time to backend systems engineering and building production-grade architectures. Over the past year, I engineered two full-scale enterprise platforms—OpsEngine (76K LOC monorepo, 97 Prisma models, ReBAC) and JewelCore ERP (bullion custody engine with 0.001g precision, 1,000+ tests)—and load-tested asynchronous BullMQ queue pipelines under 3,000+ virtual users with k6. I am completely hands-on, code in strict TypeScript daily, and am ready to contribute from Day 1.",
  },
  {
    category: "Compensation & availability",
    question: "What is your current CTC and expected CTC?",
    answer:
      "Because my post-graduation work has been centered on contract and independent production software engineering, I do not have a corporate payroll baseline. For expected CTC, I am aligned with the standard entry-level market range for junior-to-mid backend engineers—around ₹4.5 LPA to ₹6 LPA—and my highest priority is joining a high-caliber engineering team where I can solve challenging backend problems and grow quickly.",
  },
  {
    category: "Notice period & relocation",
    question: "What is your notice period? Can you work from our office in Bengaluru / Pune / Hyderabad?",
    answer:
      "I am an immediate joiner (0 days notice). I have all my educational degree documentation and identity verification ready, and I am available to work in-office or hybrid in Bengaluru, Pune, Hyderabad, or remote immediately.",
  },
  {
    category: "Systems engineering",
    question: "How do you handle race conditions in PostgreSQL and Node.js under high concurrency?",
    answer:
      "In PostgreSQL, I handle race conditions using pessimistic row-level locking via SELECT ... FOR UPDATE inside an ACID transaction. In JewelCore ERP and PayPulse, locks are ordered deterministically by UUID to eliminate deadlocks. This serializes record mutations at the database engine level down to 0.001g precision while keeping the Node.js event loop completely non-blocking. For multi-node distributed locks, I integrate Redis Redlock.",
  },
  {
    category: "Architecture & queues",
    question: "Why did you pair Redis with BullMQ instead of processing jobs inside HTTP routes?",
    answer:
      "Processing heavy operations—like generating statutory GST E-Invoices, sending webhook notifications, or compiling reports—synchronously inside HTTP request cycles blocks the server and risks timeouts. By decoupling workloads into BullMQ queues backed by Redis, the HTTP API responds immediately with 202 Accepted. Worker processes handle jobs asynchronously in the background with exponential backoff retries and Dead-Letter Queues (DLQ).",
  },
];

export function RecruiterFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-hairline">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted-foreground">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Recruiter screening &amp; technical defense</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Frequently Asked Screening Questions
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
          Transparent, scripted answers addressing the MCA 2023 timeline, CTC expectations, and engineering trade-offs.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="rounded-xl bg-surface-50 border border-hairline overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-surface-100/40 transition-colors cursor-pointer"
              >
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground block mb-1">
                    {item.category}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-foreground" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-hairline/60">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
