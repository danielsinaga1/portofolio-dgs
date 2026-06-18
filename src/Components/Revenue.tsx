import React, { useState } from "react";
import { projectDetails } from "./Details";
import ProjectModal from "./ProjectModal";

type Project = typeof projectDetails[0];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span className="section-subtitle">What I've Built</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="row g-4">
          {projectDetails.map((project, idx) => (
            <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 80}>
              <div className="project-card" onClick={() => setSelected(project)} style={{ cursor: "pointer" }}>
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <span className="project-overlay-label">
                        <i className="bi bi-eye me-2" />View Details
                      </span>
                    </div>
                  </div>
                  <span className="project-category-badge">{project.category}</span>
                </div>
                <div className="project-info">
                  <div className="project-meta-row">
                    <span className="project-year"><i className="bi bi-calendar3 me-1" />{project.year}</span>
                    <span className="project-role">{project.role}</span>
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.techstack.split(", ").map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <button className="project-details-btn" onClick={() => setSelected(project)}>
                    <i className="bi bi-arrow-right-circle me-2" />View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
