/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useMemo, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import InnerHeader from "./InnerHeader";
import Footer from "./Footer";
import education from "../img/education-bg.png";
import entertainment from "../img/entertainment-bg.png";
import games from "../img/games-bg.png";
import sports from "../img/sports-bg.png";
import movielist from "../img/movielist.png";
import rt44 from "../img/RT44.png";
import irms from "../img/IRMS.png";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  heroImage: string;
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const ServiceList: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentImage, setCurrentImage] = useState<number>(0);

  // Memoize project data to prevent unnecessary re-renders
  const projectsData = useMemo<Record<string, ProjectData>>(
    () => ({
      "sales-marketing-threebond": {
        id: "sales-marketing-threebond",
        title: "Sales & Marketing Solutions",
        subtitle: "Threebond Application Development",
        category: "Web Development & Marketing",
        client: "Threebond Indonesia",
        duration: "3 Months",
        year: "2024",
        services: [
          "Web Development",
          "Digital Marketing",
          "SEO Optimization",
          "Content Management",
        ],
        overview:
          "A comprehensive sales and marketing platform designed to streamline Threebond's product showcase and customer engagement processes. The application features modern responsive design, product catalog management, lead generation tools, and integrated analytics dashboard.",
        challenge:
          "Threebond Indonesia needed a modern digital presence to effectively showcase their industrial adhesive products and improve their sales conversion rates. The existing system was outdated, not mobile-friendly, and lacked proper lead tracking capabilities.",
        solution:
          "We developed a full-stack web application with React frontend and Node.js backend, featuring an intuitive product catalog, interactive product finder, lead capture forms, customer portal, and comprehensive analytics dashboard. The solution includes responsive design, SEO optimization, and integration with existing CRM systems.",
        results: [
          "45% increase in online lead generation",
          "60% improvement in user engagement metrics",
          "35% faster product discovery process",
          "50% reduction in bounce rate",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "Bootstrap",
          "SEO Tools",
        ],
        heroImage: education,
        gallery: [education, entertainment, games, sports],
        testimonial: {
          quote:
            "The new platform has transformed our digital presence and significantly improved our lead generation process.",
          author: "Marketing Director",
          position: "Threebond Indonesia",
        },
      },
      "puskesmas-portal": {
        id: "puskesmas-portal",
        title: "Healthcare Information Portal",
        subtitle: "Puskesmas Bontang Utara Digital System",
        category: "Healthcare Technology",
        client: "Puskesmas Bontang Utara",
        duration: "4 Months",
        year: "2024",
        services: [
          "System Development",
          "Database Design",
          "UI/UX Design",
          "Training & Support",
        ],
        overview:
          "A comprehensive healthcare management system designed to digitize patient records, streamline appointment scheduling, and improve overall healthcare service delivery at Puskesmas Bontang Utara.",
        challenge:
          "The healthcare facility was managing patient records manually, causing inefficiencies, long waiting times, and difficulty in tracking patient history. They needed a digital solution to modernize their operations.",
        solution:
          "We created an integrated healthcare portal with patient management system, appointment scheduling, digital medical records, prescription management, and reporting dashboard. The system includes role-based access control and mobile-responsive interface.",
        results: [
          "70% reduction in patient waiting time",
          "85% improvement in record management efficiency",
          "60% faster appointment scheduling process",
          "95% staff satisfaction with new system",
        ],
        technologies: [
          "React",
          "PHP Laravel",
          "MySQL",
          "Bootstrap",
          "Chart.js",
          "REST API",
        ],
        heroImage: entertainment,
        gallery: [entertainment, education, games, sports],
      },
      "integrated-management": {
        id: "integrated-management",
        title: "Integrated Management System",
        subtitle: "Enterprise Resource Planning Solution",
        category: "Enterprise Software",
        client: "PT. Multi Industri",
        duration: "6 Months",
        year: "2023",
        services: [
          "System Architecture",
          "Full-Stack Development",
          "Integration",
          "Training",
        ],
        overview:
          "A comprehensive ERP system that unifies business processes including inventory management, financial reporting, human resources, and customer relationship management into a single integrated platform.",
        challenge:
          "The client was using multiple disconnected systems for different business processes, leading to data inconsistencies, operational inefficiencies, and difficulty in generating comprehensive business reports.",
        solution:
          "We developed a modular ERP system with integrated modules for inventory, finance, HR, CRM, and reporting. The solution features real-time dashboard, automated workflows, document management, and comprehensive reporting tools.",
        results: [
          "55% improvement in operational efficiency",
          "40% reduction in data entry errors",
          "65% faster report generation",
          "30% cost reduction in operations",
        ],
        technologies: [
          "Laravel",
          "Vue.js",
          "MySQL",
          "Redis",
          "Docker",
          "RESTful API",
        ],
        heroImage: sports,
        gallery: [sports, education, entertainment, games],
      },
      "movie-list": {
        id: "movie-list",
        title: "MovieList",
        subtitle: "Online Movie Streaming Platform (Trailer Only)",
        category: "Entertainment Platform",
        client: "Binar Academy",
        duration: "5 Months",
        year: "2023",
        services: [
          "UI/UX Design",
          "Frontend & Backend Development",
          "API Integration",
          "Deployment & Maintenance",
        ],
        overview:
          "A modern web-based movie streaming platform inspired by Netflix, allowing users to browse a wide range of films, view detailed movie information, and watch official trailers. Designed for speed, responsiveness, and scalability.",
        challenge:
          "The client wanted a clean and engaging movie streaming experience without hosting full-length content due to licensing constraints. The system had to simulate a streaming service while only serving trailers and metadata.",
        solution:
          "We built a responsive single-page application that mimics the Netflix experience, complete with movie categories, search, detail pages, and embedded YouTube trailers. Admin panel included for managing movie data and assets.",
        results: [
          "Successfully launched MVP within 6 months",
          "Improved user engagement with trailer previews",
          "Optimized loading time and performance using lazy-loading",
          "Positive feedback from test users for clean UI/UX",
        ],
        technologies: [
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "YouTube API",
          "Vercel",
        ],
        heroImage: movielist,
        gallery: [sports, education, entertainment, games, movielist],
      },
      "rt-44": {
        id: "rt44",
        title: "Portofolio RT 44",
        subtitle: "Website Profil dan Layanan RT 44 Balikpapan",
        category: "Community Website",
        client: "RT 44, Balikpapan",
        duration: "1 Month",
        year: "2024",
        services: [
          "UI/UX Design",
          "Frontend & Backend Development",
          "Content Management System",
          "Deployment",
        ],
        overview:
          "Sebuah website portofolio resmi untuk RT 44 di Balikpapan yang berfungsi sebagai pusat informasi warga. Website ini memuat pengenalan RT, daftar pengurus aktif, layanan administratif, informasi UMKM warga, serta dokumentasi kegiatan lingkungan.",
        challenge:
          "RT 44 sebelumnya belum memiliki platform digital yang terorganisir untuk menampilkan informasi penting kepada warga. Komunikasi informasi terbatas dan bergantung pada media cetak atau chat group informal.",
        solution:
          "Kami membangun website komunitas yang informatif dan mudah diakses dengan fitur-fitur seperti halaman profil RT, daftar pengurus, layanan surat-menyurat, galeri dokumentasi kegiatan, serta etalase UMKM warga untuk mendukung ekonomi lokal.",
        results: [
          "Mempermudah warga dalam mengakses informasi RT 44",
          "Meningkatkan transparansi dan dokumentasi kegiatan RT",
          "Memberi panggung promosi untuk UMKM lokal",
          "Mendukung digitalisasi pelayanan RT secara efisien",
        ],
        technologies: [
          "Express.js",
          "React.js",
          "MySQL",
          "Tailwind CSS",
          "RESTful API",
          "Vercel",
        ],
        heroImage: rt44,
        gallery: [sports, education, entertainment, games, movielist, rt44],
      },
      "incident-report-management-system": {
        id: "irms",
        title: "Incident Report Management System (IRMS)",
        subtitle: "Sistem Pelaporan dan Monitoring Insiden Karyawan",
        category: "Industrial Safety Platform",
        client: "PT Kaltim Parna Industri",
        duration: "3 Months",
        year: "2025",
        services: [
          "System Design",
          "Frontend Development",
          "Backend API & Database",
          "Authentication & User Management",
          "Deployment & Maintenance",
        ],
        overview:
          "IRMS adalah aplikasi web internal untuk PT Kaltim Parna Industri yang digunakan dalam pelaporan dan monitoring insiden operasional. Sistem ini mendukung pelacakan status laporan (approved, rejected, in progress), manajemen pengguna karyawan, serta dashboard real-time yang menampilkan data laporan secara visual.",
        challenge:
          "Perusahaan membutuhkan sistem yang efisien untuk mencatat dan memantau laporan insiden yang terjadi di lingkungan kerja secara terstruktur dan mudah dipantau, menggantikan sistem manual yang rawan kesalahan dan kurang transparan.",
        solution:
          "Kami membangun platform digital berbasis React TypeScript dan Laravel yang dilengkapi fitur login NPK, pengelolaan data insiden, validasi status laporan, serta manajemen pengguna (roles & permissions). UI dirancang sederhana dan responsif untuk mendukung kebutuhan lapangan.",
        results: [
          "Meningkatkan efisiensi pencatatan laporan insiden",
          "Mempermudah monitoring progres laporan oleh supervisor",
          "Menurunkan risiko kesalahan input dan kehilangan data",
          "Meningkatkan kecepatan dalam eskalasi dan tindak lanjut insiden",
        ],
        technologies: [
          "React TypeScript",
          "Laravel",
          "MySQL",
          "Tailwind CSS",
          "RESTful API",
          "Vercel",
        ],
        heroImage: irms,
        gallery: [sports, education, entertainment, games, movielist, irms],
      },
    }),
    []
  );

  const handleImageClick = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

  const [showAllProjects, setShowAllProjects] = useState(false);

  // Project listing view
  const ProjectListView = useMemo(() => {
    const visibleProjects = showAllProjects
      ? Object.values(projectsData)
      : Object.values(projectsData).slice(0, 3);

    return (
      <>
        <main id="main">
          <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
              <div className="mb-5 text-center">
                <h1 className="mb-3 display-4 fw-bold">
                  Our Featured Projects
                </h1>
                <p className="lead fst-italic">
                  Discover our successful project implementations and digital
                  solutions
                </p>
              </div>

              <div className="row g-4">
                {visibleProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

              <div className="w-full flex flex-col items-center mt-4 mb-2">
                <button
                  onClick={() => setShowAllProjects((prev) => !prev)}
                  className="border-0 bg-transparent capitalize w-fit hover:scale-105 duration-150 text-blue-600"
                >
                  {showAllProjects ? "view less..." : "view more..."}
                </button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }, [projectsData, showAllProjects]);

  if (!projectId) {
    return ProjectListView;
  }

  const project = projectsData[projectId];

  if (!project) {
    return <NotFoundView />;
  }

  return (
    <ProjectDetailView
      project={project}
      projectsData={projectsData}
      onImageClick={handleImageClick}
    />
  );
};

// Memoized components for better performance
const ProjectCard: React.FC<{ project: ProjectData; index: number }> =
  React.memo(({ project, index }) => (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="overflow-hidden bg-white shadow-sm project-card h-100 rounded-4">
        <div className="project-image position-relative">
          <img
            src={project.heroImage}
            alt={project.title}
            className="img-fluid w-100"
            style={{ height: "250px", objectFit: "cover" }}
            loading="lazy"
          />
          <div className="top-0 opacity-0 project-overlay position-absolute start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <Link to={`/projects/${project.id}`} className="btn btn-primary">
              <i className="bi bi-eye me-2"></i>View Project
            </Link>
          </div>
        </div>
        <div className="p-4">
          <span className="mb-2 badge bg-primary">{project.category}</span>
          <h4 className="mb-2 fw-bold">{project.title}</h4>
          <p className="mb-3 text-muted">{project.subtitle}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{project.year}</small>
            <Link
              to={`/projects/${project.id}`}
              className="btn btn-outline-primary btn-sm"
            >
              Learn More <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

const NotFoundView: React.FC = () => (
  <>
    <InnerHeader />
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <i className="mb-4 bi bi-exclamation-triangle display-1 text-warning"></i>
          <h2 className="mb-3">Project Not Found</h2>
          <p className="mb-4 text-muted">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/services" className="btn btn-primary">
            <i className="bi bi-arrow-left me-2"></i>Back to Projects
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

const ProjectDetailView: React.FC<{
  project: ProjectData;
  projectsData: Record<string, ProjectData>;
  onImageClick: (index: number) => void;
}> = React.memo(({ project, projectsData, onImageClick }) => (
  <>
    <InnerHeader />

    {/* Hero Section */}
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/services">Projects</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="mb-3 badge bg-primary fs-6">
              {project.category}
            </span>
            <h1 className="mb-3 display-4 fw-bold">{project.title}</h1>
            <p className="mb-4 h4 text-primary">{project.subtitle}</p>
            <p className="mb-4 lead">{project.overview}</p>

            <div className="row g-4">
              <div className="col-6">
                <h6 className="mb-1 text-muted">Client</h6>
                <p className="fw-semibold">{project.client}</p>
              </div>
              <div className="col-6">
                <h6 className="mb-1 text-muted">Duration</h6>
                <p className="fw-semibold">{project.duration}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <img
              src={project.heroImage}
              alt={project.title}
              className="shadow-lg img-fluid rounded-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <main id="main">
      {/* Project Details */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Challenge */}
              <div className="mb-5" data-aos="fade-up">
                <h2 className="mb-4 h3 fw-bold">The Challenge</h2>
                <p className="lead">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-5" data-aos="fade-up">
                <h2 className="mb-4 h3 fw-bold">Our Solution</h2>
                <p className="lead">{project.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-5" data-aos="fade-up">
                <h2 className="mb-4 h3 fw-bold">Results & Impact</h2>
                <div className="row g-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="col-md-6">
                      <div className="p-3 d-flex align-items-start bg-light rounded-3">
                        <i className="mt-1 bi bi-check-circle-fill text-success me-3"></i>
                        <span>{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-5" data-aos="fade-up">
                <h2 className="mb-4 h3 fw-bold">Technologies Used</h2>
                <div className="flex-wrap gap-2 d-flex">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 border badge bg-light text-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="mb-5" data-aos="fade-up">
                  <div className="p-4 text-white bg-primary rounded-4">
                    <blockquote className="mb-3">
                      <p className="mb-0 fs-5">"{project.testimonial.quote}"</p>
                    </blockquote>
                    <cite className="d-block">
                      <strong>{project.testimonial.author}</strong>
                      <br />
                      <small>{project.testimonial.position}</small>
                    </cite>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <ProjectSidebar project={project} />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="mb-5 text-center">Project Gallery</h2>
          <div className="row g-4">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="shadow cursor-pointer img-fluid rounded-3 w-100"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => onImageClick(index)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjects currentProject={project} projectsData={projectsData} />
    </main>

    <Footer />
  </>
));

const ProjectSidebar: React.FC<{ project: ProjectData }> = React.memo(
  ({ project }) => (
    <div className="sticky-top" style={{ top: "100px" }}>
      <div className="mb-4 shadow-sm card">
        <div className="text-white card-header bg-primary">
          <h5 className="mb-0">Project Information</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <h6 className="fw-bold">Client</h6>
            <p className="mb-0">{project.client}</p>
          </div>
          <div className="mb-3">
            <h6 className="fw-bold">Year</h6>
            <p className="mb-0">{project.year}</p>
          </div>
          <div className="mb-3">
            <h6 className="fw-bold">Duration</h6>
            <p className="mb-0">{project.duration}</p>
          </div>
          <div>
            <h6 className="fw-bold">Services</h6>
            <ul className="mb-0 list-unstyled">
              {project.services.map((service, index) => (
                <li key={index} className="mb-1">
                  <i className="bi bi-check text-primary me-2"></i>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="shadow-sm card">
        <div className="text-center card-body">
          <h5>Need Similar Solution?</h5>
          <p className="mb-3 text-muted">
            Let's discuss your project requirements
          </p>
          <Link to="/contact" className="btn btn-primary">
            <i className="bi bi-chat-dots me-2"></i>
            Start Discussion
          </Link>
        </div>
      </div>
    </div>
  )
);

const RelatedProjects: React.FC<{
  currentProject: ProjectData;
  projectsData: Record<string, ProjectData>;
}> = React.memo(({ currentProject, projectsData }) => {
  const relatedProjects = useMemo(
    () =>
      Object.values(projectsData)
        .filter((p) => p.id !== currentProject.id)
        .slice(0, 2),
    [currentProject.id, projectsData]
  );

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-5 text-center">Other Projects</h2>
        <div className="row g-4">
          {relatedProjects.map((relatedProject, index) => (
            <div
              key={relatedProject.id}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="border-0 shadow-sm card h-100">
                <img
                  src={relatedProject.heroImage}
                  className="card-img-top"
                  alt={relatedProject.title}
                  style={{ height: "200px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="card-body">
                  <span className="mb-2 badge bg-primary">
                    {relatedProject.category}
                  </span>
                  <h5 className="card-title">{relatedProject.title}</h5>
                  <p className="card-text text-muted">
                    {relatedProject.subtitle}
                  </p>
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    className="btn btn-outline-primary"
                  >
                    View Project <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default React.memo(ServiceList);
