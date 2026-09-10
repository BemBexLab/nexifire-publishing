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
      title: "Book Marketing Services for Authors in the USA",
      description: <div className="">
        <h3 className="text-black font-semibold text-xl">
          Your Book Is Written. Now Let's Make Sure Readers Find It.
        </h3>
        <p>Publishing your book is only half the job. NexiFire Publishing delivers real book marketing services for authors in the USA, Amazon advertising, social media campaigns, book publicity, and global print-on-demand distribution across 40+ countries. We are not here to just list your book somewhere. We are here to get it in front of readers who are already looking for something like it.</p>
      </div>,
      buttonLabel: "Get a Free Marketing Consultation",
      buttonHref: "/contact",
    },
    introduction: {
      eyebrow: "",
      title: "Why Authors Choose Us for Book Marketing",
      description:
        `Marketing built around your actual book, not a script we reuse. Publishing and marketing under one roof, so your marketing team already knows your metadata, your production, and your distribution setup instead of inheriting a mess from somewhere else. Transparent deliverables instead of vague promises about "visibility." And we're thinking about your author brand long-term, not just this one launch.
        
        Among book marketers in the USA, that combination, full publishing knowledge plus real marketing execution, is honestly not that common. Most marketing companies are working blind, without ever having touched your file, your ISBN, or your metadata.`,
      imageSrc: "/image 69.webp",
    },
    process: {
      badgeText: "",
      title: "How It Works",
      description:
        "NexiFire's book marketing process is built around your book, genre, and goals, not a standard package applied to every author regardless of what they've written",
      steps: [
        {
          number: "01",
          title: "Strategy",
          description:
            "A customized plan built around your book and audience.",
        },
        {
          number: "02",
          title: "Optimization",
          description:
            "Amazon listing, keywords, metadata, and categories refined.",
        },
        {
          number: "03",
          title: "Launch",
          description: "Focused marketing to reach the right readers.",
        },
        {
          number: "04",
          title: "Growth",
          description:
            "Global distribution, tracking, and ongoing optimization.",
        },
      ] satisfies OurProcessStep[],
    },
    whyChoose: {
      badgeText: "Global Distribution",
      title: "Get Your Book Into Readers' Hands, Worldwide",
      description:
        "",
      reasons: [
        {
          title: "US & International Retail",
          description:
            "Amazon, Barnes & Noble, Books-A-Million, and 39,000+ retail partners worldwide",
        },
        {
          title: "Library Networks",
          description:
            "Public library systems, OverDrive, Bibliotheca, and international library distributors",
        },
        {
          title: "Library Networks",
          description:
            "Library of Congress, public library systems, OverDrive, Bibliotheca, and international library distributors.",
        },
        {
          title: "Digital Platforms",
          description:
            "Amazon Kindle, Apple Books, Kobo, Google Play, Scribd, and 40+ digital platforms",
        },
      ] satisfies WhyChooseReason[],
    },
    publishBanner: {
      eyebrow: "",
      title: "Ready to Build Your Readership?",
      description:
        "Talk to a marketing specialist today. We'll look at your book, your genre, and your goals, and build a plan that actually gives it visibility, not a boilerplate package.",
      buttonLabel: "Get My Free Marketing Consultation",
      buttonHref: "/contact",
      backgroundImageSrc: "/Frame 2147225869.webp",
      backgroundAlt: "Book marketing banner",
    },
    imageDesc: {
      badgeText: "Why Book Marketing Matters",
      title: "Writing the Book Was the Hard Part. Getting It Found Is the Next One.",
      paragraphs: [
        "Tens of thousands of new books get published every year. Without a real strategy behind it, even a genuinely great book can sit unseen, not because it's bad, but because nobody knew it existed. The authors earning consistent royalties month after month aren't always the ones who wrote the best prose. They're usually the ones who treated getting readers as seriously as they treated writing.",
        "As a book marketing expert working across every genre, I build a strategy around your book, not a template we run for everyone. First-time author with a debut title? Self-published author trying to reach past your existing circle? Established writer with a backlist and a new release coming? The plan looks different each time, because it should.",
        "We won't promise you'll hit a bestseller list; no honest book marketing service can promise that. What we do promise is a clear set of deliverables, a transparent strategy, and a marketing consultant who actually reads your book before pitching it to anyone.",
      ],
      imageSrc: "/Rectangle 23834 (4).webp",
      imageAlt: "Start Marketing Today",
      reverse: true,
    },
    whoWeServe: {
      badgeText: "Print-on-Demand",
      title: "Sell Physical Books Without Printing Costs or Inventory Risk",
      description: "Nobody needs to order 500 copies and stack boxes in a garage anymore. Every time a reader orders your book, it's printed and shipped directly to them; you never touch a copy, and there's no upfront cost sitting on a shelf.",
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
      buttonLabel: "Start Marketing Today",
      buttonHref: "/contact",
    },
    whatsIncluded: {
      badgeText: "What's Included",
      title: "Our Marketing Services",
      description: "",
      items: [
        { label: "Amazon KDP Advertising" },
        { label: "Social Media Book Marketing" },
        { label: "BookTok & Bookstagram Outreach" },
        { label: "Book PR & Media Pitching — real book publicity, not just a press release nobody opens" },
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
            "What book marketing services does NexiFire offer for self-published authors?",
          answer:
            "Amazon KDP advertising, social campaigns across Instagram, TikTok, Facebook, and LinkedIn, BookTok and Bookstagram outreach, press releases and media pitching, ARC distribution for early reviews, author website design and SEO, email marketing, and full global distribution with print-on-demand.",
        },
        {
          question:
            "What does book promotion cost for self-published authors in 2025–2026?",
          answer:
            "Pricing depends on scope; a single-channel push (say, Amazon ads only) costs less than a full launch campaign with PR, influencer outreach, and email marketing running together. We quote flat, upfront packages once we know your book and goals, rather than a one-size number that doesn't reflect what you actually need. No hidden fees, no surprise invoices mid-campaign.",
        },
        {
          question:
            "What is print-on-demand and how does it work?",
          answer:
            "Your book gets printed only when a reader orders a physical copy, no upfront printing costs, no inventory risk. We set this up so your paperback and hardcover are available through tens of thousands of retail and library partners worldwide, with no minimum print run.",
        },
        {
          question:
            "How does global book distribution actually work?",
          answer:
            "Your book gets submitted into a distribution network reaching 39,000+ retail and library partners, plus Amazon's storefronts and every major digital platform, available in print and digital across 40+ countries from launch day.",
        },
        {
          question: "Do you offer marketing for self-help and nonfiction books specifically?",
          answer:
            "Yes. Self-help and nonfiction marketing looks different from fiction; it's usually more about building author authority than chasing reviews, so we lean into podcast outreach, LinkedIn and media pitching, and email marketing that builds a list around your expertise, not just your book.",
        },
        {
          question:
            "Can you guarantee my book becomes a bestseller?",
          answer:
            "No honest book marketing company can guarantee that, and anyone who does is overselling you. What we guarantee is real deliverables, specific ad campaigns, media pitches, influencer contacts, email sequences, and distribution setups, executed properly, aimed at building sustainable readership rather than a one-week vanity spike.",
        },
        {
          question:
            "What makes NexiFire different from other book marketing services?",
          answer:
            "We combine marketing with full publishing services, so the marketing team already knows your book's production, metadata, and distribution setup. A lot of standalone book marketing services work with a file someone else built and hope the metadata's right. We're not guessing.",
        },
      ],
      sidebarTitle: "Need A Marketing Plan For Your Book?",
      sidebarDescription:
        "Talk with the NexiFire team and get clear guidance on how to promote your title effectively.",
      sidebarButtonLabel: "Contact Us",
      sidebarButtonHref: "/contact",
    },
    testimonials: {
      badgeText: "",
      title: "What Authors Say",
      description: "",
      buttonLabel: "View All Review",
      buttonHref: "#",
      testimonials: [
        {
          quote:
            "I told NexiFire straight up, no platform, no Instagram, no email list, nothing. They weren't fazed. Built my Amazon listing properly, set up email marketing from scratch, ran a targeted Instagram campaign. Three months in, I had 800 subscribers and consistent weekly sales.",
          name: "Leila Allen",
          avatarSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "As a business consultant, I needed my book generating leads, not just sales. They got that immediately, focused on LinkedIn PR and podcast outreach. Six weeks in, I'd been interviewed on three business podcasts with two speaking inquiries that came directly from the book." ,
          name: "Greg Thomas",
          avatarSrc:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
          featured: false,
          showAvatar: true,
        },
        {
          quote:
            "My children's picture book needed to reach schools and libraries, not just Amazon. They handled the distribution setup, got it submitted to the right retail channels, and coordinated school outreach. It's now sitting in three public libraries and two school collections — for a self-published kids' book, that's a real win.",
          name: "Mei Lenny",
          avatarSrc:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          featured: true,
          showAvatar: true,
        },
      ],
    },
    contact: {
      
      title: "READY TO PUBLISH YOUR BOOK?",
      description:
        "Tell us where you are and where you want to go. As a self-publishing company built for authors, NexiFire Publishing will design the right plan, bring in the right specialists, and help you move forward with confidence, whether this is your first book or your fifth.",
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
      title: "NEXIFIRE PUBLISHING",
      description: "NexiFire Publishing is a trusted self-publishing company for authors ready to get their book into the world. We help authors publish ebooks, print books, and audiobooks with full-service support, ghostwriting, editing, formatting, cover design, and global distribution, all under one roof. As one of the best self-publishing companies for first-time authors, we handle the parts that usually trip people up, so you can focus on the book itself.",
    },
  },
};

export const publishingServiceSlugs = Object.keys(publishingServicePageData);
