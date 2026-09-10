import CustomSection from "@/components/CustomSection";
import FAQs from "@/components/FAQs";
import GetInTouchContact from "@/components/GetInTouchContact";
import ImageDesc from "@/components/ImageDesc";
import Introduction from "@/components/Introduction";
import OurProcess from "@/components/OurProcess";
import PageHero from "@/components/PageHero";
import PublishingDistribution from "@/components/PublishingDistribution";
import PublishYourBook from "@/components/PublishYourBook";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";
import WhyItMatters from "@/components/WhyItMatters";
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="NexiFire Publishing"
        title={`Audiobook Production Services in the USA`}
        description={ <div>
          <h3 className="text-black font-semibold text-xl">Professional Narration, Editing, and Distribution: Start to Finish</h3>
          <p>NexiFire Publishing is a full audiobook production company for authors: professional narration, studio-quality recording, expert audio mastering, and global distribution to Audible, Apple Books, Spotify, and 20+ platforms. Whether you need to hire a voice actor for an audiobook, want to narrate it yourself, or just need someone to fix a mastering issue before ACX rejects your file, we handle it from manuscript to a live, listenable title.</p>
        </div> }
        buttonLabel="Start My Audiobook Today"
      />
      <Introduction
        eyebrow="Introduction"
        title="Choose the Voice Your Audiobook Deserves"
        description={
          <div>
            <p>
              The right narrator is the difference between a book people finish and one they abandon at chapter three. We offer two paths, both with full production support behind them.
            </p>

            <h3 className="text-xl font-bold mt-4">Professional Narrator</h3>
            <p>
              We match you with a voice actor for your audiobook whose tone and delivery actually fit your genre; a thriller doesn't want the same voice as a devotional. For fiction with multiple characters, we can also bring in duet or multi-narrator casting when the book calls for it.
            </p>

            <h3 className="text-xl font-bold mt-4">Author-Narrated</h3>
            <p>
              Want to narrate it yourself? We support that fully, coaching, technical setup guidance, and full professional post-production so your recordings meet ACX and platform quality standards, not just "good enough for a podcast."
            </p>
          </div>
        }
        imageSrc="/0eee94f7-4643-4e46-8b95-cc9232497a79 1 (2).webp"
      />
      <div className="bg-[#fffaf6] py-14 sm:py-16 md:py-20 lg:py-24">
        <OurProcess
          badgeText=""
          title="How It Works"
          description=""
          steps={[
            {
              number: "01",
              title: "Consultation & planning",
              description:
                "We review your manuscript, goals, and timeline.",
            },
            {
              number: "02",
              title: "Script preparation & narrator selection",
              description:
                "We prep the script and help you choose the right narrator.",
            },
            {
              number: "03",
              title: "Recording & audio production",
              description:
                "Your audiobook is professionally recorded, edited, and mastered.",
            },
            {
              number: "04",
              title: "Distribution & launch",
              description:
                "We launch it across major audiobook platforms.",
            },
          ]}
        />
      </div>
      <WhyItMatters />
      <WhyChoose
        badgeText=""
        title="Audiobook Editing & Post-Production"
        description="A lot of authors, especially author-narrators, get the recording done and then hit a wall with everything after. That's the part we specialize in."
        reasons={[
          {
            title: "Audio editing & cleanup",
            description:
              "Removing mouth noise, breath sounds, room echo, and inconsistent levels between takes, and matching audio across sessions recorded days or weeks apart so it doesn't sound stitched together.",
          },
          {
            title: "Mixing & mastering to ACX spec",
            description: "RMS loudness, peak levels, noise floor, the exact technical requirements ACX checks on submission, handled so your file passes the first time instead of bouncing back with a rejection you have to decode.",
          },
          {
            title: "Sound design, where it fits",
            description:
              "Light scoring or sound design for children's titles, fiction with scene transitions, or anything that benefits from more than a flat narration track.",
          },
          {
            title: "File formatting & metadata",
            description:
              "Chapter files named and split correctly, ID3 metadata filled in properly, cover art sized to spec,  the unglamorous stuff that still gets a file rejected if it's wrong.",
          },
          {
            title: "",
            description:
              "If you've already recorded your own audiobook and just need someone to fix the noise, hit ACX's mastering requirements, or get the metadata and chapter files in order, that's a standalone service, you don't need to redo the whole production to get it fixed properly.",
          },
        ]}
      />
      <PublishYourBook
        eyebrow=""
        title="Ready to Convert Your Book to an Audiobook?"
        description="Get a free, no-obligation quote. Tell us your manuscript length, your preferred narration approach, and your timeline; we will have a production plan back to you within 24 hours."
        backgroundImageSrc="/Frame 2147225871.webp"
        backgroundAlt="headphones"
        buttonLabel="Get My Free Audiobook Quote"
      />
      <ImageDesc
        badgeText=""
        title="Who's Actually Producing Your Audiobook"
        paragraphs={[
          "This part matters more than most companies let on. Your manuscript is prepped by people who've formatted audiobook scripts for ACX submission before, not run through a generic script. Narrators are cast from an actual audition pool matched to genre and tone, not assigned at random. Mastering is done by audio engineers working to ACX's technical specification (RMS levels, noise floor, file format), because a file that gets rejected on first submission costs you weeks, not days. Every chapter gets a quality-control listen before anything goes to a platform, not a spot-check of the whole thing.",
          `If a narrator, engineer, or producer has specific credentials, prior audiobook credits, or ACX certification worth naming here, that's the kind of concrete detail worth adding. Genuinely verifiable specifics are what actually build trust with readers and with Google, more than a general claim of "professional quality" ever will.`,
          <h2 className="project-h2 w-full tracking-[-0.055em] my-6">Where Your Audiobook Will Live</h2>,
          "Audible (ACX) · Apple Books · Spotify · Google Play Books · Storytel · OverDrive · Kobo Audiobooks · Scribd · and 20+ platforms total.",
          "We submit simultaneously across all of them, and if you'd rather skip ACX exclusivity and keep your audiobook wide from day one, we can build the distribution plan around that instead. That's a real decision authors have to make, and it's one we will actually walk through with you rather than defaulting you into an exclusivity deal because it's easier for us."
        ]}
        imageSrc="/Rectangle 23834 (6).webp"
        imageAlt=""
        reverse={true}
      />

      <div className="h-20" />

      <div className="bg-[#FDF7F4]">
        <WhoWeServe
          badgeText=""
          title="Every Genre, Every Voice"
          description="Every genre needs the right voice. We match your book with a genre-experienced narrator who understands its tone, whether that means tension for a thriller, warmth for a children’s book, authenticity for a memoir, credibility for nonfiction, or sensitivity for spiritual and faith-based titles."
          stats={[
            { value: "7+", label: "Years of experience", highlighted: true },
            { value: "130+", label: "Professional ghostwriters" },
            { value: "5K+", label: "Happy Clients" },
            { value: "2K+", label: "Books Published", highlighted: true },
          ]}
          genres={[
            "Fiction & Novels",
            "Children's Audiobooks",
            "Memoir & Biography",
            "Business & Leadership",
            "Self-Help & Personal Development",
            "Spiritual & Devotional",
            "Academic & Educational"
          ]}
        />
      </div>
      <PublishingDistribution />
      <WhatsIncluded
        badgeText=""
        title="Keep 100% of Your Audiobook Royalties"
        description="We charge a flat-rate production fee. No commission, no royalty share, no percentage carved out of what Audible, Apple Books, or Spotify pay you. Every cent your audiobook earns goes to you."
        items={[
          { label: "Manuscript preparation and narration script" },
          { label: "Narrator matching and sample auditions" },
          { label: "Certified studio or guided home recording" },
          { label: "Professional audio editing and cleaning" },
          { label: "Full mastering to ACX specification" },
          { label: "QC listen on every chapter before submission" },
          { label: "Distribution to 20+ platforms simultaneously" },
          { label: "100% royalties to author, no commission" },
        ]}
        imageSrc="/Rectangle 23830 (3).webp"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <CustomSection />
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question:
              "How much does professional audiobook narration cost?",
            answer:
              "Cost depends on manuscript word count, the narrator selected, and how much production work is involved. We quote flat-rate, with no hidden fees and no royalty commission taken out of what you earn afterward.",
          },
          {
            question: "How long does audiobook production take?",
            answer:
              "Typically four to eight weeks from manuscript to a live, distributed title, covering script prep, narrator casting, recording, editing and mastering, quality control, and platform submission. Longer manuscripts or in-demand narrators can shift that timeline.",
          },
          {
            question: "Can I narrate my own audiobook?",
            answer:
              "Yes. We support author-narrated audiobooks with coaching, technical setup guidance, chapter-by-chapter review, and full post-production, so your home recordings meet ACX and platform quality standards and pass review the first time.",
          },
          {
            question:
              "Do you offer audiobook editing without a full production package?",
            answer:
              "Yes, if you've already recorded your own audiobook, we can handle just the cleanup, mixing, mastering to ACX spec, and file formatting as a standalone service.",
          },
          {
            question: "Which platforms will my audiobook be distributed to?",
            answer:
              "Audible (ACX), Apple Books, Google Play Books, Spotify, Storytel, Kobo Audiobooks, Scribd, OverDrive, and additional platforms simultaneously, or a narrower, non-exclusive release if you'd rather skip ACX exclusivity.",
          },
          {
            question:
              "Do I keep my audiobook rights and royalties?",
            answer:
              "Completely. We charge a flat production fee and take no commission. Every royalty from every platform goes to you.",
          },
          {
            question:
              "Do you produce children's audiobooks?",
            answer:
              "Yes, narrators who specialize in engaging young listeners, covering picture books through middle-grade fiction, with the character voices and pacing that keep a young audience listening.",
          },
          {
            question:
              "Do you handle nonfiction and business audiobook narration?",
            answer:
              "Yes. Nonfiction narration is a different skill from fiction; it's about sounding credible and clear rather than performative, and we cast and produce accordingly.",
          },
          {
            question:
              "What if my audiobook keeps getting rejected by ACX for technical issues?",
            answer:
              "That's almost always a mastering spec issue: loudness, noise floor, or file formatting not matching ACX's requirements exactly. Our post-production and file formatting service is built specifically to fix that and get you approved on resubmission.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription={
          <>
            <ul className="list-outside space-y-2 text-left">
              <li>Manuscript preparation and narration script</li>
              <li>Narrator matching and sample auditions</li>
              <li>Certified studio or guided home recording</li>
              <li>Professional audio editing and cleaning</li>
              <li>Full mastering to ACX specification</li>
              <li>QC listen on every chapter before submission</li>
              <li>Distribution to 20+ platforms simultaneously</li>
              <li>100% royalties to author, no commission</li>
            </ul>
          </>
        }
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Results"
        title="What Authors Say"
        description=""
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I had no idea how technical the ACX process was until I tried doing it myself and hit a wall. They took it over completely, matched me with a narrator whose voice was perfect for my thriller, managed the whole recording, and delivered an approved audiobook in six weeks. My Audible sales surprised me from month one.",
            name: "Samantha Raymond",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "I wanted to narrate my own business book but had no idea how to make it sound professional. The coaching session alone changed how I paced the material. Post-production turned my home recordings into something that sounds studio-made, approved on first submission.",
            name: "David Carl",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "My memoir is deeply personal, and finding the right narrator felt intimidating. They sent me three sample auditions matched to the emotional tone of the book. The one I picked brought a warmth to my story I honestly didn't expect.",
            name: "Lindy Ornald",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="READY TO PUBLISH YOUR BOOK?"
        description="Tell us where you are and where you want to go. As a self-publishing company built for authors, NexiFire Publishing will design the right plan, bring in the right specialists, and help you move forward with confidence, whether this is your first book or your fifth."
        buttonLable="Get My Free Audiobook Quote"
      />
    </section>
  );
};

export default page;
