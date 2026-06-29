"use client";

import { motion, type Variants } from "motion/react";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

type PublishYourBookProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  backgroundImageSrc?: string;
  backgroundAlt?: string;
  overlayClassName?: string;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
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
    <section>
      <div className="flex w-full flex-col items-center">
        <motion.div
          variants={itemVariants}
          className="relative w-3/4 overflow-hidden rounded-[18px] border border-black/10"
          style={{
            backgroundImage: `url('${backgroundImageSrc}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          aria-label={backgroundAlt}
        >
          <div className={`absolute inset-0 ${overlayClassName}`.trim()} />
          <div className="relative z-10 flex min-h-[300px] w-full items-end px-5 py-6 sm:min-h-[320px] sm:px-8 sm:py-8 lg:min-h-[384px] lg:items-center lg:px-7">
            <div className="max-w-1/3 text-white">
              <h3 className="text-[1.95rem] font-light uppercase leading-[1.03] tracking-[-0.05em] sm:text-[2.35rem] lg:text-[2.8rem]">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-[1.55] text-white/72 sm:mt-5">
                {description}
              </p>

              <a
                href={buttonHref}
                className="mt-6 inline-flex w-full items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-sm font-light text-white transition hover:brightness-[0.98] sm:w-1/2"
              >
                {buttonLabel}
                <span className="ml-2 text-lg leading-none">
                  <MdOutlineArrowOutward />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublishYourBook;
