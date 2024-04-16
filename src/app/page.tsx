import Image from "next/image";
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Vision from "@/components/landing/vision";
import Pricing from "@/components/landing/pricing";
import Contact from "@/components/landing/contact";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Vision />
      <Pricing />
      <Contact />
    </main>
  );
}
