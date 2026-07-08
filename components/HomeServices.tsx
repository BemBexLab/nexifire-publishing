"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextFluxUnveil from "./TextFluxUnveil";

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const backgroundVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 0.9,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingClusterVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const headingRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(12px)",
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const servicesGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.18,
    },
  },
};

const serviceCardVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 40 + (index % 2) * 10,
    x: index % 2 === 0 ? -18 : 18,
    rotate: index % 2 === 0 ? -2.5 : 2.5,
    scale: 0.94,
    filter: "blur(10px)",
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const serviceCardContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const serviceCardTextVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const bannerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
    scale: 0.97,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const bannerContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
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

const transparentIcon =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const services = [
  {
    iconSrc: "/image 2.png",
    title: "Ghostwriting",
    description:
      "Our experienced ghostwriters work closely with you to capture your voice and structure your narrative.",
  },
  {
    iconSrc: "/image 2 (1).png",
    title: "Editing & Proofreading",
    description: "Our certified editorial team covers every stage, from developmental editing and line editing to meticulous proofreading.",
  },
  {
    iconSrc: "/image 2 (2).png",
    title: "Interior Formatting",
    description:
      "NexiFire's formatters prepare print ready interiors and EPUB/MOBI digital files optimised for all major e-readers.",
  },
  {
    iconSrc: "/image 2 (3).png",
    title: "Back Cover Design",
    description:
      "Our designers craft compelling back covers with sharp blurbs, author bios, barcode placement, and visual layouts.",
  },
  {
    iconSrc: "/image 2 (4).png",
    title: "eBook Publishing",
    description:
      "We handle EPUB3 conversion, metadata optimisation, ISBN assignment, and simultaneous listing across Kindle, Kobo, Apple Books, and Google Play Books.",
  },
  {
    iconSrc: "/image 2 (5).png",
    title: "Hardcover Printing",
    description:
      "Premium hardcover production using quality materials, full-colour dust jackets, and acid-free paper. We do print-on-demand and a full offset print run.",
  },
  {
    iconSrc: "/image 2 (6).png",
    title: "Global Distribution",
    description:
      "Get your book into readers' hands across 40+ countries. NexiFire connects your title to Amazon, Book Depository, Booktopia, Barnes & Noble, Ingram's network of 39,000 retail accounts, and major library systems, in both print and digital formats.",
  },
  {
    iconSrc: "/image 2 (7).png",
    title: "Audiobook Formation",
    description: "Our audiobook production service covers professional voice casting and distribution to Audible, Apple Books, Google Play, and Spotify.",
  },
];

const HomeServices = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <motion.div
          variants={backgroundVariants}
          className="absolute inset-x-0 bottom-[260px] top-0 opacity-90 sm:bottom-[275px] lg:bottom-[320px]"
          style={{
            backgroundImage: "url('/Frame 2147225705 (1).png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        />

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-12 pt-14 sm:px-6 sm:pb-14 md:px-10 md:pt-16 lg:px-16 lg:pb-24 lg:pt-20"
        >
          <motion.div
            variants={headingClusterVariants}
            className="mx-auto flex w-full max-w-[390px] flex-col items-center text-center sm:max-w-[640px] lg:max-w-full"
          >
            <motion.div
              variants={headingRevealVariants}
              className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text="What We Offer" />
            </motion.div>

            <motion.h2
              variants={headingRevealVariants}
              className="project-h2 block w-full max-w-full text-center sm:max-w-none"
            >
              Complete Book Publishing Services in Australia
            </motion.h2>

            <motion.p
              variants={headingRevealVariants}
              className="mt-4 max-w-[350px] text-[#777777] sm:max-w-full sm:text-lg"
            >
              From the start to the final sale, NexiFire takes care of every stage of your publishing journey. Our professional publishing services in Australia are created for authors who refuse to compromise on quality.
            </motion.p>
          </motion.div>

          <motion.div
            variants={servicesGridVariants}
            className="services-scroll-view mt-8 flex w-full max-w-none snap-x snap-mandatory gap-3 self-center overflow-x-auto overflow-y-hidden px-1 pb-3 sm:mt-10 sm:grid sm:max-w-[760px] sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 md:max-w-[920px] lg:max-w-[1860px] lg:grid-cols-4 lg:gap-5"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                custom={index}
                variants={serviceCardVariants}
                className="flex h-[238px] w-[78vw] min-w-[250px] max-w-[272px] snap-start flex-none flex-col rounded-[18px] border border-white/65 bg-white/52 p-4 shadow-[0_10px_26px_rgba(120,92,70,0.08)] backdrop-blur-[4px] first:ml-3 last:mr-3 sm:h-full sm:w-full sm:min-w-0 sm:max-w-none sm:flex-auto sm:p-6 sm:first:ml-0 sm:last:mr-0"
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: "0 18px 36px rgba(120,92,70,0.16)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <motion.div variants={serviceCardContentVariants} className="flex h-full flex-col">
                  <motion.div variants={serviceCardTextVariants}>
                    <Image
                      src={service.iconSrc || transparentIcon}
                      alt=""
                      width={52}
                      height={52}
                      sizes="52px"
                      className="h-[52px] w-[52px] object-contain"
                    />
                  </motion.div>
                  <motion.h3
                    variants={serviceCardTextVariants}
                    className="mt-3 min-h-[40px] text-base font-semibold leading-tight text-[#282828] sm:mt-6 sm:min-h-0 sm:text-lg"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    variants={serviceCardTextVariants}
                    className="services-description-scroll mt-2 flex-1 text-sm leading-[1.55] text-[#444444]"
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-12 flex w-full flex-col items-center sm:mt-14 lg:mt-16">
            <motion.div
              variants={bannerVariants}
              className="relative mt-12 w-full max-w-[360px] overflow-hidden rounded-[18px] border border-black/10 sm:mt-14 sm:max-w-[760px] lg:mt-16 lg:max-w-[1120px]"
              style={{
                backgroundImage: "url('/Frame 417.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.58)_44%,rgba(0,0,0,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.54)_32%,rgba(0,0,0,0.16)_62%,rgba(0,0,0,0.02)_100%)]" />
              <div className="relative z-10 flex min-h-[280px] w-full items-end px-5 py-6 sm:min-h-[320px] sm:px-8 sm:py-8 lg:min-h-[384px] lg:items-center lg:px-10">
                <motion.div
                  variants={bannerContentVariants}
                  className="max-w-[400px] text-white sm:max-w-[760px]"
                >
                  <motion.h3
                    variants={headingRevealVariants}
                    className="text-[1.8rem] font-light uppercase leading-[1.03] tracking-wide sm:text-[2.2rem] lg:text-[2.8rem]"
                  >
                    Nexifire provides services for Australian Authors
                  </motion.h3>

                  <motion.p
                    variants={headingRevealVariants}
                    className="mt-4 text-sm leading-[1.55] text-white sm:mt-5 sm:text-base"
                  >
                    We understand the Australian publishing landscape, from local booksellers and library networks to international Amazon rankings. Our team has published over 2,000 titles across every genre and format.
                  </motion.p>

                  <motion.a
                    variants={ctaVariants}
                    href="/contact"
                    className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-sm font-light text-white transition hover:brightness-[0.98] sm:w-fit sm:text-base"
                  >
                    Submit Your Manuscript
                    <span className="ml-2 text-lg leading-none">
                      <MdOutlineArrowOutward />
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        .services-scroll-view {
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x;
        }

        @media (max-width: 639px) {
          .services-scroll-view {
            scrollbar-width: thin;
            scrollbar-color: rgba(178, 64, 2, 0.72) rgba(178, 64, 2, 0.14);
          }

          .services-description-scroll {
            max-height: 92px;
            overflow-y: auto;
            padding-right: 0.35rem;
            scrollbar-width: thin;
            scrollbar-color: rgba(178, 64, 2, 0.68) rgba(178, 64, 2, 0.12);
          }

          .services-scroll-view::-webkit-scrollbar {
            height: 5px;
          }

          .services-scroll-view::-webkit-scrollbar-track {
            background: rgba(178, 64, 2, 0.14);
            border-radius: 999px;
          }

          .services-scroll-view::-webkit-scrollbar-thumb {
            background: rgba(178, 64, 2, 0.72);
            border-radius: 999px;
          }

          .services-description-scroll::-webkit-scrollbar {
            width: 4px;
          }

          .services-description-scroll::-webkit-scrollbar-track {
            background: rgba(178, 64, 2, 0.12);
            border-radius: 999px;
          }

          .services-description-scroll::-webkit-scrollbar-thumb {
            background: rgba(178, 64, 2, 0.68);
            border-radius: 999px;
          }
        }
      `}</style>
    </>
  );
};

export default HomeServices;
