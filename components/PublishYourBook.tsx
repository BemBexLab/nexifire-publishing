"use client";

import { motion, type Variants } from "motion/react";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

type PublishYourBookProps = {
  title?: string;
  description?: string | React.ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
  backgroundImageSrc?: string;
  backgroundAlt?: string;
  overlayClassName?: string;
};

const bannerEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: bannerEase,
    },
  },
};

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: bannerEase,
      delay: 0.12,
    },
  },
};

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: bannerEase,
    },
  },
};

const defaultProps = {
  title: "Your Publishing Journey Starts Here",
  description:
    "From editing and design to distribution and promotion, we provide the expertise and support needed to bring your book to readers worldwide.",
  buttonLabel: "Publish Your Book",
  buttonHref: "#",
  backgroundImageSrc: "/Frame 2147225864.png",
  backgroundAlt: "Publishing banner background",
  overlayClassName:
    "bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.58)_44%,rgba(0,0,0,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.54)_32%,rgba(0,0,0,0.16)_62%,rgba(0,0,0,0.02)_100%)]",
};

const PublishYourBook = ({
  title = defaultProps.title,
  description = defaultProps.description,
  buttonLabel = defaultProps.buttonLabel,
  buttonHref = defaultProps.buttonHref,
  backgroundImageSrc = defaultProps.backgroundImageSrc,
  backgroundAlt = defaultProps.backgroundAlt,
  overlayClassName = defaultProps.overlayClassName,
}: PublishYourBookProps) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto flex w-full max-w-[1240px] flex-col items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={cardVariants}
          className="relative w-full overflow-hidden rounded-[18px] border border-black/10 sm:rounded-[20px] lg:rounded-[24px]"
          style={{
            backgroundImage: `url('${backgroundImageSrc}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          aria-label={backgroundAlt}
        >
          <motion.div
            variants={overlayVariants}
            className={`absolute inset-0 ${overlayClassName}`.trim()}
          />
          <div className="relative z-10 flex min-h-[320px] w-full items-end px-5 py-6 sm:min-h-[360px] sm:px-8 sm:py-8 md:min-h-[400px] md:px-10 lg:min-h-[384px] lg:items-center lg:px-10 lg:py-10 xl:min-h-[420px] xl:px-12">
            <motion.div
              variants={contentVariants}
              className="w-full max-w-[22rem] text-white sm:max-w-[45rem]"
            >
              <motion.h3
                variants={itemVariants}
                className="text-[1.8rem] font-light uppercase leading-[1.03] tracking-normal sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.6rem]"
              >
                {title}
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-full text-sm leading-[1.55] text-white sm:mt-5 sm:text-base md:text-lg"
              >
                {description}
              </motion.p>

              <motion.a
                variants={itemVariants}
                href={buttonHref}
                className="mt-6 inline-flex min-h-[46px] w-full items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-sm font-light text-white transition hover:brightness-[0.98] sm:w-auto sm:min-w-[190px] sm:px-6 md:min-h-[48px] md:text-base"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 12px 28px rgba(178,64,2,0.28)",
                }}
                whileTap={{ y: 0, scale: 0.985 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                {buttonLabel}
                <motion.span
                  className="ml-2 text-lg leading-none"
                  whileHover={{ x: 4, y: -2 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  <MdOutlineArrowOutward />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PublishYourBook;
