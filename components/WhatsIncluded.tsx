"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

type WhatsIncludedItem = {
  label: string;
};

type WhatsIncludedProps = {
  badgeText: string;
  title: string;
  description?: string | React.ReactNode;
  items?: WhatsIncludedItem[];
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  iconAlt?: string;
};

const includedEase = [0.22, 1, 0.36, 1] as const;

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
      ease: includedEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
    y: 18,
    scale: 0.985,
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
      ease: includedEase,
    },
  },
};

const IncludedIcon = ({ src, alt = "" }: { src: string; alt?: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="h-full w-full object-contain"
    />
  );
};

const WhatsIncluded = ({
  badgeText,
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  iconSrc,
  iconAlt = "",
}: WhatsIncludedProps) => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        className="mx-auto grid w-full max-w-[1460px] items-center gap-6 xl:items-stretch xl:grid-cols-[minmax(0,560px)_minmax(0,1fr)] xl:gap-6 2xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] 2xl:gap-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <motion.div
          variants={contentVariants}
          className="max-w-[680px] xl:flex xl:h-[460px] xl:max-w-none xl:flex-col 2xl:h-[520px]"
        >
          <motion.div
            variants={revealItemVariants}
            className="mb-6 flex w-fit items-center justify-center rounded-[9px] px-4 py-2 text-sm text-[#4E4741] sm:px-5 sm:text-base"
            style={{
              background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.10) 0%, rgba(178, 64, 2, 0.00) 82%)",
            }}
          >
            <TextFluxUnveil text={badgeText} />
          </motion.div>

          <motion.h2
            variants={revealItemVariants}
            className="project-h2 max-w-[14ch] leading-[0.98] tracking-[-0.06em] sm:max-w-[16ch] lg:max-w-[18ch] xl:max-w-none"
          >
            {title}
          </motion.h2>
          <div className="mt-5 overflow-y-auto pr-2 xl:min-h-0 xl:flex-1 [scrollbar-width:thin] [scrollbar-color:rgba(178,64,2,0.45)_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[rgba(178,64,2,0.45)]">
            <motion.div
              variants={revealItemVariants}
              className="text-base font-light leading-[1.45] text-[#444444] sm:text-lg"
            >
              {description}
            </motion.div>

            <motion.ul variants={listVariants} className="mt-2 space-y-2">
              {items?.map((item) => (
                <motion.li
                  key={item.label}
                  variants={revealItemVariants}
                  className="flex items-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -6,
                      transition: { duration: 0.18, ease: "easeOut" },
                    }}
                    className="mt-[1px] h-4 w-4 shrink-0"
                  >
                    <IncludedIcon src={iconSrc} alt={iconAlt} />
                  </motion.div>
                  <p className="ml-4 text-base font-light leading-[1.45] text-[#777777] sm:text-lg">
                    {item.label}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div variants={imageVariants} className="w-full">
          <motion.div
            whileHover={{
              y: -4,
              transition: { duration: 0.22, ease: "easeOut" },
            }}
            className="relative mx-auto w-full max-w-[760px] xl:ml-0 xl:mr-0 xl:h-[460px] 2xl:h-[520px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: includedEase, delay: 0.1 }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={520}
                sizes="(min-width: 1280px) 820px, (min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full object-contain"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsIncluded;
