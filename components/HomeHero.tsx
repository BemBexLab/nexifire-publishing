"use client";

import Image from "next/image";
import heroEllipse from "../public/Ellipse 19.png";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";
import { motion, Variants } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";

const heroBooks = [
  {
    src: "/Stephen 2.png",
    alt: "Fresh Paths Unfolding book cover",
    width: 188,
    className:
      "w-[19.4%] min-w-[92px] max-w-[158px] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[22.2%] lg:min-w-[260px] lg:max-w-[390px]",
    offsetClass: "mb-[-6px] sm:mb-[-8px] md:mb-[-10px] lg:mb-[-12px]",
  },
  {
    src: "/Stephen 3.png",
    alt: "The Book of Unfolding Integration book cover",
    width: 208,
    className:
      "w-[19.4%] min-w-[92px] max-w-[158px] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[22.2%] lg:min-w-[260px] lg:max-w-[390px]",
    offsetClass: "mb-[14px] sm:mb-[24px] md:mb-[34px] lg:mb-[50px]",
  },
  {
    src: "/Stephen 4.png",
    alt: "The Labyrinth book cover",
    width: 220,
    className:
      "w-[19.4%] min-w-[92px] max-w-[158px] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[22.2%] lg:min-w-[260px] lg:max-w-[390px]",
    offsetClass: "mb-[26px] sm:mb-[42px] md:mb-[66px] lg:mb-[100px]",
  },
  {
    src: "/Stephen 6.png",
    alt: "The Bee's Colony book cover",
    width: 208,
    className:
      "w-[19.4%] min-w-[92px] max-w-[158px] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[22.2%] lg:min-w-[260px] lg:max-w-[390px]",
    offsetClass: "mb-[14px] sm:mb-[24px] md:mb-[34px] lg:mb-[50px]",
  },
  {
    src: "/Stephen 5.png",
    alt: "Don't Cut the Grass on Sunday book cover",
    width: 188,
    className:
      "w-[19.4%] min-w-[92px] max-w-[158px] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[22.2%] lg:min-w-[260px] lg:max-w-[390px]",
    offsetClass: "mb-[-6px] sm:mb-[-8px] md:mb-[-10px] lg:mb-[-12px]",
  },
];

const compactShowcaseBooks = [
  { ...heroBooks[1], compactClass: "w-[34vw] max-w-[190px] sm:w-[29vw] sm:max-w-[230px]" },
  { ...heroBooks[2], compactClass: "w-[39vw] max-w-[228px] sm:w-[33vw] sm:max-w-[274px]" },
  { ...heroBooks[3], compactClass: "w-[34vw] max-w-[190px] sm:w-[29vw] sm:max-w-[230px]" },
];

const compactShelfBooks = [heroBooks[0], heroBooks[4]];

const HeroAccent = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="202"
      height="202"
      viewBox="0 0 202 202"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        opacity="0.1"
        d="M108.053 200.897C116.189 196.274 123.857 192.356 131.097 189.184L127.487 194.017C122.86 200.209 115.107 202.686 108.053 200.897ZM69.5266 173.872C74.1842 172.173 78.8531 169.807 83.4992 166.671C112.952 146.793 137.284 133.421 157.73 127.78C165.446 125.65 172.587 124.627 179.231 124.767L159.783 150.794C157.557 151.239 155.287 151.782 152.974 152.42C134.029 157.648 112.013 169.298 86.098 186.254L69.5266 173.872ZM32.309 146.062C49.6808 152.176 68.7708 151.989 87.5123 139.34C116.965 119.462 141.298 106.09 161.743 100.448C175.436 96.67 187.319 96.3733 197.823 99.882C197.807 99.9045 197.791 99.928 197.774 99.9505L181.257 122.056C173.745 121.643 165.677 122.693 156.988 125.091C136.083 130.86 111.437 144.451 81.9396 164.36C76.9152 167.751 71.8641 170.207 66.8269 171.854L32.309 146.062ZM88.4777 188.032C113.939 171.434 135.389 160.165 153.716 155.108C154.902 154.781 156.075 154.481 157.234 154.206L134.402 184.762C125.163 188.511 115.26 193.509 104.616 199.652C103.543 199.137 102.504 198.513 101.515 197.774L88.4777 188.032ZM4.72139 100.139C10.0241 104.516 15.7258 108.57 21.7303 111.996C42.6213 123.915 67.3643 128.318 91.5263 112.01C120.979 92.1319 145.312 78.7605 165.757 73.1189C174.117 70.812 181.803 69.8033 188.912 70.1658L194.016 73.98C201.424 79.515 203.516 89.522 199.348 97.4553C188.07 93.5115 175.387 93.7909 161.002 97.7604C140.096 103.529 115.451 117.12 85.9527 137.029C64.2643 151.667 42.0901 148.89 22.6007 138.808L7.44928 127.486C-0.75971 121.352 -2.44138 109.725 3.6926 101.516L4.72139 100.139ZM19.2701 80.6682C21.4173 82.1023 23.611 83.4662 25.8467 84.7424C46.7736 96.6889 71.5507 101.118 95.7282 84.8217C120.802 67.9212 142.169 55.7308 160.591 49.0042L185.097 67.315C178.794 67.4134 172.112 68.4722 165.016 70.4303C144.11 76.1988 119.465 89.7899 89.9667 109.699C66.9682 125.221 43.4219 121.163 23.1117 109.575C17.2157 106.211 11.6099 102.217 6.3926 97.9022L19.2701 80.6682ZM34.9475 59.6871C54.7982 69.5944 77.6452 72.2274 99.9806 57.1725C114.225 47.5713 127.274 39.4924 139.266 33.0696L157.934 47.0185C139.564 53.9863 118.518 66.0988 94.17 82.5102C71.1578 98.0211 47.5774 93.9378 27.2289 82.3216C25.0936 81.1026 22.9963 79.8004 20.9413 78.4317L34.9475 59.6871ZM51.5591 37.4559C68.1882 42.5989 86.2528 41.801 103.995 29.8424C109.691 26.0027 115.197 22.4068 120.52 19.0621L136.801 31.2277C124.995 37.6177 112.241 45.547 98.4224 54.861C77.3315 69.0769 55.7643 66.8325 36.6445 57.4161L51.5591 37.4559ZM69.8804 12.9364C80.6007 13.8013 91.6811 11.8197 102.706 5.75152L118.127 17.274C113.054 20.4764 107.826 23.8981 102.436 27.5309C85.8912 38.683 69.0522 39.706 53.332 35.0832L69.8804 12.9364ZM73.9804 7.44944C80.1144 -0.759478 91.7412 -2.44161 99.9503 3.69217L100.242 3.91021C90.7344 8.89039 81.1894 10.7316 71.8702 10.2735L73.9804 7.44944Z"
        fill="#FF5B01"
      />
    </svg>
  );
};

const HeroHeadingMark = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="115"
      height="41"
      viewBox="0 0 115 41"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M109.738 40.196C106.935 35.4193 103.405 32.6089 98.3115 30.4576C97.724 29.8541 99.0305 29.9087 99.383 29.8848C102.523 29.7822 105.78 32.1283 108.23 34.1441C104.707 25.9946 99.115 17.1118 91.3732 12.6142C82.5078 7.22497 69.5228 6.81039 62.2094 14.927C66.005 20.5592 68.8698 27.592 67.8589 34.5043C65.7189 43.2756 56.2855 41.5393 53.6684 33.3284C51.547 26.6686 53.349 19.2463 57.2777 13.5507C38.9062 -6.75808 10.9773 1.59174 0.46692 25.2643C0.455133 25.294 0.437427 25.3209 0.414885 25.3434C0.392343 25.366 0.365438 25.3837 0.335814 25.3955C0.30619 25.4073 0.274469 25.413 0.24259 25.4121C0.21071 25.4112 0.179343 25.4039 0.150403 25.3905C0.121315 25.3793 0.0947515 25.3624 0.0722622 25.3408C0.0497729 25.3193 0.03181 25.2934 0.0194226 25.2648C0.00703511 25.2362 0.000471279 25.2054 0.000115497 25.1743C-0.000240189 25.1431 0.00561863 25.1122 0.01735 25.0833C9.96207 -0.2065 39.4416 -9.12439 59.2018 11.2349C64.7222 5.3005 73.4219 3.16711 81.2325 4.58987C95.2594 6.96642 106.054 20.382 109.553 33.635C110.195 32.3088 110.312 30.7818 110.945 29.4567C111.688 27.9062 114.039 25.8017 114.089 27.0264C113.405 28.524 112.838 30.0718 112.391 31.6562C111.912 33.2501 111.42 35.0653 111.016 36.6788L110.947 36.9875L110.205 40.1053C110.195 40.155 110.17 40.2006 110.134 40.2364C110.098 40.2721 110.052 40.2963 110.002 40.306C109.952 40.3157 109.9 40.3104 109.854 40.2908C109.807 40.2713 109.767 40.2383 109.738 40.196ZM57.2264 26.8043C55.7674 36.0429 64.531 40.7951 64.604 31.1371C64.2861 26.3221 62.7837 21.6603 60.2303 17.5658C58.5332 20.3739 57.5054 23.5351 57.2264 26.8043Z"
        fill="#B24002"
      />
    </svg>
  );
};

const heroContainerVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HeroButtons = () => {
  return (
    <motion.div
      variants={heroItemVariants}
      className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row"
    >
      <a
        href="#"
        className="inline-flex min-h-[48px] items-center justify-center rounded-[7px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-6 py-3 text-lg font-extralight text-[#FFFFFF] shadow-[0_8px_20px_rgba(178,64,2,0.22)] transition hover:brightness-[0.98]"
      >
        Publish Your Book
        <span className="ml-2 text-xl leading-none">
          <MdOutlineArrowOutward />
        </span>
      </a>
      <a
        href="#"
        className="inline-flex min-h-[48px] items-center justify-center rounded-[7px] border border-[#9F9F9F] px-6 py-3 text-lg font-light text-[#4B4B4B] shadow-[0_4px_14px_rgba(0,0,0,0.04)] backdrop-blur-[2px] transition hover:bg-white"
      >
        Book A Free Consultation
        <span className="ml-2 text-xl leading-none">
          <MdOutlineArrowOutward />
        </span>
      </a>
    </motion.div>
  );
};

const DesktopHero = () => {
  return (
    <section className="relative hidden h-[calc(100vh+50px)] overflow-hidden bg-[url('/Rectangle%201.png')] bg-cover bg-center bg-no-repeat pb-[92px] pt-6 text-[#1f1f1f] min-[1629px]:block [clip-path:polygon(0%_0%,100%_0%,100%_100%,82%_100%,76%_92%,24%_92%,18%_100%,0%_100%)]">
      <HeroAccent className="pointer-events-none absolute left-[4%] top-[26%] z-10 h-[176px] w-[176px] -rotate-90" />
      <HeroAccent className="pointer-events-none absolute right-[4%] top-[14%] z-10 h-[176px] w-[176px]" />

      <div className="relative z-30 mx-auto flex w-full max-w-[1280px] flex-col px-8">
        <motion.div
          className="relative z-30 mx-auto flex w-full max-w-[1180px] flex-col items-center px-8 pb-[300px] pt-[102px] text-center text-black"
          variants={heroContainerVariants}
          initial={false}
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
            className="mx-auto flex w-fit items-center justify-center rounded-[8px] px-5 py-3 text-center text-xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="NEXIFIRE PUBLISHING" />
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="relative isolate mx-auto mt-5 max-w-[1120px] text-center text-[4.45rem] font-medium uppercase leading-[1.08] tracking-[-0.03em] text-black"
          >
            <Image
              src={heroEllipse}
              alt=""
              width={500}
              height={500}
              preload
              placeholder="blur"
              className="pointer-events-none absolute left-1/2 top-8 -z-10 w-[500px] max-w-none -translate-x-1/2 translate-y-16 rotate-2"
              aria-hidden="true"
            />
            <span className="relative inline-block w-fit max-w-[920px]">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
                alt=""
                width={84}
                height={84}
                sizes="66px"
                className="pointer-events-none absolute -left-[10.6rem] top-[0.94em] h-[66px] w-[66px] -translate-y-1 rounded-full border-4 border-white/70 object-cover shadow-[0_10px_24px_rgba(0,0,0,0.14)]"
              />
              <HeroHeadingMark className="absolute -left-[6.5rem] top-[0.8em] h-auto w-[104px] -rotate-16" />
              <span className="block max-w-[920px] text-center">
                Bring Your Story To Life With Nexifire Publishing
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="body-copy mx-auto mt-4 max-w-[900px] text-center text-[#777777]"
          >
            Whether you've written a memoir, business book, novel, self-help guide, or children's story, NexiFire Publishing provides the professional support needed to transform your manuscript into a published book readers will remember.
          </motion.p>

          <HeroButtons />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-178px] z-20 h-[64%] w-full">
        <div className="flex h-full w-full items-end justify-center gap-0 px-10">
          {heroBooks.map((book) => (
            <div
              key={book.src}
              className={`${book.className} ${book.offsetClass}`}
            >
              <Image
                src={book.src}
                alt={book.alt}
                width={book.width}
                height={Math.round((book.width * 504) / 355)}
                className="h-auto w-full drop-shadow-[0_20px_36px_rgba(0,0,0,0.22)]"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompactHero = () => {
  return (
    <section className="relative h-[calc(100vh+50px)] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0.76)_40%,rgba(255,255,255,0.88)_100%),url('/Rectangle%201.png')] bg-cover bg-center bg-no-repeat px-4 pb-10 pt-4 text-[#1f1f1f] min-[1629px]:hidden sm:px-6 lg:px-8 [clip-path:polygon(0%_0%,100%_0%,100%_100%,82%_100%,76%_92%,24%_92%,18%_100%,0%_100%)]">
      <HeroAccent className="pointer-events-none absolute left-[-10%] top-[27%] z-10 h-[88px] w-[88px] -rotate-90 opacity-90 sm:left-[-2%] sm:h-[118px] sm:w-[118px]" />
      <HeroAccent className="pointer-events-none absolute right-[-10%] top-[15%] z-10 h-[88px] w-[88px] opacity-90 sm:right-[-2%] sm:h-[118px] sm:w-[118px]" />

      <div className="relative z-30 mx-auto max-w-[1240px]">
        <motion.div
          className="mx-auto flex max-w-[1040px] flex-col items-center text-center"
          variants={heroContainerVariants}
          initial={false}
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
            className="mx-auto mt-[88px] flex w-fit items-center justify-center rounded-[12px] px-4 py-3 text-center text-sm shadow-[0_10px_24px_rgba(255,255,255,0.28)] sm:mt-[104px] sm:text-base md:px-5 md:text-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.14) 0%, rgba(178, 64, 2, 0.03) 85%)",
            }}
          >
            <TextFluxUnveil text="NEXIFIRE PUBLISHING" />
          </motion.div>

          <motion.div
            variants={heroItemVariants}
            className="relative mt-6 max-w-[1020px]"
          >
            <Image
              src={heroEllipse}
              alt=""
              width={500}
              height={500}
              preload
              placeholder="blur"
              className="pointer-events-none absolute left-1/2 top-0 -z-10 w-[240px] max-w-none -translate-x-1/2 translate-y-8 rotate-2 opacity-90 sm:w-[320px] md:w-[400px]"
              aria-hidden="true"
            />
            <div className="relative mx-auto hidden w-fit items-start justify-center pl-[7.5rem] text-left md:inline-flex lg:pl-[8.75rem]">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
                alt=""
                width={84}
                height={84}
                sizes="(max-width: 1024px) 58px, 66px"
                className="pointer-events-none absolute left-0 top-[0.95em] h-[58px] w-[58px] -translate-y-1 rounded-full border-4 border-white/80 object-cover shadow-[0_14px_28px_rgba(0,0,0,0.14)] lg:h-[66px] lg:w-[66px]"
              />
              <HeroHeadingMark className="absolute left-[3.05rem] top-[0.78em] h-auto w-[88px] -rotate-16 lg:left-[3.6rem] lg:w-[104px]" />
              <h1 className="max-w-[900px] text-center text-[3.3rem] font-medium uppercase leading-[1.04] tracking-[-0.04em] text-black lg:text-[4rem]">
                Bring Your Story To Life With Nexifire Publishing
              </h1>
            </div>
            <h1 className="mx-auto max-w-[360px] text-center text-[2.75rem] font-medium uppercase leading-[0.98] tracking-[-0.05em] text-black sm:max-w-[520px] sm:text-[3.3rem] md:hidden">
              Bring Your Story To Life With Nexifire Publishing
            </h1>
          </motion.div>

          <motion.p
            variants={heroItemVariants}
            className="body-copy mx-auto mt-5 max-w-[340px] text-center text-[#777777] sm:max-w-[620px] md:max-w-[760px]"
          >
            Whether you've written a memoir, business book, novel, self-help guide, or children's story, NexiFire Publishing provides the professional support needed to transform your manuscript into a published book readers will remember.
          </motion.p>

          <HeroButtons />
        </motion.div>

        <motion.div
          variants={heroContainerVariants}
          initial={false}
          animate="visible"
          className="relative mx-auto mt-12 flex max-w-[1180px] flex-col items-center pb-28 sm:pb-32"
        >
          <div className="pointer-events-none absolute bottom-[5%] left-1/2 hidden h-[110px] w-[88%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle,rgba(178,64,2,0.14)_0%,rgba(178,64,2,0)_72%)] blur-2xl sm:block" />

          <div className="relative flex w-full max-w-[1020px] items-end justify-center gap-0">
            {compactShelfBooks.map((book, index) => (
              <motion.div
                key={`${book.src}-shelf`}
                variants={heroItemVariants}
                className={`absolute bottom-[8%] hidden opacity-90 md:block ${
                  index === 0
                    ? "left-[3%] w-[18vw] max-w-[172px] rotate-[-8deg] lg:left-[5%] lg:max-w-[196px]"
                    : "right-[3%] w-[18vw] max-w-[172px] rotate-[8deg] lg:right-[5%] lg:max-w-[196px]"
                }`}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  width={book.width}
                  height={Math.round((book.width * 504) / 355)}
                  className="h-auto w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.18)]"
                />
              </motion.div>
            ))}

            {compactShowcaseBooks.map((book, index) => (
              <motion.div
                key={`${book.src}-feature`}
                variants={heroItemVariants}
                className={`relative ${book.compactClass} ${
                  index === 0
                    ? "z-10 translate-x-[16%] translate-y-[10%] rotate-[-7deg] sm:translate-x-[18%]"
                    : index === 1
                      ? "z-20"
                      : "z-10 -translate-x-[16%] translate-y-[10%] rotate-[7deg] sm:-translate-x-[18%]"
                }`}
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  width={book.width}
                  height={Math.round((book.width * 504) / 355)}
                  className="h-auto w-full rounded-[10px] drop-shadow-[0_26px_42px_rgba(0,0,0,0.24)]"
                  priority
                />
              </motion.div>
            ))}

          </div>
          {/* <motion.div
            variants={heroItemVariants}
            className="relative z-30 -mt-8 w-[88%] max-w-[1040px] rounded-[18px] border border-white/70 bg-white/76 px-4 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:-mt-10 sm:px-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium uppercase tracking-[0.22em] text-[#a7a7a7] sm:text-[15px]">
              <span>Manuscript</span>
              <span>Design</span>
              <span>Publishing</span>
              <span>Marketing</span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>

    </section>
  );
};

const HomeHero = () => {
  return (
    <>
      <DesktopHero />
      <CompactHero />
    </>
  );
};

export default HomeHero;
