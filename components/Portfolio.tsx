"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, type Variants } from "motion/react";
import TextFluxUnveil from "./TextFluxUnveil";

const portfolioItems = [
  {
    title: "Messi and Ronaldo: The soccer Goats",
    author: "The Scribbling Stricker",
    imageSrc: "/books2/image 65.webp",
    amazonHref: "https://a.co/d/06WVsHpw",
  },
  {
    title: "The Secret Playbook of Life",
    author: "Renee Marie",
    imageSrc: "/books2/image 65 (1).webp",
    amazonHref: "https://a.co/d/06bhKLJU",
  },
  {
    title: "Exit Without Selling",
    author: "Renee Marie",
    imageSrc: "/books2/image 65 (2).webp",
    amazonHref: "https://a.co/d/07pktj32",
  },
  {
    title: "Eliminate: A Murder Mystery Puzzle Book",
    author: "Kimberley Kreates",
    imageSrc: "/books2/image 65 (3).webp",
    amazonHref: "https://a.co/d/0hfTGRA5",
  },
  {
    title: "God Will Make A Way",
    author: "Stephen Sainato",
    imageSrc: "/books2/image 65 (4).webp",
    amazonHref: "https://a.co/d/0dBtO9Hb",
  },
  {
    title: "The Blueprint of Leadership",
    author: "Gifford Thomas",
    imageSrc: "/books2/image 65 (5).webp",
    amazonHref: "https://a.co/d/0dSYJpfm",
  },
  {
    title: "The Lottery Killer",
    author: "A. S. Remington",
    imageSrc: "/books2/image 65 (6).webp",
    amazonHref: "https://a.co/d/03LlPskE",
  },
  {
    title: "Detoxify",
    author: "Robert M. Drake",
    imageSrc: "/books2/image 65 (7).webp",
    amazonHref: "https://a.co/d/0fChdSx0",
  },
  {
    title: "The Art of Intentional Living",
    author: "Connect With GROWTH",
    imageSrc: "/books2/image 70.webp",
    amazonHref: "https://a.co/d/06rMje5a",
  },
  {
    title: "Pope Leo XIV Magnifica Humanitas",
    author: "Pope Leo XIV",
    imageSrc: "/books2/image 71.webp",
    amazonHref: "https://a.co/d/03pCwbIX",
  },
  {
    title: "Necesitaba Perderte",
    author: "Fabian Garcia",
    imageSrc: "/books2/image 72.webp",
    amazonHref: "https://a.co/d/0bAxsxJQ",
  },
  {
    title: "Tactical Barbell III: Operational Athlete",
    author: "K. Black",
    imageSrc: "/books2/image 73.webp",
    amazonHref: "https://a.co/d/0gyPZUvf",
  },
  {
    title: "Quédate contigo",
    author: "Skye Reeds",
    imageSrc: "/books2/image 74.webp",
    amazonHref: "https://a.co/d/0gdY10iv",
  },
  {
    title: "SAFE: The Minimum Standard for Intimacy",
    author: "Scott Austin Martin",
    imageSrc: "/books2/image 76.webp",
    amazonHref: "https://a.co/d/0aYJEGvA",
  },
  {
    title: "Rule Your Tech",
    author: "Jedd Medefind",
    imageSrc: "/books2/image 77.webp",
    amazonHref: "https://a.co/d/0fVHddjU",
  },
  {
    title: "The Last of the Dawson Gang",
    author: "Dr. Gerald Murray",
    imageSrc: "/books2/image 78.webp",
    amazonHref: "https://a.co/d/07adIJwm",
  },
  {
    title: "The Art Of Legal Tax Avoidance",
    author: "Karlton Dennis",
    imageSrc: "/books2/image 79.webp",
    amazonHref: "https://a.co/d/0iBqZjUf",
  },
  {
    title: "The Christian Nationalist Vision",
    author: "Andrew Torba",
    imageSrc: "/books2/image 80.webp",
    amazonHref: "https://a.co/d/02Fb9wH3",
  },
  {
    title: "Bow Your Neck",
    author: "Matt Courson",
    imageSrc: "/books2/image 81.webp",
    amazonHref: "https://a.co/d/0dv0aPQA",
  },
  {
    title: "Are You Talking To Me?",
    author: "Joanie Floethe Morrison",
    imageSrc: "/books2/image 86.webp",
    amazonHref: "https://a.co/d/090wP3tP",
  },
  {
    title: "10-Minute Tai Chi Walking for Weight Loss",
    author: "Laura Mei Turner",
    imageSrc: "/books2/image 82.webp",
    amazonHref: "https://a.co/d/08JOlKxR",
  },
  {
    title: "The Qur’an Speaks: will you listen?",
    author: "Aiisha Dahir",
    imageSrc: "/books2/image 87.webp",
    amazonHref: "https://a.co/d/0eVu9ZKt",
  },
  {
    title: "Our Happy Valley Home",
    author: "Susannah B. Lewis",
    imageSrc: "/books2/image 84.webp",
    amazonHref: "https://a.co/d/07e1c9XE",
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

const Portfolio = () => {
  const carouselItems = [...portfolioItems, ...portfolioItems];
  const carouselStyle = {
    "--portfolio-item-count": portfolioItems.length,
    "--portfolio-duration": `${portfolioItems.length * 4}s`,
  } as CSSProperties;

  return (
    <section className="overflow-hidden bg-white px-4 pt-16 sm:px-6 md:px-10 lg:px-16">
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
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={327}
                      height={490}
                      className="relative z-10 mx-auto h-auto w-[98%] rounded-[4px]"
                    />
                  ) : (
                    <div className="relative z-10 mx-auto aspect-[327/490] w-[98%] rounded-[4px] bg-[#f3ede7]" />
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#282828]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-none tracking-[-0.02em] text-[#444444] sm:text-lg">
                  {item.author}
                </p>

                <Link
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
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-carousel-track {
          --portfolio-card-width: 220px;
          --portfolio-gap: 5rem;
          gap: var(--portfolio-gap);
          animation: portfolio-marquee var(--portfolio-duration) linear infinite;
        }

        @media (min-width: 640px) {
          .portfolio-carousel-track {
            --portfolio-card-width: 240px;
            --portfolio-gap: 5.5rem;
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
