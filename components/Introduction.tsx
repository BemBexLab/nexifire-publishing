"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

type IntroductionProps = {
  imageSrc?: string;
};

const Introduction = ({ imageSrc = "" }: IntroductionProps) => {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:py-18 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1540px] items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 xl:gap-24">
        <div className="relative order-2 min-h-[250px] sm:min-h-[320px] lg:order-1 lg:min-h-[430px]">
          <div className="absolute inset-x-[8%] bottom-[6%] h-[16%] rounded-[999px] bg-[radial-gradient(circle,rgba(91,44,11,0.32)_0%,rgba(91,44,11,0.14)_42%,rgba(91,44,11,0)_78%)] blur-[22px]" />

          <div className="relative mx-auto flex h-full w-full items-center justify-center">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Introduction visual"
                width={700}
                height={460}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto max-h-[460px] w-full max-w-[700px] object-contain"
              />
            ) : (
              <div className="flex h-[250px] w-full max-w-[700px] items-center justify-center rounded-[28px] border border-dashed border-[#d8cabb] bg-[linear-gradient(180deg,#fffdfb_0%,#f8f0ea_100%)] text-center text-sm tracking-[0.18em] text-[#b6a08d] uppercase sm:h-[320px] lg:h-[430px] xl:h-[460px]">
                Add Introduction Image
              </div>
            )}
          </div>
        </div>

        <div className="order-1 max-w-[520px] lg:order-2 lg:max-w-[660px] xl:max-w-[720px]">
          <motion.div
            className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="Introduction" />
          </motion.div>

          <h2 className="mt-5 max-w-[500px] text-[2.45rem] font-normal uppercase leading-[1.02] tracking-[-0.05em] text-[#333333] sm:text-[3rem] lg:max-w-[620px] lg:text-[3.35rem] xl:max-w-[680px]">
            Publish With Confidence
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.65] text-[#9a9a9a] sm:text-base lg:max-w-[620px] xl:max-w-[680px]">
            Publishing a book is an exciting milestone, but navigating the
            process alone can be overwhelming. Our publishing specialists guide
            you through every stage, ensuring your book is professionally
            prepared, published, and positioned for success.
          </p>

          <p className="mt-5 max-w-[520px] text-[15px] leading-[1.65] text-[#9a9a9a] sm:text-base lg:max-w-[620px] xl:max-w-[680px]">
            From manuscript preparation and formatting to distribution and
            launch support, we help bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
