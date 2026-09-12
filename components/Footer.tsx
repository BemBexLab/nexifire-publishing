"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSocialLink = FooterLink & {
  icon: "facebook" | "instagram" | "twitter" | "linkedin";
};

type FooterContactLink = FooterLink;

type FooterData = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  quickLinks: FooterLink[];
  serviceLinks: FooterLink[];
  phone: FooterContactLink;
  email: FooterContactLink;
  location: FooterContactLink;
  socialLinks: FooterSocialLink[];
  copyrightText: string;
  privacyPolicy: FooterLink;
  termsAndConditions: FooterLink;
};

export type FooterProps = Partial<FooterData>;

const defaultFooterData: FooterData = {
  title: "NEXIFIRE PUBLISHING",
  description:
    "NexiFire Publishing is a full-service self-publishing company helping authors take their books from manuscript to marketplace. From editing, design, and publishing to global distribution and marketing, we handle it all under one roof while protecting your voice, creative control, rights, and 100% of your royalties.",
  ctaLabel: "Publish Your Book",
  ctaHref: "/contact",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Our Books", href: "/our-books" },
    { label: "Pricing & Packages", href: "/pricing-packages" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
  ],
  serviceLinks: [
    { label: "Book Publishing", href: "/publishing-services/book-publishing" },
    { label: "Ghost Writing", href: "/publishing-services/ghost-writing" },
    { label: "Book Marketing", href: "/publishing-services/book-marketing" },
    { label: "Book Editing", href: "/publishing-services/book-editing" },
    { label: "Book Cover Design", href: "/publishing-services/book-cover-design" },
    { label: "Audio Book", href: "/publishing-services/audio-book" },
  ],
  phone: { label: "+1 (470) 205 2227", href: "tel:+14702052227" },
  email: { label: "contact@nexifirepublishing.com", href: "mailto:contact@nexifirepublishing.com" },
  location: { label: "1221 Brickell Ave, Miami, FL 33131, United States", href: "" },
  socialLinks: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    // { label: "Twitter", href: "#", icon: "twitter" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
  copyrightText: "© 2026 NexiFire Publishing All Rights Reserved.",
  privacyPolicy: { label: "Privacy Policy", href: "/privacy-policy" },
  termsAndConditions: { label: "Terms & Conditions", href: "/terms-condition" },
};

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
} as const;

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

const FooterCTA = (props: FooterProps) => {
  const data: FooterData = {
    ...defaultFooterData,
    ...props,
  };

  return (
    <section className="w-full overflow-hidden border-t border-[#e9e3dd] bg-[#f8f7f6] px-4 pt-12 font-jakarta sm:px-6 sm:pt-14 lg:px-8 lg:pt-16 xl:px-12 xl:pt-20">
      <motion.div
        className="mx-auto flex w-full max-w-[1640px] flex-col"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <div className="grid w-full grid-cols-1 gap-12 lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] xl:items-start xl:gap-20 2xl:gap-28">
          <motion.div
            className="flex w-full max-w-[760px] flex-col items-center text-center md:items-start md:text-left xl:max-w-[720px]"
            variants={heroColumnVariants}
          >
            <motion.h2
              variants={revealVariants}
              className="project-h2 py-2 text-center leading-[1.02] tracking-[-0.05em] md:text-left"
            >
              {data.title}
            </motion.h2>
            <motion.p
              variants={revealVariants}
              className="mt-5 max-w-[670px] text-base leading-[1.7] text-[#7D7D7D] sm:text-lg"
            >
              {data.description}
            </motion.p>
            <motion.div variants={revealVariants} className="mt-6 w-full sm:w-fit">
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                <Link
                  href={data.ctaHref}
                  className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-[9px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-2 text-sm font-medium text-white sm:w-auto sm:px-6 sm:text-base"
                >
                  {data.ctaLabel}
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
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12 xl:grid-cols-[minmax(0,160px)_minmax(0,180px)_minmax(0,1fr)] xl:items-start xl:gap-x-3"
            variants={linksGridVariants}
          >
            <motion.div className="w-full min-w-0" variants={linkColumnVariants}>
              <motion.h4
                variants={revealVariants}
                className="mb-4 text-[1.2rem] font-medium tracking-[-0.03em] text-[#B24002] sm:text-[1.35rem]"
              >
                Quick Links
              </motion.h4>
              <motion.ul
                variants={listVariants}
                className="list-none space-y-3 text-[0.95rem] font-medium text-[#777777] sm:text-base"
              >
                {data.quickLinks.map((link) => (
                  <motion.li
                    key={`${link.href}-${link.label}`}
                    variants={listItemVariants}
                    className="group"
                  >
                    <Link
                      className="inline-flex items-center gap-2 transition hover:text-[#B24002]"
                      href={link.href}
                    >
                      <span
                        aria-hidden="true"
                        className="text-[#B24002] transition-transform duration-200 group-hover:translate-x-1"
                      >
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div className="w-full min-w-0" variants={linkColumnVariants}>
              <motion.h4
                variants={revealVariants}
                className="mb-4 text-[1.2rem] font-medium tracking-[-0.03em] text-[#B24002] sm:text-[1.35rem]"
              >
                Our Services
              </motion.h4>
              <motion.ul
                variants={listVariants}
                className="list-none space-y-3 text-[0.95rem] font-medium text-[#777777] sm:text-base"
              >
                {data.serviceLinks.map((link) => (
                  <motion.li
                    key={`${link.href}-${link.label}`}
                    variants={listItemVariants}
                    className="group"
                  >
                    <Link
                      className="inline-flex items-center gap-2 transition hover:text-[#B24002]"
                      href={link.href}
                    >
                      <span
                        aria-hidden="true"
                        className="text-[#B24002] transition-transform duration-200 group-hover:translate-x-1"
                      >
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="w-full min-w-0 sm:col-span-2 lg:col-span-2 xl:col-span-1"
              variants={linkColumnVariants}
            >
              <motion.h4
                variants={revealVariants}
                className="mb-4 text-[1.2rem] font-medium tracking-[-0.03em] text-[#B24002] sm:text-[1.35rem]"
              >
                Contact Info
              </motion.h4>
              <motion.ul
                variants={listVariants}
                className="space-y-3 text-[0.95rem] font-medium leading-[1.45] text-[#777777] sm:text-base"
              >
                <motion.li variants={listItemVariants} className="flex items-start gap-3">
                  <LuPhoneCall className="mt-1 shrink-0 text-[#B24002]" />
                  <a
                    href={data.phone.href}
                    className="min-w-0 break-words transition hover:text-[#B24002]"
                  >
                    {data.phone.label}
                  </a>
                </motion.li>
                <motion.li variants={listItemVariants} className="flex items-start gap-3">
                  <MdOutlineEmail className="mt-1 shrink-0 text-[#B24002]" />
                  <a
                    href={data.email.href}
                    className="min-w-0 break-words transition hover:text-[#B24002]"
                  >
                    {data.email.label}
                  </a>
                </motion.li>
                <motion.li variants={listItemVariants} className="flex items-start gap-3">
                  <SlLocationPin className="mt-1 shrink-0 text-[#B24002]" />
                  <a
                    href={data.location.href}
                    className="min-w-0 break-words transition hover:text-[#B24002]"
                  >
                    {data.location.label}
                  </a>
                </motion.li>
              </motion.ul>

              <motion.div variants={revealVariants} className="mt-8 sm:mt-10">
                <motion.h4
                  variants={revealVariants}
                  className="mb-4 text-[1.2rem] font-medium tracking-[-0.03em] text-[#B24002] sm:text-[1.35rem]"
                >
                  Social Media
                </motion.h4>
                <motion.div variants={socialsVariants} className="flex flex-wrap items-center gap-3">
                  {data.socialLinks.map((social) => {
                    const SocialIcon = socialIcons[social.icon];

                    return (
                      <motion.a
                        key={`${social.href}-${social.label}`}
                        variants={socialItemVariants}
                        whileHover={{ y: -3, scale: 1.04 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-[7px] border border-white/70 bg-[#686868] text-white shadow-[0_5px_12px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-[#B24002]"
                      >
                        <SocialIcon size={20} />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={footerBarVariants} className="mt-14 w-full">
          <div className="border-t border-[#77777766]" />

          <div className="flex w-full flex-col gap-3 py-5 text-sm font-medium text-[#777777] md:flex-row md:items-center md:justify-between">
            <p className="text-center md:text-left">
              {data.copyrightText}
            </p>

            <p className="text-center leading-relaxed md:text-right">
              <Link className="hover:text-[#B94202]" href={data.privacyPolicy.href}>
                {data.privacyPolicy.label}
              </Link>
              <span className="px-3">|</span>
              <Link className="hover:text-[#B94202]" href={data.termsAndConditions.href}>
                {data.termsAndConditions.label}
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FooterCTA;
