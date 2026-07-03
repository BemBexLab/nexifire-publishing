import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

const checkIcon = "/Mask group.svg";

const writingThatReflectsYou = [
  "Your story, captured in your voice.",
  "Professional ghostwriting services Australia, Nexifire Publishing",
  "Non-disclosure agreements included",
  "Your name on the cover, always",
  "Full intellectual property transfer",
  "Dedicated ghostwriter assigned to your project",
];

const genreItems = [
  "Memoir & Personal Story",
  "Business & Leadership Books",
  "Self-Help & Personal Development",
  "Children's Books",
  "Ebook Ghostwriting",
  "Academic & Professional Books",
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
      <span className="text-base leading-[1.5] text-[#444444] sm:text-md">{children}</span>
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
            <TextFluxUnveil text="Your Book, Written for You" />
          </div>

          <h2 className="project-h2 leading-[1.04] tracking-[-0.06em]">
            Professional Ghostwriting Services in Australia
          </h2>

          {/* <p className="mx-auto mt-5 max-w-[920px] text-base leading-[1.7] text-[#8B8B8B] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Quis sit facilisis neque
            habitant. Bibendum sed faucibus eget lacus etiam. Proin eget rutrum
            sed tortor parturient nisl. Posuere ridiculus adipiscing pulvinar
            suspendisse. Proin turpis in pharetra odio odio ullamcorper elit.
            Massa tristique nec in commodo.
          </p> */}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5">
          <div className="flex h-full flex-col gap-4 lg:gap-5">
            <div
              className={`${cardBaseClassName} flex flex-[0.9] flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <h3 className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl">
                Writing That Reflects You
              </h3>
              <p className="mt-4 max-w-[500px] text-base leading-[1.6] text-[#444444] sm:text-md">
                At Nexifire Publishing, we take the time to understand who you are, how you speak, what you want to say, and the readers you want to reach. The result is a book that truly feels like yours, because it is.
              </p>
              
            </div>

            <div
              className={`${cardBaseClassName} flex flex-[1.2] flex-col bg-white px-6 py-7 sm:px-7`}
            >
              
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {writingThatReflectsYou.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div
              className={`${cardBaseClassName} flex flex-1 flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <h3 className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl">
                Real Australian Ghostwriters
              </h3>
              <p className="mt-4 text-base leading-[1.6] text-[#444444] sm:text-md">
                Our ghostwriters are based in Australia. They understand Australian readers, cultural context, colloquialisms, and storytelling sensibilities. You will not receive content written overseas and reworked; every word is written by a skilled local professional who understands your audience.
              </p>
              {/* <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {processItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul> */}
            </div>
          </div>

          <div className="flex h-full flex-col gap-4 lg:gap-5 lg:pt-[2px]">
            <div
              className={`${cardBaseClassName} flex flex-[1.15] flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <h3 className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl">
                Ghostwriting for Every Genre
              </h3>
              <p className="mt-4 text-base leading-[1.6] text-[#444444] sm:text-md">
                We Write the Books Australians Are Waiting to Read<br />From personal memoirs to business books, children's stories to self-help guides, our team includes experienced ghostwriters who specialise in the genre that matters to you.
              </p>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {genreItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              {/* <ul className="mt-4 space-y-2.5">
                {writingQualityItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul> */}
            </div>

            <div
              className={`${cardBaseClassName} flex flex-[0.75] flex-col bg-[#FFF4EC] px-6 py-7 sm:px-7`}
            >
              <h3 className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl">
                Transparent Pricing for Every Budget
              </h3>
              <p className="mt-4 max-w-[500px] text-base leading-[1.6] text-[#444444] sm:text-md">
                We believe you should know what you are investing before you commit. Our packages are clearly priced, flexible, and can be customised to match the scope and complexity of your project.
              </p>
            </div>

            <div
              className={`${cardBaseClassName} flex flex-1 flex-col bg-white px-6 py-7 sm:px-7`}
            >
              <h3 className="text-lg font-semibold leading-tight text-[#2E2E2E] sm:text-xl">
                Why Ghostwriting?
              </h3>
              <p className="mt-4 text-base leading-[1.6] text-[#444444] sm:text-md">
                Many executives, professionals, and thought leaders use ghostwriting services to share their expertise and build authority. A book is one of the most effective ways to establish credibility in any industry, and you don’t have to spend years writing it yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosiacCards;
