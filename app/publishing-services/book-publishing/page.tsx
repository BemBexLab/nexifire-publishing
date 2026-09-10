import FAQs from "@/components/FAQs";
import FooterCTA from "@/components/Footer";
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
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Nexfire Publishing"
        title={`Book Publishing Services for Authors in the USA`}
        description={
          <>
            <span className="font-bold text-black text-2xl">
              Everything Your Book Needs, Handled by One Team
            </span>{" "}
            <br /> NexiFire Publishing is a full-service book publishing company for authors in the USA one team for the whole thing. If you're trying to figure out how to publish a book on Amazon, need a book publishing service that actually includes formatting and an ISBN, or want to publish on Kindle and Apple Books at the same time, this is what we do, start to finish.
          </>
        }
        buttonLabel="Get a Free Publishing Consultation"
      />
      <Introduction
        eyebrow="What's Included"
        title="What's Actually Included"
        description={
          <>
            <p className="my-5 text-base font-light leading-[1.45] text-[#444444] sm:text-lg">
              We're not a formatting shop that hands you a file and wishes you luck. As a book publishing service for authors, fiction, nonfiction, first-time or fifth-time, here's what's on the table.
            </p>
            <p className="my-5 text-base font-light sm:text-lg leading-[1.45] text-[#444444]">Writing side: book writing and ghostwriting, developmental editing and proofreading, interior formatting for print and ebook, and a proper manuscript-to-a finished book conversion service in EPUB3 and MOBI, not a rough auto-conversion. Plus copyright registration, ISBN assignment, and cover design for hardcover, paperback, and digital.</p>

            <p className="my-5 text-base font-light sm:text-lg leading-[1.45] text-[#444444]">Publishing side: Amazon KDP setup, distribution to Apple Books, Kobo, Google Play, Barnes & Noble Nook, and library networks, plus print-on-demand for hardcover and paperback. Real global book distribution, your title listed across 40+ countries, not one storefront.</p>
            
            <p className="my-5 text-base font-light sm:text-lg leading-[1.45] text-[#444444]">And after launch: metadata and SEO optimization, A+ content, social media marketing, reels and short-form video, and an author website if you want one.</p>
            
            <p className="my-5 text-base font-light sm:text-lg leading-[1.45] text-[#444444]">One team, whole job, not one piece of it.</p>
          </>
        }
        imageSrc="/0eee94f7-4643-4e46-8b95-cc9232497a79 1.webp"
      />
      <div className="bg-[#fffaf6] py-14 sm:py-16 md:py-20 lg:py-24">
        <OurProcess
          badgeText="How It Works"
          title="Publish Your Book in 4 Clear Steps"
          description="Publishing a book in the United States doesn't need to be complicated."
          steps={[
            {
              number: "01",
              title: "Free consultation",
              description:
                "A real person reviews your manuscript and recommends the right package.",
            },
            {
              number: "02",
              title: "Writing, editing, and design",
              description:
                "Ghostwriting, editing, proofreading, and cover design, done right.",
            },
            {
              number: "03",
              title: "Formatting and printing",
              description:
                "Formatted for print and ebook, tested on real devices before launch.",
            },
            {
              number: "04",
              title: "Launch and distribution",
              description:
                "ISBN, global listing, A+ content, and a real marketing push.",
            },
          ]}
        />
      </div>

      <PricingPackages />
      <WhyChoose
        badgeText="The NexiFire Difference"
        title="Why U.S. Authors Choose NexiFire to Publish Their Book"
        description=""
        reasons={[
          {
            title: "You Keep 100% of Your Royalties",
            description: "",
          },
          {
            title: "Affordable Publishing Without Compromising Quality",
            description: "",
          },
          {
            title: "One Team, Every Major Platform",
            description: "",
          },
          {
            title: "Files Tested Across Popular Devices",
            description: "",
          },
          {
            title: "U.S. Market Knowledge, Global Reach",
            description: "",
          },
        ]}
      />
      <PublishYourBook
        eyebrow="Book Publishing With NexiFire"
        backgroundAlt="A girl reading a book"
        backgroundImageSrc="/Frame 2147225866.webp"
        buttonLabel="Start Your Book Journey"
        description="Send us your manuscript details, length, genre, timeline, which platforms you're thinking about, and we'll have a plan back to you within 24 hours. Free, no pressure."
        title="Ready to Publish?"
      />
      <ImageDesc
        title="Why Authors Actually Choose Us"
        paragraphs={[
          "Most self-publishing services stop at formatting. You get a clean EPUB file, and then you're on your own for everything else, figuring out Amazon KDP, writing your own metadata, hoping people find the book.",
          "We built NexiFire Publishing because that gap is where most first-time authors get stuck. As a book publishing company for first-time authors, and for authors on their fifth book who are just tired of managing five vendors, we cover the whole thing: writing through marketing, not writing through formatting.",
          "You keep 100% of your royalties. We don't take a cut of your sales, ever. Files get tested on real devices, not just validated by software. And pricing is flat and upfront, no surprise invoices halfway through. It's honestly one of the more straightforward book publishing services in the USA if you've shopped around and gotten tired of vague quotes.",
        ]}
        imageSrc="/Rectangle 23834 (3).webp"
        imageAlt="Publishing team"
      />
      <div className="h-20" />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe {...defaultWhoWeServeData} />
      </div>
      <WhatsIncluded
        badgeText=""
        title="Where Your Book Ends Up"
        description={<div className="space-y-3">
          <p className="">Amazon Kindle. Apple Books. Kobo. Google Play. Barnes & Noble Nook. Scribd and library networks. Print-on-demand retailers for hardcover and paperback.</p>

          <p className="">Want to publish a book on Kindle and Apple Books only, keep it simple? Fine. Want to self-publish your book on multiple platforms at once and not think about it again? Also fine; that's the book publishing service with global distribution most authors actually want once they realize how much easier it is than doing each platform separately.</p>
        </div>}
        // items={[
        //   { label: "Amazon Kindle (KDP)" },
        //   { label: "Apple Books" },
        //   { label: "Kobo / Rakuten" },
        //   { label: "Google Play Books" },
        //   { label: "Barnes & Noble Nook" },
        //   { label: "Scribd & Library Networks" },
        // ]}
        imageSrc="/439230f4-7c82-4411-9ce5-487944ae406f 1.webp"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question: "How do I publish a book on Amazon?",
            answer:
              "You'll need a properly formatted book file, a Kindle Direct Publishing account, and metadata that's actually optimized, not just filled in. We handle all three; this is basically what Amazon KDP publishing help for authors means in practice.",
          },
          {
            question:
              "What does a book publishing service with formatting included and an ISBN actually mean?",
            answer:
              "It means the file isn't just a raw conversion, and your book gets a properly registered ISBN as part of the process, not something you have to source separately. Chapter breaks, table of contents, image placement, device compatibility- all handled and tested on real e-readers, not just checked by a validator.",
          },
          {
            question:
              "What does a book publishing service cost in the USA?",
            answer:
              "Depends on manuscript length, whether you need writing or ghostwriting, and how many platforms you're going to. Flat pricing, no hidden fees, no ongoing cut of your royalties. Send us the details, and we'll quote it.",
          },
          {
            question:
              "Do I keep the rights to my book?",
            answer:
              "Yes, entirely. We're a service provider, not a publisher in the traditional sense. Your copyright, your rights, your royalties, all yours.",
          },
          {
            question:
              "Can I self-publish my book on multiple platforms at once?",
            answer:
              "Yes, and honestly, most authors should. Amazon KDP, Apple Books, Kobo, and Google Play simultaneously is pretty standard now, rather than picking one and hoping; that's what real global book distribution looks like in practice.",
          },
          {
            question:
              "Can I do print and ebook at the same time?",
            answer:
              "Yes, a lot of our authors launch a paperback or hardcover alongside the ebook. Same manuscript, handled together, so there's no gap between formats at launch.",
          },
          {
            question:
              "Do you work with nonfiction authors?",
            answer:
              "Yes, this is a book publishing service for nonfiction just as much as fiction, including business books and memoirs. The metadata and category strategy differs depending on how your readers actually search, so we adjust for that.",
          },
          {
            question:
              "What's the best book publishing service for a first-time author?",
            answer:
              "Honestly, look for one that does more than formatting: writing support if you need it, real editing, a cover that doesn't scream self-published, ISBN and copyright handled properly, and distribution across every major platform at once. That combination is what separates a decent book publishing company for first-time authors from a service that just converts your file and disappears.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Stories"
        title="What Authors Say"
        description=""
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I spent three weeks trying to format my own novel and got nowhere. NexiFire had a tested, working EPUB and MOBI file back to me in four days. My Kindle listing was live within a week, and it actually looked right.",
            name: "Daniel Franklin",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I wanted Kindle, Apple Books, and Kobo all at once, without paying traditional publisher rates. They handled all three at the same time, and the cover honestly looks better than some traditionally published nonfiction I've seen.",
            name: "Tom Gary",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "Honestly, the metadata work was the most valuable part. I didn't realize how much category and keyword choice mattered until my book started showing up in browse categories it wasn't in before.",
            name: "Christine William",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="Ready to Publish Your Book?"
        description="Tell us where you are and where you want to go. As a self-publishing company built for authors, NexiFire Publishing will design the right plan, bring in the right specialists, and help you move forward with confidence, whether this is your first book or your fifth."
      />
      {/* <FooterCTA title="NEXIFIRE PUBLISHING" description="NexiFire Publishing is a trusted self-publishing company for authors ready to get their book into the world. We help authors publish ebooks, print books, and audiobooks with full-service support, ghostwriting, editing, formatting, cover design, and global distribution, all under one roof. As one of the best self-publishing companies for first-time authors, we handle the parts that usually trip people up, so you can focus on the book itself." /> */}
    </section>
  );
};

export default page;
