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
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
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
                  errors, and layout issues that slip in during typesetting. It's
                  the last line of defense for self-published authors who don't
                  have a traditional publisher's quality-control team behind
                  them.
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
          <div><h3 className="text-2xl font-semibold">What to do at this stage:</h3></div>,
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
                    Commission a developmental edit (fiction/memoir) or a copyedit (nonfiction/business)
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  03
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Request a manuscript evaluation if you're unsure which level of editing you need
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  04
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Hold off on formatting or cover design until editing is finished, since changes made during editing affect both
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
          "Poor interior formatting tells a reader, within seconds and often subconsciously, that a book wasn't professionally published. It undercuts every other quality the book has before a single word is read."
        ],
      },
      {
        heading: "Step 4: Choose Your Publishing Format and Platform",
        paragraphs: [
          "American authors in 2026 have three main format options: print (paperback and/or hardcover), ebook, and audiobook. Most authors aiming for the widest audience publish in all three, though the economics and timelines differ for each.",
          <><b>Print-on-demand</b> is the dominant model for self-published physical books in the US. Through Amazon KDP Print and IngramSpark, your book is printed only when ordered: no upfront cost, no inventory, no minimum print run. IngramSpark is the recommended route for authors who want their print book available through independent bookstores, libraries, and international retailers simultaneously.</>,
          <><b>Ebook publishing</b> typically involves converting your formatted manuscript to EPUB3 and MOBI, writing optimized metadata (description, keywords, categories), and distributing to Amazon Kindle, Apple Books, Kobo, and Google Play at once. On Amazon KDP, ebooks priced between $2.99 and $12.99 qualify for a 70% royalty rate (as of a 2026 policy update); pricing outside that range drops to 35%. Actual payout also depends on file size, since Amazon deducts a small delivery fee before calculating royalties. This makes the 70% tier attractive for most ebook genres, but it's worth confirming current rates directly in your KDP dashboard before pricing, since Amazon updates these thresholds periodically.</>,
          <><b>Audiobook production</b> is the fastest-growing format in the US market. If your genre has an audiobook audience, and most do, it's worth building into your launch strategy from day one, not adding later as an afterthought.</>,
          <><h3 className="text-2xl font-semibold">How long does it take to publish a book in the USA?</h3></>,
          "Timelines vary based on your manuscript's condition, whether it's finished, needs editing, or requires ghostwriting, and on the book's length and complexity. Once your book is fully prepared, though, going live is fast: most platforms take 5–10 business days after final submission. Amazon KDP typically takes up to 3 business days. Lulu can list a book for purchase within minutes, though full retail distribution may take around 12 weeks. IngramSpark's retailer availability varies by platform, since each retailer sets its own listing schedule. The takeaway: publishing itself is quick, but complete retail distribution across every channel takes longer, and that's worth planning for from the start."
        ],
      },
      {
        heading: "Step 5: Register Your ISBN and Set Up Distribution",
        paragraphs: [
          "Every format of your book, print, ebook, and audiobook, needs its own ISBN. In the United States, ISBNs are most commonly issued through Bowker, though some platforms offer their own free identifiers for specific formats. NexiFire manages ISBN registration across every format as part of the publishing process, so your title is correctly catalogued in retail systems both in the US and internationally, from day one.",
          <><b>Print and ebook distribution</b> can run through several platforms, including Lulu and Draft2Digital, but NexiFire's preferred route is IngramSpark, which offers the broadest reach across a global network of retailers, libraries, and independent bookstores. Paired with KDP for Amazon-specific ebook and print distribution, this gets your book in front of readers on Amazon, Barnes & Noble, international retailers, and library systems, simultaneously, in the US and abroad.</>,
          <><b>Audiobook distribution</b> runs through a separate set of platforms built specifically for audio, including Audible (via ACX), Findaway Voices, Spotify, Apple Books, and Kobo. NexiFire manages submission across these platforms as part of audiobook production, so your title reaches listeners everywhere audiobooks are actually consumed, not just wherever your print and ebook editions already live.</>,
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
        heading: "Step 7: Work With a Publishing Consultant if You Need Guidance",
        paragraphs: [
          "First-time authors frequently benefit from a publishing consultant who can map out the process before decisions are made. A clear roadmap, sequencing investments, prioritizing platforms for your genre, setting a realistic timeline and cost expectations, turns an overwhelming series of unknowns into a manageable plan.",
          "NexiFire's publishing consultants work with authors at every stage, from first-timers finishing a debut manuscript to established authors relaunching a backlist title. The self-publishing checklist for a children's picture book author looks nothing like one for a thriller novelist, and a good consultant understands the difference.",
        ],
      },
      {
        heading: "Editing & Proofreading: The Questions Authors Ask Most",
        paragraphs: [
          <h3 className="font-semibold text-2xl">What's the difference between editing and proofreading?</h3>,
          <>Editing (developmental, line, or copyediting) happens before formatting and addresses structure, style, grammar, and consistency. Proofreading happens after formatting and catches errors introduced during layout, like spacing or typesetting mistakes. Most manuscripts benefit from both, in that order.</>,
          <h3 className="font-semibold text-2xl">What's the difference between copyediting and proofreading specifically?</h3>,
          <>Copyediting is a deeper pass focused on grammar, clarity, and consistency throughout the full manuscript. Proofreading is a lighter, final check after the book is typeset, focused on catching anything that slipped through or was introduced during formatting.</>,
          <h3 className="font-semibold text-2xl">Do I need a developmental edit or just a copyedit?</h3>,
          <>If you're unsure whether your book's structure and story actually work, start with a developmental edit. If the structure is solid and you just need language and consistency refined, a copyedit is the better, more affordable fit.</>,
          <h3 className="font-semibold text-2xl">Is professional book editing worth the cost for a self-published author?</h3>,
          <>Yes. Self-published authors don't have a traditional publishing house running quality control behind the scenes, which makes professional editing and proofreading the thing standing between your manuscript and a book that reads like it was rushed.</>,
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
            href="/"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-base font-medium leading-none text-white shadow-[0_10px_24px_rgba(178,64,2,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(178,64,2,0.32)]"
          >
            <span>Get a Free Consultation</span>
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              <FaArrowRight />
            </span>
          </Link>
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "how-to-self-publish-a-book-in-usa",
    title: "How to Self-Publish a Book in the USA: The Complete 2026 Guide",
    description:
      "Self-publishing a book in the United States has never been more achievable, or more competitive.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
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
                  errors, and layout issues that slip in during typesetting. It's
                  the last line of defense for self-published authors who don't
                  have a traditional publisher's quality-control team behind
                  them.
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
          <div><h3 className="text-2xl font-semibold">What to do at this stage:</h3></div>,
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
                    Commission a developmental edit (fiction/memoir) or a copyedit (nonfiction/business)
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  03
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Request a manuscript evaluation if you're unsure which level of editing you need
                  </strong>{" "}
                </p>
              </li>
              <li className="group relative overflow-hidden rounded-[18px] border border-[#eaded7] bg-gradient-to-br from-[#fffaf6] to-white p-5 shadow-[0_12px_30px_rgba(178,64,2,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e7b79d] hover:shadow-[0_18px_34px_rgba(178,64,2,0.14)] sm:p-6">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-sm font-semibold text-[#b24002] ring-1 ring-[#f4c9b1]">
                  04
                </span>
                <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                  <strong className="font-semibold text-[#282828]">
                    Hold off on formatting or cover design until editing is finished, since changes made during editing affect both
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
          "Poor interior formatting tells a reader, within seconds and often subconsciously, that a book wasn't professionally published. It undercuts every other quality the book has before a single word is read."
        ],
      },
      {
        heading: "Step 4: Choose Your Publishing Format and Platform",
        paragraphs: [
          "American authors in 2026 have three main format options: print (paperback and/or hardcover), ebook, and audiobook. Most authors aiming for the widest audience publish in all three, though the economics and timelines differ for each.",
          <><b>Print-on-demand</b> is the dominant model for self-published physical books in the US. Through Amazon KDP Print and IngramSpark, your book is printed only when ordered: no upfront cost, no inventory, no minimum print run. IngramSpark is the recommended route for authors who want their print book available through independent bookstores, libraries, and international retailers simultaneously.</>,
          <><b>Ebook publishing</b> typically involves converting your formatted manuscript to EPUB3 and MOBI, writing optimized metadata (description, keywords, categories), and distributing to Amazon Kindle, Apple Books, Kobo, and Google Play at once. On Amazon KDP, ebooks priced between $2.99 and $12.99 qualify for a 70% royalty rate (as of a 2026 policy update); pricing outside that range drops to 35%. Actual payout also depends on file size, since Amazon deducts a small delivery fee before calculating royalties. This makes the 70% tier attractive for most ebook genres, but it's worth confirming current rates directly in your KDP dashboard before pricing, since Amazon updates these thresholds periodically.</>,
          <><b>Audiobook production</b> is the fastest-growing format in the US market. If your genre has an audiobook audience, and most do, it's worth building into your launch strategy from day one, not adding later as an afterthought.</>,
          <><h3 className="text-2xl font-semibold">How long does it take to publish a book in the USA?</h3></>,
          "Timelines vary based on your manuscript's condition, whether it's finished, needs editing, or requires ghostwriting, and on the book's length and complexity. Once your book is fully prepared, though, going live is fast: most platforms take 5–10 business days after final submission. Amazon KDP typically takes up to 3 business days. Lulu can list a book for purchase within minutes, though full retail distribution may take around 12 weeks. IngramSpark's retailer availability varies by platform, since each retailer sets its own listing schedule. The takeaway: publishing itself is quick, but complete retail distribution across every channel takes longer, and that's worth planning for from the start."
        ],
      },
      {
        heading: "Step 5: Register Your ISBN and Set Up Distribution",
        paragraphs: [
          "Every format of your book, print, ebook, and audiobook, needs its own ISBN. In the United States, ISBNs are most commonly issued through Bowker, though some platforms offer their own free identifiers for specific formats. NexiFire manages ISBN registration across every format as part of the publishing process, so your title is correctly catalogued in retail systems both in the US and internationally, from day one.",
          <><b>Print and ebook distribution</b> can run through several platforms, including Lulu and Draft2Digital, but NexiFire's preferred route is IngramSpark, which offers the broadest reach across a global network of retailers, libraries, and independent bookstores. Paired with KDP for Amazon-specific ebook and print distribution, this gets your book in front of readers on Amazon, Barnes & Noble, international retailers, and library systems, simultaneously, in the US and abroad.</>,
          <><b>Audiobook distribution</b> runs through a separate set of platforms built specifically for audio, including Audible (via ACX), Findaway Voices, Spotify, Apple Books, and Kobo. NexiFire manages submission across these platforms as part of audiobook production, so your title reaches listeners everywhere audiobooks are actually consumed, not just wherever your print and ebook editions already live.</>,
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
        heading: "Step 7: Work With a Publishing Consultant if You Need Guidance",
        paragraphs: [
          "First-time authors frequently benefit from a publishing consultant who can map out the process before decisions are made. A clear roadmap, sequencing investments, prioritizing platforms for your genre, setting a realistic timeline and cost expectations, turns an overwhelming series of unknowns into a manageable plan.",
          "NexiFire's publishing consultants work with authors at every stage, from first-timers finishing a debut manuscript to established authors relaunching a backlist title. The self-publishing checklist for a children's picture book author looks nothing like one for a thriller novelist, and a good consultant understands the difference.",
        ],
      },
      {
        heading: "Editing & Proofreading: The Questions Authors Ask Most",
        paragraphs: [
          <h3 className="font-semibold text-2xl">What's the difference between editing and proofreading?</h3>,
          <>Editing (developmental, line, or copyediting) happens before formatting and addresses structure, style, grammar, and consistency. Proofreading happens after formatting and catches errors introduced during layout, like spacing or typesetting mistakes. Most manuscripts benefit from both, in that order.</>,
          <h3 className="font-semibold text-2xl">What's the difference between copyediting and proofreading specifically?</h3>,
          <>Copyediting is a deeper pass focused on grammar, clarity, and consistency throughout the full manuscript. Proofreading is a lighter, final check after the book is typeset, focused on catching anything that slipped through or was introduced during formatting.</>,
          <h3 className="font-semibold text-2xl">Do I need a developmental edit or just a copyedit?</h3>,
          <>If you're unsure whether your book's structure and story actually work, start with a developmental edit. If the structure is solid and you just need language and consistency refined, a copyedit is the better, more affordable fit.</>,
          <h3 className="font-semibold text-2xl">Is professional book editing worth the cost for a self-published author?</h3>,
          <>Yes. Self-published authors don't have a traditional publishing house running quality control behind the scenes, which makes professional editing and proofreading the thing standing between your manuscript and a book that reads like it was rushed.</>,
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
            href="/"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-base font-medium leading-none text-white shadow-[0_10px_24px_rgba(178,64,2,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(178,64,2,0.32)]"
          >
            <span>Get a Free Consultation</span>
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              <FaArrowRight />
            </span>
          </Link>
        ],
      },
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
