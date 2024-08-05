"use client";

import { ThemeProvider } from "./theme-provider";
import type { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
);
