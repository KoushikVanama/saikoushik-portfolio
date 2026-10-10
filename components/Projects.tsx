import { ArrowUpRight, Folder } from "lucide-react";

const projects = [
  { number: "01", title: "Vaidya.ai", type: "AI · Fullstack · Health Assistant", description: "A production grade AI chatbot — health assistant.  to provide personalized health advice and guidance.", tags: ["Python", "LLM", "GenAI", "DevOps", "LLM Orchestration", "Next.js", "React"], tone: "project-cyan" },
  { number: "02", title: "FreshDirect.com", type: "UI Developer · E-Commerce", description: "A grocery delivery platform. Built using modern web technologies to provide a seamless grocery delivery experience.", tags: ["TypeScript", "Angular", "CSS", "HTML"], tone: "project-violet" },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-muted">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">03 <span>·</span> PROJECTS</p><h2>Things I build for the love of it.</h2></div>
          {/* <div className="project-intro"><p className="section-intro">Realtime experiments, LLM tooling, and full-stack systems. Follow along with the code and experiments on GitHub.</p><a className="text-link" href="https://github.com/koushikvanama" target="_blank" rel="noreferrer">Browse my GitHub <ArrowUpRight size={15} /></a></div> */}
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
