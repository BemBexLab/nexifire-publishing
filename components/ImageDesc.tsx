import Image from "next/image";
import React from "react";

type ImageDescProps = {
  title: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
};

const ImageDesc = ({
  title,
  paragraphs,
  imageSrc = "",
  imageAlt = "Publishing team",
  reverse = false,
}: ImageDescProps) => {
  return (
    <section className="bg-white px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div
        className={`mx-auto flex w-full max-w-[1540px] flex-col gap-8 lg:items-start lg:gap-8 xl:gap-10 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="w-full min-w-0 lg:basis-[60%] lg:pt-6 lg:max-w-[60%] xl:pt-8">
          <h2 className="project-h2 w-full tracking-[-0.055em]">
            <span>{title}</span>
          </h2>

          <div className="mt-8 w-full space-y-5 text-base leading-[1.55] text-[#7E7E7E] sm:text-lg sm:leading-[1.6]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-none lg:basis-[40%] lg:max-w-[40%] lg:shrink-0">
          <div className="relative w-full aspect-[0.84] overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#f2e8df_0%,#e9ddd2_100%)] shadow-[0_10px_28px_rgba(50,29,11,0.08)]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(180deg,#f4ebe2_0%,#e5d8ca_100%)] text-center text-sm tracking-[0.16em] text-[#b39d88] uppercase">
                Add Image
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageDesc;
