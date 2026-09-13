import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hodoolabs.com"),
  title: {
    default: "HodoLabs - Technology, Education & Digital Solutions",
    template: "%s | HodoLabs",
  },
  description:
    "HodoLabs builds modern digital learning and assessment products. Explore HodoLabs Learn, our curriculum-aligned digital learning and assessment platform.",
  keywords: [
    "HodoLabs",
    "HodoLabs Learn",
    "EdTech",
    "digital learning",
    "online assessment",
    "curriculum learning",
    "education technology",
    "Singapore Math",
    "Common Core",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  authors: [{ name: "HodoLabs" }],
  creator: "HodoLabs",
  publisher: "HodoLabs",
  alternates: {
    canonical: "https://hodoolabs.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hodoolabs.com",
    siteName: "HodoLabs",
    title: "HodoLabs - Technology, Education & Digital Solutions",
    description:
      "HodoLabs builds modern digital learning and assessment products. Explore HodoLabs Learn, our curriculum-aligned digital learning and assessment platform.",
    images: [
      {
        url: "https://res.cloudinary.com/kyvmgbzw/image/upload/v1789295065/hodoo_labs_Logo.png",
        width: 1536,
        height: 1024,
        alt: "HodoLabs - Technology, Education & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HodoLabs - Technology, Education & Digital Solutions",
    description:
      "HodoLabs builds modern digital learning and assessment products. Explore HodoLabs Learn, our curriculum-aligned digital learning and assessment platform.",
    images: [
      "https://res.cloudinary.com/kyvmgbzw/image/upload/v1789295065/hodoo_labs_Logo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HodoLabs",
    url: "https://hodoolabs.com",
    email: "hello@hodoolabs.com",
    description:
      "Technology and product company building modern digital learning and assessment experiences.",
    sameAs: ["https://learn.hodoolabs.com"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
