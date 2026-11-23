"use client";

import * as React from "react";
import { GitCommit, GitPullRequest, Star, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function GithubActivity() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-hairline">
      <div className="rounded-2xl bg-surface-50 border border-hairline p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted-foreground">
            <GithubIcon className="w-4 h-4 text-foreground" />
            <span>Verified open-source engineering activity</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            Continuous Production Commits Since Graduation
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Hands-on daily engineering across TypeScript, Next.js, and Node.js microservices. All commit histories, PRs, and live test runs are public on GitHub.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-100 border border-hairline">
              <GitCommit className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Active daily sprints</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-100 border border-hairline">
              <GitPullRequest className="w-3.5 h-3.5 text-muted-foreground" />
              <span>7 CI/CD automated pipelines</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-100 border border-hairline">
              <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Immediate joiner (0 days notice)</span>
            </span>
          </div>
        </div>

        <a
          href="https://github.com/prasant-0n"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shrink-0 shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Follow @prasant-0n on GitHub</span>
        </a>
      </div>
    </section>
  );
}
