import BooksSection from "@/components/BookSection";
import HomeHero from "@/components/HomeHero";
import OurBookGenre from "@/components/OurBookGenre";
import HomeServices from "@/components/HomeServices";
import WhoWeAre from "@/components/WhoWeAre";
import OurProcess from "@/components/OurProcess";

export default function Home() {
  return (
    <section className="bg-white">
      <HomeHero />
      <BooksSection />
      <HomeServices />
      <OurBookGenre />
      <WhoWeAre />
      <OurProcess />
    </section>
  );
}
