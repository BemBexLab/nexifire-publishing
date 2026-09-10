import FAQs from "@/components/FAQs";
import FooterCTA from "@/components/Footer";
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
        eyebrow="Nexifire Publishing"
        title={`Ghostwriting Services USA`}
        description={<><span className="text-black text-2xl"><b>We Write It. You Publish It.</b></span> <br />Professional ghostwriting services for authors, entrepreneurs, coaches, and first-time writers across the USA: your story, your voice, your name on the cover.</>}
        buttonLabel="Get a Free Ghostwriting Consultation"
      />
      <Introduction
        eyebrow="What Is Ghostwriting?"
        title="What Is Ghostwriting, Really?"
        description={`Ghostwriting is simple: you bring the story, the ideas, or the expertise; we turn it into a professionally written book, published entirely under your name. It's not deceptive, and it's not new. Some of the most successful memoirs, business books, and self-help bestsellers on shelves today were written this way.
          
          You already have what matters most: the knowledge, experience, voice. Our job is to capture that and shape it into a manuscript that reads like the best version of how you'd tell it yourself.
          
          Whether you are looking to hire a ghostwriter for a book, a full nonfiction book, a fiction book, or a memoir, NexiFire pairs you with a writer who works specifically in your genre, not a generalist juggling five projects at once.
`}
        imageSrc="/image 67.webp"
      />
      <MosiacCards />
      <div className="bg-[#fffaf6] py-14 sm:py-16 md:py-20 lg:py-24">
        <OurProcess
          badgeText="How It Works"
          title="Why Authors Choose NexiFire's Ghostwriting Services"
          description=""
          steps={[
            {
              number: "01",
              title: "Free Discovery Call",
              description:
                "We talk through your idea, your goals, and what kind of book you're picturing, no pressure, no cost.",
            },
            {
              number: "02",
              title: "Writer Matching",
              description:
                "You are paired with a ghostwriter who has real experience in your genre, whether that's a business book, memoir, self help or any other genre.",
            },
            {
              number: "03",
              title: "Outline & Approval",
              description:
                "We build a chapter-by-chapter outline first, so you approve the direction before a single chapter is written.",
            },
            {
              number: "04",
              title: "Drafting in Stages",
              description:
                "Your ghostwriter writes in stages, not all at once, so you're reviewing and giving feedback along the way, not waiting months to see a full draft.",
            },
            {
              number: "05",
              title: "Unlimited Revisions",
              description:
                "We refine the manuscript with you until it actually sounds like you, this is a ghostwriting service with unlimited revisions built into every package, not billed as an extra.",
            },
            {
              number: "06",
              title: "Final Manuscript, Fully Yours",
              description:
                "You receive a polished, publish-ready manuscript, along with full copyright and intellectual property transfer. It was always yours; now it's on paper.",
            },
          ]}
        />
      </div>
      <WhyChoose
        badgeText=""
        title="Why Authors Choose NexiFire's Ghostwriting Services"
        description=""
        reasons={[
          {
            title: "Voice-Matching Expertise",
            description:
              "We don't write a generic book with your name slapped on it. We study how you talk, what you emphasize, and how you want to come across, so the finished manuscript actually sounds like you.",
          },
          {
            title: "Affordable Ghostwriting, Without Cutting Corners",
            description: "Our packages are built to make professional ghostwriting accessible to first-time authors and small business owners, not just executives with a marketing budget.",
          },
          {
            title: "Complete Publishing Support, One Team",
            description:
              "Ghostwriting is only the starting point. Once your manuscript is done, the same team can handle editing, cover design, formatting, audiobook production, and distribution to Amazon, Apple Books, Barnes & Noble, and more, so you never have to hand your book off to a second company.",
          },
          {
            title: "Absolute Confidentiality",
            description:
              "Every project is covered by an NDA from day one. Whether or not you ever tell anyone you worked with a ghostwriter is entirely up to you.",
          },
        ]}
      />
      <div className="h-10" />
      <PublishYourBook eyebrow="" title="Your Book Is Waiting to Be Written" description="Whether you have a finished outline or just a feeling that you have something worth saying, the first conversation is always free." backgroundImageSrc="/Frame 2147225867.webp" backgroundAlt="A girl reading a book" buttonLabel="Book a Free Discovery Call" buttonHref="/contact" />
      <div className="h-10" />
      <WhatsIncluded
        badgeText="What's Included"
        title="PROFESSIONAL GHOSTWRITING SERVICES DESIGNED FOR EVERY AUTHOR"
        items={[
          { label: "Dedicated American Ghostwriter" },
          { label: "Discovery & Strategy Sessions" },
          { label: "Chapter Planning & Book Outline" },
          { label: "Professional Manuscript Writing" },
          { label: "Unlimited Collaboration & Feedback" },
          { label: "Editing & Manuscript Refinement" },
          { label: "Full Copyright & Intellectual Property Transfer" },
          { label: "Confidentiality & Non-Disclosure Agreement" },
        ]}
        imageSrc="/439230f4-7c82-4411-9ce5-487944ae406f 1.webp"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe {...defaultWhoWeServeData} />
      </div>
      <ImageDesc
        title="What Makes a Ghostwritten Book Actually Good"
        paragraphs={[
          "Not every ghostwriting service produces the same quality of book. A rushed, generic manuscript is easy to spot: flat voice, disconnected chapters, no real structure. Here's what separates a book that reads like you from one that reads like a template:",
          <div className="space-y-3">
            <div className="">
              <h3 className="text-black font-semibold">Real Interviews, Not a Questionnaire</h3>
              <p>Your ghostwriter spends real time talking with you, not a five-question form, so your voice, phrasing, and personality actually make it onto the page.</p>
            </div>

            <div className="">
              <h3 className="text-black font-semibold">A Structure Built Before Writing Starts</h3>
              <p>Every project begins with a chapter-by-chapter outline you approve, so the book has a clear arc before a single sentence is drafted.</p>
            </div>

            <div className="">
              <h3 className="text-black font-semibold">Genre-Specific Writers</h3>
              <p>A memoir and a business book require completely different pacing, structure, and tone. We match your project with a ghostwriter experienced in that specific genre, not a generalist.</p>
            </div>

            <div className="">
              <h3 className="text-black font-semibold">Revisions Until It's Right</h3>
              <p>Unlimited revisions means the manuscript isn't "finished" until it actually sounds like you, not just when the writer runs out of allotted drafts.</p>
            </div>
          </div>,
        ]}
        imageSrc="/Rectangle 23834 (1).webp"
        imageAlt="A guy writing a book"
      />
      <div className="h-20" />
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question: "What are book ghostwriting services, exactly?",
            answer:
              "Book ghostwriting is when a professional writer interviews you, researches your topic, and writes a complete book manuscript on your behalf, based on your ideas, expertise, or story, published entirely under your name.",
          },
          {
            question:
              "How much does it cost to hire a ghostwriter for a book?",
            answer:
              "Cost depends on your book's length, genre, and how much research or interviewing is required. NexiFire offers transparent, flat-rate pricing for book ghostwriting, so you know the investment upfront, with no hidden fees added later.",
          },
          {
            question:
              "Do you offer ghostwriting services for first-time authors specifically?",
            answer:
              'Yes. Most of the authors we work with have never published a book before. Our process, free discovery call, outline approval, staged drafting, unlimited revisions, is built specifically to make ghostwriting approachable for someone doing this for the first time.',
          },
          {
            question: "Can I hire a ghostwriter to write my book if I only have a rough idea?",
            answer:
              `Absolutely. You don't need a finished outline or even a clear structure. Many of our best projects start as a handful of notes, a recorded conversation, or simply "I know I have a book in me." Your ghostwriter draws the structure out through guided conversations.`,
          },
          {
            question: "Do you offer ghostwriting with unlimited revisions?",
            answer:
              `Yes. Every NexiFire ghostwriting package includes unlimited collaboration and revisions during the drafting process, because a manuscript that doesn't sound like you isn't finished yet, regardless of how many drafts it takes.`,
          },
          {
            question: "What's the difference between a general ghostwriter and a specialist, like a ghostwriter for a self-help book or memoir?",
            answer:
              `Genre matters. A ghostwriter experienced in memoir knows how to structure emotional pacing and personal narrative; a ghostwriter for a self-help book knows how to structure frameworks, exercises, and actionable takeaways. We match you with a writer experienced specifically in your genre, not a generalist.`,
          },
          {
            question: "Is ghostwriting legal and ethical?",
            answer:
              `Yes, completely. Ghostwriting is a long-established, legitimate professional service. You own the ideas and the experience; the ghostwriter is simply the professional who helps put them into publishable form. Every NexiFire client receives a full intellectual property transfer confirming they own the finished work outright.`,
          },
          {
            question: "Will anyone know I used a ghostwriter?",
            answer:
              `Not unless you choose to tell them. Every project is protected by a signed non-disclosure agreement, and we never reference client projects publicly without written permission.`,
          },
          {
            question: "Do you provide ghostwriting services for business owners, coaches, and entrepreneurs?",
            answer:
              `Yes. Book ghostwriting for business owners, coaches, and entrepreneurs is one of our most requested services, usually built around turning an existing framework, program, or expertise into a book that supports lead generation or establishes authority.`,
          },
          {
            question: "Do you offer academic or medical ghostwriting services?",
            answer:
              `Yes, for professional and educational manuscripts requiring subject-matter accuracy and formal structure. These projects are matched with ghostwriters experienced in academic or technical writing specifically.`,
          },
          {
            question: "Can you also publish the book once the manuscript is finished?",
            answer:
              `Yes. Once your manuscript is complete, our team can handle editing, proofreading, formatting, cover design, ISBN and copyright registration, audiobook production, and global distribution, so you can go from idea to published author without switching companies.`,
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
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
              "I had the story in me for twenty years but never knew how to get it onto the page. My NexiFire ghostwriter made me feel at ease from the very first call. The finished memoir reads exactly how I would have written it, only better than I could have managed alone.",
            name: "Margaret H.",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a business consultant, I had the expertise but not the time to write a full book. NexiFire interviewed me over a few sessions, structured everything logically, and delivered a manuscript I now use as the centerpiece of my client acquisition strategy." ,
            name: "David Reginald",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I wanted a book that captured my coaching framework so I could hand it to new clients. The ghostwriter I was matched with understood my voice almost immediately, and the unlimited revisions meant we got it exactly right before it ever went to print.",
            name: "Priya Anand",
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
          <>Whether you have a finished manuscript, a half-written draft, or just a powerful idea you don't know how to start, our publishing specialists are here to help. At NexiFire Publishing, we work with American authors at every stage of their journey, from first conversation to final distribution. <br />
        <div className="h-2" /> Tell us about your project today and take the first step toward becoming a published author.</>
        }
      />
      {/* <FooterCTA title="NEXIFIRE PUBLISHING" description="NexiFire Publishing is a trusted self-publishing company for authors ready to get their book into the world. We help authors publish ebooks, print books, and audiobooks with full-service support, ghostwriting, editing, formatting, cover design, and global distribution, all under one roof. As one of the best self-publishing companies for first-time authors, we handle the parts that usually trip people up, so you can focus on the book itself." /> */}
    </section>
  );
};

export default page;
