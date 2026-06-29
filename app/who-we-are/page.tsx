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
      <Testimonials />
      <FAQs />
      <GetInTouchContact />
    </section>
  )
}

export default page
