import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { personalDetails } from "./Details";
import Icon from "./Icon";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Expertise" },
  { id: "experience", label: "Experience" },
];

export default function InnerHeader() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "hero";
      document.querySelectorAll<HTMLElement>("section[id]").forEach(section => {
        if (section.getBoundingClientRect().top <= 160) current = section.id;
      });
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    const onResize = () => { if (window.innerWidth >= 900) setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const sectionUrl = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;
  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <div className="container site-header-inner">
      <a href={sectionUrl("hero")} className="site-brand" onClick={() => setMenuOpen(false)} aria-label={`${personalDetails.name} — Home`}>
        <span className="brand-mark">dg<span>.</span></span>
        <span className="brand-caption">Daniel Giovanni<span>Software Engineer</span></span>
      </a>
      <button id="menu-toggle" type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button>
      <nav id="site-navigation" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {navItems.map(item => <a key={item.id} href={sectionUrl(item.id)} className={activeSection === item.id ? "is-active" : ""} aria-current={activeSection === item.id ? "location" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        <a href={sectionUrl("contact")} className="nav-contact" onClick={() => setMenuOpen(false)}>Let's talk <Icon name="arrow" /></a>
      </nav>
    </div>
    {menuOpen && <button type="button" className="nav-backdrop" aria-label="Dismiss navigation" onClick={() => setMenuOpen(false)} />}
  </header>;
}
