import React from "react";

const paths: Record<string, React.ReactNode> = {
  arrow: <path d="M7 17 17 7M7 7h10v10" />,
  right: <path d="M4 12h16m-6-6 6 6-6 6" />,
  down: <path d="M12 4v16m-6-6 6 6 6-6" />,
  up: <path d="M12 20V4m-6 6 6-6 6 6" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />,
  server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01m4-11h6m-6 11h6" /></>,
  window: <><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M2 9h20M6 6h.01M10 6h.01m-2 7-3 3 3 3m8-6 3 3-3 3" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  cpu: <><rect x="5" y="5" width="14" height="14" rx="3" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 2v3m6-3v3m-6 14v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" /></>,
  cloud: <path d="M7 18a5 5 0 1 1 .5-10A7 7 0 0 1 21 11a3.5 3.5 0 0 1-1 7Z" />,
  workflow: <><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M5 16v-4h14v4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V3h8v4M3 12c5 4 13 4 18 0M10 13h4" /></>,
  education: <path d="m2 8 10-5 10 5-10 5-10-5Zm4 3v6c4 3 8 3 12 0v-6M22 8v8" />,
  award: <><circle cx="12" cy="8" r="6" /><path d="m8 13-2 9 6-3 6 3-2-9" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  phone: <path d="m4 3 4-1 3 5-3 3a15 15 0 0 0 6 6l3-3 5 3-1 4C12 24 0 12 4 3Z" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7m0-10h.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  github: <path d="M9 21v-4c-4 1-4-2-6-2m12 6v-4c0-1-.3-1.7-.8-2 3-.4 5.8-1.5 5.8-6a5 5 0 0 0-1.3-3.4c.3-1 .2-2.2-.2-3.1 0 0-1.2-.4-3.7 1.3a12 12 0 0 0-6.6 0C5.7 2.1 4.5 2.5 4.5 2.5c-.4.9-.5 2.1-.2 3.1A5 5 0 0 0 3 9c0 4.5 2.8 5.6 5.8 6-.5.3-.8 1-.8 2" />,
  layers: <path d="m12 3 10 6-10 6L2 9l10-6Zm-10 12 10 6 10-6M2 12l10 6 10-6" />,
};

export default function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <svg className={`ui-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.code}</svg>;
}
