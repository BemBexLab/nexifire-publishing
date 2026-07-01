"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextFluxUnveil from "./TextFluxUnveil";

const faqs = [
  {
    question:
      "Do I need a completed manuscript before contacting NexiFire Publishing?",
    answer:
      "No. Whether you have a completed manuscript, a rough draft, or just a book idea, our team can guide you through the next steps.",
  },
  {
    question: "What types of books do you publish?",
    answer:
      "We work across a wide range of genres including fiction, memoirs, children's books, business, self-development, and more.",
  },
  {
    question: "Do I keep the rights to my book?",
    answer:
      "Yes. Your authorship and ownership stay protected, and we walk you through the publishing path with transparency.",
  },
  {
    question: "What publishing services do you offer?",
    answer:
      "Our services can include editing, formatting, cover design, publishing support, distribution guidance, and marketing assistance.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "Timelines depend on the manuscript and services selected, but we provide a clear roadmap and milestones once we review your project.",
  },
  {
    question: "Will my book be available on major online retailers?",
    answer:
      "Yes. We help position books for distribution through leading online retail platforms and wider availability channels.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-4 pb-14 sm:px-6 sm:pb-16 md:px-10 lg:px-16 lg:pb-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-8 lg:mb-7">
          <div
            className="mb-3 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-center text-sm text-black sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="FAQs" />
          </div>

          <h2 className="project-h2 block w-full max-w-full text-left">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-8">
          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-[14px] border transition ${
                    isOpen
                      ? "border-[#f0d7c6] bg-white"
                      : "border-[#f1ece7] bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-[13px] text-left sm:px-6"
                  >
                    <span
                      className={`pr-4 text-sm leading-[1.45] sm:text-base ${
                        isOpen ? "text-[#B24002]" : "text-[#777777]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-[#c8c1bb]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          d="M3 5.5L7 9L11 5.5"
                          stroke={isOpen ? "#FF5B01" : "#B9B1AC"}
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="border-t border-[#f6eee8] px-5 pb-4 pt-3 sm:px-6">
                      <p className="max-w-[92%] text-sm leading-[1.65] text-[#777777] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          <aside className="rounded-[18px] bg-[#fdf7f3] px-7 py-9 text-center sm:px-8 lg:min-h-[340px] lg:px-9">
            <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124"
                height="124"
                viewBox="0 0 124 124"
                fill="none"
              >
                <path
                  d="M67.6143 110.503L69.0001 111.323V111.323L67.6143 110.503ZM70.4151 105.771L69.0293 104.951V104.951L70.4151 105.771ZM53.5845 105.771L52.1987 106.591V106.591L53.5845 105.771ZM56.3853 110.503L57.7712 109.682V109.682L56.3853 110.503ZM12.2997 82.219L13.7875 81.6027H13.7875L12.2997 82.219ZM40.2461 98.1222L40.2183 99.7323V99.7323L40.2461 98.1222ZM26.2806 96.1999L25.6643 97.6877L25.6643 97.6877L26.2806 96.1999ZM111.7 82.219L113.188 82.8353V82.8353L111.7 82.219ZM83.7535 98.1222L83.7258 96.512V96.512L83.7535 98.1222ZM97.7192 96.1999L98.3355 97.6877V97.6877L97.7192 96.1999ZM101.331 14.1398L100.49 15.5129V15.5129L101.331 14.1398ZM109.86 22.6685L111.233 21.827V21.827L109.86 22.6685ZM22.6687 14.1398L21.8273 12.7667V12.7667L22.6687 14.1398ZM14.14 22.6685L12.767 21.827V21.827L14.14 22.6685ZM48.581 99.2505L49.3907 97.8585L49.3906 97.8585L48.581 99.2505ZM67.6143 110.503L69.0001 111.323L71.801 106.591L70.4151 105.771L69.0293 104.951L66.2285 109.682L67.6143 110.503ZM53.5845 105.771L52.1987 106.591L54.9995 111.323L56.3853 110.503L57.7712 109.682L54.9703 104.951L53.5845 105.771ZM67.6143 110.503L66.2285 109.682C64.3557 112.847 59.644 112.847 57.7712 109.682L56.3853 110.503L54.9995 111.323C58.1194 116.594 65.8802 116.594 69.0001 111.323L67.6143 110.503ZM54.2499 10.333V11.9434H69.7499V10.333V8.72262H54.2499V10.333ZM113.667 54.2497H112.056V59.4163H113.667H115.277V54.2497H113.667ZM10.3333 59.4163H11.9436V54.2497H10.3333H8.72286V59.4163H10.3333ZM10.3333 59.4163H8.72286C8.72286 65.4127 8.72199 69.9907 8.9724 73.6608C9.2238 77.3454 9.73384 80.2326 10.8119 82.8353L12.2997 82.219L13.7875 81.6027C12.8991 79.4579 12.4259 76.9622 12.1857 73.4416C11.9445 69.9065 11.9436 65.4568 11.9436 59.4163H10.3333ZM40.2461 98.1222L40.2738 96.512C33.7876 96.4003 29.9978 95.9965 26.8969 94.7121L26.2806 96.1999L25.6643 97.6877C29.3865 99.2295 33.7325 99.6206 40.2183 99.7323L40.2461 98.1222ZM12.2997 82.219L10.8119 82.8353C13.5973 89.5597 18.9398 94.9023 25.6643 97.6877L26.2806 96.1999L26.8969 94.7121C20.9616 92.2536 16.246 87.538 13.7875 81.6027L12.2997 82.219ZM113.667 59.4163H112.056C112.056 65.4568 112.055 69.9065 111.814 73.4416C111.574 76.9622 111.101 79.4579 110.212 81.6027L111.7 82.219L113.188 82.8353C114.266 80.2326 114.776 77.3454 115.027 73.6608C115.278 69.9907 115.277 65.4127 115.277 59.4163H113.667ZM83.7535 98.1222L83.7813 99.7323C90.2672 99.6206 94.6133 99.2295 98.3355 97.6877L97.7192 96.1999L97.103 94.7121C94.002 95.9965 90.2121 96.4003 83.7258 96.512L83.7535 98.1222ZM111.7 82.219L110.212 81.6027C107.754 87.538 103.038 92.2536 97.103 94.7121L97.7192 96.1999L98.3355 97.6877C105.06 94.9023 110.403 89.5597 113.188 82.8353L111.7 82.219ZM69.7499 10.333V11.9434C78.2375 11.9434 84.49 11.9451 89.4008 12.412C94.2876 12.8767 97.6792 13.7906 100.49 15.5129L101.331 14.1398L102.173 12.7667C98.7709 10.6822 94.8283 9.69276 89.7057 9.2057C84.6071 8.72092 78.1751 8.72262 69.7499 8.72262V10.333ZM113.667 54.2497H115.277C115.277 45.8245 115.279 39.3925 114.794 34.2939C114.307 29.1713 113.317 25.2287 111.233 21.827L109.86 22.6685L108.487 23.5099C110.209 26.3204 111.123 29.712 111.588 34.5988C112.054 39.5096 112.056 45.7621 112.056 54.2497H113.667ZM101.331 14.1398L100.49 15.5129C103.749 17.5102 106.489 20.2506 108.487 23.5099L109.86 22.6685L111.233 21.827C108.97 18.1343 105.865 15.0296 102.173 12.7667L101.331 14.1398ZM54.2499 10.333V8.72262C45.8247 8.72262 39.3928 8.72092 34.2942 9.2057C29.1716 9.69276 25.2289 10.6822 21.8273 12.7667L22.6687 14.1398L23.5101 15.5129C26.3206 13.7906 29.7122 12.8767 34.599 12.412C39.5098 11.9451 45.7624 11.9434 54.2499 11.9434V10.333ZM10.3333 54.2497H11.9436C11.9436 45.7621 11.9453 39.5096 12.4123 34.5988C12.8769 29.712 13.7908 26.3204 15.5131 23.5099L14.14 22.6685L12.767 21.827C10.6825 25.2287 9.693 29.1713 9.20594 34.2939C8.72116 39.3925 8.72286 45.8245 8.72286 54.2497H10.3333ZM22.6687 14.1398L21.8273 12.7667C18.1346 15.0296 15.0299 18.1343 12.767 21.827L14.14 22.6685L15.5131 23.5099C17.5105 20.2506 20.2508 17.5102 23.5101 15.5129L22.6687 14.1398ZM53.5845 105.771L54.9703 104.951C53.8995 103.142 53.0407 101.687 52.2238 100.566C51.387 99.4182 50.5238 98.5175 49.3907 97.8585L48.581 99.2505L47.7714 100.643C48.383 100.998 48.9353 101.523 49.6209 102.463C50.3264 103.431 51.0969 104.73 52.1987 106.591L53.5845 105.771ZM40.2461 98.1222L40.2183 99.7323C42.4449 99.7707 44.005 99.7992 45.2296 99.9348C46.4243 100.067 47.165 100.29 47.7714 100.643L48.581 99.2505L49.3906 97.8585C48.2522 97.1963 47.0222 96.8928 45.584 96.7336C44.1757 96.5776 42.4406 96.5494 40.2738 96.512L40.2461 98.1222ZM70.4151 105.771L71.801 106.591C72.9027 104.73 73.6732 103.431 74.3787 102.463C75.0643 101.523 75.6166 100.998 76.2283 100.643L75.4186 99.2505L74.609 97.8585C73.4758 98.5175 72.6126 99.4182 71.7758 100.566C70.9589 101.687 70.1001 103.142 69.0293 104.951L70.4151 105.771ZM83.7535 98.1222L83.7258 96.512C81.559 96.5494 79.8239 96.5776 78.4156 96.7336C76.9774 96.8928 75.7474 97.1963 74.609 97.8585L75.4186 99.2505L76.2283 100.643C76.8346 100.29 77.5753 100.067 78.7701 99.9348C79.9947 99.7992 81.5547 99.7707 83.7813 99.7323L83.7535 98.1222Z"
                  fill="#FF5B01"
                />
              </svg>
            </div>

            <h3 className="mx-auto mt-5 max-w-[390px] text-3xl font-normal uppercase leading-[1.04] tracking-[-0.045em] text-[#4a4a4a] sm:text-4xl">
              Do You Have More Questions?
            </h3>

            <p className="mx-auto mt-4 max-w-[240px] text-sm leading-[1.7] text-[#777777] sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <Link
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#B24002_0%,#FF5B01_100%)] px-5 py-[7px] text-base font-light leading-none text-white shadow-[0_10px_20px_rgba(255,91,1,0.18)] transition hover:brightness-[1.03] sm:text-lg"
            >
              Contact Us
              <span className="ml-1.5 text-sm leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.207 5.53516C14.207 5.53516 15.197 5.818 16.6819 7.30292C18.1668 8.78785 18.4497 9.7778 18.4497 9.7778"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90533 10.1147 9.8278C10.1147 9.8278 8.99578 10.9467 11.0245 12.9755C13.0532 15.0042 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
