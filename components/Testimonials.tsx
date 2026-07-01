"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    key: "left",
    zIndex: 10,
    lg: {
      x: 0,
      y: -38,
    },
    xl: {
      x: 5,
      y: -65,
    },
  },
  {
    key: "right",
    zIndex: 30,
    lg: {
      x: 302,
      y: 0,
    },
    xl: {
      x: 400,
      y: 0,
    },
  },
  {
    key: "bottom",
    zIndex: 20,
    lg: {
      x: 175,
      y: 196,
    },
    xl: {
      x: 235,
      y: 218,
    },
  },
];

const rotationStep = 2;

type TestimonialItem = (typeof testimonials)[number];

const TestimonialCard = ({
  item,
  className,
}: {
  item: TestimonialItem;
  className?: string;
}) => {
  return (
    <article
      className={`grid h-full grid-rows-[auto_1fr_auto] gap-y-6 rounded-[16px] px-9 py-8 shadow-[0_18px_34px_rgba(61,38,17,0.09)] lg:gap-y-5 xl:gap-y-6 ${
        item.featured
          ? "bg-[linear-gradient(180deg,#C44C00_0%,#BC4C03_100%)] text-white"
          : "bg-[#f8f3ef] text-[#57514d]"
      } ${className ?? ""}`}
    >
      <div
        className={`text-6xl font-semibold leading-none lg:text-5xl xl:text-6xl ${
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
        className={`text-base leading-[1.65] sm:text-lg lg:text-sm lg:leading-[1.45] xl:text-base ${
          item.featured ? "text-white" : "text-[#5b5551]"
        }`}
      >
        {item.quote}
      </p>

      <div className="flex items-center gap-3.5 lg:gap-2.5">
        <Image
          src={item.avatarSrc}
          alt={item.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover lg:h-10 lg:w-10"
        />
        <div
          className={`text-lg leading-none lg:text-base ${
            item.featured ? "text-[#FFFFFF]" : "text-[#444444]"
          }`}
        >
          {item.name}
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRotationIndex((current) => (current + rotationStep) % testimonialSlots.length);
      setMobileIndex((current) => (current + 1) % testimonials.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="testimonials" className="overflow-hidden bg-white">
      <div className="relative h-[680px] w-full md:h-[640px] xl:h-[700px]">
        <div
          className="absolute inset-x-0 top-[120px] h-[440px] w-full bg-cover bg-center bg-no-repeat md:h-[430px] xl:h-[470px]"
          style={{ backgroundImage: "url('/Frame 2147225735.png')" }}
        >
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1540px] flex-col gap-7 px-6 md:gap-8 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:px-10">
            <div className="flex flex-col justify-center lg:h-full lg:w-[360px] lg:max-w-full xl:w-[420px]">
              <motion.div
                className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
                }}
              >
                <TextFluxUnveil text="Who We Are" />
              </motion.div>

              <h2 className="project-h2 block w-full max-w-full text-left lg:w-[520px] lg:max-w-none xl:w-[620px]">
                What Authors Say About Us
              </h2>

              <Link
                href="#"
                className="mt-5 inline-flex w-fit items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-4 py-[8px] text-base font-light leading-none text-white shadow-[0_8px_18px_rgba(255,91,1,0.24)] transition hover:brightness-[1.03] lg:mt-6 sm:text-lg"
              >
                View All Review
                <span className="ml-1.5 text-sm leading-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M18 15V6H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>

            <div className="w-full lg:hidden">
              <div className="relative mx-auto min-h-[250px] w-full max-w-[560px] sm:min-h-[272px]">
                <motion.div
                  key={testimonials[mobileIndex].name}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <TestimonialCard
                    item={testimonials[mobileIndex]}
                    className="w-full px-9 py-7 sm:px-10 sm:py-8"
                  />
                </motion.div>
              </div>
            </div>

            <div className="relative hidden min-h-[520px] w-[650px] -translate-x-[24px] lg:block xl:w-[760px] xl:-translate-x-[56px]">
              {testimonials.map((item, index) => {
                const slot =
                  testimonialSlots[
                    (index + rotationIndex) % testimonialSlots.length
                  ];

                return (
                  <motion.div
                    key={item.name}
                    initial={false}
                    animate={{
                      x: slot.lg.x,
                      y: slot.lg.y,
                    }}
                    transition={{
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ zIndex: slot.zIndex }}
                    className="absolute left-0 top-0 xl:hidden"
                  >
                    <TestimonialCard
                      item={item}
                      className="min-h-[280px] w-[320px] px-7 py-8"
                    />
                  </motion.div>
                );
              })}

              {testimonials.map((item, index) => {
                const slot =
                  testimonialSlots[
                    (index + rotationIndex) % testimonialSlots.length
                  ];

                return (
                  <motion.div
                    key={`${item.name}-xl`}
                    initial={false}
                    animate={{
                      x: slot.xl.x,
                      y: slot.xl.y,
                    }}
                    transition={{
                      duration: 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ zIndex: slot.zIndex }}
                    className="absolute left-0 top-0 hidden xl:block"
                  >
                    <TestimonialCard
                      item={item}
                      className="min-h-[305px] w-[360px] px-7 py-10"
                    />
                  </motion.div>
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
