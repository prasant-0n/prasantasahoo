import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafb" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Prasanta Kumar Sahoo | Backend & Full-Stack Systems Engineer",
  description:
    "Production-grade Backend & Full-Stack Systems Engineer (MCA 2023, Immediate Joiner). Specializing in high-throughput Node.js microservices, PostgreSQL ACID ledgers, Next.js 16 monorepos, and zero-cost serverless DevOps meshes.",
  keywords: [
    "Prasanta Kumar Sahoo",
    "Node.js Backend Developer",
    "Backend & Full-Stack Systems Engineer",
    "PostgreSQL",
    "Next.js 16",
    "TypeScript",
    "Redis",
    "BullMQ",
    "OpsEngine",
    "JewelCore ERP",
    "NeuralDesk",
    "Immediate Joiner",
    "Bengaluru Software Engineer",
  ],
  authors: [{ name: "Prasanta Kumar Sahoo", url: "https://github.com/prasant-0n" }],
  creator: "Prasanta Kumar Sahoo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/prasant-0n",
    title: "Prasanta Kumar Sahoo | Backend & Full-Stack Systems Engineer",
    description:
      "Production-grade Backend Systems Engineer (MCA 2023 | Immediate Joiner). OpsEngine (76K LOC Monorepo), JewelCore ERP (0.001g Custody, 1,000+ Tests), NeuralDesk (Visual AI DAG).",
    siteName: "Prasanta Kumar Sahoo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanta Kumar Sahoo | Backend & Full-Stack Systems Engineer",
    description:
      "Production-grade Backend Systems Engineer (MCA 2023 | Immediate Joiner). OpsEngine (76K LOC), JewelCore ERP (1,000+ Tests), NeuralDesk.",
    creator: "@prasant_0n",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative bg-background`}
      >
        <div className="bg-ambient-top" aria-hidden="true" />
        <div className="bg-grid-lattice" aria-hidden="true" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
