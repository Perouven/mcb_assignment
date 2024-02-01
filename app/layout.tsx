import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Report from '@/components/report';
import FilterIndicators from '@/components/filter_indicators';
import FilterCountry from '@/components/filter_country';

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
      <body className="body">
        
        {children}
        <Report/>
        </body>
    </html>
  );
}
