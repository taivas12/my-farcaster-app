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
  title: "Daily Motivation Check-In",
  description: "Get your personalized daily motivation with countdown timer",
  openGraph: {
    title: "Daily Motivation Check-In",
    description: "Think you need a vibe boost? Get your personalized quote + 24h countdown",
    images: [
      {
        url: "https://my-farcaster-52dj7cmg-taivas12s-projects.vercel.app/og-image.png",
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://my-farcaster-52dj7cmg-taivas12s-projects.vercel.app/og-image.png",
    "fc:frame:post_url": "https://my-farcaster-52dj7cmg-taivas12s-projects.vercel.app/api/frame",
    "fc:frame:button:1": "🔄 Get New Quote",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}