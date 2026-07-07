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
  if (width >= 1280) {
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

  const autoRotateKey = `${cardsPerView}:${maxIndex}`;

  useEffect(() => {
    if (cardsPerView === 1) {
      return;
    }

    if (maxIndex === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoRotateKey]);

  const slideWidth = 100 / cardsPerView;

  return (
    <section
      id="our-book-genre"
      className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-18"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex w-full max-w-[1380px] flex-col gap-6 sm:gap-8 xl:flex-row xl:items-center xl:justify-between xl:gap-12 2xl:gap-14"
      >
        <motion.div
          variants={itemVariants}
          className="flex w-full max-w-[340px] flex-col items-start text-left sm:max-w-[560px] xl:max-w-[400px] 2xl:max-w-[480px] max-sm:mx-auto max-sm:items-center max-sm:text-center"
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

          <h2 className="project-h2 block w-full max-w-full text-left leading-[1.05] max-sm:mt-1 max-sm:text-center">
            We Publish Every Genre
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex w-full flex-col gap-4 sm:gap-5 xl:max-w-[760px] 2xl:max-w-[920px]"
        >
          <div className="genre-scroll-view -mx-4 flex gap-3 overflow-x-auto overflow-y-hidden px-4 pb-2 sm:hidden">
            {genres.map((genre) => (
              <motion.div
                key={genre.title}
                variants={itemVariants}
                className="w-[78vw] min-w-[250px] max-w-[280px] shrink-0 snap-start first:ml-0"
              >
                <div className="relative flex min-h-[140px] flex-col items-center justify-center overflow-hidden rounded-[18px] px-5 py-6 text-center">
                  <Image
                    src="/Frame 2147225705.png"
                    alt=""
                    fill
                    sizes="(max-width: 639px) 78vw, 0px"
                    className="absolute inset-0 h-full w-full object-fill"
                  />
                  <Image
                    src={genre.icon}
                    alt={genre.title}
                    width={30}
                    height={30}
                    sizes="48px"
                    className="relative z-10 h-11 w-11 object-contain"
                  />
                  <h3 className="relative z-10 mt-4 text-[1.15rem] font-semibold leading-none tracking-[-0.03em] text-[#282828]">
                    {genre.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden w-full max-w-[360px] overflow-hidden sm:block sm:max-w-[760px] md:max-w-[920px] xl:max-w-none">
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
                  className="shrink-0 px-2 sm:px-2.5 md:px-3"
                >
                  <div
                    className="relative flex min-h-[148px] flex-col items-center justify-center overflow-hidden rounded-[18px] px-5 py-6 text-center sm:min-h-[162px] sm:px-6 sm:py-7 md:min-h-[170px] lg:min-h-[178px] lg:py-8"
                  >
                    <Image
                      src="/Frame 2147225705.png"
                      alt=""
                      fill
                      sizes="(max-width: 1023px) 50vw, 33vw"
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                    <Image
                      src={genre.icon}
                      alt={genre.title}
                      width={30}
                      height={30}
                      sizes="52px"
                      className="relative z-10 h-11 w-11 object-contain sm:h-12 sm:w-12 md:h-[52px] md:w-[52px]"
                    />
                    <h3 className="relative z-10 mt-4 text-base font-semibold leading-none tracking-[-0.03em] text-[#282828] sm:mt-5 sm:text-lg md:text-xl lg:text-2xl">
                      {genre.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .genre-scroll-view {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          touch-action: pan-x;
        }

        .genre-scroll-view::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default OurBookGenre;
