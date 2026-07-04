"use client";

import { motion } from "motion/react";
import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

const WhyItMatters = () => {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto max-w-[1640px] px-2 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left Side: 3D Audiobook Illustration */}
          <div className="flex w-full justify-center lg:flex-[1.05]">
            <div className="relative w-full max-w-[700px]">
              <div className="pointer-events-none absolute bottom-[calc(4%+10px)] left-[calc(16%-50px)] z-0 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="327"
                  height="327"
                  viewBox="0 0 327 327"
                  fill="none"
                  className="h-[270px] w-[270px] xl:h-[327px] xl:w-[327px]"
                >
                  <path
                    opacity="0.3"
                    d="M172.438 322.03C186.043 314.22 198.824 307.644 210.855 302.373L198.728 318.602C192.618 326.779 181.035 328.454 172.858 322.344L172.438 322.03ZM113.847 278.25C121.184 275.575 128.538 271.843 135.857 266.903C182.262 235.583 220.601 214.513 252.815 205.625C264.972 202.27 276.224 200.659 286.692 200.88L256.051 241.887C252.542 242.588 248.966 243.443 245.321 244.449C215.472 252.686 180.785 271.043 139.954 297.758L113.847 278.25ZM55.2034 234.431C82.5746 244.065 112.654 243.771 142.183 223.841C188.588 192.521 226.927 171.452 259.14 162.563C280.714 156.61 299.438 156.142 315.989 161.671L289.884 196.607C278.048 195.958 265.336 197.612 251.645 201.39C218.707 210.479 179.876 231.893 133.4 263.261C125.484 268.604 117.526 272.473 109.59 275.069L55.2034 234.431ZM11.7356 162.075C20.0907 168.971 29.075 175.359 38.5358 180.757C71.4515 199.537 110.436 206.474 148.505 180.78C194.91 149.459 233.249 128.391 265.462 119.502C278.635 115.867 290.745 114.279 301.947 114.85L318.602 127.295C326.779 133.405 328.455 144.988 322.345 153.165L318.751 157.975C300.891 151.628 280.791 152.031 257.971 158.328C225.033 167.417 186.202 188.831 139.726 220.199C105.553 243.263 70.6147 238.887 39.9072 223.001L7.42093 198.727C-0.755871 192.617 -2.43148 181.035 3.6783 172.858L11.7356 162.075ZM143.703 300.559C183.819 274.408 217.615 256.652 246.49 248.684C248.36 248.168 250.208 247.695 252.034 247.262L216.059 295.408C201.352 301.377 185.575 309.352 168.607 319.168L143.703 300.559ZM34.6591 131.397C38.0426 133.656 41.4996 135.805 45.0225 137.816C77.9948 156.639 117.033 163.618 155.127 137.941C194.633 111.313 228.3 92.1066 257.326 81.5083L295.937 110.359C286.005 110.514 275.476 112.182 264.294 115.268C231.355 124.357 192.524 145.77 146.047 177.139C109.811 201.595 72.7131 195.2 40.7126 176.942C31.4227 171.641 22.589 165.351 14.3684 158.552L34.6591 131.397ZM59.3601 98.3392C90.6364 113.949 126.633 118.098 161.825 94.3777C184.268 79.2502 204.826 66.5173 223.72 56.3975L253.139 78.3798C224.196 89.3582 191.035 108.441 152.672 134.299C116.414 158.738 79.2612 152.304 47.2001 134.002C43.8353 132.081 40.5308 130.029 37.2924 127.872L59.3601 98.3392ZM85.533 63.312C111.734 71.4156 140.196 70.1584 168.15 51.3165C177.126 45.2665 185.802 39.601 194.189 34.331L219.839 53.4976C201.238 63.5659 181.142 76.0609 159.369 90.7364C126.139 113.135 92.1581 109.598 62.0332 94.7617L85.533 63.312ZM114.398 24.6815C131.291 26.0447 148.752 22.9233 166.125 13.3611L190.418 31.5135C182.425 36.5592 174.188 41.9505 165.696 47.6744C139.627 65.2457 113.095 66.8583 88.326 59.5742L114.398 24.6815ZM127.296 7.42097C133.406 -0.756044 144.988 -2.43229 153.165 3.67756L162.241 10.4594C147.26 18.307 132.219 21.2065 117.534 20.4845L127.296 7.42097Z"
                    fill="#FF5B01"
                  />
                </svg>
              </div>

              <div className="pointer-events-none absolute right-[10%] top-[44%] z-0 hidden -translate-y-1/2 lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="244"
                  height="244"
                  viewBox="0 0 244 244"
                  fill="none"
                  className="h-[200px] w-[200px] xl:h-[244px] xl:w-[244px]"
                >
                  <path
                    opacity="0.3"
                    d="M77.3041 235.12C83.0724 232.656 88.8446 229.521 94.5953 225.64C141.001 194.32 179.339 173.251 211.553 164.362C220.67 161.846 229.278 160.311 237.428 159.793C233.414 171.994 227.387 183.763 219.275 194.62C217.713 196.711 216.096 198.736 214.429 200.697C211.036 201.385 207.58 202.215 204.059 203.186C179.34 210.007 151.301 223.769 119.202 243.472C105.037 243.187 90.8436 240.437 77.3041 235.12ZM127.899 243.337C157.121 225.837 182.676 213.644 205.229 207.421C206.599 207.043 207.958 206.689 209.306 206.355C187.33 229.154 157.996 241.799 127.899 243.337ZM25.7272 196.637C49.8236 202.324 75.5751 199.685 100.921 182.578C147.327 151.258 185.665 130.189 217.879 121.3C226.861 118.822 235.349 117.295 243.392 116.755C243.929 129.659 242.427 142.687 238.806 155.321C229.825 155.749 220.364 157.373 210.383 160.127C177.445 169.216 138.615 190.63 92.1378 221.998C85.2907 226.619 78.4122 230.138 71.5437 232.685C63.6809 229.117 56.079 224.654 48.8782 219.273C39.9795 212.624 32.2499 204.99 25.7272 196.637ZM1.69072 141.92C33.6476 158.824 70.8629 164.071 107.243 139.517C153.649 108.197 191.987 87.1281 224.201 78.2391C227.706 77.2717 231.137 76.4498 234.495 75.7743C239.256 87.4803 242.157 99.8387 243.13 112.372C234.748 112.932 225.952 114.515 216.71 117.065C183.771 126.154 144.941 147.568 98.4639 178.936C72.5558 196.422 46.2072 198.134 21.5959 191.018C11.3156 176.158 4.61633 159.348 1.69072 141.92ZM3.76078 96.5534C36.7331 115.376 75.7717 122.355 113.866 96.6783C152.068 70.9289 184.81 52.1197 213.175 41.3228C221.296 50.5365 227.833 60.78 232.73 71.6536C229.553 72.3137 226.32 73.0975 223.032 74.0049C190.094 83.0938 151.262 104.507 104.785 135.876C69.0968 159.963 32.5717 154.124 0.904292 136.499C-0.736931 123.069 -0.153519 109.358 2.73981 95.9636C3.0797 96.1609 3.41965 96.3587 3.76078 96.5534ZM18.4804 57.2666C49.6676 72.7193 85.5149 76.7384 120.563 53.1147C142.623 38.2456 162.862 25.691 181.489 15.6564C185.987 18.1964 190.375 21.0499 194.622 24.2236C200.208 28.397 205.33 32.9602 209.985 37.8435C181.49 48.9273 148.94 67.7395 111.41 93.0356C75.152 117.475 37.9995 111.041 5.93836 92.7386C5.22116 92.3292 4.50761 91.9122 3.79589 91.4912C6.83172 79.6376 11.706 68.089 18.4804 57.2666ZM24.2256 48.8762C31.6197 38.9807 40.2318 30.5326 49.6965 23.5805C74.3765 29.8955 100.853 27.6026 126.889 10.0536C131.329 7.06053 135.696 4.1618 139.991 1.35794C152.623 3.26069 165.075 7.17501 176.856 13.1717C158.738 23.0746 139.21 35.2497 118.108 49.4734C84.9225 71.8412 50.9885 68.3451 20.8941 53.5599C21.963 51.9815 23.0727 50.4192 24.2256 48.8762ZM54.5226 20.2135C77.8701 4.7562 105.774 -2.04462 133.243 0.533451C130.337 2.45183 127.401 4.41142 124.434 6.41148C100.963 22.2312 77.1189 25.1116 54.5226 20.2135Z"
                    fill="#FF5B01"
                  />
                </svg>
              </div>

              {/* This asset should be the combined player and earphones image */}
              <img
                src="/Audiobook.webp"
                alt="3D Audiobook player with earphones"
                className="relative z-10 top-10 h-auto w-full object-contain transform transition-transform duration-700 hover:rotate-0 lg:-rotate-6"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:flex-[1.05]">
            <div className="mb-3">
              <motion.div
                className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
                }}
              >
                <TextFluxUnveil text="Why It Matters" />
              </motion.div>
              <h2
                className="project-h2 mt-5 max-w-[500px] leading-[1.02] tracking-[-0.05em] lg:max-w-[620px] xl:max-w-[680px]"
              >
                Understanding Audiobook Distribution Platforms in Australia
              </h2>
            </div>

            <div className="space-y-6 text-[#777777] text-lg md:text-lg leading-relaxed font-light">
              <p>
                Audible remains the dominant audiobook platform in Australia, but the landscape is diversifying rapidly. Spotify launched audiobooks for Australian subscribers and is aggressively expanding its catalogue. Storytel has established a strong subscription base. Apple Books audiobooks reach a loyal iOS audience. Kobo Audiobooks serves existing Kobo e-reader users. OverDrive distributes to public library systems, connecting your audiobook to readers who access content through their library membership. NexiFire submits to all of these platforms simultaneously, ensuring your audiobook reaches every Australian listener regardless of their preferred platform.
              </p>
            </div>

            <div className="text-[#777777] text-lg md:text-lg leading-relaxed font-light mt-2">
              <h3 className="text-3xl font-bold mt-2 text[#444444]">Professional Audiobook Services Across Australia</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Audiobook Production Sydney</li>
                <li>Audiobook Production Melbourne</li>
                <li>Audiobook Production Brisbane</li>
                <li>Audiobook Services Perth</li>
                <li>Audiobook Services Adelaide</li>
                <li>Regional & Remote Australia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
