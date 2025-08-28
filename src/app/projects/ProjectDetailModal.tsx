"use client";

import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectItem } from "@/components/ProjectCard";

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!project) return null;
  const p = project;

  return (
    <div className="fixed inset-0 z-50">
      {/* 백드롭 */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* 모달 박스 (바깥은 p-0, 내부에 컨테이너로 여백/최대폭 관리) */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          absolute left-1/2 top-1/2
          w-[98vw] max-h-[92vh]
          sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl
          -translate-x-1/2 -translate-y-1/2
          overflow-auto rounded-xl border bg-background shadow-xl
          p-0
        "
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
        >
          <span className="text-lg leading-none">×</span>
        </button>

        {/* ✅ 내부 컨테이너: 좌우 여백 + 내용 최대폭 제한 */}
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 py-6">
          <section className="space-y-8">
            {/* 헤더 요약 */}
            <Card>
              <CardHeader className="gap-2">
                <div className="flex items-baseline justify-between">
                  <CardTitle className="text-2xl">{p.title}</CardTitle>
                  {p.year && <span className="text-xs text-muted-foreground">{p.year}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              {(p.links?.repo || p.links?.demo) && (
                <CardFooter className="flex gap-4 text-sm">
                  {p.links?.repo && (
                    <a href={p.links.repo} target="_blank" className="underline">
                      Repo
                    </a>
                  )}
                  {p.links?.demo && (
                    <a href={p.links.demo} target="_blank" className="underline">
                      Live
                    </a>
                  )}
                </CardFooter>
              )}
            </Card>

            {/* 섹션들 */}
            {p.sections?.map((sec: any) => (
              <Card key={sec.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{sec.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {sec.paragraphs?.map((para: string, i: number) => <p key={i}>{para}</p>)}
                  {!!sec.bullets?.length && (
                    <ul className="list-disc pl-5 space-y-1">
                      {sec.bullets.map((b: string, i: number) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
