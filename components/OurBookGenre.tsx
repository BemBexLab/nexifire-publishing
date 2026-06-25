"use client";

import { useEffect, useState } from "react";
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

const getCardsPerView = (width: number) => {
  if (width >= 1024) {
    return 3;
  }

  if (width >= 640) {
    return 2;
  }

  return 1;
};

const OurBookGenre = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxIndex = Math.max(0, genres.length - cardsPerView);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (maxIndex === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [maxIndex]);

  const slideWidth = 100 / cardsPerView;

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
          className="flex w-full max-w-[480px] flex-col items-start text-left"
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

          <h2 className="block w-full max-w-full font-jakarta bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left text-[2.2rem] font-normal uppercase leading-[1.08] tracking-[-0.045em] text-transparent sm:text-[2.9rem] md:text-[3.6rem] lg:text-[4rem]">
            We Publish Every Genre
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex w-full flex-col gap-4 lg:max-w-[880px]"
        >
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * slideWidth}%` }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              {genres.map((genre) => (
                <motion.div
                  key={genre.title}
                  variants={itemVariants}
                  style={{ width: `${slideWidth}%` }}
                  className="shrink-0 px-2"
                >
                  <div
                    className="relative flex min-h-[178px] flex-col items-center justify-center overflow-hidden rounded-[18px] px-6 py-8 text-center"
                  >
                    <Image
                      src="/Frame 2147225705.png"
                      alt=""
                      fill
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                    <Image
                      src={genre.icon}
                      alt={genre.title}
                      width={30}
                      height={30}
                      className="relative z-10 h-13 w-13 object-contain"
                    />
                    <h3 className="relative z-10 mt-5 text-lg font-semibold leading-none tracking-[-0.03em] text-[#282828] sm:text-xl">
                      {genre.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* <div className="flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to genre slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[#b24002]"
                    : "w-2.5 bg-[#d9d2cb]"
                }`}
              />
            ))}
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurBookGenre;
