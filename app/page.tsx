import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section id="home" className="home">
        <Intro />
      </section>
      <section id="about" className="about flex flex-col w-full h-full">
        <div className="text-center font-bold text-zinc-800 mt-10 text-2xl">ABOUT</div>
        <div className="self-center w-12 border-zinc-600 border-b-4 py-1"></div>
        <div className="flex h-full">
          <div className="flex-col">
            Skills
          </div>
          <div className="flex-col">
            Experiences
          </div>
        </div>
      </section>
      <section id="contact" className="contact-form">
        <ContactForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
