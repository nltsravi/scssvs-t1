import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Shastra Vidya Sthanam",
    default: "Shastra Vidya Sthanam - Preserving Ancient Knowledge",
  },
  description: "A traditional institution preserving spiritual knowledge, offering courses in Sanskrit, Advaita Vedanta, and ancient texts.",
  keywords: ["Sanskrit", "Advaita Vedanta", "Traditional Knowledge", "Shastra Vidya", "Vedic Heritage", "India"],
  openGraph: {
    title: "Shastra Vidya Sthanam",
    description: "Preserving and disseminating ancient spiritual and traditional knowledge for future generations.",
    url: "https://shastravidya.org",
    siteName: "Shastra Vidya Sthanam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shastra Vidya Sthanam",
    description: "Preserving and disseminating ancient spiritual knowledge.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-gray-800 dark:text-gray-100 dark:bg-gray-950">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
