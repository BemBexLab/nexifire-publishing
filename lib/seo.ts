import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (
  configuredSiteUrl || "https://nexifirepublishing.com"
).replace(/\/$/, "");

export const defaultOgImage = "/image 67.png";

export const siteName = "NexiFire Publishing";

export const defaultDescription =
  "NexiFire is a self-publishing company in the USA offering book publishing services for authors and first-time writers, from editing and design to publishing and distribution.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName,
      locale: "en_US",
      images: [
        {
          url: image,
          width: 920,
          height: 620,
          alt: `${siteName} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export const serviceSeo = {
  "book-marketing": {
    title: "Best Book Marketing Services for Self-Published Authors ",
    description:
      "Professional book marketing services for self-published authors designed to increase visibility, reach more readers, and help sell more books through strategic promotion.",
  },
  "book-cover-design": {
    title: "Book Cover Design Services | NexiFire Publishing",
    description:
      "Professional Book cover design services for authors. Get a custom book cover designed to match your genre, brand, and publishing goals.",
  },
} as const;
