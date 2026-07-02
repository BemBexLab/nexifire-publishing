"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextFluxUnveil from "./TextFluxUnveil";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const transparentIcon =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const services = [
  {
    iconSrc: "/image 2.png",
    title: "Book Cover Design",
    description:
      "Custom book covers designed to attract readers and boost sales.",
  },
  {
    iconSrc: "/image 2 (1).png",
    title: "Ghostwriting Services",
    description: "Bring your ideas to life with professional writing support.",
  },
  {
    iconSrc: "/image 2 (2).png",
    title: "Book Editing & Proofreading",
    description:
      "Polish your manuscript for clarity, accuracy, and readability.",
  },
  {
    iconSrc: "/image 2 (3).png",
    title: "Book Formatting",
    description:
      "Professional layouts optimized for print and digital publishing.",
  },
  {
    iconSrc: "/image 2 (4).png",
    title: "Book Video Trailer",
    description:
      "Engaging promotional videos that help market your book effectively.",
  },
  {
    iconSrc: "/image 2 (5).png",
    title: "Book Printing",
    description:
      "High-quality printing solutions for paperback and hardcover books.",
  },
  {
    iconSrc: "/image 2 (6).png",
    title: "Book Illustration",
    description:
      "Custom illustrations that enhance storytelling and visual appeal.",
  },
  {
    iconSrc: "/image 2 (7).png",
    title: "Audiobook Production",
    description: "Convert your book into a professionally narrated audiobook.",
  },
];

const HomeServices = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-x-0 bottom-[260px] top-0 opacity-90 sm:bottom-[275px] lg:bottom-[320px]"
        style={{
          backgroundImage: "url('/Frame 2147225705 (1).png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-12 pt-14 sm:px-6 sm:pb-14 md:px-10 md:pt-16 lg:px-16 lg:pb-24 lg:pt-20"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto flex w-full max-w-[320px] flex-col items-center text-center sm:max-w-[640px] lg:max-w-full"
        >
          <motion.div
            className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="SERVICES" />
          </motion.div>

          <h2 className="project-h2 block w-full max-w-full text-center">
            Everything You Need To Publish Successfully
          </h2>

          <p className="mt-4 max-w-full text-[#777777] sm:text-lg">
            A complete publishing ecosystem designed to help authors bring their
            books to life.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="mt-8 grid w-full max-w-[340px] grid-cols-1 gap-4 self-center sm:mt-10 sm:max-w-[760px] sm:grid-cols-2 md:max-w-[920px] lg:max-w-[1160px] lg:grid-cols-4 lg:gap-5"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="flex h-full w-full flex-col rounded-[18px] border border-white/65 bg-white/52 p-5 shadow-[0_10px_26px_rgba(120,92,70,0.08)] backdrop-blur-[4px] sm:p-6"
            >
              <Image
                src={service.iconSrc || transparentIcon}
                alt=""
                width={52}
                height={52}
                sizes="52px"
                className="h-[52px] w-[52px] object-contain"
              />
              <h3 className="mt-5 text-base font-semibold leading-tight text-[#282828] sm:mt-6 sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.55] text-[#444444]">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex w-full flex-col items-center sm:mt-14 lg:mt-16">
          <motion.div
            variants={itemVariants}
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
              <div className="max-w-[400px] text-white sm:max-w-[460px]">
                <h3 className="text-3xl font-light uppercase leading-[1.03] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                    Ready To Publish Your Book?
                </h3>

                <p className="mt-4 text-sm leading-[1.55] text-white sm:mt-5 sm:text-base">
                  Turn your manuscript into a professionally published book with
                  expert editing, design, distribution, and marketing support
                  from start to finish.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-sm font-medium text-white transition hover:brightness-[0.98] sm:w-fit sm:text-base"
                >
                  Submit Your Manuscript
                  <span className="ml-2 text-lg leading-none">
                    <MdOutlineArrowOutward />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeServices;
