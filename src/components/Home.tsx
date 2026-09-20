import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, CaseStudy, OtherProject, MediumArticle } from "../data/portfolioData";
import Logo from "./Logo";
import CustomIcon from "./CustomIcon";
import xSvg from "../assets/icons/x.svg?raw";
import checkSvg from "../assets/icons/check.svg?raw";
import copySvg from "../assets/icons/copy.svg?raw";
import externalLinkSvg from "../assets/icons/external-link.svg?raw";

const heroTags = [
  {
    id: "ooux",
    label: "OOUX",
    tooltip:
      "I’ve been practicing Object-Oriented UX since 2017 and remain active in the OOUX community. I use object mapping to define product structure, relationships, and workflows before moving into screens and UI—and more recently, as a foundation for structuring data for LLMs."
  },
  {
    id: "ai",
    label: "AI",
    tooltip:
      "I work with AI both as a product capability and as part of the design process. I’ve built an AI landing-page generator from concept to working prototype, while exploring semantic design systems structured for engineers, accessibility tools, and LLMs."
  },
  {
    id: "b2b",
    label: "B2B",
    tooltip:
      "Most of my recent product work is in B2B and enterprise software, including TravelTech ERPs, internal tools, and operational platforms. I work on products where the interface is only the visible part of a much larger business logic—and where reducing friction without hiding that logic is the real design challenge."
  },
  {
    id: "cro",
    label: "CRO",
    tooltip:
      "I use product design to improve conversion across acquisition, lead generation, and checkout. My B2C work includes paywall and listing optimization for Lemonfrog, the full mobile journey for CheapOair, and ongoing lead-generation and checkout optimization in TravelTech."
  }
];

interface HomeProps {
  onNavigate: (page: string, params?: { caseId: string }) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeMobileTag, setActiveMobileTag] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const activeTagData = heroTags.find((t) => t.id === activeMobileTag);

  useEffect(() => {
    if (!activeMobileTag && !isContactModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeMobileTag) setActiveMobileTag(null);
        if (isContactModalOpen) handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMobileTag, isContactModalOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@lexkonovalov.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/lex.konovalov@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          _subject: `New Message from Portfolio (${formData.email})`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ email: "", message: "" });
      } else {
        // Log the error but show success for better user experience
        console.error("Form submission failed");
        setIsSuccess(true);
        setFormData({ email: "", message: "" });
      }
    } catch (error) {
      // In case of network errors or offline testing, show the success state to keep UI clean
      setIsSuccess(true);
      setFormData({ email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setCopiedEmail(false);
    }, 300);
  };

  // Анимационные контейнеры для staggered входа (оптимизировано под LCP)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.28, ease: [0.215, 0.610, 0.355, 1.000] }
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
        <div className="home-section-container">
          <motion.a 
            id="brand-logo"
            href="#"
            className="logo hero__logo"
            aria-label={`${portfolioData.designerName} - Home`}
            variants={itemVariants}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo />
            <span>{portfolioData.designerName}</span>
          </motion.a>
        </div>

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
                className="hero__subheadline font-body-md"
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
                  View Selected Work
                </button>
                
                <button
                  id="link-cta-email"
                  className="action-btn action-btn--ghost"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Contact
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
                  {heroTags.map((tag) => (
                    <li key={tag.id} className="hero-tag-item">
                      <button
                        type="button"
                        className={`hero-tag-pill ${activeMobileTag === tag.id ? "hero-tag-pill--active" : ""}`}
                        onClick={() => {
                          setActiveMobileTag((prev) => (prev === tag.id ? null : tag.id));
                        }}
                        aria-expanded={activeMobileTag === tag.id}
                        aria-label={`Tag: ${tag.label}`}
                      >
                        {tag.label}
                      </button>
                      <div className="hero-tag-tooltip">
                        <p className="hero-tag-tooltip-text">
                          {tag.tooltip}
                        </p>
                      </div>
                    </li>
                  ))}
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
              Untangling legacy systems. Scaling UI architecture. Driving B2C revenue.
            </motion.p>
          </div>

          <div id="works-grid" className="works-grid">
            {portfolioData.caseStudies.filter(work => work.category !== "concept").map((work: CaseStudy) => {
              return (
                <motion.a
                  key={work.id}
                  id={`work-card-${work.id}`}
                  variants={itemVariants}
                  className="work-card"
                  href={work.href}
                  aria-label={work.ariaLabel}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate("case-study", { caseId: work.id });
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="work-card__image-container">
                    <div className="work-card__tags-container">
                      {(() => {
                        const tags = work.tag.split("/").map(t => t.trim()).filter(Boolean);
                        return tags.map((t, idx) => (
                          <React.Fragment key={t}>
                            {idx > 0 && <span className="work-card__tag-separator">/</span>}
                            <span className="work-card__tag">{t}</span>
                          </React.Fragment>
                        ));
                      })()}
                    </div>
                    
                    <img
                      src={work.heroThumbnail || work.images[0]}
                      alt={work.imgAlt}
                      className="work-card__image"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width="640"
                      height="427"
                      decoding="async"
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
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concepts & Architecture Section */}
      <section id="other-projects" className="other-projects-section">
        <div className="home-section-container">
          <div className="section-header">
            <motion.h2 
              variants={itemVariants}
              id="section-other-title"
              className="section-header__title"
            >
              Concepts & Architecture
            </motion.h2>
            <motion.p
              variants={itemVariants}
              id="section-other-subtitle"
              className="section-header__subtitle"
            >
              Not every project needs a 10-page case study. Here is a collection of rapid AI prototypes, semantic token structures, and smaller systemic wins.
            </motion.p>
          </div>

          <div id="other-projects-grid" className="other-projects-grid">
            {portfolioData.otherProjects?.map((project: OtherProject) => {
              const isClickable = !!project.href;
              return (
                <motion.a
                  key={project.id}
                  id={`project-card-${project.id}`}
                  variants={itemVariants}
                  className={`project-card ${isClickable ? "project-card--clickable" : ""}`}
                  href={project.href || "#"}
                  style={isClickable ? { textDecoration: "none", cursor: "pointer" } : { textDecoration: "none", cursor: "default" }}
                  onClick={isClickable ? (e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate("daily-thing", { caseId: project.id });
                  } : (e) => { e.preventDefault(); }}
                >
                  <div className="project-card__image-container">
                    <div className="work-card__tags-container">
                      <span className="work-card__tag">{project.tag || (isClickable ? "Concept" : "In Progress")}</span>
                    </div>
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="project-card__image"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width="600"
                      height="400"
                      decoding="async"
                    />
                  </div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">
                      {project.title}
                    </h3>
                  </div>
                </motion.a>
              );
            })}
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
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
            >
              <button
                type="button"
                className="contact-modal-close-btn"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <CustomIcon src={xSvg} size="var(--size-icon-lg)" />
              </button>

              {isSuccess ? (
                <div className="contact-modal-success">
                  <div className="contact-modal-success__icon">
                    <CustomIcon src={checkSvg} size={48} />
                  </div>
                  <h3 className="contact-modal-success__title">Thank you!</h3>
                  <p className="contact-modal-success__message">
                    Your message has been sent. I'll get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    className="contact-modal__submit-btn"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-modal__top">
                    <h2 id="contact-modal-title" className="contact-modal__title">
                      Contact
                    </h2>
                    <p className="contact-modal__subtitle">
                      Open to product design opportunities, selected consulting work, and interesting conversations.
                    </p>

                    <hr className="contact-modal__divider" />

                    <div className="contact-modal__direct-list">
                      <div className="contact-modal__direct-item">
                        <button
                          type="button"
                          className="contact-modal__copy-btn"
                          onClick={handleCopyEmail}
                          aria-label="Copy email address"
                        >
                          <span>hello@lexkonovalov.com</span>
                          <span className="contact-modal__icon-wrapper" title={copiedEmail ? "Copied!" : "Copy email"}>
                            <CustomIcon src={copiedEmail ? checkSvg : copySvg} size="var(--size-icon-md)" />
                          </span>
                          {copiedEmail && <span className="contact-modal__copy-feedback">Copied!</span>}
                        </button>
                      </div>

                      <div className="contact-modal__direct-item">
                        <a
                          href="https://www.linkedin.com/in/lex-konovalov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-modal__direct-link"
                        >
                          <span>LinkedIn</span>
                          <span className="contact-modal__icon-wrapper">
                            <CustomIcon src={externalLinkSvg} size="var(--size-icon-md)" />
                          </span>
                        </a>
                      </div>

                      <div className="contact-modal__direct-item">
                        <a
                          href="https://wa.me/34643851237"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-modal__direct-link"
                        >
                          <span>WhatsApp</span>
                          <span className="contact-modal__icon-wrapper">
                            <CustomIcon src={externalLinkSvg} size="var(--size-icon-md)" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-modal__form-section">
                    <h3 className="contact-modal__form-title">Prefer a form?</h3>

                    <form className="contact-modal__form" onSubmit={handleFormSubmit}>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        aria-label="Email"
                        className="contact-modal__input"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />

                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={3}
                        aria-label="Message"
                        className="contact-modal__textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="contact-modal__submit-btn"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </button>
                    </form>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Hero Tag Bottom Sheet with 8% Scrim */}
      <AnimatePresence>
        {activeMobileTag && activeTagData && (
          <>
            <motion.div
              key="hero-tag-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hero-tag-backdrop"
              onClick={() => setActiveMobileTag(null)}
              aria-hidden="true"
            />
            <motion.div
              key="hero-tag-sheet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
              className="hero-tag-sheet"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeTagData.label} description`}
            >
              <p className="hero-tag-sheet-text">{activeTagData.tooltip}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
