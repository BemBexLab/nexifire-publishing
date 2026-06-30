import BooksSection from "@/components/BookSection";
import HomeHero from "@/components/HomeHero";
import OurBookGenre from "@/components/OurBookGenre";
import HomeServices from "@/components/HomeServices";
import WhoWeAre from "@/components/WhoWeAre";
import OurProcess from "@/components/OurProcess";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import PublishYourBook from "@/components/PublishYourBook";
import LatestBlogs from "@/components/LatestBlogs";
import GetInTouchContact from "@/components/GetInTouchContact";

export default function Home() {
  return (
    <section className="bg-white overflow-hidden">
      <HomeHero />
      <BooksSection />
      <HomeServices />
      <OurBookGenre />
      <WhoWeAre />
      <OurProcess />
      <Portfolio />
      <div className="h-10"></div>
      <Testimonials />
      <div className="h-10"></div>
      <FAQs />
      <PublishYourBook />
      <div className="h-20"></div>
      <LatestBlogs />
      <GetInTouchContact />
    </section>
  );
}
