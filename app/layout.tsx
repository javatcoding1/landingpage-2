import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Helixque",
  description: "Connect with professionals worldwide through Helixque's real-time video chat platform. Match based on preferences, network effectively, and build meaningful professional relationships.",
  keywords: ["professional networking", "video chat", "business meetings", "professional connections", "WebRTC", "real-time communication"],
  authors: [{ name: "Helixque Team" }],
  openGraph: {
    title: "Helixque",
    description: "Connect with professionals worldwide through real-time video chat. Match based on preferences and build meaningful business relationships.",
    type: "website",
    siteName: "Helixque",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Helixque - Professional Networking Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helixque",
    description: "Connect with professionals worldwide through real-time video chat platform.",
    images: ["/logo.svg"],
  },
  robots: "index, follow",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
