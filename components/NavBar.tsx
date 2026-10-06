"use client";

import { FileDown, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["01.", "Home", "home"],
  ["02.", "About", "about"],
  ["03.", "Experience", "experience"],
  ["04.", "Projects", "projects"],
  ["05.", "Contact", "contact"],
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}><span>&lt;</span>vsvkoushik.dev<span className="wordmark-close"> /&gt;</span></a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        <div className={`nav-links${open ? " nav-links-open" : ""}`}>
          {links.map(([number, label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>{number}</span> {label}</a>)}
          <a className="nav-resume" href="/VanamaSaiVenkataKoushik.pdf" target="_blank" rel="noreferrer"><FileDown size={15} /> Résumé</a>
        </div>
      </nav>
    </header>
  );
}
