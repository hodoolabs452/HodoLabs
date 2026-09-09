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
    default: "HodoLabs — Building Better Digital Learning Experiences",
    template: "%s | HodoLabs",
  },
  description:
    "HodoLabs builds modern digital learning and assessment products. Explore HodoLabs Learn, our digital learning and assessment platform.",
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
    title: "HodoLabs — Building Better Digital Learning Experiences",
    description:
      "HodoLabs builds modern digital learning and assessment products. Explore HodoLabs Learn, our digital learning and assessment platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HodoLabs — Building Better Digital Learning Experiences",
    description:
      "HodoLabs builds modern digital learning and assessment products. Explore HodoLabs Learn, our digital learning and assessment platform.",
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
