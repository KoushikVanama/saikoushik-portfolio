import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="footer-shell">
      <div className="footer-main"><div><a className="wordmark" href="#home">
        <span>&lt;</span>vsvkoushik.in<span className="wordmark-close"> /&gt;</span></a>
        <p>Senior AI Engineer · Bengaluru, India<br />Building reliable software and applied AI.</p></div>
        <div className="footer-nav"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <div className="footer-social">
          <a href="https://github.com/koushikvanama" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/koushikvsv/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href="/VanamaSaiVenkataKoushik.pdf" target="_blank" rel="noreferrer" aria-label="Open résumé"><ArrowUpRight size={18} /></a>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Sai Venkata Koushik Vanama</span><a href="#home">Back to top ↑</a></div>
    </div>
  );
}
