import type { Metadata } from "next";
import "./style/globals.css";
import { suit } from "./style/fonts/suit";
import Header from "@/components/header";

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
    <html lang="ko" className={suit.className}>
      <body className="max-w-screen-md min-w-[320px] mx-auto">
        <main className="flex flex-col">
          <Header />
          <div className="p-5 flex flex-col">{children}</div>
        </main>
      </body>
    </html>
  );
}
