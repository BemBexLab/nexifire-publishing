import Link from "next/link";
import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

export type BlogContentSection = {
  heading?: string;
  paragraphs: ReactNode[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  cardTitle?: string;
  description: string;
  image: string;
  publishedAt: string;
  content: BlogContentSection[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-self-publish-a-book-in-usa",
    title: "How to Self-Publish a Book in the USA: The Complete 2026 Guide",
    description:
      "Self-publishing a book in the United States has never been more achievable, or more competitive.",
    image: "/image 69.webp",
    publishedAt: "2026-01-15",
    content: [
      {
        paragraphs: [
          "Self-publishing a book in the United States has never been more achievable, or more competitive. The tools, platforms, and professional services available to American authors in 2026 are genuinely world-class, and the gap between a finished manuscript and a book live on Amazon has never been smaller. But that accessibility comes with a catch: so has the noise. More books are published every year, which means the authors who succeed are increasingly the ones who approach the process strategically, not just enthusiastically.",
          "This guide covers every meaningful step in self-publishing for American authors, from finishing your manuscript to getting your book in front of readers nationwide and globally. Whether you're publishing a debut novel, a children's picture book, a personal memoir, or a business guide, the core process is the same, even when the specifics shift by genre.",
        ],
      },
      {
        heading: "Step 1: Finish, Then Properly Edit, Your Manuscript",
        paragraphs: [
          "The single piece of advice most first-time authors skip in their rush to publish: get a real professional edit. Not a proofread from a friend. Not a spell-check pass. A genuine developmental edit, line edit, or copyedit from a qualified editor who understands your genre.",
          "This is also where most authors get confused about terminology, so let's clear it up:",
          <div className="not-prose my-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  01
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Developmental editing
                  </strong>{" "}
                  looks at the big picture: structure, pacing, plot, or argument
                  strength. This is the right starting point for a first-time
                  author unsure whether the book's foundation actually works.
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  02
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Line editing
                  </strong>{" "}
                  focuses on sentence-level flow, voice, and tone, especially
                  valuable for fiction authors who want their prose to read
                  smoothly without losing their voice.
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  03
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Copyediting
                  </strong>{" "}
                  addresses grammar, consistency, and clarity throughout the
                  manuscript, once the structure is already solid.
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  04
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Proofreading
                  </strong>{" "}
                  is the final pass after formatting, catching typos, spacing
                  errors, and layout issues that slip in during typesetting.
                  It's the last line of defense for self-published authors who
                  don't have a traditional publisher's quality-control team
                  behind them.
                </p>
              </li>
            </ul>
          </div>,
          <div>
            If you're not sure where your manuscript stands, a manuscript
            evaluation service for new authors is often the smartest first
            investment before spending a dollar on design or formatting. It
            gives you an honest read on your book, structurally, stylistically,
            and commercially, before any other publishing decision is made.
          </div>,
          <div>
            NexiFire's manuscript editing service for authors covers every level
            above, matched to your genre, whether that's fiction, nonfiction,
            memoir, Christian nonfiction, business, or academic work. A good
            editing service should also keep your writing voice intact; a
            professional editor sharpens what you're already saying; they don't
            overwrite it with their own style.
          </div>,
          <div>
            <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
              What to do at this stage:
            </h3>
          </div>,
          <div className="not-prose my-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  01
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Complete your manuscript
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  02
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Commission a developmental edit (fiction/memoir) or a
                    copyedit (nonfiction/business)
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  03
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Request a manuscript evaluation if you're unsure which level
                    of editing you need
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  04
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Hold off on formatting or cover design until editing is
                    finished, since changes made during editing affect both
                  </strong>{" "}
                </p>
              </li>
            </ul>
          </div>,
        ],
      },
      {
        heading: "Step 2: Commission Professional Cover Design",
        paragraphs: [
          "Your cover is a marketing tool, not a decoration. It has to communicate genre in the first two seconds a browsing reader sees it, often as a tiny thumbnail on a phone screen. The difference between a professionally designed cover and a template-based one is usually obvious within five minutes of browsing any online bookstore.",
          "Book cover design services from NexiFire include front cover, spine, and back cover for print, plus versions optimized for digital storefronts like Amazon Kindle and Apple Books. Every cover is built to meet exact KDP and IngramSpark specifications from the first draft, so there are no rejected files or expensive resizing at submission.",
        ],
      },
      {
        heading: "Step 3: Format Your Interior for Print and Digital",
        paragraphs: [
          "Interior formatting, also called typesetting, is the process of turning your Word document into a print-ready PDF and an EPUB or MOBI file for ebook editions. It's a specialist skill, and one of the clearest tells of whether a book was professionally published.",
          "NexiFire's formatting team handles KDP and IngramSpark formatting for print, EPUB/MOBI conversion for ebooks, and fixed-layout EPUB for illustrated children's books, where image placement matters. Authors across Miami, New York, Los Angeles, Chicago, and every other US city work with our formatting team remotely, so location is never a limiting factor.",
          "Poor interior formatting tells a reader, within seconds and often subconsciously, that a book wasn't professionally published. It undercuts every other quality the book has before a single word is read.",
        ],
      },
      {
        heading: "Step 4: Choose Your Publishing Format and Platform",
        paragraphs: [
          "American authors in 2026 have three main format options: print (paperback and/or hardcover), ebook, and audiobook. Most authors aiming for the widest audience publish in all three, though the economics and timelines differ for each.",
          <>
            <b>Print-on-demand</b> is the dominant model for self-published
            physical books in the US. Through Amazon KDP Print and IngramSpark,
            your book is printed only when ordered: no upfront cost, no
            inventory, no minimum print run. IngramSpark is the recommended
            route for authors who want their print book available through
            independent bookstores, libraries, and international retailers
            simultaneously.
          </>,
          <>
            <b>Ebook publishing</b> typically involves converting your formatted
            manuscript to EPUB3 and MOBI, writing optimized metadata
            (description, keywords, categories), and distributing to Amazon
            Kindle, Apple Books, Kobo, and Google Play at once. On Amazon KDP,
            ebooks priced between $2.99 and $12.99 qualify for a 70% royalty
            rate (as of a 2026 policy update); pricing outside that range drops
            to 35%. Actual payout also depends on file size, since Amazon
            deducts a small delivery fee before calculating royalties. This
            makes the 70% tier attractive for most ebook genres, but it's worth
            confirming current rates directly in your KDP dashboard before
            pricing, since Amazon updates these thresholds periodically.
          </>,
          <>
            <b>Audiobook production</b> is the fastest-growing format in the US
            market. If your genre has an audiobook audience, and most do, it's
            worth building into your launch strategy from day one, not adding
            later as an afterthought.
          </>,
          <>
            <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
              How long does it take to publish a book in the USA?
            </h3>
          </>,
          "Timelines vary based on your manuscript's condition, whether it's finished, needs editing, or requires ghostwriting, and on the book's length and complexity. Once your book is fully prepared, though, going live is fast: most platforms take 5–10 business days after final submission. Amazon KDP typically takes up to 3 business days. Lulu can list a book for purchase within minutes, though full retail distribution may take around 12 weeks. IngramSpark's retailer availability varies by platform, since each retailer sets its own listing schedule. The takeaway: publishing itself is quick, but complete retail distribution across every channel takes longer, and that's worth planning for from the start.",
        ],
      },
      {
        heading: "Step 5: Register Your ISBN and Set Up Distribution",
        paragraphs: [
          "Every format of your book, print, ebook, and audiobook, needs its own ISBN. In the United States, ISBNs are most commonly issued through Bowker, though some platforms offer their own free identifiers for specific formats. NexiFire manages ISBN registration across every format as part of the publishing process, so your title is correctly catalogued in retail systems both in the US and internationally, from day one.",
          <>
            <b>Print and ebook distribution</b> can run through several
            platforms, including Lulu and Draft2Digital, but NexiFire's
            preferred route is IngramSpark, which offers the broadest reach
            across a global network of retailers, libraries, and independent
            bookstores. Paired with KDP for Amazon-specific ebook and print
            distribution, this gets your book in front of readers on Amazon,
            Barnes & Noble, international retailers, and library systems,
            simultaneously, in the US and abroad.
          </>,
          <>
            <b>Audiobook distribution</b> runs through a separate set of
            platforms built specifically for audio, including Audible (via ACX),
            Findaway Voices, Spotify, Apple Books, and Kobo. NexiFire manages
            submission across these platforms as part of audiobook production,
            so your title reaches listeners everywhere audiobooks are actually
            consumed, not just wherever your print and ebook editions already
            live.
          </>,
        ],
      },
      {
        heading: "Step 6: Plan Your Book Marketing Before You Launch",
        paragraphs: [
          "Book marketing services for self-published authors work best when planned before launch, not scrambled together after publication, once momentum is already lost. The first 30 days after release are the most algorithmically significant window on every platform. What happens there shapes your book's long-term visibility on Amazon and everywhere else discovery is driven by sales velocity.",
          "A basic launch strategy should include: Amazon advertising live from day one; an ARC (advance review copy) program to build early reviews on Goodreads and Amazon before launch; a social media plan matched to your genre (BookTok/Instagram for fiction, LinkedIn for business books, Facebook/Pinterest for children's books); and at least one email campaign to whatever list you've built pre-launch.",
          "Author branding, the consistent visual and tonal identity across your website, social media, and covers, matters increasingly for authors planning more than one title. Building an author platform isn't vanity work; it's the infrastructure that makes each future launch easier than the last.",
        ],
      },
      {
        heading:
          "Step 7: Work With a Publishing Consultant if You Need Guidance",
        paragraphs: [
          "First-time authors frequently benefit from a publishing consultant who can map out the process before decisions are made. A clear roadmap, sequencing investments, prioritizing platforms for your genre, setting a realistic timeline and cost expectations, turns an overwhelming series of unknowns into a manageable plan.",
          "NexiFire's publishing consultants work with authors at every stage, from first-timers finishing a debut manuscript to established authors relaunching a backlist title. The self-publishing checklist for a children's picture book author looks nothing like one for a thriller novelist, and a good consultant understands the difference.",
        ],
      },
      {
        heading: "Editing & Proofreading: The Questions Authors Ask Most",
        paragraphs: [
          <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
            What's the difference between editing and proofreading?
          </h3>,
          <>
            Editing (developmental, line, or copyediting) happens before
            formatting and addresses structure, style, grammar, and consistency.
            Proofreading happens after formatting and catches errors introduced
            during layout, like spacing or typesetting mistakes. Most
            manuscripts benefit from both, in that order.
          </>,
          <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
            What's the difference between copyediting and proofreading
            specifically?
          </h3>,
          <>
            Copyediting is a deeper pass focused on grammar, clarity, and
            consistency throughout the full manuscript. Proofreading is a
            lighter, final check after the book is typeset, focused on catching
            anything that slipped through or was introduced during formatting.
          </>,
          <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
            Do I need a developmental edit or just a copyedit?
          </h3>,
          <>
            If you're unsure whether your book's structure and story actually
            work, start with a developmental edit. If the structure is solid and
            you just need language and consistency refined, a copyedit is the
            better, more affordable fit.
          </>,
          <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
            Is professional book editing worth the cost for a self-published
            author?
          </h3>,
          <>
            Yes. Self-published authors don't have a traditional publishing
            house running quality control behind the scenes, which makes
            professional editing and proofreading the thing standing between
            your manuscript and a book that reads like it was rushed.
          </>,
        ],
      },
      {
        heading: "The Bottom Line for American Authors in 2026",
        paragraphs: [
          "Self-publishing in the USA in 2026 is a genuine, commercially viable path to reaching readers nationally and globally. The authors who do it well treat it as a professional process, investing in editing, design, formatting, and distribution rather than cutting corners for speed. The books that sell are the books that look and read like they deserve to be sold.",
          "If you're ready to start, NexiFire offers a free consultation to any author, at any stage of their manuscript. We'll give you an honest read on where you are, what your book needs, and what the process looks like from here.",
        ],
      },
      {
        heading: "Ready to Publish?",
        paragraphs: [
          "Talk to a NexiFire publishing consultant. Free, no-obligation, and specific to your manuscript.",
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-base font-medium leading-none text-white shadow-[0_10px_24px_rgba(178,64,2,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(178,64,2,0.32)]"
          >
            <span>Get a Free Consultation</span>
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              <FaArrowRight />
            </span>
          </Link>,
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "how-to-turn-your-book-idea-into-a-published-book",
    title: "How to Turn Your Book Idea Into a Published Book: A Step-by-Step Guide for First-Time Authors",
    description:
      "Having a book idea is exciting. You may have been carrying the idea around for years, writing notes in your phone, filling notebooks with thoughts, or simply imagining what it would feel like to finally see your name on the cover of a book.",
    image: "/image 69.webp",
    // yyyy-mm-dd
    publishedAt: "2026-10-03",
    content: [
      {
        paragraphs: [
          "But there is a big difference between having a book idea and having a finished, published book.",
          "Many first-time authors get stuck somewhere between those two points. They may not know how to structure their manuscript, where editing fits into the process, what kind of book formatting is required, or how publishing and distribution actually work.",
          "The good news is that you do not have to figure everything out at once.",
          "Publishing a book is a process. Once you understand the steps, what initially feels overwhelming becomes much more manageable.",
          "Here is what that journey can look like."
        ],
      },
      {
        heading: "Start With the Book Idea",
        paragraphs: [
          "Every book begins with an idea.",
          `It could be a personal story, a business concept, a memoir, a novel, a children's book, a collection of poetry, a devotional, or something completely different. There is no single "right" type of book to write.`,
          `The important question is not simply, "What do I want to write?"`,
          <div className="not-prose my-8 overflow-hidden rounded-[24px] border border-[#f0d7c9] bg-gradient-to-br from-[#fff8f3] via-white to-[#fff1e8] shadow-[0_18px_45px_rgba(178,64,2,0.09)]">
            <div className="relative overflow-hidden bg-[linear-gradient(115deg,#8f3207_0%,#b24002_58%,#e45a14_100%)] px-6 py-6 text-white sm:px-8 sm:py-7">
              <span className="absolute -right-8 -top-16 h-44 w-44 rounded-full border border-white/15" />
              <span className="absolute -right-1 -top-9 h-28 w-28 rounded-full border border-white/15" />
              <h3 className="relative text-white text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                Ask yourself
              </h3>
            </div>
            <ul className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
              {[
                "Who is this book for?",
                "What do I want readers to take away from it?",
                "What problem, experience, story, or message am I exploring?",
                "Why does this book need to exist?",
                "What makes my perspective different?",
              ].map((question, index) => (
                <li
                  key={question}
                  className={`flex items-start gap-3 rounded-2xl border border-[#f1e5de] bg-white/85 p-4 shadow-[0_5px_16px_rgba(75,35,17,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#e8b99f] hover:shadow-[0_10px_22px_rgba(178,64,2,0.09)] sm:p-5 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-xs font-bold tracking-wide text-[#b24002] ring-1 ring-[#f3d1bd]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-0.5 text-[0.96rem] font-medium leading-6 text-[#38302c]">
                    {question}
                  </span>
                </li>
              ))}
            </ul>
          </div>,
          `You do not need all the answers before you begin. In fact, many authors discover what their book is truly about while they are writing it.`,
          `But having a basic direction can save you considerable time later.`,
        ],
      },
      {
        heading: "Develop the Manuscript",
        paragraphs: [
          "Once your idea is clear, the next step is turning that idea into a manuscript.",
          "For some authors, this means sitting down and writing chapter after chapter themselves. For others, getting the words onto the page is the hardest part.",
          "That is where professional ghostwriting can be valuable.",
          "A ghostwriter does more than simply put words on a page. A good ghostwriter works to understand your voice, experiences, ideas, and intended message, then helps shape those elements into a cohesive book.",
          "If you are writing the manuscript yourself, you may still benefit from outlining the book before you begin.",
          <div className="not-prose my-8 rounded-[24px] border border-[#f0d7c9] bg-[#fffaf7] p-5 shadow-[0_16px_38px_rgba(90,42,18,0.07)] sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#b24002] text-white shadow-[0_8px_18px_rgba(178,64,2,0.22)]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M8 5.5h11M8 12h11M8 18.5h11M4.5 5.5h.01M4.5 12h.01M4.5 18.5h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-lg font-semibold leading-snug tracking-[-0.02em] text-[#302722] sm:text-xl">
                  A simple chapter-by-chapter plan can help you see:
                </p>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "What each chapter needs to accomplish",
                "Where important stories belong",
                "Which ideas need more explanation",
                "Where the book begins and ends",
                "Whether the overall structure makes sense",
              ].map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border border-[#f1e5de] bg-white px-4 py-3.5 text-[0.95rem] font-medium leading-6 text-[#51443c] transition duration-200 hover:border-[#e8b99f] hover:bg-[#fff7f2] ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-[0.7rem] font-bold text-[#b24002]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>,
          `Do not worry about making the first draft perfect.`,
          `The first draft is where you get the story, knowledge, and ideas out of your head. Editing comes later.`
        ],
      },
      {
        heading: "Edit the Manuscript",
        paragraphs: [
          "Finishing your manuscript is an accomplishment, but it does not necessarily mean the book is finished.",
          "This is one of the most important things for first-time authors to understand.",
          "A manuscript can contain a powerful story or valuable information and still need significant editing.",
          "Professional editing can look at the manuscript from several different levels.",
          <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
            Developmental Editing
          </h3>,
          "Developmental editing focuses on the bigger picture.",
          "An editor may examine the structure, pacing, organization, character development, arguments, chapter order, and overall effectiveness of the book.",
          "For nonfiction, this could mean identifying areas where an argument needs more support or where a concept needs clarification.",
          "For fiction, it may involve looking at plot, pacing, character arcs, conflict, and consistency.",
          <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
            Line Editing
          </h3>,
          "Line editing focuses more closely on how the writing works sentence by sentence.",
          "It can improve clarity, flow, tone, word choice, and readability while preserving the author's individual voice.",
          <h3 className="mt-3 border-l-4 border-[#b24002] pl-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#282828] sm:text-2xl">
            Proofreading
          </h3>,
          "Proofreading is generally one of the final stages.",
          "It focuses on catching remaining spelling, punctuation, grammar, typographical, and formatting-related errors before publication.",
          "These different stages serve different purposes. Treating them as the same thing can leave important problems undiscovered."
        ],
      },
      {
        heading: "Preserve Your Voice",
        paragraphs: [
          "One of the biggest concerns authors have when working with an editor or ghostwriter is losing their voice.",
          "That concern is understandable.",
          "Your book should still sound like you.",
          "Professional editing should not turn your writing into something generic. The goal is to make the manuscript stronger while maintaining the personality, perspective, and emotional character that made you want to write the book in the first place.",
          "This is particularly important for memoirs, autobiographies, inspirational books, personal stories, and books based on professional experience.",
          "Readers are not only interested in information. They want to connect with the person behind it."
        ],
      },
      {
        heading: "Prepare the Book for Publication",
        paragraphs: [
          "Once the manuscript is edited and approved, it needs to be prepared for publication.",
          "This is where book formatting becomes important.",
          "A professionally written manuscript is not automatically a professionally formatted book.",
          "Interior formatting determines how the finished book will actually look on the page.",
          <div className="not-prose my-8 rounded-[24px] border border-[#f0d7c9] bg-[#fffaf7] p-5 shadow-[0_16px_38px_rgba(90,42,18,0.07)] sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#b24002] text-white shadow-[0_8px_18px_rgba(178,64,2,0.22)]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M8 5.5h11M8 12h11M8 18.5h11M4.5 5.5h.01M4.5 12h.01M4.5 18.5h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-lg font-semibold leading-snug tracking-[-0.02em] text-[#302722] sm:text-xl">
                  It can include:
                </p>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Chapter headings",
                "Page numbers",
                "Margins",
                "Fonts and typography",
                "Paragraph spacing",
                "Headers and footers",
                "Table of contents",
                "Section breaks",
                "Front matter",
                "Back matter",
                "Image placement",
                "Print specifications",
              ].map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border border-[#f1e5de] bg-white px-4 py-3.5 text-[0.95rem] font-medium leading-6 text-[#51443c] transition duration-200 hover:border-[#e8b99f] hover:bg-[#fff7f2] ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-[0.7rem] font-bold text-[#b24002]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>,
          "Formatting requirements can also vary depending on whether the book is being produced as a paperback, hardcover, or book.",
          "This is why formatting should be approached as part of the publishing process rather than as an afterthought."
        ],
      },
      {
        heading: "Create a Cover That Fits the Book",
        paragraphs: [
          "Readers absolutely do judge books by their covers.",
          "Your cover is often the first thing a potential reader sees, whether they discover your book online, in a bookstore, or through social media.",
          "A strong cover should do more than look attractive. It should communicate something about the book.",
          "The genre, audience, tone, and subject matter should all influence the design.",
          "A memoir may call for a very different visual approach from a business book. A children's picture book has different requirements from a thriller.",
          "The goal is not simply to create a beautiful cover.",
          "It is to create the right cover for your book."
        ],
      },
      {
        heading: "Understand ISBNs and Publishing Requirements",
        paragraphs: [
          "There are also technical details involved in publishing a book.",
          "An ISBN, for example, is a unique identifier used for books and book-related products. Depending on where and how you publish, you may also need to consider copyright information, metadata, pricing, trim size, print specifications, and distribution requirements.",
          "These details may not be the most exciting part of becoming an author, but getting them right matters.",
          "Small technical mistakes can create unnecessary problems later, particularly when a book is being distributed across multiple platforms."
        ],
      },
      {
        heading: "Choose Your Publishing Route",
        paragraphs: [
          "Authors today have more publishing options than ever.",
          "You can pursue traditional publishing, self-publishing, or work with a professional publishing company that helps manage some or all of the publishing process.",
          "There is no universal answer about which route is best.",
          "Traditional publishing can offer professional support and access to established publishing networks, but the process can be highly competitive and may take considerable time.",
          "Self-publishing gives authors much more control, but it also means taking responsibility for many parts of the process.",
          "A professional publishing partner can provide assistance with areas such as editing, formatting, cover design, publishing, distribution, and audiobook production.",
          "The right choice depends on your goals, budget, timeline, and how much of the publishing process you want to manage yourself."
        ],
      },
      {
        heading: "Think Beyond Publication",
        paragraphs: [
          "Getting your book published is a major milestone.",
          "But publication is not necessarily the end of the journey.",
          "Your book needs to reach readers.",
          "That is where distribution becomes important.",
          "Depending on your publishing strategy, your book may be made available through online retailers, bookstores, libraries, and digital platforms.",
          "Authors should think about distribution early rather than waiting until the manuscript is finished.",
          "Where do you want readers to find your book?",
          "Do you want a print edition?",
          "A  book?",
          "An audiobook?",
          "International availability?",
          "The answers to these questions can influence decisions made earlier in the publishing process."
        ],
      },
      {
        heading: "Consider an Audiobook",
        paragraphs: [
          "Audiobooks have become an important format for readers who prefer to listen rather than read.",
          "For many authors, creating an audiobook can provide another way to connect with an audience.",
          "Audiobook production involves more than simply reading the manuscript into a microphone. Recording quality, narration, editing, mastering, file requirements, and platform specifications all matter.",
          "If you want your book available in audio, it is worth considering this format as part of your overall publishing strategy.",
        ],
      },
      {
        heading: "Review Everything Before Publication",
        paragraphs: [
          "Before giving final approval, take the time to review the complete book.",
          "Read the final manuscript carefully.",
          "Look at the interior layout.",
          "Check the table of contents.",
          "Review chapter titles.",
          "Look at images and captions.",
          "Check the cover.",
          "Make sure your name, book title, copyright information, and other important details are correct.",
          "It is much easier to fix an error before publication than after your book is already available to readers."
        ]
      },
      {
        heading: "Your Book Deserves More Than Just a Publishing Button",
        paragraphs: [
          "Writing a book can be deeply personal.",
          "For some authors, it is the story they have wanted to tell their entire lives. For others, it is knowledge they want to pass on, a business message they want to share, or an experience they believe could help someone else.",
          "Whatever the reason, your manuscript deserves careful attention at every stage.",
          "The journey from idea to published book involves much more than writing. It involves structure, editing, design, formatting, publishing, distribution, and, increasingly, audiobook production.",
          "You do not have to become an expert in every one of these areas.",
          "What matters is having a clear understanding of the process and working with the right professionals when you need support.",
          "At NexiFire Publishing, we help authors move from an unfinished idea or manuscript toward a professionally prepared book. From ghostwriting and editing to proofreading, formatting, publishing, distribution, and audiobook production, our goal is to make the publishing journey clearer and more manageable.",
          "Your book starts with an idea.",
          "The next step is giving that idea the structure, attention, and professional care it needs to become a book readers can actually hold, download, or listen to.",
          "Ready to take your book from idea to publication? Start your publishing journey with NexiFire Publishing."
        ]
      }
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRecentBlogPosts = (limit = 3) =>
  [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
