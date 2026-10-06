import { ArrowUpRight, Folder } from "lucide-react";

const projects = [
  { number: "01", title: "AI Chatbox", type: "LOCAL AI · LEARNING PROJECT", description: "A hands-on chatbox built around local and pretrained language models: a practical way to explore conversational AI without a cloud bill.", tags: ["JavaScript", "LLM", "GenAI"], tone: "project-cyan" },
  { number: "02", title: "Discord Clone", type: "REALTIME · FULL STACK", description: "A Discord-inspired application exploring realtime messaging, presence, and channels on a modern TypeScript stack.", tags: ["TypeScript", "WebSockets", "Realtime"], tone: "project-violet" },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-muted">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">03 <span>·</span> PROJECTS</p><h2>Things I build for the love of it.</h2></div>
          <div className="project-intro"><p className="section-intro">Realtime experiments, LLM tooling, and full-stack systems. Follow along with the code and experiments on GitHub.</p><a className="text-link" href="https://github.com/koushikvanama" target="_blank" rel="noreferrer">Browse my GitHub <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}>
          <div className="project-card-top"><span className="project-icon"><Folder size={19} /></span><span className="project-number">{project.number}</span></div>
          <p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
          <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>)}</div>
        <div className="project-note"><span className="status-dot" /> More experiments live on GitHub <a href="https://github.com/koushikvanama" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}
