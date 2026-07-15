"use client";

import { motion, type Variants } from "motion/react";
import React from "react";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const footerEase = [0.22, 1, 0.36, 1] as const;

const footerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const heroColumnVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: footerEase,
    },
  },
};

const linksGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const linkColumnVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 22,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: footerEase,
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: footerEase,
    },
  },
};

const socialsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const socialItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: footerEase,
    },
  },
};

const footerBarVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: footerEase,
      delay: 0.12,
    },
  },
};

const FooterCTA = () => {
  return (
    <section className="w-full bg-[#F3F3F3] px-4 pt-12 font-jakarta sm:px-6 sm:pt-14 lg:px-8 lg:pt-16 xl:px-12 xl:pt-20">
      <motion.div
        className="mx-auto flex w-full max-w-[1640px] flex-col"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <div className="grid w-full grid-cols-1 gap-12 lg:gap-14 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:items-start xl:gap-16 2xl:gap-24">
          <motion.div
            className="flex w-full max-w-[760px] flex-col items-center text-center md:items-start md:text-left xl:max-w-[720px]"
            variants={heroColumnVariants}
          >
            <motion.h2
              variants={revealVariants}
              className="project-h2 py-2 text-center leading-[1.02] tracking-[-0.05em] md:text-left"
            >
              NexiFire Publishing
            </motion.h2>
            <motion.p
              variants={revealVariants}
              className="mt-5 max-w-[670px] text-base leading-[1.7] text-[#7D7D7D] sm:text-lg"
            >
              NexiFire Publishing is Australia's reliable self-publishing partner. We help authors publish eBooks, print books, and audiobooks with professional services including ghostwriting, editing, formatting, cover design, and global distribution.
            </motion.p>
            <motion.div variants={revealVariants} className="mt-6 w-full sm:w-fit">
              <Link href="/contact" className="w-full sm:w-fit">
              <motion.button
                style={{
                  background:
                    "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                }}
                className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-[9px] px-5 py-2 text-sm font-medium text-white sm:w-auto sm:px-6 sm:text-base"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                Publish Your Book
                <motion.span
                  whileHover={{ x: 4, y: -2 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                >
                  <TfiArrowTopRight size={20} />
                </motion.span>
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-x-10 xl:grid-cols-[minmax(0,240px)_minmax(0,230px)_minmax(0,240px)] xl:items-start xl:gap-x-8"
            variants={linksGridVariants}
          >
            <motion.div className="w-full min-w-0" variants={linkColumnVariants}>
              <motion.h4
                variants={revealVariants}
                className="mb-3 text-[1.2rem] font-medium text-[#B24002] sm:text-[1.35rem]"
              >
                Quick Links
              </motion.h4>
              <motion.ul
                variants={listVariants}
                className="list-inside list-disc space-y-2.5 text-base font-medium text-[#777777]"
              >
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/">Home</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/who-we-are">Who We Are</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/our-books">Our Books</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/pricing-packages">Pricing & Packages</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/contact">Contact Us</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/blogs">Blogs</a>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div className="w-full min-w-0" variants={linkColumnVariants}>
              <motion.h4
                variants={revealVariants}
                className="mb-3 text-[1.2rem] font-medium text-[#B24002] sm:text-[1.35rem]"
              >
                Our Services
              </motion.h4>
              <motion.ul
                variants={listVariants}
                className="list-inside list-disc space-y-2.5 text-base font-medium text-[#777777]"
              >
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/publishing-services/book-publishing">Book Publishing</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/publishing-services/ghost-writing">Ghost Writing</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/publishing-services/book-marketing">Book Marketing</a>
                </motion.li><motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/publishing-services/book-editing">Book Editing</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/publishing-services/book-cover-design">Book Cover Design</a>
                </motion.li>
                <motion.li variants={listItemVariants} className="pl-1">
                  <a className="transition hover:text-[#B24002]" href="/publishing-services/audio-book">Audio Book</a>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div
              className="w-full min-w-0 sm:col-span-2 lg:col-span-2 xl:col-span-1"
              variants={linkColumnVariants}
            >
              <motion.h4
                variants={revealVariants}
                className="mb-3 text-[1.2rem] font-medium text-[#B24002] sm:text-[1.35rem]"
              >
                Contact Info
              </motion.h4>
              <motion.ul variants={listVariants} className="space-y-3 text-base font-medium text-[#777777]">
                <motion.li variants={listItemVariants} className="flex items-start">
                  <LuPhoneCall className="mt-1 shrink-0" />
                  <a
                    href="tel:+61468285539"
                    className="ml-2 min-w-0 break-words transition hover:text-[#B24002]"
                  >
                    (0468) 285-539
                  </a>
                </motion.li>
                <motion.li variants={listItemVariants} className="flex items-start">
                  <MdOutlineEmail className="mt-1 shrink-0" />
                  <a
                    href="mailto:contact@nexifire.com"
                    className="ml-2 min-w-0 break-words transition hover:text-[#B24002]"
                  >
                    contact@nexifire.com
                  </a>
                </motion.li>
                <motion.li variants={listItemVariants} className="flex items-start">
                  <SlLocationPin className="mt-1 shrink-0" />
                  <a href="" className="ml-2 min-w-0 break-words">
                    16A Fox Cl, Kariong NSW 2250, Australia
                  </a>
                </motion.li>
              </motion.ul>

              <motion.div variants={revealVariants} className="mt-8 sm:mt-10">
                <motion.h4
                  variants={revealVariants}
                  className="mb-4 text-[1.2rem] font-medium text-[#B24002] sm:text-[1.35rem]"
                >
                  Social Media
                </motion.h4>
                <motion.div variants={socialsVariants} className="flex flex-wrap items-center gap-3">
                  <motion.a
                    variants={socialItemVariants}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href="#"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaFacebookF size={20} />
                  </motion.a>
                  <motion.a
                    variants={socialItemVariants}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href="#"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaInstagram size={20} />
                  </motion.a>
                  <motion.a
                    variants={socialItemVariants}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href="#"
                    aria-label="Twitter"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                  <motion.a
                    variants={socialItemVariants}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaLinkedinIn size={20} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={footerBarVariants} className="mt-14 w-full">
          <div className="border-t border-[#77777766]" />

          <div className="flex w-full flex-col gap-3 py-5 text-sm font-semibold text-[#777777] md:flex-row md:items-center md:justify-between">
            <p className="text-center md:text-left">
              &copy; 2026 NexiFire Publishing All Rights Reserved.
            </p>

            <p className="text-center leading-relaxed md:text-right">
              <a className="hover:text-[#B94202]" href="#">
                Privacy Policy
              </a>
              <span className="px-3">|</span>
              <a className="hover:text-[#B94202]" href="#">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FooterCTA;
