export type Design = "snap" | "classic";

export const DEFAULT_DESIGN: Design = "snap";

export function parseDesign(input: string | null | undefined): Design {
  return input === "classic" ? "classic" : "snap";
}
