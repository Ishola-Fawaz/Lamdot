import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/src/providers/CartProvider";

// import QueryProvider from "@/src/providers/QueryProvider"; // Removed TanStack Query to fix runtime error

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: "variable",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Lamdot - Premium Footwear",
  description:
    "Premium footwear designed for every step. Built for performance, styled for comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
