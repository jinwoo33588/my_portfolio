import React from "react";

export default function IconTile({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <div
        data-tooltip={title}
        className="flex items-center justify-center rounded-md bg-muted p-3 text-muted-foreground shadow-sm transition hover:bg-accent hover:text-accent-foreground"
      >
        {children}
      </div>
      <div
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
      >
        {title}
      </div>
    </div>
  );
}