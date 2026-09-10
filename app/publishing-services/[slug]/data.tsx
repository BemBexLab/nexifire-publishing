import type { ReactNode } from "react";

import type { FAQItem, FAQsProps } from "@/components/FAQs";
import type { OurProcessProps, OurProcessStep } from "@/components/OurProcess";
import type {
  TestimonialItem,
  TestimonialsProps,
} from "@/components/Testimonials";
import type { WhoWeServeProps } from "@/components/WhoWeServe";
import type { WhyChooseProps, WhyChooseReason } from "@/components/WhyChoose";
import type { FooterProps } from "@/components/Footer";

type PageHeroContent = {
  eyebrow: string;
  title: string;
  description: string | React.ReactNode;
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
  eyebrow: string;
  title: string;
  description: string | React.ReactNode;
  buttonLabel: string;
  buttonHref: string;
  backgroundImageSrc: string;
  backgroundAlt: string;
  overlayClassName?: string;
};

type ImageDescContent = {
  badgeText?: string;
  title: string;
  paragraphs: ReactNode[];
  listItems?: string[];
  footnote?: ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
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
  footer?: FooterProps;
};

export const publishingServicePageData: Record<
  string,
  PublishingServicePageData
> = {
  "book-marketing": {
    slug: "book-marketing",
    hero: {
      eyebrow: "NexiFire Publishing",
      title: "Book Marketing Services United States",
      description: "Your Book is Written. Now Let's Make Sure Readers Find It.",
      buttonLabel: "Get a Marketing Plan",
      buttonHref: "/contact",
    },
    introduction: {
      eyebrow: "Book Marketing Support",
      title: "Book Marketing",
      description:
        "Publishing your book is only half the journey. NexiFire Publishing delivers professional book marketing services for American authors, from Amazon advertising and social media campaigns to global print-on-demand distribution across 40+ countries. We get your book in front of the readers who are already looking for it.",
      imageSrc: "/image 69.webp",
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
          title: "United States Retail",
          description:
            "Amazon, Barnes & Noble, Bookshop.org, and independent American bookstores",
        },
        {
          title: "International Retail",
          description:
            "Amazon US, UK, EU and Canada, Barnes & Noble, Waterstones, and 39,000+ retailers",
        },
        {
          title: "Library Networks",
          description:
            "Library of Congress, public library systems, OverDrive, Bibliotheca, and international library distributors.",
        },
        {
          title: "Digital Platforms",
          description:
            "Amazon Kindle, Apple Books, Kobo, Google Play, Scribd, and 40+digital platforms",
        },
      ] satisfies WhyChooseReason[],
    },
    publishBanner: {
      eyebrow: "Book Marketing With NexiFire",
      title: "Book Marketing Results That Matter",
      description:
        "NexiFire never promises specific sales numbers; no ethical book marketing company can guarantee sales. What we do promise is a clearly defined set of deliverables, a transparent strategy, and a dedicated marketing consultant who treats your book as seriously as you do.",
      buttonLabel: "Start Marketing Today",
      buttonHref: "/contact",
      backgroundImageSrc: "/Frame 2147225869.webp",
      backgroundAlt: "Book marketing banner",
    },
    imageDesc: {
      badgeText: "Why Book Marketing Matters",
      title: "Writing the Book Was the Hard Part. Now It Needs to Be Found.",
      paragraphs: [
        "There are over ten thousand new books published in the United States every year. Without a deliberate, well-executed marketing strategy behind your title, even the best-written book can sit unseen on a digital shelf, discovered by almost nobody. The authors who build real readerships, the ones who earn consistent royalties month after month, aren't always the ones who wrote the most brilliant prose. They're the ones who invested in getting their book in front of the right readers.",
        "NexiFire Publishing provides full-service book marketing for American authors at every stage of their career. Whether you're a first-time author who has just published your debut title, a self-published author looking to reach a wider audience, or an established writer launching your next release, we build a marketing strategy that fits your book, your genre, and your readership, not a generic template applied to every title regardless of what it is.",
      ],
      imageSrc: "/Rectangle 23834 (4).webp",
      imageAlt: "Book marketing support",
      reverse: true,
    },
    whoWeServe: {
      badgeText: "The NexiFire Difference",
      title: "Why American Authors Choose NexiFire for Book Marketing",
      description: "",
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
        "United States Market Knowledge",
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
      imageSrc: "/Rectangle 23830 (1).webp",
      imageAlt: "Book marketing deliverables",
      iconSrc: "/Mask group.svg",
    },
    faqs: {
      badgeText: "FAQs",
      title: "Frequently Asked Questions",
      items: [
        {
          question:
            "What book marketing services does NexiFire offer for self-published authors in the United States?",
          answer:
            "NexiFire offers a comprehensive range of book marketing services for self-published authors in the United States, including Amazon KDP advertising, social media campaigns on Instagram, TikTok, Facebook, and LinkedIn, BookTok and bookstagram influencer outreach, press releases and media pitching, ARC distribution for early reviews, author website design and SEO, email marketing, and complete global distribution through IngramSpark and print-on-demand via Amazon KDP Print.",
        },
        {
          question:
            "What is print-on-demand and how does it work for American authors?",
          answer:
            "Print-on-demand (POD) publishing means your book is printed only when a reader orders a physical copy, eliminating upfront printing costs and inventory risk entirely. NexiFire sets up your POD through Amazon KDP Print and IngramSpark, making your paperback and hardcover available to readers in the United States and worldwide through 39,000+ retail and library partners, with no minimum print run and no stock to manage.",
        },
        {
          question:
            "How does global book distribution work for self-published authors?",
          answer:
            "NexiFire's global distribution service submits your book to IngramSpark, the world's largest book distribution network with 39,000+ retail and library partners, as well as Amazon's global storefronts, Booktopia, Barnes & Noble, and all major digital platforms. This means your book is available for purchase in print and digital formats across 40+ countries from the day it launches.",
        },
        {
          question:
            "Do you offer book marketing services for children's books in the United States?",
          answer:
            "Yes. NexiFire provides specialist children's book marketing services in the United States including school and library outreach campaigns, distribution through IngramSpark to educational suppliers, Facebook and Pinterest advertising targeted at parents and educators, submission to United States children's literary awards, school book fair coordination, and BookTok campaigns to the parent and teacher communities that influence children's book purchases.",
        },
        {
          question: "Can NexiFire guarantee my book will become a bestseller?",
          answer:
            "No ethical book marketing company can guarantee specific sales outcomes. What NexiFire guarantees is a clearly defined set of campaign deliverables, specific ad campaigns, media pitches, influencer contacts, email sequences, and distribution setups, executed to a professional standard by an experienced team. We focus on building real, sustainable readership rather than short-term vanity metrics.",
        },
        {
          question:
            "How is NexiFire different from other book marketing companies in the United States?",
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
      title: "American Authors Who Found Their Readers With NexiFire",
      description: "",
      buttonLabel: "View All Review",
      buttonHref: "#",
      testimonials: [
        {
          quote:
            "Real results from real American authors who trusted NexiFire to market their books and build their readership. I published my self-help book through NexiFire and was honest with them that I had no existing platform, no Instagram, no email list, nothing. They weren't fazed. They built my Amazon listing properly, set up my email marketing from scratch, and launched a targeted Instagram campaign. Within three months, I had 800 subscribers and consistent weekly sales. Extraordinary.",
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
            "My children's picture book needed to reach schools and libraries, not just Amazon. NexiFire handled the IngramSpark distribution setup and coordinated school library outreach. My book is now in three public libraries and two school collections. For a self-published children's book in the United States, that is a real achievement.",
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
      eyebrow: "NexiFire Publishing",
      title: "Book Cover Design Services in the USA",
      description:
        (<><span className="font-bold text-black text-2xl">A Cover That Stops the Scroll</span> <br /> NexiFire Publishing connects authors with professional book cover designers who actually understand genre, typography, and what makes a browsing reader stop and click. Whether you need custom book cover design for indie authors, a full hardcover jacket, or an ebook cover design service with unlimited revisions, every design we create is built to sell your book before a single page gets read.</>),
      buttonLabel: "Start the Design Process",
      buttonHref: "/contact",
    },
    introduction: {
      eyebrow: "Cover Design Services",
      title: "Every Format, Built to Platform Spec",
      description: (
        <>
          <p>
            Different formats need different things technically and creatively. We design every cover type authors actually need, built correctly for its destination platform from the first draft.
          </p>
          <ul className="mt-4 list-inside list-disc text-[#444444]">
            <li>Ebook Cover Design</li>
            <li>Paperback Cover Design</li>
            <li>Hardcover Book Jacket Design</li>
            <li>Amazon KDP Book Cover Design</li>
            <li>3D Ebook Cover Design</li>
            <li>Book Series Cover Design</li>
            <li>Back Cover & Blurb Design</li>
          </ul>
        </>
      ),
      imageSrc: "/0eee94f7-4643-4e46-8b95-cc9232497a79 1 (1).webp",
    },
    process: {
      badgeText: "",
      title: "How It Works",
      description:
        "",
      steps: [
        {
          number: "01",
          title: "Share Your Vision",
          description:
            "We review your genre, audience, and market.",
        },
        {
          number: "02",
          title: "Explore Concepts",
          description:
            "Choose from multiple original cover directions.",
        },
        {
          number: "03",
          title: "Refine the Design",
          description:
            "We revise your selected concept until it feels right.",
        },
        {
          number: "04",
          title: "Final Delivery",
          description:
            "Receive print-ready files for all required formats and platforms.",
        },
      ] satisfies OurProcessStep[],
    },
    whyChoose: {
      badgeText: "",
      title: "Why Authors Choose Us",
      description:
        "",
      reasons: [
        {
          title: "Designers who actually read before they design",
          description:
            "A cover should reflect what your book's actually about, not a generic mood board.",
        },
        {
          title: "Real genre benchmarking",
          description:
            `We look at what's currently working in your specific sub-genre, not just "romance" broadly.`,
        },
        {
          title: "No templates, ever",
          description:
            "Every concept starts from scratch; this isn't Canva-with-extra-steps or a premade cover with your title swapped in.",
        },
        {
          title: "Platform compliance, guaranteed",
          description:
            "Every cover is built to Amazon KDP, IngramSpark, and Apple Books specs, so files don't get rejected or bounced back.",
        },
        {
          title: "A real designer contact, not a queue",
          description:
            "You're not submitting a brief into a void and hoping — you have someone to actually talk to.",
        },
      ] satisfies WhyChooseReason[],
    },
    publishBanner: {
      eyebrow: "",
      title: "Ready to Design a Cover Your Book Deserves?",
      description:
        "Tell us about your book, your genre, and your style preferences — we'll come back with original concepts within days, not weeks.",
      buttonLabel: "Get My Cover Concepts",
      buttonHref: "/contact",
      backgroundImageSrc: "/Frame 2147225868.webp",
      backgroundAlt: "Book cover design banner",
    },
    imageDesc: {
      badgeText: "",
      title: "Why Your Cover Matters",
      paragraphs: [
        <h3 className="text-xl text-black text-semibold">Your Cover Is the First Page Every Reader Actually Reads</h3>,
        `Nobody actually follows "don't judge a book by its cover." On Amazon, Apple Books, or a bookstore shelf, you've got about two seconds to convince someone your book's worth a second look. Get it wrong, and even great writing goes unnoticed.`,
        "This is professional book cover design built on one idea: your cover should look like it belongs next to the bestsellers in your genre, not like a template with your title dropped on top. Our designers actually look at what's working in your category right now, understand the typography that signals tone and genre, and build something genuinely competitive.",
        "Need an ebook cover, a paperback wraparound, a hardcover jacket, or all three from one design? We deliver professional, print-ready, platform-compliant files, every time."
      ],
      listItems: [
        "Genre research and competitive analysis before design starts",
        "Multiple original concepts, not one take-it-or-leave-it draft",
        "Custom typography chosen for your genre and tone",
        "Print-ready files for Amazon KDP, IngramSpark, and Apple Books",
        "3D ebook cover design mockups for marketing and social",
        "Revisions included until you're genuinely happy with it",
      ],
      imageSrc: "/Rectangle 23834 (5).webp",
      imageAlt: "Book cover design showcase",
      reverse: true,
      footnote: <>Revision rounds vary by package. Every cover project includes at least two full rounds, with more available on request.</>,
      buttonLabel: "Start My Cover Design",
      buttonHref: "/",
    },
    whoWeServe: {
      badgeText: "Genre Expertise",
      title: "Genre-Specific Book Cover Design",
      description: "Every genre has its own color palette, typography rules, and imagery that signals quality to readers browsing that category, and readers notice fast when a cover doesn't fit. This is where a lot of DIY and template covers fall apart.",
      stats: [
        { value: "7+", label: "Years of experience", highlighted: true },
        { value: "130+", label: "Professional ghostwriters" },
        { value: "5K+", label: "Happy Clients" },
        { value: "2K+", label: "Books Published", highlighted: true },
      ],
      genres: [
        "Fiction & Thriller",
        "Dark Romance",
        "Business & Nonfiction",
        "Children's Books",
        "Memoir & Biography",
        "Self-Help & Wellness",
        "Academic & Educational"
      ],
    },
    whatsIncluded: {
      badgeText: "",
      title: "What Every Package Includes",
      description:
        "No matter the package, you get:",
      items: [
        { label: "An original, custom concept, never templated" },
        { label: "Genre and market research before drafting starts" },
        { label: "Platform-compliant, print-ready files" },
        { label: "Full commercial usage rights, no royalties, ever" },
        { label: "Source files available on request" },
        { label: "A dedicated designer for the whole project" },
        { label: "Fast revision turnaround" },
        { label: "Transparent, flat-rate pricing, no surprise add-ons" },
      ],
      imageSrc: "/Rectangle 23830 (2).webp",
      imageAlt: "Book cover design deliverables",
      iconSrc: "/Mask group.svg",
    },
    faqs: {
      badgeText: "FAQs",
      title: "Frequently Asked Questions",
      items: [
        {
          question:
            "How much does ebook cover design cost in the USA?",
          answer:
            "Ebook cover design cost typically ranges from around $249 for a simple ebook-only cover to $750 or more for a full hardcover jacket with custom illustration, spine calculation, and flap design. It depends on genre complexity, whether original illustration is involved, and how many formats you need. We keep pricing flat-rate and upfront so there's no guessing.",
        },
        {
          question: "Do I really need a professional ebook cover designer?",
          answer:
            "Yes. Your cover is the single biggest factor in whether a browsing reader clicks or scrolls past. Self-designed or template covers are usually easy to spot, and they can quietly undercut reader confidence no matter how good the writing is. A professional designer understands genre conventions and typography hierarchy that most authors just don't have visibility into.",
        },
        {
          question: "What's the difference between an ebook cover and a print cover?",
          answer:
            "An ebook cover is a single front-cover image built to work as a small thumbnail on Kindle, Apple Books, and similar platforms. A print cover includes the front, spine, and back combined into one wraparound design, with spine width calculated from your page count, trim size, and paper stock so it prints correctly.",
        },
        {
          question: "Will my cover work with Amazon KDP and IngramSpark?",
          answer:
            "Yes. Every cover is built to meet the exact specs Amazon KDP, IngramSpark, and Apple Books require: correct bleed, resolution, color profile, and file formatting, so it uploads and prints right the first time, no rejected files.",
        },
        {
          question: "What makes a great ebook cover in 2026?",
          answer:
            "It communicates genre instantly, uses bold typography that's still legible at thumbnail size, skips the overused stock-photo clichés, and looks current within its category without chasing a trend that'll date fast. Just as important: correct color profiles, sharp resolution, and platform-compliant formatting so it looks right everywhere it's displayed.",
        },
        {
          question: "How many revisions are included?",
          answer:
            "The entry-level ebook cover package includes two revision rounds. Our Print & Digital Complete and Hardcover Premium packages include unlimited revisions, so you're not stuck settling for the first or second draft.",
        },
        {
          question: "Do you design covers for a book series?",
          answer:
            "Yes, book series cover design is one of the trickier jobs in this space, since each cover needs to stand alone and still read as part of a set. We build a shared visual system (typography, layout, color logic) up front so book two and book three don't feel like an afterthought.",
        },
        {
          question: "Can I bundle cover design with formatting?",
          answer:
            "Yes. Our book cover design and formatting package covers the cover plus interior layout for print and ebook, so you're not coordinating two separate vendors and hoping the trim size matches.",
        },
      ],
      sidebarTitle: "Want A Better First Impression For Your Book?",
      sidebarDescription:
        "Speak with our team about custom cover design for your next release.",
      sidebarButtonLabel: "Contact Us",
      sidebarButtonHref: "/contact",
    },
    testimonials: {
      badgeText: "Author Results",
      title: "What Authors Say About Their NexiFire Book Cover",
      description:
        "Real feedback from American authors who trusted NexiFire to design the cover of their book.",
      buttonLabel: "View All Review",
      buttonHref: "#",
      testimonials: [
        {
          quote:
            "I'd tried a cheap ebook cover design service before this, and it looked exactly like what it was: a template with my name on it. My designer actually read my synopsis, and the concepts genuinely captured the tone of my thriller. Sales improved noticeably after the rebrand.",
          name: "Hannah Paul",
          avatarSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "I needed a hardcover jacket that could sit next to traditionally published business books on a shelf, and that's what I got. The flap copy layout and foil finish suggestion made the final book look genuinely premium." ,
          name: "Oliver Daniel",
          avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "My children's picture book cover needed to appeal to kids and reassure parents at the same time. They nailed that balance, bright and fun, but still polished. The 3D mockup has been great for Instagram too.",
          name: "Grace Blackford",
          avatarSrc:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          featured: true,
          showAvatar: true,
        },
      ],
    },
    contact: {
      title: "Ready to Publish Your Book?",
      description:
        "Tell us where you are and where you want to go. As a self-publishing company built for authors, NexiFire Publishing will design the right plan, bring in the right specialists, and help you move forward with confidence, whether this is your first book or your fifth.",
      buttonLable: "Let's Talk",
    },
    footer: {
      title: "Book Marketing Experts",
      description: "Grow your readership with a tailored marketing strategy.",
      ctaLabel: "Get a Marketing Plan",
      ctaHref: "/contact",
    },
  },
};

export const publishingServiceSlugs = Object.keys(publishingServicePageData);
