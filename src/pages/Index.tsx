import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <Timeline />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
