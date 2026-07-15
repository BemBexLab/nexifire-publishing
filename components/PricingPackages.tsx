"use client";

import { motion, type Variants } from "motion/react";
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
const defaultTitle = "Flexible Plans";
const defaultDescription =
  "Pricing may vary depending on the genre, page and word count, and your specific needs for publishing, marketing, or ghostwriting. For a personalised estimate and detailed consultation, click on 'Custom Quote' to speak with a publishing expert.";

const pricingEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const headerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: pricingEase,
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.78,
      ease: pricingEase,
    },
  },
};

const cardInnerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const packageListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

const defaultPricingPackages: PricingPackage[] = [
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
];

const IncludedItem = ({ text }: { text: string }) => {
  return (
    <motion.li
      variants={revealItemVariants}
      className="flex items-start gap-3 text-[15px] leading-[1.5] text-[#8A8A8A] sm:text-base"
    >
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
    </motion.li>
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
      <motion.div
        className="mx-auto w-full max-w-[1540px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
      >
        <motion.div
          className="mx-auto max-w-[1340px] text-center"
          variants={headerVariants}
        >
          <motion.div
            variants={revealItemVariants}
            className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text={eyebrow} />
          </motion.div>

          <motion.h2
            variants={revealItemVariants}
            className="project-h2 mt-5 leading-[1.06] tracking-[-0.05em]"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={revealItemVariants}
            className="mx-auto mt-5 max-w-[920px] text-sm leading-[1.6] text-[#9A9A9A] sm:text-base"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardsContainerVariants}
          className="mt-10 space-y-4 sm:space-y-5 lg:mt-12"
        >
          {packages.map((pkg) => (
            <motion.article
              key={pkg.name}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.24, ease: "easeOut" },
              }}
              className="overflow-hidden rounded-[24px] border border-[#F0E8E1] bg-[#FFFEFD] px-6 py-8 shadow-[0_14px_34px_rgba(41,27,16,0.06)] sm:px-8 sm:py-9 lg:px-12 lg:py-10 xl:px-14"
            >
              <motion.div
                variants={cardInnerVariants}
                className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[460px_minmax(0,1fr)] xl:gap-20"
              >
                <motion.div variants={cardInnerVariants} className="flex flex-col items-start pt-1">
                  <motion.h3
                    variants={revealItemVariants}
                    className="text-[2rem] font-normal uppercase leading-[0.95] tracking-[-0.04em] text-[#4A4A4A] sm:text-[2.5rem] xl:text-[2.7rem]"
                  >
                    {pkg.name}
                  </motion.h3>

                  <motion.p
                    variants={revealItemVariants}
                    className="mt-5 max-w-full text-[15px] leading-[1.55] text-[#7E7E7E] sm:text-[17px]"
                  >
                    {pkg.description}
                  </motion.p>

                  <motion.div variants={revealItemVariants}>
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
                  </motion.div>
                </motion.div>

                <motion.div variants={cardInnerVariants}>
                  <motion.p
                    variants={revealItemVariants}
                    className="w-fit bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] bg-clip-text text-[17px] font-semibold text-transparent"
                  >
                    Included:
                  </motion.p>

                  <div className="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-2 xl:gap-x-16">
                    <motion.ul variants={packageListVariants} className="space-y-3">
                      {pkg.included[0].map((item) => (
                        <IncludedItem key={item} text={item} />
                      ))}
                    </motion.ul>

                    <motion.ul variants={packageListVariants} className="space-y-3">
                      {pkg.included[1].map((item) => (
                        <IncludedItem key={item} text={item} />
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingPackages;
