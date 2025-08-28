"use client";

import { createContext, useContext, useMemo } from "react";
import type { Design } from "@/lib/design";

const DesignContext = createContext<Design>("snap");

export function useDesign() {
  return useContext(DesignContext);
}

export function DesignProvider({
  value,
  children,
}: {
  value: Design;
  children: React.ReactNode;
}) {
  const memo = useMemo(() => value, [value]);
  return <DesignContext.Provider value={memo}>{children}</DesignContext.Provider>;
}
