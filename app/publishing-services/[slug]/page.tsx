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

import { publishingServicePageData, publishingServiceSlugs } from "./data";

export function generateStaticParams() {
  return publishingServiceSlugs.map((slug) => ({ slug }));
}

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
      <OurProcess {...pageData.process} />
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
    </section>
  );
}
