import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Projects from "@/component/Projects";
import Services from "@/component/Services";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script src="script.js" />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
