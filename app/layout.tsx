import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/Toaster";

export const metadata: Metadata = {
  title: "The Forum | Fort Lauderdale Podcast & Content Studio",
  description:
    "Fort Lauderdale's only done-for-you podcast and content studio. One membership, professional production, zero stress.",
  keywords: [
    "podcast studio",
    "content creation",
    "Fort Lauderdale",
    "video production",
    "content studio",
    "podcast production",
  ],
  authors: [{ name: "The Forum" }],
  openGraph: {
    title: "The Forum | Fort Lauderdale Podcast & Content Studio",
    description:
      "Fort Lauderdale's only done-for-you podcast and content studio. One membership, professional production, zero stress.",
    url: "https://theforum.studio",
    siteName: "The Forum",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Forum | Fort Lauderdale Podcast & Content Studio",
    description:
      "Fort Lauderdale's only done-for-you podcast and content studio. One membership, professional production, zero stress.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
