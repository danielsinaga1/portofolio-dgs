// Enter all your detials in this file
// Logo images
import logogradient from "../assets/logo_dgs.png";
import logo from "../assets/logo2.svg";
// Profile Image
import profile from "../assets/profile-photos.png"
// Project Images
import projectImage1 from "../assets/projects/project1.png";
import projectImage3 from "../img/IRMS-showcase.png";
import projectImage4 from "../img/LIMS.png";
import projectSanitationImage from "../assets/projects/sanitation-cover.svg";
import projectImage5 from "../assets/projects/project5.png";
import projectImage8 from "../assets/projects/project8.png";
import sppOverview from "../assets/projects/spp/overview.png";
import sppDashboard from "../assets/projects/spp/dashboard.png";
import sppSchoolData from "../assets/projects/spp/school-data.png";
import sppPayments from "../assets/projects/spp/payments.png";
import sppReports from "../assets/projects/spp/reports.png";
import sppAccess from "../assets/projects/spp/access-and-settings.png";
import sppDarkDashboard from "../assets/projects/spp/dark-dashboard.png";
import sppReceipt from "../assets/projects/spp/receipt.png";
import sppMobile from "../assets/projects/spp/mobile-dashboard.png";
import veriAuditOverview from "../assets/projects/veriaudit/overview.png";
import veriAuditDashboard from "../assets/projects/veriaudit/dashboard.png";
import veriAuditPlanning from "../assets/projects/veriaudit/planning.png";
import veriAuditWorkingPaper from "../assets/projects/veriaudit/audit-working-paper.png";
import veriAuditReport from "../assets/projects/veriaudit/audit-report.png";
import veriAuditFollowUp from "../assets/projects/veriaudit/follow-up.png";
import veriAuditRiskHeatmap from "../assets/projects/veriaudit/risk-heatmap.png";
import veriAuditFindings from "../assets/projects/veriaudit/findings.png";
import veriAuditCapa from "../assets/projects/veriaudit/capa.png";
import veriAuditMasterData from "../assets/projects/veriaudit/master-data.png";
import veriAuditAccess from "../assets/projects/veriaudit/access-control.png";
import veriAuditCalendar from "../assets/projects/veriaudit/audit-calendar.png";
import veriAuditWhistleblower from "../assets/projects/veriaudit/whistleblower.png";
import workPermitOverview from "../assets/projects/work-permit/overview.png";
import workPermitRegister from "../assets/projects/work-permit/permits.png";
import workPermitCreate from "../assets/projects/work-permit/create-permit.png";
import workPermitDetail from "../assets/projects/work-permit/permit-detail.png";
import workPermitWorkflow from "../assets/projects/work-permit/approval-workflow.png";
import workPermitRisk from "../assets/projects/work-permit/risk-assessment.png";
import workPermitIncidents from "../assets/projects/work-permit/incidents.png";
import workPermitObservations from "../assets/projects/work-permit/observations.png";
import workPermitActions from "../assets/projects/work-permit/corrective-actions.png";
import workPermitToolbox from "../assets/projects/work-permit/toolbox-meetings.png";
import workPermitAreas from "../assets/projects/work-permit/work-areas.png";
import workPermitTypes from "../assets/projects/work-permit/permit-types.png";
import workPermitFormBuilder from "../assets/projects/work-permit/form-builder.png";
import workPermitDocuments from "../assets/projects/work-permit/documents.png";
import workPermitLessons from "../assets/projects/work-permit/lessons-learned.png";
import workPermitLogin from "../assets/projects/work-permit/login.png";
import threeBondOverview from "../assets/projects/threebond/overview.png";
import threeBondHome from "../assets/projects/threebond/home.png";
import threeBondCatalog from "../assets/projects/threebond/catalog.png";
import threeBondProductDetail from "../assets/projects/threebond/product-detail.png";
import threeBondCart from "../assets/projects/threebond/cart.png";
import threeBondDashboard from "../assets/projects/threebond/dashboard.png";
import threeBondProducts from "../assets/projects/threebond/products.png";
import threeBondCustomers from "../assets/projects/threebond/customers.png";
import threeBondQrCreate from "../assets/projects/threebond/qr-create.png";
import threeBondQrDetail from "../assets/projects/threebond/qr-detail.png";
import threeBondRedeemForm from "../assets/projects/threebond/redeem-form.png";
import threeBondRedeemSuccess from "../assets/projects/threebond/redeem-success.png";
import simrsOverview from "../assets/projects/simrs-yabis/overview.png";
import simrsAdmissions from "../assets/projects/simrs-yabis/admissions-and-care.png";
import simrsMedicalRecords from "../assets/projects/simrs-yabis/medical-records.png";
import simrsPharmacy from "../assets/projects/simrs-yabis/pharmacy-and-nutrition.png";
import simrsDiagnostics from "../assets/projects/simrs-yabis/laboratory-and-radiology.png";
import simrsFinance from "../assets/projects/simrs-yabis/accounting-and-finance.png";
import simrsInventory from "../assets/projects/simrs-yabis/pos-and-inventory.png";
import simrsAccess from "../assets/projects/simrs-yabis/staff-and-access.png";

export interface ProjectGalleryImage {
  src: string;
  title: string;
  description: string;
  alt: string;
}

export interface Project {
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
  gallery?: ProjectGalleryImage[];
}

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
export const projectDetails: Project[] = [
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
    title: "Work Permit & HSE System",
    image: workPermitOverview,
    description: "Digital work permits with staged approvals, risk assessments, safety observations, and corrective action tracking for industrial operations.",
    techstack: "React, TypeScript, PHP / Lumen, PrimeReact, MySQL, JWT",
    previewLink: "",
    githubLink: "",
    category: "Enterprise / HSE",
    role: "Full Stack Developer",
    year: "2026",
    fullDescription: "Work Permit & HSE System brings digital permit-to-work administration and daily safety reporting into one workspace. Teams define job scope, work areas, schedules, PPE requirements, and precautions, then review a staged approval history covering gas testing, supervisor review, safety approval, area authorization, and operations sign-off. Permit details include risk assessments with likelihood, severity, scores, and control measures. HSE workflows organize incidents, hazard observations, corrective actions, toolbox meetings, and lessons learned. Administrators configure permit types, work-area classifications, qualification requirements, dynamic form fields, and a document catalog with versions and effective dates. The frontend uses React 19 and TypeScript with Vite, PrimeReact, Tailwind CSS, and Chart.js; the backend uses PHP/Lumen, MySQL, and JWT authentication. The gallery shows the application with demo data.",
    features: [
      "Digital permit register with job types, priorities, schedules, and lifecycle status",
      "Staged approval history for gas testing, supervisor review, safety approval, area authorization, and operations sign-off",
      "Permit risk assessments with likelihood, severity, scores, and control measures",
      "Incident and hazard reporting with categories, severity, location, and follow-up status",
      "Corrective actions with assigned owners, priorities, deadlines, and overdue indicators",
      "Toolbox meeting schedules and lessons learned documentation",
      "Configurable permit types, work areas, PPE requirements, and safety precautions",
      "No-code permit form fields with sections, input types, ordering, and mandatory flags",
      "HSE document catalog with categories, versions, and effective dates",
    ],
    gallery: [
      { src: workPermitOverview, title: "Project overview", description: "Digital work permit administration and HSE reporting, with the application technology stack and representative demo screens.", alt: "Work Permit and HSE System overview with permits, incidents, toolbox meetings, and safety observations" },
      { src: workPermitRegister, title: "Work permit register", description: "Search and review permits by job, schedule, priority, lifecycle status, work area, and permit type.", alt: "Work permit register showing active, approved, draft, submitted, pending, closed, and rejected permits" },
      { src: workPermitCreate, title: "Permit application", description: "Capture the job scope, permit type, work area, planned dates, PPE requirements, safety precautions, and special conditions.", alt: "New work permit form with job details, scheduling, PPE requirements, and safety precautions" },
      { src: workPermitDetail, title: "Permit details", description: "A permit overview brings together the work description, planned and actual timing, work area, PPE, and precautions.", alt: "Active hot work permit detail with schedule, work area, PPE requirements, and special conditions" },
      { src: workPermitWorkflow, title: "Approval workflow", description: "A review timeline records approval stages, responsible roles, timestamps, and remarks before operations sign-off.", alt: "Permit approval timeline with gas tester, supervisor, safety officer, area authority, and operations manager reviews" },
      { src: workPermitRisk, title: "Risk assessment", description: "Document hazards, likelihood, severity, risk scores, and control measures for the permitted job.", alt: "Permit risk assessment table with hazard categories, likelihood, severity, risk levels, and controls" },
      { src: workPermitIncidents, title: "Incident reporting", description: "An incident register tracks event type, severity, description, reporting date, reporter, and investigation status.", alt: "HSE incident register with property damage, near miss, first aid, and medical treatment demo records" },
      { src: workPermitObservations, title: "Safety observations", description: "Review unsafe acts, unsafe conditions, near misses, positive observations, and their follow-up statuses.", alt: "Safety observations table with categories, severity, observers, dates, and corrective action status" },
      { src: workPermitActions, title: "Corrective actions", description: "Track action owners, priorities, deadlines, source records, completion, verification, and overdue work.", alt: "Corrective action tracker with owners and open, in-progress, overdue, completed, and verified statuses" },
      { src: workPermitToolbox, title: "Toolbox meetings", description: "Plan and review safety briefings by topic, meeting leader, date, duration, and completion status.", alt: "Toolbox meeting schedule with safety topics, conductors, dates, durations, and planned or completed statuses" },
      { src: workPermitAreas, title: "Work area configuration", description: "Maintain work-area codes, names, zone classifications, plant units, radius settings, and active status.", alt: "Work area register with hazardous, confined, elevated, and general zone classifications" },
      { src: workPermitTypes, title: "Permit type configuration", description: "Configure work categories with descriptions, identification colors, maximum durations, and active status.", alt: "Permit type configuration for confined space, diving, excavation, hot work, lifting, and work at height" },
      { src: workPermitFormBuilder, title: "Dynamic form builder", description: "Manage permit form fields by section, label, input type, required status, and associated permit type.", alt: "No-code form builder listing configurable risk, gas testing, and closure fields" },
      { src: workPermitDocuments, title: "HSE document catalog", description: "Organize safety plans, SOPs, risk assessments, reports, and procedures with categories, versions, and effective dates.", alt: "HSE document repository listing safety plans, SOPs, risk assessments, reports, and procedures" },
      { src: workPermitLessons, title: "Lessons learned", description: "Document incident summaries, root causes, preventive actions, applicable permit types, and a required-reading flag.", alt: "Lessons learned form with incident reference, root cause, preventive actions, and applicable permit types" },
      { src: workPermitLogin, title: "Application access", description: "The desktop sign-in screen presents the Work Permit & HSE application and demo access for HSE officers, supervisors, and administrators.", alt: "Work Permit and HSE desktop login with demo HSE officer, supervisor, and administrator accounts" },
    ],
  },
  {
    title: "VeriAudit — Audit Management",
    image: veriAuditOverview,
    description: "An internal audit platform connecting annual planning, auditor assignments, working papers, findings, reporting, and CAPA follow-up in one workspace.",
    techstack: "Go Fiber, React, TypeScript, PrimeReact, Chart.js, MySQL",
    previewLink: "",
    githubLink: "",
    category: "Enterprise / Audit",
    role: "Full Stack Developer",
    year: "2026",
    fullDescription: "VeriAudit brings the internal audit cycle into one application, from annual work plans (RKIA), assignment letters, and audit programs to working papers, findings, audit reports (LHA), and follow-up actions. Auditors document conditions, criteria, causes, impacts, and recommendations, while reviewers track document status and corrective or preventive action plans (CAPA). Dashboards summarize audit progress, overdue follow-ups, and departmental risk using an impact-by-probability heatmap. Supporting modules cover audit scheduling, organizational references, user administration, activity logs, module-level permissions, and a whistleblower reporting form. The frontend uses React 19 and TypeScript with Vite, Tailwind CSS, PrimeReact, Chart.js, Axios, and React Router; the backend uses Go with Fiber v2, GORM, and MySQL.",
    features: [
      "Annual audit planning (RKIA), assignment letters, and audit programs",
      "KKA samples and working papers with structured findings and recommendations",
      "LHA reports covering audit scope, methodology, ratings, and conclusions",
      "Findings register with risk scores, classification, and recurrence indicators",
      "Follow-up actions and CAPA with root-cause analysis, owners, deadlines, completion records, and escalation status",
      "Audit progress dashboards and a 5 × 5 impact-and-probability risk heatmap",
      "Audit calendar, organizational hierarchy, and audit reference data",
      "Role-based module permissions, user administration, and activity logs",
      "Whistleblower reporting form with category, severity, and incident details",
    ],
    gallery: [
      { src: veriAuditOverview, title: "Project overview", description: "The VeriAudit audit lifecycle and technology stack. The application interface is branded TIMS KPI in these demo screenshots.", alt: "VeriAudit project overview showing its audit management dashboard and technology stack" },
      { src: veriAuditDashboard, title: "Audit dashboard", description: "A consolidated view of audit stages, findings, pending approvals, and overdue follow-ups.", alt: "Audit dashboard with summary cards and charts for audit stages and finding severity" },
      { src: veriAuditPlanning, title: "Planning & assignments", description: "Annual RKIA plans, assignment summaries, audit team roles, and scheduled audit programs.", alt: "VeriAudit planning showcase with annual audit plans, assignment letters, and audit programs" },
      { src: veriAuditWorkingPaper, title: "Working papers & samples", description: "A sample record organized into condition, criteria, cause, impact, and recommendation, with procedure and finding severity.", alt: "Audit sample detail documenting a bank reconciliation finding and its recommendation" },
      { src: veriAuditReport, title: "Audit reports", description: "An LHA report combining audit scope, methodology, overall rating, conclusions, recommendations, and associated findings.", alt: "Final audit report detail with scope, methodology, conclusions, and a findings section" },
      { src: veriAuditFindings, title: "Findings register", description: "Findings tracked by risk severity and score, classification, recurrence, and CAPA assignment status.", alt: "Findings table with high, medium, and critical risk scores and recurrence indicators" },
      { src: veriAuditFollowUp, title: "Follow-up tracking", description: "Follow-up registration with target and actual dates, item statuses, and an overdue indicator.", alt: "Audit follow-up detail with an overdue status and target and actual completion dates" },
      { src: veriAuditCapa, title: "CAPA management", description: "Corrective action records showing priority, progress, deadlines, assigned owners, and escalation levels.", alt: "CAPA management table showing overdue and in-progress corrective actions with owners and escalation status" },
      { src: veriAuditRiskHeatmap, title: "Risk heatmap", description: "A 5 × 5 impact-and-probability matrix with year and quarter filters and a prioritized department risk table.", alt: "Risk heatmap dashboard with a colored risk matrix and department risk scores" },
      { src: veriAuditCalendar, title: "Audit scheduling", description: "A monthly audit calendar and schedule form for a title, description, classification, and start and end dates.", alt: "Audit calendar with an add-schedule dialog for classification and date range" },
      { src: veriAuditMasterData, title: "Audit reference data", description: "Organizational units and reusable audit types, aspects, and procedures used throughout the audit workflow.", alt: "Audit master data showcase with organizational hierarchy, audit types, aspects, and procedures" },
      { src: veriAuditAccess, title: "Role-based permissions", description: "A role-specific permission matrix controlling view, create, update, and delete access for modules and submodules.", alt: "Admin permission matrix with view, create, update, delete, and select-all checkboxes" },
      { src: veriAuditWhistleblower, title: "Whistleblower reporting", description: "A reporting form for category, severity, violation details, and optional information about involved parties.", alt: "Whistleblower alert form with category, severity, violation description, and involved-party fields" },
    ],
  },

  {
    title: "Tuition Fee Management (SPP)",
    image: sppOverview,
    description: "School tuition administration in one place: student records, multi-month payments, printable receipts, and financial reporting.",
    techstack: "Go, Go Fiber, React, TypeScript, SQLite",
    previewLink: "",
    githubLink: "",
    category: "Education",
    role: "Full Stack Developer",
    year: "2026",
    fullDescription: "A web application for school staff to manage tuition fees (SPP), from maintaining student, class, and annual fee records to recording payments for multiple months. A financial dashboard brings together revenue trends and recent transactions, while receipts, collection reports, and arrears tracking support day-to-day administration. The gallery presents the application with demo data.",
    features: [
      "Financial dashboard with revenue trends and recent payments",
      "Student, class, and annual tuition fee management",
      "Multi-month payments with an automatic total",
      "Cash, bank transfer, and QRIS payment records",
      "Printable receipts and student payment status",
      "Revenue reports, class progress, and CSV export",
      "Arrears tracking with class and student filters",
      "Staff accounts, light/dark themes, and responsive navigation",
    ],
    gallery: [
      { src: sppOverview, title: "Project overview", description: "School tuition administration, from student records to payments and reporting.", alt: "SPP project overview showing the desktop and mobile financial dashboard" },
      { src: sppDashboard, title: "Financial dashboard", description: "Monthly and annual revenue, a 12-month trend, recent transactions, and quick access to key workflows.", alt: "SPP financial dashboard with revenue statistics, a monthly chart, and a dark theme preview" },
      { src: sppSchoolData, title: "School data management", description: "Manage students, classes, and tuition rates by year, with search and filters.", alt: "Student directory alongside class management and annual tuition fee tables" },
      { src: sppPayments, title: "Payments & receipts", description: "Select unpaid months, review the total, and issue a printable payment receipt.", alt: "Multi-month tuition payment form with a payment summary and receipt" },
      { src: sppReports, title: "Reports & arrears", description: "Review monthly collections, payment methods, class progress, and outstanding balances. Export reports to CSV.", alt: "Revenue report and arrears list with outstanding months and amounts per student" },
      { src: sppAccess, title: "Staff access & settings", description: "Staff sign-in, registration, profile settings, theme preferences, and navigation on mobile.", alt: "Staff profile settings, login and registration forms, and the mobile navigation menu" },
      { src: sppDarkDashboard, title: "Dark theme", description: "An alternate dashboard appearance with the same financial overview and navigation.", alt: "Tuition fee dashboard in dark mode with revenue cards and a blue trend chart" },
      { src: sppReceipt, title: "Payment receipt", description: "A detailed proof of payment with a transaction number, payment method, paid status, and print action.", alt: "Tuition fee receipt for demo student Zidan Alfarizi with a paid status of Rp 350,000" },
      { src: sppMobile, title: "Mobile dashboard", description: "Revenue and school statistics in a layout adapted to a phone screen.", alt: "Mobile tuition dashboard with stacked revenue, student, and class statistics" },
    ],
  },
  {
    title: "SIMRS YABIS — Hospital Management System",
    image: simrsOverview,
    description: "Hospital management workspaces for patient admissions, medical records, pharmacy, diagnostics, billing, inventory, and staff access.",
    techstack: "React, TypeScript, Redux Toolkit, Tailwind CSS, Java Spring Boot, PostgreSQL, Redis, JWT",
    previewLink: "",
    githubLink: "",
    category: "Healthcare",
    role: "Full Stack Developer",
    year: "2026",
    fullDescription: "SIMRS YABIS brings patient services, medical support, and hospital administration into one web application. Front-office workspaces cover registration, queues, outpatient and inpatient care, patient records, clinical procedures, visit history, and reporting. Supporting modules provide pharmacy and dispensing workspaces, drug stock views, nutrition menus, laboratory orders and results, and radiology screens. Back-office modules cover billing, cash flow, financial reporting, POS, inventory, medical equipment, staffing, and role-based module access. The frontend uses React 19, TypeScript, Vite 6, Tailwind CSS 4, and Redux Toolkit; the backend uses Java 21, Spring Boot 3.5, PostgreSQL, Redis, and Spring Security with JWT. The gallery presents application screens with demo data and anonymized identities.",
    features: [
      "Patient registration, queues, and outpatient and inpatient care workspaces",
      "Medical record views for patient lookup, clinical procedures, visit history, and reporting",
      "Pharmacy prescription and stock views, dispensing workspaces, and nutrition menus",
      "Laboratory order and result views alongside radiology workspaces",
      "Patient billing, cash flow monitoring, and financial reporting screens",
      "POS, drug inventory, and medical equipment registers",
      "Staff administration, role assignment, and module-level access configuration",
    ],
    gallery: [
      { src: simrsOverview, title: "Project overview", description: "The SIMRS YABIS hospital management dashboard, main application areas, and technology stack.", alt: "SIMRS YABIS project overview with its hospital dashboard, patient services, medical support, administration, and technology stack" },
      { src: simrsAdmissions, title: "Admissions & patient care", description: "Patient registration and queue management alongside outpatient and inpatient service dashboards.", alt: "SIMRS YABIS showcase of patient registration, service queues, outpatient care, and inpatient room monitoring" },
      { src: simrsMedicalRecords, title: "Electronic medical records", description: "Patient lookup, clinical procedure lists, visit history, and medical record reporting using demo or anonymized records.", alt: "SIMRS YABIS medical record screens with patient data, clinical procedures, visit history, and reporting charts" },
      { src: simrsPharmacy, title: "Pharmacy & nutrition", description: "Pharmacy and drug stock dashboards, a dispensing workstation, and nutritional menu management.", alt: "SIMRS YABIS pharmacy showcase with prescription summaries, drug stock, a dispensing workstation, and nutrition menus" },
      { src: simrsDiagnostics, title: "Laboratory & radiology", description: "Laboratory orders and results, a radiology dashboard, and the diagnostic viewer layout with image placeholders.", alt: "SIMRS YABIS laboratory and radiology screens showing order summaries, a result list, modality cards, and an unloaded image viewer" },
      { src: simrsFinance, title: "Accounting & patient billing", description: "Financial overview, patient invoices and payment statuses, cash flow monitoring, and financial report screens with demo figures.", alt: "SIMRS YABIS accounting showcase with financial summary cards, patient invoices, cash flow, and financial reports" },
      { src: simrsInventory, title: "POS & hospital inventory", description: "A cashier workspace and sales navigation alongside drug stock and medical equipment registers.", alt: "SIMRS YABIS POS and inventory screens with a product list, shopping cart, drug stock, and medical equipment records" },
      { src: simrsAccess, title: "Staff & access management", description: "Staff distribution, user-role assignment, role administration, and a module permission matrix.", alt: "SIMRS YABIS staff administration and access screens with a department chart, user roles, role configuration, and permissions" },
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
    image: threeBondOverview,
    description: "Industrial product catalog, store administration, customer accounts, and QR loyalty points for ThreeBond.",
    techstack: "React, TypeScript, Tailwind CSS, Java Spring Boot, MySQL, JWT, ZXing",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
    category: "Retail",
    role: "Full Stack Developer",
    year: "2017",
    fullDescription: "ThreeBond combines an industrial product catalog with store administration and a QR loyalty program. Customers browse products by category, market, and function, review product details, manage their profile, and maintain a points-based shopping cart. Administrators manage products, images, categories, and customer records, then generate downloadable QR codes with point values, usage limits, and expiration dates. Authenticated customers can validate a code or QR URL and claim its points. The frontend uses React 18, TypeScript, and Tailwind CSS; the backend uses Java 17, Spring Boot 3, Spring Security with JWT, MySQL, and ZXing. The gallery shows the running application with demo data; dashboard metrics and order-management views use built-in demo records.",
    features: [
      "Product catalog with category, market, and function filters",
      "Product and category administration with images and catalog relationships",
      "Customer records with company, contact, and account status details",
      "Authenticated customer profiles and cart quantity management with point totals",
      "QR generation with point values, descriptions, usage limits, and expiration dates",
      "QR detail, image download, and active or inactive status controls",
      "Code or QR URL validation and authenticated loyalty point claims",
      "Dashboard, analytics, and order-management interfaces with demo data",
    ],
    gallery: [
      { src: threeBondOverview, title: "Project overview", description: "An overview of the product catalog, store administration, QR loyalty program, and application technology stack.", alt: "ThreeBond project overview showing the product catalog, admin dashboard, main capabilities, and technology stack" },
      { src: threeBondHome, title: "Storefront", description: "The public landing page introduces ThreeBond and provides access to products, categories, company information, and customer accounts.", alt: "ThreeBond storefront with its hero banner, catalog navigation, and customer account controls" },
      { src: threeBondCatalog, title: "Product catalog", description: "Browse industrial adhesives and sealants with category, market, and function filters, product cards, and point values.", alt: "ThreeBond product catalog with three filter controls and industrial adhesive product cards" },
      { src: threeBondProductDetail, title: "Product details", description: "Review a product's category, markets, function, and point value, then choose a quantity to add to the cart.", alt: "ThreeBond 1521 product detail with market tags, point value, quantity controls, and an add-to-cart button" },
      { src: threeBondCart, title: "Customer cart", description: "A populated cart shows quantity controls, per-product point subtotals, and a combined point summary.", alt: "ThreeBond shopping cart with two products, three units, and a total of 290 points" },
      { src: threeBondDashboard, title: "Admin dashboard", description: "The administration dashboard presents built-in demo metrics and charts alongside shortcuts to products, orders, customers, and settings.", alt: "ThreeBond administration dashboard showing demo metrics, charts, and quick actions" },
      { src: threeBondProducts, title: "Product administration", description: "Manage product images, categories, market and function relationships, and point values from a searchable register.", alt: "ThreeBond admin product table with images, categories, markets, functions, points, and edit controls" },
      { src: threeBondCustomers, title: "Customer management", description: "Customer cards organize company and contact details, active status, and actions for viewing or editing demo customer records.", alt: "ThreeBond customer management with searchable demo records, company details, contact information, and status labels" },
      { src: threeBondQrCreate, title: "QR generation", description: "Configure a loyalty QR code with a point value, description, maximum usage, and optional expiration date.", alt: "ThreeBond QR generation form with 125 points, a loyalty description, a usage limit, and an expiration date" },
      { src: threeBondQrDetail, title: "QR details & download", description: "Review the generated QR image, code, point value, usage count, and expiration, with an image download action.", alt: "ThreeBond generated QR code detail dialog with 125 points, usage and expiration details, and a download button" },
      { src: threeBondRedeemForm, title: "Loyalty code validation", description: "An authenticated customer validates a loyalty code and reviews its active status, description, and available points before claiming.", alt: "ThreeBond redeem dialog showing a valid active QR code worth 125 loyalty points" },
      { src: threeBondRedeemSuccess, title: "Successful point claim", description: "The demo customer's successful QR claim confirms 125 points earned and a resulting balance of 125 points.", alt: "ThreeBond successful loyalty claim confirmation showing 125 points earned and a total balance of 125" },
    ],
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sinagadaniel012@gmail.com",
  phone: "+62 821-5235-0376",
};
