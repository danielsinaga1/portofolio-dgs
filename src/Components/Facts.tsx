import { workDetails, eduDetails, personalDetails } from "./Details";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function Experience() {
  return <section id="experience" className="journey-section"><div className="container">
    <SectionHeading number="03" eyebrow="BACKGROUND" title="Experience & education." description="Eight years of building software across enterprise, banking, and public-sector teams." />
    <div className="journey-grid">
      <div className="career-list">{workDetails.map((work, index) => <article className="career-item" key={work.Company}>
        <span className={`career-dot${index === 0 ? " is-current" : ""}`} aria-hidden="true" />
        <div className="career-item-top"><span className="career-date">{work.Duration}</span><span className={`employment-tag ${work.Type === "Full Time" ? "is-current" : ""}`}>{work.Type}</span></div>
        <h3>{work.Position}</h3><p className="career-company">{work.Company}<span> / {work.Location}</span></p>
        <p className="career-highlight">{work.Highlights[0]}</p>
        {work.Highlights.length > 1 && <details className="career-details"><summary>More about this role <Icon name="plus" /></summary><ul>{work.Highlights.slice(1).map(point => <li key={point}>{point}</li>)}</ul></details>}
      </article>)}</div>
      <aside className="journey-aside">
        <div className="about-panel"><span className="section-eyebrow">ABOUT DANIEL</span><h3>From requirements<br />to reliable systems.</h3><p>{personalDetails.about}</p><div className="about-location"><Icon name="pin" /><span>{personalDetails.location}</span></div></div>
        <div className="education-panel"><span className="panel-label"><Icon name="education" />EDUCATION</span>{eduDetails.map(education => <div key={education.Company}><h3>{education.Position}</h3><p>{education.Company}</p><span>{education.Duration}</span></div>)}</div>
        <a className="resume-link" href={`${process.env.PUBLIC_URL || ""}/cv-daniel.pdf`} download="CV-Daniel-Giovanni-Sinaga.pdf"><span><Icon name="download" />Download my CV</span><Icon name="arrow" /></a>
      </aside>
    </div>
  </div></section>;
}
