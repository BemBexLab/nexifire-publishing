import FAQs from "@/components/FAQs";
import GetInTouchContact from "@/components/GetInTouchContact";
import ImageDesc from "@/components/ImageDesc";
import Introduction from "@/components/Introduction";
import MosiacCards from "@/components/MosiacCards";
import OurProcess from "@/components/OurProcess";
import PageHero from "@/components/PageHero";
import PublishYourBook from "@/components/PublishYourBook";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Ghostwriting Services Australia"
        title={`Your Story Deserves to Be Told:\nWe Write It Brilliantly`}
        description="Whether you have a complete manuscript or just a spark of an idea, our expert ghostwriters help you produce a professionally written book that sounds exactly like you, only polished, powerful, and ready to publish on multiple platforms."
        buttonLabel="Publish Your Book Today"
      />
      <Introduction
        eyebrow="What Is Ghostwriting?"
        title="You Bring the Story. We Write the Book."
        description={`Ghostwriting is the collaborative process where a professional writer captures your ideas, voice, and story and produces a professionally written book that is published under your name.
          
          It is far more common than most people realise. Some of the world's most celebrated memoirs, business bestsellers, and motivational books were created this way. There is absolutely nothing misleading about it; you have the knowledge, the experience, and the story. A skilled ghostwriter simply has the proficiency to bring it to the page in a way that is readable, engaging, and professionally structured.
`}
        imageSrc="/image 67.png"
      />
      <MosiacCards />
      <OurProcess
        badgeText="How It Works"
        title="A Simple, Transparent Process From Idea to Finished Book"
        description="We have refined our ghostwriting process over hundreds of projects to make it collaborative, clear, and stress-free for every author we work with."
        steps={[
          {
            number: "01",
            title: "Free Discovery Call",
            description:
              "Free consultation call to know your book idea, goals, and support you need.",
          },
          {
            number: "02",
            title: "Writer Matching",
            description:
              "We match you with a ghostwriter who has expertise in your genre.",
          },
          {
            number: "03",
            title: "Outline & Draft",
            description:
              "Provide a chapter-by-chapter outline for your approval, then begin writing in stages.",
          },
          {
            number: "04",
            title: "Revisions & Final Manuscript",
            description:
              "You receive a polished, complete manuscript. The finished book is entirely yours.",
          },
        ]}
      />
      <WhyChoose
        badgeText="Why Choose Nexifire Publishing"
        title="What Makes Our Ghostwriting Service Different"
        description="There are many ghostwriting options available in Australia. But the reason authors keep coming back to Nexifire Publishing, and why they recommend us to their colleagues and friends is:"
        reasons={[
          {
            title: "Absolute Confidentiality, Guaranteed",
            description:
              "Every project is covered by a signed non-disclosure agreement.",
          },
          {
            title: "Voice Matching Expertise",
            description: "Write a book in your voice.",
          },
          {
            title: "Affordable Ghostwriting Services",
            description:
              "Structured our services to make high-quality ghostwriting accessible.",
          },
          {
            title: "Complete Publishing Support",
            description:
              "From idea to published book, all under one roof, with one trusted team.",
          },
        ]}
      />
      <div className="h-10" />
      <PublishYourBook title="Your Book Is Waiting to Be Written" description="Every author we have worked with is glad they made the call. Whether you have a full concept or just a feeling that you have something worth saying, reach out. The first conversation is always free." backgroundImageSrc="/Frame 2147225867.png" backgroundAlt="A girl reading a book" buttonLabel="Book a Free Discovery Call" />
      <div className="h-10" />
      <WhatsIncluded
        badgeText="What's Included"
        title="PROFESSIONAL GHOSTWRITING SERVICES DESIGNED FOR EVERY AUTHOR"
        items={[
          { label: "Dedicated Australian Ghostwriter" },
          { label: "Discovery & Strategy Sessions" },
          { label: "Chapter Planning & Book Outline" },
          { label: "Professional Manuscript Writing" },
          { label: "Unlimited Collaboration & Feedback" },
          { label: "Editing & Manuscript Refinement" },
          { label: "Full Copyright & Intellectual Property Transfer" },
          { label: "Confidentiality & Non-Disclosure Agreement" },
        ]}
        imageSrc="/439230f4-7c82-4411-9ce5-487944ae406f 1.png"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe {...defaultWhoWeServeData} />
      </div>
      <ImageDesc
        title="WRITE THE BOOK YOU'VE ALWAYS WANTED TO PUBLISH"
        paragraphs={[
          "Every successful book begins with a story worth telling, but turning that story into a professionally written manuscript takes time, structure, and experience. At Nexifire Publishing, we provide complete ghostwriting services for Australian authors, entrepreneurs, business leaders, professionals, educators, and first-time writers who want to publish a book without having to write every word themselves.",
          "Whether you have detailed notes, recorded conversations, a rough outline, or simply an idea you've been carrying for years, our experienced ghostwriters work with you to capture your unique voice and transform it into a compelling manuscript. Every chapter is carefully researched, professionally structured, and written to engage your target audience while remaining authentic to your message.",
          "Our collaborative approach means you remain involved throughout the entire writing process. You'll review outlines, provide feedback on drafts, and approve each stage before moving forward, ensuring the finished manuscript genuinely reflects your ideas and personality.",
          "As part of Nexifire Publishing's complete self-publishing services, ghostwriting is only the beginning. Once your manuscript is complete, our in-house team can also assist with professional editing, proofreading, cover design, formatting, audiobook production, and worldwide publishing across more than 40 major platforms, helping you move seamlessly from concept to published author.",
        ]}
        imageSrc="/Rectangle 23834 (1).png"
        imageAlt=""
      />
      <div className="h-20" />
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question: "Is ghostwriting legal and ethical?",
            answer:
              "Absolutely. Ghostwriting is a completely legitimate professional service that has existed for centuries. Publishing under your name a book written in collaboration with a ghostwriter is not deceptive; it is a standard industry practice. You own the ideas, the experience, and the intellectual property. The ghostwriter is a skilled craftsperson who helps you communicate those ideas effectively. Every client receives a full intellectual property transfer agreement confirming that you own the work entirely.",
          },
          {
            question:
              "Will anyone know I used a ghostwriter?",
            answer:
              "Not unless you tell them. Every project at Nexifire Publishing is protected by a signed non-disclosure agreement. Your ghostwriter is contractually bound to keep your project confidential, and we never use client work in our own marketing or portfolio without explicit written permission. Confidential ghostwriting is at the core of what we do.",
          },
          {
            question:
              "What if I do not have a complete idea, just the beginning of one?",
            answer:
              'That is perfectly fine, and actually very common. Many of our most successful projects started as a vague idea, a collection of notes, or simply a strong feeling that "I have a book in me somewhere." Our ghostwriters are skilled at drawing out your ideas through structured conversations, identifying the most compelling angles, and shaping raw material into a clear, engaging book concept before a single chapter is written.',
          },
          {
            question: "Can you help me publish the book once it is written?",
            answer:
              "Yes. Nexifire Publishing team is here to provide you with every service required to publish your book, including professional editing, proofreading, interior formatting, cover design, hardcover production, audiobook creation, and global distribution through major retailers, including Amazon, Apple Books, Barnes & Noble, and more. You can take your book from a raw idea all the way to published author without ever leaving our team.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Stories"
        title="Words from Authors Who Have Been Where You Are"
        description="Our clients come to us with an idea, a story, or a body of expertise. They leave with a book they are proud to put their name on."
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I had the story inside me for twenty years,s but never knew how to get it onto the page. My Nexifire ghostwriter made me feel completely at ease from the first interview. The finished memoir reads exactly as I would have written it, only far better than I ever could have managed alone. I am so proud of this book.",
            name: "Margaret H.",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a business consultant, I had the content and the expertise, but I simply did not have the time to sit down and write a full book. The team at Nexifire understood that immediately. They interviewed me over several sessions, structured everything logically, and produced a manuscript I am using as the centrepiece of my client acquisition strategy. Exceptional service.",
            name: "David R.",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I wanted to create a children's book for my grandchildren based on characters from our family history. The ghostwriter Nexifire matched me with was warm, patient, and genuinely enthusiastic about the project. The result is a beautiful little book that we have now had printed and shared with the whole family. I cannot recommend this service enough.",
            name: "Sandra L.",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="Ready to Publish Your Book?"
        description={
          <>Whether you have a finished manuscript, a half-written draft, or just a powerful idea you don't know how to start, our publishing specialists are here to help. At NexiFire Publishing, we work with Australian authors at every stage of their journey, from first conversation to final distribution. <br />
        <div className="h-2" /> Tell us about your project today and take the first step toward becoming a published author.</>
        }
      />
    </section>
  );
};

export default page;
