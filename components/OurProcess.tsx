"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import TextFluxUnveil from "./TextFluxUnveil";

export type OurProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type OurProcessProps = {
  badgeText: string;
  title: string;
  description: string;
  steps: OurProcessStep[];
};

type ScrollState = {
  height: number;
  top: number;
  visible: boolean;
};

const dashedPaths = [
  "M174 142C240 142 274 166 322 212",
  "M548 214C648 214 684 118 742 118",
  "M940 118C1048 118 1092 152 1142 202",
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const headingClusterVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const headingRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const connectorVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 0.55,
    pathLength: 1,
    transition: {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const stepCardVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 40,
    x: index % 2 === 0 ? -20 : 20,
    rotate: index % 2 === 0 ? -1.8 : 1.8,
    scale: 0.95,
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

const stepPinVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.8,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stepContentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const stepTextVariants: Variants = {
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

const stepLayoutClasses = [
  {
    outerPosition: "xl:left-[32px] xl:top-[34px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
  {
    outerPosition: "xl:left-[313px] xl:top-[188px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
  {
    outerPosition: "xl:left-[710px] xl:top-[34px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
  {
    outerPosition: "xl:right-[32px] xl:top-[188px]",
    cardHeight: "xl:h-[160px]",
    pinPosition: "left-1/2 top-[-20px] -translate-x-1/2",
  },
];

const OurProcess = ({
  badgeText,
  title,
  description,
  steps,
}: OurProcessProps) => {
  const contentRefs = useRef<Record<string, HTMLParagraphElement | null>>({});
  const [scrollStates, setScrollStates] = useState<Record<string, ScrollState>>(
    {},
  );

  const displayedSteps = steps.map((step, index) => ({
    ...step,
    ...stepLayoutClasses[index % stepLayoutClasses.length],
  }));

  useEffect(() => {
    const updateScrollState = (key: string) => {
      const element = contentRefs.current[key];

      if (!element) {
        return;
      }

      const { clientHeight, scrollHeight, scrollTop } = element;
      const hasOverflow = scrollHeight - clientHeight > 4;
      const trackHeight = clientHeight;
      const thumbHeight = hasOverflow
        ? Math.max((clientHeight / scrollHeight) * trackHeight, 28)
        : trackHeight;
      const maxThumbTop = Math.max(trackHeight - thumbHeight, 0);
      const maxScrollTop = Math.max(scrollHeight - clientHeight, 1);
      const thumbTop = hasOverflow
        ? (scrollTop / maxScrollTop) * maxThumbTop
        : 0;

      setScrollStates((prev) => {
        const nextState = {
          height: thumbHeight,
          top: thumbTop,
          visible: hasOverflow,
        };

        const current = prev[key];
        if (
          current &&
          current.height === nextState.height &&
          current.top === nextState.top &&
          current.visible === nextState.visible
        ) {
          return prev;
        }

        return {
          ...prev,
          [key]: nextState,
        };
      });
    };

    const syncAll = () => {
      steps.forEach((step) => updateScrollState(step.number));
    };

    syncAll();
    window.addEventListener("resize", syncAll);

    return () => {
      window.removeEventListener("resize", syncAll);
    };
  }, [steps]);

  return (
    <section className="min-h-full overflow-hidden bg-[#fffaf6] px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:py-24">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-[1314px]"
      >
        <motion.div
          variants={headingClusterVariants}
          className="mx-auto max-w-[1260px] text-center"
        >
          <motion.div
            variants={headingRevealVariants}
            className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text={badgeText} />
          </motion.div>
          <motion.h2
            variants={headingRevealVariants}
            className="project-h2 block w-full max-w-full text-center"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={headingRevealVariants}
            className="mx-auto mt-4 max-w-[1050px] text-base leading-6 text-[#989391] sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>

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
              <motion.path
                key={path}
                variants={connectorVariants}
                d={path}
                stroke="#FF8A4A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10 10"
              />
            ))}
          </svg>

          <motion.div
            variants={cardsContainerVariants}
            className="grid gap-8 sm:grid-cols-2 sm:gap-10 xl:block"
          >
            {displayedSteps.map((step, index) => (
              <motion.article
                key={step.number}
                custom={index}
                variants={stepCardVariants}
                className={`relative rounded-[24px] bg-[#f6eee8] px-[14px] pb-[14px] pt-[40px] shadow-[0_8px_18px_rgba(73,47,27,0.06)] sm:h-[216px] xl:absolute xl:h-[220px] xl:w-[236px] ${step.outerPosition}`}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <motion.div
                  variants={stepPinVariants}
                  className={`pointer-events-none absolute z-20 ${step.pinPosition}`}
                >
                  <Image
                    src="/Frame 344.webp"
                    alt=""
                    width={58}
                    height={58}
                    sizes="56px"
                    className="h-[56px] w-[56px] object-contain drop-shadow-[0_10px_12px_rgba(0,0,0,0.22)]"
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.div
                  variants={stepContentVariants}
                  className={`flex h-full flex-col rounded-[16px] bg-white px-[14px] py-[14px] shadow-[0_2px_0_rgba(214,205,198,0.92),0_8px_15px_rgba(80,54,37,0.08)] sm:min-h-[162px] xl:min-h-0 ${step.cardHeight}`}
                >
                  <motion.div
                    variants={stepTextVariants}
                    className="text-2xl font-normal leading-none tracking-[-0.04em] text-[#ef6d31]"
                  >
                    {step.number}
                  </motion.div>
                  <motion.h3
                    variants={stepTextVariants}
                    className="mt-3 text-base font-semibold leading-[1.18] tracking-[-0.03em] text-[#4f4f4f] sm:text-md"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.div variants={stepTextVariants} className="relative mt-1 min-h-0 flex-1">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 right-0 top-0 w-[3px] rounded-full bg-[#dbd4ad]/35"
                    >
                      {scrollStates[step.number]?.visible && (
                        <span
                          className="absolute left-0 w-full rounded-full bg-[#b3a62f]"
                          style={{
                            height: `${scrollStates[step.number].height}px`,
                            transform: `translateY(${scrollStates[step.number].top}px)`,
                          }}
                        />
                      )}
                    </div>
                    <p
                      ref={(node) => {
                        contentRefs.current[step.number] = node;
                      }}
                      onScroll={() => {
                        const element = contentRefs.current[step.number];

                        if (!element) {
                          return;
                        }

                        const { clientHeight, scrollHeight, scrollTop } =
                          element;
                        const hasOverflow = scrollHeight - clientHeight > 4;
                        const trackHeight = clientHeight;
                        const thumbHeight = hasOverflow
                          ? Math.max(
                              (clientHeight / scrollHeight) * trackHeight,
                              28,
                            )
                          : trackHeight;
                        const maxThumbTop = Math.max(
                          trackHeight - thumbHeight,
                          0,
                        );
                        const maxScrollTop = Math.max(
                          scrollHeight - clientHeight,
                          1,
                        );
                        const thumbTop = hasOverflow
                          ? (scrollTop / maxScrollTop) * maxThumbTop
                          : 0;

                        setScrollStates((prev) => ({
                          ...prev,
                          [step.number]: {
                            height: thumbHeight,
                            top: thumbTop,
                            visible: hasOverflow,
                          },
                        }));
                      }}
                      className="process-step-scroll h-full overflow-y-auto pr-3 text-sm leading-[1.36] text-[#444444] sm:text-sm"
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        .process-step-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .process-step-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default OurProcess;
