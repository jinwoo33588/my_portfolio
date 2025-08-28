import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // 네가 올린 Button


export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  year?: string;
  stack: string[];
  links?: { repo?: string; demo?: string };
  sections?: Array<{ title: string; paragraphs?: string[]; bullets?: string[] }>;
};

export default function ProjectCard({
  p,
  onOpen,
}: {
  p: ProjectItem;
  onOpen?: (p: ProjectItem) => void;
}) {
  return (
    <Card className="group relative h-full overflow-hidden"> {/* ← group/relative 추가 */}
      {/* ── 기존 내용 그대로 ── */}
      <CardHeader className="space-y-1">
        <div className="flex items-baseline justify-between gap-4">
          <CardTitle className="text-base">{p.title}</CardTitle>
          {p.year && <span className="text-xs text-muted-foreground">{p.year}</span>}
        </div>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground">
        {p.summary}
      </CardContent>

      {/* 모바일에서는 기존 Footer 유지, 데스크탑에서는 hover 오버레이만 보이게 */}
      <CardFooter className="flex gap-4 text-sm md:hidden">
        <button className="underline" onClick={() => onOpen?.(p)}>Case study →</button>
        {p.links?.repo && <a className="underline" href={p.links.repo} target="_blank">Repo</a>}
        {p.links?.demo && <a className="underline" href={p.links.demo} target="_blank">Demo</a>}
      </CardFooter>

      {/* ── hover 오버레이 (데스크탑) ── */}
      {/* 1) 디밍 */}
      <div
        className="
          pointer-events-none absolute inset-0 z-20 hidden md:block
          bg-black/0 transition-all duration-300
          group-hover:bg-black/50 group-focus-within:bg-black/50
        "
        aria-hidden="true"
      />

      {/* 중앙 버튼 스택 */}
      <div
        className="
          hidden md:flex absolute inset-0 z-30 items-center justify-center
          opacity-0 pointer-events-none translate-y-2
          transition-all duration-200
          group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
          group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0
        "
      >
        <div className="flex w-[min(240px,90%)] flex-col gap-2">
          {/* Case study → 모달 오픈 */}
          <Button
            variant="outline"            // 밝은 회색 배경 + 진한 텍스트
            size="sm"
            className="h-9 w-full shadow"  // 가독성↑
            onClick={() => onOpen?.(p)}
          >
            Detail
          </Button>

          {/* Repo */}
          {p.links?.repo && (
            <Button asChild variant="outline" size="sm" className="h-9 w-full shadow">
              <a href={p.links.repo} target="_blank" rel="noreferrer">Repo</a>
            </Button>
          )}

          {/* Demo */}
          {p.links?.demo && (
            <Button asChild size="sm" className="h-9 w-full shadow">
              <a href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
