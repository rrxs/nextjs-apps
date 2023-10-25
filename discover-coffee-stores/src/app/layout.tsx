import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover - Coffee Stores",
  description: "Discover coffee stores around you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
