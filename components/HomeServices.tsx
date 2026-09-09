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
    iconSrc: "/image 2.webp",
    title: "Manuscript Development & Ghostwriting Support",
    description:
      "Not sure your manuscript is ready, or still working from an idea instead of a draft? Our writers and story editors help shape, structure, or even ghostwrite your book so it's ready for the next stage.",
  },
  {
    iconSrc: "/image 2 (1).webp",
    title: "Professional Editing & Proofreading",
    description:
      "Every manuscript goes through developmental editing, line editing, and a final proofread by editors who work in your genre, so your book reads clean, tight, and professional before it ever reaches a reader.",
  },
  {
    iconSrc: "/image 2 (2).webp",
    title: "Interior Formatting for Print, Hardcover & Ebook",
    description:
      "We format your interior to meet Amazon KDP and IngramSpark specs across every edition, so your book looks properly published whether someone's holding it or reading it on a Kindle.",
  },
  {
    iconSrc: "/image 2 (3).webp",
    title: "Custom Book Cover Design & Illustration",
    description:
      "Your cover gets one shot to stop a scroll or catch an eye on a shelf. We design covers (and full interior illustrations for children's books) built to actually sell, not just look nice.",
  },
  {
    iconSrc: "/image 2 (4).webp",
    title: "ISBN Assignment & U.S. Copyright Office Registration",
    description:
      "We register your ISBN and file your copyright with the U.S. Copyright Office, so your book is legally protected and properly credited to you from day one.",
  },
  {
    iconSrc: "/image 2 (5).webp",
    title: "Print-on-Demand, Hardcover, Paperback & Ebook Production",
    description:
      "Whatever format your readers prefer, we produce it, print-on-demand, hardcover, paperback, or ebook, so you are never limited to just one edition.",
  },
  {
    iconSrc: "/image 2 (6).webp",
    title: "Audiobook Narration & Production",
    description:
      "We match you with a professional narrator or coach you through narrating it yourself, then handle recording, editing, and mastering to Audible (ACX) standards.",
  },
  {
    iconSrc: "/image 2 (7).webp",
    title: "Book Translation Into Multiple Languages",
    description:
      "Want your book read outside English-speaking markets? Our translators adapt your book into other languages while keeping your voice and message intact.",
  },

  {
    iconSrc: "/image 2.webp",
    title:
      "Digital Distribution to Amazon, Audible, Apple Books & 40+ Platforms",
    description:
      "We publish your book across every major platform readers actually use, simultaneously, so it's available worldwide from day one instead of trickling out over months.",
  },
  {
    iconSrc: "/image 2 (1).webp",
    title: "Retail & Bookstore Book Placement",
    description:
      "We pursue opportunities to get your book onto physical bookstore shelves, not just an online listing, so browsing readers can discover it too.",
  },
  {
    iconSrc: "/image 2 (2).webp",
    title: "Book Signing Event Coordination",
    description:
      "We help plan and coordinate signing events, handling venue outreach and logistics so you can focus on meeting your readers, not managing the details.",
  },
  {
    iconSrc: "/image 2 (3).webp",
    title: "Book Fair & Exhibition Placement",
    description:
      "We identify and secure spots at relevant book fairs and exhibitions, putting your title in front of industry contacts and readers actively looking for new books.",
  },
  {
    iconSrc: "/image 2 (4).webp",
    title: "Amazon A+ Content Optimization",
    description:
      "We build out enhanced Amazon product content, better images, layout, and copy, designed to turn browsers into buyers once they land on your book's page.",
  },
  {
    iconSrc: "/image 2 (5).webp",
    title: "Social Media Marketing, Reels & Video Content",
    description:
      "We create social content and promotional video built specifically to sell books, not just generate likes, so your launch keeps momentum well past week one.",
  },
  {
    iconSrc: "/image 2 (6).webp",
    title: "Author Website Design & Setup",
    description:
      "We build you a professional author website that showcases your book, your bio, and your future titles, your home base beyond any single retailer.",
  },
  {
    iconSrc: "/image 2 (7).webp",
    title: "Times Square Display",
    description:
      "Get your book featured on a digital billboard in Times Square, real-world visibility most authors never get access to.",
  },
  {
    iconSrc: "/image 2 (7).webp",
    title: "Amazon Paid Ads",
    description:
      "We run targeted Amazon PPC campaigns to put your book in front of buyers actively searching your category.",
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
            backgroundImage: "url('/Frame 2147225705 (1).webp')",
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
              Full-Service Book Publishing, All in One Company
            </motion.h2>

            <motion.p
              variants={headingRevealVariants}
              className="mt-4 max-w-[350px] text-[#777777] sm:max-w-full sm:text-lg"
            >
              Everything a self-publishing company should offer
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
                <motion.div
                  variants={serviceCardContentVariants}
                  className="flex h-full flex-col"
                >
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
                backgroundImage: "url('/Frame 417.webp')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.58)_44%,rgba(0,0,0,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.54)_32%,rgba(0,0,0,0.16)_62%,rgba(0,0,0,0.02)_100%)]" />
              <div className="relative z-10 flex min-h-[280px] w-full items-end px-5 py-6 sm:min-h-[320px] sm:px-8 sm:py-8 lg:min-h-[384px] lg:items-center lg:px-10">
                <motion.div
                  variants={bannerContentVariants}
                  className="max-w-[400px] text-white sm:max-w-[809px]"
                >
                  <motion.p
                    variants={itemVariants}
                    className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-white/80 sm:text-base"
                  >
                    Why Self-Publishing Wins Today
                  </motion.p>
                  <motion.h3
                    variants={headingRevealVariants}
                    className="text-[1.8rem] font-light uppercase leading-[1.03] tracking-wide sm:text-[2.2rem] lg:text-[2.8rem]"
                  >
                    Skip the Wait. Skip the Rejection.
                  </motion.h3>

                  <motion.p
                    variants={headingRevealVariants}
                    className="mt-4 text-sm leading-[1.55] text-white sm:mt-5 sm:text-base"
                  >
                    Traditional publishing can take years, rejects most
                    manuscripts, and leaves you with a small royalty share and
                    little control. Self-publishing gives you speed, ownership,
                    and a book available as a paperback, ebook, audiobook, and
                    translated edition, reaching more readers than a single
                    format ever could.
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
