import React, { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import education from "../img/education-bg.png";
import entertainment from "../img/entertainment-bg.png";
import sports from "../img/sports-bg.png";
import movielist from "../img/movielist.png";
import rt44 from "../img/RT44.png";
import irms from "../img/IRMS.png";

import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import serviceHeader from "../img/services-header.jpg";
import InnerHeaderBanner from "../Components/InnerHeaderBanner";
import FAQ from "../Components/FAQ";

const Service: React.FC = () => {
  // Memoize services data to prevent unnecessary re-renders
  const services = useMemo(
    () => [
      {
        id: "sales-marketing-threebond",
        title: "Sales & Marketing Solutions Threebond Application",
        icon: "bi bi-book",
        color: "#f57813",
        image: education,
        description:
          "A comprehensive sales and marketing platform designed to streamline Threebond's product showcase and customer engagement processes with modern technology.",
        features: [
          "Modern responsive design",
          "Product catalog management",
          "Lead generation tools",
          "Analytics dashboard",
          "SEO optimization",
        ],
        highlights:
          "Comprehensive digital marketing solution with integrated CRM and analytics for improved customer engagement and sales conversion.",
      },
      {
        id: "puskesmas-portal",
        title: "Puskesmas Bontang Utara Information Portal",
        icon: "bi bi-collection-play",
        color: "#15a04a",
        image: entertainment,
        description:
          "Healthcare management system designed to digitize patient records, streamline appointment scheduling, and improve healthcare service delivery.",
        features: [
          "Patient management system",
          "Appointment scheduling",
          "Digital medical records",
          "Prescription management",
          "Reporting dashboard",
        ],
        highlights:
          "Complete healthcare digitization solution improving operational efficiency and patient care quality.",
      },
      {
        id: "integrated-management",
        title: "Integrated Management System",
        icon: "bi bi-universal-access-circle",
        color: "#1335f5",
        image: sports,
        description:
          "Enterprise Resource Planning system that unifies business processes including inventory, finance, HR, and CRM into a single platform.",
        features: [
          "Inventory management",
          "Financial reporting",
          "Human resources",
          "Customer relationship management",
          "Real-time dashboard",
          "Automated workflows",
        ],
        highlights:
          "Comprehensive ERP solution reducing operational costs and improving business process efficiency.",
      },
      {
        id: "movie-list",
        title: "MovieList",
        icon: "bi bi-film",
        color: "#dc3545",
        image: movielist,
        description:
          "A modern movie-trailer viewing platform designed to simulate a Netflix-like experience with trailers, metadata, and responsive design.",
        features: [
          "Trailer-only streaming interface",
          "Movie detail page with metadata",
          "Admin dashboard for content management",
          "Category-based filtering",
          "Responsive across all devices",
        ],
        highlights:
          "Delivered an MVP-level streaming interface to simulate full-scale product UX while remaining licensing-compliant.",
      },
      {
        id: "rt44",
        title: "Portofolio RT 44",
        icon: "bi bi-house-door",
        color: "#FFA500",
        image: rt44,
        description:
          "A digital community platform for RT 44 Balikpapan to share official information, showcase UMKM, and provide online services for local citizens.",
        features: [
          "Profil RT & pengurus",
          "Layanan surat-menyurat digital",
          "Etalase UMKM warga",
          "Galeri dokumentasi kegiatan",
          "Informasi pengumuman RT",
        ],
        highlights:
          "Website komunitas modern untuk warga RT 44 yang mengintegrasikan layanan administratif dan promosi ekonomi lokal.",
      },
      {
        id: "irms",
        title: "Incident Report Management System (IRMS)",
        icon: "bi bi-exclamation-octagon",
        color: "#28a745",
        image: irms,
        description:
          "An internal industrial safety platform for managing incident reports and monitoring statuses at PT KPI, enhancing operational safety and traceability.",
        features: [
          "Formulir pelaporan insiden",
          "Manajemen user karyawan",
          "Status laporan real-time (Approved, Rejected, etc)",
          "Export laporan ke PDF/Excel",
          "Dashboard visual statistik laporan",
        ],
        highlights:
          "Platform internal berbasis web untuk mendukung pelaporan insiden dengan sistematis dan efisien di lingkungan industri.",
      },
    ],
    []
  );

  const handleViewDetails = useCallback((serviceId: string) => {
    // Could add analytics tracking here
    console.log(`Viewing details for service: ${serviceId}`);
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img={serviceHeader} />

      <main id="main">
        {/* Hero Section */}
        <section className="py-5 services-hero">
          <div className="container" data-aos="fade-up">
            <div className="text-center row justify-content-center">
              <div className="col-lg-8">
                <h2 className="mb-4 display-4 fw-bold">
                  Our Professional Services
                </h2>
                <p className="lead text-muted">
                  Delivering cutting-edge technology solutions with modern web
                  development, healthcare systems, and enterprise management
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-5 services-grid">
          <div className="container">
            <div className="row g-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="col-12"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`service-card ${
                      index % 2 === 0
                        ? "service-card-left"
                        : "service-card-right"
                    }`}
                  >
                    <div className="row align-items-center g-0">
                      <div
                        className={`col-lg-6 ${
                          index % 2 === 1 ? "order-lg-2" : ""
                        }`}
                      >
                        <div className="service-image">
                          <img
                            src={service.image}
                            className="img-fluid rounded-3"
                            alt={service.title}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div
                        className={`col-lg-6 ${
                          index % 2 === 1 ? "order-lg-1" : ""
                        }`}
                      >
                        <div className="p-4 service-content p-lg-5">
                          <div className="mb-3 service-icon">
                            <i
                              className={service.icon}
                              style={{
                                color: service.color,
                                fontSize: "3rem",
                              }}
                            ></i>
                          </div>
                          <h3 className="mb-3 service-title">
                            {service.title}
                          </h3>
                          <p className="mb-4 service-description">
                            {service.description}
                          </p>

                          <div className="mb-4 service-features">
                            <h5 className="mb-3">Key Features:</h5>
                            <ul className="list-unstyled">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="mb-2">
                                  <i
                                    className="bi bi-check-circle-fill me-2"
                                    style={{ color: service.color }}
                                  ></i>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {service.highlights && (
                            <div
                              className="p-3 mb-4 service-highlights rounded-3"
                              style={{ backgroundColor: "#f8f9fa" }}
                            >
                              <strong>{service.highlights}</strong>
                            </div>
                          )}

                          <div className="mt-4">
                            <Link
                              to={`/projects/${service.id}`}
                              className="btn btn-outline-primary me-3"
                              onClick={() => handleViewDetails(service.id)}
                            >
                              <i className="bi bi-eye me-2"></i>
                              View Details
                            </Link>
                            <Link to="/contact" className="btn btn-primary">
                              <i className="bi bi-chat-dots me-2"></i>
                              Get Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-5 services-cta"
          style={{ backgroundColor: "#155bd5" }}
        >
          <div className="container text-center text-white" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="mb-4 display-5 fw-bold">
                  Ready to Transform Your Business?
                </h2>
                <p className="mb-4 lead text-gray-100 fst-italic">
                  Let's discuss how our comprehensive technology solutions can
                  help you achieve your goals and drive innovation in your
                  industry.
                </p>
                <Link to="/contact" className="px-5 py-3 btn btn-light btn-lg">
                  Get Started Today
                  <i className="bi bi-arrow-right ms-2 "></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQ />
      <Footer />
    </>
  );
};

export default React.memo(Service);
