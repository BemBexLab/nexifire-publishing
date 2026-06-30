"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const testimonials = [
  {
    quote:
      "NexiFire Publishing guided me through every step of the publishing process. Their expertise turned my manuscript into a professional book I am proud to share.",
    name: "Natalie Brooks",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    featured: false,
    showAvatar: true,
  },
  {
    quote:
      "The communication, quality, and attention to detail exceeded my expectations. I highly recommend their team to any aspiring author.",
    name: "Daniel Carter",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    featured: false,
    showAvatar: true,
  },
  {
    quote:
      "From editing to distribution, everything was handled professionally. The process was smooth and stress-free.",
    name: "Sophia Bennett",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
    featured: true,
    showAvatar: true,
  },
];

const testimonialSlots = [
  {
    zIndex: 10,
    style: {
      left: "24px",
      top: "-35px",
    },
    initial: { x: -120, y: 0 },
  },
  {
    zIndex: 30,
    style: {
      right: "0px",
      top: "-13px",
    },
    initial: { x: 120, y: 0 },
  },
  {
    zIndex: 20,
    style: {
      left: "235px",
      top: "158px",
    },
    initial: { x: 0, y: 120 },
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="overflow-hidden bg-white">
      <div className="relative h-[55vh] w-full">
        <div
          className="absolute inset-x-0 top-[112px] h-[35vh] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Frame 2147225735.png')" }}
        >
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1120px] flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between md:gap-0 md:px-8">
            <div className="flex flex-col justify-center md:h-full md:w-[380px] md:max-w-full">
              <motion.div
                className="mb-4 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-[12px] text-black"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
                }}
              >
                Testimonials
              </motion.div>

              <h2 className="block w-full max-w-[10ch] bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-left text-[2.2rem] font-normal uppercase leading-[1.08] text-transparent sm:text-[2.9rem] md:text-[38px]">
                What Authors Say About Us
              </h2>

              <Link
                href="#"
                className="mt-4 inline-flex h-[31px] w-[132px] items-center justify-center rounded-[5px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] text-[12px] font-light leading-none text-white shadow-[0_10px_20px_rgba(255,91,1,0.22)] transition hover:brightness-[1.03]"
              >
                View All Reviews
                <span className="ml-1.5 text-sm leading-none">
                  <MdOutlineArrowOutward />
                </span>
              </Link>
            </div>

            <div className="relative flex min-h-0 w-full flex-col gap-6 sm:gap-8 md:h-full md:w-[690px] md:block">
              {testimonials.map((item, index) => {
                const slot = testimonialSlots[index];

                return (
                  <motion.article
                    key={index}
                    initial={false}
                    style={{ ...slot.style, zIndex: slot.zIndex }}
                    className={`rounded-[16px] px-9 py-8 shadow-[0_18px_34px_rgba(61,38,17,0.09)] ${
                      item.featured
                        ? "bg-[linear-gradient(180deg,#C44C00_0%,#BC4C03_100%)] text-white"
                        : "bg-[#f8f3ef] text-[#57514d]"
                    } w-full max-w-[560px] self-center sm:px-10 md:absolute md:max-w-none md:w-[300px] md:px-5 md:py-5`}
                  >
                    <div
                      className={`text-[4.9rem] font-semibold leading-none md:text-[3.7rem] ${
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
                      className={`mt-2 text-base leading-[1.65] sm:text-[18px] md:mt-1 md:text-[14px] md:leading-[1.45] ${
                        item.featured ? "text-white" : "text-[#5b5551]"
                      }`}
                    >
                      {item.quote}
                    </p>

                    {item.showAvatar ? (
                      <div className="mt-8 flex items-center gap-3.5 md:mt-5 md:gap-2.5">
                        <Image
                          src={item.avatarSrc!}
                          alt={item.name}
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-full object-cover md:h-10 md:w-10"
                        />
                        <div
                          className={`text-[18px] leading-none md:text-[14px] ${
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
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
