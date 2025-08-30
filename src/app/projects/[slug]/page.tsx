// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../../contents/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.title} | Case Study`,
    description: p.summary,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="fixed inset-0 z-50">
      {/* 백드롭 */}
      <Link
        href="/"
        aria-label="닫기"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* 모달 박스 */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          absolute left-1/2 top-1/2
          w-[95vw] max-w-4xl max-h-[85vh]
          -translate-x-1/2 -translate-y-1/2
          overflow-auto rounded-xl border bg-background shadow-xl
          p-6
        "
      >
        {/* 닫기 버튼 */}
        <div className="absolute right-3 top-3">
          <Link
            href="/projects"
            aria-label="닫기"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
          >
            <span className="text-lg leading-none">×</span>
          </Link>
        </div>

        {/* ✅ 내부 컨테이너로 가로폭 제한 + 좌우 패딩 추가 */}
        <div className="mx-auto w-full max-w-2xl sm:max-w-3xl px-5 sm:px-6 py-6">
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
                    <Link href={p.links.repo} target="_blank" className="underline">
                      Repo
                    </Link>
                  )}
                  {p.links?.demo && (
                    <Link href={p.links.demo} target="_blank" className="underline">
                      Live
                    </Link>
                  )}
                </CardFooter>
              )}
            </Card>

            {/* 섹션들 */}
            {p.sections.map((sec) => (
              <Card key={sec.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{sec.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {sec.paragraphs?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {sec.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
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
