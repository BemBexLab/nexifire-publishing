import React from "react";
import TextFluxUnveil from "./TextFluxUnveil";

const reasons = [
  {
    title: "Professional Guidance",
    description: "Receive expert support throughout your publishing journey.",
  },
  {
    title: "Global Distribution",
    description:
      "Make your book available through major print and digital platforms.",
  },
  {
    title: "Quality Production",
    description: "Professional formatting and publishing standards.",
  },
  {
    title: "Author-Focused Approach",
    description:
      "Keep full ownership of your work with expert support.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-[-198px] top-[-18px] hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="462"
          height="691"
          viewBox="0 0 462 691"
          fill="none"
          className="h-[560px] w-[375px] xl:h-[691px] xl:w-[462px]"
          aria-hidden="true"
        >
          <path
            opacity="0.1"
            d="M-205.623 358.235C-130.27 201.96 52.7623 -79.5176 182.065 44.7653C343.693 200.119 27.9854 434.289 -29.8524 574.433C-76.1227 686.547 -1.49467 683.777 41.6031 668.377C126.644 615.082 311.273 496.065 369.458 446.358C416.32 411.748 470.407 417.879 437.646 468.841C396.694 532.544 281.733 611.316 206.03 620.327C145.467 627.536 239.356 457.597 293.871 371.727"
            stroke="#B24002"
            strokeWidth="27.89"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-[-44px] top-[52px] hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="303"
          height="522"
          viewBox="0 0 303 522"
          fill="none"
          className="h-[350px] w-[203px] xl:h-[522px] xl:w-[303px]"
          aria-hidden="true"
        >
          <path
            opacity="0.1"
            d="M275.739 511.292C297.161 498.993 317.287 488.638 336.23 480.339L310.821 514.343C304.687 522.552 293.06 524.234 284.851 518.101L275.739 511.292ZM183.48 442.354C195.033 438.142 206.612 432.265 218.137 424.486C291.208 375.169 351.577 341.994 402.301 327.997C421.444 322.715 439.162 320.178 455.645 320.525L407.396 385.097C401.873 386.201 396.243 387.548 390.504 389.131C343.504 402.101 288.883 431.006 224.588 473.072L183.48 442.354ZM91.1501 373.364C134.246 388.53 181.605 388.059 228.098 356.68C301.169 307.362 361.538 274.187 412.262 260.19C446.233 250.817 475.716 250.08 501.777 258.786L460.675 313.794C442.036 312.771 422.019 315.38 400.461 321.328C348.595 335.64 287.45 369.359 214.267 418.753C201.802 427.165 189.274 433.259 176.778 437.347L91.1501 373.364ZM22.6936 259.42C35.85 270.28 49.996 280.339 64.8934 288.839C116.723 318.411 178.11 329.334 238.055 288.875C311.126 239.558 371.495 206.383 422.219 192.386C442.959 186.663 462.027 184.16 479.664 185.059L514.343 210.971C522.552 217.105 524.234 228.732 518.1 236.941L506.126 252.966C478.004 242.971 446.354 243.607 410.421 253.523C358.556 267.834 297.412 301.552 224.228 350.946C170.426 387.258 115.417 380.377 67.0687 355.37L7.44933 310.822C-0.759853 304.688 -2.44217 293.06 3.69186 284.85L22.6936 259.42ZM230.49 477.481C293.659 436.302 346.876 408.346 392.344 395.799C395.286 394.987 398.196 394.243 401.071 393.561L344.424 469.372C321.266 478.77 296.424 491.327 269.706 506.784L230.49 477.481ZM58.788 211.115C64.1154 214.673 69.5574 218.057 75.1043 221.224C127.023 250.863 188.495 261.852 248.479 221.421C310.686 179.491 363.699 149.247 409.404 132.559L470.198 177.986C454.561 178.23 437.984 180.86 420.379 185.718C368.513 200.03 307.369 233.748 234.185 283.142C177.127 321.652 118.71 311.582 68.321 282.832C53.6925 274.486 39.7833 264.58 26.8386 253.873L58.788 211.115ZM97.6829 159.062C146.932 183.642 203.614 190.175 259.028 152.825C294.367 129.005 326.739 108.955 356.489 93.0205L402.811 127.632C357.235 144.919 305.02 174.97 244.613 215.686C187.52 254.169 129.018 244.037 78.534 215.218C73.236 212.193 68.033 208.963 62.9341 205.567L97.6829 159.062ZM138.896 103.907C180.152 116.668 224.971 114.689 268.988 85.0197C283.121 75.4935 296.78 66.5704 309.986 58.2724L350.38 88.4552C321.09 104.309 289.445 123.981 255.161 147.089C202.835 182.359 149.326 176.793 101.89 153.431L138.896 103.907ZM184.348 43.0779C210.947 45.2243 238.442 40.3106 265.797 25.2539L304.049 53.8363C291.463 61.7812 278.493 70.2714 265.122 79.2842C224.073 106.952 182.296 109.49 143.294 98.0207L184.348 43.0779ZM210.971 7.44908C217.105 -0.759817 228.732 -2.44156 236.942 3.6924L259.682 20.6845C236.092 33.0413 212.408 37.6066 189.286 36.4698L210.971 7.44908Z"
            fill="#FF5B01"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1540px] gap-12 lg:grid-cols-[460px_minmax(0,1fr)] lg:items-start lg:gap-16 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-20">
        <div className="max-w-[360px] sm:max-w-[530px] lg:pt-7 xl:pt-9">
          <div
            className="mb-5 flex w-fit items-center justify-center rounded-[8px] px-4 py-2 text-sm text-[#4E4741] sm:px-5 sm:text-base"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="Why Choose Our Book Publishing Services" />
          </div>

          <h2 className="project-h2 leading-[1.04] tracking-[-0.055em]">
            <span className="block">Everything You Need Under One Roof</span>
          </h2>
        </div>

        <div className="relative lg:pt-5 xl:pt-8">
          <div className="rounded-[22px] px-5 py-6 sm:px-6 sm:py-8 lg:px-7 lg:py-10 xl:px-8 xl:py-12">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`grid grid-cols-[12px_minmax(0,1fr)] gap-4 py-5 sm:gap-5 sm:py-6 lg:grid-cols-[18px_minmax(0,1fr)] lg:gap-6 ${
                  index !== reasons.length - 1
                    ? "border-b border-[#EEE6E0]"
                    : ""
                }`}
              >
                <div className="flex justify-start pt-[2px]">
                  <span className="h-[42px] w-[2px] rounded-full sm:h-[44px]" />
                </div>

                <div>
                  <h3 className="text-lg font-medium leading-tight text-[#313131] sm:text-xl">
                    {reason.title}
                  </h3>

                  <p className="mt-2 max-w-[580px] text-sm leading-[1.6] text-[#666666] sm:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
