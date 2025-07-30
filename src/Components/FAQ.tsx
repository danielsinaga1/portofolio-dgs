import React, { useState, useMemo, useCallback } from "react";
import Email from "./Email";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["faq1"])
  );

  // Memoized data to prevent unnecessary re-renders
  const faqData = useMemo<FAQItem[]>(
    () => [
      {
        id: "faq1",
        category: "services",
        icon: "bi-gear-fill",
        question: "What services does PT Teknik Nusantara Kaltim provide?",
        answer:
          "We are a leading technology company specializing in modern web development, mobile applications, system integration, and digital transformation solutions. Our comprehensive services include custom software development, e-commerce platforms, management systems, and technical consulting.",
      },
      {
        id: "faq2",
        category: "design",
        icon: "bi-palette-fill",
        question: "Apakah saya bisa request desain khusus sesuai kebutuhan?",
        answer:
          "Tentu saja! Kami menyediakan layanan custom design yang sepenuhnya disesuaikan dengan identitas brand dan kebutuhan bisnis Anda. Tim designer kami akan bekerja sama dengan Anda untuk menciptakan desain yang unik dan menarik.",
      },
      {
        id: "faq3",
        category: "project",
        icon: "bi-graph-up-arrow",
        question: "Apakah saya bisa memantau progres proyek?",
        answer:
          "Ya, transparansi adalah prioritas kami. Kami akan memberikan update berkala melalui project dashboard, regular meetings, dan akses ke project tracking system sehingga Anda dapat memantau progress secara real-time.",
      },
      {
        id: "faq4",
        category: "support",
        icon: "bi-tools",
        question:
          "Apakah tersedia support dan maintenance setelah website selesai?",
        answer:
          "Kami menyediakan paket maintenance dan support komprehensif termasuk technical support 24/7, regular updates, security monitoring, backup management, dan performance optimization sesuai dengan paket yang Anda pilih.",
      },
      {
        id: "faq5",
        category: "mobile",
        icon: "bi-phone-fill",
        question: "Apakah bisa dibuatkan aplikasi mobile juga?",
        answer:
          "Tentu! Kami memiliki expertise dalam pengembangan aplikasi mobile untuk platform Android dan iOS. Kami menggunakan teknologi terkini seperti React Native dan Flutter untuk menciptakan aplikasi yang berkualitas tinggi dan user-friendly.",
      },
      {
        id: "faq6",
        category: "contact",
        icon: "bi-envelope-fill",
        question: "How can I contact PT Teknik Nusantara Kaltim?",
        answer:
          "Anda dapat menghubungi kami melalui berbagai channel: kunjungi kantor kami di Jl. Kapal Tanker I No.10, Perum. Griya Temputu, Loktuan, Bontang - Kaltim, email ke tekniknusantarakaltim@gmail.com, atau telepon di +62-811-540-287. Tim kami siap membantu Anda!",
      },
    ],
    []
  );

  const categories = useMemo<Category[]>(
    () => [
      { id: "all", name: "All Categories", icon: "bi-grid-fill" },
      { id: "services", name: "Services", icon: "bi-gear-fill" },
      { id: "design", name: "Design", icon: "bi-palette-fill" },
      { id: "project", name: "Project", icon: "bi-graph-up-arrow" },
      { id: "support", name: "Support", icon: "bi-tools" },
      { id: "mobile", name: "Mobile", icon: "bi-phone-fill" },
      { id: "contact", name: "Contact", icon: "bi-envelope-fill" },
    ],
    []
  );

  const stats = useMemo(
    () => [
      {
        number: "50+",
        label: "Projects Completed",
        icon: "bi-check-circle-fill",
      },
      { number: "100%", label: "Client Satisfaction", icon: "bi-heart-fill" },
      { number: "24/7", label: "Support Available", icon: "bi-headset" },
      { number: "5+", label: "Years Experience", icon: "bi-star-fill" },
    ],
    []
  );

  // Optimized filtering with useMemo to prevent unnecessary computations
  const filteredFAQs = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return faqData.filter((faq) => {
      const matchesSearch =
        !searchTerm ||
        faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower);
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [faqData, searchTerm, selectedCategory]);

  // Optimized event handlers with useCallback
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  const toggleExpanded = useCallback((id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  return (
    <>
      {/* FAQ Statistics */}
      <StatsSection stats={stats} />

      {/* Main FAQ Section */}
      <section id="faq" className="py-5 faq">
        <div className="container" data-aos="fade-up">
          <div className="mb-5 text-center section-header">
            <h2 className="mb-3 display-4 fw-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="lead text-muted">
              Find answers to common questions about our services and solutions
            </p>
          </div>

          {/* Search and Filter Section */}
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* FAQ Results */}
          <FAQResults
            filteredFAQs={filteredFAQs}
            expandedItems={expandedItems}
            onToggleExpanded={toggleExpanded}
          />

          {/* CTA Section */}
          <CTASection />
        </div>
      </section>
    </>
  );
};

// Memoized sub-components for better performance
const StatsSection: React.FC<{
  stats: Array<{ number: string; label: string; icon: string }>;
}> = React.memo(({ stats }) => (
  <section className="py-5 faq-stats" style={{ backgroundColor: "#f8f9fa" }}>
    <div className="container">
      <div className="row g-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="p-4 text-center bg-white shadow-sm stat-card h-100 rounded-4">
              <div className="mb-3 stat-icon">
                <i
                  className={`${stat.icon} text-primary`}
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <h3 className="mb-2 stat-number text-primary fw-bold">
                {stat.number}
              </h3>
              <p className="mb-0 stat-label text-muted">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

const SearchAndFilter: React.FC<{
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}> = React.memo(
  ({
    searchTerm,
    onSearchChange,
    categories,
    selectedCategory,
    onCategoryChange,
  }) => (
    <div className="mb-5 faq-controls">
      <div className="row g-3 align-items-center">
        <div className="col-lg-6">
          <div className="search-box position-relative">
            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            <input
              type="text"
              className="form-control form-control-lg ps-5 rounded-pill"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={onSearchChange}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="flex-wrap gap-2 category-filters d-flex">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`btn btn-sm rounded-pill ${
                  selectedCategory === category.id
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => onCategoryChange(category.id)}
              >
                <i className={`${category.icon} me-1`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
);

const FAQResults: React.FC<{
  filteredFAQs: FAQItem[];
  expandedItems: Set<string>;
  onToggleExpanded: (id: string) => void;
}> = React.memo(({ filteredFAQs, expandedItems, onToggleExpanded }) => (
  <div className="row justify-content-center">
    <div className="col-lg-10">
      {filteredFAQs.length === 0 ? (
        <NoResultsView />
      ) : (
        <div className="faq-accordion">
          {filteredFAQs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isExpanded={expandedItems.has(faq.id)}
              onToggle={() => onToggleExpanded(faq.id)}
            />
          ))}
        </div>
      )}
    </div>
  </div>
));

// eslint-disable-next-line @typescript-eslint/no-redeclare
const FAQItem: React.FC<{
  faq: FAQItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}> = React.memo(({ faq, index, isExpanded, onToggle }) => (
  <div className="mb-3 faq-item" data-aos="fade-up" data-aos-delay={index * 50}>
    <div className="overflow-hidden bg-white shadow-sm faq-card rounded-4">
      <div
        className="p-4 cursor-pointer faq-header"
        onClick={onToggle}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex align-items-center">
          <div className="faq-icon me-3">
            <i
              className={`${faq.icon} text-primary`}
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
          <h5 className="mb-0 faq-question flex-grow-1">{faq.question}</h5>
          <div className="faq-toggle">
            <i
              className={`bi ${
                isExpanded ? "bi-chevron-up" : "bi-chevron-down"
              } text-primary`}
            ></i>
          </div>
        </div>
      </div>
      <div className={`faq-body ${isExpanded ? "show" : ""}`}>
        <div className="p-4 pt-0 faq-content">
          <div className="faq-answer">
            <p className="mb-0 text-muted">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const NoResultsView: React.FC = () => (
  <div className="py-5 text-center">
    <i className="bi bi-search text-muted" style={{ fontSize: "4rem" }}></i>
    <h4 className="mt-3 text-muted">No questions found</h4>
    <p className="text-muted">Try adjusting your search terms or filters</p>
  </div>
);

const CTASection: React.FC = () => (
  <div
    className="p-5 mt-5 text-center text-white faq-cta bg-primary rounded-4"
    data-aos="fade-up"
  >
    <h3 className="mb-3">Still have questions?</h3>
    <p className="mb-4">
      Can't find the answer you're looking for? Please chat with our friendly
      team.
    </p>
    <Email
      mailto="tekniknusantarakaltim@gmail.com"
      subject="FAQ Inquiry"
      body="Hi, I have a question about your services..."
      className="px-4 btn btn-light btn-lg text-decoration-none"
    >
      <i className="bi bi-chat-dots-fill me-2"></i>
      Get in Touch
    </Email>
  </div>
);

export default React.memo(FAQ);
