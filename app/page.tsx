import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <About />
      <Hero />
      <Services />
      <Gallery />
    </div>
  );
}
