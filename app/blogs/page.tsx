import BlogGrid from "@/components/BlogGrid";
import PageHero from "@/components/PageHero";
import PublishYourBook from "@/components/PublishYourBook";
import { createPageMetadata } from "@/lib/seo";
import React from "react";

export const metadata = createPageMetadata({
  title: "Publishing Insights for Authors",
  description:
    "Explore NexiFire Publishing insights, writing advice, marketing strategies, and practical guidance for authors at every stage of publishing.",
  path: "/blogs",
});

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="NexiFire Publishing Blog"
        title={`Insights, Tips &\nResources For Authors`}
        description="Explore expert publishing advice, writing strategies, marketing tips, and industry insights designed to help authors navigate every stage of their publishing journey."
        buttonLabel="Start Your Publishing Journey"
      />
      <BlogGrid />
      <PublishYourBook eyebrow="Publish With NexiFire" />
      <div className="h-20" />
    </section>
  );
};

export default page;
