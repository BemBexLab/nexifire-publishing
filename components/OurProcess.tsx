import Image from "next/image";

const processSteps = [
  {
    number: "01",
    title: "Submit Your Manuscript",
    description:
      "Share your manuscript, book idea, or draft with our publishing team for evaluation.",
    position:
      "lg:absolute lg:left-0 lg:top-4",
  },
  {
    number: "02",
    title: "Review & Preparation",
    description:
      "Our experts review your work, provide recommendations, and prepare it through editing.",
    position:
      "lg:absolute lg:left-[235px] lg:top-[115px]",
  },
  {
    number: "03",
    title: "Publish & Distribute",
    description:
      "Your book is professionally published and made available through leading print.",
    position:
      "lg:absolute lg:left-[555px] lg:top-0",
  },
  {
    number: "04",
    title: "Market & Grow",
    description:
      "We help promote your book, expand its reach, and build your author presence.",
    position:
      "lg:absolute lg:right-0 lg:top-[115px]",
  },
];

const dashPath =
  "M2.50024 5.25621C103.5 -7.24379 310.5 13.2538 381.5 259.756C452.125 504.955 698.864 525.93 867.5 128.756C959 -86.7451 1311 76.2545 1311 233.755";

const OurProcess = () => {
  return (
    <section className="bg-[#fffaf6] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1314px]">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex rounded-[10px] bg-[#f7e9df] px-4 py-2 text-sm font-medium uppercase tracking-[-0.02em] text-[#5d5d5d]">
            Our Process
          </div>
          <h2 className="mt-5 text-[2.4rem] font-normal uppercase leading-none tracking-[-0.05em] text-[#4b4b4b] sm:text-[3rem] lg:text-[3.85rem]">
            Our Publishing Process
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-[#8a8a8a] sm:text-base">
            A streamlined journey designed to take your book from manuscript to
            published success.
          </p>
        </div>

        <div className="relative mt-14 lg:min-h-[390px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1314"
            height="440"
            viewBox="0 0 1314 440"
            fill="none"
            className="pointer-events-none absolute left-1/2 top-[38px] z-0 hidden h-auto w-full max-w-[1314px] -translate-x-1/2 lg:block"
            aria-hidden="true"
          >
            <path
              opacity="0.5"
              d={dashPath}
              stroke="#FF5B01"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="17 17"
            />
          </svg>

          <div className="grid gap-8 sm:grid-cols-2 lg:block">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={`relative rounded-[28px] bg-[#f8f1eb] p-4 shadow-[0_10px_24px_rgba(77,42,20,0.08)] sm:p-5 lg:h-[224px] lg:w-[220px] ${step.position}`}
              >
                <div className="pointer-events-none absolute left-1/2 top-[-20px] z-20 -translate-x-1/2">
                  <Image
                    src="/Frame 344.png"
                    alt=""
                    width={56}
                    height={56}
                    className="h-[56px] w-[56px] object-contain drop-shadow-[0_10px_14px_rgba(0,0,0,0.22)]"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-10 rounded-[18px] bg-white p-5 shadow-[0_3px_0_rgba(209,199,191,0.9),0_10px_24px_rgba(71,49,35,0.10)] sm:p-6">
                  <div className="text-[1.7rem] font-normal leading-none tracking-[-0.04em] text-[#eb6d2f]">
                    {step.number}
                  </div>
                  <h3 className="mt-7 text-[1.55rem] font-medium leading-[1.1] tracking-[-0.04em] text-[#4a4a4a]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[0.96rem] leading-[1.45] text-[#787878]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
