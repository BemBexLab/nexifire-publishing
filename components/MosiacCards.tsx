"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

const checkIcon = "/Mask group.svg";

const writingThatReflectsYou = [
  "Your story, captured in your voice.",
  "Professional ghostwriting services Australia, Nexifire Publishing",
  "Non-disclosure agreements included",
  "Your name on the cover, always",
  "Full intellectual property transfer",
  "Dedicated ghostwriter assigned to your project",
];

const genreItems = [
  "Memoir & Personal Story",
  "Business & Leadership Books",
  "Self-Help & Personal Development",
  "Children's Books",
  "Ebook Ghostwriting",
  "Academic & Professional Books",
];

const writingQualityItems = [
  "100% original content",
  "No plagiarism",
  "Clear, engaging, and reader-focused writing",
];

const processItems = [
  "Concept discussion & project planning",
  "Outline creation & approval",
  "Writing & content development",
  "Client review & revisions",
  "Final delivery (ready for editing & publishing)",
];

const audienceItems = [
  "First-time authors",
  "Entrepreneurs & coaches",
  "Business owners",
];

const mosaicEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const introVariants: Variants = {
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
      ease: mosaicEase,
    },
  },
};

const cardsGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: mosaicEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

const CheckItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.li variants={revealItemVariants} className="flex items-start gap-3">
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: -6,
          transition: { duration: 0.18, ease: "easeOut" },
        }}
        className="mt-1 h-[18px] w-[18px] shrink-0"
      >
        <Image
          src={checkIcon}
          alt=""
          width={18}
          height={18}
          className="h-full w-full object-contain"
        />
      </motion.div>
      <span className="text-base leading-[1.5] text-[#444444] sm:text-md">
        {children}
      </span>
    </motion.li>
  );
};

const cardBaseClassName =
  "rounded-[22px] border border-[#EDE4DD] shadow-[0_10px_30px_rgba(60,35,12,0.08)]";

const MosiacCards = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="mx-auto max-w-[1440px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
      >
        <motion.div
          variants={introVariants}
          className="mx-auto max-w-[1090px] text-center"
        >
          <motion.div
            variants={revealItemVariants}
            className="mx-auto mb-6 flex w-fit items-center justify-center rounded-[9px] px-4 py-2 text-sm text-[#4E4741] sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.10) 0%, rgba(178, 64, 2, 0.00) 82%)",
            }}
          >
            <TextFluxUnveil text="Your Book, Written for You" />
          </motion.div>

          <motion.h2
            variants={revealItemVariants}
            className="project-h2 leading-[1.04] tracking-[-0.06em]"
          >
            Professional Ghostwriting Services in Australia
          </motion.h2>

          {/* <p className="mx-auto mt-5 max-w-[920px] text-base leading-[1.7] text-[#8B8B8B] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque
            habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum
            sed tortor parturient nisl. Posuere ridiculus adipiscing pulvinar
            suspendisse. Proin turpis in pharetra odio odio ullamcorper elit.
            Massa tristique nec in commodo.
          </p> */}
        </motion.div>

        <motion.div
          variants={cardsGridVariants}
          className="mt-12 grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5"
        >
          <motion.div
            variants={cardsGridVariants}
            className="flex h-full flex-col gap-4 lg:gap-5"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`${cardBaseClassName} flex flex-[0.9] flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <motion.h3
                variants={revealItemVariants}
                className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl"
              >
                Writing That Reflects You
              </motion.h3>
              <motion.p
                variants={revealItemVariants}
                className="mt-4 max-w-[500px] text-base leading-[1.6] text-[#444444] sm:text-md"
              >
                At Nexifire Publishing, we take the time to understand who you
                are, how you speak, what you want to say, and the readers you
                want to reach. The result is a book that truly feels like yours,
                because it is.
              </motion.p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`${cardBaseClassName} flex flex-[1.2] flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <motion.ul
                variants={listVariants}
                className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2"
              >
                {writingThatReflectsYou.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`${cardBaseClassName} flex flex-1 flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <motion.h3
                variants={revealItemVariants}
                className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl"
              >
                Real Australian Ghostwriters
              </motion.h3>
              <motion.p
                variants={revealItemVariants}
                className="mt-4 text-base leading-[1.6] text-[#444444] sm:text-md"
              >
                Our ghostwriters are based in Australia. They understand
                Australian readers, cultural context, colloquialisms, and
                storytelling sensibilities. You will not receive content written
                overseas and reworked; every word is written by a skilled local
                professional who understands your audience.
              </motion.p>
              {/* <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {processItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul> */}
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardsGridVariants}
            className="flex h-full flex-col gap-4 lg:gap-5 lg:pt-[2px]"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`${cardBaseClassName} flex flex-[1.15] flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <motion.h3
                variants={revealItemVariants}
                className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl"
              >
                Ghostwriting for Every Genre
              </motion.h3>
              <motion.p
                variants={revealItemVariants}
                className="mt-4 text-base leading-[1.6] text-[#444444] sm:text-md"
              >
                We Write the Books Australians Are Waiting to Read
                <br />
                From personal memoirs to business books, children&apos;s stories
                to self-help guides, our team includes experienced ghostwriters
                who specialise in the genre that matters to you.
              </motion.p>
              <motion.ul
                variants={listVariants}
                className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2"
              >
                {genreItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </motion.ul>
              {/* <ul className="mt-4 space-y-2.5">
                {writingQualityItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul> */}
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`${cardBaseClassName} flex flex-[0.75] flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <motion.h3
                variants={revealItemVariants}
                className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl"
              >
                Transparent Pricing for Every Budget
              </motion.h3>
              <motion.p
                variants={revealItemVariants}
                className="mt-4 max-w-[500px] text-base leading-[1.6] text-[#444444] sm:text-md"
              >
                We believe you should know what you are investing before you
                commit. Our packages are clearly priced, flexible, and can be
                customised to match the scope and complexity of your project.
              </motion.p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`${cardBaseClassName} flex flex-1 flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <motion.h3
                variants={revealItemVariants}
                className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl"
              >
                Why Ghostwriting?
              </motion.h3>
              <motion.p
                variants={revealItemVariants}
                className="mt-4 text-base leading-[1.6] text-[#444444] sm:text-md"
              >
                Many executives, professionals, and thought leaders use
                ghostwriting services to share their expertise and build
                authority. A book is one of the most effective ways to
                establish credibility in any industry, and you don&apos;t have to
                spend years writing it yourself.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MosiacCards;
