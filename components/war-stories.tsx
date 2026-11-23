"use client";

import * as React from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Copy, CheckCircle2, Code2, GitFork } from "lucide-react";

interface WarStory {
  id: string;
  tabTitle: string;
  title: string;
  platform: string;
  repoUrl: string;
  githubFile: string;
  language: string;
  description: string;
  code: string;
}

const WAR_STORIES: WarStory[] = [
  {
    id: "locking",
    tabTitle: "Postgres row lock",
    title: "Pessimistic row-level locking (0.001g bullion custody)",
    platform: "JewelCore ERP",
    repoUrl: "https://github.com/prasant-0n/JewelCore-ERP",
    githubFile: "packages/api/src/modules/transfers/transfer.service.ts#L42-L68",
    language: "typescript",
    description: "Prevents race conditions down to 0.001g bullion precision during simultaneous multi-terminal checkout and vault withdrawals. Acquires an exclusive database lock (SELECT ... FOR UPDATE) ordered deterministically by UUID to eliminate deadlocks.",
    code: `// Atomically lock and verify vault compartment balance
await prisma.$transaction(async (tx) => {
  // 1. Lock the sender custody row exclusively (pessimistic lock)
  const sourceVault = await tx.$queryRaw<VaultRecord[]>\`
    SELECT id, balance_grams, reserved_grams 
    FROM "VaultCustodyRecord" 
    WHERE id = \${sourceVaultId}::uuid 
    FOR UPDATE
  \`;

  const availableGrams = sourceVault[0].balance_grams - sourceVault[0].reserved_grams;
  if (availableGrams < transferWeightGrams) {
    throw new InsufficientBullionError(
      \`Requested \${transferWeightGrams}g exceeds available \${availableGrams}g\`
    );
  }

  // 2. Perform double-entry debit and credit
  await tx.vaultCustodyRecord.update({
    where: { id: sourceVaultId },
    data: { balance_grams: { decrement: transferWeightGrams } }
  });
  
  await tx.vaultAuditLog.create({
    data: { event: "BULLION_DISPATCH_ACID", weight: transferWeightGrams }
  });
});`,
  },
  {
    id: "dag",
    tabTitle: "Kahn's DAG algorithm",
    title: "Mathematical cycle invariant protection (O(V+E))",
    platform: "NeuralDesk",
    repoUrl: "https://github.com/prasant-0n/NeuralDesk",
    githubFile: "packages/dag-engine/src/algorithms/kahn.ts#L18-L47",
    language: "typescript",
    description: "Prevents recursive deadlocks and infinite LLM token burn at the UI and orchestration layers using Kahn's topological sorting. Any user edge creating a directed cycle is rejected before execution.",
    code: `export function validateAcyclicGraph(nodes: Node[], edges: Edge[]): boolean {
  const inDegree = new Map<string, number>();
  const adjacency = new Map<string, string[]>();

  // Initialize degree maps
  nodes.forEach(n => {
    inDegree.set(n.id, 0);
    adjacency.set(n.id, []);
  });

  edges.forEach(e => {
    inDegree.set(e.target, (inDegree.get(e.target) || 0) + 1);
    adjacency.get(e.source)?.push(e.target);
  });

  // Collect nodes with zero incoming dependencies
  const queue: string[] = [];
  inDegree.forEach((degree, id) => {
    if (degree === 0) queue.push(id);
  });

  let processedCount = 0;
  while (queue.length > 0) {
    const current = queue.shift()!;
    processedCount++;

    adjacency.get(current)?.forEach(neighbor => {
      inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
      if (inDegree.get(neighbor) === 0) queue.push(neighbor);
    });
  }

  // If visited count != total nodes, an illegal cycle exists.
  return processedCount === nodes.length;
}`,
  },
  {
    id: "idempotency",
    tabTitle: "Idempotency & BullMQ",
    title: "Zero-duplicate webhook pipeline with dead-letter queues",
    platform: "PayPulse Engine",
    repoUrl: "https://github.com/prasant-0n/paypulse-engine",
    githubFile: "src/middleware/idempotency.ts#L24-L52",
    language: "typescript",
    description: "Intercepts incoming transactional API mutations, hashes payloads using SHA-256 with client Idempotency-Keys, and decouples third-party notifications via BullMQ background workers with exponential backoff.",
    code: `export const idempotencyGuard = async (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers["idempotency-key"] as string;
  if (!key) return next();

  const cacheKey = \`idemp:\${key}\`;
  const cachedResponse = await redis.get(cacheKey);

  if (cachedResponse) {
    const { status, body } = JSON.parse(cachedResponse);
    return res.status(status).header("X-Cache", "HIT-IDEMPOTENT").json(body);
  }

  // Intercept json response and cache atomically in Redis for 24h
  const originalJson = res.json.bind(res);
  res.json = (body: any) => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      redis.setex(cacheKey, 86400, JSON.stringify({ status: res.statusCode, body }));
    }
    return originalJson(body);
  };

  next();
};`,
  },
  {
    id: "rebac",
    tabTitle: "ReBAC & $0 mesh",
    title: "Server-authoritative scope resolution & zero-cost mesh",
    platform: "OpsEngine",
    repoUrl: "https://github.com/prasant-0n/opsengine",
    githubFile: "packages/identity/src/rebac/authorizer.ts#L34-L65",
    language: "typescript",
    description: "Enforces Segregation of Duties (SoD) across Tenant, SBU, Team, and Reporting-Tree scopes. The backend independently authorises mutations with a 60-second fail-closed TTL.",
    code: `export async function authorizeScope(
  actor: SessionActor,
  action: "approve_payroll" | "settle_invoice" | "calibrate_appraisal",
  resource: ResourceContext
): Promise<boolean> {
  // 1. Strict Segregation of Duties: self-approval strictly forbidden
  if (actor.id === resource.ownerId) {
    throw new ForbiddenError("Segregation of Duties (SoD): Self-approval prohibited");
  }

  // 2. Resolve hierarchical tree
  const hasTenantAccess = actor.tenantId === resource.tenantId;
  if (!hasTenantAccess) return false;

  const userRole = await prisma.userRoleAssignment.findFirst({
    where: { userId: actor.id, scopeId: resource.sbuId }
  });

  return Boolean(userRole && roleAllowsAction(userRole.role, action));
}`,
  },
];

function highlightSyntaxLine(line: string) {
  if (line.trim().startsWith("//")) {
    return <span className="text-zinc-500 dark:text-zinc-500 italic">{line}</span>;
  }

  // Token regex for strings, keywords, SQL commands, types, and numbers
  const tokenRegex = /(\/\/[^\n]*|`[^`]*`|"[^"]*"|'[^']*'|\b(?:await|async|export|function|const|let|if|throw|new|return|while|import|from|typeof|instanceof)\b|\b(?:SELECT|FROM|WHERE|FOR UPDATE)\b|\b(?:boolean|string|number|any|void|Promise|Request|Response|NextFunction|Node|Edge|SessionActor|ResourceContext|VaultRecord)\b|\b\d+(?:\.\d+)?\b)/g;

  const parts = line.split(tokenRegex);
  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.startsWith("//")) {
      return <span key={idx} className="text-zinc-500 dark:text-zinc-500 italic">{part}</span>;
    }
    if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'")) || (part.startsWith("`") && part.endsWith("`"))) {
      return <span key={idx} className="text-emerald-600 dark:text-emerald-400">{part}</span>;
    }
    if (/^(await|async|export|function|const|let|if|throw|new|return|while|import|from|typeof|instanceof)$/.test(part)) {
      return <span key={idx} className="text-violet-600 dark:text-violet-400 font-semibold">{part}</span>;
    }
    if (/^(SELECT|FROM|WHERE|FOR UPDATE)$/.test(part)) {
      return <span key={idx} className="text-rose-600 dark:text-rose-400 font-bold">{part}</span>;
    }
    if (/^(boolean|string|number|any|void|Promise|Request|Response|NextFunction|Node|Edge|SessionActor|ResourceContext|VaultRecord)$/.test(part)) {
      return <span key={idx} className="text-blue-600 dark:text-sky-400 font-medium">{part}</span>;
    }
    if (/^\d+(?:\.\d+)?$/.test(part)) {
      return <span key={idx} className="text-amber-600 dark:text-amber-400 font-semibold">{part}</span>;
    }
    return <span key={idx}>{part}</span>;
  });
}

export function WarStories() {
  const [activeTab, setActiveTab] = React.useState<string>("locking");
  const [copied, setCopied] = React.useState(false);
  const story = WAR_STORIES.find((s) => s.id === activeTab) || WAR_STORIES[0];

  const copyCode = () => {
    navigator.clipboard.writeText(story.code);
    setCopied(true);
    toast.success("Code snippet copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="war-stories" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-hairline">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted-foreground">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Architectural war stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Production Engineering Solutions
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
          How critical backend challenges were solved in production code. Each snippet links directly to the verified GitHub repository line.
        </p>
      </div>

      {/* Tabs Header */}
      <div className="flex flex-wrap items-center gap-2 border-b border-hairline pb-4 mb-8 sm:mb-10">
        {WAR_STORIES.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setCopied(false);
              }}
              className={`relative px-4 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                isActive
                  ? "text-background font-medium"
                  : "bg-surface-50 border border-hairline text-muted-foreground hover:text-foreground hover:border-hairline-hover"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeWarStory"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className="absolute inset-0 bg-foreground rounded-lg -z-0"
                />
              )}
              <span className="relative z-10">{item.tabTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Story Card */}
      <div className="rounded-2xl bg-surface-50 border border-hairline overflow-hidden transition-colors shadow-sm">
        {/* Story Metadata Banner */}
        <div className="p-6 sm:p-8 border-b border-hairline flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-100 text-foreground border border-hairline">
                {story.platform}
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Verified production code
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              {story.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-3xl leading-relaxed">
              {story.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-100 border border-hairline hover:border-hairline-hover text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {copied ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>

            <a
              href={`${story.repoUrl}/blob/main/${story.githubFile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>View in repo (#L...)</span>
            </a>
          </div>
        </div>

        {/* Code Syntax Studio Container */}
        <div className="border-t border-hairline bg-surface-100/40 dark:bg-[#09090b] transition-colors">
          {/* Code window chrome toolbar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-hairline bg-surface-100/70 dark:bg-[#0d0d0f] text-xs font-mono text-muted-foreground transition-colors">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 text-foreground font-medium text-[11px] truncate max-w-xs sm:max-w-md">
                {story.githubFile.split("#")[0]}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-surface-50 dark:bg-surface-100 border border-hairline">
              {story.language}
            </span>
          </div>

          {/* Syntax Highlighted Code Canvas with Precision Line Numbers */}
          <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs leading-relaxed bg-[#f8f9fb] dark:bg-[#09090b] text-[#1e293b] dark:text-[#ededed] transition-colors">
            <div className="table w-full border-collapse">
              {story.code.split("\n").map((line, idx) => (
                <div key={idx} className="table-row hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors">
                  <span className="table-cell select-none text-muted-foreground/40 font-mono text-[11px] text-right pr-4 py-0.5 w-8 shrink-0">
                    {idx + 1}
                  </span>
                  <span className="table-cell whitespace-pre py-0.5">
                    {highlightSyntaxLine(line)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
