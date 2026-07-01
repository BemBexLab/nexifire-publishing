import BooksGrid from "@/components/BooksGrid";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Our Books"
        title={`Our Published\nBooks`}
        description="Explore a range of books brought to life through NexiFire Publishing. From business and self-development to fiction, memoirs, and children's books, we help authors publish their ideas professionally."
        buttonLabel="Start Your Publishing Journey"
      />
      <BooksGrid />
    </section>
  );
};

export default page;
