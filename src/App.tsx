import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Home from "./components/Home";
import About from "./components/About";
import CaseStudy from "./components/CaseStudy";
import { portfolioData, CaseStudy as CaseStudyType } from "./data/portfolioData";
import { ArrowUp, ArrowLeft } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [bottomOffset, setBottomOffset] = useState<number>(32);
  const [activeTab, setActiveTab] = useState<string>("home");

  // Следим за прокруткой для кнопки "наверх" 
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const distanceFromBottom = scrollHeight - scrollY - clientHeight;

      const requiredOffset = 80 - distanceFromBottom;
      const nextOffset = Math.max(32, requiredOffset);
      setBottomOffset(nextOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Синхронизация активной вкладки с переключением страниц
  useEffect(() => {
    if (currentPage === "about") {
      setActiveTab("about");
    } else {
      setActiveTab("home");
    }
  }, [currentPage]);

  const navigateTo = (page: string, params?: { caseId: string }) => {
    if (page === "case-study" && params?.caseId) {
      setSelectedCaseId(params.caseId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectedWorksNav = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage !== "home") {
      setCurrentPage("home");
      // Небольшая задержка, чтобы страница перестроилась
      setTimeout(() => {
        const section = document.getElementById("selected-works");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById("selected-works");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const selectedCase = portfolioData.caseStudies.find(
    (c) => c.id === selectedCaseId
  ) || portfolioData.caseStudies[0];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      {/* Floating Navigation Pill */}
      {currentPage !== "case-study" ? (
        <nav id="floating-nav" className="floating-nav">
          {activeTab === "home" ? (
            <span
              id="float-nav-home"
              className="floating-nav__link floating-nav__link--disabled"
            >
              Home
            </span>
          ) : (
            <a
              id="float-nav-home"
              href="#"
              className="floating-nav__link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("home");
              }}
            >
              Home
            </a>
          )}

          <div className="floating-nav__divider" />

          {activeTab === "about" ? (
            <span
              id="float-nav-about"
              className="floating-nav__link floating-nav__link--disabled"
            >
              About
            </span>
          ) : (
            <a
              id="float-nav-about"
              href="#"
              className="floating-nav__link"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("about");
              }}
            >
              About
            </a>
          )}
        </nav>
      ) : (
        <button
          id="floating-back-nav"
          className="floating-nav floating-nav--left"
          onClick={() => navigateTo("home")}
          style={{ cursor: "pointer", display: "inline-flex", gap: "10px", textDecoration: "none" }}
        >
          <ArrowLeft size={16} style={{ color: "var(--color-text-primary)" }} />
          <span className="floating-nav__link" style={{ textDecoration: "none" }}>Back to Home</span>
        </button>
      )}

      {/* Primary Dynamic Content Frame */}
      <main id="main-content-frame" style={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Home onNavigate={navigateTo} />
            </motion.div>
          )}

          {currentPage === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <About onNavigate={navigateTo} />
            </motion.div>
          )}

          {currentPage === "case-study" && (
            <motion.div
              key={`case-${selectedCaseId}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <CaseStudy
                caseStudy={selectedCase}
                onBack={() => navigateTo("home")}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Universal Footer */}
      <footer id="app-footer" className="footer">
        <div className="portfolio__container footer__container-simple">
          <div className="footer__left" id="footer-left-meta">
            <span className="footer__copyright">© Lex Konovalov</span>
            <span className="footer__separator">/</span>
            <span className="footer__year">2026</span>
          </div>
          <div className="footer__right" id="footer-right-links">
            <a
              href="#"
              className="footer__link-simple"
              id="footer-link-cv"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("about");
              }}
            >
              CV
            </a>
            <span className="footer__separator">/</span>
            <a
              href={`mailto:${portfolioData.email}`}
              className="footer__link-simple"
              id="footer-link-email"
            >
              lex.konovalov@gmail.com
            </a>
            <span className="footer__separator">/</span>
            <a
              href={portfolioData.socialLinks.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link-simple"
              id="footer-link-linkedin"
            >
              Linkedin
            </a>
          </div>
        </div>
      </footer>

      {/* Elevating Floating Button (Scroll to top) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleScrollToTop}
            style={{
              position: "fixed",
              bottom: `${bottomOffset}px`,
              right: "2rem",
              width: "48px",
              height: "48px",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--color-action-primary-default)",
              color: "var(--color-text-on-action)",
              boxShadow: "0 8px 16px rgba(18, 18, 18, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "var(--z-index-sticky)",
              cursor: "pointer"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll to top of page"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
