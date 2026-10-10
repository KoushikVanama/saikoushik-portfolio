import { Award, GraduationCap, MapPin, Radio } from "lucide-react";

const skillGroups = [
  { label: "AI / LLM", items: ["Agentic AI", "AutoGen", "LangChain", "LangGraph", "RAG", "MAF", "Prompt engineering", "GenAI"] },
  { label: "Backend", items: ["Node.js", "Python", "NestJS", "Next.js"] },
  { label: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript"] },
  { label: "Cloud & DevOps", items: ["Kubernetes", "Docker", "CI/CD", "Azure", "AWS"] },
  { label: "Data & systems", items: ["SQL", "MongoDB", "WebSockets", "System design"] },
];

export default function About() {
  return (
    <section id="about" className="section section-muted">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">01 <span>·</span> ABOUT</p>
          <h2>Engineering with a sense of ownership.</h2>
          <p className="section-intro">From banking platforms to agentic AI, I enjoy turning complex ideas into software people can rely on. I care about the quiet work behind good products: clear interfaces, resilient services, useful observability, and a smooth path to production.</p>
        </div>
        <div className="about-grid">
          <div className="about-left">
            <article className="info-card facts-card">
              <h3>Quick facts</h3>
              <div className="fact-row"><MapPin size={17} /><p>Bengaluru, India <span>·</span> IST <span>·</span> UTC+5:30</p></div>
              <div className="fact-row"><Award size={17} /><p>Recognized for outstanding contributions at Société Générale and Cisco Systems; recipient of a Newbie Award early in my career.</p></div>
              <div className="fact-row"><GraduationCap size={18} /><p>B.Tech, Computer Science &amp; Engineering <span>·</span> KL University <span>·</span> CGPA 7.8/10</p></div>
            </article>
            {/* <article className="info-card realtime-card">
              <div className="card-icon"><Radio size={18} /></div>
              <div><h3>Fascinated by realtime</h3><p>WebSockets and WebRTC keep me curious. I like building the connective tissue that makes collaborative products feel alive.</p></div>
            </article> */}
          </div>
          <article className="info-card skill-card">
            {/* <div className="skill-card-heading"><div><p className="eyebrow">TOOLS I REACH FOR</p><h3>Skill matrix</h3></div><span className="skill-caption">Grouped by where they fit in the stack.</span></div> */}
            <div className="skill-card-heading eyebrow"><div><h3>Skill matrix</h3></div></div>
            <div className="skill-groups">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><div className="skill-group-title">{group.label}</div><div className="skill-pills">{group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div></div>)}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
