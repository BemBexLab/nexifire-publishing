import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

const IncludedIcon = ({ src = "", alt = "" }: { src?: string; alt?: string }) => {
  if (!src) {
    return <div className="h-full w-full rounded-full border border-dashed border-[#B24002]/30" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="h-full w-full object-contain"
    />
  );
};

const includedItems = [
  "Manuscript Assessment",
  "Interior Formatting",
  "ISBN Registration",
  "Print & Digital Publishing",
  "Publishing Consultation",
];

const WhatsIncluded = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[430px_minmax(0,1fr)] xl:gap-16">
        <div className="max-w-[430px]">
          <div
            className="mb-6 flex w-fit items-center justify-center rounded-[9px] px-4 py-2 text-sm text-[#4E4741] sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.10) 0%, rgba(178, 64, 2, 0.00) 82%)",
            }}
          >
            <TextFluxUnveil text="What's Included" />
          </div>

          <h2 className="bg-[linear-gradient(90deg,#282828_0%,#8C8C8C_100%)] bg-clip-text text-[2.8rem] font-normal uppercase leading-[0.98] tracking-[-0.06em] text-transparent sm:text-[3.4rem] lg:text-[4.2rem]">
            Complete Publishing Solutions
          </h2>

          <ul className="mt-9 space-y-5">
            {includedItems.map((item) => (
              <li key={item} className="flex items-center">
                <div className="mt-[1px] h-6 w-6 shrink-0">
                  <IncludedIcon src="/Mask group.svg" alt="" />
                </div>
                <p className="ml-4 text-[15px] font-light leading-[1.45] text-[#838383] sm:text-[16px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <div className="relative mx-auto w-full max-w-[820px] lg:ml-auto lg:mr-0">
            <Image
              src="/439230f4-7c82-4411-9ce5-487944ae406f 1.png"
              alt="Complete publishing solutions"
              width={900}
              height={520}
              sizes="(min-width: 1280px) 820px, (min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
