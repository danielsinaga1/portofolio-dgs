// Enter all your detials in this file
// Logo images
import logogradient from "../assets/logo_dgs.png";
import logo from "../assets/logo2.svg";
// Profile Image
import profile from "../assets/profile-photos.png"
// Project Images
import projectImage1 from "../assets/projects/project1.png";
import projectImage3 from "../img/IRMS.png";
import projectImage4 from "../assets/projects/project4.png";
import projectSanitationImage from "../assets/projects/sanitation-cover.svg";
import projectImage5 from "../assets/projects/project5.png";
import projectImage7 from "../assets/projects/project7.png";
import projectImage8 from "../assets/projects/project8.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Daniel Giovanni Sinaga",
  // Primary headline — mirrors CV positioning
  tagline: "Backend-focused Software Engineer",
  // More specific positioning shown under the headline (keyword-rich for recruiters)
  specialty: "Java/Spring Boot, PHP/Laravel & Python/FastAPI — RAG & agentic LLM systems",
  img: profile,
  location: "Bontang, East Kalimantan (UTC+8)",
  // Full professional summary (used in About / longer contexts) — matches CV's Professional Summary verbatim
  about: `Backend-focused Software Engineer with 8 years building enterprise, fintech, and public-sector systems in Java/Spring Boot, PHP/Laravel, and Python/FastAPI. Experience spans payment-gateway integration and automated settlement, decomposing monolithic SaaS platforms into independently deployable services, and shipping production LLM systems (RAG and agentic workflows with LangChain/LangGraph). Comfortable owning a system end to end — requirements, architecture, delivery, and post-release operation. Open to fully remote roles.`,
  // One-line value proposition for the Hero (scannable in <5s)
  pitch: `Backend-focused engineer building enterprise, fintech, and public-sector systems — from payment-gateway integration to production LLM systems (RAG and agentic workflows). Comfortable owning a system end to end, from requirements through post-release operation.`,
};

// Hero proof points — quantitative signals recruiters scan first
export const heroStats = [
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Maintained" },
  { value: "3", label: "Industry Sectors" },
];

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/danielgiovannisinaga/",
  github: "https://github.com/danielsinaga1",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software & Development Officer",
    Company: `PT Kaltim Parna Industri`,
    Location: "Bontang, East Kalimantan",
    Type: "Full Time",
    Duration: "May 2019 - Present",
    Highlights: [
      "Platform re-architecture: Decomposed two in-house SaaS platforms (IRMS and LIMS) from a shared monolith into independently deployable services split along reporting, sample workflow, notification, and auth — containing failures to a single service instead of a full-platform outage.",
      "Agentic AI assistant: Designed and shipped a Retrieval-Augmented Generation pipeline over 10 company SOP documents, powering a LangChain/LangGraph agent that answers procedural questions and orchestrates multi-step workflows so staff resolve blockers without escalating.",
      "Laboratory Information Management System: Owned the full lifecycle — digitised chemical sample analysis workflows and reagent inventory for the Laboratory Department, replacing spreadsheet tracking for 50–80 samples/month and reducing the manual step to application.",
      "Incident reporting & ISO compliance: Built the Incident Report Monitoring System and an Integrated Management System covering ISO 9001, 14001, and 45001 audit reporting. Digitised hazard identification and risk assessment records, eliminating a manual paper trail across 8 departments and shortening audit preparation.",
      "Corporate Web Operations: Built the corporate landing page from the ground up, owning the full lifecycle including SEO optimization, performance tuning, and ongoing security patching to ensure a fast, secure, and discoverable web presence.",
    ],
  },
  {
    Position: "Independent Software Consultant",
    Company: `Remote / Freelance`,
    Location: "Remote",
    Type: "Freelance",
    Duration: "Aug 2025 - Present",
    Highlights: [
      "Digital payments & PPOB platform: Built a top-up marketplace covering game vouchers, mobile credit, data packages, and ISP bill payments. Integrated Midtrans and Xendit with signature-verified webhook callbacks so transactions settle and products are delivered automatically, removing manual confirmation and reconciliation from the fulfilment flow.",
      "City Sanitation Management System — 2nd Place, Bontang Innovation Award: Designed and delivered a data-driven sanitation platform for the Bontang City Government, tracking 5 collection points and 3–5 field officers to support public health monitoring. Selected 2nd out of 30 entries in the city innovation programme.",
      "Retail POS & QR loyalty platform (PT Threebond): Built a Point of Sale system with a per-item QR loyalty engine: a unique code is generated and affixed per unit before shipment, scanned by the customer on delivery, and redeemed through an authenticated portal that converts accrued points into product discounts — closing the loop between distribution, customer verification, and retention.",
      "E-Procurement for a hospital: Delivered vendor management, purchase requisitions, quotation comparison, and configurable multi-level approval workflows with a complete audit trail, cutting procurement cycle time from 5–6 months to 2 months for 50 users.",
      "Document & archive management: Engineered a file-manager style archival system with centralised search plus automated generation and numbering of incoming and outgoing correspondence, replacing manual letter logging for 200s documents. Also delivered conversion-focused corporate sites for clients including PT PTGS (Pratama Teknik Global Sentosa).",
      "Tuition fee management platform: Built a student billing system covering per-term invoice generation, instalment and payment-plan handling, and online settlement through payment gateway. Automated reconciliation between incoming payments and student ledgers with arrears tracking and payment reminders, replacing manual receipt matching for 500 students across programmes and reducing the monthly reconciliation step.",
    ],
  },
  {
    Position: "Java Developer",
    Company: `PT Emerio Indonesia`,
    Location: "Jakarta (Client: PT Bank Danamon)",
    Type: "Contract",
    Duration: "Nov 2018 - May 2019",
    Highlights: [
      "Fee configuration module: Built a Spring Boot admin module managing per-customer minimum balance thresholds and penalty fees, resolving customer records via CIF and enforcing fees across bulk payroll, mass transfer, and virtual account collection.",
      "Transaction management APIs: Delivered CRUD REST APIs and an Angular admin dashboard enabling CIF-based transaction queries for the middleware team, enriched with data from internal service APIs.",
      "Database layer: Collaborated on versioned schema management for the platform database supporting treasury operations — bulk payroll, mass fund transfer, and balance/statement inquiry.",
    ],
  },
  {
    Position: "Backend Developer Intern",
    Company: `PT Global Visi Media`,
    Location: "Jakarta, Indonesia",
    Type: "Internship",
    Duration: "Jun 2017 - Aug 2017",
    Highlights: [
      "Real-time notification: Integrated Firebase Cloud Messaging (FCM) into the Womantalk platform, implementing real-time push notification services to support user engagement features.",
    ],
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Informatics Engineering",
    Company: `Del Institute of Technology`,
    Location: "Sitoluama, North Sumatera",
    Type: "Graduated",
    Duration: "Aug 2014 - Jul 2018",
  },
];

// Awards & recognitions
export const awardDetails = [
  {
    title: "Regional Finalist — Bukalapak Programming Contest",
    issuer: "Bukalapak",
    year: "2016",
  },
];

// Certifications
export const certificationDetails = [
  {
    title: "Microsoft SharePoint Administration and Power Platform (PL-100)",
    issuer: "Mitra Integrasi Informatika",
    category: "Enterprise & Cloud",
  },
  {
    title: "PHP Laravel Framework Fundamentals",
    issuer: "Brainmatics",
    category: "Web Frameworks",
  },
  {
    title: "Data Visualisation with Python",
    issuer: "Trainocate",
    category: "Data Science",
  },
];

// Skills grouped by domain (mirrors CV's Technical Skills structure — scannable)
export const skillGroups = [
  {
    title: "Languages",
    icon: "bi-code-slash",
    skills: ["Java", "PHP", "Python", "TypeScript", "SQL", "Dart", "Go"],
  },
  {
    title: "Backend",
    icon: "bi-server",
    skills: ["Spring Boot", "Go Fiber", "Laravel", "FastAPI", "REST API Design", "Service Decomposition", "Webhook / Event-Driven Integration"],
  },
  {
    title: "Frontend",
    icon: "bi-window",
    skills: ["React", "Angular", "TypeScript", "Flutter", "HTML5/CSS3"],
  },
  {
    title: "Data",
    icon: "bi-database",
    skills: ["MySQL", "PostgreSQL", "Firebase", "Schema Design", "Versioned Migrations", "Query Optimisation"],
  },
  {
    title: "AI / LLM",
    icon: "bi-cpu",
    skills: ["LangChain", "LangGraph", "RAG Pipelines", "Vector Retrieval", "Agent & Prompt Design", "Pinecone"],
  },
  {
    title: "Infrastructure",
    icon: "bi-cloud",
    skills: ["Docker", "GitHub Actions (CI/CD)", "Linux", "Nginx"],
  },
  {
    title: "Practice",
    icon: "bi-diagram-3",
    skills: ["Agile / Scrum", "Code Review", "Technical Documentation", "Business Process Analysis", "Stakeholder Requirements Gathering"],
  },
];

// Tech Stack and Tools (icon marquee)
export const techStackDetails = [
  { name: "Java", iconClass: "devicon-java-plain colored" },
  { name: "Spring", iconClass: "devicon-spring-plain colored" },
  { name: "PHP", iconClass: "devicon-php-plain colored" },
  { name: "Laravel", iconClass: "devicon-laravel-plain colored" },
  { name: "Python", iconClass: "devicon-python-plain colored" },
  { name: "React", iconClass: "devicon-react-original colored" },
  { name: "Angular", iconClass: "devicon-angular-plain colored" },
  { name: "Flutter", iconClass: "devicon-flutter-plain colored" },
  { name: "TypeScript", iconClass: "devicon-typescript-original colored" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
  { name: "HTML5", iconClass: "devicon-html5-original colored" },
  { name: "CSS3", iconClass: "devicon-css3- colored" },
  { name: "Tailwind", iconClass: "devicon-tailwindcss-original colored" },
  { name: "Bootstrap", iconClass: "devicon-bootstrap-original colored" },
  { name: "Redux", iconClass: "devicon-redux-original colored" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { name: "MySQL", iconClass: "devicon-mysql-original colored" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-original colored" },
  { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
  { name: "Docker", iconClass: "devicon-docker-plain colored" },
  { name: "Git", iconClass: "devicon-git-plain colored" },
  { name: "GitHub", iconClass: "devicon-github-original" },
  { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
  { name: "Figma", iconClass: "devicon-figma-plain colored" },
];

// CV variants — multiple tailored resumes (place files in /public/cv/)
export interface CvVariant {
  id: string;
  label: string;
  description: string;
  file: string;
  updatedAt: string;
  icon: string;
}

export const cvVariants: CvVariant[] = [
  {
    id: "general",
    label: "Backend-focused Software Engineer",
    description: "Full profile — enterprise, fintech & public-sector experience",
    file: "/cv-daniel.pdf",
    updatedAt: "Jun 2026",
    icon: "bi-file-earmark-person",
  },
  // To add tailored variants later, drop PDFs into /public/cv/ and add entries here:
  // { id: "backend", label: "Backend Engineer", description: "Java · Spring Boot · payment & integration",
  //   file: "/cv/daniel-backend.pdf", updatedAt: "Jun 2026", icon: "bi-server" },
  // { id: "frontend", label: "Frontend Engineer", description: "React · TypeScript · UI engineering",
  //   file: "/cv/daniel-frontend.pdf", updatedAt: "Jun 2026", icon: "bi-window" },
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Incident Report Monitoring System (IRMS)",
    image: projectImage3,
    description: `Centralized Incident Report Monitoring System streamlining tracking, escalation, and resolution of incidents across the organization — 100% improvement in tracking efficiency.`,
    techstack: "React, Java Spring Boot, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Enterprise",
    role: "Full Stack Developer (Lead)",
    year: "2020 – Present",
    fullDescription: `Built and maintained a centralized Incident Report Monitoring System (IRMS) for PT Kaltim Parna Industri to streamline incident tracking, escalation workflows, and resolution across all departments. The system features a real-time dashboard with KPIs, automated escalation notifications, SLA monitoring, and audit logging to ensure operational accountability and compliance with corporate governance.`,
    features: [
      "Full incident lifecycle management (open → in-progress → resolved)",
      "Role-based access control (Admin, Manager, Initiator, Approval 1, Approval 2)",
      "Real-time dashboard with KPIs and incident statistics",
      "Automated escalation workflows & email notifications",
      "SLA monitoring with overdue breach alerts",
      "Report export to PDF & Excel",
      "Audit trail & complete activity history logging",
    ],
  },
  {
    title: "Laboratory Information Management System (LIMS)",
    image: projectImage4,
    description: `End-to-end LIMS supporting chemical sample analysis, laboratory data reporting, and inventory tracking — reducing manual errors and turnaround time.`,
    techstack: "HTML/CSS, JavaScript, PHP",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Laboratory",
    role: "Full Stack Developer",
    year: "2021 – 2022",
    fullDescription: `Designed and implemented a Laboratory Information Management System (LIMS) for PT Kaltim Parna Industri’s chemical laboratory. The system supports end-to-end workflows including sample registration, analytical test requests, result recording, quality validation, and automated report generation. It significantly reduced manual data entry errors and improved turnaround time for laboratory analysis.`,
    features: [
      "Sample registration with barcode/QR tracking",
      "Analytical test request & workflow assignment",
      "Test result recording with validation rules",
      "Quality control approval & rejection workflow",
      "Chemical reagent & inventory management",
      "Automated PDF analysis report generation",
      "Historical data search & audit trail logging",
    ],
  },
  {
    title: "City Sanitation Management Application",
    image: projectSanitationImage,
    description: `Scalable sanitation management application for the Bontang City Government, enabling data-driven decision-making for public health monitoring.`,
    techstack: "Laravel, React, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Government / Public Sector",
    role: "Independent Consultant",
    year: "2025",
    fullDescription: `Developed a scalable City Sanitation Management Application for the Bontang City Government to support data-driven decision-making in public health monitoring. The platform centralizes sanitation field data, tracks service coverage across districts, and surfaces analytics that help officials prioritize interventions and allocate resources efficiently.`,
    features: [
      "Centralized sanitation & public health data collection",
      "District-level service coverage tracking",
      "Analytics dashboard for data-driven decisions",
      "Role-based access for government officers",
      "Geospatial visualization of field data",
      "Exportable reports for stakeholder review",
    ],
  },
 
  {
    title: "PT KPI Main Corporate Website",
    image: projectImage5,
    description: `Responsive, secure corporate website representing PT KPI's brand with a headless CMS empowering non-technical staff to manage content.`,
    techstack: "React, Laravel, MySQL",
    previewLink: "https://www.kpi.co.id",
    githubLink: "https://github.com",
    category: "Corporate Website",
    role: "Full Stack Developer",
    year: "2022 – Present",
    fullDescription: `Built and maintained PT Kaltim Parna Industri’s official corporate website — a public-facing platform representing the company’s brand and delivering up-to-date company information to stakeholders, partners, and the public. The site is built with React (frontend) and Laravel (backend CMS API), featuring a fully managed content system that empowers non-technical staff to update news and company information independently.`,
    features: [
      "Fully responsive design across all screen sizes",
      "Headless CMS with Laravel API for content management",
      "Company profile, products & services pages",
      "News, announcements & press release management",
      "Sustainability, CSR & health & safety reporting section",
      "Admin panel for content editors (no-code updates)",
      "SEO optimization, sitemap & meta tag management",
    ],
  },
  {
    title: "Payment Gateway Service (EDC) — Digital Banking",
    image: projectImage8,
    description: `Secure, reliable payment gateway endpoints supporting EDC, QRIS, e-wallets & virtual accounts for PT Bank Danamon's Cash Management platform.`,
    techstack: "Angular, Java Spring Boot, PostgreSQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "FinTech / Banking",
    role: "Java Developer",
    year: "2018 – 2019",
    fullDescription: `Designed and implemented secure, reliable payment gateway service endpoints for PT Bank Danamon’s Cash Management Digital Banking platform (via PT Emerio Indonesia). The system supports EDC (Electronic Data Capture), QRIS, e-wallets, and virtual account transactions. Ensured high availability, transaction integrity, and compliance with banking security standards.`,
    features: [
      "EDC (Electronic Data Capture) terminal integration",
      "Multi-channel payments: QRIS, e-wallet, virtual account",
      "Real-time transaction processing & settlement engine",
      "Idempotent API design to prevent duplicate transactions",
      "Comprehensive transaction audit trail & reporting",
      "Security compliance following banking standards",
      "Angular-based transaction monitoring dashboard",
    ],
  },
  {
    title: "Push Notification System (FCM) — Womantalk",
    image: projectImage1,
    description: `Scalable push notification system enhancing user engagement on the Womantalk Android application via Firebase Cloud Messaging.`,
    techstack: "Java Spring Boot, Firebase Cloud Messaging (FCM)",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Mobile",
    role: "Backend Developer",
    year: "2017",
    fullDescription: `Designed and implemented a scalable push notification system for Womantalk’s Android application using Firebase Cloud Messaging (FCM) integrated with a Java Spring Boot backend. The system supports targeted and broadcast notifications, improving user engagement and retention across the platform. Notification payloads are structured to support deep-linking.`,
    features: [
      "FCM SDK integration with Spring Boot REST API",
      "Device token registration & lifecycle management",
      "Targeted (single user) & broadcast notification dispatch",
      "Notification scheduling with delayed delivery support",
      "Delivery status tracking & failure retry mechanism",
      "Notification payload with deep-link support",
    ],
  },

  {
    title: "Threebond Point of Sale (POS) System",
    image: projectImage7,
    description: `A comprehensive Point of Sale system designed for Threebond, streamlining sales processes and inventory management.`,
    techstack: "Java Spring Boot, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Retail",
    role: "Full Stack Developer",
    year: "2017",
    fullDescription: `Designed and implemented a scalable Point of Sale system for Threebond, streamlining sales processes and inventory management. The system provides real-time inventory tracking, sales reporting, and a user-friendly interface for staff.`,
    features: [
      "Real-time inventory tracking and management",
      "Sales reporting and analytics",
      "User-friendly interface for staff",
      "Integration with existing accounting systems",
    ],
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sinagadaniel012@gmail.com",
  phone: "+62 821-5235-0376",
};
