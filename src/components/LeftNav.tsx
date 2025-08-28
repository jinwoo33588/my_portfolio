"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "main",    label: "Main",    href: "#main" },
  { id: "about",   label: "About",   href: "#about" },
  { id: "skills",  label: "Skills",  href: "#skills" },
  { id: "projects",label: "Projects",href: "#projects" },
  { id: "resume",  label: "Resume",  href: "#resume" },
];

const TOP_LOCK_PX = 120;
const BOTTOM_LOCK_PX = 120;

export default function LeftNav() {
  const [activeIndex, _setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const rafId = useRef<number | null>(null);

  const setActiveIndex = (idx: number) => {
    activeIndexRef.current = idx;
    _setActiveIndex(idx);
  };

  const getPairs = () =>
    SECTIONS.map(({ id }, idx) => {
      const el = document.getElementById(id);
      return el ? { el, idx } : null;
    }).filter((v): v is { el: HTMLElement; idx: number } => v !== null);

  const updateActive = () => {
    const pairs = getPairs();
    if (!pairs.length) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const docH =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) || 0;
    const winH = window.innerHeight || 0;

    // 1) 위쪽 락
    const firstTop = pairs[0].el.offsetTop;
    if (scrollY <= firstTop + TOP_LOCK_PX) {
      if (activeIndexRef.current !== 0) setActiveIndex(0);
      return;
    }

    // 2) 아래쪽 락
    if (scrollY + winH >= docH - BOTTOM_LOCK_PX) {
      const lastIdx = pairs[pairs.length - 1].idx;
      if (activeIndexRef.current !== lastIdx) setActiveIndex(lastIdx);
      return;
    }

    // 3) 중앙 기준 가장 가까운 섹션
    const centerY = winH / 2;
    let bestIdx = activeIndexRef.current;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const { el, idx } of pairs) {
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const dist = Math.abs(mid - centerY);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    }

    if (bestIdx !== activeIndexRef.current) setActiveIndex(bestIdx);
  };

  useEffect(() => {
    const schedule = () => {
      if (rafId.current != null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        updateActive();
      });
    };

    // 여러 입력 소스에 반응
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("touchmove", schedule, { passive: true });
    window.addEventListener("keydown", (e) => {
      // PageUp/Down, Home/End, Space 등으로도 갱신
      if (["PageUp", "PageDown", "Home", "End", " ", "ArrowUp", "ArrowDown"].includes(e.key)) {
        schedule();
      }
    });

    // 초기 1회 계산
    updateActive();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("touchmove", schedule);
      // keydown 리스너는 익명이라 생략해도 큰 문제 없음
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 클릭 시 선반영(스냅 애니메이션 중에도 색 바로 변경)
  const handleClick = (idx: number) => () => setActiveIndex(idx);

  const isEven = activeIndex % 2 === 0;
  const navColor = isEven
    ? "bg-white text-black border-gray-300"
    : "bg-black text-white border-gray-600";

  return (
    <aside
      className={`fixed left-4 top-1/2 z-50 hidden md:flex -translate-y-1/2
                  flex-col items-center gap-6 rounded-xl border px-3 py-3
                  transition-colors duration-300 ${navColor}`}
    >
      {SECTIONS.map(({ href, label }, idx) => {
        const isActive = activeIndex === idx;
        return (
          <Link
            key={href}
            href={href}
            onClick={handleClick(idx)}
            className="group relative flex h-5 w-5 items-center justify-center"
            aria-label={label}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full transition-transform
                          ${isActive ? "scale-125" : "opacity-70 group-hover:opacity-100"}`}
              style={{ backgroundColor: "currentColor" }}
            />
            <span
              className={`pointer-events-none absolute left-7 whitespace-nowrap rounded px-2 py-1 text-xs
                          opacity-0 transition-opacity group-hover:opacity-100
                          ${isEven ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </aside>
  );
}
