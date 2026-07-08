import PageHero from "@/components/PageHero";
import PricingPackages from "@/components/PricingPackages";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden bg-white">
      <PageHero
        eyebrow="Pricing & Packages"
        title={`Flexible Plans Tailored to Your Needs`}
        description="Pricing may vary depending on the genre, page and word count, and your specific needs for publishing, marketing, or ghostwriting. For a personalised estimate and detailed consultation, click on 'Custom Quote' to speak with a publishing expert."
        buttonLabel="Publish Your Book"
      />
      <PricingPackages
        packages={[
          {
            name: "SILVER",
            description:
              "The perfect starting point for authors who have a finished manuscript and need professional publishing support to get their eBook live across all major platforms quickly and affordably.",
            included: [
              [
                "Author profile setup on major platforms",
                "Book outline creation or revision",
                "Manuscript review & feedback",
                "Line editing & professional proofreading",
                "Interior formatting & layout design",
                "Custom-designed book cover",
                "Publish on 40+ platforms (Amazon, B&N, Apple Books, Kobo, etc.)",
              ],
              [
                "Print-on-Demand integration",
                "Author bio creation",
                "Marketing consultation",
                "Access to Ink Founders author portal",
                "100% copyright ownership",
                "ISBN & barcode generation",
                "eBook, Paperback & Hardcover formats",
              ],
            ],
          },
          {
            name: "GOLD",
            description:
              "Ideal for authors who want a fully guided publishing experience with hands-on editorial support, professional cover design, and simultaneous eBook and print distribution through Amazon and global retailers.",
            included: [
              [
                "Amazon Author Central setup",
                "Outline creation or revision",
                "Manuscript review",
                "Line-by-line editing & proofreading",
                "Interior formatting & layout",
                "Custom book cover design",
                "Amazon Kindle & Print publishing",
              ],
              [
                "Global Print-on-Demand setup",
                "Author bio writing",
                "Personalized marketing consultation",
                "Access to Ink Founders author portal",
                "100% ownership & full copyright rights",
                "ISBN and barcode generation",
                "Available in eBook, Paperback & Hardcover",
              ],
            ],
          },
          {
            name: "PLATINUM",
            description:
              "The complete, premium publishing package for authors who want a professional ghostwriting and publishing experience from start to finish, with unlimited revisions, full creative collaboration, and every format covered.",
            included: [
              [
                "One-on-one interviews & story development",
                "Custom book outline creation",
                "Manuscript review",
                "Complete ghostwriting in your voice",
                "Unlimited revisions during writing",
                "Line editing & professional proofreading",
                "Interior formatting & layout design",
              ],
              [
                "Custom book cover design",
                "Amazon publishing (Kindle & Print)",
                "Print-on-Demand setup",
                "Author bio writing",
                "Marketing consultation sessions",
                "Access to Ink Founders author portal",
                "100% ownership & copyright rights",
              ],
            ],
          },
        ]}
      />
    </section>
  );
};

export default page;
