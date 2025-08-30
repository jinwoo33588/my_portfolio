"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, FileText, ArrowUp } from "lucide-react";

export default function SocialFloat() {
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300); // 스크롤 300px 이상일 때 표시
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jinwoo3358@naver.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 뒤 복사 상태 해제
    } catch (err) {
      console.error("이메일 복사 실패:", err);
    }
  };

  const base =
    "w-11 h-11 flex items-center justify-center rounded-full shadow-md border bg-background/80 backdrop-blur " +
    "hover:shadow-lg hover:-translate-y-0.5 transition will-change-transform";
  const icon = "w-5 h-5";

  return (
    <div
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3"
      aria-label="Quick Links"
    >
      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={base}
          aria-label="Scroll to top"
        >
          <ArrowUp className={icon} />
          <span className="sr-only">맨 위로</span>
        </button>
      )}

      {/* Email → 복사 기능 */}
      <button
        onClick={copyEmail}
        className={base}
        aria-label="Copy Email"
        title={copied ? "복사됨!" : "이메일 복사"}
      >
        <Mail className={icon} />
        <span className="sr-only">Email</span>
      </button>
      {copied && (
        <span className="absolute bottom-20 right-0 text-xs text-green-600 bg-white px-2 py-1 rounded shadow">
          이메일이 복사되었습니다!
        </span>
      )}

      {/* GitHub */}
      <a
        href="https://github.com/jinwoo33588"
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        aria-label="GitHub"
      >
        <Github className={icon} />
        <span className="sr-only">GitHub</span>
      </a>

      {/* LinkedIn */}
      {/* <a
        href="https://www.linkedin.com/in/yourname"
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        aria-label="LinkedIn"
      >
        <Linkedin className={icon} />
        <span className="sr-only">LinkedIn</span>
      </a> */}

      {/* Resume */}
      {/* <Link href="/resume" className={base} aria-label="Resume">
        <FileText className={icon} />
        <span className="sr-only">Resume</span>
      </Link> */}
    </div>
  );
}
