import { NextResponse } from "next/server";

export async function GET() {
  const profile = {
    name: "Prasanta Kumar Sahoo",
    title: "Backend & Full-Stack Systems Engineer",
    availability: "Immediate Joiner (0 Days Notice)",
    location: "Bengaluru, Karnataka (Open to Pune, Hyderabad, Remote)",
    contact: {
      email: "pkumarsahoo025@gmail.com",
      mobile: "+91 63726 86212",
      portfolio: "https://prasantasahoo.vercel.app",
      github: "https://github.com/prasant-0n",
      linkedin: "https://linkedin.com/in/prasant-0n",
    },
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "Indira Gandhi Institute of Technology (IGIT), Sarang",
        period: "2021 – 2023",
        score: "CGPA 8.2 / 10.0",
      },
      {
        degree: "Bachelor of Science (B.Sc. Physics Honours)",
        institution: "Fakir Mohan University, Balasore",
        period: "2018 – 2021",
        score: "74% Aggregate",
      },
    ],
    verified_metrics: {
      opsengine_loc: "76,755 lines (Turborepo 2 monorepo)",
      opsengine_prisma_models: 97,
      jewelcore_tests: "897 Vitest + 154 Playwright (1,051 total)",
      codeql_vulnerabilities: 0,
      bullion_precision: "0.001g (SELECT FOR UPDATE row-level locks)",
      paypulse_k6_throughput: "950 req/sec (<28ms p95 latency)",
      cloud_mesh_cost: "$0.00/month recurring",
    },
    flagship_platforms: [
      {
        name: "OpsEngine",
        description: "Unified Enterprise Operations & Workforce ERP Platform",
        stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Neon", "Cloudflare R2", "ReBAC", "Prisma"],
        repo: "https://github.com/prasant-0n/opsengine",
        stats: "76,755 LOC | 97 Domain Models | 46 Modules | 509 Vitest Tests",
      },
      {
        name: "NeuralDesk",
        description: "Enterprise Visual AI Workflow Intelligence Platform",
        stack: ["React 18", "@xyflow/react v12", "Hono 4.6", "Google Gemini", "Neon PostgreSQL", "Drizzle ORM"],
        live_web: "https://neuraldesk-lovat.vercel.app",
        api_docs: "https://neuraldesk-xfe2.onrender.com/docs",
        repo: "https://github.com/prasant-0n/NeuralDesk",
      },
      {
        name: "JewelCore ERP",
        description: "Mission-Critical Bullion Treasury & Vault Custody Platform",
        stack: ["Next.js 15", "Express 5", "PostgreSQL 17", "Redis 7", "Docker", "Kubernetes"],
        live_web: "https://jewel-core-erp.vercel.app",
        api_docs: "https://jewelcore-erp-dsq7.onrender.com/api-docs",
        repo: "https://github.com/prasant-0n/JewelCore-ERP",
      },
      {
        name: "PayPulse Engine",
        description: "High-Throughput Idempotent Ledger & Webhook Engine",
        stack: ["Node.js", "Express", "PostgreSQL 16", "Redis 7", "BullMQ 5", "Docker"],
        stats: "3,000+ VUs | 950 req/s | <28ms p95 latency | 0 Race Conditions",
      },
    ],
  };

  return NextResponse.json(profile, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
