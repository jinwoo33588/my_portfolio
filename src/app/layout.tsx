// layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import LeftNav from "@/components/LeftNav";
import SocialFloat from "@/components/SocialFloat"; // ✅ 추가

export const metadata: Metadata = {
  title: "Jinwoo | Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <LeftNav />
        <SocialFloat /> {/* ✅ 오른쪽 아래 플로팅 아이콘 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
