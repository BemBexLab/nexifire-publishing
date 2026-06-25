"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import TextFluxUnveil from "./TextFluxUnveil";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const genres = [
  {
    title: "Fiction",
    icon: "/Rectangle 23818.svg",
  },
  {
    title: "Nonfiction",
    icon: "/Rectangle 23818 (1).svg",
  },
  {
    title: "Memoir",
    icon: "/Rectangle 23818 (2).svg",
  },
  {
    title: "Comic",
    icon: "/Rectangle 23818 (3).svg",
  },
  {
    title: "Children's",
    icon: "/Rectangle 23818 (4).svg",
  },
  {
    title: "Other",
    icon: "/Rectangle 23818 (5).svg",
  },
];

const OurBookGenre = () => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 md:px-10 lg:px-16 lg:py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex w-full max-w-[1360px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <motion.div
          variants={itemVariants}
          className="flex w-full max-w-[380px] flex-col items-start text-left"
        >
          <motion.div
            className="flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="Our Book Genre" />
          </motion.div>

          <h2 className="mt-4 text-4xl font-normal uppercase leading-[1.06] tracking-[-0.045em] text-[#434343] sm:text-6xl">
            We Publish
            <br />
            Every Genre
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-[880px] lg:grid-cols-3"
        >
          {genres.map((genre) => (
            <motion.div
              key={genre.title}
              variants={itemVariants}
              className="flex min-h-[148px] flex-col items-center justify-center rounded-[18px] border border-[#efe9e4] bg-white px-6 py-8 text-center shadow-[0_8px_24px_rgba(80,56,40,0.06)]"
            >
              <Image
                src={genre.icon}
                alt={genre.title}
                width={30}
                height={30}
                className="h-13 w-13 object-contain"
              />
              <h3 className="mt-5 text-lg font-medium leading-none tracking-[-0.03em] text-[#4a4a4a] sm:text-xl">
                {genre.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurBookGenre;
