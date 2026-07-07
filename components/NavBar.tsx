"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Publishing Services",
    href: "/publishing-services",
    hasDropdown: true,
  },
  { label: "Our Books", href: "/our-books" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const publishingServiceLinks = [
  { label: "Book Publishing", href: "/publishing-services/book-publishing" },
  { label: "Ghost Writing", href: "/publishing-services/ghost-writing" },
  { label: "Book Marketing", href: "/publishing-services/book-marketing" },
  { label: "Book Editing", href: "/publishing-services/book-editing" },
  {
    label: "Book Cover Design",
    href: "/publishing-services/book-cover-design",
  },
  { label: "Audio Book", href: "/publishing-services/audio-book" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isPublishingServicesActive =
    pathname === "/publishing-services" ||
    pathname.startsWith("/publishing-services/");

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] w-full px-3 py-2 sm:px-4 lg:px-5">
      <div className="mx-auto w-full max-w-[1540px] relative rounded-[20px] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_38%,rgba(255,255,255,0.03)_100%)] shadow-[0_10px_22px_rgba(15,23,42,0.03),inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.04)] backdrop-blur-[2px] backdrop-saturate-[1.08] sm:rounded-[22px] xl:rounded-[24px]">
        <div className="relative flex items-center justify-between px-3 py-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/Group 427320871.png"
              alt="NexiFire Logo"
              width={240}
              height={64}
              className="h-auto w-[112px] sm:w-[130px] md:w-[176px] lg:w-[190px] xl:w-[200px]"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-10">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <li key={link.label} className="group relative">
                    <button
                      type="button"
                      className={`inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors duration-150 2xl:text-base ${
                        isPublishingServicesActive
                          ? "border-b-2 border-[#c0784a] pb-0.5 font-semibold text-black"
                          : "font-medium text-[#5f5f5f] hover:text-[#1c1c1c]"
                      }`}
                    >
                      {link.label}
                      <span className="text-xs text-[#8a8a8a] transition-transform duration-200 group-hover:rotate-180">
                        ▼
                      </span>
                    </button>

                    <div className="pointer-events-none absolute left-0 top-full z-30 w-[340px] pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="rounded-[20px] border border-[#e9e9e9] bg-white p-[18px] shadow-[0_18px_34px_rgba(31,31,31,0.10)]">
                        <div className="grid gap-0">
                          {publishingServiceLinks.map((serviceLink) => {
                            const isActive = isActiveLink(serviceLink.href);
                            return (
                              <Link
                                key={serviceLink.href}
                                href={serviceLink.href}
                                className={`border-b border-[#f1f1f1] px-0 py-[18px] text-[15px] transition-colors duration-150 last:border-b-0 ${
                                  isActive
                                    ? "font-medium text-[#c0784a]"
                                    : "font-normal text-[#1f1f1f] hover:text-[#c0784a]"
                                }`}
                              >
                                {serviceLink.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              const isActive = isActiveLink(link.href);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`whitespace-nowrap text-sm transition-colors duration-150 2xl:text-base ${
                      isActive
                        ? "border-b-2 border-[#c0784a] pb-0.5 font-semibold text-black"
                        : "font-medium text-[#5f5f5f] hover:text-[#1c1c1c]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right desktop button */}
          <div className="hidden items-center md:flex">
            <Link
              href="/contact"
              className="hidden items-center justify-center gap-2 rounded-lg border border-[#B24002] bg-transparent px-4 py-2 text-sm font-medium text-[#B24002] transition-all duration-200 hover:bg-[#B24002] hover:text-white hover:shadow-[0_10px_24px_rgba(178,64,2,0.24)] lg:inline-flex xl:px-5 xl:py-[9px] xl:text-base"
            >
              Request a Call{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                    stroke="#B24002"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7 4V2.5"
                    stroke="#B24002"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17 4V2.5"
                    stroke="#B24002"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2.5 9H21.5"
                    stroke="#B24002"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                    fill="#B24002"
                  />
                  <path
                    d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
                    fill="#B24002"
                  />
                  <path
                    d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                    fill="#B24002"
                  />
                  <path
                    d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                    fill="#B24002"
                  />
                  <path
                    d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
                    fill="#B24002"
                  />
                  <path
                    d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
                    fill="#B24002"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="flex flex-col gap-[5px] xl:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block h-[1.5px] w-5 bg-[#555] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[#555] transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[#555] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileOpen && (
          <div className="xl:hidden mt-3 rounded-[24px] border border-white/24 bg-[linear-gradient(145deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_42%,rgba(255,255,255,0.10)_100%)] px-5 py-5 shadow-sm backdrop-blur-[3px] backdrop-saturate-[1.08]">
            <div className="grid gap-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="w-full flex justify-between px-3 py-2 text-left text-sm font-medium text-gray-800 bg-gray-100 rounded-md"
                      >
                        {link.label}
                        <span>{mobileServicesOpen ? "▲" : "▼"}</span>
                      </button>
                      {mobileServicesOpen && (
                        <div className="mt-2 ml-4 grid gap-1">
                          {publishingServiceLinks.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setMobileOpen(false)}
                              className="px-2 py-1 text-gray-700 text-sm rounded hover:bg-gray-200"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-gray-800 rounded hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile “Request a Call” button */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl border border-[#B24002] bg-transparent px-5 py-3 text-sm font-medium text-[#B24002] transition-all duration-200 hover:bg-[#B24002] hover:text-white"
              >
                Request a Call
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                      stroke="#B24002"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7 4V2.5"
                      stroke="#B24002"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17 4V2.5"
                      stroke="#B24002"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2.5 9H21.5"
                      stroke="#B24002"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z"
                      fill="#B24002"
                    />
                    <path
                      d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z"
                      fill="#B24002"
                    />
                    <path
                      d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
                      fill="#B24002"
                    />
                    <path
                      d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z"
                      fill="#B24002"
                    />
                    <path
                      d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z"
                      fill="#B24002"
                    />
                    <path
                      d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z"
                      fill="#B24002"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
