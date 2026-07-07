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
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Professional Book Editing Services Australia"
        title={`Your Manuscript Deserves a Professional Editor`}
        description="NexiFire Publishing connects Australian authors with experienced, qualified book editors and proofreaders who bring out the very best in every manuscript, from the first structural read to the final word-by-word review before print."
        buttonLabel="Edit Your Book Today"
      />
      <Introduction
        eyebrow="Our Editorial Services"
        title="At Nexifire, We Do Every Level of Book Editing"
        description={<>
        <p>Not all editing is the same. NexiFire offers four distinct levels of manuscript editing services in Australia, each designed to address a specific stage of your book's development.</p>
        <ul className="list-inside list-disc mt-4 text-[#444444] sm:text-lg">
          <li>Developmental Editing</li>
          <li>Line Editing</li>
          <li>Copy Editing</li>
          <li>Proofreading</li>
          <li>Manuscript Assessment</li>
          <li>Editing & Formatting Bundle</li>
        </ul>
        </>}
        imageSrc="/image 67.png"
      />
      <OurProcess
        badgeText="How It Works"
        title="Our Editing Process, Step by Step"
        description="Working with a professional book editor in Australia should feel straightforward and collaborative. Here is exactly what you can expect when you work with NexiFire."
        steps={[
          {
            number: "01",
            title: "Free Consultation & Manuscript Submission",
            description:
              "After getting your manuscript and goals, we’ll recommend the right editing service and editor for your project.",
          },
          {
            number: "02",
            title: "Editorial Review",
            description:
              "The editor works through your manuscript thoroughly, using tracked changes and editorial notes so every suggestion is clear.",
          },
          {
            number: "03",
            title: "Author Review",
            description:
              "You receive the edited manuscript with an editorial summary. Review the changes, accept or query any suggestions, and request a revision call if needed.",
          },
          {
            number: "04",
            title: "Final Delivery",
            description:
              "After approval, we deliver your clean, finalised manuscript, ready for formatting, printing, and global distribution.",
          },
        ]}
      />
      <WhyChoose
        badgeText="The NexiFire Difference"
        title="Why Australian Authors Choose NexiFire for Book Editing"
        description=""
        reasons={[
          {
            title: "Real Editors, Not Algorithms",
            description:
              "Every manuscript is edited by a qualified human professional.",
          },
          {
            title: "Australian English, Australian Readers",
            description:
              "Our editors write and edit in Australian English.",
          },
          {
            title: "Affordable, Transparent Pricing",
            description:
              "We believe affordable book editing in Australia should not mean substandard work.",
          },
          {
            title: "Your Voice Stays Yours",
            description:
              "A good editor enhances your voice; they don't replace it with their own",
          },
          {
            title: "Full Publishing Support Available",
            description:
              "NexiFire can take your manuscript all the way through formatting, cover design, ISBN registration, and global distribution.",
          },
        ]}
      />
      <PublishYourBook title="Ready to Work With a Professional Book Editor in Australia?" description="Get a free, no-obligation quote for your manuscript today. Tell us your genre, word count, and editing needs, and we'll match you with the right editor within 24 hours." backgroundImageSrc="/Frame 2147225868.png" backgroundAlt="" buttonLabel="Submit Your Manuscript Today"/>
      <WhatsIncluded
        badgeText="What's Included"
        title="Professional Editing"
        items={[
          { label: "Tracked changes in your original document" },
          { label: "Margin comments and editorial notes" },
          { label: "Editorial summary letter on completion" },
          { label: "One round of revision queries included" },
          { label: "Confidentiality agreement before commencement" },
          { label: "Dedicated editor contact throughout" },
          { label: "Delivery by agreed deadline, guaranteed" },
          { label: "Australian English style as the default" },
          { label: "Transparent Flat-Rate Pricing" },
        ]}
        imageSrc="/Rectangle 23830.png"
        imageAlt="Complete Editing solutions"
        iconSrc="/Mask group.svg"
      />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe {...defaultWhoWeServeData} />
      </div>
      <ImageDesc
        badgeText="Why Editing Matters"
        title="A Great Story Still Needs a Great Editor"
        paragraphs={[
          "Even the most talented writers benefit from a second pair of expert eyes. A professional book editor doesn't just fix typos; they make your story stronger, your argument clearer, and your voice sharper. They catch the things you have read past a hundred times and never noticed. They ask the questions your readers will ask, before your readers get the chance.",
          "At NexiFire Publishing, our manuscript editing services in Australia are delivered by qualified editors with deep genre knowledge and a genuine passion for the written word. Whether you are preparing a debut novel, a business book, a children's picture book, or a personal memoir, we match you with an editor who understands your audience and your goals.",
          "Every manuscript that leaves our editorial desk is publication-ready, polished, consistent, and crafted to meet the expectations of today's readers and reviewers.",
        ]}
        imageSrc="/Rectangle 23834 (2).png"
        imageAlt=""
        reverse={true}
      />
      <div className="h-20" />
      <FAQs
        badgeText="Author Experiences"
        title="Frequently Asked Questions"
        items={[
          {
            question: "How much does book editing cost in Australia?",
            answer:
              "Cost is completely depend on the type of book editing, the length of your manuscript. Nexifire uses transparent flat rate. Contact us with your manuscript details for a free, accurate quote with no obligation.",
          },
          {
            question:
              "What is the difference between copy editing and proofreading?",
            answer:
              "Copy editing is performed on your manuscript before formatting. It addresses grammar, style, consistency, and clarity throughout the text. Proofreading happens after the book has been typeset or formatted, and is the final quality check for any errors introduced during layout, including typesetting mistakes, spacing issues, and page number inconsistencies. Both are important, and many authors choose both as part of a complete editorial process.",
          },
          {
            question:
              "Do I need developmental editing or copy editing?",
            answer:
              "If your manuscript is at an early or mid-draft stage, or if you are uncertain whether the structure and story are working, a developmental edit is the right for you at this point. If you are confident in the structure and just need language, grammar, and consistency refined, copy editing is appropriate. Our free consultation helps identify exactly where your manuscript is and what level of editing it needs for ready to publish.",
          },
          {
            question: "Do you offer children's book editing services in Australia?",
            answer:
              "Yes. NexiFire has specialist children's book editors in Australia who work across picture books, early readers, chapter books, and middle-grade fiction. Children's editing requires particular attention to age-appropriate vocabulary, sentence length, page turns, and the relationship between text and illustration, all areas our editors are experienced in.",
          },
          {
            question:
              "How long does the editing process take?",
            answer:
              "Turnaround time depends on manuscript length and the type of editing. Developmental editing takes longer due to the depth of structural analysis involved. We agree on and guarantee a delivery date before every project begins. Contact us, we will review and let you the estimate time period.",
          },
          {
            question:
              "Can I get editing and formatting together?",
            answer:
              "Yes, and many authors choose this option. NexiFire's editing and formatting bundle moves your manuscript seamlessly from the editorial stage to interior layout, cover design, and publication-ready files. Bundling services saves time, reduces back-and-forth, and keeps your entire project under one experienced roof.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Experiences"
        title="What Authors Say About Our Editing Services"
        description="Thousands of Australian authors have worked with NexiFire's editorial team. Here are a few of their experiences."
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I submitted my debut novel to NexiFire after two rejections from traditional publishers. The developmental feedback I received was honest, detailed, and genuinely transformative. My editor identified a structural issue in Act Two that I'd completely missed. After revisions, the book was picked up by a small press. I cannot thank the team enough.",
            name: "Rachel Tim",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a business consultant writing my first book, I needed an editor who understood corporate communication as well as narrative. NexiFire matched me perfectly. The copy edit was thorough without being heavy-handed, and the editorial notes were always constructive. My book went from solid to genuinely impressive.",
            name: "Marcus Lenny",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I was nervous about having someone else work on my memoir; it's deeply personal. But my NexiFire editor handled it with such care and professionalism. She understood what I was trying to say, helped me say it better, and never once made me feel judged. The proofreading pass was spotless. Highly recommend.",
            name: "Anita Ken",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="Ready to Publish Your Book?"
        description={<><p>Whether you have a finished manuscript, a half-written draft, or just a powerful idea you don't know how to start, our publishing specialists are here to help. At NexiFire Publishing, we work with Australian authors at every stage of their journey, from first conversation to final distribution.</p>
        <p className="mt-2">Tell us about your project today and take the first step toward becoming a published author.</p>
</>}
      />
    </section>
  );
};

export default page;
