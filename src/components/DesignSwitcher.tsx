"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useDesign } from "@/components/DesignProvider";
import { Button } from "@/components/ui/button";

export default function DesignSwitcher() {
  const router = useRouter();
  const params = useSearchParams();
  const design = useDesign();

  const apply = (d: "snap" | "classic") => {
    const p = new URLSearchParams(params.toString());
    if (d === "snap") p.delete("design");
    else p.set("design", d);
    router.replace(`/?${p.toString()}`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-xl border bg-white/90 p-2 shadow">
      <span className="px-2 text-xs text-muted-foreground">Design</span>
      <Button
        size="sm"
        variant={design === "snap" ? "default" : "outline"}
        onClick={() => apply("snap")}
      >
        snap
      </Button>
      <Button
        size="sm"
        variant={design === "classic" ? "default" : "outline"}
        onClick={() => apply("classic")}
      >
        classic
      </Button>
    </div>
  );
}
