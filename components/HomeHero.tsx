"use client";

import Image from "next/image";
import heroEllipse from "../public/Ellipse 19.png";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";
import { motion, Variants } from "motion/react";
import { MdOutlineArrowOutward } from "react-icons/md";

const heroTitle = "Publish Your Book Professionally and Reach Readers Worldwide";
const heroDescription =
  "NexiFire Publishing delivers professional book publishing services across Australia, from ghostwriting and editing to hardcover printing, global distribution, and audiobook production. We help convert your manuscripts into bestsellers.";

const heroBooks = [
  {
    src: "/Stephen 2.png",
    alt: "Fresh Paths Unfolding book cover",
    width: 188,
    className:
      "w-[18.2%] min-w-[70px] max-w-[104px] sm:w-[19.4%] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[20%] lg:min-w-[190px] lg:max-w-[300px] xl:w-[22.2%] xl:min-w-[260px] xl:max-w-[390px]",
    offsetClass:
      "mb-[-2px] sm:mb-[-8px] md:mb-[-10px] lg:mb-[-10px] xl:mb-[-18px] 2xl:mb-[-12px]",
  },
  {
    src: "/Stephen 3.png",
    alt: "The Book of Unfolding Integration book cover",
    width: 208,
    className:
      "w-[18.2%] min-w-[70px] max-w-[104px] sm:w-[19.4%] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[20%] lg:min-w-[190px] lg:max-w-[300px] xl:w-[22.2%] xl:min-w-[260px] xl:max-w-[390px]",
    offsetClass:
      "mb-[8px] sm:mb-[24px] md:mb-[34px] lg:mb-[36px] xl:mb-[22px] 2xl:mb-[50px]",
  },
  {
    src: "/Stephen 4.png",
    alt: "The Labyrinth book cover",
    width: 220,
    className:
      "w-[18.2%] min-w-[70px] max-w-[104px] sm:w-[19.4%] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[20%] lg:min-w-[190px] lg:max-w-[300px] xl:w-[22.2%] xl:min-w-[260px] xl:max-w-[390px]",
    offsetClass:
      "mb-[16px] sm:mb-[42px] md:mb-[66px] lg:mb-[74px] xl:mb-[46px] 2xl:mb-[100px]",
  },
  {
    src: "/Stephen 6.png",
    alt: "The Bee's Colony book cover",
    width: 208,
    className:
      "w-[18.2%] min-w-[70px] max-w-[104px] sm:w-[19.4%] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[20%] lg:min-w-[190px] lg:max-w-[300px] xl:w-[22.2%] xl:min-w-[260px] xl:max-w-[390px]",
    offsetClass:
      "mb-[8px] sm:mb-[24px] md:mb-[34px] lg:mb-[36px] xl:mb-[22px] 2xl:mb-[50px]",
  },
  {
    src: "/Stephen 5.png",
    alt: "Don't Cut the Grass on Sunday book cover",
    width: 188,
    className:
      "w-[18.2%] min-w-[70px] max-w-[104px] sm:w-[19.4%] sm:min-w-[122px] sm:max-w-[196px] md:min-w-[168px] md:max-w-[270px] lg:w-[20%] lg:min-w-[190px] lg:max-w-[300px] xl:w-[22.2%] xl:min-w-[260px] xl:max-w-[390px]",
    offsetClass:
      "mb-[-2px] sm:mb-[-8px] md:mb-[-10px] lg:mb-[-10px] xl:mb-[-18px] 2xl:mb-[-12px]",
  },
];

const heroLogos = [
  { src: "/clients/clients01.webp", alt: "Client logo 1" },
  { src: "/clients/clients02.webp", alt: "Client logo 2" },
  { src: "/clients/clients03.webp", alt: "Client logo 3" },
  { src: "/clients/clients04.webp", alt: "Client logo 4" },
  { src: "/clients/clients05.webp", alt: "Client logo 5" },
  { src: "/clients/clients06.webp", alt: "Client logo 6" },
  { src: "/clients/clients07.webp", alt: "Client logo 7" },
  { src: "/clients/clients08.webp", alt: "Client logo 8" },
];

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
      className="mt-6 flex w-full max-w-[760px] flex-row items-stretch justify-center gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
    >
      <a
        href="/contact"
        className="inline-flex min-h-[48px] min-w-0 flex-1 items-center justify-center rounded-[7px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-3 py-3 text-center text-[0.95rem] font-extralight leading-tight text-[#FFFFFF] shadow-[0_8px_20px_rgba(178,64,2,0.22)] transition hover:brightness-[0.98] sm:w-auto sm:max-w-none sm:flex-none sm:px-6 sm:text-base md:min-w-[220px] md:text-lg"
      >
        Publish Your Book
        <span className="ml-2 text-xl leading-none">
          <MdOutlineArrowOutward />
        </span>
      </a>
      <a
        href="/contact"
        className="inline-flex min-h-[48px] min-w-0 flex-1 items-center justify-center rounded-[7px] border border-[#9F9F9F] bg-white/55 px-3 py-3 text-center text-[0.95rem] font-light leading-tight text-[#4B4B4B] shadow-[0_4px_14px_rgba(0,0,0,0.04)] backdrop-blur-[2px] transition hover:bg-white sm:w-auto sm:max-w-none sm:flex-none sm:px-6 sm:text-base md:min-w-[260px] md:text-lg"
      >
        Book A Free Consultation
        <span className="ml-2 text-xl leading-none">
          <MdOutlineArrowOutward />
        </span>
      </a>
    </motion.div>
  );
};

const LogoMarquee = ({
  className = "",
  imageClassName = "",
  cardClassName = "",
}: {
  className?: string;
  imageClassName?: string;
  cardClassName?: string;
}) => {
  const marqueeLogos = [...heroLogos, ...heroLogos];

  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      aria-label="Featured partner logos"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0)_10%,rgba(255,255,255,0)_90%,rgba(255,255,255,0.98)_100%)]" />
      <div className="hero-logo-marquee relative flex w-max items-center gap-4 sm:gap-5 lg:gap-7">
        {marqueeLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className={`flex h-[68px] min-w-[150px] items-center justify-center px-5 sm:h-[76px] sm:min-w-[170px] lg:h-[84px] lg:min-w-[188px] lg:px-6 ${cardClassName}`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={132}
              height={44}
              sizes="132px"
              className={`h-auto w-full object-contain opacity-80 grayscale transition ${imageClassName}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileBooksCarousel = () => {
  return (
    <div
      className="absolute inset-x-0 bottom-[84px] z-40 w-full sm:hidden"
      aria-label="Featured books"
    >
      <div className="no-scrollbar flex items-end gap-4 overflow-x-auto overflow-y-hidden px-4 pb-2 pt-1 touch-pan-x">
        {heroBooks.map((book) => (
          <div
            key={book.src}
            className="flex-none first:ml-0 last:pr-4"
          >
            <div className="relative aspect-[355/504] w-[30vw] min-w-[112px] max-w-[142px] overflow-hidden">
              <Image
                src={book.src}
                alt={book.alt}
                fill
                sizes="(max-width: 639px) 30vw, 0px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DesktopHero = () => {
  return (
    <div className="relative">
      <LogoMarquee
        className="bottom-[-18px] left-1/2 z-0 w-[98%] max-w-none -translate-x-1/2 sm:bottom-0 sm:w-[82%] sm:max-w-[1180px] 2xl:w-[74%]"
        cardClassName="h-[42px] min-w-[86px] rounded-[12px] px-2.5 sm:h-[68px] sm:min-w-[136px] sm:rounded-none sm:border-0 sm:bg-transparent sm:px-4 sm:shadow-none sm:backdrop-blur-0 xl:min-w-[148px] 2xl:min-w-[168px] lg:px-5"
      />

      <section className="relative min-h-[770px] overflow-hidden bg-[url('/Rectangle%201.png')] bg-cover bg-center bg-no-repeat px-4 pb-[168px] pt-24 text-[#1f1f1f] sm:px-5 sm:pb-[160px] sm:pt-28 md:min-h-[900px] md:pb-[185px] md:pt-32 lg:min-h-[960px] lg:px-6 lg:pb-[220px] lg:pt-36 xl:min-h-[900px] xl:px-6 xl:pb-[220px] xl:pt-5 2xl:min-h-[1020px] 2xl:px-8 2xl:pb-[236px] 2xl:pt-6 [clip-path:polygon(0%_0%,100%_0%,100%_100%,82%_100%,76%_92%,24%_92%,18%_100%,0%_100%)]">
        <HeroAccent className="pointer-events-none absolute left-[-10%] top-[22%] z-10 h-[78px] w-[78px] -rotate-90 opacity-90 sm:left-[2%] sm:h-[124px] sm:w-[124px] 2xl:h-[176px] 2xl:w-[176px]" />
        <HeroAccent className="pointer-events-none absolute right-[-8%] top-[14%] z-10 h-[84px] w-[84px] opacity-90 sm:right-[2%] sm:top-[12%] sm:h-[124px] sm:w-[124px] 2xl:h-[176px] 2xl:w-[176px]" />

        <div className="relative z-30 mx-auto flex w-full max-w-[1360px] flex-col">
          <motion.div
            className="relative z-30 mx-auto flex w-full max-w-[1180px] flex-col items-center px-1 pb-[138px] pt-6 text-center text-black sm:px-3 sm:pb-[205px] sm:pt-10 md:pb-[205px] md:pt-12 lg:pb-[235px] lg:pt-14 xl:px-4 xl:pb-[236px] xl:pt-20 2xl:pb-[308px] 2xl:pt-[102px]"
            variants={heroContainerVariants}
            initial={false}
            animate="visible"
          >
            <motion.div
              variants={heroItemVariants}
              className="mx-auto flex w-fit items-center justify-center rounded-[8px] px-3 py-2 text-center text-sm sm:px-4 sm:py-2.5 sm:text-base xl:px-5 xl:py-3 xl:text-lg 2xl:text-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text="NEXIFIRE PUBLISHING" />
            </motion.div>

            <motion.h1
              variants={heroItemVariants}
              className="relative isolate mx-auto mt-4 max-w-[1040px] text-center text-[1.95rem] font-medium uppercase leading-[0.95] tracking-[-0.05em] text-black sm:mt-5 sm:text-4xl sm:leading-[1.02] sm:tracking-[-0.04em] xl:max-w-[1120px] xl:text-5xl 2xl:text-6xl"
            >
              <Image
                src={heroEllipse}
                alt=""
                width={500}
                height={500}
                preload
                placeholder="blur"
                className="pointer-events-none absolute left-1/2 top-[-18px] -z-10 w-[220px] max-w-none -translate-x-1/2 translate-y-2 rotate-2 sm:top-0 sm:w-[320px] sm:translate-y-5 md:top-1 md:w-[360px] md:translate-y-6 xl:top-2 xl:w-[420px] xl:translate-y-7 2xl:top-3 2xl:w-[500px] 2xl:translate-y-10"
                aria-hidden="true"
              />
              <span className="relative inline-block w-fit max-w-[860px] pl-0 xl:max-w-[1120px]">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"
                  alt=""
                  width={84}
                  height={84}
                  sizes="(min-width: 1536px) 66px, 58px"
                  className="pointer-events-none absolute -left-2 top-[-2rem] h-[36px] w-[36px] rounded-full border-4 border-white/70 object-cover shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:-left-10 sm:top-[-1.2rem] sm:h-[48px] sm:w-[48px] md:-left-[5.5rem] md:top-[0.96em] md:-translate-y-1 md:h-[52px] md:w-[52px] xl:-left-[8.5rem] xl:h-[58px] xl:w-[58px] 2xl:-left-[10.6rem] 2xl:h-[66px] 2xl:w-[66px]"
                />
                <HeroHeadingMark className="absolute left-6 top-[-1.9rem] h-auto w-[50px] -rotate-16 sm:left-4 sm:top-[-0.8rem] sm:w-[66px] md:-left-[4.2rem] md:top-[0.84em] md:w-[76px] xl:-left-[5rem] xl:w-[88px] 2xl:-left-[6.5rem] 2xl:w-[104px]" />
                <span className="block max-w-[860px] text-center xl:max-w-[1120px]">
                  {heroTitle}
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="body-copy mx-auto mt-4 max-w-[340px] text-center text-[0.95rem] leading-[1.55] text-[#777777] sm:max-w-[760px] sm:text-base xl:max-w-[860px] xl:text-lg 2xl:max-w-[900px]"
            >
              {heroDescription}
            </motion.p>

            <HeroButtons />
          </motion.div>
        </div>

        <MobileBooksCarousel />

        <div className="pointer-events-none absolute inset-x-0 bottom-[84px] z-20 hidden h-[13%] w-full sm:bottom-[-18px] sm:flex sm:h-[31%] md:bottom-[-24px] md:h-[32%] lg:bottom-[-30px] lg:h-[34%] xl:bottom-[-46px] xl:h-[38%] 2xl:bottom-[-88px] 2xl:h-[42%]">
          <div className="flex h-full w-full items-end justify-center gap-[3px] px-2 sm:gap-0 sm:px-3 xl:px-4 2xl:px-10">
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
                  sizes="(max-width: 639px) 20vw, (min-width: 1536px) 22vw, (min-width: 1280px) 19vw, 0px"
                  className="h-auto w-full drop-shadow-[0_20px_36px_rgba(0,0,0,0.22)]"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const HomeHero = () => {
  return (
    <>
      <DesktopHero />
      <style jsx global>{`
        @keyframes hero-logo-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .hero-logo-marquee {
          animation: hero-logo-marquee 28s linear infinite;
          will-change: transform;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x;
        }

        .no-scrollbar::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }

        @media (max-width: 639px) {
          .hero-logo-marquee {
          }
        }
      `}</style>
    </>
  );
};

export default HomeHero;
