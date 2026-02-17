"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { TooltipProvider } from "@/components/ui/tooltip";

interface ProvidersProps {
  children: React.ReactNode;
  props: React.ComponentProps<typeof ThemeProvider>;
}

export function Providers({ children, props }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider {...props}>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
