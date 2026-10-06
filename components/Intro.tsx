import { ArrowDown, ArrowUpRight, FileDown, Github, Linkedin, MapPin } from "lucide-react";

const resumePath = "/VanamaSaiVenkataKoushik.pdf";

export default function Intro() {
  return (
    <div className="hero section-shell">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" /> Bengaluru, India <span className="availability-divider">/</span> Open to opportunities</div>
        <p className="eyebrow">FULL STACK ENGINEERING <span>×</span> APPLIED AI</p>
        <h1>Full stack roots.<br /><span>Agentic AI present.</span></h1>
        <p className="hero-description">I&apos;m Koushik, a senior AI engineer at Fractal Analytics. For 10+ years, I&apos;ve built and shipped web platforms, cloud systems, and production-ready AI experiences.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore selected work <ArrowDown size={16} /></a>
          <a className="button button-quiet" href={resumePath} target="_blank" rel="noreferrer"><FileDown size={16} /> Download résumé</a>
        </div>
        <div className="social-links" aria-label="Social profiles">
          <a href="https://github.com/koushikvanama" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/koushikvsv/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="https://vsvkoushik.in" target="_blank" rel="noreferrer" aria-label="Personal website"><ArrowUpRight size={18} /></a>
        </div>
        <div className="hero-metrics" aria-label="Career highlights">
          <div><strong>10<span>+</span></strong><small>years building software</small></div>
          <div><strong>50K<span>+</span></strong><small>monthly active users</small></div>
          <div><strong>10<span>+</span></strong><small>agents in production</small></div>
          <div><strong>60<span>%</span></strong><small>less manual effort</small></div>
        </div>
      </div>
      <div className="hero-aside">
        <div className="terminal-card">
          <div className="terminal-top"><div className="terminal-dots"><i /><i /><i /></div><span>koushik@fractal:~</span><span className="terminal-live"><span className="status-dot" /> LIVE</span></div>
          <div className="terminal-body">
            <p><span className="terminal-prompt">$</span> whoami</p>
            <p className="terminal-output">Senior AI Engineer <span>@</span> Fractal Analytics</p>
            <p><span className="terminal-prompt">$</span> cat focus.txt</p>
            <p className="terminal-output">Agentic AI · full stack · reliable systems</p>
            <p><span className="terminal-prompt">$</span> location --short</p>
            <p className="terminal-output terminal-green"><MapPin size={14} /> Bengaluru, India <span>IST · UTC+5:30</span></p>
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
        </div>
        <div className="hero-stack-label">A few tools in my everyday stack</div>
        <div className="hero-tags"><span>Agentic AI</span><span>LangGraph</span><span>Next.js</span><span>Kubernetes</span></div>
        <div className="hero-aside-note">Thoughtful engineering, from the first prototype to production.</div>
      </div>
    </div>
  );
}
