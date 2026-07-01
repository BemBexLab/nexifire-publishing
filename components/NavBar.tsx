"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Publishing Services", href: "/publishing-services" },
  { label: "Our Books", href: "/our-books" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      const passedThreshold = currentY > 40;

      if (mobileOpen) {
        setIsHidden(false);
      } else if (scrollingDown && passedThreshold) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] w-full px-3 py-2 transition-transform duration-300 sm:px-4 lg:px-5 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto w-full max-w-[1540px]">
        <div className="relative overflow-hidden rounded-[20px] border border-white/28 bg-[linear-gradient(135deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.03)_38%,rgba(255,255,255,0.08)_100%)] shadow-[0_12px_28px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,0.48),inset_0_-1px_0_rgba(255,255,255,0.08)] backdrop-blur-[6px] backdrop-saturate-[1.18] sm:rounded-[22px] xl:rounded-[24px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.24),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_50%_140%,rgba(255,255,255,0.06),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.92),transparent)]" />
          <div className="pointer-events-none absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/6 blur-2xl" />
          <div className="pointer-events-none absolute -right-6 top-0 h-20 w-28 rounded-full bg-white/5 blur-2xl" />

          <div className="relative flex items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/Group 427320871.png"
              alt="NexiFire Logo"
              width={240}
              height={64}
              sizes="(min-width: 1536px) 200px, (min-width: 1280px) 190px, (min-width: 768px) 176px, 124px"
              className="h-auto w-[112px] shrink-0 sm:w-[130px] md:w-[176px] lg:w-[190px] xl:w-[200px]"
              priority
            />
          </Link>

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-10">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              const className = `whitespace-nowrap text-sm transition-colors duration-150 2xl:text-base ${
                isActive
                  ? "border-b-2 border-[#c0784a] pb-0.5 font-normal text-black"
                  : "font-normal text-[#5f5f5f] hover:text-[#1c1c1c]"
              }`;

              return (
                <li key={link.label}>
                  <Link href={link.href} className={className}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center md:flex">
            <Link
              href="/contact"
              className="hidden items-center justify-center gap-2 rounded-lg border border-[#c0784a]/70 bg-transparent px-4 py-2 text-sm font-medium text-[#c0784a] transition-all duration-200 hover:bg-[#c0784a] hover:text-white hover:shadow-[0_10px_24px_rgba(178,64,2,0.24)] lg:inline-flex xl:px-5 xl:py-[9px] xl:text-base"
            >
              Request a Call
              <CalendarIcon />
            </Link>
          </div>

          <button
            type="button"
            className="flex flex-col gap-[5px] rounded-xl border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_100%)] p-2 shadow-[0_8px_20px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-[6px] xl:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-5 origin-center bg-[#555] transition-all duration-300 ${
                mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[#555] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 origin-center bg-[#555] transition-all duration-300 ${
                mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
        </div>

        {mobileOpen ? (
          <div id="mobile-nav-menu" className="mt-3 xl:hidden">
            <div className="relative overflow-hidden rounded-[24px] border border-white/34 bg-[linear-gradient(145deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.12)_42%,rgba(255,255,255,0.22)_100%)] px-5 py-5 shadow-[0_16px_34px_rgba(31,31,31,0.08),inset_0_1px_0_rgba(255,255,255,0.60),inset_0_-1px_0_rgba(255,255,255,0.10)] backdrop-blur-[8px] backdrop-saturate-[1.2] sm:px-6 md:px-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.20),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
              <div className="relative">
              <div className="grid gap-2 md:grid-cols-2 md:gap-x-6">
                {navLinks.map((link) => {
                  const isActive = isActiveLink(link.href);
                  const className = `rounded-xl px-3 py-3 text-sm transition-colors duration-150 sm:text-base ${
                    isActive
                      ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,242,232,0.42)_100%)] font-semibold text-[#c0784a] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
                      : "text-[#5a5a5a] hover:bg-white/18 hover:text-[#1c1c1c]"
                  }`;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={className}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl border border-[#c0784a]/70 bg-transparent px-5 py-3 text-sm font-medium text-[#c0784a] transition-all duration-200 hover:bg-[#c0784a] hover:text-white sm:text-base md:w-auto"
              >
                Free Consultation
                <CalendarIcon />
              </Link>
            </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
        stroke="#B24002"
        strokeWidth="1.5"
      />
      <path
        d="M7 4V2.5"
        stroke="#B24002"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 4V2.5"
        stroke="#B24002"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.5 9H21.5"
        stroke="#B24002"
        strokeWidth="1.5"
        strokeLinecap="round"
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
  );
}
