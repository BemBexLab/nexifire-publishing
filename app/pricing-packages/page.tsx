import PageHero from "@/components/PageHero";
import PricingPackages from "@/components/PricingPackages";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow=""
        title={`Pricing & Packages`}
        description=""
        buttonLabel="Publish Your Book"
      />
      <PricingPackages
      title="Flexible Publishing Plans Built Around Your Needs"
      description={<div className="space-y-3">
          <p className="">Every book is different, which is why NexiFire Publishing offers customized solutions based on your manuscript, publishing goals, and marketing requirements.</p>

          <p className="">Pricing may vary depending on your book’s genre, word count, page count, project complexity, and the specific publishing, marketing, or ghostwriting services you require.</p>

          <p className="">For a personalized estimate, select <b>Custom Quote</b> to speak with a NexiFire Publishing expert about your project.</p>
        </div>}
        packages={[
          {
            name: "SILVER",
            description:
              "Ideal for authors looking for professional Amazon publishing support.",
            included: [
              [
                "Amazon Author Central setup",
                "Book outline creation or revision",
                "Professional manuscript review",
                "Line-by-line editing & proofreading",
                "Interior formatting & layout",
                "Custom book cover design",
                "Amazon Kindle publishing",
                "Paperback & hardcover publishing",
              ],
              [
                
                "Print-on-Demand setup",
                "Professional author bio creation",
                "Publishing & marketing consultation",
                "Access to the NexiFire Author Portal",
                "100% copyright ownership",
                "100% author rights",
                "ISBN & barcode assistance",
                "eBook, Paperback & Hardcover formats"
              ],
            ],
          },
          {
            name: "GOLD",
            description:
              "Ideal for authors seeking wider distribution and greater global reach.",
            included: [
              [
                "Author profile setup across major publishing platforms",
                "Book outline creation or revision",
                "Comprehensive manuscript review & editorial feedback",
                "Professional line editing & proofreading",
                "Interior formatting & layout design",
                "Custom-designed book cover",
                "Publishing across 40+ platforms",
                "Distribution through Amazon, Barnes & Noble, Apple Books, Kobo, and other major platforms",
              ],
              [
                "Global Print-on-Demand setup",
                "Professional author bio writing",
                "Personalized publishing & marketing consultation",
                "Access to the NexiFire Author Portal",
                "100% ownership of your work",
                "100% copyright rights",
                "ISBN & barcode assistance",
                "eBook, Paperback & Hardcover formats"
              ],
            ],
          },
          {
            name: "Platinum",
            description:
              "Ideal for authors who need professional assistance turning their ideas or unfinished manuscript into a complete book.",
            included: [
              [
                "One-on-one author interviews",
                "Story development & concept planning",
                "Custom book outline development",
                "Comprehensive manuscript review",
                "Professional ghostwriting in your voice",
                "Collaborative manuscript development",
                "Revisions throughout the writing process",
                "Professional line editing & proofreading",
                "Interior formatting & layout design",
                "Custom book cover design",
              ],
              [
                "Amazon Kindle publishing",
                "Paperback & hardcover publishing",
                "Print-on-Demand setup",
                "Professional author bio writing",
                "Publishing & marketing consultation",
                "Access to the NexiFire Author Portal",
                "100% ownership of your manuscript",
                "100% copyright rights",
                "ISBN & barcode assistance"
              ],
            ],
          },
        ]}
      />
    </section>
  );
};

export default page;
