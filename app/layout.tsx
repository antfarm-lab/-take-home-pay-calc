import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "手取り計算ツール【無料】月収・給料・額面から手取りを計算",

  description:
    "月収・給料の額面から手取り額を無料で計算できるツールです。所得税率・社会保険料率を入力して、月収30万円などの手取り目安や控除額を簡単にシミュレーションできます。",

  verification: {
    google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
  },

  keywords: [
    "手取り計算",
    "給料 手取り",
    "月収 手取り",
    "月収30万 手取り",
    "額面 手取り",
    "給与 手取り 計算",
    "手取り シミュレーション",
    "所得税 計算",
    "社会保険料",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"><head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  />
</head>

      <body>{children}</body>
    </html>
  );
}