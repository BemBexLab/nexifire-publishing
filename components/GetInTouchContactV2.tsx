"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { TfiArrowTopRight } from "react-icons/tfi";
import TextFluxUnveil from "./TextFluxUnveil";
import { useContactForm } from "@/components/useContactForm";
import Link from "next/link";

const ContactFormCurve = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="856"
    height="867"
    viewBox="0 0 856 867"
    fill="none"
    className="h-auto w-full"
    aria-hidden="true"
  >
    <path
      opacity="0.1"
      d="M13.9481 450.203C109.43 252.184 341.354 -104.483 505.196 52.9985C709.999 249.85 309.958 546.573 236.67 724.152C178.04 866.215 272.603 862.704 327.213 843.191C434.971 775.66 668.918 624.851 742.646 561.865C802.025 518.011 870.56 525.78 829.048 590.355C777.157 671.074 631.488 770.887 535.562 782.305C458.822 791.44 577.791 576.107 646.868 467.299"
      stroke="#B24002"
      strokeWidth="27.89"
      strokeLinecap="round"
    />
  </svg>
);

const ContactAccentShape = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="154"
    height="154"
    viewBox="0 0 154 154"
    fill="none"
    className="h-auto w-full"
    aria-hidden="true"
  >
    <path
      opacity="0.1"
      d="M84.6218 153.536C90.1605 150.459 95.4164 147.816 100.41 145.628L100.06 146.096C96.2965 151.134 90.4637 153.712 84.6218 153.536ZM52.4799 133.707C56.1057 132.385 59.7403 130.543 63.3572 128.102C86.2845 112.628 105.227 102.219 121.142 97.8268C127.149 96.1694 132.708 95.3738 137.88 95.4827L122.741 115.743C121.008 116.09 119.241 116.512 117.44 117.009C102.693 121.078 85.5544 130.148 65.3807 143.347L52.4799 133.707ZM23.5084 112.059C37.0316 116.819 51.8926 116.673 66.482 106.827C89.4094 91.3525 108.352 80.9428 124.268 76.551C134.735 73.6628 143.844 73.3894 151.912 75.9676C151.366 77.1779 150.682 78.3488 149.855 79.4566L139.457 93.372C133.609 93.0511 127.329 93.8677 120.565 95.734C104.291 100.225 85.1061 110.805 62.1433 126.304C58.232 128.943 54.2999 130.854 50.3787 132.137L23.5084 112.059ZM67.2332 144.731C87.0537 131.81 103.752 123.038 118.018 119.101C118.941 118.846 119.854 118.612 120.757 118.398L102.982 142.186C96.1465 144.96 88.844 148.612 81.0229 153.073C78.5853 152.512 76.2217 151.447 74.0892 149.854L67.2332 144.731ZM2.19332 76.4414C6.27594 79.7983 10.6601 82.9077 15.274 85.5402C31.5366 94.8188 50.7978 98.2465 69.6068 85.5519C92.5339 70.0777 111.475 59.6681 127.391 55.2763C133.899 53.4805 139.883 52.6959 145.417 52.9781L146.097 53.4861C152.588 58.3367 154.997 66.6222 152.689 73.9365C144.123 71.1696 134.528 71.4685 123.69 74.4591C107.416 78.9496 88.2306 89.529 65.2678 105.027C48.3842 116.422 31.1224 114.26 15.9507 106.412L7.44952 100.059C-0.00195544 94.4913 -2.07541 84.3968 2.19332 76.4414ZM13.3588 61.1527C15.0303 62.2691 16.7375 63.3308 18.4778 64.3243C34.7684 73.6241 54.0567 77.0723 72.8778 64.3862C92.3967 51.2298 109.031 41.7419 123.372 36.5057L142.447 50.7586C137.54 50.8352 132.338 51.6593 126.814 53.1836C110.54 57.6741 91.3553 68.2542 68.3926 83.7523C50.4895 95.8355 32.1599 92.6763 16.3494 83.6557C11.7624 81.0385 7.40174 77.931 3.34234 74.5742C3.45622 74.4112 3.573 74.2491 3.69284 74.0888L13.3588 61.1527ZM25.5629 44.82C41.0157 52.5323 58.8008 54.5828 76.1878 42.8633C87.2764 35.3893 97.4345 29.0998 106.769 24.0999L121.304 34.9602C107.003 40.3842 90.6187 49.8114 71.6644 62.5872C53.7505 74.6617 35.3943 71.483 19.5539 62.4403C17.8917 61.4914 16.2592 60.4776 14.6595 59.4121L25.5629 44.82ZM38.4936 27.5149C51.4385 31.5185 65.5008 30.8968 79.3118 21.5878C83.7464 18.5987 88.0327 15.7996 92.1764 13.1959L104.85 22.6661C95.6604 27.6404 85.7317 33.8131 74.9751 41.0635C58.5568 52.1299 41.7673 50.3831 26.8834 43.0528L38.4936 27.5149ZM52.7559 8.42771C61.0835 9.09958 69.6905 7.56487 78.2552 2.86444C78.663 3.12245 79.064 3.39809 79.457 3.69179L90.3137 11.8041C86.3648 14.2969 82.2946 16.96 78.099 19.788C65.2195 28.4692 52.1117 29.2657 39.8743 25.6671L52.7559 8.42771ZM54.3668 6.35823C59.7858 0.132385 68.6106 -1.67986 75.9543 1.62675C68.7186 5.32252 61.4591 6.69683 54.3668 6.35823Z"
      fill="#FF5B01"
    />
  </svg>
);

const socialLinks = [
  { id: "facebook", icon: <FaFacebookF className="size-5" />, href: "#" },
  { id: "instagram", icon: <FaInstagram className="size-5" />, href: "#" },
  { id: "twitter", icon: <FaTwitter className="size-5" />, href: "#" },
  { id: "linkedin", icon: <FaLinkedinIn className="size-5" />, href: "#" },
];

const infoCards = [
  {
    id: "phone",
    label: "(0468) 285-539",
    link: "tel:+61468285539",
    highlighted: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.1757 20.1848C17.1732 20.1848 15.1948 19.7484 13.2404 18.8757C11.2861 18.0029 9.50788 16.7653 7.90592 15.1627C6.30397 13.5601 5.06662 11.7819 4.19387 9.82815C3.32112 7.8744 2.88443 5.89599 2.88379 3.8929C2.88379 3.60455 2.97991 3.36425 3.17214 3.17202C3.36438 2.97978 3.60467 2.88367 3.89302 2.88367H7.78578C8.01005 2.88367 8.2103 2.95992 8.38651 3.11243C8.56273 3.26493 8.66685 3.44499 8.69889 3.65261L9.32366 7.01672C9.3557 7.27303 9.34769 7.48929 9.29963 7.66551C9.25157 7.84172 9.16346 7.99391 9.0353 8.12207L6.70446 10.4769C7.02485 11.0697 7.40515 11.6422 7.84537 12.1946C8.28559 12.7469 8.77034 13.2797 9.29963 13.793C9.79623 14.2896 10.3169 14.7503 10.8615 15.1752C11.4062 15.6 11.9829 15.9883 12.5916 16.3401L14.8504 14.0813C14.9946 13.9372 15.183 13.8292 15.4156 13.7574C15.6482 13.6857 15.8763 13.6655 16.0999 13.6969L19.416 14.3697C19.6403 14.4338 19.8245 14.5501 19.9687 14.7186C20.1128 14.8871 20.1849 15.0752 20.1849 15.2828V19.1756C20.1849 19.4639 20.0888 19.7042 19.8966 19.8965C19.7043 20.0887 19.464 20.1848 19.1757 20.1848Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "email",
    label: "contact@nexifire.com",
    link: "mailto:contact@nexifire.com",
    highlighted: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.224 3.84485H3.8452C2.78791 3.84485 1.93246 4.70991 1.93246 5.7672L1.92285 17.3013C1.92285 18.3586 2.78791 19.2236 3.8452 19.2236H19.224C20.2813 19.2236 21.1463 18.3586 21.1463 17.3013V5.7672C21.1463 4.70991 20.2813 3.84485 19.224 3.84485ZM19.224 7.68955L11.5346 12.4954L3.8452 7.68955V5.7672L11.5346 10.5731L19.224 5.7672V7.68955Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "address",
    label: "16A FOX CL, KARIONG NSW 2250, AUSTRALIA",
    link: "#",
    highlighted: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.5339 11.0535C10.8966 11.0535 10.2854 10.8004 9.83475 10.3497C9.38411 9.89908 9.13095 9.28788 9.13095 8.65058C9.13095 8.01328 9.38411 7.40209 9.83475 6.95145C10.2854 6.50081 10.8966 6.24765 11.5339 6.24765C12.1712 6.24765 12.7824 6.50081 13.233 6.95145C13.6837 7.40209 13.9368 8.01328 13.9368 8.65058C13.9368 8.96614 13.8747 9.27861 13.7539 9.57015C13.6331 9.86168 13.4561 10.1266 13.233 10.3497C13.0099 10.5728 12.745 10.7498 12.4534 10.8706C12.1619 10.9914 11.8494 11.0535 11.5339 11.0535ZM11.5339 1.92236C9.74945 1.92236 8.0381 2.63123 6.77631 3.89301C5.51453 5.1548 4.80566 6.86615 4.80566 8.65058C4.80566 13.6967 11.5339 21.1458 11.5339 21.1458C11.5339 21.1458 18.2621 13.6967 18.2621 8.65058C18.2621 6.86615 17.5532 5.1548 16.2915 3.89301C15.0297 2.63123 13.3183 1.92236 11.5339 1.92236Z"
          fill="white"
        />
      </svg>
    ),
  },
];

const contactEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: contactEase,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: contactEase,
    },
  },
};

const formAreaVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: contactEase,
      staggerChildren: 0.12,
    },
  },
};

const accentLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
    y: 20,
    scale: 0.9,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.86,
      ease: contactEase,
    },
  },
};

const accentRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 42,
    y: -24,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: contactEase,
    },
  },
};

const formCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.84,
      ease: contactEase,
      staggerChildren: 0.08,
    },
  },
};

const dividerVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0.4,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.72,
      ease: contactEase,
    },
  },
};

const infoGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const infoCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: contactEase,
      staggerChildren: 0.08,
    },
  },
};

const GetInTouchContactV2 = () => {
  const { handleSubmit, isSubmitting, submitMessage, submitStatus } =
    useContactForm("Contact page v2");

  return (
    <motion.section
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid items-start gap-14 lg:grid-cols-[0.88fr_1fr] lg:gap-16">
          <motion.div className="pt-3" variants={contentVariants}>
            <motion.div
              className="mb-4 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
              style={{
                background:
                  "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
              }}
              variants={itemVariants}
            >
              <TextFluxUnveil text="Get In Touch" />
            </motion.div>

            <motion.h2
              className="project-h2 max-w-[670px]"
              variants={itemVariants}
            >
              Ready To Publish Your Book?
            </motion.h2>

            <motion.p
              className="mt-5 max-w-[570px] text-base leading-[1.75] text-[#888888] sm:text-lg"
              variants={itemVariants}
            >
              Whether you're starting with an idea or have a completed
              manuscript, our publishing specialists are here to help. Contact
              NexiFire Publishing today and take the first step toward becoming
              a published author.
            </motion.p>
            <motion.div
              className="mt-5 h-px max-w-6/7 border border-1"
              variants={dividerVariants}
              style={{ originX: 0 }}
            />
            <motion.div className="mt-5" variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold text-[#C95A10]"
                variants={itemVariants}
              >
                Social Media
              </motion.h3>
              <motion.div
                className="mt-4 flex items-center gap-3"
                variants={itemVariants}
              >
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#7D7D7D] text-sm text-white transition hover:bg-[#B24002]"
                    whileHover={{ y: -3, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.22, ease: contactEase }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex w-full justify-center lg:justify-start"
            variants={formAreaVariants}
          >
            <motion.div
              className="pointer-events-none absolute -left-[24px] bottom-[24px] z-0 hidden w-[110px] sm:block lg:-left-[66px] lg:bottom-[18px] lg:w-[138px]"
              variants={accentLeftVariants}
            >
              <ContactAccentShape />
            </motion.div>

            <motion.div
              className="pointer-events-none absolute -right-[200px] -top-[72px] z-0 hidden w-[440px] sm:block lg:-right-[340px] lg:-top-[94px] lg:w-[720px]"
              variants={accentRightVariants}
            >
              <ContactFormCurve />
            </motion.div>

            <motion.div
              className="relative z-10 w-full max-w-[690px] rounded-[20px] border border-[#ECE8E2] bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)] sm:p-5 lg:p-6"
              variants={formCardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.28, ease: contactEase }}
            >
              <motion.h3
                className="text-[1.05rem] font-bold uppercase tracking-[-0.02em] text-[#4C4C4C] sm:text-[1.35rem]"
                variants={itemVariants}
              >
                Fill This Form To Get Faster Response
              </motion.h3>

              <motion.form
                className="mt-5 space-y-4"
                onSubmit={handleSubmit}
                variants={contentVariants}
              >
                <motion.input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="h-[42px] w-full rounded-[5px] border border-[#BCBCBC] bg-transparent px-3 text-sm text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a] sm:text-base"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                />

                <motion.div
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                  variants={itemVariants}
                >
                  <motion.input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="h-[42px] w-full rounded-[5px] border border-[#BCBCBC] bg-transparent px-3 text-sm text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a] sm:text-base"
                    whileFocus={{ scale: 1.01 }}
                  />
                  <motion.input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="h-[42px] w-full rounded-[5px] border border-[#BCBCBC] bg-transparent px-3 text-sm text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a] sm:text-base"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={7}
                  className="w-full rounded-[5px] border border-[#BCBCBC] bg-transparent px-3 py-3 text-sm text-[#4a4a4a] outline-none placeholder:text-[#9a9a9a] sm:text-base"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                />

                {submitMessage ? (
                  <motion.p
                    className={`text-sm ${
                      submitStatus === "success"
                        ? "text-[#247a39]"
                        : "text-[#b3261e]"
                    }`}
                    variants={itemVariants}
                  >
                    {submitMessage}
                  </motion.p>
                ) : null}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background:
                      "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-[8px] px-7 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 24px rgba(178,64,2,0.28)",
                  }}
                  whileTap={{ y: 0, scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  {isSubmitting ? "Sending..." : "Let's Talk"}
                  <TfiArrowTopRight size={16} />
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-14 flex max-w-[1240px] items-center gap-4"
          variants={contentVariants}
        >
          <motion.div
            className="h-[3] flex-1 bg-[linear-gradient(270deg,#FF5B01_0%,rgba(255,91,1,0)_100%)]"
            variants={dividerVariants}
            style={{ originX: 1 }}
          />
          <motion.span
            className="shrink-0 bg-[linear-gradient(90deg,#282828_0%,#8C8C8C_100%)] bg-clip-text text-lg font-medium uppercase leading-none tracking-[-0.02em] text-transparent sm:text-xl"
            variants={itemVariants}
          >
            Contact Information
          </motion.span>
          <motion.div
            className="h-[3] flex-1 bg-[linear-gradient(90deg,#FF5B01_0%,rgba(255,91,1,0)_100%)]"
            variants={dividerVariants}
            style={{ originX: 0 }}
          />
        </motion.div>

        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-3"
          variants={infoGridVariants}
        >
          {infoCards.map((item) => (
            <motion.article
              key={item.id}
              className={`flex min-h-[158px] flex-col items-center justify-center rounded-[20px] border px-6 py-8 text-center shadow-[0_10px_24px_rgba(0,0,0,0.06)] ${
                item.highlighted
                  ? "border-[#F3E4D7] bg-[linear-gradient(180deg,#FFF9F5_0%,#FFF2E8_100%)]"
                  : "border-[#ECE8E2] bg-white"
              }`}
              variants={infoCardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.28, ease: contactEase }}
            >
              <motion.div
                className="flex h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-[#B24002]"
                variants={itemVariants}
              >
                {item.icon}
              </motion.div>
              <Link href={item.link}>
                <motion.p
                  className="mt-5 max-w-[240px] text-lg leading-[1.45] tracking-[-0.02em] text-[#8B8B8B] sm:text-xl"
                  variants={itemVariants}
                >
                  {item.label}
                </motion.p>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GetInTouchContactV2;
