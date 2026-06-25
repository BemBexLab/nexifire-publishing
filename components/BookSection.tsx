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
    <section className="w-full bg-white px-4 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1380px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <motion.div
          variants={heroItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex w-full justify-center lg:w-[60%] lg:justify-start"
        >
          <div className="relative aspect-[1.48/1] w-full max-w-[900px]">
            <Image
              src={booksDisplay}
              alt="Books published by NexiFire Publishing"
              fill
              placeholder="blur"
              sizes="(max-width: 1023px) 100vw, 60vw"
              className="object-contain object-left"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={heroItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex w-full flex-col items-start text-left lg:w-[40%]"
        >
          <div
            className="flex mb-3 h-10 w-fit items-center rounded-[10px] px-4 text-base text-black md:px-5 md:text-lg"
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

          <h2 className="font-jakarta uppercase bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-transparent inline-block font-regular text-6xl">
            Books We Help Bring To Life
          </h2>

          <p className="body-copy mt-5 w-full text-[#777777]">
            Explore a collection of books published through NexiFire Publishing. From business and personal development to fiction and memoirs, we help authors create books that inspire, educate, and leave a lasting impact.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-[7px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-[0.98]"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.25-7.25v4.69a.75.75 0 001.5 0V6a.75.75 0 00-.75-.75H8.5a.75.75 0 000 1.5h4.69L5.22 13.72a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
