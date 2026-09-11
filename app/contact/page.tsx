import GetInTouchContactV2 from "@/components/GetInTouchContactV2";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden">
      <PageHero
        eyebrow="Contact us"
        title={`Let's Talk About Your Book`}
        description={
          <div className="">
            <p className="font-semibold">Whether you have a finished manuscript, a half-written draft, or just an idea you haven't figured out how to start, we're here to help you take the next step.</p>
            <p className="">At NexiFire Publishing, we work with authors across the entire USA, from that very first conversation all the way through to a published, distributed book. There's no wrong stage to reach out; tell us where you are, and we'll tell you honestly what happens next.</p>
          </div>
        }
      />
      <GetInTouchContactV2 />
    </section>
  );
};

export default page;
