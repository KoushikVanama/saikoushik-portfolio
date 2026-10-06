import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section id="home" className="hero-section"><Intro /></section>
      <About />
      <Experience />
      <Projects />
      <ContactForm />
      <footer className="site-footer"><Footer /></footer>
    </main>
  );
}
