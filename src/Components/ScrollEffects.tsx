import { useEffect, useRef } from "react";

type RevealEffect = "rise" | "left" | "right" | "zoom";

const revealGroups: { selector: string; effects: RevealEffect[]; stagger: number }[] = [
  { selector: ".intro-copy", effects: ["left"], stagger: 0 },
  { selector: ".intro-visual", effects: ["zoom"], stagger: 100 },
  { selector: ".intro-metric", effects: ["rise"], stagger: 65 },
  { selector: ".domain-strip", effects: ["rise"], stagger: 0 },
  { selector: ".section-heading", effects: ["rise"], stagger: 0 },
  { selector: ".work-toolbar, .work-more, .work-footnote", effects: ["rise"], stagger: 0 },
  { selector: ".work-card", effects: ["rise", "zoom"], stagger: 70 },
  { selector: ".expertise-card", effects: ["rise", "zoom", "rise"], stagger: 60 },
  { selector: ".career-item", effects: ["left"], stagger: 55 },
  { selector: ".journey-aside", effects: ["right"], stagger: 0 },
  { selector: ".qualification", effects: ["left"], stagger: 50 },
  { selector: ".recognition-award", effects: ["zoom"], stagger: 0 },
  { selector: ".connect-copy", effects: ["left"], stagger: 0 },
  { selector: ".message-form", effects: ["right"], stagger: 0 },
  { selector: ".footer-main, .footer-bottom", effects: ["rise"], stagger: 0 },
];

/** Enhances the existing page; content stays visible if motion is unavailable. */
export default function ScrollEffects() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    const page = progress?.closest<HTMLElement>(".portfolio-page");
    if (!progress || !page || typeof window.matchMedia !== "function" || typeof IntersectionObserver !== "function") return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposeMotion: (() => void) | undefined;

    const startMotion = () => {
      if (preference.matches || disposeMotion) return;

      const targets = new Map<HTMLElement, { effect: RevealEffect; previousDelay: string }>();
      const previousDirection = page.getAttribute("data-scroll-direction");
      let scrollFrame = 0;
      let focusFrame = 0;
      let previousScroll = window.scrollY;
      let active = true;

      page.classList.add("scroll-motion-ready");
      page.setAttribute("data-scroll-direction", "down");

      const reveal = (target: HTMLElement, instant = false) => {
        if (instant) target.classList.add("scroll-reveal--instant");
        target.classList.add("scroll-reveal--visible");
      };

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) reveal(target);
          // Reset only after the stable container has left the viewport entirely.
          // Motion runs on its children so transforms cannot trigger observer loops.
          else if (!target.contains(document.activeElement)) {
            target.classList.remove("scroll-reveal--visible", "scroll-reveal--instant");
          }
        });
      }, { threshold: 0 });

      const restoreTarget = (target: HTMLElement, settings: { effect: RevealEffect; previousDelay: string }) => {
        target.classList.remove("scroll-reveal", `scroll-reveal--${settings.effect}`, "scroll-reveal--visible", "scroll-reveal--instant");
        if (settings.previousDelay) target.style.setProperty("--scroll-stagger", settings.previousDelay);
        else target.style.removeProperty("--scroll-stagger");
      };

      const registerTargets = () => {
        targets.forEach((settings, target) => {
          if (!page.contains(target)) {
            observer.unobserve(target);
            restoreTarget(target, settings);
            targets.delete(target);
          }
        });

        revealGroups.forEach(group => {
          page.querySelectorAll<HTMLElement>(group.selector).forEach((target, index) => {
            if (targets.has(target)) return;
            const effect = group.effects[index % group.effects.length];
            targets.set(target, { effect, previousDelay: target.style.getPropertyValue("--scroll-stagger") });
            target.style.setProperty("--scroll-stagger", `${Math.min(index % 4 * group.stagger, 210)}ms`);
            target.classList.add("scroll-reveal", `scroll-reveal--${effect}`);
            if (target.contains(document.activeElement)) reveal(target, true);
            observer.observe(target);
          });
        });
      };

      const updateProgress = () => {
        scrollFrame = 0;
        if (!active) return;
        const scrollY = window.scrollY;
        if (Math.abs(scrollY - previousScroll) > 2) {
          page.setAttribute("data-scroll-direction", scrollY < previousScroll ? "up" : "down");
          previousScroll = scrollY;
        }
        const distance = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
        const fraction = distance > 0 ? Math.max(0, Math.min(scrollY / distance, 1)) : 0;
        progress.style.transform = `scaleX(${fraction})`;
      };

      const scheduleProgress = () => {
        if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateProgress);
      };

      const onFocusIn = (event: FocusEvent) => {
        if (!(event.target instanceof Node)) return;
        const focused = event.target;
        targets.forEach((_settings, target) => {
          if (target.contains(focused)) reveal(target, true);
        });
      };

      const onFocusOut = () => {
        if (focusFrame) window.cancelAnimationFrame(focusFrame);
        focusFrame = window.requestAnimationFrame(() => {
          focusFrame = 0;
          if (!active) return;
          targets.forEach((_settings, target) => {
            if (target.contains(document.activeElement)) return;
            target.classList.remove("scroll-reveal--instant");
            const bounds = target.getBoundingClientRect();
            if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) target.classList.remove("scroll-reveal--visible");
          });
        });
      };

      // React can add cards after filtering or expanding the project grid.
      // Observe child changes only; animation class updates do not retrigger this.
      const mutations = typeof MutationObserver === "function" ? new MutationObserver(() => {
        registerTargets();
        scheduleProgress();
      }) : undefined;
      const resize = typeof ResizeObserver === "function" ? new ResizeObserver(scheduleProgress) : undefined;

      registerTargets();
      updateProgress();
      mutations?.observe(page, { childList: true, subtree: true });
      resize?.observe(page);
      window.addEventListener("scroll", scheduleProgress, { passive: true });
      window.addEventListener("resize", scheduleProgress, { passive: true });
      page.addEventListener("focusin", onFocusIn);
      page.addEventListener("focusout", onFocusOut);

      disposeMotion = () => {
        active = false;
        observer.disconnect();
        mutations?.disconnect();
        resize?.disconnect();
        window.cancelAnimationFrame(scrollFrame);
        window.cancelAnimationFrame(focusFrame);
        window.removeEventListener("scroll", scheduleProgress);
        window.removeEventListener("resize", scheduleProgress);
        page.removeEventListener("focusin", onFocusIn);
        page.removeEventListener("focusout", onFocusOut);
        targets.forEach((settings, target) => restoreTarget(target, settings));
        targets.clear();
        page.classList.remove("scroll-motion-ready");
        if (previousDirection === null) page.removeAttribute("data-scroll-direction");
        else page.setAttribute("data-scroll-direction", previousDirection);
        progress.style.removeProperty("transform");
        disposeMotion = undefined;
      };
    };

    const onPreferenceChange = () => {
      if (preference.matches) disposeMotion?.();
      else startMotion();
    };

    startMotion();
    if (typeof preference.addEventListener === "function") preference.addEventListener("change", onPreferenceChange);
    else if (typeof preference.addListener === "function") preference.addListener(onPreferenceChange);

    return () => {
      if (typeof preference.removeEventListener === "function") preference.removeEventListener("change", onPreferenceChange);
      else if (typeof preference.removeListener === "function") preference.removeListener(onPreferenceChange);
      disposeMotion?.();
    };
  }, []);

  return <div className="scroll-motion-progress" aria-hidden="true"><span ref={progressRef} /></div>;
}
