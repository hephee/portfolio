import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김은희 | AI Engineer Portfolio",
  description: "정확히 문제를 정의하여 이를 Data와 AI로 해결하는 AI Engineer 김은희의 포트폴리오입니다.",
  openGraph: {
    title: "김은희 | AI Engineer Portfolio",
    description: "정확히 문제를 정의하여 이를 Data와 AI로 해결하는 AI Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
