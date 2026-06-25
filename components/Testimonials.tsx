"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextFluxUnveil from "./TextFluxUnveil";

const testimonials = [
  {
    quote:
      "NexiFire Publishing guided me through every step of the publishing process. Their expertise turned my manuscript into a professional book I am proud to share.",
    name: "Natalie Brooks",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    featured: false,
    showAvatar: true,
    layer: "lg:z-10",
    position: "lg:left-[calc(12%+65px)] lg:top-[-56px] xl:left-[calc(14%+65px)] xl:top-[-60px]",
  },
  {
    quote:
      "The communication, quality, and attention to detail exceeded my expectations. I highly recommend their team to any aspiring author.",
    name: "Daniel Carter",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    featured: false,
    showAvatar: true,
    layer: "lg:z-30",
    position:
      "lg:right-[calc(6%-70px)] lg:top-[-10px] xl:right-[calc(8%-70px)] xl:top-[-16px]",
  },
  {
    quote:
      "From editing to distribution, everything was handled professionally. The process was smooth and stress-free.",
    name: "Sophia Bennett",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
    featured: true,
    showAvatar: true,
    layer: "lg:z-20",
    position:
      "lg:left-[calc(30%+100px)] lg:top-[261px] xl:left-[calc(32%+100px)] xl:top-[249px]",
  },
];

const Testimonials = () => {
  return (
    <section className="overflow-hidden bg-white pt-12 sm:pt-14 lg:pt-16">
      <div className="relative w-full">
        <div
          className="absolute left-1/2 top-[72px] h-[400px] w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:top-[66px] lg:h-[400px]"
          style={{ backgroundImage: "url('/Frame 2147225735.png')" }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex w-full flex-col gap-12 px-4 sm:px-6 md:px-10 lg:min-h-[520px] lg:flex-row lg:items-start lg:justify-between lg:px-16 xl:px-24">
          <div className="pt-8 lg:w-[29%] lg:pt-[140px]">
            <motion.div
              className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
            >
              <TextFluxUnveil text="Who We Are" />
            </motion.div>

            <h2 className="block w-full max-w-full font-jakarta bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left text-[2.2rem] font-normal uppercase leading-[1.08] tracking-[-0.045em] text-transparent sm:text-[2.9rem] md:text-[3.6rem] lg:text-[4rem]">
              What Authors Say About Us
            </h2>

            <Link
              href="#"
              className="mt-5 inline-flex items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-3 text-[15px] font-medium leading-none text-white shadow-[0_10px_20px_rgba(255,91,1,0.22)] transition hover:brightness-[1.03]"
            >
              View All Reviews
              <span className="ml-2 text-base leading-none">
                <MdOutlineArrowOutward />
              </span>
            </Link>
          </div>

          <div className="relative flex min-h-[740px] w-full flex-col gap-8 lg:min-h-[650px] lg:w-[66%] lg:block">
            {testimonials.map((item, index) => (
              <article
                key={index}
                className={`rounded-[20px] px-9 py-8 shadow-[0_18px_34px_rgba(61,38,17,0.09)] ${
                  item.featured
                    ? "bg-[linear-gradient(180deg,#C44C00_0%,#BC4C03_100%)] text-white"
                    : "bg-[#f8f3ef] text-[#57514d]"
                } ${item.position} ${item.layer} lg:absolute lg:w-[380px] xl:w-[408px]`}
              >
                <div
                  className={`text-[4.9rem] font-semibold leading-none tracking-[-0.08em] ${
                    item.featured ? "text-white" : "text-[#FF5B01]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="47"
                    viewBox="0 0 58 49"
                    fill="none"
                  >
                    <path
                      d="M0 48.8709V31.0226C0 22.8067 2.41667 16.0073 7.25 10.6245C12.2767 5.24165 19.5267 1.70032 29 0.000488281V7.43728C23.2 8.57051 19.0433 10.6953 16.53 13.8117C14.0167 16.7864 12.5667 20.6819 12.18 25.4981H23.2V48.8709H0Z"
                      fill={item.featured ? "white" : "#FF5B01"}
                    />
                    <path
                      d="M29 48.8709V31.0226C29 22.8067 31.4167 16.0073 36.25 10.6245C41.2767 5.24165 48.5267 1.70032 58 0.000488281V7.43728C52.2 8.57051 48.0433 10.6953 45.53 13.8117C43.0167 16.7864 41.5667 20.6819 41.18 25.4981H52.2V48.8709H29Z"
                      fill={item.featured ? "white" : "#FF5B01"}
                    />
                  </svg>
                </div>

                <p
                  className={`mt-3 text-[18px] leading-[1.6] ${
                    item.featured ? "text-white" : "text-[#5b5551]"
                  }`}
                >
                  {item.quote}
                </p>

                {item.showAvatar ? (
                  <div className="mt-8 flex items-center gap-3.5">
                    <Image
                      src={item.avatarSrc!}
                      alt={item.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div
                      className={`text-[18px] leading-none ${
                        item.featured ? "text-[#FFFFFF]" : "text-[#444444]"
                      }`}
                    >
                      {item.name}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`mt-8 text-center text-[18px] leading-none ${
                      item.featured ? "text-[#FFFFFF]" : "text-[#444444]"
                    }`}
                  >
                    {item.name}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
