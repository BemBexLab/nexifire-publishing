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
        eyebrow="Professional Ghostwriting Services"
        title={`Turn Your Ideas Into\nA Compelling Book`}
        description="Whether you have a detailed outline, a rough concept, or simply a story to tell, NexiFire Publishing's ghostwriting experts help transform your vision into a professionally written manuscript."
        buttonLabel="Start Your Publishing Journey"
      />
      <Introduction
        eyebrow="Introduction"
        title="Bring Your Story To Life"
        description={`Writing a book takes time, expertise, and dedication. Our professional ghostwriters work closely with you to capture your voice, ideas, and message while creating a polished manuscript ready for publication.

From memoirs and business books to self-help guides and fiction, we help authors turn ideas into impactful books.`}
        imageSrc="/image 67.png"
      />
      <OurProcess
        badgeText="How It Works"
        title="Publish Your Book in 5 Clear Steps"
        description="Publishing a book in Australia doesn't need to be complicated."
        steps={[
          {
            number: "01",
            title: "Free Consultation",
            description:
              "You will speak with your dedicated publishing consultant. We review your manuscript, discuss your goals, and recommend the right package.",
          },
          {
            number: "02",
            title: "Edit, Polish & Design",
            description:
              "From developmental editing and proofreading to cover design and interior formatting, we refine every word and visual element until your book is publication-ready.",
          },
          {
            number: "03",
            title: "Print & Convert",
            description:
              "Your book goes to print in hardcover or paperback while simultaneously being converted to eBook and audiobook formats.",
          },
          {
            number: "04",
            title: "Launch & Distribute",
            description:
              "Your title is listed globally across 40+ countries, with ISBN registration, metadata optimisation, and launch marketing support.",
          },
        ]}
      />
      <WhyChoose
        badgeText="Why Choose Nexifire Publishing"
        title="What Makes Our Service Different"
        description="There are many publishing support options available in Australia. But the reason authors keep coming back to Nexifire Publishing, and why they recommend us to their colleagues and friends is:"
        reasons={[
          {
            title: "Personalised Professional Support",
            description:
              "Every project is guided with practical publishing advice tailored to your goals and genre.",
          },
          {
            title: "High-Quality Creative Execution",
            description:
              "We focus on delivering polished writing, design, production, and publishing outcomes.",
          },
          {
            title: "Clear, Collaborative Process",
            description:
              "Authors stay informed, involved, and supported from concept through completion.",
          },
          {
            title: "One Team, End-to-End Service",
            description:
              "From idea to finished book, your project is handled under one trusted publishing roof.",
          },
        ]}
      />
      <PublishYourBook />
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
      <div className="bg-[#FDF7F4]">
        <WhoWeServe />
      </div>
      <WhatsIncluded
        badgeText="What's Included"
        title="Complete Publishing Solutions"
        items={[
          { label: "Manuscript Assessment" },
          { label: "Interior Formatting" },
          { label: "ISBN Registration" },
          { label: "Print & Digital Publishing" },
          { label: "Publishing Consultation" },
        ]}
        imageSrc="/439230f4-7c82-4411-9ce5-487944ae406f 1.png"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question: "How do I publish a book in Australia with NexiFire?",
            answer:
              "The process of publishing a book with NexiFire begins with a free, no-obligation consultation. We assess your manuscript, discuss your goals and budget, then let you know the right package and team.",
          },
          {
            question:
              "What's the difference between self-publishing and traditional publishing?",
            answer:
              "With traditional publishing, a publisher acquires your rights, controls the timeline, and pays royalties of 8-15%. Self-publishing lets you retain full rights, earn up to 70% royalties, and get your book to market on your own schedule, with professional support from a team like NexiFire handling the rest.",
          },
          {
            question:
              "Does NexiFire offer children's book publishing services in Australia?",
            answer:
              "Yes. NexiFire is one of the most reliable and leading children's book publishing companies in Australia. We offer full-colour illustration sourcing or coordination, age-appropriate formatting, picture book and early reader layouts, hardcover and softcover printing, and full national and international distribution through Booktopia, Amazon, and library networks.",
          },
          {
            question: "Can NexiFire produce an audiobook from my manuscript?",
            answer:
              "Absolutely. Our audiobook formation service covers everything: professional voice casting from our Australian narrator network or guidance for author-narrated recordings, studio-quality audio production, editing, mastering, and distribution to Audible, Apple Books, Google Play, Spotify, and Storytel.",
          },
          {
            question:
              "How much does it cost to self-publish a book in Australia?",
            answer:
              "NexiFire offers affordable book publishing packages in Australia, starting from entry-level eBook-only packages through to comprehensive hardcover and global distribution bundles. We provide transparent, flat-rate pricing. Contact us for a custom quote based on your manuscript length, genre, and publishing goals.",
          },
          {
            question:
              "Do I retain the rights to my book when publishing with NexiFire?",
            answer:
              "Yes, always. NexiFire is a publishing services company, not a rights-acquiring publisher. You retain 100% ownership of your manuscript, copyright, ISBN, and all derivative rights. This means you can take your book elsewhere at any time, license it internationally, or adapt it into other formats without restriction.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Stories"
        title="What Australian Authors Say About NexiFire"
        description="Over 2,000 Australian authors have trusted NexiFire Publishing to bring their books to life. Here's what a few of them have to say."
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I'd been sitting on my memoir manuscript for three years, afraid of the publishing process. NexiFire made it feel completely manageable. My editor was thoughtful, the cover design exceeded my expectations, and within 10 weeks, my book was on Booktopia and Amazon. I couldn't recommend them more.",
            name: "Sarah Phill",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a first-time children's book author, I was nervous about finding the right publishing company. NexiFire's children's publishing team understood exactly what illustrations my story needed and handled everything beautifully. My daughter's face when she held the printed book said it all.",
            name: "James Kelvin",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "My business book needed to look credible and professional to stand up next to traditionally published titles. NexiFire delivered on every front; the editing was sharp, the design was contemporary, and my book was in Dymocks within six weeks of final approval. Exceptional service.",
            name: "Dr. Priya Gary",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="Ready To Publish Your Book?"
        description="Tell us where you are and where you want to go. NexiFire will design the system, align the right specialists, and help you move forward with confidence."
      />
    </section>
  );
};

export default page;
