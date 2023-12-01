import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section id="home">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
