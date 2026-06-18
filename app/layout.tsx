import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Xy - The Dev",
  description:
    "Xynil Jhed Lacap is a Filipino full-stack developer building tax software, AI systems, document intelligence, and agent harnesses. He works across Next.js, Python, automation, and AI tooling to turn messy workflows into reliable products.",
  openGraph: {
    title: "Xy - The Dev",
    description:
      "Xynil Jhed Lacap is a Filipino full-stack developer building tax software, AI systems, document intelligence, and agent harnesses. He works across Next.js, Python, automation, and AI tooling to turn messy workflows into reliable products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xy - The Dev",
    description:
      "Xynil Jhed Lacap is a Filipino full-stack developer building tax software, AI systems, document intelligence, and agent harnesses. He works across Next.js, Python, automation, and AI tooling to turn messy workflows into reliable products.",
  },
  icons: {
    icon: "/xy-the-dev-icon.jpg",
    apple: "/xy-the-dev-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
