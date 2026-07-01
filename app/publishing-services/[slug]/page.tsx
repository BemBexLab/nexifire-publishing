import ImageDesc from "@/components/ImageDesc";
import Introduction from "@/components/Introduction";
import OurProcess from "@/components/OurProcess";
import PageHero from "@/components/PageHero";
import PricingPackages from "@/components/PricingPackages";
import PublishYourBook from "@/components/PublishYourBook";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="BOOK PUBLISHING"
        title={`Professional Book\nPublishing Services`}
        description="Whether you're a first-time author or an experienced writer, NexiFire Publishing provides expert publishing solutions designed to transform your manuscript into a professionally published book that reaches readers worldwide."
        buttonLabel="Start Your Publishing Journey"
      />
      <Introduction imageSrc="/0eee94f7-4643-4e46-8b95-cc9232497a79 1.png" />
      <OurProcess />
      <PricingPackages />
      <WhyChoose />
      <PublishYourBook backgroundAlt="A girl reading a book" backgroundImageSrc="/Frame 2147225866.png" buttonLabel="Publish Your Book" description="Partner with NexiFire Publishing and take the next step toward publishing your book with confidence." title="Ready To Become A Published Author?" />
      <ImageDesc imageSrc="/Frame 2147225866.png" />
      <div className="h-20" />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe  />
      </div>
    </section>
  );
};

export default page;
