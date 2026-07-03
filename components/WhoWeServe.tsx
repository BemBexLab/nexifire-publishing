"use client";

import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";
import { motion } from "motion/react";
import { defaultWhoWeServeData } from "@/data/whoWeServe";

const accentPath =
  "M148.828 278.535C160.599 271.782 171.659 266.094 182.072 261.532L173.043 273.615C167.335 281.254 156.869 283.241 148.828 278.535ZM97.8444 240.587C104.215 238.265 110.601 235.024 116.956 230.735C157.247 203.541 190.534 185.248 218.504 177.53C229.059 174.618 238.829 173.219 247.918 173.41L221.313 209.015C218.267 209.625 215.163 210.367 211.998 211.241C186.082 218.392 155.964 234.33 120.512 257.525L97.8444 240.587ZM46.9303 202.544C70.6942 210.907 96.8089 210.65 122.446 193.346C162.737 166.153 196.024 147.86 223.994 140.142C242.726 134.974 258.984 134.567 273.354 139.369L250.689 169.701C240.412 169.137 229.376 170.574 217.489 173.854C188.89 181.745 155.176 200.338 114.822 227.573C107.949 232.212 101.039 235.571 94.148 237.825L46.9303 202.544ZM9.18755 139.719C16.4417 145.706 24.2415 151.253 32.4556 155.939C61.0346 172.245 94.8832 178.268 127.937 155.959C168.228 128.766 201.516 110.474 229.485 102.756C240.922 99.5999 251.437 98.2202 261.163 98.7164L273.614 108.021C281.824 114.155 283.506 125.783 277.372 133.992L275.752 136.16C260.245 130.648 242.793 130.998 222.979 136.466C194.38 144.357 160.666 162.95 120.312 190.185C90.6439 210.209 60.3106 206.411 33.6501 192.62L7.44952 173.043C-0.759274 166.909 -2.44153 155.282 3.69226 147.073L9.18755 139.719ZM123.767 259.957C158.598 237.251 187.942 221.835 213.013 214.917C214.636 214.47 216.24 214.058 217.826 213.682L186.591 255.484C173.822 260.666 160.125 267.592 145.391 276.115L123.767 259.957ZM29.0901 113.083C32.0275 115.045 35.0285 116.91 38.0869 118.656C66.7151 134.999 100.611 141.059 133.686 118.765C167.987 95.6448 197.218 78.9688 222.42 69.7669L255.943 94.8163C247.32 94.9507 238.178 96.3989 228.47 99.0778C199.872 106.969 166.157 125.562 125.803 152.798C94.341 174.033 62.1302 168.479 34.3458 152.627C26.28 148.025 18.6099 142.564 11.4725 136.661L29.0901 113.083ZM50.5375 84.3799C77.6933 97.9331 108.948 101.536 139.503 80.9411C158.989 67.807 176.838 56.7516 193.242 47.9652L218.783 67.0499C193.653 76.5819 164.862 93.1518 131.554 115.603C100.073 136.822 67.8143 131.236 39.9773 115.345C37.0562 113.677 34.1876 111.896 31.3762 110.024L50.5375 84.3799ZM73.2617 53.9682C96.0104 61.0039 120.723 59.9119 144.993 43.5526C152.786 38.2998 160.318 33.3806 167.6 28.805L189.874 45.4481C173.724 54.1899 156.275 65.0373 137.371 77.7791C108.518 97.2265 79.0143 94.156 52.8582 81.2742L73.2617 53.9682ZM98.3251 20.4258C112.991 21.609 128.151 18.9003 143.234 10.5982L164.327 26.3593C157.387 30.7402 150.235 35.4208 142.861 40.3906C120.228 55.6463 97.1927 57.0457 75.6875 50.7217L98.3251 20.4258ZM108.021 7.44992C114.155 -0.759133 125.782 -2.44183 133.991 3.69187L139.863 8.07945C126.856 14.8931 113.797 17.4093 101.047 16.7827L108.021 7.44992Z";

export type WhoWeServeStat = {
  value: string;
  label: string;
  highlighted?: boolean;
};

export type WhoWeServeProps = {
  badgeText: string;
  title: string;
  description: string;
  stats: WhoWeServeStat[];
  genres: string[];
};

const WhoWeServe = ({
  badgeText = defaultWhoWeServeData.badgeText,
  title = defaultWhoWeServeData.title,
  description = defaultWhoWeServeData.description,
  stats = defaultWhoWeServeData.stats,
  genres = defaultWhoWeServeData.genres,
}: WhoWeServeProps) => {
  return (
    <section className="overflow-hidden bg-transparent px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={`rounded-[22px] border px-7 py-8 shadow-[0_8px_24px_rgba(44,44,44,0.08)] ${
                stat.highlighted
                  ? "border-[#F3E4D7] bg-[linear-gradient(180deg,#FFF9F5_0%,#FFF2E8_100%)]"
                  : "border-[#EEE8E1] bg-white"
              }`}
            >
              <div className="bg-[linear-gradient(90deg,#282828_0%,#8C8C8C_100%)] bg-clip-text text-6xl font-medium leading-none tracking-[-0.06em] text-transparent sm:text-7xl">
                {stat.value}
              </div>
              <p className="mt-4 text-sm leading-[1.5] text-[#7D7D7D] sm:text-base">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="282"
            height="282"
            viewBox="0 0 282 282"
            fill="none"
            className="pointer-events-none absolute right-[-3%] -top-[5%] z-0 w-[190px] max-w-none sm:w-[230px] lg:w-[310px]"
            aria-hidden="true"
          >
            <path opacity="0.1" d={accentPath} fill="#FF5B01" />
          </svg>

          <div className="relative z-10 max-w-[640px]">
            <motion.div
              className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text={badgeText} />
            </motion.div>

            <h2 className="project-h2 leading-[1.04] tracking-[-0.055em]">{title}</h2>

            <p className="mt-4 max-w-[560px] text-base leading-[1.7] text-[#8C8C8C] sm:text-lg">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="inline-flex items-center rounded-[10px] border border-[#EEE7E1] bg-white px-4 py-2 text-sm text-[#7C7C7C] shadow-[0_3px_10px_rgba(40,40,40,0.04)] sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#FF5B01]"
                  />
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
