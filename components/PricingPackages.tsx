"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextFluxUnveil from "./TextFluxUnveil";

type PricingPackage = {
  name: string;
  description: string;
  included: [string[], string[]];
};

const pricingPackages: PricingPackage[] = [
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
    <li className="flex items-start gap-2 text-sm leading-[1.55] text-[#8E8E8E] sm:text-base">
      <span className="mt-[2px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#B24002] text-xs text-[#B24002]">
        ✓
      </span>
      <span>{text}</span>
    </li>
  );
};

const PricingPackages = () => {
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
            <TextFluxUnveil text="Pricing & Packages" />
          </motion.div>

          <h2 className="project-h2 mt-5 leading-[1.06] tracking-[-0.05em]">
            Flexible Plans Tailored To Your Needs
          </h2>

          <p className="mx-auto mt-5 max-w-[920px] text-sm leading-[1.6] text-[#9A9A9A] sm:text-base">
            "Pricing may vary depending on the genre, page and word count, and
            your specific needs for publishing, marketing, or ghostwriting. For
            a personalized estimate and detailed consultation, click on 'Custom
            Quote' to speak with a publishing expert."
          </p>
        </div>

        <div className="mt-10 space-y-4 sm:space-y-5 lg:mt-12">
          {pricingPackages.map((pkg) => (
            <article
              key={pkg.name}
              className="rounded-[18px] border border-[#F1ECE8] bg-white px-6 py-7 shadow-[0_10px_28px_rgba(41,27,16,0.06)] sm:px-8 lg:px-10 lg:py-8 xl:px-12"
            >
              <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-16">
                <div className="pt-1">
                  <h3 className="text-3xl font-normal uppercase leading-none text-[#4A4A4A] sm:text-4xl">
                    {pkg.name}
                  </h3>

                  <p className="mt-4 max-w-[210px] text-sm leading-[1.55] text-[#777777] sm:max-w-[280px] sm:text-base lg:max-w-[240px] xl:max-w-[255px]">
                    {pkg.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center justify-center rounded-[7px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-4 py-[9px] text-sm font-light text-white shadow-[0_8px_18px_rgba(178,64,2,0.2)]"
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
                  <p
                    className="w-fit bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] bg-clip-text text-sm font-semibold text-transparent sm:text-base"
                  >
                    Included:
                  </p>

                  <div className="mt-3 grid gap-x-10 gap-y-2 sm:grid-cols-2 xl:gap-x-14">
                    <ul className="space-y-2">
                      {pkg.included[0].map((item) => (
                        <IncludedItem key={item} text={item} />
                      ))}
                    </ul>

                    <ul className="space-y-2">
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
