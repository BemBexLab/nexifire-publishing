import FAQs from '@/components/FAQs'
import GetInTouchContact from '@/components/GetInTouchContact'
import OurBelieves from '@/components/OurBelieves'
import OurStory from '@/components/OurStory'
import PageHero from '@/components/PageHero'
import Portfolio from '@/components/Portfolio'
import PublishYourBook from '@/components/PublishYourBook'
import Testimonials from '@/components/Testimonials'
import WhoWeServe from '@/components/WhoWeServe'
import React from 'react'

const page = () => {
  return (
    <section className='overflow-hidden bg-white'>
        <PageHero
        eyebrow="About"
        title={`About NexiFire\nPublishing`}
        description="At NexiFire Publishing, we help authors turn their ideas into professionally published books that reach and inspire readers worldwide."
        buttonLabel="Start Your Publishing Journey"
      />
      <OurStory />
      <OurBelieves />
      <Portfolio />
      <div className="h-10" />
      <PublishYourBook
        title="Your Story Could Be Next"
        description="Whether you're writing your first manuscript or preparing your next release, NexiFire Publishing is ready to help you bring your vision to life."
        buttonLabel="Publish Your Book"
        buttonHref="/contact"
        backgroundImageSrc="/Frame 2147225865.png"
        backgroundAlt="Person Reading Book"
      />
      <div className="h-10" />
      <WhoWeServe />
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
      <FAQs
        badgeText="FAQs"
        title="Frequently Asked Questions"
        items={[
          {
            question: "How do I publish a book in Australia with NexiFire?",
            answer:
              "The process of publishing a book with NexiFire begins with a free, no-obligation consultation. We assess your manuscript, discuss your goals and budget, then let you know the right package and team.",
          },
          {
            question:
              "What's the difference between self-publishing and traditional publishing?",
            answer:
              "With traditional publishing, a publisher acquires your rights, controls the timeline, and pays royalties of 8-15%. Self-publishing lets you retain full rights, earn up to 70% royalties, and get your book to market on your own schedule, with professional support from a team like NexiFire handling the rest.",
          },
          {
            question:
              "Does NexiFire offer children's book publishing services in Australia?",
            answer:
              "Yes. NexiFire is one of the most reliable and leading children's book publishing companies in Australia. We offer full-colour illustration sourcing or coordination, age-appropriate formatting, picture book and early reader layouts, hardcover and softcover printing, and full national and international distribution through Booktopia, Amazon, and library networks.",
          },
          {
            question: "Can NexiFire produce an audiobook from my manuscript?",
            answer:
              "Absolutely. Our audiobook formation service covers everything: professional voice casting from our Australian narrator network or guidance for author-narrated recordings, studio-quality audio production, editing, mastering, and distribution to Audible, Apple Books, Google Play, Spotify, and Storytel.",
          },
          {
            question:
              "How much does it cost to self-publish a book in Australia?",
            answer:
              "NexiFire offers affordable book publishing packages in Australia, starting from entry-level eBook-only packages through to comprehensive hardcover and global distribution bundles. We provide transparent, flat-rate pricing. Contact us for a custom quote based on your manuscript length, genre, and publishing goals.",
          },
          {
            question:
              "Do I retain the rights to my book when publishing with NexiFire?",
            answer:
              "Yes, always. NexiFire is a publishing services company, not a rights-acquiring publisher. You retain 100% ownership of your manuscript, copyright, ISBN, and all derivative rights. This means you can take your book elsewhere at any time, license it internationally, or adapt it into other formats without restriction.",
          },
        ]}
        sidebarTitle="Do You Have More Questions?"
        sidebarDescription="Speak with the NexiFire team for clear answers, tailored guidance, and help choosing the right next step for your book."
        sidebarButtonLabel="Contact Us"
        sidebarButtonHref="/contact"
      />
      <GetInTouchContact
        backgroundClassName="bg-[#FDF7F4]"
        title="Ready To Publish Your Book?"
        description="Tell us where you are and where you want to go. NexiFire will design the system, align the right specialists, and help you move forward with confidence."
      />
    </section>
  )
}

export default page
