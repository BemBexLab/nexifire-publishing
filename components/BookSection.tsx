"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import booksDisplay from "../public/196ebd2f-51ba-42c8-926d-bed044c542a7 1.png";
import TextFluxUnveil from "./TextFluxUnveil";

const sectionContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const sectionItemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
    scale: 0.94,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textClusterVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(8px)",
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BooksSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex w-full max-w-[1580px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16"
      >
        <motion.div
          variants={sectionItemVariants}
          className="flex w-full justify-center lg:w-[54%] lg:justify-start xl:w-[58%]"
        >
          <motion.div
            variants={imageRevealVariants}
            className="relative aspect-[1.48/1] w-full max-w-[620px] sm:max-w-[720px] md:max-w-[820px] lg:max-w-none"
          >
            <Image
              src={booksDisplay}
              alt="Books published by NexiFire Publishing"
              fill
              placeholder="blur"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 88vw, (max-width: 1279px) 54vw, 58vw"
              className="object-contain object-center lg:object-left"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionItemVariants}
          className="flex w-full max-w-[660px] flex-col items-start text-left lg:w-[46%] lg:max-w-none xl:w-[42%]"
        >
          <motion.div variants={textClusterVariants} className="flex w-full flex-col items-start">
            <motion.div
              variants={textRevealVariants}
              className="mb-3 flex h-10 w-fit items-center rounded-[10px] px-4 text-sm text-black sm:text-base md:px-5 md:text-lg"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text="Who We Are" />
            </motion.div>

            <motion.h2
              variants={textRevealVariants}
              className="project-h2 inline-block leading-[1.02]"
            >
              Australia's Most Trusted Book Publishing Partner
            </motion.h2>

            <motion.p
              variants={textRevealVariants}
              className="body-copy mt-4 w-full text-base leading-[1.65] text-[#777777] sm:mt-5 sm:text-lg lg:max-w-[38rem]"
            >
              NexiFire Publishing is a complete service, Australian-owned
              self-publishing company dedicated to helping writers of every
              background create professionally published books from their ideas.
              If this is your first time as an author with a debut memoir or you
              are an experienced writer expanding your catalogue, we provide the
              expertise, tools, and distribution reach to make your book a
              success.
            </motion.p>

            <motion.a
              variants={ctaVariants}
              href="#"
              className="mt-6 inline-flex min-h-[46px] items-center gap-2 rounded-[7px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-2.5 text-sm font-light text-white transition hover:brightness-[0.98] sm:text-base"
            >
              Start Your Publishing Journey
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
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
