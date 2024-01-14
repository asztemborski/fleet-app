import { Quicksand } from "next/font/google";
import type { Metadata } from "next";

import { appDescription } from "@/constants/common";

import "@/styles/_global.scss";

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Welcome | Fleet",
  description: appDescription,
};

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale}>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
