"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

const leftAccentPath =
  "M58.2558 177.196C62.6041 175.339 66.9562 172.977 71.2912 170.052C106.264 146.447 135.158 130.57 159.435 123.87C166.306 121.975 172.793 120.817 178.935 120.427C175.91 129.622 171.367 138.492 165.253 146.675C164.076 148.25 162.858 149.777 161.601 151.255C159.045 151.774 156.441 152.398 153.788 153.13C135.158 158.271 114.027 168.642 89.8364 183.491C79.1592 183.276 68.4611 181.204 58.2558 177.196ZM96.3964 183.389C118.418 170.202 137.674 161.011 154.669 156.322C155.701 156.037 156.725 155.77 157.74 155.519C141.18 172.699 119.076 182.228 96.3964 183.389ZM19.388 148.194C37.548 152.48 56.9552 150.491 76.0571 137.599C111.03 113.995 139.924 98.1169 164.201 91.4178C170.971 89.5499 177.368 88.3989 183.43 87.9919C183.835 97.7169 182.702 107.535 179.974 117.057C173.206 117.379 166.076 118.603 158.554 120.679C133.731 127.529 104.466 143.667 69.4394 167.307C64.2785 170.791 59.0934 173.442 53.9164 175.361C47.9911 172.673 42.2627 169.308 36.8363 165.254C30.1297 160.242 24.3039 154.49 19.388 148.194ZM1.27265 106.958C25.3568 119.698 53.4049 123.651 80.8231 105.146C115.796 81.5421 144.69 65.6641 168.967 58.9651C171.609 58.2361 174.194 57.6164 176.725 57.1073C180.313 65.9297 182.499 75.2439 183.232 84.6895C176.915 85.1116 170.286 86.3034 163.321 88.2254C138.497 95.0752 109.232 111.214 74.2053 134.855C54.68 148.033 34.8228 149.323 16.2748 143.96C8.52718 132.761 3.47758 120.093 1.27265 106.958ZM2.83218 72.7669C27.6815 86.9526 57.1029 92.2125 85.8122 72.8615C114.603 53.4556 139.279 39.28 160.656 31.143C166.777 38.0869 171.704 45.8067 175.394 54.0017C173 54.4992 170.564 55.0897 168.086 55.7735C143.263 62.6232 113.998 78.7616 78.9713 102.402C52.0748 120.555 24.5473 116.154 0.681378 102.872C-0.555444 92.7502 -0.11639 82.4173 2.064 72.3234C2.31979 72.4718 2.57546 72.6204 2.83218 72.7669ZM13.927 43.1586C37.4312 54.805 64.4477 57.8346 90.8618 40.0308C107.487 28.8247 122.741 19.3639 136.779 11.8014C140.168 13.7154 143.474 15.8654 146.675 18.2568C150.884 21.4018 154.744 24.8404 158.252 28.5205C136.778 36.8737 112.246 51.0521 83.9623 70.1164C56.6368 88.5346 28.6365 83.6863 4.47393 69.8927C3.93368 69.5843 3.39568 69.2705 2.85956 68.9534C5.14748 60.0194 8.82129 51.3153 13.927 43.1586ZM18.2564 36.836C23.8288 29.3785 30.3193 23.0112 37.4521 17.7719C56.052 22.5311 76.0061 20.8037 95.6278 7.57806C98.9741 5.32253 102.265 3.13709 105.501 1.02412C115.024 2.45826 124.409 5.40911 133.289 9.92984C119.635 17.3932 104.915 26.5652 89.0112 37.285C64.0013 54.1425 38.4272 51.5091 15.7467 40.3661C16.5522 39.1766 17.3876 37.9988 18.2564 36.836ZM41.09 15.2347C58.6857 3.58533 79.715 -1.54106 100.417 0.401933C98.227 1.84789 96.0137 3.32483 93.7772 4.83234C76.0892 16.7545 58.1193 18.9259 41.09 15.2347Z";

const rightAccentPath =
  "M236.012 438.518C254.429 427.944 271.732 419.042 288.018 411.907L267.732 439.057C261.598 447.265 249.971 448.948 241.762 442.814L236.012 438.518ZM156.698 379.253C166.631 375.631 176.586 370.579 186.494 363.892C249.314 321.493 301.213 292.972 344.821 280.939C361.278 276.398 376.509 274.217 390.68 274.515L349.199 330.029C344.451 330.979 339.611 332.136 334.678 333.497C294.272 344.646 247.315 369.497 192.041 405.662L156.698 379.253ZM77.3227 319.942C114.372 332.98 155.087 332.575 195.056 305.598C257.875 263.2 309.775 234.679 353.383 222.646C382.588 214.588 407.934 213.954 430.339 221.439L395.001 268.733C378.978 267.853 361.771 270.093 343.238 275.207C298.65 287.511 246.084 316.499 183.168 358.963C172.452 366.195 161.68 371.434 150.937 374.948L77.3227 319.942ZM18.4696 221.984C29.78 231.32 41.9414 239.968 54.7486 247.275C99.3069 272.698 152.081 282.088 203.616 247.306C266.435 204.908 318.334 176.387 361.942 164.354C379.774 159.434 396.167 157.283 411.331 158.057L439.057 178.774C447.266 184.908 448.947 196.536 442.813 204.745L434.077 216.436C409.9 207.844 382.692 208.389 351.8 216.913C307.212 229.217 254.646 258.205 191.73 300.669C145.472 331.89 98.177 325.968 56.6092 304.465L7.44981 267.732C-0.759247 261.598 -2.44196 249.971 3.69177 241.762L18.4696 221.984ZM197.114 409.452C251.42 374.051 297.171 350.016 336.26 339.23C338.789 338.532 341.29 337.892 343.761 337.306L295.063 402.479C275.154 410.559 253.797 421.355 230.827 434.643L197.114 409.452ZM49.5001 180.456C54.0801 183.515 58.759 186.424 63.5277 189.146C108.163 214.627 161.009 224.075 212.578 189.316C266.058 153.269 311.634 127.268 350.926 112.921L403.193 151.976C389.749 152.186 375.496 154.445 360.36 158.621C315.771 170.925 263.205 199.913 200.289 242.377C151.236 275.485 101.015 266.827 57.6952 242.111C45.1192 234.936 33.1614 226.42 22.033 217.216L49.5001 180.456ZM82.9389 135.705C125.278 156.837 174.008 162.454 221.648 130.344C252.029 109.866 279.859 92.6293 305.435 78.93L345.257 108.686C306.076 123.547 261.187 149.381 209.255 184.385C160.172 217.469 109.877 208.759 66.4757 183.982C61.9211 181.382 57.448 178.605 53.0646 175.686L82.9389 135.705ZM118.369 88.2897C153.837 99.2596 192.368 97.5575 230.209 72.0509C242.36 63.8612 254.102 56.1902 265.455 49.0564L300.182 75.0048C275.002 88.6342 247.798 105.547 218.325 125.413C173.34 155.734 127.338 150.948 86.5572 130.863L118.369 88.2897ZM157.445 35.9941C180.312 37.8393 203.949 33.6148 227.467 20.6704L260.352 45.2428C249.532 52.0731 238.381 59.3718 226.885 67.1203C191.596 90.9066 155.68 93.0894 122.15 83.229L157.445 35.9941ZM178.774 7.44979C184.908 -0.759382 196.536 -2.44171 204.745 3.69233L222.21 16.7423C201.929 27.3656 181.568 31.2903 161.69 30.3131L178.774 7.44979Z";

const storyEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: storyEase,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: storyEase,
    },
  },
};

const imageShellVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: storyEase,
      staggerChildren: 0.12,
    },
  },
};

const accentLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -28,
    y: 18,
    rotate: -8,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: storyEase,
    },
  },
};

const accentRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    y: -18,
    rotate: 7,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: storyEase,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: storyEase,
    },
  },
};

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: storyEase,
    },
  },
};

const OurStory = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <motion.div
        className="mx-auto max-w-[1480px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
          <motion.div className="max-w-[710px]" variants={contentVariants}>
            <motion.div
              className="mb-2 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
              variants={itemVariants}
            >
              <TextFluxUnveil text="Our Story" />
            </motion.div>
            <motion.h2
              className="project-h2 block w-full max-w-full text-left leading-[1.05]"
              variants={itemVariants}
            >
              Where Stories Find Their Voice
            </motion.h2>
            <motion.div
              className="mt-8 space-y-4 text-base leading-[1.75] text-[#8A8A8A] sm:text-lg"
              variants={contentVariants}
            >
              <motion.p variants={itemVariants}>
                NexiFire Publishing was created with a simple mission: to make
                professional publishing accessible to authors at every stage of
                their journey.
              </motion.p>
              <motion.p variants={itemVariants}>
                We understand that publishing a book can feel overwhelming. From
                editing and design to distribution and promotion, there are
                countless steps involved. That's why we've built a team of
                publishing professionals dedicated to guiding authors through
                every phase of the process.
              </motion.p>
              <motion.p variants={itemVariants}>
                Whether you're publishing your first book or growing your
                portfolio as an established author, we're here to help transform
                your vision into a professionally published work.
              </motion.p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
              href="#"
              className="mt-8 inline-flex min-h-[52px] items-center gap-1 rounded-[10px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 text-sm font-light text-white shadow-[0_10px_24px_rgba(178,64,2,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(178,64,2,0.34)] sm:px-6 sm:text-base"
            >
              <span>Learn More</span>
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[360px] items-center justify-center lg:min-h-[540px]"
            variants={imageShellVariants}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="184"
              height="184"
              viewBox="0 0 184 184"
              fill="none"
              className="absolute bottom-[6%] left-[2%] z-0 w-[120px] sm:w-[150px] lg:w-[184px]"
              aria-hidden="true"
              variants={accentLeftVariants}
            >
              <path opacity="0.2" d={leftAccentPath} fill="#FF5B01" />
            </motion.svg>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="447"
              height="447"
              viewBox="0 0 447 447"
              fill="none"
              className="absolute right-0 top-0 z-0 w-[240px] sm:w-[320px] lg:w-[410px]"
              aria-hidden="true"
              variants={accentRightVariants}
            >
              <path opacity="0.1" d={rightAccentPath} fill="#FF5B01" />
            </motion.svg>

            <motion.div
              className="relative z-10 w-full max-w-[760px] lg:max-w-[820px]"
              variants={imageVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.32, ease: storyEase }}
            >
              <Image
                src="/1f39dee2-1fd2-4031-ad86-1021d36ac2e6 1.png"
                alt="Books and lantern composition for NexiFire Publishing"
                width={920}
                height={680}
                className="h-auto w-full object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-5 lg:mt-10 lg:grid-cols-2"
          variants={cardsVariants}
        >
          <motion.article
            className="rounded-[22px] border border-[#ECE7E1] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(50,50,50,0.08)] sm:px-8 sm:py-7"
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.28, ease: storyEase }}
          >
            <motion.h3
              className="block w-full max-w-full bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left text-[1.8rem] font-medium uppercase leading-[1.05] tracking-[-0.045em] text-transparent sm:text-[2.2rem]"
              variants={itemVariants}
            >
              Our Mission
            </motion.h3>
            <motion.p
              className="mt-4 max-w-[520px] text-base leading-[1.7] text-[#909090] sm:text-lg"
              variants={itemVariants}
            >
              To empower authors with the tools, expertise, and support needed to publish exceptional books and reach readers around the world.
            </motion.p>
          </motion.article>

          <motion.article
            className="rounded-[22px] border border-[#ECE7E1] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(50,50,50,0.08)] sm:px-8 sm:py-7"
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.28, ease: storyEase }}
          >
            <motion.h3
              className="block w-full max-w-full bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left text-[1.8rem] font-medium uppercase leading-[1.05] tracking-[-0.045em] text-transparent sm:text-[2.2rem]"
              variants={itemVariants}
            >
              Our Vision
            </motion.h3>
            <motion.p
              className="mt-4 max-w-[520px] text-base leading-[1.7] text-[#909090] sm:text-lg"
              variants={itemVariants}
            >
              To become a trusted publishing partner for authors worldwide by delivering innovative publishing solutions and helping meaningful stories find their audience.
            </motion.p>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;
