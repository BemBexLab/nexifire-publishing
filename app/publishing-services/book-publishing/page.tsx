import FAQs from "@/components/FAQs";
import GetInTouchContact from "@/components/GetInTouchContact";
import ImageDesc from "@/components/ImageDesc";
import Introduction from "@/components/Introduction";
import OurProcess from "@/components/OurProcess";
import PageHero from "@/components/PageHero";
import PricingPackages from "@/components/PricingPackages";
import PublishYourBook from "@/components/PublishYourBook";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
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
      <Introduction
        eyebrow="Introduction"
        title="Publish With Confidence"
        description={`Publishing a book is an exciting milestone, but navigating the process alone can be overwhelming. Our publishing specialists guide you through every stage, ensuring your book is professionally prepared, published, and positioned for success.
          
          From manuscript preparation and formatting to distribution and launch support, we help bring your vision to life.`}
        imageSrc="/0eee94f7-4643-4e46-8b95-cc9232497a79 1.png"
      />
      <OurProcess />
      <PricingPackages />
      <WhyChoose />
      <PublishYourBook
        backgroundAlt="A girl reading a book"
        backgroundImageSrc="/Frame 2147225866.png"
        buttonLabel="Publish Your Book"
        description="Partner with NexiFire Publishing and take the next step toward publishing your book with confidence."
        title="Ready To Become A Published Author?"
      />
      <ImageDesc
        title="Expert Self Publishing Services in Australia: Complete Support"
        paragraphs={[
          "Nexifire Publishing is a complete self-publishing company that helps authors turn their ideas into professionally published books. Our services cover writing, editing, design, publishing, and marketing, and we handle the entire process for you, from the first conversation to the final listing.",
          "Whether you are a first-time author with just an idea, a writer sitting on a completed manuscript, or a business professional ready to share your expertise with the world, our team is here to guide you at every step, in your genre, with your goals in mind.",
          "What sets us apart is our complete, all-in-one approach. With experienced ghostwriters, editors, designers, publishing specialists, and marketing professionals working together under one roof, we make sure your book is created, published, and promoted to the highest professional standards. We provide access to 40+ global publishing platforms, giving your book worldwide reach while you retain full ownership of everything you have written.",
          "At Nexifire Publishing, our mission is simple: to help authors publish with confidence, build credibility, and connect their stories with readers around the world.",
        ]}
        imageSrc="/Rectangle 23834.png"
        imageAlt="Publishing team"
      />
      <div className="h-20" />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe />
      </div>
      <WhatsIncluded />
      <FAQs />
      <Testimonials />
      <GetInTouchContact />
    </section>
  );
};

export default page;
