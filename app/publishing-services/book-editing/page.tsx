import FAQs from "@/components/FAQs";
import GetInTouchContact from "@/components/GetInTouchContact";
import ImageDesc from "@/components/ImageDesc";
import Introduction from "@/components/Introduction";
import OurProcess from "@/components/OurProcess";
import PageHero from "@/components/PageHero";
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
        eyebrow="Professional Book Editing Services"
        title={`Refine Your Manuscript With Expert Editing`}
        description="Every great book begins with great writing. Our professional editors help improve clarity, structure, consistency, and readability while preserving your unique voice and message."
        buttonLabel="Edit Your Manuscript Today"
      />
      <Introduction
        eyebrow="Introduction"
        title="Bring Your Story To Life"
        description={`Writing a book takes time, expertise, and dedication. Our professional ghostwriters work closely with you to capture your voice, ideas, and message while creating a polished manuscript ready for publication.

            From memoirs and business books to self-help guides and fiction, we help authors turn ideas into impactful books.`}
        imageSrc="/image 67.png"
      />
      <OurProcess />
      <WhyChoose />
      <PublishYourBook />
      <WhatsIncluded />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe />
      </div>
      <ImageDesc
        title="Expert Self Publishing Services in Australia: Complete Support"
        paragraphs={[
          "Nexifire Publishing is a complete self-publishing company that helps authors turn their ideas into professionally published books. Our services cover writing, editing, design, publishing, and marketing, and we handle the entire process for you, from the first conversation to the final listing.",
          "Whether you are a first-time author with just an idea, a writer sitting on a completed manuscript, or a business professional ready to share your expertise with the world, our team is here to guide you at every step, in your genre, with your goals in mind.",
          "What sets us apart is our complete, all-in-one approach. With experienced ghostwriters, editors, designers, publishing specialists, and marketing professionals working together under one roof, we make sure your book is created, published, and promoted to the highest professional standards. We provide access to 40+ global publishing platforms, giving your book worldwide reach while you retain full ownership of everything you have written.",
          "At Nexifire Publishing, our mission is simple: to help authors publish with confidence, build credibility, and connect their stories with readers around the world.",
        ]}
        imageSrc="/Rectangle 23834 (1).png"
        imageAlt=""
        reverse={true}
      />
      <div className="h-20" />
      <FAQs />
      <Testimonials />
      <GetInTouchContact />
    </section>
  );
};

export default page;
