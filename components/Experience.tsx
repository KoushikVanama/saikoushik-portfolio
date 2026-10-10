import { ArrowUpRight, Briefcase } from "lucide-react";

const roles = [
  {
    company: "Fractal Analytics", location: "Bengaluru", dates: "Apr 2024 — Present", title: "Senior AI Engineer", current: true,
    highlights: [
      "Designed and productionized agentic AI systems with 10+ specialized agents for image generation, reference editing, search, reasoning, and GPT-based workflows; reduced manual effort by 60% across user workflows.",
      "Led end-to-end development and production deployment of Kalaido.ai, scaling the product to 50K+ monthly active users with robust backend architecture and optimized inference pipelines.",
      "Improved API latency by around 40%, strengthened microservice observability, and shipped key components for Vaidyaa.ai.",
    ],
    stack: ["Agentic AI", "LangGraph", "Python", "Kubernetes", "System design"],
  },
  {
    company: "Société Générale", location: "Bengaluru", dates: "Mar 2020 — Mar 2024", title: "Specialist Software Engineer", current: false,
    highlights: [
      "Delivered and maintained eight enterprise BCM applications with high availability and performance requirements.",
      "Designed Docker and Kubernetes CI/CD pipelines for zero-downtime deployments and faster releases.",
      "Built a reusable middleware framework that reduced engineering effort by 80%; recognized with multiple spot awards.",
    ],
    stack: ["Node.js", "React", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    company: "Nous Infosystems", location: "Bengaluru", dates: "Jul 2018 — Feb 2020", title: "Software Engineer", current: false,
    highlights: [
      "Led a three-person development team and delivered HME Janus, contributing to a 38% product revenue increase over five months.",
      "Owned key client projects and received a Newbie Award for significant contributions.",
    ],
    stack: ["JavaScript", "Angular", "React", "Team leadership"],
  },
  {
    company: "Capgemini", location: "Bengaluru", dates: "Jun 2015 — Jun 2018", title: "Associate Consultant", current: false,
    highlights: [
      "Built and maintained application modules, ramping up on Angular and React to help teams ship on schedule.",
      "Contributed to eSD, an electronic supplier diagnostics platform for Jaguar Land Rover, and received a Cisco Systems Special Mention for technical delivery.",
    ],
    stack: ["Angular", "React"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-shell">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">02 <span>·</span> EXPERIENCE</p><h2>A decade of building, learning, shipping.</h2></div>
          {/* <p className="section-intro">A path through enterprise software and cloud platforms to applied AI in production.</p> */}
        </div>
        <div className="experience-list">{roles.map((role, index) => <article className="experience-item" key={role.company}>
          <div className="experience-index">0{index + 1}<span className="timeline-line" /></div>
          <div className="experience-main">
            <div className="experience-top"><div><div className="company-name">{role.company}{role.current && <span className="current-badge">CURRENT</span>}</div><h3>{role.title}</h3></div><div className="experience-meta"><span>{role.dates}</span><span>{role.location}, India</span></div></div>
            <ul className="achievement-list">{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <div className="experience-stack">{role.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </article>)}</div>
        <div className="education-strip"><div className="education-icon"><Briefcase size={18} /></div><div><p className="eyebrow">FOUNDATIONS</p><h3>B.Tech in Computer Science &amp; Engineering</h3><p>KL University, Vijayawada <span>·</span> 2011 — 2015 <span>·</span> CGPA 7.8/10</p></div><a href="/VanamaSaiVenkataKoushik.pdf" target="_blank" rel="noreferrer" aria-label="Open résumé"><ArrowUpRight size={18} /></a></div>
      </div>
    </section>
  );
}
