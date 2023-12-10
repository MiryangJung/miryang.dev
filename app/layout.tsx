import type { Metadata } from "next";
import "./style/globals.css";
import { suite } from "./style/fonts/suite";

export const metadata: Metadata = {
  title: "Miryang | Frontend Engineer",
  description:
    "miryang.dev, 프론트엔드 개발자의 블로그, Lazy Frontend Engineer who likes to travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={suite.className}>{children}</body>
    </html>
  );
}
