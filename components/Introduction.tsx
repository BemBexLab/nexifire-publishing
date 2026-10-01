"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

type IntroductionProps = {
  eyebrow?: string;
  title?: string;
  description?: string | React.ReactNode;
  imageSrc?: string;
};

const introEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const mediaVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    y: 18,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.88,
      ease: introEase,
    },
  },
};

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
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
      ease: introEase,
    },
  },
};

const Introduction = ({
  eyebrow,
  title = "Publish With Confidence",
  description = "",
  imageSrc = "",
}: IntroductionProps) => {
  const descriptionParts =
    typeof description === "string"
      ? description
          .split(/\n\s*\n/)
          .map((part) => part.trim())
          .filter(Boolean)
      : [];

  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-10">
      <motion.div
        className="mx-auto grid w-full max-w-[1450px] items-stretch gap-8 lg:min-h-[28rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:min-h-[30rem] xl:gap-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <motion.div
          variants={mediaVariants}
          className="relative order-2 aspect-[1.55/1] w-full lg:order-2 lg:self-center"
        >
          <div className="relative h-full w-full">
            {imageSrc ? (
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.86, ease: introEase, delay: 0.12 }}
                className="absolute inset-0"
              >
                <Image
                  src={imageSrc}
                  alt="Introduction visual"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.86, ease: introEase, delay: 0.12 }}
                className="absolute inset-0 flex items-center justify-center rounded-[20px] border border-dashed border-[#d8cabb] bg-[linear-gradient(180deg,#fffdfb_0%,#f8f0ea_100%)] text-center text-sm tracking-[0.18em] text-[#b6a08d] uppercase"
              >
                Add Introduction Image
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="order-1 w-full max-w-[720px] lg:order-1 lg:flex lg:max-w-none lg:flex-col lg:justify-center"
        >
          {eyebrow ? (
            <motion.div
              variants={itemVariants}
              className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text={eyebrow} />
            </motion.div>
          ) : null}

          <motion.h2
            variants={itemVariants}
            className={`project-h2 leading-[1.02] ${eyebrow ? "mt-5" : ""}`}
          >
            {title}
          </motion.h2>

          {typeof description === "string" ? (
            descriptionParts.map((part, index) => (
              <motion.p
                key={`${part.slice(0, 40)}-${index}`}
                variants={itemVariants}
                className={`max-w-[700px] text-base leading-[1.5] text-[#777777] sm:text-lg ${
                  index === 0 ? "mt-4" : "mt-3"
                }`}
              >
                {part}
              </motion.p>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="mt-4 max-w-[700px] text-base leading-[1.5] text-[#777777] sm:text-lg"
            >
              {description}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;
