"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, type Variants } from "motion/react";
import TextFluxUnveil from "./TextFluxUnveil";

const portfolioItems = [
  {
    title:
      "In the Arms of the Ordinary: A Journey Back to Myself",
    author: "Heather Pelletier",
    imageSrc: "https://m.media-amazon.com/images/I/71T2WaWo5JL._SY466_.jpg",

    amazonHref: "https://a.co/d/0eKnGbwb",
  },
  {
    title:
      "The Informant’s Wife: A memoir of love and lies",
    author: "Colitha Bush",
    imageSrc: "https://m.media-amazon.com/images/I/81S3kbKx3cL._SL1500_.jpg",

    amazonHref: "https://a.co/d/0bJnBPmR",
  },
  {
    title:
      "The Enduring Echo",
    author: "E. Harlod Luce",
    imageSrc: "https://m.media-amazon.com/images/I/71JQdMlKrtL._SL1499_.jpg",

    amazonHref: "https://a.co/d/05NHVpbu",
  },
  {
    title:
      "Soft Boy Hard World",
    author: "Kerrick Montonio",
    imageSrc: "https://m.media-amazon.com/images/I/71atDiIqjiL._SL1491_.jpg",

    amazonHref: "https://a.co/d/0d54QhSw",
  },
  {
    title:
      "JOLTED BY A COMMON THREAT, WE UNITED",
    author: "Shalom Brenner, Marsha Bensoussan",
    imageSrc: "https://m.media-amazon.com/images/I/615kVTq1xqL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0hVJtl99",
  },
  {
    title:
      "Moments: A song without notes",
    author: "Joseph Colao",
    imageSrc: "https://m.media-amazon.com/images/I/51jKFv1B8hL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0asn4WpW",
  },
  {
    title:
      "Made for More: Because You Were Never Meant to Settle for Less",
    author: "Nonye Ejiofor",
    imageSrc: "https://m.media-amazon.com/images/I/71P1CKX55zL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0dx2e6op",
  },
  {
    title:
      "Whisker's Bedtime Adventures: Tales From the Meadow",
    author: "Donna G Fowler",
    imageSrc: "https://m.media-amazon.com/images/I/81lmnPVD4zL._SL1430_.jpg",

    amazonHref: "https://a.co/d/01xzHWyC",
  },
  {
    title:
      "Word Detective: Grade 4 Ages 9-10 Word Study and Sentence Practice Workbook",
    author: "Alma English",
    imageSrc: "https://m.media-amazon.com/images/I/71JcpUKIGWL._SL1293_.jpg",

    amazonHref: "https://a.co/d/06twlcFV",
  },
  {
    title:
      "Princess Kitsune: An enchanting fantasy tale inspired by Japanese folktales and legends",
    author: "Hikari Miyanami",
    imageSrc: "https://m.media-amazon.com/images/I/71hUcGLKf-L._SL1500_.jpg",

    amazonHref: "https://a.co/d/0csMvk3u",
  },
  {
    title:
      "Catch the Wind: A Story of Grief, Courage & Love",
    author: "Michele LaPlante",
    imageSrc: "https://m.media-amazon.com/images/I/61AQ-dfaT8L._SL1000_.jpg",

    amazonHref: "https://a.co/d/0fC43ayi",
  },
  {
    title:
      "The Sky Still Has Stars: A Book For Kids Who Lost A Parent",
    author: "Aaron Scallen",
    imageSrc: "https://m.media-amazon.com/images/I/61rVZEVfIUL._SL1000_.jpg",

    amazonHref: "https://a.co/d/08DH1TpA",
  },
  {
    title:
      "My Dear Son: A Love Letter From a Mother to Her Son",
    author: "Alicia Marie",
    imageSrc: "https://m.media-amazon.com/images/I/7155dyCnFiL._SL1000_.jpg",

    amazonHref: "https://a.co/d/05YDcnn3",
  },
  {
    title:
      "The Bearded Robber: One robber. Endless escapes.",
    author: "Noah Scott",
    imageSrc: "https://m.media-amazon.com/images/I/71-kRZspLJL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0jfLcOx6",
  },
  {
    title:
      "Johnny And The Little Green Dino",
    author: "Matthew Curtis",
    imageSrc: "https://m.media-amazon.com/images/I/614LZrNjxPL._SL1000_.jpg",

    amazonHref: "https://a.co/d/0cM0GR7d",
  },
  {
    title:
      "Unpaved: Heartbreak, road trips, and the detours that change us",
    author: "Ashley Christine Cole",
    imageSrc: "https://m.media-amazon.com/images/I/71RJJ1U2wjL._SL1500_.jpg",

    amazonHref: "https://a.co/d/0803PoKX",
  },
  {
    title:
      "Silence speaks more than words",
    author: "Kenel Edouard",
    imageSrc: "https://m.media-amazon.com/images/I/51+qdUixg1L._SL1499_.jpg",

    amazonHref: "https://a.co/d/0gV3vyjy",
  },
  {
    title:
      "Little Dorrit: A Child of the Marshalsea, a Family Buried in Debt, and the Cruelty of Wealth and Power",
    author: "Charles Dickens, Heritage Ink Publishing",
    imageSrc: "https://m.media-amazon.com/images/I/7106jmCwIQL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0b1ZpXJC",
  },
  {
    title:
      "Nanomancer: The Waking System - I",
    author: "R. R. Clark",
    imageSrc: "https://m.media-amazon.com/images/I/714mg5w-Y0L._SL1499_.jpg",

    amazonHref: "https://a.co/d/03cvvvUd",
  },
  {
    title:
      "365 Catholic Hymns for the Soul: Year of Beloved Traditional, Contemporary, and Sacred Catholic Hymns with Daily Scriptures, Prayers, Reflections, and Meditations for Faith, Hope, Worship",
    author: "Rev. Fr. Francis Casey",
    imageSrc: "https://m.media-amazon.com/images/I/71WKCBqjiaL._SL1280_.jpg",

    amazonHref: "https://a.co/d/09sigANb",
  },
  {
    title:
      "Scars",
    author: "Lily Ferguson",
    imageSrc: "https://m.media-amazon.com/images/I/61xWR0HZMjL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0aPDCyPF",
  },
  {
    title:
      "The Science of Sauna: Essential Oils in the Sauna - A Professional Guide to Safe Aroma Use, Air Quality and Health-Oriented Aufguss Practice",
    author: "Dr. Karsten Gröning",
    imageSrc: "https://m.media-amazon.com/images/I/71lJROwFJjL._SL1413_.jpg",

    amazonHref: "https://a.co/d/0cH3qYq4",
  },
  {
    title:
      "How To Thrive Without Burnout: The Mind Shift Method",
    author: "Dr. Bettina Marie Mrusek",
    imageSrc: "https://m.media-amazon.com/images/I/61Y-R3cMEFL._SL1499_.jpg",

    amazonHref: "https://a.co/d/09AYWM3E",
  },
  {
    title:
      "When the Body Changes, God Remains: A Christian Guide to Finding Hope, Peace, and Strength Through Perimenopause and Menopause",
    author: "Arabella Rosewood",
    imageSrc: "https://m.media-amazon.com/images/I/71cG+sPgTOL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0hKBwYBR",
  },
  {
    title:
      "What Happened in World History 1976 The Year You Were Born: Back in 1976, Major Events, Culture, Technology, Economy, Sports & Cost of Living , Famous Leaders, 70's Slangs",
    author: "Curious Chrony",
    imageSrc: "https://m.media-amazon.com/images/I/71TMHST8q+L._SL1491_.jpg",

    amazonHref: "https://a.co/d/01fCRo99",
  },
  {
    title:
      "Denver Airport Conspiracy Machine: Denver Airport, Hidden Art, Bunkers, and the Conspiracy Theories That Captivate Conspiracy Theorists",
    author: "Rowan K. Ravenscroft",
    imageSrc: "https://m.media-amazon.com/images/I/81ZFLC5NN8L._SL1500_.jpg",

    amazonHref: "https://a.co/d/05hYYPzr",
  },
  {
    title:
      "KEWANEE, ILLINOIS: Reflections on its First Years 1854-1865",
    author: "Dean R. Karau",
    imageSrc: "https://m.media-amazon.com/images/I/61e2ZiqkkqL._SL1293_.jpg",

    amazonHref: "https://a.co/d/0eL1dno1",
  },
  {
    title:
      "Gracefully Broken: A 31-Day Devotional & Prayer Journal",
    author: "Barbara (Mimi) Seymour",
    imageSrc: "https://m.media-amazon.com/images/I/71UGx7w0wJL._SL1499_.jpg",

    amazonHref: "https://a.co/d/0bM74Jpd",
  },
  {
    title:
      "Faith and Focus: A Christian Student Guide to Thriving in College",
    author: "DR. S E Amenumey",
    imageSrc: "https://m.media-amazon.com/images/I/71z1jjPLt2L._SL1491_.jpg",

    amazonHref: "https://a.co/d/0hFNN7bX",
  },
];

const PortfolioGlow = () => (
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

const introEase = [0.22, 1, 0.36, 1] as const;

const introContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const introItemVariants: Variants = {
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
      duration: 0.7,
      ease: introEase,
    },
  },
};

// Add this helper function before the Portfolio component
const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  // Slice to max length, remove any trailing spaces, and add "..."
  return text.slice(0, maxLength).trim() + "...";
};

const Portfolio = () => {
  const carouselItems = [...portfolioItems, ...portfolioItems];
  const carouselStyle = {
    "--portfolio-item-count": portfolioItems.length,
    "--portfolio-duration": `${portfolioItems.length * 4}s`,
  } as CSSProperties;

  return (
    <section className="overflow-hidden bg-white px-4 pt-10 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1380px]">
        <motion.div
          className="mx-auto mb-9 max-w-[920px] text-center"
          variants={introContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            variants={introItemVariants}
            className="mx-auto mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="PORTFOLIO" />
          </motion.div>
          <motion.h2
            variants={introItemVariants}
            className="project-h2 block w-full max-w-full text-center"
          >
            OUR PAST wORK
          </motion.h2>
          <motion.p
            variants={introItemVariants}
            className="mx-auto mt-4 max-w-full text-base leading-6 text-[#989391] sm:text-lg"
          >
            Explore a selection of books published through NexiFire Publishing
            across multiple genres including business, self-development,
            fiction, memoirs, and children's literature.
          </motion.p>
        </motion.div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-4">
          <div
            className="portfolio-carousel-track flex w-max px-6 sm:px-8 lg:px-10"
            style={carouselStyle}
          >
            {carouselItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="portfolio-carousel-card group flex shrink-0 flex-col items-center text-center"
                style={{ width: "var(--portfolio-card-width)" }}
                aria-hidden={index >= portfolioItems.length}
              >
                <div className="relative mb-10 w-full pt-3 sm:mb-11 sm:pt-4 lg:mb-12">
                  <div className="pointer-events-none absolute left-1/2 top-[5.25rem] flex w-[118%] -translate-x-1/2 justify-center sm:top-[5.55rem] sm:w-[120%] lg:top-[5.8rem] lg:w-[122%]">
                    <div className="w-full">
                      <PortfolioGlow />
                    </div>
                  </div>

                  {item.imageSrc ? (
                    <div className="relative z-10 mx-auto aspect-[2/3] w-[98%]">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        sizes="(max-width: 639px) 170px, (max-width: 1023px) 200px, 253px"
                        className="rounded-[4px] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative z-10 mx-auto aspect-[327/490] w-[98%] rounded-[4px] bg-[#f3ede7]" />
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#282828]">
  {truncateText(item.title, 15)}
</h3>
                <p className="mt-2 text-base leading-none tracking-[-0.02em] text-[#444444] sm:text-lg">
  {truncateText(item.author, 30)}
</p>

                {/* <Link
                  href={item.amazonHref}
                  className="mt-6 inline-flex items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-4 py-[8px] text-base font-light leading-none text-white shadow-[0_8px_18px_rgba(255,91,1,0.24)] transition hover:brightness-[1.03] sm:text-lg"
                >
                  Buy on Amazon
                  <span className="ml-1.5 text-sm leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
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
                  </span>
                </Link> */}
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-carousel-track {
          --portfolio-card-width: 170px;
          --portfolio-gap: 2.5rem;
          gap: var(--portfolio-gap);
          animation: portfolio-marquee var(--portfolio-duration) linear infinite;
        }

        @media (min-width: 640px) {
          .portfolio-carousel-track {
            --portfolio-card-width: 200px;
            --portfolio-gap: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .portfolio-carousel-track {
            --portfolio-card-width: 258px;
            --portfolio-gap: 6rem;
          }
        }

        @keyframes portfolio-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(
              calc(
                -1 * var(--portfolio-item-count) *
                  (var(--portfolio-card-width) + var(--portfolio-gap))
              )
            );
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
