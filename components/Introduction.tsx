"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

type IntroductionProps = {
  eyebrow?: string;
  title?: string;
  description?: string | React.ReactNode;
  imageSrc?: string;
};

const Introduction = ({
  eyebrow = "Introduction",
  title = "Publish With Confidence",
  description = "",
  imageSrc = "",
}: IntroductionProps) => {
  const descriptionParts =
    typeof description === "string"
      ? description
          .split(/\n\s*\n/)
          .map((part) => part.trim())
          .filter(Boolean)
      : [];

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto grid w-full max-w-[1760px] items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 xl:gap-16">
        <div className="relative order-2 min-h-[280px] sm:min-h-[360px] lg:order-1 lg:min-h-[520px]">
          <div className="absolute inset-x-[10%] bottom-[7%] h-[15%] rounded-[999px] bg-[radial-gradient(circle,rgba(91,44,11,0.32)_0%,rgba(91,44,11,0.14)_42%,rgba(91,44,11,0)_78%)] blur-[24px]" />

          <div className="relative mx-auto flex h-full w-full items-center justify-center">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Introduction visual"
                width={920}
                height={620}
                sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 50vw, 100vw"
                className="h-auto max-h-[620px] w-full max-w-[920px] object-contain"
              />
            ) : (
              <div className="flex h-[280px] w-full max-w-[920px] items-center justify-center rounded-[28px] border border-dashed border-[#d8cabb] bg-[linear-gradient(180deg,#fffdfb_0%,#f8f0ea_100%)] text-center text-sm tracking-[0.18em] text-[#b6a08d] uppercase sm:h-[360px] lg:h-[520px] xl:h-[620px]">
                Add Introduction Image
              </div>
            )}
          </div>
        </div>

        <div className="order-1 max-w-[520px] lg:order-2 lg:max-w-[760px] xl:max-w-[860px]">
          <motion.div
            className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text={eyebrow} />
          </motion.div>

          <h2 className="project-h2 mt-5 max-w-[500px] leading-[1.02] lg:max-w-[760px] xl:max-w-[860px]">
            {title}
          </h2>

          {typeof description === "string" ? (
            descriptionParts.map((part, index) => (
              <p
                key={`${part.slice(0, 40)}-${index}`}
                className={`max-w-[520px] text-base leading-[1.7] text-[#777777] sm:text-lg lg:max-w-[760px] xl:max-w-[820px] ${
                  index === 0 ? "mt-6" : "mt-5"
                }`}
              >
                {part}
              </p>
            ))
          ) : (
            <div className="mt-6 max-w-[520px] text-base leading-[1.7] text-[#777777] sm:text-lg lg:max-w-[760px] xl:max-w-[820px]">
              {description}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
