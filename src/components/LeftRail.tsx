"use client";

import { useEffect, useState } from "react";

type ThemeKey = "paper" | "muted" | "dark" | "brand";

const SECTION_IDS = ["main", "about", "skills", "projects", "resume"];

export default function LeftRail() {
  const [theme, setTheme] = useState<ThemeKey>("paper");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target) {
          const t = (visible.target.getAttribute("data-section-theme") || "paper") as ThemeKey;
          setTheme(t);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div
      // 섹션 토큰과 동기화
      data-section-theme={theme}
      className={[
        "fixed left-0 top-0 z-10 hidden md:block h-screen w-56",
        // 토큰 기반 배경/보더
        "bg-[rgb(var(--section-bg))] border-r border-[rgb(var(--section-line))]",
        // 안전망: dark/brand일 때 즉시 대비 보장
        "data-[section-theme=dark]:bg-black data-[section-theme=dark]:border-white/20",
        // 살짝 유리광 느낌 주고 싶으면 다음 줄 주석 해제:
        // "backdrop-blur bg-opacity-90"
      ].join(" ")}
      aria-hidden
    />
  );
}
