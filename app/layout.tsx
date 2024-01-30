import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Report from '@/components/report';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCB report",
  description: "WDI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        <Report/>
        
        </body>
    </html>
  );
}
