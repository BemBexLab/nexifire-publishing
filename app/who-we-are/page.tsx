import FAQs from "@/components/FAQs";
import GetInTouchContact from "@/components/GetInTouchContact";
import OurBelieves from "@/components/OurBelieves";
import OurStory from "@/components/OurStory";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import PublishYourBook from "@/components/PublishYourBook";
import Testimonials from "@/components/Testimonials";
import WhoWeServe from "@/components/WhoWeServe";
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Who We Are"
        title={`We Help Authors Become Published Authors`}
        description="NexiFire Publishing is a full-service self-publishing company in the USA, built to help authors turn a manuscript into a real, professionally published book, without giving up their rights or royalties along the way."
        buttonLabel="Start Your Publishing Journey"
      />
      <OurStory />
      <OurBelieves />
      <Portfolio />
      <div className="h-10" />
      <PublishYourBook
        eyebrow=""
        title="Ready to Publish Your Book?"
        description="Tell us where you are in your journey and where you want to go. We'll design the right plan, assign the right specialists, and help you move forward with confidence."
        buttonLabel="Publish Your Book"
        buttonHref="/contact"
        backgroundImageSrc="/Frame 2147225865.webp"
        backgroundAlt="Person Reading Book"
      />
      <div className="h-10" />
      <WhoWeServe
        {...{
          badgeText: "",
          title: "Real Numbers, Real Experience",
          description:
            "We proudly work with authors across a wide range of genres and backgrounds, including:",
          stats: [
            { value: "10+", label: "Years of Publishing Experience", highlighted: true },
            { value: "45+", label: "Editors, Designers & Ghostwriters" },
            { value: "1,200+", label: "Authors Served" },
            { value: "1,800+", label: "Books Published", highlighted: true },
          ],
          genres: [
            "Fiction & Novels",
            "Non-Fiction",
            "Business & Leadership",
            "Self-Help & Personal Development",
            "Memoirs & Biography",
            "Children's Books",
            "Poetry",
            "Educational Books",
            "Inspirational & Faith-Based Titles",
          ],
          footnote: ""
        }}
      />
      <Testimonials
        badgeText="Author Stories"
        title="What Authors Are Saying"
        description=""
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I'd been sitting on my memoir manuscript for three years, afraid of the publishing process. NexiFire made it feel completely manageable. My editor was thoughtful, the cover exceeded my expectations, and within ten weeks my book was live on Amazon. I couldn't recommend them more.",
            name: "Sarah Phill",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a first-time children's book author, I was nervous about finding the right publishing company. NexiFire's team understood exactly what illustrations my story needed and handled everything beautifully. My daughter's face when she held the printed book said it all.",
            name: "James Kelvin",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "My business book needed to look credible enough to stand up next to traditionally published titles. NexiFire delivered on every front — the editing was sharp, the design was contemporary, and my book was in stores within weeks of final approval.",
            name: "Dr. Priya Gary",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question:
              "What is the best self-publishing company for first-time authors?",
            answer:
              "The best self-publishing company for a first-time author is one that manages the entire process end to end, editing, formatting, cover design, ISBN and copyright, distribution, and marketing, under one team, with transparent pricing and no royalty share. That's the model NexiFire was built around specifically.",
          },
          {
            question:
              "How do I publish a book in the United States with NexiFire?",
            answer:
              "The process starts with a free, no-obligation consultation. We review your manuscript, talk through your goals and budget, and recommend the right package and team for your project, no pressure, no obligation to continue.",
          },
          {
            question:
              "What's the difference between self-publishing and going with a traditional publishing company?",
            answer:
              "Traditional publishers take a percentage of royalties and control creative decisions in exchange for their name and distribution network. Self-publishing companies like NexiFire charge a flat production fee, leave 100% of royalties and rights with the author, and give the author full creative control, while still providing professional editing, design, and distribution.",
          },
          {
            question: "Does NexiFire offer children's book publishing services?",
            answer:
              "Yes. Our children's publishing team handles everything from manuscript editing to custom illustration, formatting for picture books and early readers, and printing, so your finished book actually works the way a children's book needs to.",
          },
          {
            question:
              "Can NexiFire produce an audiobook from my manuscript?",
            answer:
              "Yes. We offer full audiobook production, including narrator matching or author-narrated coaching, professional recording, editing, and mastering to Audible (ACX) and platform specifications.",
          },
          {
            question:
              "How much does it cost to self-publish a book in the United States?",
            answer:
              "Cost depends on your manuscript's length, genre, and which services you need: editing, illustration, audiobook, translation, or marketing. NexiFire uses transparent, flat-rate pricing with no hidden fees, so reach out for a free quote based on your specific project.",
          },
          {
            question:
              "Do I retain the rights to my book when publishing with NexiFire?",
            answer:
              "Yes, completely. NexiFire never takes ownership, royalties, or rights to your work. You retain full copyright and 100% of your earnings across every platform your book is sold on, permanently.",
          },
          {
            question:
              "Is there a self-publishing company near me, or do I have to work in person?",
            answer:
              "NexiFire works with authors across the entire USA remotely, including dedicated support for authors in Miami, Florida, and other major markets. Every consultation, review, and revision happens over video call and email, so location is never a barrier.",
          },
          {
            question:
              "What makes NexiFire different from other self-publishing companies?",
            answer:
              "Most self-publishing companies specialize in one or two services and refer you elsewhere for the rest. NexiFire manages the entire journey ghostwriting, editing, design, production, distribution, and marketing, under one roof, with one team that knows your book from the first consultation through launch day.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <GetInTouchContact
        backgroundClassName="bg-[#FDF7F4]"
        title="Ready to Publish Your Book?"
        description="Tell us where you are in your journey and where you want to go. We'll design the right plan, assign the right specialists, and help you move forward with confidence."
        buttonLable="Publish Your Book"
      />
    </section>
  );
};

export default page;
