import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero/Hero";
import WhyChooseSection from "./components/Home/WhyChooseSection/WhyChooseSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhyChooseSection />
    </div>
  );
}
