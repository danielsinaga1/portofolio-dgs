import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import Hero from "../Components/Carousel";
import Skills from "../Components/ClientList";
import Experience from "../Components/Facts";
import Credentials from "../Components/Credentials";
import Projects from "../Components/Revenue";
import Icon from "../Components/Icon";
import ScrollEffects from "../Components/ScrollEffects";
import Technology from "../Components/Technology";
import { contactDetails, socialMediaUrl } from "../Components/Details";
import emailjs from "emailjs-com";

const emptyFields = { username: "", email: "", subject: "", message: "" };

function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFields(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: "" }));
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (isLoading) return;
    const validation: Record<string, string> = {};
    if (fields.username.trim().length < 2) validation.username = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) validation.email = "Please enter a valid email address.";
    if (fields.message.trim().length < 10) validation.message = "Please tell me a little more (at least 10 characters).";
    setErrors(validation);
    setStatus("idle");
    if (Object.keys(validation).length) {
      form.current?.querySelector<HTMLElement>(`[name="${Object.keys(validation)[0]}"]`)?.focus();
      return;
    }
    if (!form.current) return;
    setIsLoading(true);
    try {
      await emailjs.sendForm("service_k80xoyk", "template_q6z4pl4", form.current, "yV95_dZd7WA5uN3f7");
      setFields(emptyFields);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return <section id="contact" className="connect-section"><div className="container">
    <div className="connect-grid">
      <div className="connect-copy">
        <span className="section-eyebrow"><span>05</span>LET'S WORK TOGETHER</span>
        <h2>Good things start<br />with a <span>hello.</span></h2>
        <p>Have a project in mind or a role that could be a good fit? Let's talk about what we can build together.</p>
        <a className="connect-email" href={`mailto:${contactDetails.email}`}>{contactDetails.email}<Icon name="arrow" /></a>
        <div className="connect-details"><a href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}><Icon name="phone" />{contactDetails.phone}</a><span><Icon name="globe" />Based in Indonesia. Open to remote.</span></div>
        <div className="connect-socials"><a href={socialMediaUrl.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub"><Icon name="github" /></a><a href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><Icon name="linkedin" /></a><span>Good conversations lead to great things.</span></div>
        <div className="contact-availability"><span className="availability-dot" />Open to remote roles & collaborations</div>
      </div>
      <form ref={form} className="message-form" onSubmit={handleSubmit} noValidate aria-label="Contact Daniel">
        <h3>Let's start a conversation.</h3><p>Tell me a little about yourself and your idea.</p>
        <div className="message-form-grid">
          <div className="message-field"><label htmlFor="contact-name">Your name <span>*</span></label><input id="contact-name" type="text" name="username" autoComplete="name" placeholder="Alex Johnson" value={fields.username} onChange={handleChange} disabled={isLoading} required aria-invalid={!!errors.username} aria-describedby={errors.username ? "name-error" : undefined} />{errors.username && <span id="name-error" className="field-error">{errors.username}</span>}</div>
          <div className="message-field"><label htmlFor="contact-email">Email address <span>*</span></label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="alex@company.com" value={fields.email} onChange={handleChange} disabled={isLoading} required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</div>
          <div className="message-field full-width"><label htmlFor="contact-subject">What's it about?</label><input id="contact-subject" type="text" name="subject" placeholder="A project, an opportunity, or just hello" value={fields.subject} onChange={handleChange} disabled={isLoading} /></div>
          <div className="message-field full-width"><label htmlFor="contact-message">Your message <span>*</span></label><textarea id="contact-message" name="message" rows={4} placeholder="I'd love to talk about..." value={fields.message} onChange={handleChange} disabled={isLoading} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</div>
        </div>
        {status === "success" && <div className="form-notice is-success" role="status"><Icon name="check" />Your message is on its way. Thanks for reaching out!</div>}
        {status === "error" && <div className="form-notice is-error" role="alert">Your message couldn't be sent. Please try again or <a href={`mailto:${contactDetails.email}`}>email me directly</a>.</div>}
        <button type="submit" className="action-button action-primary message-submit" disabled={isLoading}>{isLoading ? "Sending your message…" : "Send message"}<Icon name={isLoading ? "mail" : "arrow"} /></button>
        <span className="form-note">Your details stay private. Just a conversation, no mailing lists.</span>
      </form>
    </div>
  </div></section>;
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <button type="button" className={`back-to-top${visible ? " is-visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })} aria-label="Back to top" tabIndex={visible ? 0 : -1}><Icon name="up" /></button>;
}

export default function Home() {
  return <div className="portfolio-page">
    <ScrollEffects />
    <a href="#main" className="skip-link">Skip to content</a>
    <InnerHeader />
    <main id="main" tabIndex={-1}>
      <Hero />
      <div className="domain-strip"><div className="container"><span>MY EVERYDAY TOOLKIT</span><div>{["Java", "Spring Boot", "Laravel", "Python", "React", "Docker"].map(name => <Technology key={name} name={name} />)}</div></div></div>
      <Projects /><Skills /><Experience /><Credentials /><ContactSection />
    </main>
    <Footer /><ScrollToTop />
  </div>;
}
