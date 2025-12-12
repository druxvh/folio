import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Druavh Mahajan",
  description: "drx - personal website",
  keywords:
    "Druavh, drx, Druavh Mahajan, dhruv mahajan, drx x, drx twitter",
  authors: [{ name: "Druavh Mahajan" }],
  openGraph: {
    title: "Druavh Mahajan - Developer",
    description:
      "drx - personal website",
    url: "https://druavh.me",
    siteName: "druavh.me",
    images: [
      {
        url: "https://druavh.me/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Druavh Mahajan",
    description: "drx - personal website",
    images: ["https://druavh.me/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} selection:bg-[#b5e48c]/15 selection:text-accent-green antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          {/* <!-- Cloudflare Web Analytics --> */}
          <Script
            defer
            src='https://static.cloudflareinsights.com/beacon.min.js'
            data-cf-beacon='{"token": "9ebb749b9d87491b880e9511efdf6d67", "spa": true}'
          />

          {/* <!-- Vercel Web Analytics --> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
