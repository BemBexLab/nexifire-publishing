import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

const checkIcon = "/Mask group.svg";

const genreItems = [
  "Business & Entrepreneurship",
  "Technology & Education",
  "Self-Help & Personal Development",
  "Fiction & Creative Writing",
  "Health & Wellness",
  "Biographies & Memoirs",
];

const writingQualityItems = [
  "100% original content",
  "No plagiarism",
  "Clear, engaging, and reader-focused writing",
];

const processItems = [
  "Concept discussion & project planning",
  "Outline creation & approval",
  "Writing & content development",
  "Client review & revisions",
  "Final delivery (ready for editing & publishing)",
];

const audienceItems = [
  "First-time authors",
  "Entrepreneurs & coaches",
  "Business owners",
];

const CheckItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 h-[18px] w-[18px] shrink-0">
        <Image
          src={checkIcon}
          alt=""
          width={18}
          height={18}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-[15px] leading-[1.5] text-[#6F6F6F]">{children}</span>
    </li>
  );
};

const cardBaseClassName =
  "rounded-[22px] border border-[#EDE4DD] shadow-[0_10px_30px_rgba(60,35,12,0.08)]";

const MosiacCards = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[1090px] text-center">
          <div
            className="mx-auto mb-6 flex w-fit items-center justify-center rounded-[9px] px-4 py-2 text-sm text-[#4E4741] sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.10) 0%, rgba(178, 64, 2, 0.00) 82%)",
            }}
          >
            <TextFluxUnveil text="Lorem Ipsum Dolor Sit Amet" />
          </div>

          <h2
            className="bg-clip-text text-[2.65rem] font-normal uppercase leading-[1.04] tracking-[-0.06em] text-transparent sm:text-[3.35rem] lg:text-[4.45rem]"
            style={{ backgroundImage: "linear-gradient(90deg, #282828 0%, #8C8C8C 100%)" }}
          >
            Lorem Ipsum Dolor Sit Amet Consectetur. Adipiscing.
          </h2>

          <p className="mx-auto mt-5 max-w-[920px] text-[15px] leading-[1.7] text-[#8B8B8B] sm:text-[17px]">
            Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque
            habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum
            sed tortor parturient nisl. Posuere ridiculus adipiscing pulvinar
            suspendisse. Proin turpis in pharetra odio odio ullamcorper elit.
            Massa tristique nec in commodo.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5">
          <div className="flex h-full flex-col gap-4 lg:gap-5">
            <div
              className={`${cardBaseClassName} flex flex-[0.9] flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <h3 className="text-[1.05rem] font-semibold leading-tight text-[#2E2E2E] sm:text-[1.12rem]">
                Idea Development & Research
              </h3>
              <p className="mt-4 max-w-[500px] text-[15px] leading-[1.6] text-[#6F6F6F]">
                Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque
                habitant. Bibendum sed faucibus eget lacus etiam. Proin eget
                rutrum sed tortor parturient nisl.
              </p>
            </div>

            <div
              className={`${cardBaseClassName} flex flex-[1.2] flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <h3 className="text-[1.05rem] font-semibold leading-tight text-[#2E2E2E] sm:text-[1.12rem]">
                Genres We Cover
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-[#6F6F6F]">
                Ink Founders offers writing services across a wide range of
                genres, including:
              </p>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {genreItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div
              className={`${cardBaseClassName} flex flex-1 flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <h3 className="text-[1.05rem] font-semibold leading-tight text-[#2E2E2E] sm:text-[1.12rem]">
                Our Writing Process
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {processItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-full flex-col gap-4 lg:gap-5 lg:pt-[2px]">
            <div
              className={`${cardBaseClassName} flex flex-[1.15] flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <h3 className="text-[1.05rem] font-semibold leading-tight text-[#2E2E2E] sm:text-[1.12rem]">
                Original, High-Quality Writing
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-[#6F6F6F]">
                Every eBook is written from scratch, ensuring:
              </p>
              <ul className="mt-4 space-y-2.5">
                {writingQualityItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div
              className={`${cardBaseClassName} flex flex-[0.75] flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <h3 className="text-[1.05rem] font-semibold leading-tight text-[#2E2E2E] sm:text-[1.12rem]">
                Voice Matching (Ghostwriting)
              </h3>
              <p className="mt-4 max-w-[500px] text-[15px] leading-[1.6] text-[#6F6F6F]">
                For ghostwriting projects, we carefully adapt to your tone,
                style, and personality so the book truly feels like you wrote
                it.
              </p>
            </div>

            <div
              className={`${cardBaseClassName} flex flex-1 flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <h3 className="text-[1.05rem] font-semibold leading-tight text-[#2E2E2E] sm:text-[1.12rem]">
                Who This Service Is For
              </h3>
              <ul className="mt-5 space-y-2.5">
                {audienceItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosiacCards;
