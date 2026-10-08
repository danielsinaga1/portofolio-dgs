import { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { projectDetails } from "./Details";
import Icon from "./Icon";
import Technology from "./Technology";

type Project = typeof projectDetails[0];
interface ProjectModalProps { project: Project | null; onClose: () => void; }

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") { onClose(); return; }
    if (event.key !== "Tab" || !cardRef.current) return;
    const focusable = cardRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.querySelector<HTMLElement>(".portfolio-page");
    const wasInert = main?.hasAttribute("inert");
    main?.setAttribute("inert", "");
    document.addEventListener("keydown", handleKeyDown);
    const frame = window.requestAnimationFrame(() => cardRef.current?.querySelector<HTMLButtonElement>("button")?.focus());
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      if (!wasInert) main?.removeAttribute("inert");
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [project, handleKeyDown]);

  if (!project) return null;
  const hasPreview = project.previewLink && project.previewLink !== "https://google.com";
  const hasGithub = project.githubLink && project.githubLink !== "https://github.com";

  return createPortal(<div className="case-overlay" onClick={onClose}>
    <div className="case-dialog" ref={cardRef} role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={event => event.stopPropagation()}>
      <div className="case-header"><div><span className="case-category">{project.category}</span><h2 id="case-title">{project.title}</h2></div><button type="button" className="case-close" onClick={onClose} aria-label="Close project details"><Icon name="close" /></button></div>
      <div className="case-body"><img src={project.image} alt={project.title} className="case-image" /><div className="case-meta"><span><Icon name="briefcase" />{project.role}</span><span>{project.year}</span></div>
        <div className="case-columns"><div><h3>About the project</h3><p>{project.fullDescription}</p><h3>The technology</h3><div className="work-technologies">{project.techstack.split(", ").map(tech => <Technology key={tech} name={tech} />)}</div></div><div><h3>Key capabilities</h3><ul className="case-features">{project.features.map(feature => <li key={feature}><Icon name="check" /><span>{feature}</span></li>)}</ul></div></div>
      </div>
      <div className="case-footer"><div>{hasPreview && <a href={project.previewLink} target="_blank" rel="noreferrer noopener" className="action-button action-primary">Visit website <Icon name="arrow" /></a>}{hasGithub && <a href={project.githubLink} target="_blank" rel="noreferrer noopener" className="action-button action-secondary">View code <Icon name="github" /></a>}{!hasPreview && !hasGithub && <span>Source code and live preview are not publicly available.</span>}</div><button type="button" onClick={onClose} className="action-button action-secondary">Close</button></div>
    </div>
  </div>, document.body);
}
