import AboutSection from "../components/homePage/About";
import HeroSection from "../components/homePage/Hero";
import Footer from "../components/homePage/Footer";
import Navbar from "../components/homePage/Navbar";

export default function HomePage() {
  return (
    <article>
      <Navbar />
      <HeroSection />
      <Footer />
    </article>
  );
}
