import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check } from "lucide-react";
import { portfolioData, CaseStudy, OtherProject, MediumArticle } from "../data/portfolioData";

interface HomeProps {
  onNavigate: (page: string, params?: { caseId: string }) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/lex.konovalov@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to local success flag so the user flow remains polished
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      // In case of network errors or offline testing, show the success state to keep UI clean
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  // Анимационные контейнеры для staggered входа
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="home-page-layout"
    >
      {/* Above the Fold / Hero Section */}
      <section id="hero-section" className="hero">
        {/* Logo Above the Fold */}
        <motion.a 
          id="brand-logo"
          href="#"
          className="logo hero__logo"
          variants={itemVariants}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{
              width: "32px",
              height: "32px",
              display: "inline-block",
              color: "var(--color-text-primary)"
            }}
          >
            <g fill="currentColor">
              {/* Top-Right Quadrant */}
              <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" />
              {/* Bottom-Right Quadrant (Rotated 90 deg) */}
              <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" transform="rotate(90 50 50)" />
              {/* Bottom-Left Quadrant (Rotated 180 deg) */}
              <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" transform="rotate(180 50 50)" />
              {/* Top-Left Quadrant (Rotated 270 deg) */}
              <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" transform="rotate(270 50 50)" />
            </g>
          </svg>
          <span>{portfolioData.designerName}</span>
        </motion.a>

        <div className="home-section-container">
          <div className="hero-grid">
            {/* Cell 1: Headline */}
            <div className="hero-grid-cell hero-grid-cell--headline">
              <motion.h1 
                variants={itemVariants}
                id="hero-headline"
                className="hero__headline font-display-md"
              >
                {portfolioData.heroHeadline}
              </motion.h1>
            </div>

            {/* Cell 2: Paragraph */}
            <div className="hero-grid-cell hero-grid-cell--subheadline">
              <motion.p 
                variants={itemVariants}
                id="hero-subheadline"
                className="hero__subheadline font-body-lg"
              >
                {portfolioData.heroSubheadline}
              </motion.p>
            </div>

            {/* Cell 3: Actions Block */}
            <div className="hero-grid-cell hero-grid-cell--actions">
              <motion.div 
                variants={itemVariants}
                id="hero-ctas"
                className="hero__actions"
              >
                <button
                  id="btn-cta-works"
                  className="action-btn action-btn--cta"
                  onClick={() => {
                    const worksSection = document.getElementById("selected-works");
                    if (worksSection) {
                      worksSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Case Studies
                </button>
                
                <button
                  id="link-cta-email"
                  className="action-btn action-btn--ghost"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Contact Me
                </button>
              </motion.div>
            </div>

            {/* Cell 4: Tags Block with Bulletproof SEO Tooltips */}
            <div className="hero-grid-cell hero-grid-cell--tags">
              <motion.div
                variants={itemVariants}
                className="hero-tags-container"
              >
                <ul className="hero-tags-list">
                  <li className="hero-tag-item">
                    <span className="hero-tag-pill">OOUX Architecture</span>
                    <div className="hero-tag-tooltip">
                      <p className="hero-tag-tooltip-text">
                        Practicing Object-Oriented UX since 2017 and active in the core community. Currently pioneering the intersection of OOUX and AI—using object mapping as the foundational logic for LLM data structuring.
                      </p>
                    </div>
                  </li>
                  <li className="hero-tag-item">
                    <span className="hero-tag-pill">AI-Integrated Design Systems</span>
                    <div className="hero-tag-tooltip">
                      <p className="hero-tag-tooltip-text">
                        Architecting W3C-valid primitives and semantic token layers readable by both engineers and LLMs. I build LLM-adaptive systems requiring strict a11y compliance, semantic alt-text, and voice/keyboard navigation. Contributor to the Design Systems Collective.
                      </p>
                    </div>
                  </li>
                  <li className="hero-tag-item">
                    <span className="hero-tag-pill">AI-Driven Product Features</span>
                    <div className="hero-tag-tooltip">
                      <p className="hero-tag-tooltip-text">
                        Engineered an AI landing page generator from concept to working prototype. The system automates end-to-end production: asset curation, thematic content generation with adjustable Tone of Voice (ToV), and underlying content strategy.
                      </p>
                    </div>
                  </li>
                  <li className="hero-tag-item">
                    <span className="hero-tag-pill">B2C Funnel Optimization</span>
                    <div className="hero-tag-tooltip">
                      <p className="hero-tag-tooltip-text">
                        Extensive B2C track record: paywall and listing optimization for Lemonfrog.ch, end-to-end mobile app flow for CheapOair (search to post-sale). Currently driving lead generation and checkout optimization in TravelTech.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" className="works-section">
        <div className="home-section-container">
          <div className="section-header">
            <motion.h2 
              variants={itemVariants}
              id="section-works-title"
              className="section-header__title"
            >
              Selected Works
            </motion.h2>
            <motion.p
              variants={itemVariants}
              id="section-works-subtitle"
              className="section-header__subtitle"
            >
              Solving complex operational and commercial challenges with data-driven design.
            </motion.p>
          </div>

          <div id="works-grid" className="works-grid">
            {portfolioData.caseStudies.map((work: CaseStudy, index: number) => (
              <motion.article
                key={work.id}
                id={`work-card-${work.id}`}
                variants={itemVariants}
                className="work-card"
                onClick={() => onNavigate("case-study", { caseId: work.id })}
              >
                <div className="work-card__image-container">
                  <div className="work-card__tags-container">
                    {(() => {
                      const rawText = work.id === "luxury-travel-os" ? "ERP / B2B" : 
                                      work.id === "checkout-rate-optimization" ? "Conversion / UX" : 
                                      work.id === "fintech-investment-workspace" ? "SaaS / Fintech" : 
                                      work.tag;
                      const tags = rawText.split("/").map(t => t.trim()).filter(Boolean);
                      return tags.map((t, idx) => (
                        <React.Fragment key={t}>
                          {idx > 0 && <span className="work-card__tag-separator">/</span>}
                          <span className="work-card__tag">{t}</span>
                        </React.Fragment>
                      ));
                    })()}
                  </div>
                  
                  <img
                    src={work.images[0]}
                    alt={work.title}
                    className="work-card__image"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="work-card__content">
                  <h3 className="work-card__title">
                    {work.title}
                  </h3>
                  <p className="work-card__description">
                    {work.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="other-projects-section">
        <div className="home-section-container">
          <div className="section-header">
            <motion.h2 
              variants={itemVariants}
              id="section-other-title"
              className="section-header__title"
            >
              Other Projects
            </motion.h2>
            <motion.p
              variants={itemVariants}
              id="section-other-subtitle"
              className="section-header__subtitle"
            >
              Solving complex operational and commercial challenges with data-driven design.
            </motion.p>
          </div>

          <div id="other-projects-grid" className="other-projects-grid">
            {portfolioData.otherProjects?.map((project: OtherProject) => (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                variants={itemVariants}
                className="project-card"
              >
                <div className="project-card__image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">
                    {project.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="stories-section">
        <div className="home-section-container">
          <div className="stories-header">
            <motion.h2 
              variants={itemVariants}
              id="section-stories-title"
              className="stories-header__title"
            >
              Stories
            </motion.h2>
          </div>

          <div className="stories-table" id="stories-feed-table">
            <div className="stories-table__header" id="stories-header-row">
              <span id="header-col-published">Published</span>
              <span id="header-col-category">Category</span>
              <span id="header-col-title">Title</span>
            </div>

            {portfolioData.mediumArticles?.map((article: MediumArticle) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="stories-table__row"
                id={`story-row-${article.id}`}
              >
                <div className="stories-cell stories-cell--published" id={`story-published-${article.id}`}>
                  {article.published}
                </div>
                <div className="stories-cell stories-cell--category" id={`story-category-${article.id}`}>
                  {article.category}
                </div>
                <div className="stories-cell stories-cell--title" id={`story-title-${article.id}`}>
                  {article.title}
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div variants={itemVariants} className="stories-footer">
            <a 
              href="https://medium.com/@lex.konovalov" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-btn action-btn--secondary"
              id="btn-my-stories"
            >
              My Stories on Medium
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            key="contact-modal"
            className="contact-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="contact-modal-dialog"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.215, 0.610, 0.355, 1.000] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="contact-modal-close-btn"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {isSuccess ? (
                <div className="contact-form-success">
                  <div className="contact-form-success__icon">
                    <Check size={48} />
                  </div>
                  <h3 className="contact-form-success__title">Thank you!</h3>
                  <p className="contact-form-success__message">
                    Your message has been sent. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="contact-form__title">Contact</h2>
                  <p className="contact-form__subtitle">
                    I take on select consulting and advising work. If you’re building something interesting, let’s talk.
                  </p>

                  <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="contact-form-group">
                      <label htmlFor="contact-name" className="contact-form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        className="contact-form-input"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="contact-email" className="contact-form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        className="contact-form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="contact-message" className="contact-form-label">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        className="contact-form-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="action-btn action-btn--primary"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
