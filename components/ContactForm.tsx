"use client";

import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

const contacts = [
  { icon: Mail, label: "EMAIL", value: "koushik.vanama@gmail.com", href: "mailto:koushik.vanama@gmail.com" },
  { icon: Phone, label: "PHONE", value: "+91 96035 87689", href: "tel:+919603587689" },
  { icon: MapPin, label: "LOCATION", value: "Bengaluru, India · IST · UTC+5:30", href: "https://maps.google.com/?q=Bengaluru,India" },
];

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setState(response.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell contact-shell">
        <div className="contact-copy"><p className="eyebrow">04 <span>·</span> CONTACT</p><h2>Have an interesting problem?</h2><p className="section-intro">I&apos;m open to thoughtful conversations about agentic AI, full-stack engineering, and building products that matter. Let&apos;s talk.</p>
          <div className="contact-methods">{contacts.map(({ icon: Icon, label, value, href }) => <a className="contact-method" href={href} key={label} target={label === "LOCATION" ? "_blank" : undefined} rel={label === "LOCATION" ? "noreferrer" : undefined}><span className="contact-icon"><Icon size={18} /></span><span className="contact-value"><small>{label}</small><strong>{value}</strong></span><ArrowUpRight className="contact-arrow" size={16} /></a>)}</div>
        </div>
        <div className="contact-form-panel">
          {state === "sent" ? <div className="form-success" role="status"><span className="success-icon"><Check size={24} /></span><h3>Message received</h3><p>Thanks for reaching out. I&apos;ll reply to the email address you left, usually within a day.</p><button className="button button-quiet" type="button" onClick={() => { setState("idle"); }}>Send another message</button></div> : <>
            <div className="form-heading"><div><p className="eyebrow">DROP ME A NOTE</p><h3>Let&apos;s start a conversation.</h3></div><span className="form-heading-icon"><Mail size={19} /></span></div>
            <form className="contact-form" onSubmit={handleSubmit} onChange={() => state === "error" && setState("idle")}>
              <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" placeholder="How should I address you?" autoComplete="name" required maxLength={80} />
              <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required maxLength={254} />
              <label htmlFor="contact-message">What would you like to discuss?</label><textarea id="contact-message" name="message" placeholder="A little context helps me get back to you..." rows={4} maxLength={4000} />
              {state === "error" && <p className="form-error" role="alert">I couldn&apos;t send your message just now. Please try again or email me directly.</p>}
              <div className="form-submit-row"><p>I&apos;ll use your details to reply.</p><button className="button button-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : <>Send message <ArrowUpRight size={16} /></>}</button></div>
            </form>
          </>}
        </div>
      </div>
    </section>
  );
}
