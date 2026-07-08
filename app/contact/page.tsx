import GetInTouchContactV2 from "@/components/GetInTouchContactV2";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden">
      <PageHero
        eyebrow="Contact us"
        title={`Contact NexiFire Publishing`}
        description="Whether you have a completed manuscript, a book idea, or questions about our publishing services, our team is here to help guide you through your publishing journey."
      />
      <GetInTouchContactV2 />
    </section>
  );
};

export default page;
