import BooksSection from "@/components/BookSection";
import HomeHero from "@/components/HomeHero";
import OurBookGenre from "@/components/OurBookGenre";
import HomeServices from "@/components/HomeServices";
import WhoWeAre from "@/components/WhoWeAre";
import OurProcess from "@/components/OurProcess";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import PublishYourBook from "@/components/PublishYourBook";
import LatestBlogs from "@/components/LatestBlogs";
import GetInTouchContact from "@/components/GetInTouchContact";

export default function Home() {
  return (
    <section className="bg-white overflow-hidden">
      <HomeHero />
      <BooksSection />
      <HomeServices />
      <OurBookGenre
        badgeText=""
        title="Every Genre. Every Format. Every Kind of First-Time Author."
        genres={[
          {
            title: "Fiction & Novels",
            icon: "/Rectangle 23818.svg",
          },
          {
            title: "Christian & Faith-Based Books",
            icon: "/Rectangle 23818 (1).svg",
          },
          {
            title: "Memoir & Biography",
            icon: "/Rectangle 23818 (2).svg",
          },
          {
            title: "Self-Help & Personal Development",
            icon: "/Rectangle 23818 (3).svg",
          },
          {
            title: "Business & Leadership",
            icon: "/Rectangle 23818 (4).svg",
          },
          {
            title: "Children's Books & Illustrated Titles",
            icon: "/Rectangle 23818 (5).svg",
          },
          {
            title: "Academic & Educational Titles",
            icon: "/Rectangle 23818 (1).svg",
          },
        ]}
      />
      <WhoWeAre />
      <div className="bg-[#fffaf6] py-14 sm:py-16 md:py-20 lg:py-24">
        <OurProcess
          badgeText="How It Works"
          title="How Our Self-Publishing Process Works"
          description=""
          steps={[
            {
              number: "01",
              title: "Free Manuscript Consultation",
              description:
                "Send us your manuscript and goals, we'll assess it and map out exactly how to self-publish it, start to finish.",
            },
            {
              number: "02",
              title: "Editing, Proofreading & Formatting",
              description:
                "Genre-matched editors prepare a clean, KDP, and IngramSpark-ready manuscript for print and ebook.",
            },
            {
              number: "03",
              title: "Illustration & Cover Design",
              description:
                "Custom cover art and interior illustration built to perform in Amazon search, not just look good printed large.",
            },
            {
              number: "04",
              title: "Book Production, Print, Ebook & Audiobook",
              description:
                "Paperback, hardcover, ebook, and professionally narrated audiobook, produced in parallel.",
            },
            {
              number: "05",
              title: "Translation for Global Reach",
              description:
                "Professional translation into additional languages, without losing your voice or intent.",
            },
            {
              number: "06",
              title: "ISBN, Copyright & Legal Setup",
              description:
                "We register your ISBN and file your U.S. copyright, protecting your book from day one.",
            },
            {
              number: "07",
              title: "Digital Distribution & Launch",
              description:
                "Simultaneous launch on Amazon, Audible, Apple Books, Barnes & Noble, IngramSpark, Spotify, and more.",
            },
            {
              number: "08",
              title: "Book Signings, Placement & Exhibitions",
              description:
                "We coordinate signings, bookstore placement, and fair/exhibition spots for real-world visibility.",
            },
            {
              number: "09",
              title: "Marketing & Author Platform",
              description:
                "Author website, promotional video, and social marketing built to actually sell books, not just impressions.",
            },
          ]}
        />
      </div>
      <Portfolio />
      <div className="h-10"></div>
      <Testimonials
        badgeText="Author Stories"
        title="What Authors Say"
        description=""
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I'd tried to format and publish my first book on my own and hit a wall almost immediately with Amazon's requirements. NexiFire took the whole thing off my plate, editing, cover design, formatting, and had my book live on Amazon in under two months. It looks like a real published book, because it is one.",
            name: "Rachel Monroe",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I looked into a dozen self publishing companies before choosing NexiFire, mostly because of the flat-rate pricing with no royalty share. My business book needed a specific tone and they matched me with an editor who actually understood the industry. They even helped me line up a signing event at a local bookstore, which I had no idea was possible as a self-published author.",
            name: "Marcus Delaney",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a faith-based author, finding a christian self publishing company that respected my message mattered a lot to me. NexiFire's editorial team got it right on the first pass, and the cover design brought my book to life in a way I hadn't pictured. They even produced an audiobook version and got my book into a regional book fair.",
            name: "Angela Ruiz",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <div className="h-10"></div>
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question: "What is the best self publishing company for first-time authors?",
            answer:
              "The best self publishing company for a first-time author is one that manages the entire process, editing, formatting, illustration, cover design, ISBN/copyright, distribution, and marketing, under one team, with transparent flat-rate pricing and no royalty share. NexiFire was built specifically around that model for authors publishing their first book.",
          },
          {
            question:
              "How do I self publish a book with a company instead of doing it alone?",
            answer:
              "You send your manuscript to a full-service self publishing company, which then edits, formats, designs, registers, and distributes the book on your behalf. NexiFire manages every step from manuscript intake to Amazon, Audible, Barnes & Noble, and IngramSpark distribution, so you're not learning platform requirements and formatting specs on your own.",
          },
          {
            question:
              "What's the difference between self-publishing and going with a traditional publishing company?",
            answer:
              "Traditional publishers take a percentage of royalties and control creative decisions, in exchange for their name and distribution network. Self-publishing companies like NexiFire charge a flat production fee, leave 100% of royalties and rights with the author, and give the author full creative control — while still providing professional editing, illustration, design, and distribution.",
          },
          {
            question: "Is there a self publishing company near me, or do I have to work in person?",
            answer:
              "NexiFire works with authors across the entire USA remotely, including dedicated support for authors in Miami, Florida, and other major markets. All consultations, edits, design reviews, and audiobook recording sessions happen over video call and email, so location isn't a barrier to full-service treatment.",
          },
          {
            question:
              "Do you offer an amazon self publishing package specifically?",
            answer:
              "Yes. We prepare your manuscript, cover, and metadata specifically to Amazon KDP's requirements, and build out Amazon A+ Content to improve how your book displays and converts in Amazon search and product pages.",
          },
          {
            question:
              "What is included in a self publishing package with editing and cover design? ",
            answer:
              "A typical NexiFire package includes manuscript editing and proofreading, custom cover design and illustration, interior formatting for print and ebook, ISBN assignment, copyright registration, and distribution setup. Audiobook production, translation, marketing, signing events, and author websites are available as add-ons.",
          },
          {
            question:
              "Do self-publishing companies offer book marketing and publicity services too?",
            answer:
              "Reputable full-service self-publishing companies do. NexiFire includes book marketing services for self-published authors, social media management, promotional reels and video, Amazon optimization, and event support, because publishing a book without a marketing plan behind it rarely leads to meaningful sales.",
          },
          {
            question:
              "How much does it cost to self-publish a book with a company in the USA?",
            answer:
              "Cost depends on manuscript length, the level of editing required, and which services (illustration, audiobook, translation, hardcover, signing events, author website) you add. NexiFire uses flat-rate, transparent pricing with no hidden fees and no royalty commission, reach out for a free quote based on your manuscript.",
          },
          {
            question:
              "Do you publish self-help and Christian books specifically?",
            answer:
              "Yes. We work with self help book publishing companies' typical clientele directly, matching self-help and Christian authors with editors experienced in those genres, so tone, structure, and credibility come through correctly in the final book.",
          },
          {
            question:
              "Can you turn my book into an audiobook?",
            answer:
              "Yes. NexiFire offers full audiobook production, including narrator matching or author-narrated coaching, professional recording, editing, and mastering to Audible (ACX) and platform specifications, with distribution to Audible, Apple Books, and Spotify alongside your print and ebook editions.",
          },
          {
            question:
              "Do you translate books into other languages?",
            answer:
              "Yes. We offer professional translation services so your book can be published in additional languages, expanding your audience beyond English-language markets while preserving your voice and message.",
          },
          {
            question:
              "Can you help me organize a book signing event?",
            answer:
              "Yes. NexiFire coordinates book signing events for our authors, helping identify venues, manage logistics, and promote the event to local readers, so your launch isn't limited to an online listing.",
          },
          {
            question:
              "Do you help get books placed in physical bookstores?",
            answer:
              "Yes. We pursue retail and bookstore book placement opportunities on behalf of our authors, working to get your title in front of readers browsing shelves, not just scrolling online.",
          },
          {
            question:
              "Can my book be included in book fairs or exhibitions?",
            answer:
              "Yes. NexiFire identifies and coordinates placement at relevant book fairs and exhibitions, giving your title exposure to industry contacts, booksellers, and readers who attend these events specifically to discover new books.",
          },
          {
            question:
              "Will I actually own my book and its rights?",
            answer:
              "Yes, completely. NexiFire never takes ownership, royalties, or rights to your work, across print, ebook, audiobook, or translated editions. You retain full copyright and 100% of your earnings across every platform your book is sold on, permanently.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <PublishYourBook
        eyebrow="Why Authors Choose NexiFire"
        title="Full-Service. Full Ownership."
        description="NexiFire is a complete-service book publishing company in the USA, built to give independent authors traditional-publisher quality, editorial standards, and real-world visibility, without ever asking for your rights or a cut of your royalties."
        buttonLabel="Let’s Build Your Publishing Plan"
      />
      <div className="h-20"></div>
      <LatestBlogs />
      <GetInTouchContact
        title="Ready To Publish Your Book?"
        description="Tell us where you are and where you want to go. NexiFire will design the system, align the right specialists, and help you move forward with confidence."
      />
    </section>
  );
}
