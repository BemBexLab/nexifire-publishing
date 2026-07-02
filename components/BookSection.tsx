"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import booksDisplay from "../public/196ebd2f-51ba-42c8-926d-bed044c542a7 1.png";
import TextFluxUnveil from "./TextFluxUnveil";

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

export default function BooksSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1380px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
        <motion.div
          variants={heroItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex w-full justify-center lg:w-[54%] lg:justify-start xl:w-[58%]"
        >
          <div className="relative aspect-[1.48/1] w-full max-w-[620px] sm:max-w-[720px] md:max-w-[820px] lg:max-w-none">
            <Image
              src={booksDisplay}
              alt="Books published by NexiFire Publishing"
              fill
              placeholder="blur"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 88vw, (max-width: 1279px) 54vw, 58vw"
              className="object-contain object-center lg:object-left"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={heroItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex w-full max-w-[660px] flex-col items-start text-left lg:w-[46%] lg:max-w-none xl:w-[42%]"
        >
          <div
            className="mb-3 flex h-10 w-fit items-center rounded-[10px] px-4 text-sm text-black sm:text-base md:px-5 md:text-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil
              text="Who We Are"
              //   enabled={shouldAnimate}
            />
          </div>

          <h2 className="project-h2 inline-block leading-[1.02]">
            Books We Help Bring To Life
          </h2>

          <p className="body-copy mt-4 w-full text-base leading-[1.65] text-[#777777] sm:mt-5 sm:text-lg lg:max-w-[34rem]">
            Explore a collection of books published through NexiFire Publishing.
            From business and personal development to fiction and memoirs, we
            help authors create books that inspire, educate, and leave a lasting
            impact.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex min-h-[46px] items-center gap-2 rounded-[7px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-2.5 text-sm font-light text-white transition hover:brightness-[0.98] sm:text-base"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M18 15V6H9"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
