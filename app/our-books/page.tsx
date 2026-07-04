import BooksGrid from "@/components/BooksGrid";
import GetInTouchContact from "@/components/GetInTouchContact";
import PageHero from "@/components/PageHero";
import PublishYourBook from "@/components/PublishYourBook";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Professionally Published Books by NexiFire Publishing"
        title={`Discover Books We've Helped Bring to Life Across Every Genre`}
        description="Browse a growing collection of professionally published books created through our complete self-publishing services. Every project showcases our expertise in manuscript formatting, interior book design, ebook publishing, print-on-demand production, audiobook creation, and worldwide book distribution."
        buttonLabel="Publish Your Book"
      />
      <BooksGrid />
      <WhatsIncluded
        badgeText="Books Stand Out"
        title="Publishing Books That Stand Out on Every Platform"
        description={
          <div className="space-y-4">
            <p>
              Every successful book begins with a great story, but reaching
              readers requires much more than simply uploading a manuscript. At
              NexiFire Publishing, we guide Australian authors through every
              stage of professional self-publishing, combining editorial
              expertise, industry-standard production, and strategic publishing
              support to create books that compete confidently in today's
              marketplace.
            </p>
            <p>
              From manuscript formatting and book layout design to paperback,
              hardcover, ebook conversion, audiobook production, global
              distribution, and author marketing, our team ensures every title
              meets the publishing standards expected by readers and major
              retailers. Whether your book is available through Amazon, Apple
              Books, Kobo, Google Play Books, Booktopia, or international
              bookstores, our focus is delivering a professional product that
              authors are proud to publish.
            </p>
          </div>
        }
        imageSrc="/Rectangle 23830 (3).png"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <PublishYourBook
        title="Your Book Could Be Our Next Success Story"
        description="Join hundreds of authors who have trusted NexiFire Publishing to professionally publish, distribute, and promote their books worldwide. Whether you're writing your first manuscript or preparing your next release, we're here to help you publish with confidence."
        backgroundImageSrc="/Frame 2147225872.png"
        backgroundAlt="Book Reading"
        buttonLabel="Start Your Publishing Journey"
      />
      <Testimonials
        badgeText="Author Stories"
        title="What Australian Authors Say About NexiFire"
        description="Over 2,000 Australian authors have trusted NexiFire Publishing to bring their books to life. Here's what a few of them have to say."
        buttonLabel="View All Review"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I'd been sitting on my memoir manuscript for three years, afraid of the publishing process. NexiFire made it feel completely manageable. My editor was thoughtful, the cover design exceeded my expectations, and within 10 weeks, my book was on Booktopia and Amazon. I couldn't recommend them more.",
            name: "Sarah Phill",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a first-time children's book author, I was nervous about finding the right publishing company. NexiFire's children's publishing team understood exactly what illustrations my story needed and handled everything beautifully. My daughter's face when she held the printed book said it all.",
            name: "James Kelvin",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "My business book needed to look credible and professional to stand up next to traditionally published titles. NexiFire delivered on every front; the editing was sharp, the design was contemporary, and my book was in Dymocks within six weeks of final approval. Exceptional service.",
            name: "Dr. Priya Gary",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="Ready To Publish Your Book?"
        description="Whether you're planning to publish your first novel or expand your author catalogue, our portfolio demonstrates what's possible when experienced publishing specialists support your journey from manuscript to marketplace."
      />
    </section>
  );
};

export default page;
