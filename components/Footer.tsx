"use client";

import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FooterCTA = () => {
  return (
    <section className="w-full bg-[#F3F3F3] px-4 pt-12 font-jakarta sm:px-6 sm:pt-16 lg:px-10 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        <div className="grid w-full grid-cols-1 gap-14 lg:gap-16 xl:grid-cols-[minmax(0,700px)_minmax(0,1fr)] xl:items-start xl:justify-between 2xl:gap-24">
          <div className="flex w-full max-w-[700px] flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="project-h2 py-3 text-center leading-[1.05] lg:text-left">
              <span className="sm:whitespace-nowrap">Ready To Publish</span>
              <br /> Your Story?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-[1.65] text-[#777777] sm:text-lg xl:max-w-[640px]">
              Become a published author with expert support from manuscript to
              marketplace.
            </p>
            <Link href="/contact" className="mt-4 w-full sm:w-fit">
              <motion.button
                style={{
                  background:
                    "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                }}
                className="mt-2 flex min-h-[38px] w-full items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-light text-white sm:w-auto sm:text-base"
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
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-y-10 xl:mt-10 xl:grid-cols-[minmax(0,150px)_minmax(0,220px)_minmax(0,320px)] xl:gap-x-8">
            <div className="w-full min-w-0">
              <h4 className="mb-2 text-lg font-medium text-[#B24002]">
                Quick Links
              </h4>
              <ul className="list-inside list-disc space-y-2 text-base font-medium text-[#777777]">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/who-we-are">Who We Are</a>
                </li>
                <li>
                  <a href="/our-books">Our Books</a>
                </li>
                {/* <li>
                  <a href="/testimonials">Testimonials</a>
                </li> */}
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
              </ul>
            </div>

            <div className="w-full min-w-0">
              <h4 className="mb-2 text-lg font-medium text-[#B24002]">
                Our Services
              </h4>
              <ul className="list-inside list-disc space-y-2 text-base font-medium text-[#777777]">
                <li>
                  <a href="/privacy-policy">Privacy policy</a>
                </li>
                <li>
                  <a href="/terms-condition">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="w-full min-w-0 sm:col-span-2 xl:col-span-1">
              <h4 className="mb-2 text-lg font-medium text-[#B24002]">
                Contact Info
              </h4>
              <ul className="space-y-2 text-base font-medium text-[#777777]">
                <li className="flex items-center">
                  <LuPhoneCall className="shrink-0" />
                  <a href="tel:+14704707520" className="ml-2 min-w-0 break-words">
                    (470) 470-7520
                  </a>
                </li>
                <li className="flex items-center">
                  <MdOutlineEmail className="shrink-0" />
                  <a
                    href="mailto:contact@nexifire.com"
                    className="ml-2 min-w-0 break-words"
                  >
                    contact@nexifire.com
                  </a>
                </li>
                <li className="flex items-start">
                  <SlLocationPin className="mt-1 shrink-0" />
                  <a href="" className="ml-2 min-w-0 break-words">
                    2300 Lakeview Pkwy Alpharetta, GA 30009
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-medium text-[#B24002]">
                  Social Media
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center bg-[#8d8d8d] text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#B24002]"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full">
          <div className="border-t border-[#77777766]" />

          <div className="flex w-full flex-col gap-3 py-4 text-sm font-semibold text-[#777777] md:flex-row md:items-center md:justify-between">
            <p className="text-left">
              &copy; 2026 NexiFire Publishing All Rights Reserved.
            </p>

            <p className="text-left md:text-right">
              <a className="hover:text-[#B94202]" href="#">
                Privacy Policy
              </a>
              <span className="px-3">|</span>
              <a className="hover:text-[#B94202]" href="#">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
