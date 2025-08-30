// components/ResumeSection.tsx
"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import ResumeModal from "./ResumeModal";
import ResumePage from "./page";

export default function ResumeSection() {
  const [open, setOpen] = useState(false);

  return (
    <Section
      id="resume"
      zebra={["dark","muted"]}
      index={4}
      eyebrow="Resume"
      title="Resume & Contact"
      subtitle="웹 이력서, PDF, 연락처"
      showLine
    >
      <div className="flex flex-wrap gap-3">
        {/* 페이지 이동 대신 모달 오픈 */}
        <Button size="lg" onClick={() => setOpen(true)}>웹 이력서 보기</Button>
        {/* <Button asChild size="lg" variant="outline"><a href="/resume.pdf" download>PDF 다운로드</a></Button>
        <Button asChild size="lg" variant="outline"><a href="mailto:you@example.com">Email</a></Button> */}
      </div>

      <ResumeModal open={open} onClose={() => setOpen(false)} size="xl" innerClassName="max-w-3xl">
        <ResumePage />
      </ResumeModal>
    </Section>
  );
}
