"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

type ImageDescProps = {
  badgeText?: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
};

const imageDescEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const contentVariants: Variants = {
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
      ease: imageDescEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

const imageWrapVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    y: 18,
    scale: 0.98,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.84,
      ease: imageDescEase,
    },
  },
};

const ImageDesc = ({
  badgeText,
  title,
  paragraphs,
  listItems,
  imageSrc = "",
  imageAlt = "Publishing team",
  reverse = false,
}: ImageDescProps) => {
  return (
    <section className="bg-white px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <motion.div
        className={`mx-auto flex w-full max-w-[1540px] flex-col gap-8 lg:items-stretch lg:gap-8 xl:gap-10 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <motion.div
          variants={contentVariants}
          className="w-full min-w-0 lg:basis-[60%] lg:pt-6 lg:max-w-[60%] xl:pt-8"
        >
          {badgeText ? (
            <motion.div
              variants={revealItemVariants}
              className="mb-5 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-sm text-[#4E4741] sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text={badgeText} />
            </motion.div>
          ) : null}
          <motion.h2
            variants={revealItemVariants}
            className="project-h2 w-full tracking-[-0.055em]"
          >
            <span>{title}</span>
          </motion.h2>

          <motion.div
            variants={listVariants}
            className="mt-8 w-full space-y-3 text-base leading-[1.55] text-[#7E7E7E] sm:text-lg sm:leading-[1.6]"
          >
            {paragraphs.map((paragraph) => (
              <motion.p key={paragraph} variants={revealItemVariants}>
                {paragraph}
              </motion.p>
            ))}
            {listItems?.length ? (
              <motion.ul
                variants={listVariants}
                className="list-disc pl-5 text-base leading-[1.55] text-[#444444] sm:text-lg sm:leading-[1.6]"
              >
                {listItems.map((item) => (
                  <motion.li key={item} variants={revealItemVariants}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            ) : null}
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageWrapVariants}
          className="relative flex w-full max-w-none lg:basis-[40%] lg:max-w-[40%] lg:shrink-0 lg:self-stretch"
        >
          <motion.div
            whileHover={{
              y: -4,
              boxShadow: "0 16px 38px rgba(50,29,11,0.12)",
              transition: { duration: 0.24, ease: "easeOut" },
            }}
            className="relative w-full overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#f2e8df_0%,#e9ddd2_100%)] shadow-[0_10px_28px_rgba(50,29,11,0.08)] aspect-[0.84] lg:h-full lg:min-h-full lg:aspect-auto"
          >
            {imageSrc ? (
              <motion.div
                initial={{ scale: 1.06, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.92, ease: imageDescEase, delay: 0.1 }}
                className="absolute inset-0"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 1.03, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: imageDescEase, delay: 0.1 }}
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(180deg,#f4ebe2_0%,#e5d8ca_100%)] text-center text-sm tracking-[0.16em] text-[#b39d88] uppercase"
              >
                Add Image
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ImageDesc;
