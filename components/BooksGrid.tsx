"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import TextFluxUnveil from "./TextFluxUnveil";

type BookItem = {
  title: string;
  author: string;
  imageSrc: string;
  amazonHref: string;
};

const books: BookItem[] = [
  {
    title: "The Bee's Colony",
    author: "Joel B. Gindo",
    imageSrc: "/books/image 65.png",
    amazonHref: "#",
  },
  {
    title: "The Labyrinth",
    author: "Keith Cuvo",
    imageSrc: "/books/image 65 (1).png",
    amazonHref: "#",
  },
  {
    title: "It Was Never You Fault",
    author: "Jerry L. Morgan",
    imageSrc: "/books/image 65 (2).png",
    amazonHref: "#",
  },
  {
    title: "Growing Together",
    author: "Allison Sullins",
    imageSrc: "/books/image 65 (3).png",
    amazonHref: "#",
  },
  {
    title: "Don't Cut The Grass",
    author: "K. Stephen",
    imageSrc: "/books/image 65 (5).png",
    amazonHref: "#",
  },
  {
    title: "God Carried Me",
    author: "Bertha Brooks",
    imageSrc: "/books/Bertha 1.png",
    amazonHref: "#",
  },
  {
    title: "El Color del Renacer",
    author: "Luz Diaz",
    imageSrc: "/books/Luis Diaz 1.png",
    amazonHref: "#",
  },
  {
    title: "The Time Capsule Mystery",
    author: "Jenny Lynn",
    imageSrc: "/books/Jenny Lynn 1.png",
    amazonHref: "#",
  },
  {
    title: "LAFLAPS",
    author: "Gary Alan Early",
    imageSrc: "/books/Laflaps 1.png",
    amazonHref: "#",
  },
  {
    title: "THROUGH THE EYE OF THE STORM",
    author: "Andre Goldson",
    imageSrc: "/books/The Storm 1.png",
    amazonHref: "#",
  },
  {
    title: "Fresh Paths Unfolding",
    author: "Sara Tessier",
    imageSrc: "/books/Sara 2.png",
    amazonHref: "#",
  },
  {
    title: "Forged in the Mountains",
    author: "Wilma Gibson Smith",
    imageSrc: "/books/Wilma 1.png",
    amazonHref: "#",
  },
  {
    title: "Discovering the Root Cause of Cancer",
    author: "Valerie B. Irons",
    imageSrc: "/books/Laflaps 1 (1).png",
    amazonHref: "#",
  },
  {
    title: "Dreams from my Grandfather",
    author: "A. D. Bradley",
    imageSrc: "/books/The Storm 1 (1).png",
    amazonHref: "#",
  },
  {
    title: "The Book of Unfolding Integration",
    author: "Anthony Deans",
    imageSrc: "/books/Sara 2 (1).png",
    amazonHref: "#",
  },
  {
    title: "Broken Dreams",
    author: "Bobby Bee",
    imageSrc: "/books/Wilma 1 (1).png",
    amazonHref: "#",
  },
  {
    title: "Hip Hop Hermeneutics",
    author: "Dr. Burton Leroy Mack",
    imageSrc: "/books/image 651.png",
    amazonHref: "#",
  },
  {
    title: "What The Hell is Wrong with My Dog",
    author: "Alisa Peterson-White",
    imageSrc: "/books/image 652.png",
    amazonHref: "#",
  },
  {
    title: "The Message of Faith And the Love of God From our Blessed Mother",
    author: "J. Bernard Reyes",
    imageSrc: "/books/image 653.png",
    amazonHref: "#",
  },
  {
    title: "The Bounce Back",
    author: "Craig Powell",
    imageSrc: "/books/image 654.png",
    amazonHref: "#",
  },
  {
    title: "The Publican",
    author: "David Nava Monreal",
    imageSrc: "/books/image 65 (4).png",
    amazonHref: "#",
  },
  {
    title: "The Buried Truth",
    author: "Scott J. Miller",
    imageSrc: "/books/image 65 (6).png",
    amazonHref: "#",
  },
  {
    title: "The Keeper of Tears",
    author: "John C. Blackford",
    imageSrc: "/books/image 655.png",
    amazonHref: "#",
  },
];

const BookGlow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="388"
    height="424"
    viewBox="0 0 388 424"
    fill="none"
    className="h-auto w-full"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <path
      opacity="0.1"
      d="M6.86328 393.263C27.0723 403.012 45.3699 412.887 61.7402 423.015H56.8574C35.2702 423.015 16.4919 410.985 6.86328 393.263ZM0 262.92C10.4144 270.35 22.1939 276.703 35.4824 281.753C119.726 313.766 183.189 345.212 225.263 380.801C241.141 394.232 253.932 408.216 263.636 423.015H182.057C177.815 418.862 173.314 414.775 168.554 410.749C129.569 377.773 73.049 348.587 0 319.542V262.92ZM0 135.753C13.8112 183.858 42.8805 225.406 96.4824 245.774C180.726 277.787 244.189 309.235 286.263 344.823C314.142 368.406 332.505 393.688 341.346 422.101C338.036 422.7 334.626 423.015 331.143 423.015H272.136C261.675 405.866 247.436 389.896 229.554 374.771C186.534 338.381 122.16 306.608 37.7861 274.546C23.4147 269.085 10.884 262.034 0 253.688V135.753ZM0 327.67C71.6484 356.306 126.549 384.878 164.263 416.779C166.703 418.844 169.069 420.923 171.364 423.015H75.5947C54.5748 409.166 30.1783 395.881 2.49023 382.848C0.872074 377.57 1.67507e-05 371.966 0 366.158V327.67ZM50.8896 0.30957C50.0738 19.0099 50.4964 38.0486 52.6182 56.7256C60.0412 122.065 88.3713 183.535 157.482 209.797C241.726 241.809 305.188 273.256 347.262 308.845C364.465 323.397 378.045 338.597 388 354.779V366.158C388 391.612 371.272 413.159 348.211 420.407C338.946 390.031 319.532 363.305 290.554 338.793C247.534 302.404 183.16 270.63 98.7861 238.567C36.7569 214.996 9.01454 161.831 0 102.583V56.8574C0 27.4716 22.2932 3.29226 50.8896 0.30957ZM111.928 0C112.27 7.05833 112.825 14.103 113.618 21.0967C121.041 86.5591 149.368 148.147 218.48 174.462C290.155 201.752 346.785 228.634 388 258.009V341.74C378.329 328.08 366.155 315.166 351.553 302.814C308.533 266.425 244.16 234.652 159.786 202.59C94.0034 177.592 66.7812 119.311 59.5645 55.7881C57.4694 37.3471 57.074 18.5113 57.9121 0H111.928ZM177.688 0C187.594 59.7615 216.633 114.175 280.479 138.485C321.197 153.989 357.06 169.36 388 185.131V248.927C346.378 220.062 290.388 193.758 220.788 167.258C155.007 142.211 127.782 83.8135 120.564 20.1602C119.807 13.4805 119.274 6.749 118.938 0H177.688ZM247.363 0C262.01 44.8917 290.764 83.1966 341.479 102.507C357.764 108.707 373.273 114.888 388 121.08V176.714C357.405 161.297 322.288 146.32 282.787 131.28C222.498 108.325 194.597 57.3551 184.802 0H247.363ZM324.212 0C338.584 24.9264 359.223 45.982 388 60.2158V112.903C373.935 107.026 359.194 101.168 343.787 95.3018C296.492 77.2938 269.127 42.0463 254.8 0H324.212ZM332.57 0.0175781C361.574 0.732393 385.189 23.167 387.766 51.6719C363.583 38.9938 345.612 21.129 332.57 0.0175781Z"
      fill="#FF5B01"
    />
  </svg>
);

const AmazonBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.58556 19.6981C3.58555 19.6981 3.58556 19.6981 3.58556 19.6981C4.73519 21.0833 6.87487 21.0833 11.1542 21.0833H11.8454C16.1247 21.0833 18.2644 21.0833 19.414 19.6981M3.58556 19.6981C2.43592 18.3129 2.83023 16.2098 3.61887 12.0038C4.17971 9.01266 4.46013 7.5171 5.52474 6.63355M19.414 19.6981C19.414 19.6981 19.414 19.6981 19.414 19.6981C20.5637 18.3129 20.1693 16.2098 19.3807 12.0038C18.8199 9.01266 18.5394 7.5171 17.4748 6.63355M17.4748 6.63355C17.4748 6.63355 17.4748 6.63355 17.4748 6.63355C16.4102 5.75 14.8886 5.75 11.8454 5.75H11.1542C8.11097 5.75 6.58935 5.75 5.52474 6.63355C5.52474 6.63355 5.52474 6.63355 5.52474 6.63355"
      stroke="white"
      strokeWidth="1.4375"
    />
    <path
      d="M8.625 5.74984V4.7915C8.625 3.20369 9.91218 1.9165 11.5 1.9165C13.0878 1.9165 14.375 3.20369 14.375 4.7915V5.74984"
      stroke="white"
      strokeWidth="1.4375"
      strokeLinecap="round"
    />
  </svg>
);

const booksEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const introVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: booksEase,
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: booksEase,
    },
  },
};

const imageWrapVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: booksEase,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: booksEase,
    },
  },
};

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: booksEase,
    },
  },
};

const BooksGrid = () => {
  const initialVisibleCount = 12;
  const loadMoreCount = 8;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const visibleBooks = books.slice(0, visibleCount);
  const allItemsDisplayed = visibleCount >= books.length;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <motion.div
        className="mx-auto max-w-[1260px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
      >
        <motion.div
          className="mx-auto max-w-[1020px] text-center"
          variants={introVariants}
        >
          <motion.div
            className="mb-3 mx-auto flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
            variants={textVariants}
          >
            <TextFluxUnveil text="View Our Books" />
          </motion.div>

          <motion.h2
            className="project-h2 mt-5 leading-[1.05]"
            variants={textVariants}
          >
            Books Published Through NexiFire Publishing
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-[890px] text-base leading-[1.65] text-[#777777] sm:text-lg"
            variants={textVariants}
          >
            Our publishing portfolio spans fiction, romance, thriller, fantasy, memoirs, biographies, business books, self-help, children's books, educational titles, cookbooks, poetry, and many more.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14"
          variants={gridVariants}
        >
          {visibleBooks.map((book) => (
            <motion.article
              key={book.title}
              className="flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="relative mb-12 w-full max-w-[258px] pt-3"
                variants={imageWrapVariants}
              >
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-[3.9rem] w-[116%] -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.08, ease: booksEase }}
                >
                  <BookGlow />
                </motion.div>

                <motion.div
                  className="relative z-10 mx-auto w-[90%]"
                  initial={{ opacity: 0, y: 30, rotate: -2, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.85, ease: booksEase }}
                >
                  <Image
                    src={book.imageSrc}
                    alt={book.title}
                    width={258}
                    height={386}
                    className="h-auto w-full rounded-[4px]"
                  />
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-lg font-medium leading-[1.25] tracking-[-0.03em] text-[#272727] sm:text-xl"
                variants={textVariants}
              >
                {book.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-sm leading-none text-[#444444] sm:text-base"
                variants={textVariants}
              >
                {book.author}
              </motion.p>

              <motion.div
                variants={ctaVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={book.amazonHref}
                  className="mt-5 inline-flex items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-4 py-[8px] text-sm font-light leading-none text-white shadow-[0_8px_18px_rgba(255,91,1,0.24)] transition hover:brightness-[1.03] sm:text-base"
                >
                  Buy on Amazon
                  <span className="ml-1.5 text-sm leading-none">
                    <AmazonBagIcon />
                  </span>
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 flex justify-center"
          variants={introVariants}
        >
          <motion.button
            type="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + loadMoreCount, books.length),
              )
            }
            disabled={allItemsDisplayed}
            whileHover={allItemsDisplayed ? undefined : { y: -3, scale: 1.01 }}
            whileTap={allItemsDisplayed ? undefined : { scale: 0.98 }}
            className={`inline-flex items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-base font-light leading-none transition sm:text-lg ${
              allItemsDisplayed
                ? "cursor-not-allowed bg-[#ece7e3] text-[#a29a94]"
                : "bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] text-white shadow-[0_8px_18px_rgba(255,91,1,0.24)] hover:brightness-[1.03]"
            }`}
          >
            Load More <FaArrowDown />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BooksGrid;
