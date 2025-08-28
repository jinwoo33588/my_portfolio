// layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
// LeftNav를 fixed로 쓰고 있다면 그대로 두고, 여백은 제거
import LeftNav from "@/components/LeftNav";

export const metadata: Metadata = {
  title: "Jinwoo | Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({ children,modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <LeftNav /> {/* fixed인 경우 레일 위에 떠 있음 */}
        <main>{children} {modal}</main> {/* ← md:ml-56 제거! */}
      </body>
    </html>
  );
}
