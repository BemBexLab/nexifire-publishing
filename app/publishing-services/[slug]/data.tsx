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
  paragraphs: string[];
  listItems?: string[];
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
      eyebrow: "NexiFire Publishing",
      title: "Book Marketing Services Australia",
      description: "Your Book is Written. Now Let's Make Sure Readers Find It.",
      buttonLabel: "Get a Marketing Plan",
      buttonHref: "/contact",
    },
    introduction: {
      eyebrow: "Book Marketing Support",
      title: "Book Marketing",
      description:
        "Publishing your book is only half the journey. NexiFire Publishing delivers professional book marketing services for Australian authors, from Amazon advertising and social media campaigns to global print-on-demand distribution across 40+ countries. We get your book in front of the readers who are already looking for it.",
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
      backgroundImageSrc: "/Frame 2147225869.webp",
      backgroundAlt: "Book marketing banner",
    },
    imageDesc: {
      badgeText: "Why Book Marketing Matters",
      title: "Writing the Book Was the Hard Part. Now It Needs to Be Found.",
      paragraphs: [
        "There are over ten thousand new books published in Australia every year. Without a deliberate, well-executed marketing strategy behind your title, even the best-written book can sit unseen on a digital shelf, discovered by almost nobody. The authors who build real readerships, the ones who earn consistent royalties month after month, aren't always the ones who wrote the most brilliant prose. They're the ones who invested in getting their book in front of the right readers.",
        "NexiFire Publishing provides full-service book marketing for Australian authors at every stage of their career. Whether you're a first-time author who has just published your debut title, a self-published author looking to reach a wider audience, or an established writer launching your next release, we build a marketing strategy that fits your book, your genre, and your readership, not a generic template applied to every title regardless of what it is.",
      ],
      imageSrc: "/Rectangle 23834 (4).webp",
      imageAlt: "Book marketing support",
      reverse: true,
    },
    whoWeServe: {
      badgeText: "The NexiFire Difference",
      title: "Why Australian Authors Choose NexiFire for Book Marketing",
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
      eyebrow: "NexiFire Publishing",
      title: "Book Cover Design Services Australia",
      description:
        (<><span className="font-bold text-black">A Great Book Deserves a Cover That Stops the Scroll</span> NexiFire Publishing connects Australian authors with professional book cover designers who understand genre, typography, and what actually makes readers click "buy." From custom eBook covers to full hardcover jackets, every design we create is built to sell your book before a single page is read.</>),
      buttonLabel: "Start the Design Process",
      buttonHref: "/contact",
    },
    introduction: {
      eyebrow: "Cover Design Services",
      title: "Every Cover Format, Designed to Platform Specification",
      description: (
        <>
          <p>
            Different formats have different technical and creative
            requirements. NexiFire designs every cover type Australian authors
            need, built correctly for the platform it's destined for from the
            very first draft.
          </p>
          <ul className="mt-4 list-inside list-disc text-[#444444]">
            <li>eBook Cover Design</li>
            <li>Paperback Cover Design</li>
            <li>Hardcover Book Jacket Design</li>
            <li>KDP Book Cover Design</li>
            <li>3D Book Cover Mockups</li>
            <li>Back Cover & Blurb Design</li>
          </ul>
        </>
      ),
      imageSrc: "/0eee94f7-4643-4e46-8b95-cc9232497a79 1 (1).webp",
    },
    process: {
      badgeText: "How It Works",
      title: "Our Book Cover Design Process, Step by Step",
      description:
        "",
      steps: [
        {
          number: "01",
          title: "Design Brief & Research",
          description:
            "Share your vision while we analyse your genre and market to create a strategically positioned cover.",
        },
        {
          number: "02",
          title: "Concept Development",
          description:
            "Receive multiple original cover concepts and choose the design direction that best fits your book.",
        },
        {
          number: "03",
          title: "Design Refinement",
          description:
            "We perfect your selected concept through collaborative revisions until every detail is right.",
        },
        {
          number: "04",
          title: "Final Delivery",
          description:
            "Get print-ready files for all required formats, fully optimised for major publishing platforms.",
        },
      ] satisfies OurProcessStep[],
    },
    whyChoose: {
      badgeText: "The NexiFire Difference",
      title: "Why Australian Authors Choose NexiFire for Their Book Cover",
      description:
        "",
      reasons: [
        {
          title: "Designers Who Read Before They Design",
          description:
            "Create a cover that reflects what your book is actually about.",
        },
        {
          title: "Genre Benchmarking",
          description:
            "We research what's currently working in your specific genre and sub-genre.",
        },
        {
          title: "No Generic Templates",
          description:
            "Every NexiFire cover starts as an original concept.",
        },
        {
          title: "Platform Compliance, Guaranteed",
          description:
            "We build every cover against the exact technical specifications of Amazon KDP, IngramSpark, and Apple Books.",
        },
        {
          title: "Local Designers Who Understand Australian Readers",
          description:
            "Our designers understand Australian visual sensibilities and local market expectations.",
        },
      ] satisfies WhyChooseReason[],
    },
    publishBanner: {
      title: "REVISION ROUNDS INCLUDED",
      description:
        "Revision rounds included vary by package. Every NexiFire cover design project includes at least two full revision rounds, with additional rounds available on request.",
      buttonLabel: "Start My Cover Design",
      buttonHref: "/contact",
      backgroundImageSrc: "/Frame 2147225868.webp",
      backgroundAlt: "Book cover design banner",
    },
    imageDesc: {
      badgeText: "",
      title: "Your Cover Is the First Page Every Reader Actually Reads",
      paragraphs: [
        "They say not to judge a book by its cover, but every reader does it anyway, every single time. On Amazon, Apple Books, and bookstore shelves, your cover has roughly two seconds to convince a browsing reader that your book is worth a second look. Get it wrong, and even brilliant writing can go completely unnoticed.",
        "NexiFire Publishing's custom book cover design service in Australia is built around one simple principle: your cover should look like it belongs on the same shelf as the bestsellers in your genre. Our designers study what's currently working in your category, understand the typography conventions that signal genre and tone, and create covers that are genuinely competitive, not generic templates with your title dropped on top.",
        "Whether you need an eBook cover, a paperback wraparound, a full hardcover jacket, or all three formats from a single design, we deliver professional, print-ready, platform-compliant files every time.",
      ],
      listItems: [
        "Genre research and competitive cover analysis before design begins",
        "Multiple original concepts, not a single take-it-or-leave-it design",
        "Custom typography selected for your genre and tone",
        "Print-ready files for Amazon KDP, IngramSpark, and Apple Books",
        "3D mockups for marketing and social media use",
        "Revision rounds included until you're genuinely happy with the result",
      ],
      imageSrc: "/Rectangle 23834 (5).webp",
      imageAlt: "Book cover design showcase",
      reverse: true,
    },
    whoWeServe: {
      badgeText: "Genre Expertise",
      title: "Book Cover Design Across Every Genre",
      description: "Each genre has its own visual language, colour palettes, typography conventions, and imagery that signal quality to readers browsing that category. NexiFire's designers know the difference.",
      stats: [
        { value: "7+", label: "Years of experience", highlighted: true },
        { value: "130+", label: "Professional ghostwriters" },
        { value: "5K+", label: "Happy Clients" },
        { value: "2K+", label: "Books Published", highlighted: true },
      ],
      genres: [
        "Fiction & Thriller",
        "Business & Non-Fiction",
        "Children's Books",
        "Memoir & Biography",
        "Self-Help & Wellness",
        "Academic & Educational"
      ],
    },
    whatsIncluded: {
      badgeText: "What Every Cover Package Includes",
      title: "Regardless of which package you choose, NexiFire always delivers:",
      description:
        "",
      items: [
        { label: "Original, custom concept design, never templated" },
        { label: "Genre and market research before drafting" },
        { label: "Platform-compliant, print-ready files" },
        { label: "Full commercial usage rights, no royalties" },
        { label: "Source files available on request" },
        { label: "Dedicated designer contact throughout" },
        { label: "Fast revision turnaround" },
        { label: "Transparent flat-rate pricing" },
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
            "How much does book cover design cost in Australia?",
          answer:
            "Book cover design prices in Australia typically range from around $249 for a simple eBook-only cover to $750 or more for a full hardcover jacket with custom illustration, spine calculation, and flap design. The price depends on genre complexity, whether original illustration or photography is required, and how many formats you need. NexiFire offers transparent, flat-rate packages so you know the full cost before work begins.",
        },
        {
          question: "Do I really need a professional book cover designer?",
          answer:
            "Yes. Your cover is the single biggest factor influencing whether a browsing reader clicks on your book or scrolls past it. Self-designed or template-based covers are usually easy to spot and can quietly undermine reader confidence, no matter how well-written the book is. A professional book cover designer in Australia understands genre conventions, typography hierarchy, and current market trends that most authors simply don't have visibility into.",
        },
        {
          question: "What's the difference between an eBook cover and a print cover?",
          answer:
            "An eBook cover is a single front-cover image designed to work as a small thumbnail on digital platforms like Kindle and Apple Books. A print cover includes the front cover, spine, and back cover combined into a single wraparound design, with the spine width precisely calculated based on your book's page count, trim size, and paper stock to ensure accurate printing.",
        },
        {
          question: "Will my cover work correctly with Amazon KDP and IngramSpark?",
          answer:
            "Yes. NexiFire designs every cover to meet the exact technical specifications required by Amazon KDP, IngramSpark, and Apple Books, including correct bleed, resolution, colour profile, and file formatting, so your cover uploads and prints correctly the first time, with no rejected files or delays during the publishing process.",
        },
        {
          question: "What makes a great book cover in 2026?",
          answer:
            "A great book cover in 2026 communicates genre instantly, uses bold and legible typography that reads clearly even at thumbnail size, avoids overused stock imagery cliches, and reflects current design trends within its specific category without looking dated. Equally important is technical execution, correct colour profiles, sharp resolution, and platform-compliant formatting that ensures the cover looks as intended across every device and print format.",
        },
        {
          question: "How many revisions are included in book cover design packages?",
          answer:
            "NexiFire's entry-level eBook cover package includes two revision rounds. Our Print & Digital Complete and Hardcover Premium packages include unlimited revision rounds, ensuring you're genuinely satisfied with your final design rather than settling for the first or second draft.",
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
        "Real feedback from Australian authors who trusted NexiFire to design the cover of their book.",
      buttonLabel: "View All Review",
      buttonHref: "#",
      testimonials: [
        {
          quote:
            "I had tried a budget cover design service before NexiFire, and the result looked exactly like what it was, a cheap template. The difference in quality was night and day. My designer actually read my manuscript synopsis and the concepts she sent back genuinely captured the tone of my thriller. My sales improved noticeably after the rebrand.",
          name: "Hannah Paul",
          avatarSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "I needed a hardcover jacket design that could genuinely sit next to traditionally published business books on a shelf, and that's exactly what I got. The flap copy layout and the foil finish recommendation made the final printed book look properly premium. Worth every dollar.",
          name: "Oliver Daniel",
          avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "My children's picture book cover needed to appeal to kids and convince parents at the same time. NexiFire nailed the balance: bright, fun illustration style but still polished enough to look professionally published. The 3D mockup they included has been brilliant for my Instagram promotion too.",
          name: "Grace Blackford",
          avatarSrc:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          featured: true,
          showAvatar: true,
        },
      ],
    },
    contact: {
      title: "Ready to Design a Cover Your Book Deserves?",
      description:
        "Tell us about your book, your genre, and your style preferences, and we'll come back with original cover concepts within days, not weeks.",
      buttonLable: "Let's Talk",
    },
  },
};

export const publishingServiceSlugs = Object.keys(publishingServicePageData);
