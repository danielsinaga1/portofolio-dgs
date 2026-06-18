import React, { useState, useRef, useCallback, useEffect } from "react";
import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import ClientList from "../Components/ClientList";
import Facts from "../Components/Facts";
import Credentials from "../Components/Credentials";
import Revenue from "../Components/Revenue";
import { contactDetails, socialMediaUrl } from "../Components/Details";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [inputFields, setInputFields] = useState({ username: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputFields(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }, [errors]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (inputFields.username.length < 2) newErrors.username = "Name is required";
    if (!/\S+@\S+\.\S+/.test(inputFields.email)) newErrors.email = "Valid email is required";
    if (inputFields.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setIsLoading(true);
    try {
      await emailjs.sendForm('service_k80xoyk', 'template_q6z4pl4', form.current!, 'yV95_dZd7WA5uN3f7');
      setInputFields({ username: "", email: "", subject: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error('Email sending failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2>Contact Me</h2>
        </div>
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-card">
              <h3>Let's work together</h3>
              <p>Feel free to reach out for collaborations, job opportunities, or just to say hello!</p>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-envelope" /></div>
                  <div>
                    <h5>Email</h5>
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-phone" /></div>
                  <div>
                    <h5>Phone</h5>
                    <span>{contactDetails.phone}</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-linkedin" /></div>
                  <div>
                    <h5>LinkedIn</h5>
                    <a href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer noopener">Daniel Giovanni Sinaga</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><i className="bi bi-github" /></div>
                  <div>
                    <h5>GitHub</h5>
                    <a href={socialMediaUrl.github} target="_blank" rel="noreferrer noopener">danielsinaga1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              {success && <div className="alert alert-success">Message sent successfully!</div>}
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" name="username" className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    placeholder="Your Name" value={inputFields.username} onChange={handleChange} disabled={isLoading} />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Your Email" value={inputFields.email} onChange={handleChange} disabled={isLoading} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-12">
                  <input type="text" name="subject" className="form-control"
                    placeholder="Subject" value={inputFields.subject} onChange={handleChange} disabled={isLoading} />
                </div>
                <div className="col-12">
                  <textarea name="message" className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows={5} placeholder="Your Message" value={inputFields.message} onChange={handleChange} disabled={isLoading} />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                <div className="col-12">
                  <button type="submit" className="btn-submit" disabled={isLoading}>
                    {isLoading ? <><i className="bi bi-arrow-repeat spin me-2" />Sending...</> : <><i className="bi bi-send me-2" />Send Message</>}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top-btn${visible ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up" />
    </button>
  );
};

const Home = () => {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <InnerHeader />
      <Carousel />
      <main id="main">
        <ClientList />
        <Facts />
        <Credentials />
        <Revenue />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
