import BlogGrid from "@/components/BlogGrid";
import PageHero from "@/components/PageHero";
import PublishYourBook from "@/components/PublishYourBook";
import React from "react";

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
      <PublishYourBook />
      <div className="h-20" />
    </section>
  );
};

export default page;
