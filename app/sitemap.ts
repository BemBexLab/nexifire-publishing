import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blogs";
import { publishingServiceSlugs } from "@/app/publishing-services/[slug]/data";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/blogs",
  "/contact",
  "/our-books",
  "/pricing-packages",
  "/publishing-services",
  "/publishing-services/audio-book",
  "/publishing-services/book-editing",
  "/publishing-services/book-publishing",
  "/publishing-services/ghost-writing",
  "/privacy-policy",
  "/terms-condition",
  "/who-we-are",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = publishingServiceSlugs.map(
    (slug) => `/publishing-services/${slug}`,
  );
  const blogRoutes = blogPosts.map((post) => `/blogs/${post.slug}`);
  const routes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blogs") ? "monthly" : "weekly",
    priority: route === "/" ? 1 : route.startsWith("/blogs/") ? 0.7 : 0.8,
  }));
}
