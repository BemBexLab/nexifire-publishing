"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import TextFluxUnveil from "./TextFluxUnveil";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type Logo = {
  id: number;
  name?: string;
  src: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string | React.ReactNode;
  logos?: Logo[];
  buttonLabel?: string;
  buttonHref?: string;
};

const defaultLogos: Logo[] = [
  {
    id: 1,
    src: "/clients/clients01.webp",
  },
  {
    id: 2,
    src: "/clients/clients02.webp",
  },
  {
    id: 3,
    src: "/clients/clients03.webp",
  },
  {
    id: 4,
    src: "/clients/clients04.webp",
  },
  {
    id: 5,
    src: "/clients/clients05.webp",
  },
  {
    id: 6,
    src: "/clients/clients06.webp",
  },
  {
    id: 7,
    src: "/clients/clients07.webp",
  },
  {
    id: 8,
    src: "/clients/clients08.webp",
  },
];

const defaultEyebrow = "";
const defaultTitle = "Default";
const defaultDescription =
  "This is Default Text Fix the Hero Section";
const defaultButtonLabel = "Start Your Publishing Journey";
const defaultButtonHref = "/contact";

const heroContainerVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const logoBarVariants: Variants = {
  hidden: { opacity: 0, y: 36, scaleX: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scaleX: 1,
    transition: {
      duration: 0.75,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const logoItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 0.7,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.65 + (index % 6) * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const PageHero = ({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  description = defaultDescription,
  logos = defaultLogos,
  buttonLabel = defaultButtonLabel,
  buttonHref = defaultButtonHref,
}: PageHeroProps) => {
  const hasEyebrow = eyebrow.trim().length > 0;
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-white">
      <div className="relative max-w-full">
        <motion.div
          className="shape-section relative flex min-h-[520px] flex-col items-center overflow-hidden px-4 pb-28 pt-34 text-black sm:min-h-[600px] sm:px-8 sm:pb-32 sm:pt-28 md:px-10 md:pb-36 lg:min-h-[550px] lg:px-14 lg:pb-40 lg:pt-45"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/Rectangle 23820.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover"
            aria-hidden="true"
          />
          {hasEyebrow && (
            <motion.div
              variants={heroItemVariants}
              className="font-mulish relative z-10 mx-auto w-fit rounded-[8px] px-4 py-3 text-sm sm:text-base md:px-5 md:text-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text={eyebrow} />
            </motion.div>
          )}
          <motion.h1
            variants={heroItemVariants}
            className="font-jakarta relative isolate z-10 mx-auto mt-5 max-w-[1040px] whitespace-pre-line text-center text-[1.5rem] font-medium uppercase leading-[0.95] [word-spacing:0.5rem] tracking-[-0.05em] text-black sm:text-[2.5rem] sm:leading-[1.02] sm:tracking-[-0.04em] xl:max-w-[1200px] xl:text-[3.35rem] 2xl:text-[4.05rem]"
          >
            <Image
              src="/Ellipse 19.png"
              alt=""
              width={500}
              height={500}
              className="pointer-events-none rotate-2 absolute left-1/2 top-10 -z-10 w-[260px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[350px] md:w-[350px] lg:w-[400px]"
              aria-hidden="true"
            />
            {title}
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="font-jakarta relative z-10 mx-auto mt-4 max-w-[1190px] whitespace-pre-line text-center text-base leading-[1.7] [word-spacing:0.3rem] text-[#777777] sm:text-lg md:leading-[1.65]"
          >
            {description}
          </motion.p>
          <motion.div
            variants={heroItemVariants}
            className="relative z-10 mt-8"
          >
            <Link
              href={buttonHref}
              className="inline-flex min-h-[52px] items-center gap-1 rounded-[10px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 text-sm font-light text-white shadow-[0_10px_24px_rgba(178,64,2,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(178,64,2,0.34)] sm:px-6 sm:text-base"
            >
              <span>{buttonLabel}</span>
              <span
                aria-hidden="true"
                className="text-base leading-none sm:text-lg"
              >
                <GoArrowUpRight className="text-white size-6" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 z-50 flex w-screen -translate-x-1/2 justify-center overflow-hidden"
          variants={logoBarVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="logo-slider-cut relative h-[58px] w-screen overflow-hidden bg-white sm:h-[70px] md:h-[84px] lg:h-[98px]">
            <div className="logo-track flex h-full w-max items-center">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  aria-hidden={groupIndex === 1}
                  className="logo-group flex h-full shrink-0 items-center gap-5 px-5 sm:gap-7 sm:px-8 lg:gap-9 lg:px-10"
                >
                  {marqueeLogos.map((logo, logoIndex) => (
                    <motion.div
                      key={`${groupIndex}-${logo.id}-${logoIndex}`}
                      custom={logoIndex}
                      variants={logoItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex min-w-[140px] shrink-0 items-center justify-center px-4 sm:min-w-[165px] sm:px-5 lg:min-w-[190px] lg:px-6"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name ? `${logo.name} logo` : `Client logo ${logo.id}`}
                        className="h-12 w-auto max-w-[130px] shrink-0 object-contain sm:h-14 sm:max-w-[150px] lg:max-w-[170px]"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .shape-section {
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            86% 100%,
            78% 86%,
            22% 86%,
            14% 100%,
            0 100%
          );
        }

        .logo-slider-cut {
          border: 0;
          clip-path: polygon(
            0 100%,
            0 100%,
            14% 100%,
            22% 0,
            78% 0,
            86% 100%,
            100% 100%,
            100% 100%
          );
        }

        .logo-slider-cut::after {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          z-index: 20;
          height: 4px;
          background: #ffffff;
          content: "";
          pointer-events: none;
        }

        .logo-track {
          animation: aboutLogoMarquee 36s linear infinite;
        }

        .logo-group {
          min-width: 100vw;
        }

        @keyframes aboutLogoMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }

        @media (max-width: 1024px) {
          .shape-section {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              88% 100%,
              79% 88%,
              21% 88%,
              12% 100%,
              0 100%
            );
          }

          .logo-slider-cut {
            clip-path: polygon(
              0 100%,
              0 100%,
              12% 100%,
              21% 0,
              79% 0,
              88% 100%,
              100% 100%,
              100% 100%
            );
          }
        }

        @media (max-width: 768px) {
          .shape-section {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              90% 100%,
              80% 90%,
              20% 90%,
              10% 100%,
              0 100%
            );
          }

          .logo-slider-cut {
            clip-path: polygon(
              0 100%,
              0 100%,
              10% 100%,
              20% 0,
              80% 0,
              90% 100%,
              100% 100%,
              100% 100%
            );
          }
        }

        @media (max-width: 640px) {
          .shape-section {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              92% 100%,
              81% 92%,
              19% 92%,
              8% 100%,
              0 100%
            );
          }

          .logo-slider-cut {
            clip-path: polygon(
              0 100%,
              0 100%,
              8% 100%,
              19% 0,
              81% 0,
              92% 100%,
              100% 100%,
              100% 100%
            );
          }
        }
      `}</style>
    </section>
  );
};

export default PageHero;
