"use client";

import * as React from "react";
import { Header } from "@/components/header";
import { CmdkMenu } from "@/components/cmdk-menu";
import { ResumeModal } from "@/components/resume-modal";
import { Hero } from "@/components/hero";
import { MetricsStrip } from "@/components/metrics-strip";
import { ProjectsBento } from "@/components/projects-bento";
import { ArchitectureViewer } from "@/components/architecture-viewer";
import { WarStories } from "@/components/war-stories";
import { SkillsGrid } from "@/components/skills-grid";
import { GithubActivity } from "@/components/github-activity";
import { RecruiterFaq } from "@/components/recruiter-faq";
import { Footer } from "@/components/footer";

export default function Home() {
  const [cmdkOpen, setCmdkOpen] = React.useState(false);
  const [resumeModalOpen, setResumeModalOpen] = React.useState(false);

  return (
    <>
      <Header
        onOpenCmd={() => setCmdkOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <CmdkMenu
        open={cmdkOpen}
        onOpenChange={setCmdkOpen}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <ResumeModal
        open={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <main className="flex-1">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <MetricsStrip />
        <ProjectsBento />
        <ArchitectureViewer />
        <WarStories />
        <SkillsGrid />
        <GithubActivity />
        <RecruiterFaq />
      </main>

      <Footer />
    </>
  );
}
