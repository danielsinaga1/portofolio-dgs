import React, { useEffect, useCallback, useRef } from "react";

interface Project {
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink: string;
  githubLink: string;
  category: string;
  role: string;
  year: string;
  fullDescription: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  // Remember what was focused before the modal opened, to restore on close.
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    // Focus trap: keep Tab cycling inside the modal.
    if (e.key === "Tab" && cardRef.current) {
      const focusable = cardRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    // Move focus into the modal once it renders.
    const id = window.requestAnimationFrame(() => {
      cardRef.current
        ?.querySelector<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])')
        ?.focus();
    });
    return () => {
      window.cancelAnimationFrame(id);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      // Return focus to the element that opened the modal.
      previouslyFocused.current?.focus();
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const hasPreview = project.previewLink && project.previewLink !== "https://google.com";
  const hasGithub = project.githubLink && project.githubLink !== "https://github.com";

  return (
    <div className="pmodal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="pmodal-title">
      <div className="pmodal-card" ref={cardRef} onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="pmodal-header">
          <div className="pmodal-header-meta">
            <span className="pmodal-category">{project.category}</span>
            <h2 className="pmodal-title" id="pmodal-title">{project.title}</h2>
          </div>
          <button className="pmodal-close" onClick={onClose} aria-label="Close">
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="pmodal-body">
          {/* Image */}
          <div className="pmodal-image-wrap">
            <img src={project.image} alt={project.title} className="pmodal-image" />
            <div className="pmodal-image-overlay">
              <div className="pmodal-meta-pills">
                <span className="pmodal-pill">
                  <i className="bi bi-person me-1" />{project.role}
                </span>
                <span className="pmodal-pill">
                  <i className="bi bi-calendar3 me-1" />{project.year}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pmodal-content">
            <div className="pmodal-two-col">

              {/* Left column */}
              <div className="pmodal-left">
                <div className="pmodal-section">
                  <h4 className="pmodal-section-title">
                    <i className="bi bi-file-text me-2" />About This Project
                  </h4>
                  <p className="pmodal-description">{project.fullDescription}</p>
                </div>

                <div className="pmodal-section">
                  <h4 className="pmodal-section-title">
                    <i className="bi bi-stack me-2" />Tech Stack
                  </h4>
                  <div className="pmodal-tech">
                    {project.techstack.split(", ").map((tech, i) => (
                      <span key={i} className="pmodal-tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="pmodal-right">
                <div className="pmodal-section">
                  <h4 className="pmodal-section-title">
                    <i className="bi bi-check2-square me-2" />Key Features
                  </h4>
                  <ul className="pmodal-features">
                    {project.features.map((feature, i) => (
                      <li key={i}>
                        <i className="bi bi-check-circle-fill pmodal-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pmodal-footer">
          <div className="pmodal-footer-links">
            {hasPreview && (
              <a href={project.previewLink} target="_blank" rel="noreferrer noopener" className="pmodal-btn pmodal-btn-primary">
                <i className="bi bi-box-arrow-up-right me-2" />Live Preview
              </a>
            )}
            {hasGithub && (
              <a href={project.githubLink} target="_blank" rel="noreferrer noopener" className="pmodal-btn pmodal-btn-outline">
                <i className="bi bi-github me-2" />View Code
              </a>
            )}
            {!hasPreview && !hasGithub && (
              <span className="pmodal-private-note">
                <i className="bi bi-lock me-2" />This project is under NDA / private repository
              </span>
            )}
          </div>
          <button className="pmodal-btn pmodal-btn-close" onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
