import { useEffect, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projectDetails } from "./Details";
import Icon from "./Icon";
import Technology from "./Technology";
import ProjectGallery from "./ProjectGallery";

type Project = typeof projectDetails[0];
interface ProjectModalProps { project: Project | null; onClose: () => void; }

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const galleryTriggerRef = useRef<HTMLElement | null>(null);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const handleClose = useCallback(() => {
    if (galleryExpanded) setGalleryExpanded(false);
    else onClose();
  }, [galleryExpanded, onClose]);
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") { event.preventDefault(); handleClose(); return; }
    if (event.key !== "Tab" || !cardRef.current) return;
    const focusable = cardRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }, [handleClose]);

  useEffect(() => {
    if (!project) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, handleKeyDown]);

  useEffect(() => {
    if (galleryExpanded) {
      closeRef.current?.focus();
    } else if (galleryTriggerRef.current) {
      const target = galleryTriggerRef.current.isConnected ? galleryTriggerRef.current : cardRef.current?.querySelector<HTMLButtonElement>(".gallery-expand");
      target?.focus();
      galleryTriggerRef.current = null;
    }
  }, [galleryExpanded]);

  useEffect(() => {
    if (!project) { setGalleryExpanded(false); return; }
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.querySelector<HTMLElement>(".portfolio-page");
    const wasInert = main?.hasAttribute("inert");
    main?.setAttribute("inert", "");
    const frame = window.requestAnimationFrame(() => cardRef.current?.querySelector<HTMLButtonElement>("button")?.focus());
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      if (!wasInert) main?.removeAttribute("inert");
      previousFocus?.focus();
    };
  }, [project]);

  if (!project) return null;
  const hasPreview = project.previewLink && project.previewLink !== "https://google.com";
  const hasGithub = project.githubLink && project.githubLink !== "https://github.com";

  return createPortal(<div className={`case-overlay${galleryExpanded ? " is-gallery-expanded" : ""}`} onClick={handleClose}>
    <div className={`case-dialog${galleryExpanded ? " is-gallery-expanded" : ""}`} ref={cardRef} role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={event => event.stopPropagation()}>
      <div className="case-header"><div><span className="case-category">{galleryExpanded ? "Project gallery · Demo data" : project.category}</span><h2 id="case-title">{project.title}</h2></div><button ref={closeRef} type="button" className="case-close" onClick={handleClose} aria-label={galleryExpanded ? "Close enlarged gallery" : "Close project details"}><Icon name="close" /></button></div>
      <div className="case-body">{project.gallery?.length ? <ProjectGallery images={project.gallery} expanded={galleryExpanded} onExpand={() => { galleryTriggerRef.current = document.activeElement as HTMLElement | null; setGalleryExpanded(true); }} /> : <img src={project.image} alt={project.title} className="case-image" />}
        {!galleryExpanded && <><div className="case-meta"><span><Icon name="briefcase" />{project.role}</span><span>{project.year}</span></div>
        <div className="case-columns"><div><h3>About the project</h3><p>{project.fullDescription}</p><h3>The technology</h3><div className="work-technologies">{project.techstack.split(", ").map(tech => <Technology key={tech} name={tech} />)}</div></div><div><h3>Key capabilities</h3><ul className="case-features">{project.features.map(feature => <li key={feature}><Icon name="check" /><span>{feature}</span></li>)}</ul></div></div></>}
      </div>
      {!galleryExpanded && <div className="case-footer"><div>{hasPreview && <a href={project.previewLink} target="_blank" rel="noreferrer noopener" className="action-button action-primary">Visit website <Icon name="arrow" /></a>}{hasGithub && <a href={project.githubLink} target="_blank" rel="noreferrer noopener" className="action-button action-secondary">View code <Icon name="github" /></a>}{!hasPreview && !hasGithub && <span>Source code and live preview are not publicly available.</span>}</div><button type="button" onClick={onClose} className="action-button action-secondary">Close</button></div>}
    </div>
  </div>, document.body);
}
