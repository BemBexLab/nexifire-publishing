import type { ReactNode } from "react";

import type { FAQItem, FAQsProps } from "@/components/FAQs";
import type { OurProcessProps, OurProcessStep } from "@/components/OurProcess";
import type {
  TestimonialItem,
  TestimonialsProps,
} from "@/components/Testimonials";
import type { WhoWeServeProps } from "@/components/WhoWeServe";
import type { WhyChooseProps, WhyChooseReason } from "@/components/WhyChoose";
import { defaultWhoWeServeData } from "@/data/whoWeServe";

type PageHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
};

type IntroductionContent = {
  eyebrow: string;
  title: string;
  description: string | ReactNode;
  imageSrc: string;
};

type PublishBannerContent = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundImageSrc: string;
  backgroundAlt: string;
  overlayClassName?: string;
};

type ImageDescContent = {
  badgeText?: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

type WhatsIncludedContent = {
  badgeText: string;
  title: string;
  description?: string;
  items: Array<{ label: string }>;
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  iconAlt?: string;
};

type FAQsContent = Omit<FAQsProps, "items"> & {
  items: FAQItem[];
};

type TestimonialsContent = Omit<TestimonialsProps, "testimonials"> & {
  testimonials: TestimonialItem[];
};

type ContactContent = {
  title: string;
  description: string | ReactNode;
  buttonLable?: string;
};

export type PublishingServicePageData = {
  slug: string;
  hero: PageHeroContent;
  introduction: IntroductionContent;
  process: OurProcessProps;
  whyChoose: Omit<WhyChooseProps, "reasons"> & {
    reasons: WhyChooseReason[];
  };
  publishBanner: PublishBannerContent;
  imageDesc: ImageDescContent;
  whoWeServe: WhoWeServeProps;
  whatsIncluded: WhatsIncludedContent;
  faqs: FAQsContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
};

export const publishingServicePageData: Record<
  string,
  PublishingServicePageData
> = {
  "book-marketing": {
    slug: "book-marketing",
    hero: {
      eyebrow: "Book Marketing Services Australia",
      title: "Your Book is Written. Now Let's Make Sure Readers Find It.",
      description: "",
      buttonLabel: "Get a Marketing Plan",
      buttonHref: "/contact",
    },
    introduction: {
      eyebrow: "Book Marketing Support",
      title: "Book Marketing",
      description:
        "Publishing your book is only half the journey. NexiFire Publishing delivers professional book marketing services for Australian authors, from Amazon advertising and social media campaigns to global print-on-demand distribution across 40+ countries. We get your book in front of the readers who are already looking for it.",
      imageSrc: "/image 69.png",
    },
    process: {
      badgeText: "How It Works",
      title: "Your Book Marketing Journey, Step by Step",
      description:
        "NexiFire's book marketing process is built around your book, genre, and goals, not a standard package applied to every author regardless of what they've written",
      steps: [
        {
          number: "01",
          title: "Discovery & Strategy",
          description:
            "Target audience analysis and a tailored marketing plan.",
        },
        {
          number: "02",
          title: "Platform Optimisation",
          description:
            "Optimised Amazon listing, metadata, keywords, and categories.",
        },
        {
          number: "03",
          title: "Launch Campaign",
          description: "Pre-launch preparation and multi-channel marketing.",
        },
        {
          number: "04",
          title: "Distribution & Optimisation",
          description:
            "Global distribution, performance monitoring, campaign optimisation, and ongoing marketing support.",
        },
      ] satisfies OurProcessStep[],
    },
    whyChoose: {
      badgeText: "Global Distribution",
      title: "Get Your Book Into Readers' Hands Across 40+ Countries",
      description:
        "Your book is distributed worldwide through major retailers, libraries, and digital platforms, making sure readers can easily find and purchase it in their preferred format.",
      reasons: [
        {
          title: "Australian Retail",
          description:
            "Booktopia, Dymocks, QBD, Big W, and independent Australian bookstores",
        },
        {
          title: "International Retail",
          description:
            "Amazon US, UK, EU and Canada, Barnes & Noble, Waterstones, and 39,000+ retailers",
        },
        {
          title: "Library Networks",
          description:
            "National Library of Australia, public library systems, OverDrive, Bibliotheca, and international library distributors.",
        },
        {
          title: "Digital Platforms",
          description:
            "Amazon Kindle, Apple Books, Kobo, Google Play, Scribd, and 40+digital platforms",
        },
      ] satisfies WhyChooseReason[],
    },
    publishBanner: {
      title: "Book Marketing Results That Matter",
      description:
        "NexiFire never promises specific sales numbers; no ethical book marketing company can guarantee sales. What we do promise is a clearly defined set of deliverables, a transparent strategy, and a dedicated marketing consultant who treats your book as seriously as you do.",
      buttonLabel: "Start Marketing Today",
      buttonHref: "/contact",
      backgroundImageSrc: "/Frame 2147225869.png",
      backgroundAlt: "Book marketing banner",
    },
    imageDesc: {
      badgeText: "Why Book Marketing Matters",
      title: "Writing the Book Was the Hard Part. Now It Needs to Be Found.",
      paragraphs: [
        "There are over ten thousand new books published in Australia every year. Without a deliberate, well-executed marketing strategy behind your title, even the best-written book can sit unseen on a digital shelf, discovered by almost nobody. The authors who build real readerships, the ones who earn consistent royalties month after month, aren't always the ones who wrote the most brilliant prose. They're the ones who invested in getting their book in front of the right readers.",
        "NexiFire Publishing provides full-service book marketing for Australian authors at every stage of their career. Whether you're a first-time author who has just published your debut title, a self-published author looking to reach a wider audience, or an established writer launching your next release, we build a marketing strategy that fits your book, your genre, and your readership, not a generic template applied to every title regardless of what it is.",
      ],
      imageSrc: "/Rectangle 23834 (4).png",
      imageAlt: "Book marketing support",
      reverse: true,
    },
    whoWeServe: {
      badgeText: "The NexiFire Difference",
      title: "Why Australian Authors Choose NexiFire for Book Marketing",
      description:
        "",
      stats: [
        { value: "7+", label: "Years of experience", highlighted: true },
        { value: "130+", label: "Professional ghostwriters" },
        { value: "5K+", label: "Happy Clients" },
        { value: "2K+", label: "Books Published", highlighted: true },
      ],
      genres: [
        "Marketing That's Built Around Your Book",
        "Publishing and Marketing Under One Roof",
        "Transparent Deliverables, Not Vague Promises",
        "Australian Market Knowledge",
        "Long-Term Author Brand Building",
      ],
    },
    whatsIncluded: {
      badgeText: "What's Included",
      title: "Our Marketing Services",
      description: "",
      items: [
        { label: "Amazon KDP Advertising" },
        { label: "Social Media Book Marketing" },
        { label: "BookTok & Bookstagram Outreach" },
        { label: "Book PR & Media Pitching" },
        { label: "Author Website & SEO" },
        { label: "Email Marketing for Authors" },
        { label: "ARC Distribution & Early Reviews" },
        { label: "Book Launch Campaign Management" },
      ],
      imageSrc: "/Rectangle 23830 (1).png",
      imageAlt: "Book marketing deliverables",
      iconSrc: "/Mask group.svg",
    },
    faqs: {
      badgeText: "FAQs",
      title: "Frequently Asked Questions",
      items: [
        {
          question:
            "What book marketing services does NexiFire offer for self-published authors in Australia?",
          answer:
            "NexiFire offers a comprehensive range of book marketing services for self-published authors in Australia, including Amazon KDP advertising, social media campaigns on Instagram, TikTok, Facebook, and LinkedIn, BookTok and bookstagram influencer outreach, press releases and media pitching, ARC distribution for early reviews, author website design and SEO, email marketing, and complete global distribution through IngramSpark and print-on-demand via Amazon KDP Print.",
        },
        {
          question:
            "What is print-on-demand and how does it work for Australian authors?",
          answer:
            "Print-on-demand (POD) publishing means your book is printed only when a reader orders a physical copy, eliminating upfront printing costs and inventory risk entirely. NexiFire sets up your POD through Amazon KDP Print and IngramSpark, making your paperback and hardcover available to readers in Australia and worldwide through 39,000+ retail and library partners, with no minimum print run and no stock to manage.",
        },
        {
          question:
            "How does global book distribution work for self-published authors?",
          answer:
            "NexiFire's global distribution service submits your book to IngramSpark, the world's largest book distribution network with 39,000+ retail and library partners, as well as Amazon's global storefronts, Booktopia, Barnes & Noble, and all major digital platforms. This means your book is available for purchase in print and digital formats across 40+ countries from the day it launches.",
        },
        {
          question:
            "Do you offer book marketing services for children's books in Australia?",
          answer:
            "Yes. NexiFire provides specialist children's book marketing services in Australia including school and library outreach campaigns, distribution through IngramSpark to educational suppliers, Facebook and Pinterest advertising targeted at parents and educators, submission to Australian children's literary awards, school book fair coordination, and BookTok campaigns to the parent and teacher communities that influence children's book purchases.",
        },
        {
          question: "Can NexiFire guarantee my book will become a bestseller?",
          answer:
            "No ethical book marketing company can guarantee specific sales outcomes. What NexiFire guarantees is a clearly defined set of campaign deliverables, specific ad campaigns, media pitches, influencer contacts, email sequences, and distribution setups, executed to a professional standard by an experienced team. We focus on building real, sustainable readership rather than short-term vanity metrics.",
        },
        {
          question:
            "How is NexiFire different from other book marketing companies in Australia?",
          answer:
            "NexiFire combines book marketing with full publishing services, meaning our marketing team works from a position of intimate knowledge of your book, its production, its metadata, and its distribution. Unlike standalone marketing companies, we can align your marketing strategy with the full technical and distribution setup of your title from the ground up, rather than inheriting a publishing situation created by someone else.",
        },
      ],
      sidebarTitle: "Need A Marketing Plan For Your Book?",
      sidebarDescription:
        "Talk with the NexiFire team and get clear guidance on how to promote your title effectively.",
      sidebarButtonLabel: "Contact Us",
      sidebarButtonHref: "/contact",
    },
    testimonials: {
      badgeText: "Author Results",
      title: "Australian Authors Who Found Their Readers With NexiFire",
      description: "",
      buttonLabel: "View All Review",
      buttonHref: "#",
      testimonials: [
        {
          quote:
            "Real results from real Australian authors who trusted NexiFire to market their books and build their readership. I published my self-help book through NexiFire and was honest with them that I had no existing platform, no Instagram, no email list, nothing. They weren't fazed. They built my Amazon listing properly, set up my email marketing from scratch, and launched a targeted Instagram campaign. Within three months, I had 800 subscribers and consistent weekly sales. Extraordinary.",
          name: "Leila Allen",
          avatarSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "As a business consultant, I needed my book to generate leads, not just sales. NexiFire's marketing team understood the difference immediately. They focused on LinkedIn PR and podcast outreach, and within six weeks I was being interviewed on three business podcasts and had two speaking enquiries directly referencing the book. Exactly the outcome I needed.",
          name: "Greg Thomas",
          avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "My children's picture book needed to reach schools and libraries, not just Amazon. NexiFire handled the IngramSpark distribution setup, submitted my book to Booktopia, and coordinated school library outreach. My book is now in three public libraries and two school collections. For a self-published children's book in Australia, that is a real achievement.",
          name: "Mei Lenny",
          avatarSrc:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          featured: true,
          showAvatar: true,
        },
      ],
    },
    contact: {
      title: "Ready to Build Your Readership?",
      description:
        "Talk to a NexiFire marketing specialist today. We'll review your book, your genre, and your goals, and build a marketing plan that gives your title the visibility it deserves.",
      buttonLable: "Get My Free Marketing Consultation",
    },
  },
  "book-cover-design": {
    slug: "book-cover-design",
    hero: {
      eyebrow: "Professional Book Cover Design Services",
      title: "DESIGN A COVER\nREADERS WANT TO PICK UP",
      description:
        "NexiFire Publishing creates custom book covers that capture attention, reflect your genre, and give your book a polished, market-ready first impression.",
      buttonLabel: "Design Your Cover",
      buttonHref: "/contact",
    },
    introduction: {
      eyebrow: "Cover Design Services",
      title: "Cover Design That Balances Creativity And Commercial Appeal",
      description:
        "Your cover is often the first thing a reader notices, and in many cases it determines whether they click, browse further, or move on. We design covers that look professional, fit your category, and communicate your book's promise instantly.\n\nWhether you need a front cover for eBook release or a complete wrap for paperback and hardcover editions, our team creates concepts that combine strong visuals with smart market positioning.",
      imageSrc: "/image 67.png",
    },
    process: {
      badgeText: "How It Works",
      title: "Our Book Cover Design Process",
      description:
        "We blend creative direction with publishing experience so the final design is both visually strong and commercially aligned.",
      steps: [
        {
          number: "01",
          title: "Creative Brief",
          description:
            "We discuss your genre, target readers, design preferences, trim size, and where the book will be sold.",
        },
        {
          number: "02",
          title: "Concept Development",
          description:
            "Our designers create tailored concepts built around strong typography, imagery, and market-relevant visual cues.",
        },
        {
          number: "03",
          title: "Refinement & Revisions",
          description:
            "You review the direction, share feedback, and we refine the selected concept until the cover feels right.",
        },
        {
          number: "04",
          title: "Final Production Files",
          description:
            "We deliver final files prepared for your publishing format, whether that is eBook, paperback, hardcover, or all three.",
        },
      ] satisfies OurProcessStep[],
    },
    whyChoose: {
      badgeText: "Why Choose NexiFire",
      title: "Why Authors Choose Our Cover Design Team",
      description:
        "A strong cover is not just about style. It needs to communicate genre, quality, and credibility in seconds.",
      reasons: [
        {
          title: "Custom Concepts Built For Your Book",
          description:
            "We do not rely on generic templates. Every cover is shaped around your story, market, and publishing format.",
        },
        {
          title: "Genre-Aware Design Decisions",
          description:
            "Our team considers what readers expect in your category so the cover feels competitive while still standing out.",
        },
        {
          title: "Print And Digital Readiness",
          description:
            "We design with both thumbnail impact and full-size production quality in mind, so your cover works across platforms.",
        },
        {
          title: "Publishing Team Coordination",
          description:
            "Because design sits within a broader publishing workflow here, your cover integrates smoothly with formatting, distribution, and launch preparation.",
        },
      ] satisfies WhyChooseReason[],
    },
    publishBanner: {
      title: "Need A Cover That Looks Professional From The First Glance?",
      description:
        "Let us create a cover that fits your genre, grabs attention, and supports your release goals.",
      buttonLabel: "Start Cover Design",
      buttonHref: "/contact",
      backgroundImageSrc: "/Frame 2147225868.png",
      backgroundAlt: "Book cover design banner",
    },
    imageDesc: {
      badgeText: "Why Cover Design Matters",
      title: "Readers Judge A Book By Its Cover Every Day",
      paragraphs: [
        "In online stores, your cover competes at thumbnail size. In print, it needs to feel credible, intentional, and professionally produced. Both contexts matter.",
        "A well-designed cover helps readers instantly understand your genre, tone, and quality level. It also supports stronger marketing by giving every promotional asset a more polished foundation.",
        "At NexiFire Publishing, we create cover designs that do more than look good. We build visuals that help your book present itself with confidence wherever readers encounter it.",
      ],
      imageSrc: "/Rectangle 23834 (1).png",
      imageAlt: "Book cover design showcase",
      reverse: true,
    },
    whoWeServe: defaultWhoWeServeData,
    whatsIncluded: {
      badgeText: "What's Included",
      title: "What Our Cover Design Service Includes",
      description:
        "Our cover packages are built to support both presentation and production, from concept through final delivery.",
      items: [
        { label: "Custom cover concept development" },
        { label: "Professional typography and layout" },
        { label: "Front cover or full wrap design options" },
        { label: "eBook, paperback, and hardcover preparation" },
        { label: "Revision rounds for refinement" },
        { label: "Final export files for publishing platforms" },
      ],
      imageSrc: "/439230f4-7c82-4411-9ce5-487944ae406f 1.png",
      imageAlt: "Book cover design deliverables",
      iconSrc: "/Mask group.svg",
    },
    faqs: {
      badgeText: "FAQs",
      title: "Frequently Asked Questions",
      items: [
        {
          question:
            "Can you design a cover if my manuscript is not finished yet?",
          answer:
            "Yes. Many authors begin cover planning before the manuscript is fully finalised. As long as we understand the book's concept, audience, and format, we can begin the creative process.",
        },
        {
          question: "Do you create both print and eBook covers?",
          answer:
            "Yes. We can design for eBook-only release or produce full print-ready files for paperback and hardcover editions as well.",
        },
        {
          question: "Will my cover be custom or template-based?",
          answer:
            "Our approach is custom. We may use licensed assets where appropriate, but the final cover direction is tailored to your book rather than pulled from a generic one-size-fits-all template.",
        },
        {
          question: "How many revisions are included?",
          answer:
            "Revision scope depends on your package, but we always include structured feedback rounds so the selected concept can be refined properly before final delivery.",
        },
        {
          question: "Can you match my cover to genre expectations?",
          answer:
            "Absolutely. That is a core part of the process. We design covers that feel at home in your genre while still giving your book its own distinct identity.",
        },
        {
          question: "Do you prepare files for Amazon KDP and other printers?",
          answer:
            "Yes. We can export final files to suit the publishing route you are using, including retailer-ready digital covers and print specs for major self-publishing platforms.",
        },
      ],
      sidebarTitle: "Want A Better First Impression For Your Book?",
      sidebarDescription:
        "Speak with our team about custom cover design for your next release.",
      sidebarButtonLabel: "Contact Us",
      sidebarButtonHref: "/contact",
    },
    testimonials: {
      badgeText: "Author Stories",
      title: "What Authors Say About Our Cover Design",
      description:
        "Authors come to us when they want covers that feel polished, professional, and aligned with the market they are entering.",
      buttonLabel: "View All Review",
      buttonHref: "#",
      testimonials: [
        {
          quote:
            "I had a clear idea of what I did not want, but not much else. The NexiFire team translated that into a cover that felt exactly right for my genre and far more professional than anything I could have briefed on my own.",
          name: "Megan Holt",
          avatarSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "The biggest win for me was how well the cover worked online. Even at thumbnail size it looked sharp, readable, and properly positioned next to other books in my category.",
          name: "Nathan Cole",
          avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "My previous cover looked self-made in the worst way. NexiFire redesigned it from the ground up, and the difference was immediate. It finally looked like a real commercial book, not a draft project.",
          name: "Aisha Rahman",
          avatarSrc:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          featured: true,
          showAvatar: true,
        },
      ],
    },
    contact: {
      title: "Ready To Create A Cover That Sells The Right First Impression?",
      description:
        "Share your book concept, genre, and publishing format with us. We will help shape a cover direction that feels market-ready and unmistakably yours.",
      buttonLable: "Let's Talk",
    },
  },
};

export const publishingServiceSlugs = Object.keys(publishingServicePageData);
