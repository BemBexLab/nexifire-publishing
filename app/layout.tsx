import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "sweetalert2/dist/sweetalert2.min.css";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ConditionalFooter from "@/components/ConditionalFooter";
import {
  defaultDescription,
  defaultOgImage,
  siteName,
  siteUrl,
} from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Self Publishing Company USA | NexiFire Publishing",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "book publishing services",
    "self-publishing company USA",
    "ghostwriting services",
    "book editing services",
    "book cover design",
    "audiobook production",
    "book marketing services",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title:
      "NexiFire Publishing | Professional Book Publishing Services in the USA",
    description: defaultDescription,
    locale: "en_US",
    images: [
      {
        url: defaultOgImage,
        width: 920,
        height: 620,
        alt: "Books and publishing services from NexiFire Publishing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NexiFire Publishing | Professional Book Publishing Services in the USA",
    description: defaultDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col`}>
        <NavBar />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
