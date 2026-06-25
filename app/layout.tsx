import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "手取り計算ツール【無料】給料の手取り額を自動計算",

  description:
    "月収・所得税・社会保険料を入力するだけで給料の手取り額を無料で自動計算できる便利ツールです。",

  keywords: [
    "手取り計算",
    "給料計算",
    "月収計算",
    "所得税計算",
    "社会保険料",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}