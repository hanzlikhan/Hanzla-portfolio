import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroller } from "@/components/smooth-scroller";
import { Preloader } from "@/components/ui/preloader";
import { GlobalBackground } from "@/components/ui/global-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Hanzla | AI-Powered Full-Stack Engineer",
  description: "Harvard 1st Place | Stanford Mentor | 300+ LeetCode | Building intelligent multi-agent AI systems with LangChain, Groq & RAG. Open for collaborations & opportunities.",
  keywords: ["AI Engineer", "Full-Stack Developer", "LangChain", "Groq", "RAG", "Multi-Agent Systems", "Next.js", "Pakistan", "Harvard", "Stanford"],
  authors: [{ name: "Muhammad Hanzla", url: "https://hanzla-portfolio.vercel.app" }],
  creator: "Muhammad Hanzla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hanzla-portfolio.vercel.app",
    title: "Muhammad Hanzla | AI-Powered Full-Stack Engineer",
    description: "Harvard 1st Place | Stanford Mentor | 300+ LeetCode | Building intelligent multi-agent AI systems with LangChain, Groq & RAG. Open for collaborations & opportunities.",
    siteName: "Muhammad Hanzla Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/hanzlikhan/Hanzla-portfolio-2026/main/public/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Hanzla Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hanzla | AI-Powered Full-Stack Engineer",
    description: "Harvard 1st Place | Stanford Mentor | 300+ LeetCode | Building intelligent multi-agent AI systems with LangChain, Groq & RAG.",
    images: ["https://raw.githubusercontent.com/hanzlikhan/Hanzla-portfolio-2026/main/public/images/profile.png"],
  },
  alternates: {
    canonical: "https://hanzla-portfolio.vercel.app",
  },
};

export const viewport = {
  themeColor: "#05050f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Preloader />
          <GlobalBackground />
          <SmoothScroller />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
