import { useState } from "react";
import Icon from "./Icon";
import Technology from "./Technology";

const toolkit = ["Java", "Spring Boot", "Laravel", "Python", "React", "TypeScript", "PHP", "Go", "Flutter", "PostgreSQL", "Docker", "FastAPI"];

export default function ToolkitMarquee() {
  const [paused, setPaused] = useState(false);

  return <div className="domain-strip" role="group" aria-label="Technology toolkit">
    <div className="container">
      <span>MY EVERYDAY TOOLKIT</span>
      <div className="toolkit-viewport">
        <div className={`toolkit-track${paused ? " is-paused" : ""}`}>
          {[0, 1].map(copy => <div className="toolkit-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {toolkit.map(name => <Technology key={name} name={name} />)}
          </div>)}
        </div>
      </div>
      <button type="button" className="toolkit-toggle" onClick={() => setPaused(value => !value)} aria-label={paused ? "Resume technology animation" : "Pause technology animation"} title={paused ? "Resume animation" : "Pause animation"}>
        <Icon name={paused ? "play" : "pause"} />
      </button>
    </div>
  </div>;
}
