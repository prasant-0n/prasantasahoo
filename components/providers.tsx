"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--surface-100)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            fontFamily: "var(--font-geist-sans)",
            fontSize: "13px",
          },
        }}
      />
    </NextThemesProvider>
  );
}
