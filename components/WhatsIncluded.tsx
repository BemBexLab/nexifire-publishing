import Image from "next/image";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

type WhatsIncludedItem = {
  label: string;
};

type WhatsIncludedProps = {
  badgeText: string;
  title: string;
  description?: string | React.ReactNode;
  items?: WhatsIncludedItem[];
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  iconAlt?: string;
};

const IncludedIcon = ({ src, alt = "" }: { src: string; alt?: string }) => {
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

const WhatsIncluded = ({
  badgeText,
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  iconSrc,
  iconAlt = "",
}: WhatsIncludedProps) => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1460px] items-center gap-6 xl:items-stretch xl:grid-cols-[minmax(0,560px)_minmax(0,1fr)] xl:gap-6 2xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] 2xl:gap-8">
        <div className="max-w-[680px]">
          <div
            className="mb-6 flex w-fit items-center justify-center rounded-[9px] px-4 py-2 text-sm text-[#4E4741] sm:px-5 sm:text-base"
            style={{
              background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.10) 0%, rgba(178, 64, 2, 0.00) 82%)",
            }}
          >
            <TextFluxUnveil text={badgeText} />
          </div>

          <h2 className="project-h2 max-w-[14ch] leading-[0.98] tracking-[-0.06em] sm:max-w-[16ch] lg:max-w-[18ch] xl:max-w-none">
            {title}
          </h2>
          <p className="my-5 text-base font-light leading-[1.45] text-[#444444] sm:text-lg">
            {description}
          </p>

          <ul className="space-y-5">
            {items?.map((item) => (
              <li key={item.label} className="flex items-center">
                <div className="mt-[1px] h-6 w-6 shrink-0">
                  <IncludedIcon src={iconSrc} alt={iconAlt} />
                </div>
                <p className="ml-4 text-base font-light leading-[1.45] text-[#777777] sm:text-lg">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <div className="relative mx-auto w-full max-w-[760px] xl:ml-0 xl:mr-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
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
