import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Explore from "@/src/components/Explore";
import Category from "@/src/components/Category";
import BrandPillars from "@/src/components/BrandPillars";
import Subscribe from "@/src/components/Subscribe";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-24 md:pt-24 lg:pt-24">
        <Hero />
      </div>
      <Explore />
      <Category />
      <BrandPillars />
      <Subscribe />
      <Footer />
    </>
  );

}
