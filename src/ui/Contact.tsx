import React, { useEffect, useState, useRef, useCallback } from "react";

import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import contactHeader from "../img/contact-header.jpg";
import emailjs from 'emailjs-com'
import InnerHeaderBanner from "../Components/InnerHeaderBanner";

interface InputFields {
  username: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  username?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [inputFields, setInputFields] = useState<InputFields>({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { username, email, subject, message } = inputFields;

  const validateValues = useCallback((inputValues: InputFields): ValidationErrors => {
    let errors: ValidationErrors = {};

    if (inputValues.username.length < 2) {
      errors.username = "Username must be at least 2 characters long";
    }
    if (inputValues.email.length < 5 || !/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (inputValues.subject.length < 5) {
      errors.subject = "Subject must be at least 5 characters long";
    }
    if (inputValues.message.length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    return errors;
  }, []);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInputFields(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const validationErrors = validateValues(inputFields);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);
    setSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_k80xoyk', 
        'template_q6z4pl4', 
        form.current!, 
        'yV95_dZd7WA5uN3f7'
      );
      
      // Reset form on successful submission
      setInputFields({
        username: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  const finishSubmit = useCallback(() => {
    console.log('Form submitted successfully:', inputFields);
  }, [inputFields]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting && !isLoading) {
      finishSubmit();
      // Reset submitting state after a delay to show success message
      const timer = setTimeout(() => setSubmitting(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [errors, submitting, isLoading, finishSubmit]);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Contact Us"} img={contactHeader} />
      <main id="main">
        <section id="contact" className="contact">
          <div className="container position-relative" data-aos="fade-up">
            <div className="section-header">
              <h2> Lets have a TALK </h2>
            </div>

            <div className="row gy-4 d-flex justify-content-end">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <div className="info-item d-flex">
                  <i className="flex-shrink-0 bi bi-geo-alt"></i>
                  <div>
                    <h4>Location:</h4>
                    <h5>India:</h5>
                    <p>
                      # 1,Sundaram Illam,Chellamal Street, <br /> Shenoy Nagar,
                      Chennai - 600 030.
                    </p>
                    <br />
                    <h5>U.A.E:</h5>
                    <p>P.O.Box No 95114,Abu Dhabi,UAE </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="flex-shrink-0 bi bi-envelope"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:info@symbioticinfo.com">
                        info@symbioticinfo.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="flex-shrink-0 bi bi-phone"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+91 - 44 - 4208 2102</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <form ref={form} className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        onChange={handleChange}
                        value={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your Name"
                        disabled={isLoading}
                        style={{
                          border: errors.username ? "1px solid red" : undefined,
                        }}
                      />
                      {errors.username && (
                        <small className="error">{errors.username}</small>
                      )}
                    </div>
                    <div className="mt-3 col-md-6 form-group mt-md-0">
                      <input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="E-mail"
                        disabled={isLoading}
                        style={{
                          border: errors.email ? "1px solid red" : undefined,
                        }}
                      />
                      {errors.email && (
                        <small className="error">{errors.email}</small>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 form-group">
                    <input
                      onChange={handleChange}
                      value={subject}
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      disabled={isLoading}
                      style={{ border: errors.subject ? "1px solid red" : undefined }}
                    />
                    {errors.subject && (
                      <small className="error">{errors.subject}</small>
                    )}
                  </div>
                  <div className="mt-3 form-group">
                    <textarea
                      onChange={handleChange}
                      value={message}
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      disabled={isLoading}
                      style={{
                        border: errors.message ? "1px solid red" : undefined,
                      }}
                    ></textarea>
                    {errors.message && (
                      <small className="error">{errors.message}</small>
                    )}
                  </div>

                  <p className="text-center">
                    {Object.keys(errors).length === 0 && submitting && !isLoading && (
                      <div className="p-2 alert alert-success">
                        Successfully submitted ✓
                      </div>
                    )}
                  </p>

                  <div className="text-center">
                    <button 
                      className="btn btn-primary" 
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
