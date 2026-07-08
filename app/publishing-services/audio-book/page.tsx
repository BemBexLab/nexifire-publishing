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
import WhyItMatters from "@/components/WhyItMatters";
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="NexiFire Publishing"
        title={`Audiobook Production Services Australia`}
        description="NexiFire Publishing provides complete audiobook production services for Australian authors, professional narration, studio-quality recording, expert audio mastering, and global distribution to Audible, Apple Books, Spotify, and 20+ platforms. We produce a professional audiobook from your manuscript, start to finish."
        buttonLabel="Start My Audiobook Today"
      />
      <Introduction
        eyebrow="Introduction"
        title="Choose the Voice Your Audiobook Deserves"
        description={
          <div>
            <p>
              The right narrator can actually do the process of converting a
              good book into an unforgettable listening experience. NexiFire
              offers two narration pathways: professional narrator or
              author-narrated, each with full production support.
            </p>

            <h3 className="text-xl font-bold mt-4">Professional Narrator</h3>
            <p>
              We match you with a narrator whose voice, tone, and experience
              align with your genre and the emotional register of your book.
            </p>

            <h3 className="text-xl font-bold mt-4">Author-Narrated</h3>
            <p>
              NexiFire supports author-narrated audiobooks with coaching,
              technical guidance, and full professional post-production to make
              sure your recordings meet ACX and platform quality standards.
            </p>
          </div>
        }
        imageSrc="/0eee94f7-4643-4e46-8b95-cc9232497a79 1 (2).png"
      />
      <OurProcess
        badgeText="How It Works"
        title="Converting Your Book to an Audiobook in 4 Steps"
        description="NexiFire's audiobook production process covers every technical and creative stage between your manuscript and a live, globally distributed audiobook"
        steps={[
          {
            number: "01",
            title: "Consultation & Planning",
            description:
              "We assess your manuscript, study your goals, and create a audiobook production plan accordingly.",
          },
          {
            number: "02",
            title: "Script Preparation & Narrator Selection",
            description:
              "We prepare your manuscript for narration and help you choose the perfect voice for your book.",
          },
          {
            number: "03",
            title: "Recording & Audio Production",
            description:
              "Your audiobook is professionally recorded, edited, and mastered to meet industry standards.",
          },
          {
            number: "04",
            title: "Distribution & Launch",
            description:
              "We publish your audiobook on leading global platforms and ensure it's ready for listeners worldwide.",
          },
        ]}
      />
      <WhyItMatters />
      <WhyChoose
        badgeText="The NexiFire Difference"
        title="Why Australian Authors Choose NexiFire for Audiobook Production"
        description=""
        reasons={[
          {
            title: "Australian Narrators Who Know Your Audience",
            description:
              "Professional Australian narrators, naturally delivered.",
          },
          {
            title: "Certified Studio Quality Every Time",
            description: "We never compromise on audio environment quality",
          },
          {
            title: "Flat-Rate Pricing, No Royalty Share",
            description:
              "NexiFire charges a transparent flat-rate production fee.",
          },
          {
            title: "One Team, Manuscript to Distribution",
            description:
              "NexiFire manages your audiobook from the moment your manuscript arrives to it goes live on Audible and Apple Books.",
          },
          {
            title: "Support for Author-Narrated Projects",
            description:
              "NexiFire provides structured technical guidance, coaching, and full post-production support.",
          },
        ]}
      />
      <PublishYourBook
        title="Keep 100% of Your Audiobook Royalties"
        description="NexiFire never takes a commission from your audiobook royalties. We charge a flat-rate production fee; every cent your audiobook earns on Audible, Apple Books, Spotify, and every other platform is paid directly to you."
        backgroundImageSrc="/Frame 2147225871.png"
        backgroundAlt="headphones"
        buttonLabel="Start Your Audiobook Today"
      />
      <ImageDesc
        badgeText="Why Audiobooks Matter Now"
        title="Your Book's Audience Is Bigger Than You Think; They're Just Listening"
        paragraphs={[
          "Nexifire Publishing is a complete self-publishing company that helps authors turn their ideas into professionally published books. Our services cover writing, editing, design, publishing, and marketing, and we handle the entire process for you, from the first conversation to the final listing.",
          "An audiobook doesn't replace your print or eBook. It opens your book to an entirely different audience, one that might never have discovered you otherwise. And for authors building a long-term readership, being present across every format is no longer a luxury. It's a competitive baseline.",
          "NexiFire's audiobook production service in Australia manages every step of the conversion process. From preparing your manuscript for narration to selecting the right voice, recording and mastering to studio quality, and distributing to every platform your listeners actually use, we take care of all of it so you don't have to navigate the technical complexity alone.",
        ]}
        imageSrc="/Rectangle 23834 (6).png"
        imageAlt=""
        reverse={true}
      />

      <div className="h-20" />

      <div className="bg-[#FDF7F4]">
        <WhoWeServe
          badgeText="Every Genre, Every Voice"
          title="Audiobook Production Across Every Genre"
          description="Different genres require different narration approaches. A thriller needs pace and tension. A children's audiobook needs warmth and clear character voices. A memoir needs emotional authenticity. NexiFire matches every title with narrators experienced in its specific genre."
          stats={[
            { value: "7+", label: "Years of experience", highlighted: true },
            { value: "130+", label: "Professional ghostwriters" },
            { value: "5K+", label: "Happy Clients" },
            { value: "2K+", label: "Books Published", highlighted: true },
          ]}
          genres={[
            "Fiction & Novels",
            "Children's Audiobooks",
            "Memoir & Biography",
            "Business & Leadership",
            "Self-Help & Personal Development",
            "Academic & Educational",
          ]}
        />
      </div>

      <WhatsIncluded
        badgeText="Where Your Audiobook Will Live"
        title="Distributed to Every Platform Australian Listeners Use"
        description="NexiFire distributes your audiobook to every major listening platform simultaneously, so wherever your readers choose to consume audiobooks, your title will be waiting for them."
        items={[
          { label: "Audible (ACX)" },
          { label: "Apple Books" },
          { label: "Spotify" },
          { label: "Google Play Books" },
          { label: "Storytel" },
          { label: "OverDrive" },
          { label: "Kobo Audiobooks" },
          { label: "Scribd & More 20+ Platforms" },
        ]}
        imageSrc="/Rectangle 23830 (3).png"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question: "How much does audiobook production cost in Australia?",
            answer:
              "Audiobook production costs in Australia depend on your manuscript's word count, the narrator selected, and the level of production required. NexiFire charges transparent flat-rate fees; contact us with your word count and narration preference for an accurate quote with no hidden fees and no royalty commission deducted from your earnings.",
          },
          {
            question:
              "How long does audiobook production take?",
            answer:
              "A standard audiobook production timeline with NexiFire ranges from four to eight weeks from manuscript receipt to a live, distributed title. This covers manuscript preparation, narrator casting, studio recording, audio editing and mastering, quality control, and platform submission. Exact timelines depend on manuscript length and narrator availability.",
          },
          {
            question:
              "Can I narrate my own audiobook with NexiFire?",
            answer:
              "Yes. NexiFire fully supports author-narrated audiobooks with a structured workflow that includes pre-recording coaching, technical setup guidance, chapter-by-chapter recording review, professional audio editing, and full mastering to ACX and platform specifications. Your home recordings are transformed into professionally produced audio that passes platform quality checks the first time.",
          },
          {
            question: "Which audiobook platforms will my title be distributed to?",
            answer:
              "NexiFire distributes your audiobook to Audible (ACX), Apple Books, Google Play Books, Spotify, Storytel, Kobo Audiobooks, Scribd, OverDrive (library network), Bibliotheca, and 15+ additional platforms simultaneously, giving your title global availability from its launch day.",
          },
          {
            question:
              "Do I keep my audiobook rights and royalties?",
            answer:
              "Yes, completely. NexiFire charges a flat-rate production fee and takes no commission from your audiobook royalties. You retain 100% of your intellectual property rights and every cent earned through Audible, Apple Books, Spotify, and every other distribution platform, forever.",
          },
          {
            question:
              "Does NexiFire produce children's audiobooks in Australia?",
            answer:
              "Yes. NexiFire produces children's audiobooks in Australia with narrators who specialise in engaging young listeners, covering picture books, early readers, chapter books, and middle-grade fiction with the energy, character voices, and clear pacing that children's audiobooks require to hold a young audience's attention.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription={<>
        <ul className="list-outside space-y-2 text-left">
          <li>Manuscript preparation and narration script</li>
          <li>Narrator matching and sample auditions</li>
          <li>Certified studio or guided home recording</li>
          <li>Professional audio editing and cleaning</li>
          <li>Full mastering to ACX specification</li>
          <li>QC listen on every chapter before submission</li>
          <li>Distribution to 20+ platforms simultaneously</li>
          <li>100% royalties to author, no commission</li>
        </ul>
        </>}
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Results"
        title="What Australian Authors Say About Their NexiFire Audiobook"
        description="Real experiences from authors who trusted NexiFire to convert their book into a professionally produced audiobook."
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I had no idea how involved the audiobook process was until I tried to do it myself and hit a wall with ACX technical requirements. NexiFire took over completely; they matched me with a narrator whose voice was perfect for my thriller, managed the recording, and delivered a polished, approved audiobook in six weeks. My Audible sales surprised me from the very first month.",
            name: "Samantha Raymond",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I wanted to narrate my own business book but had no idea how to make the recordings sound professional. NexiFire's coaching session was genuinely invaluable; it changed how I read and paced the material. The post-production team turned my home recordings into something that sounds like it came from a professional studio. Audible approved it first submission.",
            name: "David Carl",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "My memoir is deeply personal, and finding the right narrator felt daunting. NexiFire sent me three sample auditions from narrators matched to the emotional tone of my book. The one I chose was extraordinary; she brought a warmth and care to my story I hadn't expected. Hearing my memoir performed that way genuinely moved me. Highly recommend the full NexiFire audiobook service.",
            name: "Lindy Ornald",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="Ready to Convert Your Book to an Audiobook?"
        description="Get a free, no-obligation quote today. Tell us your manuscript length, your preferred narration approach, and your timeline, and we'll have a production plan ready within 24 hours."
        buttonLable="Get My Free Audiobook Quote"
      />
    </section>
  );
};

export default page;
