import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import Section from "./components/Section";



export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section />
      <Footer />
    </div>
  );
}
