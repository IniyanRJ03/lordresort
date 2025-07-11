import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Accommodations from "@/components/home/Accommodations";
import Services from "@/components/home/Services";
import Stories from "@/components/home/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Accommodations />
      <Services />
      <Stories />
      {/* Add your own sections/components here */}
    </>
  );
}
