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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};



const stats = [
  { value: "500+", label: "Books Published" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Publishing Experts" },
  { value: "120+", label: "Countries Reached" },
];

const imageBackdropPath =
  "M108.053 200.897C116.189 196.274 123.857 192.356 131.097 189.184L127.487 194.017C122.86 200.209 115.107 202.686 108.053 200.897ZM69.5266 173.872C74.1842 172.173 78.8531 169.807 83.4992 166.671C112.952 146.793 137.284 133.421 157.73 127.78C165.446 125.65 172.587 124.627 179.231 124.767L159.783 150.794C157.557 151.239 155.287 151.782 152.974 152.42C134.029 157.648 112.013 169.298 86.098 186.254L69.5266 173.872ZM32.309 146.062C49.6808 152.176 68.7708 151.989 87.5123 139.34C116.965 119.462 141.298 106.09 161.743 100.448C175.436 96.67 187.319 96.3733 197.823 99.882C197.807 99.9045 197.791 99.928 197.774 99.9505L181.257 122.056C173.745 121.643 165.677 122.693 156.988 125.091C136.083 130.86 111.437 144.451 81.9396 164.36C76.9152 167.751 71.8641 170.207 66.8269 171.854L32.309 146.062ZM88.4777 188.032C113.939 171.434 135.389 160.165 153.716 155.108C154.902 154.781 156.075 154.481 157.234 154.206L134.402 184.762C125.163 188.511 115.26 193.509 104.616 199.652C103.543 199.137 102.504 198.513 101.515 197.774L88.4777 188.032ZM4.72139 100.139C10.0241 104.516 15.7258 108.57 21.7303 111.996C42.6213 123.915 67.3643 128.318 91.5263 112.01C120.979 92.1319 145.312 78.7605 165.757 73.1189C174.117 70.812 181.803 69.8033 188.912 70.1658L194.016 73.98C201.424 79.515 203.516 89.522 199.348 97.4553C188.07 93.5115 175.387 93.7909 161.002 97.7604C140.096 103.529 115.451 117.12 85.9527 137.029C64.2643 151.667 42.0901 148.89 22.6007 138.808L7.44928 127.486C-0.75971 121.352 -2.44138 109.725 3.6926 101.516L4.72139 100.139ZM19.2701 80.6682C21.4173 82.1023 23.611 83.4662 25.8467 84.7424C46.7736 96.6889 71.5507 101.118 95.7282 84.8217C120.802 67.9212 142.169 55.7308 160.591 49.0042L185.097 67.315C178.794 67.4134 172.112 68.4722 165.016 70.4303C144.11 76.1988 119.465 89.7899 89.9667 109.699C66.9682 125.221 43.4219 121.163 23.1117 109.575C17.2157 106.211 11.6099 102.217 6.3926 97.9022L19.2701 80.6682ZM34.9475 59.6871C54.7982 69.5944 77.6452 72.2274 99.9806 57.1725C114.225 47.5713 127.274 39.4924 139.266 33.0696L157.934 47.0185C139.564 53.9863 118.518 66.0988 94.17 82.5102C71.1578 98.0211 47.5774 93.9378 27.2289 82.3216C25.0936 81.1026 22.9963 79.8004 20.9413 78.4317L34.9475 59.6871ZM51.5591 37.4559C68.1882 42.5989 86.2528 41.801 103.995 29.8424C109.691 26.0027 115.197 22.4068 120.52 19.0621L136.801 31.2277C124.995 37.6177 112.241 45.547 98.4224 54.861C77.3315 69.0769 55.7643 66.8325 36.6445 57.4161L51.5591 37.4559ZM69.8804 12.9364C80.6007 13.8013 91.6811 11.8197 102.706 5.75152L118.127 17.274C113.054 20.4764 107.826 23.8981 102.436 27.5309C85.8912 38.683 69.0522 39.706 53.332 35.0832L69.8804 12.9364ZM73.9804 7.44944C80.1144 -0.759478 91.7412 -2.44161 99.9503 3.69217L100.242 3.91021C90.7344 8.89039 81.1894 10.7316 71.8702 10.2735L73.9804 7.44944Z";
const textBackdropPath =
  "M961.12 495.915C841.551 285.709 558.042 -96.2483 380.564 57.5702C158.716 249.843 629.994 579.14 723.196 766.961C797.758 917.218 690.066 908.319 626.901 885.087C500.644 809.211 226.301 640.14 138.982 570.863C69.0392 522.18 -8.43626 526.401 42.3503 595.528C105.833 681.937 276.985 793.327 386.666 810.484C474.411 824.21 327.177 594.781 242.592 478.351";

const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-10 lg:px-16 lg:py-18">
      <div className="pointer-events-none absolute bottom-[-10rem] left-[-12rem] z-0 opacity-80 sm:left-[-11rem] md:left-[-8rem] lg:bottom-[-16rem] lg:left-[-14rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="988"
          height="929"
          viewBox="0 0 988 929"
          fill="none"
          className="h-[920px] w-[446px] sm:h-[1120px] sm:w-[543px] lg:h-[1320px] lg:w-[640px]"
          aria-hidden="true"
        >
          <g opacity="0.1" filter="url(#who-we-are-text-backdrop)">
            <path
              d={textBackdropPath}
              stroke="#B24002"
              strokeWidth="44"
              strokeLinecap="round"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="who-we-are-text-backdrop"
              x="0"
              y="0"
              width="987.124"
              height="928.249"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_30_670"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_670"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-col"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col items-start text-left lg:max-w-[620px] lg:flex-[1.05]"
          >
            <motion.div
              className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text="Who We Are" />
            </motion.div>

            <h2 className="w-full max-w-none text-[2.35rem] font-normal uppercase leading-[1.08] tracking-[-0.04em] text-[#4a4a4a] sm:text-[3rem] lg:text-[3.7rem]">
              Why Authors Choose Nexifire Publishing
            </h2>

            <p className="body-copy mt-6 w-full max-w-none text-[0.98rem] leading-[1.65] text-[#777777]">
              At NexFire Publishing, we combine creativity, industry expertise,
              and modern publishing solutions to help authors achieve their
              goals. Whether you're publishing your first book or expanding your
              existing catalog, our team is dedicated to your success.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto flex w-full max-w-[780px] items-center justify-center lg:mx-0 lg:max-w-[700px] lg:flex-[0.95]"
          >
            <div className="relative flex w-full items-center justify-center overflow-visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="202"
                height="202"
                viewBox="0 0 202 202"
                fill="none"
                className="pointer-events-none absolute left-[5%] top-[8%] z-0 h-[160px] w-[160px] -translate-x-[18%] sm:h-[190px] sm:w-[190px] lg:left-[7%] lg:top-[12%] lg:h-[202px] lg:w-[202px]"
                aria-hidden="true"
              >
                <path opacity="0.1" d={imageBackdropPath} fill="#FF5B01" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="202"
                height="202"
                viewBox="0 0 202 202"
                fill="none"
                className="pointer-events-none absolute bottom-[10%] right-[4%] z-0 h-[120px] w-[120px] translate-x-[8%] sm:h-[145px] sm:w-[145px] lg:bottom-[12%] lg:right-[6%] lg:h-[156px] lg:w-[156px]"
                aria-hidden="true"
              >
                <path opacity="0.1" d={imageBackdropPath} fill="#FF5B01" />
              </svg>

              <div className="relative z-10 w-full max-w-[660px]">
                <div className="pointer-events-none absolute inset-x-[10%] bottom-[-18px] h-[48px] rounded-full bg-black/18 blur-2xl" />
                <Image
                  src="/2f867d55-6678-47c9-b53c-2f54a5cda131 1.png"
                  alt=""
                  width={700}
                  height={420}
                  className="relative z-10 h-auto w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-10 grid grid-cols-2 gap-y-6 border-t border-[#f2ece8] pt-8 text-center sm:grid-cols-4 sm:gap-x-6 lg:mt-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative flex flex-col items-center pr-4 text-center sm:pr-6"
            >
              <div className="relative flex items-center justify-center">
                <div className="pointer-events-none absolute bottom-[-2px] h-[10px] w-[98px] rounded-full bg-black/60 blur-sm" />
                <div className="relative z-10 text-[2.1rem] font-semibold leading-none tracking-[-0.04em] text-black sm:text-[2.4rem]">
                  {stat.value}
                </div>
              </div>
              <div className="mt-2 inline-block text-sm text-[#777777CC]">
                {stat.label}
              </div>
              <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[52px] w-px -translate-y-1/2 bg-[#f1ebe7] sm:block" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
