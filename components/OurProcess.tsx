"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TextFluxUnveil from "./TextFluxUnveil";

const processSteps = [
  {
    number: "01",
    title: "Submit Your Manuscript",
    description:
      "Share your manuscript, book idea, or draft with our publishing team for evaluation.",
    outerPosition: "xl:left-[32px] xl:top-[34px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
  {
    number: "02",
    title: "Review & Preparation",
    description:
      "Our experts review your work, provide recommendations, and prepare it through editing.",
    outerPosition: "xl:left-[328px] xl:top-[188px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
  {
    number: "03",
    title: "Publish & Distribute",
    description:
      "Your book is professionally published and made available through leading print.",
    outerPosition: "xl:left-[710px] xl:top-[34px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
  {
    number: "04",
    title: "Market & Grow",
    description:
      "We help promote your book, expand its reach, and build your author presence.",
    outerPosition: "xl:right-[32px] xl:top-[188px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
];

const dashedPaths = [
  "M174 142C240 142 274 166 322 212",
  "M548 214C648 214 684 118 742 118",
  "M940 118C1048 118 1092 152 1142 202",
];

const OurProcess = () => {
  return (
    <section className="min-h-full overflow-hidden bg-[#fffaf6] px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-[1314px]">
        <div className="mx-auto max-w-[860px] text-center">
          <motion.div
            className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="OUR PROCESS" />
          </motion.div>
          <h2 className="project-h2 block w-full max-w-full text-center">
            Our Publishing Process
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-6 text-[#989391] sm:text-lg">
            A streamlined journey designed to take your book from manuscript to published success.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16 xl:min-h-[420px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1314"
            height="420"
            viewBox="0 0 1314 420"
            fill="none"
            className="pointer-events-none absolute left-1/2 top-[8px] z-0 hidden h-auto w-full max-w-[1314px] -translate-x-1/2 xl:block"
            aria-hidden="true"
          >
            {dashedPaths.map((path) => (
              <path
                key={path}
                opacity="0.55"
                d={path}
                stroke="#FF8A4A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10 10"
              />
            ))}
          </svg>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 xl:block">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={`relative rounded-[24px] bg-[#f6eee8] px-[14px] pb-[14px] pt-[40px] shadow-[0_8px_18px_rgba(73,47,27,0.06)] sm:h-[216px] xl:absolute xl:h-[220px] xl:w-[236px] ${step.outerPosition}`}
              >
                <div
                  className={`pointer-events-none absolute z-20 ${step.pinPosition}`}
                >
                  <Image
                    src="/Frame 344.png"
                    alt=""
                    width={58}
                    height={58}
                    sizes="56px"
                    className="h-[56px] w-[56px] object-contain drop-shadow-[0_10px_12px_rgba(0,0,0,0.22)]"
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={`rounded-[16px] bg-white px-[14px] py-[14px] shadow-[0_2px_0_rgba(214,205,198,0.92),0_8px_15px_rgba(80,54,37,0.08)] sm:min-h-[162px] xl:min-h-0 ${step.cardHeight}`}
                  >
                  <div className="text-2xl font-normal leading-none tracking-[-0.04em] text-[#ef6d31]">
                    {step.number}
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-[1.18] tracking-[-0.03em] text-[#4f4f4f] sm:text-md">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-[1.36] text-[#444444] sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
