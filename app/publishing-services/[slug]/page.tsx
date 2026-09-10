import { notFound } from "next/navigation";

import FAQs from "@/components/FAQs";
import GetInTouchContact from "@/components/GetInTouchContact";
import ImageDesc from "@/components/ImageDesc";
import Introduction from "@/components/Introduction";
import OurProcess from "@/components/OurProcess";
import PageHero from "@/components/PageHero";
import PublishYourBook from "@/components/PublishYourBook";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChoose from "@/components/WhyChoose";
import { defaultWhoWeServeData } from "@/data/whoWeServe";
import Footer from "@/components/Footer";

import { publishingServicePageData, publishingServiceSlugs } from "./data";

export function generateStaticParams() {
  return publishingServiceSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function PublishingServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = publishingServicePageData[slug];

  if (!pageData) {
    notFound();
  }

  return (
    <section className="overflow-hidden bg-white">
      <PageHero {...pageData.hero} />
      <Introduction {...pageData.introduction} />
      <div className="bg-[#fffaf6] py-14 sm:py-16 md:py-20 lg:py-24">
        <OurProcess {...pageData.process} />
      </div>
      <WhyChoose {...pageData.whyChoose} />
      <PublishYourBook {...pageData.publishBanner} />
      <ImageDesc {...pageData.imageDesc} />
      <div className="h-20" />
      <div className="bg-[#FDF7F4]">
        <WhoWeServe {...(pageData.whoWeServe ?? defaultWhoWeServeData)} />
      </div>
      <WhatsIncluded {...pageData.whatsIncluded} />
      <FAQs {...pageData.faqs} />
      <Testimonials {...pageData.testimonials} />
      <GetInTouchContact {...pageData.contact} />
      <Footer {...pageData.footer} />
    </section>
  );
}
