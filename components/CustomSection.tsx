"use client";

import { motion, type Variants } from "motion/react";

const narrationEase = [0.22, 1, 0.36, 1] as const;

const contentVariants: Variants = {
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
      ease: narrationEase,
    },
  },
};

const CustomSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-[-140px] -z-10 h-[360px] w-[360px] rounded-full bg-[#ff5b01]/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] right-[-80px] -z-10 h-[420px] w-[420px] rounded-full bg-[#b24002]/[0.06] blur-3xl"
      />

      <motion.div
        className="mx-auto w-full max-w-[1380px]"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-[28px] border border-[#eee4dc] bg-[linear-gradient(135deg,#fffdfa_0%,#fff7f0_100%)] px-6 py-8 shadow-[0_18px_48px_rgba(77,42,15,0.08)] sm:px-10 sm:py-10 lg:px-14 lg:py-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-68px] top-[-68px] h-[220px] w-[220px] rounded-full border-[28px] border-[#ff5b01]/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-90px] left-[38%] h-[180px] w-[180px] rounded-full border border-[#b24002]/10"
          />

          <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
            <motion.div variants={itemVariants}>
              <div className="mb-5 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)]" />
              <h2 className="max-w-[520px] bg-[linear-gradient(90deg,#282828_0%,#8C8C8C_100%)] bg-clip-text text-3xl font-medium leading-[1.04] tracking-[-0.055em] text-transparent sm:text-4xl lg:text-[2.8rem]">
                Audiobook Narration Services Across the USA
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative border-l-2 border-[#ff5b01]/25 pl-5 text-base font-light leading-[1.75] text-[#6f6a66] sm:pl-7 sm:text-lg"
            >
              <p>
                While our production team works with authors nationwide, we work directly with clients based in Miami, Florida, and across the country; the process is the same whether we're coordinating a studio session locally or managing everything remotely for an author three time zones away.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomSection;
