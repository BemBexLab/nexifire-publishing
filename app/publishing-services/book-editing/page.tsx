import FAQs from "@/components/FAQs";
import FooterCTA from "@/components/Footer";
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
        eyebrow=""
        title={`Professional Book Editing Services USA`}
        description={
          <>
            <span className="text-black font-bold text-2xl">
              Your Manuscript Deserves a Real Editor
            </span>{" "}
            <br /> Professional book editing and proofreading services for
            authors across the USA, from the first structural read to the final
            line before print.
          </>
        }
        buttonLabel="Get a Free Manuscript Quote"
      />
      <Introduction
        eyebrow=""
        title="Not All Editing Is the Same"
        description={
          <>
            <p>
              A lot of authors search for "book editing" without realizing there
              are actually several distinct stages, each solving a different
              problem. NexiFire offers every level of manuscript editing
              service, so you get exactly what your book needs, not a
              one-size-fits-all pass that misses what actually matters.
            </p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[#444444] sm:text-lg">
              <li>
                <div className="inline">
                  <span className="mr-1 font-semibold">
                    Developmental Editing:
                  </span>{" "}
                  Big-picture structure, pacing, and story or argument strength
                </div>
              </li>
              <li>
                <div className="inline">
                  <span className="mr-1 font-semibold">Line Editing:</span>{" "}
                  Sentence-level flow, tone, and voice, especially for fiction
                </div>
              </li>
              <li>
                <div className="inline">
                  <span className="mr-1 font-semibold">Copy Editing:</span>{" "}
                  Grammar, consistency, and clarity throughout the manuscript
                </div>
              </li>
              <li>
                <div className="inline">
                  <span className="mr-1 font-semibold">Proofreading:</span> The
                  final quality check after formatting, catching what slipped
                  through
                </div>
              </li>
              <li>
                <div className="inline">
                  <span className="mr-1 font-semibold">
                    Manuscript Evaluation:
                  </span>{" "}
                  An honest assessment of where your book stands and what it
                  needs next
                </div>
              </li>
              <li>
                <div className="inline">
                  <span className="mr-1 font-semibold">
                    Editing & Formatting Bundle:
                  </span>{" "}
                  Editorial work and interior layout handled together seamlessly
                </div>
              </li>
            </ul>
          </>
        }
        imageSrc="/image 67.webp"
      />
      <div className="bg-[#fffaf6] py-14 sm:py-16 md:py-20 lg:py-24">
        <OurProcess
          badgeText="How It Works"
          title="How Our Editing Process Works"
          description=""
          steps={[
            {
              number: "01",
              title: "Free Consultation & Manuscript Submission",
              description:
                "Send us your manuscript and goals, and we'll recommend the right editing service and editor for your project.",
            },
            {
              number: "02",
              title: "Editorial Review",
              description:
                "Your editor works through the manuscript using tracked changes and margin notes, so every suggestion is clear and easy to follow.",
            },
            {
              number: "03",
              title: "Author Review",
              description:
                "You receive the edited manuscript along with an editorial summary. Review the changes, accept or query anything, and request a revision call if you need one.",
            },
            {
              number: "04",
              title: "Final Delivery",
              description:
                "Once approved, we deliver your clean, finalized manuscript, ready for formatting, printing, and distribution.",
            },
          ]}
        />
      </div>
      <WhyChoose
        badgeText=""
        title="Why a Professional Editor Matters More Than You Think"
        description=""
        reasons={[
          {
            title: "",
            description:
              "Even talented writers benefit from a second pair of expert eyes. A professional book editor doesn't just fix typos; they strengthen your story, sharpen your argument, and catch the things you've read past a hundred times without noticing. They ask the questions your readers will ask before your readers get the chance to ask them.",
          },
          {
            title: "",
            description:
              "At NexiFire, our manuscript editing service for authors is delivered by qualified editors with real genre knowledge, not a generic pass run by whoever's available. Whether you're preparing a debut novel, a nonfiction business book, a children's picture book, or a personal memoir, you're matched with an editor who understands your genre and your audience, not one working outside their depth.",
          },
          {
            title: "",
            description:
              "Every manuscript that leaves our editorial desk is publication-ready: polished, consistent, and built to meet the expectations of today's readers.",
          },
        ]}
      />
      <PublishYourBook
        eyebrow=""
        title="Not Sure What Level of Editing You Need?"
        description="Send us your manuscript and we will tell you honestly, developmental edit, copy edit, or just a proofread, no guesswork, no upsell."
        backgroundImageSrc="/Frame 2147225868.webp"
        backgroundAlt=""
        buttonLabel="Get My Free Manuscript Assessment"
        buttonHref="/contact"
      />
      <WhatsIncluded
        badgeText="What's Included"
        title="What's Included in Every Editing Package"
        items={[
          { label: "Tracked changes in your original document" },
          { label: "Margin comments and editorial notes" },
          { label: "Editorial summary letter on completion" },
          { label: "One round of revision queries included" },
          { label: "Confidentiality agreement before we begin" },
          { label: "Dedicated editor contact throughout your project" },
          { label: "Guaranteed delivery by an agreed deadline" },
          { label: "Transparent, flat-rate pricing" },
        ]}
        imageSrc="/Rectangle 23830.webp"
        imageAlt="Complete Editing solutions"
        iconSrc="/Mask group.svg"
      />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe
          {...{
            badgeText: "Who We Serve",
            title: "Editing for Every Genre",
            description:
              "Fiction requires a different editorial eye than a business book, and a memoir requires something different again. Our editors specialize by genre:",
            stats: [
              { value: "7+", label: "Years of experience", highlighted: true },
              { value: "130+", label: "Professional ghostwriters" },
              { value: "5K+", label: "Happy Clients" },
              { value: "2K+", label: "Books Published", highlighted: true },
            ],
            genres: [
              "Fiction & Novels (line editing for voice and pacing)",
              "Nonfiction & Business Books",
              "Memoir & Personal Story",
              "Christian & Faith-Based Books",
              "Self-Help & Personal Development",
              "Children's Books & Picture Books",
              "Academic & Dissertation Editing",
            ],
          }}
        />
      </div>
      <ImageDesc
        badgeText=""
        title="Why Authors Choose NexiFire for Book Editing"
        paragraphs={[
          <div className="space-y-3">
            <div>
              <h3 className="text-black font-semibold">
                Real Editors, Not Algorithms
              </h3>
              <p>
                Every manuscript is edited by a qualified human professional,
                not run through software and called done.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold">
                An Editing Service That Keeps Your Voice
              </h3>
              <p>
                A good editor sharpens your voice; they don't replace it with
                their own. You'll still sound like you, just clearer.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold">
                Affordable, Transparent Pricing
              </h3>
              <p>
                Affordable book editing shouldn't mean lower quality. Our
                flat-rate pricing means no surprise invoices after the work is
                done.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold">
                Unlimited Revisions Where It Counts
              </h3>
              <p>
                Our book editing packages include revision rounds built in, so
                the manuscript isn't "finished" until it actually reads the way
                you intended.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold">
                Full Publishing Support Available
              </h3>
              <p>
                Once editing is complete, the same team can handle formatting,
                cover design, ISBN registration, and full distribution, so your
                book doesn't have to change hands between companies.
              </p>
            </div>
          </div>,
        ]}
        imageSrc="/Rectangle 23834 (2).webp"
        imageAlt=""
        reverse={true}
      />
      <div className="h-20" />
      <FAQs
        badgeText="Author Experiences"
        title="Frequently Asked Questions"
        items={[
          {
            question:
              "What's included in book editing and proofreading services?",
            answer:
              "A full editing and proofreading service typically includes a structural or line edit for content and flow, a copy edit for grammar and consistency, and a final proofread after formatting to catch layout errors. NexiFire offers each stage individually or bundled, depending on what your manuscript needs.",
          },
          {
            question:
              "How much does professional manuscript editing cost in the USA?",
            answer:
              "Cost depends on manuscript length and the type of editing required. NexiFire uses transparent, flat-rate pricing, contact us with your manuscript details for a free, accurate quote with no obligation.",
          },
          {
            question:
              "What's the difference between copy editing and proofreading?",
            answer:
              "Copy editing happens before formatting and addresses grammar, style, consistency, and clarity throughout the text. Proofreading happens after the book is typeset and is the final check for errors introduced during layout, like spacing issues or page number inconsistencies. Most authors use both as part of a complete editorial process.",
          },
          {
            question:
              "Do I need developmental editing or copy editing for my book?",
            answer:
              "If your manuscript is early or mid-draft, or you're unsure whether the structure is working, developmental editing is the right starting point. If the structure is solid and you just need language and consistency refined, copy editing is the better fit. Our free consultation identifies exactly where your manuscript stands.",
          },
          {
            question: "Will editing change my writing voice?",
            answer:
              "No. A professional editor sharpens and clarifies your voice, they don't overwrite it with their own. Any manuscript editing service worth using should return your book sounding more like you, not less.",
          },
          {
            question:
              "Do you offer proofreading services for self-published authors specifically?",
            answer:
              "Yes. Self-published authors don't have a traditional publishing house doing this quality check for them, which makes a final proofreading pass essential before your book goes live on Amazon or any other platform.",
          },
          {
            question:
              "Do you offer a manuscript evaluation for new authors who aren't sure what their book needs?",
            answer:
              "Yes. A manuscript evaluation gives you an honest, professional assessment of your book's current state and a clear recommendation on what level of editing to pursue next, before you commit to a full edit.",
          },
          {
            question:
              "Can I get a book editing package with unlimited revisions?",
            answer:
              "Our packages include revision rounds built into the process, and we work with you until the manuscript genuinely reflects what you intended, rather than cutting you off after one pass.",
          },
          {
            question:
              "Do you edit Christian and faith-based books specifically?",
            answer:
              "Yes. Christian book editing and proofreading is handled by editors experienced in faith-based tone, message, and audience expectations, so nothing gets flattened or misread in translation.",
          },
          {
            question:
              "Do you offer academic, thesis, or dissertation editing and proofreading?",
            answer:
              "Yes. We offer academic and dissertation editing and proofreading for authors and students who need formal structure, citation consistency, and language precision reviewed by a professional editor.",
          },
          {
            question: "Can I get editing and formatting done together?",
            answer:
              "Yes, and many authors choose this route. Our editing and formatting bundle moves your manuscript from editorial review straight into interior layout and publication-ready files, all under one team.",
          },
          {
            question: "How long does the editing process take?",
            answer:
              "Turnaround depends on manuscript length and editing type; developmental editing takes longer due to the depth of structural work involved. We agree on and guarantee a delivery date before every project begins.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Experiences"
        title="What Authors Say"
        description=""
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I submitted my debut novel to NexiFire after two rejections from traditional publishers. The developmental feedback was honest, detailed, and genuinely transformative — my editor caught a structural issue in Act Two I'd completely missed. After revisions, the book was picked up by a small press.",
            name: "Rachel Tim",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a business consultant writing my first book, I needed an editor who understood corporate communication as well as narrative. NexiFire matched me perfectly. The copy edit was thorough without being heavy-handed, and my book went from solid to genuinely impressive.",
            name: "Marcus Lenny",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I was nervous about handing over my memoir; it's deeply personal. My NexiFire editor handled it with real care, helped me say things better without ever making me feel judged, and the proofreading pass was spotless.",
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
        description={
          <>
            <p>
              Whether you have a finished manuscript, a half-written draft, or
              just a powerful idea you don't know how to start, our publishing
              specialists are here to help. At NexiFire Publishing, we work with
              American authors at every stage of their journey, from first
              conversation to final distribution.
            </p>
            <p className="mt-2">
              Tell us about your project today and take the first step toward
              becoming a published author.
            </p>
          </>
        }
      />
      {/* <FooterCTA title="" description="NexiFire Publishing is a trusted self-publishing company for authors ready to get their book into the world. We help authors publish ebooks, print books, and audiobooks with full-service support, ghostwriting, editing, formatting, cover design, and global distribution, all under one roof. As one of the best self-publishing companies for first-time authors, we handle the parts that usually trip people up, so you can focus on the book itself." /> */}
    </section>
  );
};

export default page;
