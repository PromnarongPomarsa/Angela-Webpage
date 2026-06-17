import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingTeaser from "./components/PricingTeaser";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <PricingTeaser />
      </main>
      <Footer />
    </>
  );
}
