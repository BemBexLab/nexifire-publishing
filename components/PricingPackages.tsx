"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

export type PricingPackage = {
  name: string;
  description: string;
  included: [string[], string[]];
};

type PricingPackagesProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  packages?: PricingPackage[];
};

const defaultEyebrow = "Pricing & Packages";
const defaultTitle = "Flexible Plans Tailored To Your Needs";
const defaultDescription =
  "Pricing may vary depending on the genre, page and word count, and your specific needs for publishing, marketing, or ghostwriting. For a personalized estimate and detailed consultation, click on 'Custom Quote' to speak with a publishing expert.";

const defaultPricingPackages: PricingPackage[] = [
  {
    name: "SILVER",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
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
      "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
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
      "Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum sed tortor parturient nisl.",
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
];

const IncludedItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-[1.5] text-[#8A8A8A] sm:text-base">
      <span className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[#E45C11] text-[#E45C11]">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 6.2 4.8 8.5 9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{text}</span>
    </li>
  );
};

const PricingPackages = ({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  description = defaultDescription,
  packages = defaultPricingPackages,
}: PricingPackagesProps) => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1540px]">
        <div className="mx-auto max-w-[1340px] text-center">
          <motion.div
            className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text={eyebrow} />
          </motion.div>

          <h2 className="project-h2 mt-5 leading-[1.06] tracking-[-0.05em]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-[920px] text-sm leading-[1.6] text-[#9A9A9A] sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-10 space-y-4 sm:space-y-5 lg:mt-12">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="overflow-hidden rounded-[24px] border border-[#F0E8E1] bg-[#FFFEFD] px-6 py-8 shadow-[0_14px_34px_rgba(41,27,16,0.06)] sm:px-8 sm:py-9 lg:px-12 lg:py-10 xl:px-14"
            >
              <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[460px_minmax(0,1fr)] xl:gap-20">
                <div className="flex flex-col items-start pt-1">
                  <h3 className="text-[2rem] font-normal uppercase leading-[0.95] tracking-[-0.04em] text-[#4A4A4A] sm:text-[2.5rem] xl:text-[2.7rem]">
                    {pkg.name}
                  </h3>

                  <p className="mt-5 max-w-full text-[15px] leading-[1.55] text-[#7E7E7E] sm:text-[17px]">
                    {pkg.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_10px_20px_rgba(178,64,2,0.2)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Custom Quote
                    <span className="ml-1.5 leading-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 18L18 6M18 15V6H9"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>

                <div>
                  <p className="w-fit bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] bg-clip-text text-[17px] font-semibold text-transparent">
                    Included:
                  </p>

                  <div className="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-2 xl:gap-x-16">
                    <ul className="space-y-3">
                      {pkg.included[0].map((item) => (
                        <IncludedItem key={item} text={item} />
                      ))}
                    </ul>

                    <ul className="space-y-3">
                      {pkg.included[1].map((item) => (
                        <IncludedItem key={item} text={item} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
