"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type SkillGroup = { group: string; items: string[] };
export type EduItem = { school: string; major?: string; period: string };
export type ExpItem = { company: string; role?: string; period: string };
export type ProjectItem = {
  title: string;
  period: string;
  tags: string[];
  summary: string;
  bullets: { label?: string; text: string }[];
};
export type ResumeContent = {
  header: {
    name: string;
    roleLine: string;
    email: string;
    githubUrl?: string;
    portfolioUrl?: string;
    pdfHref?: string;
  };
  summary: string;
  skills: SkillGroup[];
  education: EduItem[];
  experience?: ExpItem[];
  projects: ProjectItem[];
};

export default function ResumeBody({ content }: { content: ResumeContent }) {
  const [copied, setCopied] = useState(false);
  const { header, summary, skills, education, experience, projects } = content;

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(header.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article className="mx-auto w-full max-w-3xl">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {header.name}
          </h1>
          {header.pdfHref && (
            <Button asChild variant="secondary" className="border-gray-300">
              <a href={header.pdfHref} download>
                PDF 다운로드
              </a>
            </Button>
          )}
        </div>

        <p className="mt-4 text-[15px] text-gray-700">{header.roleLine}</p>

        {/* 연락처 */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            이메일:{" "}
            <button
              onClick={handleCopyEmail}
              className="underline hover:text-gray-900 text-left"
            >
              {header.email}
            </button>
            {copied && (
              <span className="text-green-600 text-xs font-medium">복사완료</span>
            )}
          </div>

          {header.githubUrl && (
            <div>
              Github:{" "}
              <Link
                href={header.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gray-900"
              >
                {header.githubUrl}
              </Link>
            </div>
          )}

          {header.portfolioUrl && (
            <div>
              Portfolio:{" "}
              <Link
                href={header.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gray-900"
              >
                {header.portfolioUrl}
              </Link>
            </div>
          )}
        </div>
      </header>

      <hr className="border-gray-200 my-6" />

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">요약</h2>
        <p className="mt-3 text-[15px] leading-[1.85] text-gray-700">{summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">핵심 기술</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-gray-300 bg-gray-100 text-gray-800"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career & Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">경력 & 학력</h2>

        {education.map((e) => (
          <div
            key={`${e.school}-${e.period}`}
            className="mt-6 flex items-baseline justify-between"
          >
            <p className="font-medium text-gray-900">
              {e.school}
              {e.major ? ` — ${e.major}` : ""}
            </p>
            <span className="text-xs text-gray-500">{e.period}</span>
          </div>
        ))}

        {experience?.map((x) => (
          <div
            key={`${x.company}-${x.period}`}
            className="mt-4 flex items-baseline justify-between"
          >
            <p className="font-medium text-gray-900">
              {x.company}
              {x.role ? ` — ${x.role}` : ""}
            </p>
            <span className="text-xs text-gray-500">{x.period}</span>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">프로젝트</h2>

        {projects.map((p) => (
          <div key={`${p.title}-${p.period}`} className="mb-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
              <time className="text-xs text-gray-500">{p.period}</time>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge
                  key={t}
                  className="border-gray-300 bg-gray-100 text-gray-800"
                  variant="outline"
                >
                  {t}
                </Badge>
              ))}
            </div>

            <p className="mt-3 text-[15px] text-gray-700">{p.summary}</p>

            <ul className="mt-2 space-y-1 pl-5">
              {p.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="list-disc text-[15px] leading-relaxed text-gray-700"
                >
                  {b.label ? (
                    <span className="font-medium text-gray-900">{b.label}: </span>
                  ) : null}
                  {b.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}