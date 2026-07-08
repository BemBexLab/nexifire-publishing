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
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Nexfire Publishing"
        title={`eBook Publishing Services Australia`}
        description={<><span className="font-bold text-black">Publish Your eBook. Reach Readers Everywhere.</span> NexiFire Publishing handles everything Australian authors need to get their eBook into the world, professional EPUB and MOBI conversion, cover design built for digital storefronts, Kindle KDP setup, and simultaneous distribution to every major platform. Your book lives globally, without the guesswork.</>}
        buttonLabel="Publish Your Book Now"
      />
      <Introduction
        eyebrow="What's Included"
        title="Complete eBook Publishing Services in Australia"
        description={<>
          <p className="my-5 text-base font-light leading-[1.45] text-[#444444] sm:text-lg">
            Every eBook published through NexiFire goes through a professional, multi-stage production process. Here is exactly what we deliver for every author we work with.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-base font-light leading-[1.45] text-[#777777] sm:text-lg">
            <li>EPUB & MOBI Conversion</li>
            <li>eBook Cover Design</li>
            <li>Amazon Kindle KDP Setup</li>
            <li>Apple Books Publishing</li>
            <li>Global eBook Distribution</li>
            <li>Metadata & SEO Optimisation</li>
            <li>ISBN Registration</li>
            <li>Pricing Strategy & Royalty Advice</li>
          </ul>
        </>}
        imageSrc="/0eee94f7-4643-4e46-8b95-cc9232497a79 1.png"
      />
      <OurProcess
        badgeText="How It Works"
        title="Publish Your Book in 4 Clear Steps"
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
      <PricingPackages />
      <WhyChoose
        badgeText="The NexiFire Difference"
        title="Why Australian Authors Choose NexiFire to Publish Their eBook"
        description=""
        reasons={[
          {
            title: "You Keep 100% of Your Royalties",
            description:
              "",
          },
          {
            title: "Affordable Without Cutting Corners",
            description:
              "",
          },
          {
            title: "One Team, Every Platform",
            description:
              "",
          },
          {
            title: "Files Tested on Real Devices",
            description:
              "",
          },
          {
            title: "Local Knowledge, Global Reach",
            description:
              "",
          },
        ]}
      />
      <PublishYourBook
        backgroundAlt="A girl reading a book"
        backgroundImageSrc="/Frame 2147225866.png"
        buttonLabel="Start Your eBook Journey"
        description="Get a free, no-obligation quote today. Tell us about your manuscript, your preferred platforms, and your timeline, and we'll have a publishing plan ready for you within 24 hours."
        title="Ready to Publish Your eBook in Australia?"
      />
      <ImageDesc
        title="Your Manuscript Becomes a Professional eBook, Ready to Sell"
        paragraphs={[
          "The eBook market in Australia is growing faster than ever. Readers discover, buy, and read digital books across Kindle, Apple Books, Kobo, and Google Play every single day, and the authors who reach them are the ones whose books are formatted correctly, priced strategically, and listed on every platform readers actually use.",
          "NexiFire Publishing provides end-to-end eBook publishing services in Australia, from converting your raw manuscript into a flawless EPUB3 and MOBI file, to designing a cover that commands attention on a digital shelf, to setting up your Kindle Direct Publishing account and distributing your title globally on launch day.",
          "We do the technical work so you can focus on writing the next book. And because you retain 100% of your rights and royalties, every sale goes directly into your pocket.",
        ]}
        imageSrc="/Rectangle 23834 (3).png"
        imageAlt="Publishing team"
      />
      <div className="h-20" />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe {...defaultWhoWeServeData} />
      </div>
      <WhatsIncluded
        badgeText="Where Your eBook Will Live"
        title="eBook Platforms for Australian Authors"
        description="NexiFire distributes your eBook to every platform Australian and international readers use. Here's a breakdown of the major platforms, what they offer, and the royalty rates you can expect."
        items={[
          { label: "Amazon Kindle (KDP)" },
          { label: "Apple Books" },
          { label: "Kobo / Rakuten" },
          { label: "Google Play Books" },
          { label: "Barnes & Noble Nook" },
          { label: "Scribd & Library Networks" },
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
            question: "How do I publish an eBook in Australia?",
            answer:
              "Publishing an eBook in Australia involves converting your manuscript to EPUB3 and MOBI formats, creating a professional eBook cover, registering an ISBN, writing optimised metadata, and submitting your title to platforms like Amazon Kindle, Apple Books, Kobo, and Google Play. NexiFire manages every one of these steps for Australian authors, taking your manuscript all the way through to a live, globally distributed eBook.",
          },
          {
            question:
              "How much does eBook publishing cost in Australia?",
            answer:
              "NexiFire offers affordable eBook publishing packages in Australia with transparent flat-rate pricing. Costs vary based on manuscript length, whether cover design is included, and how many platforms you want to distribute to. Contact us with your manuscript details for a free, accurate quote. There are no hidden fees and no ongoing commissions taken from your royalties.",
          },
          {
            question:
              "Do I keep the rights to my eBook when publishing with NexiFire?",
            answer:
              "Yes, absolutely. NexiFire is a publishing services company, we never acquire, share, or claim any rights to your eBook. You retain 100% of your copyright, your digital rights, and every cent of royalties your book earns. You can withdraw your title from distribution at any time, update it, or use the files we produce elsewhere without restriction.",
          },
          {
            question: "What royalties will I earn from eBook sales in Australia?",
            answer:
              "Royalty rates vary by platform. Amazon KDP pays 70% on books priced between $2.99 and $9.99 USD, and 35% outside that range. Apple Books and Kobo both pay 70% royalties. Google Play pays approximately 52%. As NexiFire takes no commission from your sales, every dollar from these platforms comes directly to you as the author-publisher.",
          },
          {
            question:
              "Can I publish both an eBook and a print book at the same time?",
            answer:
              "Yes. Many NexiFire authors choose to launch both a digital eBook and a print-on-demand paperback or hardcover simultaneously. We can manage your eBook formatting and distribution alongside our interior formatting, cover design, and print distribution services, giving your book the widest possible reach across both digital and physical booksellers from day one.",
          },
          {
            question:
              "What is the best platform to self-publish an eBook in Australia in 2026?",
            answer:
              "The best eBook platforms for Australian authors in 2026 are Amazon Kindle Direct Publishing (KDP), Apple Books, Kobo Writing Life, and Google Play Books. Amazon KDP reaches the largest global audience and offers 70% royalties in the $2.99–$9.99 pricing window. Apple Books has a strong and growing Australian readership. Most authors benefit from publishing across all platforms simultaneously rather than choosing just one, which is exactly what NexiFire's distribution service delivers.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Stories"
        title="Australian Authors Who Published Their eBook With NexiFire"
        description="Here's what authors across Australia say about their eBook publishing experience with NexiFire."
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I'd been trying to format my novel as an EPUB myself for three weeks and getting nowhere. NexiFire had a validated, test-approved EPUB and MOBI file back to me in four business days. The KDP setup was handled entirely by them; my Kindle listing was live and formatted perfectly within a week of sending my manuscript. Genuinely impressed.",
            name: "Daniel Franklin",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I wanted my business book available on Kindle, Apple Books, and Kobo at the same time, and I wanted professional results without paying traditional publisher prices. NexiFire delivered all three platform listings simultaneously, with a cover that looks completely at home next to traditionally published business titles. Highly recommend for any professional author.",
            name: "Tom Gary",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "The metadata advice alone was worth the entire fee. I had no idea that category selection and keyword placement in your KDP description had such a direct impact on discoverability. After NexiFire optimised my listing, my book appeared in three new Kindle browse categories it wasn't in before. Sales have been consistent ever since launch.",
            name: "Christine William",
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
