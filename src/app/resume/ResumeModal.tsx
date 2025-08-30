"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

const SIZE = {
  md: "w-[96vw] max-w-4xl max-h-[88vh]",
  lg: "w-[97vw] max-w-5xl max-h-[90vh]",
  xl: "w-[98vw] max-w-6xl max-h-[92vh]",
  "2xl": "w-[98vw] max-w-7xl max-h-[94vh]",
} as const;

export default function ResumeModal({
  open,
  onClose,
  size = "xl",
  children,
  innerClassName,
}: {
  open: boolean;
  onClose: () => void;
  size?: keyof typeof SIZE;
  children: React.ReactNode;
  innerClassName?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-xl",
          "border border-gray-200 bg-white shadow-2xl",
          SIZE[size]
        )}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="닫기"
          className="sticky right-3 top-3 float-right m-3 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-800 text-gray-200"
        >
          <span className="text-lg leading-none">×</span>
        </button>

        {/* Content */}
        <div
          className={cn(
            "clear-both mx-auto w-full max-w-3xl px-6 sm:px-8 py-8",
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
