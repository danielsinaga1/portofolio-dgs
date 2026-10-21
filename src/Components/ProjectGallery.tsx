import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { ProjectGalleryImage } from "./Details";
import Icon from "./Icon";
import "./ProjectGallery.css";

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
  expanded: boolean;
  onExpand: () => void;
}

export default function ProjectGallery({ images, expanded, onExpand }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = images[activeIndex];
  const move = (direction: number) => setActiveIndex(index => (index + direction + images.length) % images.length);

  useEffect(() => {
    const thumbnail = thumbnailRefs.current[activeIndex];
    const strip = thumbnail?.parentElement;
    if (!thumbnail || !strip) return;
    if (thumbnail.offsetLeft < strip.scrollLeft) strip.scrollLeft = thumbnail.offsetLeft;
    else if (thumbnail.offsetLeft + thumbnail.offsetWidth > strip.scrollLeft + strip.clientWidth) {
      strip.scrollLeft = thumbnail.offsetLeft + thumbnail.offsetWidth - strip.clientWidth;
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      setActiveIndex(index => (index + direction + images.length) % images.length);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [expanded, images.length]);

  const handleKeys = (event: KeyboardEvent<HTMLElement>) => {
    if (expanded || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
    event.preventDefault();
    move(event.key === "ArrowRight" ? 1 : -1);
  };

  return <section className={`project-gallery${expanded ? " is-expanded" : ""}`} aria-label="Project gallery" onKeyDown={handleKeys}>
    <div className="gallery-heading"><div><span className="gallery-eyebrow">A CLOSER LOOK</span><h3>Project gallery</h3></div><span className="gallery-total">{images.length} selected images <span>· Demo data</span></span></div>
    <figure className="gallery-figure">
      <div className="gallery-stage">
        {expanded ? <img key={active.src} src={active.src} alt={active.alt} className="gallery-image" /> : <button type="button" className="gallery-expand" onClick={onExpand} aria-label={`Enlarge ${active.title}`} aria-haspopup="dialog"><img key={active.src} src={active.src} alt={active.alt} className="gallery-image" /><span className="gallery-expand-label"><Icon name="expand" />Enlarge image</span></button>}
      </div>
      <figcaption className="gallery-caption" aria-live="polite" aria-atomic="true"><div><span className="gallery-index">{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span><h4>{active.title}</h4><p>{active.description}</p></div><div className="gallery-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous image"><Icon name="left" /></button><button type="button" onClick={() => move(1)} aria-label="Next image"><Icon name="right" /></button></div></figcaption>
    </figure>
    <div className="gallery-thumbnails" role="group" aria-label="Choose a project image">{images.map((item, index) => <button type="button" key={item.src} ref={element => { thumbnailRefs.current[index] = element; }} onClick={() => setActiveIndex(index)} className={`gallery-thumbnail${index === activeIndex ? " is-active" : ""}`} aria-pressed={index === activeIndex} aria-label={`Show ${item.title}`}><span className="gallery-thumbnail-image"><img src={item.src} alt="" loading="lazy" /></span><span>{item.title}</span></button>)}</div>
    <p className="gallery-hint">{expanded ? "Use ← → to explore · Esc to return to the project" : "Select a thumbnail to explore. Click the main image for a larger view."}</p>
  </section>;
}
