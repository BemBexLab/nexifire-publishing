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
    <section className="w-full bg-[#F3F3F3] px-5 pt-12 font-jakarta sm:px-8 sm:pt-16 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        <div className="grid w-full grid-cols-1 justify-items-center gap-16 xl:grid-cols-[minmax(0,700px)_minmax(0,725px)] xl:items-start xl:justify-center xl:gap-20 2xl:gap-28">
          <div className="flex w-full max-w-[700px] flex-col items-center text-center font-jakarta lg:items-start lg:text-left">
            <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text py-3 text-center font-jakarta text-4xl font-semibold leading-tight text-transparent sm:text-5xl lg:text-left lg:text-7xl">
              <span className="whitespace-nowrap">Ready To Publish</span>
              <br /> Your Story?
            </h2>
            <p className="mt-5 max-w-xl text-base text-[#777777] sm:text-lg xl:max-w-none xl:whitespace-nowrap">
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

          <div className="md:mt-15 grid w-full grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-[130px_180px_280px] lg:gap-x-5">
            <div className="w-full">
              <h4 className="mb-2 text-lg font-medium text-[#B24002]">
                Quick Links
              </h4>
              <ul className="list-inside list-disc space-y-2 text-base font-medium text-[#777777]">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="#">Our Books</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>

            <div className="w-[180px]">
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

            <div className="w-full sm:col-span-2 lg:col-span-1">
              <h4 className="mb-2 text-lg font-medium text-[#B24002]">
                Contact Info
              </h4>
              <ul className="space-y-2 text-base font-medium text-[#777777]">
                <li className="flex items-center">
                  <LuPhoneCall className="shrink-0" />
                  <a href="tel:+14704707520" className="ml-2 break-words">
                    (470) 470-7520
                  </a>
                </li>
                <li className="flex items-center">
                  <MdOutlineEmail className="shrink-0" />
                  <a
                    href="mailto:contact@nexifire.com"
                    className="ml-2 break-words"
                  >
                    contact@nexifire.com
                  </a>
                </li>
                <li className="flex items-start">
                  <SlLocationPin className="mt-1 shrink-0" />
                  <a href="" className="ml-2 break-words">
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

          <div className="flex w-full flex-col gap-2 py-3 text-sm font-semibold text-[#777777] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-left">
              &copy; 2026 NexiFire Publishing All Rights Reserved.
            </p>

            <p className="text-left sm:text-right">
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
