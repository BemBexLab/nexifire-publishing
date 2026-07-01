import Image from "next/image";
import React from "react";

type ImageDescProps = {
  imageSrc?: string;
};

const ImageDesc = ({ imageSrc = "" }: ImageDescProps) => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1540px] items-start gap-10 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-20">
        <div className="max-w-[760px] lg:pt-6 xl:pt-8">
          <h2 className="max-w-[700px] font-jakarta text-[2.45rem] font-normal uppercase leading-[1.08] tracking-[-0.055em] text-[#454545] sm:text-[3rem] lg:text-[4rem]">
            <span className="block">Expert Self Publishing</span>
            <span className="block">Services In Australia:</span>
            <span className="block">Complete Support</span>
          </h2>

          <div className="mt-8 max-w-[690px] space-y-5 text-[15px] leading-[1.55] text-[#7E7E7E] sm:text-[16px] sm:leading-[1.6]">
            <p>
              Nexifire Publishing is a complete self-publishing company that
              helps authors turn their ideas into professionally published
              books. Our services cover writing, editing, design, publishing,
              and marketing, and we handle the entire process for you, from the
              first conversation to the final listing.
            </p>

            <p>
              Whether you are a first-time author with just an idea, a writer
              sitting on a completed manuscript, or a business professional
              ready to share your expertise with the world, our team is here to
              guide you at every step, in your genre, with your goals in mind.
            </p>

            <p>
              What sets us apart is our complete, all-in-one approach. With
              experienced ghostwriters, editors, designers, publishing
              specialists, and marketing professionals working together under
              one roof, we make sure your book is created, published, and
              promoted to the highest professional standards. We provide access
              to 40+ global publishing platforms, giving your book worldwide
              reach while you retain full ownership of everything you have
              written.
            </p>

            <p>
              At Nexifire Publishing, our mission is simple: to help authors
              publish with confidence, build credibility, and connect their
              stories with readers around the world.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="relative aspect-[0.84] overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#f2e8df_0%,#e9ddd2_100%)] shadow-[0_10px_28px_rgba(50,29,11,0.08)]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Publishing team"
                fill
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 480px, 100vw"
                className="object-cover"
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
