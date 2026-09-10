import BooksGrid from "@/components/BooksGrid";
import FAQs from "@/components/FAQs";
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
        eyebrow="Our Books"
        title={`Professionally Published Books by NexiFire Publishing`}
        description="Browse a growing collection of books published through our complete book publishing packages for authors, covering manuscript formatting, interior design, ebook conversion, print-on-demand, audiobook production, and global distribution."
        buttonLabel="Publish Your Book"
      />
      <BooksGrid />
      <WhatsIncluded
        badgeText=""
        title="Publishing Books That Stand Out on Every Platform"
        description={
          <div className="space-y-4">
            <p>
              A great story is the starting point. Getting it in front of readers takes professional book publishing services behind it, real editorial work, production that meets industry standards, and a distribution plan that actually reaches the platforms readers use.
            </p>
            <p>
              At NexiFire Publishing, we guide American authors through the full process, whichever path fits their book. That might mean a straightforward self-publishing package with ISBN included and full manuscript-to-market support, or something closer to hybrid publishing services, where you get more hands-on editorial and strategic input than typical self-publishing but keep the rights and control that traditional publishing takes away. If you're weighing traditional vs. self-publishing and not sure which fits, that's a conversation worth having before you pick a package, not after.
            </p>
            <p>
              From manuscript formatting and interior layout to paperback, hardcover, and ebook conversion, audiobook production, and book publishing with global distribution, every title is built to meet the standard readers and major retailers expect, on Amazon, Apple Books, Kobo, Google Play Books, and beyond.
            </p>
            <p>
              And regardless of package, you keep 100% of your royalty rights. We charge for the service, never a cut of what your book earns.
            </p>
          </div>
        }
        imageSrc="/Rectangle 23830 (3).webp"
        imageAlt="Complete publishing solutions"
        iconSrc="/Mask group.svg"
      />
      <PublishYourBook
        eyebrow="Publish With NexiFire"
        title="Your Book Could Be Our Next Success Story"
        description="Hundreds of authors have trusted NexiFire Publishing to professionally publish, distribute, and promote their books. Whether you're writing your first manuscript or planning your next release, we're here to help you publish with confidence."
        backgroundImageSrc="/Frame 2147225872.webp"
        backgroundAlt="Book Reading"
        buttonLabel="Start Your Publishing Journey"
      />
      <FAQs
        badgeText="Author Experiences"
        title="Frequently Asked Questions"
        items={[
          {
            question:
              "What's the difference between traditional and self-publishing?",
            answer:
              "Traditional publishing means a publisher takes on production costs and typically pays you a smaller royalty percentage in exchange for the risk they're carrying, and you usually give up creative control and rights along the way. Self-publishing means you own the whole process and 100% of your royalties, but you need the right team handling editing, formatting, and distribution so the finished book doesn't look self-published in a bad way. Hybrid publishing sits in between, with more editorial and strategic support than typical self-publishing, while you keep your rights.",
          },
          {
            question:
              "Does every publishing package include an ISBN?",
            answer:
              "Yes, every NexiFire self-publishing package includes ISBN assignment as standard, not an add-on you have to remember to ask for.",
          },
          {
            question:
              "Do your publishing packages include global distribution?",
            answer:
              "Yes. Every package includes distribution to major digital and print retailers, not just a single storefront listing.",
          },
          {
            question:
              "Is there a publishing package specifically for children's book authors?",
            answer:
              "Yes, our children's book publishing package covers illustration coordination, print-on-demand production, and distribution built around how children's books actually sell.",
          },
          {
            question: "Do I keep 100% of my royalties?",
            answer:
              "Yes, on every package. We charge a flat fee for the service, never a percentage of what your book earns.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <Testimonials
        badgeText="Author Stories"
        title="What American Authors Say About NexiFire"
        description="Thousands of American authors have trusted NexiFire Publishing to bring their books to life."
        buttonLabel="View All Reviews"
        buttonHref="#"
        testimonials={[
          {
            quote:
              "I'd been sitting on my memoir manuscript for three years, scared of the publishing process. NexiFire made it manageable. Thoughtful editing, a cover that exceeded what I expected, and within 10 weeks my book was live on Amazon.",
            name: "Sarah Phill",
            avatarSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "As a first-time children's book author, I was nervous about finding the right publisher. Their children's publishing team understood exactly what my story needed and handled everything beautifully.",
            name: "James Kelvin",
            avatarSrc:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
            featured: false,
            showAvatar: true,
          },
          {
            quote:
              "My business book needed to look credible next to traditionally published titles. NexiFire delivered on every front: sharp editing, contemporary design, and my book was on major retail shelves within six weeks of final approval.",
            name: "Dr. Priya Gary",
            avatarSrc:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
            featured: true,
            showAvatar: true,
          },
        ]}
      />
      <GetInTouchContact
        title="Ready to Publish Your Book?"
        description="Whether you're publishing your first novel or expanding your catalogue, our portfolio shows what's possible with real publishing specialists behind you, manuscript to marketplace."
      />
    </section>
  );
};

export default page;
