"use client";

import { motion, type Variants } from "motion/react";

const distributionEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: distributionEase,
    },
  },
};

const PublishingDistribution = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffaf6] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-[-120px] -z-10 h-[360px] w-[360px] rounded-full bg-[#ff5b01]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#b24002]/[0.07] blur-3xl"
      />

      <motion.div
        className="mx-auto w-full max-w-[1380px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-[28px] border border-[#eaded4] bg-white px-6 py-8 shadow-[0_18px_50px_rgba(77,42,15,0.08)] sm:px-10 sm:py-10 lg:px-14 lg:py-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-90px] top-[-110px] h-[260px] w-[260px] rounded-full border-[32px] border-[#ff5b01]/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-80px] left-[42%] h-[180px] w-[180px] rounded-full border border-[#b24002]/10"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-24">
            <motion.div variants={itemVariants} className="relative">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)]" />
              <h2 className="max-w-[420px] bg-[linear-gradient(90deg,#282828_0%,#8C8C8C_100%)] bg-clip-text text-3xl font-medium leading-[1.03] tracking-[-0.055em] text-transparent sm:text-4xl lg:text-[2.8rem]">
                Audiobook Publishing &amp; Distribution
              </h2>
              <div className="mt-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-[#B24002]">
                <span className="h-px w-8 bg-[#B24002]/40" />
                Reach every listener
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative space-y-6 text-base font-light leading-[1.75] text-[#6f6a66] sm:text-lg"
            >
              <p>
                Getting a finished audio file onto Audible is one thing. Getting it onto Audible and Apple Books and Spotify and everywhere else, correctly formatted for each, is a different job, and it's the part most self-published authors underestimate.
              </p>

              <p>
                We handle submission to Audible and ACX, plus Spotify, Apple Books, and the rest of the 20+ platform list, whether you want ACX exclusivity or a wide, non-exclusive release. For nonfiction and business authors, we also make sure metadata and categories are built around how nonfiction listeners actually search, which is different from how fiction listeners browse.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PublishingDistribution;
