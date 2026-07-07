"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextFluxUnveil from "./TextFluxUnveil";

export type TestimonialItem = {
  quote: string;
  name: string;
  avatarSrc: string;
  featured?: boolean;
  showAvatar?: boolean;
};

export type TestimonialsProps = {
  badgeText: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  testimonials: TestimonialItem[];
};

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

const rotationStep = 1;

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
        className={`testimonial-scroll max-h-[220px] overflow-y-auto pr-1 text-base leading-[1.65] sm:max-h-[240px] sm:text-lg lg:max-h-[116px] lg:text-sm lg:leading-[1.45] xl:max-h-[132px] xl:text-base ${
          item.featured ? "text-white" : "text-[#5b5551]"
        }`}
      >
        {item.quote}
      </p>

      <div className="flex items-center gap-3.5 lg:gap-2.5">
        {item.showAvatar === false ? null : (
          <Image
            src={item.avatarSrc}
            alt={item.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover lg:h-10 lg:w-10"
          />
        )}
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

const Testimonials = ({
  badgeText,
  title,
  description,
  buttonLabel,
  buttonHref,
  testimonials,
}: TestimonialsProps) => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const testimonialCount = testimonials.length;
  const hasTestimonials = testimonialCount > 0;
  const hasMultipleTestimonials = testimonialCount > 1;

  useEffect(() => {
    if (!hasMultipleTestimonials) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRotationIndex((current) => (current + rotationStep) % testimonialCount);
      setMobileIndex((current) => (current + 1) % testimonialCount);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [hasMultipleTestimonials, testimonialCount]);

  const mobileTestimonial = hasTestimonials
    ? testimonials[mobileIndex % testimonialCount]
    : null;

  return (
    <>
      <section id="testimonials" className="overflow-hidden bg-white">
        <div className="relative w-full 2xl:h-[700px]">
          <div
            className="relative w-full bg-cover bg-center bg-no-repeat px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8 2xl:absolute 2xl:inset-x-0 2xl:top-[120px] 2xl:h-[470px] 2xl:px-0 2xl:py-0"
            style={{ backgroundImage: "url('/Frame 2147225735.png')" }}
          >
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1540px] flex-col gap-7 md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 2xl:items-center 2xl:px-10">
              <div className="relative z-20 flex flex-col justify-center lg:h-full lg:w-[min(52vw,720px)] lg:max-w-[720px] 2xl:w-[min(44vw,680px)] 2xl:max-w-[680px]">
                <motion.div
                  className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
                  }}
                >
                  <TextFluxUnveil text={badgeText} />
                </motion.div>

                <h2 className="project-h2 block w-full max-w-full text-left">
                  {title}
                </h2>

                <p className="mt-4 block w-full max-w-[620px] text-base leading-6 text-[#444444] sm:text-lg lg:max-w-[600px] 2xl:max-w-[560px]">
                  {description}
                </p>

                <Link
                  href={buttonHref}
                  className="mt-5 inline-flex w-fit items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-4 py-[8px] text-base font-light leading-none text-white shadow-[0_8px_18px_rgba(255,91,1,0.24)] transition hover:brightness-[1.03] lg:mt-6 sm:text-lg"
                >
                  {buttonLabel}
                  <span className="ml-1.5 text-sm leading-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 18L18 6M18 15V6H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>

              <div className="mt-2 w-full 2xl:hidden lg:mt-4 lg:w-[360px] lg:shrink-0">
                <div className="relative mx-auto min-h-[360px] w-full max-w-[560px] sm:min-h-[390px] lg:min-h-[420px] lg:max-w-[340px]">
                  {mobileTestimonial ? (
                    <motion.div
                      key={mobileTestimonial.name}
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <TestimonialCard
                        item={mobileTestimonial}
                        className="w-full px-9 py-7 sm:px-10 sm:py-8"
                      />
                    </motion.div>
                  ) : null}
                </div>
              </div>

              <div className="relative hidden min-h-[520px] w-[760px] shrink-0 2xl:block">
                {hasTestimonials
                  ? testimonialSlots.map((slot, index) => {
                      const item =
                        testimonials[(index + rotationIndex) % testimonialCount];

                      return (
                        <motion.div
                          key={`${item.name}-lg`}
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
                    })
                  : null}

                {hasTestimonials
                  ? testimonialSlots.map((slot, index) => {
                      const item =
                        testimonials[(index + rotationIndex) % testimonialCount];

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
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .testimonial-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(178, 64, 2, 0.45) transparent;
        }

        .testimonial-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .testimonial-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .testimonial-scroll::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: rgba(178, 64, 2, 0.45);
        }
      `}</style>
    </>
  );
};

export default Testimonials;
