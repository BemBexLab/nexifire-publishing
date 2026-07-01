"use client";

import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";
import { motion } from "motion/react";

const cornerAccentPath =
  "M358.093 354.763C386.394 338.529 412.99 324.853 438.03 313.883L416.872 342.198C403.015 360.742 377.766 365.747 358.093 354.763ZM235.214 263.451C250.555 257.857 265.931 250.053 281.234 239.724C378.253 174.244 458.407 130.196 525.756 111.612C551.173 104.599 574.698 101.228 596.585 101.689L532.52 187.426C525.186 188.893 517.711 190.681 510.091 192.784C447.686 210.003 375.164 248.383 289.797 304.236L235.214 263.451ZM112.625 171.85C169.844 191.985 232.724 191.36 294.454 149.697C391.473 84.2161 471.627 40.1681 538.976 21.5842C584.082 9.13776 623.229 8.15937 657.833 19.72L603.26 92.755C578.513 91.3965 551.936 94.8603 523.312 102.759C454.449 121.761 373.265 166.531 276.097 232.112C259.546 243.283 242.908 251.374 226.316 256.802L112.625 171.85ZM21.7336 20.5632C39.2017 34.9817 57.9835 48.3377 77.7632 59.6231C146.58 98.8866 228.085 113.389 307.677 59.6704C404.696 -5.81035 484.85 -49.8583 552.199 -68.4423C579.736 -76.0407 605.052 -79.3643 628.469 -78.1707L657.678 -56.3451C677.876 -41.2527 682.016 -12.6444 666.924 7.55379L663.606 11.9933C626.266 -1.27786 584.244 -0.434632 536.533 12.7305C467.669 31.7325 386.485 76.5023 289.316 142.084C217.881 190.297 144.845 181.16 80.651 147.958L18.3296 101.391C-1.86846 86.2985 -6.00797 57.6902 9.08413 37.492L21.7336 20.5632ZM297.632 310.09C381.504 255.415 452.164 218.296 512.534 201.637C516.442 200.559 520.305 199.567 524.125 198.662L448.91 299.321C418.161 311.8 385.177 328.473 349.7 348.996L297.632 310.09ZM69.6568 -43.5724C76.7302 -38.8482 83.9575 -34.3577 91.3222 -30.1534C160.257 9.19947 241.875 23.7912 321.518 -29.8907C404.112 -85.5624 474.499 -125.718 535.183 -147.876L615.9 -87.5626C595.138 -87.238 573.129 -83.7456 549.756 -77.296C480.892 -58.2939 399.708 -13.5241 302.539 52.0579C226.78 103.189 149.218 89.8181 82.3144 51.6462C62.892 40.5646 44.4233 27.4136 27.2365 13.1987L69.6568 -43.5724ZM121.301 -112.687C186.69 -80.0514 261.951 -71.3763 335.526 -120.969C382.447 -152.595 425.427 -179.215 464.927 -200.372L526.429 -154.417C465.917 -131.464 396.589 -91.5667 316.385 -37.5062C240.581 13.5885 162.905 0.137414 95.8752 -38.1277C88.8409 -42.1434 81.9313 -46.4304 75.1615 -50.9393L121.301 -112.687ZM176.02 -185.919C230.798 -168.977 290.304 -171.605 348.747 -210.998C367.512 -223.646 385.647 -235.492 403.181 -246.51L456.814 -206.434C417.926 -185.385 375.911 -159.265 330.392 -128.584C260.916 -81.755 189.87 -89.1444 126.887 -120.164L176.02 -185.919ZM236.37 -266.684C271.685 -263.834 308.191 -270.358 344.511 -290.349L395.299 -252.4C378.589 -241.851 361.368 -230.579 343.614 -218.612C289.113 -181.877 233.644 -178.506 181.86 -193.734L236.37 -266.684ZM259.136 -297.152C274.228 -317.35 302.837 -321.489 323.035 -306.396L336.392 -296.416C305.071 -280.009 273.625 -273.947 242.925 -275.457L259.136 -297.152Z";

const beliefs = [
  {
    title: "Author First",
    description:
      "Your story, vision, and goals remain at the center of everything we do.",
    iconSrc: "/image 2.svg",
  },
  {
    title: "Excellence In Publishing",
    description:
      "Great books are built through collaboration.",
    iconSrc: "/image 2 (1).svg",
  },
  {
    title: "Creative Collaboration",
    description:
      "We deliver professional publishing services with excellence.",
    iconSrc: "/image 2 (2).svg",
  },
  {
    title: "Long-Term Success",
    description:
      "We don't just publish books. We help authors build lasting careers.",
    iconSrc: "/image 2 (3).svg",
  },
];

const OurBelieves = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCF8F5] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="557"
        height="361"
        viewBox="0 0 557 361"
        fill="none"
        className="absolute right-0 top-0 z-0 w-[220px] max-w-none sm:w-[320px] lg:w-[420px]"
        aria-hidden="true"
      >
        <path opacity="0.1" d={cornerAccentPath} fill="#FF5B01" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="text-center">
          <motion.div
              className="mx-auto mb-2 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text="Our Believes" />
            </motion.div>
          <h2 className="project-h2 mt-6 leading-none">
            What We Believe
          </h2>
        </div>

        <div className="relative mt-10 grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0">
          <span
            aria-hidden="true"
            className="absolute left-1/4 top-1/2 hidden h-[118px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE] lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-[118px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE] lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute left-3/4 top-1/2 hidden h-[118px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE] lg:block"
          />
          {beliefs.map((belief, index) => (
            <article
              key={belief.title}
              className="mx-auto flex h-full w-full max-w-[670px] flex-col items-center text-center lg:max-w-none lg:px-8"
            >
              <div className="flex h-[68px] w-[68px] items-center justify-center">
                {belief.iconSrc ? (
                  <Image
                    src={belief.iconSrc}
                    alt=""
                    width={68}
                    height={68}
                    className="h-[68px] w-[68px] object-contain"
                  />
                ) : null}
              </div>
              <h3 className="mt-5 text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-[#4D4D4D] sm:text-4xl">
                {belief.title}
              </h3>
              <p className="mt-3 max-w-[350px] text-base leading-[1.55] text-[#7D7D7D] sm:text-lg">
                {belief.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBelieves;
