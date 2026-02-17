import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexachat.nayalsaurav.in";

export const metadata: Metadata = {
  title: {
    default: "Nexa Chat – AI Assistant with Real-Time Tool Calling",
    template: "%s | Nexa Chat",
  },
  description:
    "Get real-time answers with live weather, F1 races, stock prices, and more — all through a simple conversation powered by AI tool calling.",
  keywords: [
    "AI chat",
    "tool calling",
    "AI assistant",
    "real-time data",
    "weather",
    "stock prices",
    "F1 races",
    "conversational AI",
    "Nexa Chat",
  ],
  authors: [{ name: "Saurav Nayal", url: "https://nayalsaurav.in" }],
  creator: "Saurav Nayal",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nexa Chat",
    title: "Nexa Chat – AI Assistant with Real-Time Tool Calling",
    description:
      "Get real-time answers with live weather, F1 races, stock prices, and more — powered by AI tool calling.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Nexa Chat Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Chat – AI Assistant with Real-Time Tool Calling",
    description:
      "Get real-time answers with live weather, F1 races, stock prices, and more — powered by AI tool calling.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}
      >
        <Providers
          props={{
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
