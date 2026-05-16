import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vikramsingh.in"),
  title: {
    default: "Vikram Singh | Full Stack Developer & AI Engineer",
    template: "%s | Vikram Singh",
  },
  description: "Personal portfolio of Vikram Singh Deora, a Full Stack Developer specializing in Next.js, AI systems, and high-performance web applications.",
  keywords: ["Next.js", "React", "TypeScript", "Full Stack Developer", "AI Engineer", "Portfolio", "Web Development"],
  authors: [{ name: "Vikram Singh Deora" }],
  creator: "Vikram Singh Deora",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikramsingh.in",
    siteName: "Vikram Singh Portfolio",
    title: "Vikram Singh | Full Stack Developer & AI Engineer",
    description: "Building modern, scalable, and high-performance web experiences with Next.js and AI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vikram Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Singh | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js and AI-driven solutions.",
    images: ["/og-image.jpg"],
    creator: "@vikramsingh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ScrollProgress from "@/components/animations/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
