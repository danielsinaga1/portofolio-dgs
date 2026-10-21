import { useMemo, useState, useCallback } from "react";
import { projectDetails } from "./Details";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import Technology from "./Technology";

type Project = typeof projectDetails[0];
const filters = ["All work", "Enterprise", "FinTech", "Web & Mobile"];
const categoryGroup = (project: Project) => {
  if (project.category.includes("FinTech")) return "FinTech";
  if (["Corporate Website", "Mobile"].includes(project.category)) return "Web & Mobile";
  return "Enterprise";
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All work");
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(() => projectDetails.filter(project => filter === "All work" || categoryGroup(project) === filter), [filter]);
  const visible = showAll ? filtered : filtered.slice(0, 4);
  const closeProject = useCallback(() => setSelected(null), []);

  return <section id="projects" className="work-section"><div className="container">
    <SectionHeading number="01" eyebrow="PORTFOLIO" title="Selected projects." description="Enterprise platforms, banking integrations, and public-sector applications. Explore the work, the role, and the technology behind each project." />
    <div className="work-toolbar"><div className="work-filters" role="group" aria-label="Filter projects">{filters.map(item => <button type="button" key={item} className={filter === item ? "is-active" : ""} aria-pressed={filter === item} onClick={() => { setFilter(item); setShowAll(false); }}>{item}</button>)}</div><span className="work-count" aria-live="polite">{String(filtered.length).padStart(2, "0")} projects</span></div>
    <div className="work-grid">{visible.map(project => <article className="work-card" key={project.title}>
      <button type="button" className={`work-preview${project.gallery?.length ? " has-gallery" : ""}`} onClick={() => setSelected(project)} aria-label={`View ${project.title}`}>
        <span className="project-window">
          <span className="project-window-toolbar"><span className="project-window-dots" aria-hidden="true"><span /><span /><span /></span><span className="work-category">{project.category}</span></span>
          <span className="project-window-screen"><img src={project.image} alt={project.title} width="2730" height="1536" loading="lazy" /></span>
        </span>
        <span className="work-preview-arrow" aria-hidden="true"><Icon name="arrow" /></span>
      </button>
      <div className="work-card-body"><div className="work-meta"><span>{project.role}</span><span>{project.year}</span></div>
        <h3><button type="button" onClick={() => setSelected(project)}>{project.title}</button></h3><p>{project.description}</p>
        <div className="work-card-bottom"><div className="work-technologies">{project.techstack.split(", ").map(tech => <Technology key={tech} name={tech} />)}</div><button className="work-detail-link" type="button" onClick={() => setSelected(project)} aria-label={project.gallery?.length ? `View gallery for ${project.title}` : `Read case study for ${project.title}`}><span>{project.gallery?.length ? `View gallery · ${project.gallery.length} images` : "View project"}</span><Icon name="arrow" /></button></div>
      </div>
    </article>)}</div>
    {filtered.length > 4 && <div className="work-more"><button type="button" className="action-button action-secondary" onClick={() => setShowAll(!showAll)}>{showAll ? "Show selected work" : `View all ${filtered.length} projects`}<Icon name={showAll ? "up" : "down"} /></button></div>}
    <p className="work-footnote"><Icon name="layers" />Select a project to explore its features and implementation.</p>
  </div><ProjectModal project={selected} onClose={closeProject} /></section>;
}
