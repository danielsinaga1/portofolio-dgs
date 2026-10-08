import { skillGroups } from "./Details";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import Technology from "./Technology";
const groupIcons = ["code", "server", "window", "database", "cpu", "cloud", "workflow"];

export default function Skills() {
  return <section id="skills" className="expertise-section"><div className="container">
    <SectionHeading number="02" eyebrow="SKILLS & TECHNOLOGY" title="The tools behind the work." description="A practical toolkit for backend services, web applications, and AI workflows, from architecture through deployment." />
    <div className="expertise-grid">{skillGroups.map((group, index) => <article className="expertise-card" key={group.title}>
      <div className="expertise-card-top"><span className="expertise-icon"><Icon name={groupIcons[index]} /></span><span className="expertise-number">0{index + 1}</span></div>
      <h3>{group.title}</h3><div className="expertise-tags">{group.skills.map(skill => <Technology key={skill} name={skill} />)}</div>
    </article>)}</div>
  </div></section>;
}
