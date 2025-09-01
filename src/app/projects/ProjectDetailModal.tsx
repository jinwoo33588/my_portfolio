"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { ProjectItem } from "@/components/ProjectCard";
import { Github, FileText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/** Trouble 케이스(이 파일 내부에서만 사용) */
type TroubleCase = {
  title: string;       // 문제 상황 제목
  problem: string;     // 문제점 설명
  solution: string;    // 해결 방법
  reflection?: string; // 회고/배운 점
};

/** 섹션(기존 방식 유지, troubles만 추가) */
type DetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  troubles?: TroubleCase[]; // Trouble Shooting일 때 사용
};

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const [showSlides, setShowSlides] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
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
  // slidesPdf는 ProjectItem에 없을 수 있으니 안전하게 읽기
  const slidesPdf = (p as any)?.slidesPdf as string | undefined;

  const sections: DetailSection[] = Array.isArray(p.sections)
    ? (p.sections as DetailSection[])
    : [];

  // 새 탭 열기 헬퍼
  const openInNewTab = (url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* 백드롭 */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* 모달 컨테이너 */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[95vw] max-h-[90vh] overflow-auto
          sm:max-w-4xl md:max-w-5xl lg:max-w-6xl
          rounded-xl border bg-background shadow-xl
        "
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          aria-label="닫기"
          className="sticky top-3 float-right mr-3 mt-3 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted/60"
        >
          <span className="text-lg leading-none">×</span>
        </button>

        {/* 문서(노션 톤) */}
        <div className="clear-both px-6 sm:px-8 py-8">
          <article className="mx-auto w-full max-w-3xl">
            {/* 헤더 */}
            <header className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-black-100">{p.title}</h1>
              {p.year && (
                <div className="mt-1 text-sm text-black-400">{p.year}</div>
              )}
              <p className="mt-3 text-[15px] leading-relaxed text-black-300">
                {p.summary}
              </p>

              {/* 스택 배지 */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="default">
                    {s}
                  </Badge>
                ))}
              </div>

              {/* 링크/자료 아이콘 버튼 영역 */}
{(p.links?.repo || slidesPdf) && (
  <TooltipProvider>
    <div className="mt-4 flex gap-3 text-sm">
      {/* GitHub Repo 버튼 */}
      {p.links?.repo && (
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={p.links.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border shadow hover:bg-muted/60"
            >
              <Github className="w-5 h-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>GitHub 저장소</TooltipContent>
        </Tooltip>
      )}

      {/* PDF 발표자료 버튼 */}
      {slidesPdf && (
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={encodeURI(slidesPdf)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border shadow hover:bg-muted/60"
            >
              <FileText className="w-5 h-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>발표자료 PDF</TooltipContent>
        </Tooltip>
      )}
    </div>
  </TooltipProvider>
)}
            </header>

            {/* PDF 뷰어 (토글) */}
            {showSlides && slidesPdf && (
              <div className="mb-8 rounded-lg border bg-white/5 overflow-hidden">
                <iframe
                  // PDF 뷰 개선: 상단 맞춤 보기
                  src={`${slidesPdf}#view=FitH`}
                  className="w-full h-[70vh]"
                  title="발표 자료"
                />
                <div className="flex items-center gap-3 p-2 border-t">
                  <button
                    type="button"
                    onClick={() => openInNewTab(slidesPdf)}
                    className="px-3 py-1.5 text-sm rounded-md border hover:bg-muted/50"
                    aria-label="새 탭에서 열기"
                    title="새 탭에서 열기"
                  >
                    새 탭에서 열기
                  </button>
                  <a
                    href={slidesPdf}
                    download
                    className="px-3 py-1.5 text-sm rounded-md border hover:bg-muted/50"
                    aria-label="PDF 다운로드"
                    title="PDF 다운로드"
                  >
                    다운로드
                  </a>
                </div>
              </div>
            )}

            <hr className="border-white/10 my-6" />

            {/* 섹션들 */}
            {sections.map((sec) => (
              <section key={sec.title} className="mb-10">
                <h2 className="text-2xl font-semibold text-black-100 bg-gray-200">{sec.title}</h2>

                {/* 본문 */}
                {sec.paragraphs?.map((para, i) => (
                  <p
                    key={i}
                    className="mt-3 text-[15px] leading-[1.8] text-black-300"
                  >
                    {para}
                  </p>
                ))}

                {/* 리스트 */}
                {!!sec.bullets?.length && (
                  <ul className="mt-3 space-y-2 pl-5">
                    {sec.bullets.map((b, i) => (
                      <li key={i} className="list-disc text-[15px] leading-relaxed text-black-300">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Trouble Shooting: 박스 강조 */}
                {!!sec.troubles?.length && (
                  <div className="mt-4 space-y-5">
                    {sec.troubles.map((t, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                      >
                        <h3 className="w-fit  text-[15px] font-semibold text-black-100 bg-red-100">
                          {t.title}
                        </h3>
                        <p className="mt-2 text-sm text-black-300">
                          <span className="font-medium text-black-200">문제</span>
                          <span className="mx-2 text-black-500">•</span>
                          {t.problem}
                        </p>
                        <p className="mt-2 text-sm text-black-300">
                          <span className="font-medium text-black-200">해결</span>
                          <span className="mx-2 text-black-500">•</span>
                          {t.solution}
                        </p>
                        {t.reflection && (
                          <p className="mt-2 text-sm text-black-400">
                            <span className="font-medium text-black-200">회고</span>
                            <span className="mx-2 text-black-500">•</span>
                            {t.reflection}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}