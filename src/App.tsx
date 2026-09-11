import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "motion/react";
import Home from "./components/Home";
const About = lazy(() => import("./components/About"));
const CaseStudy = lazy(() => import("./components/CaseStudy"));
const DailyThing = lazy(() => import("./components/DailyThing"));
const JobsApp = lazy(() => import("./components/jobs/JobsApp"));
import { portfolioData, CaseStudy as CaseStudyType } from "./data/portfolioData";
import CustomIcon from "./components/CustomIcon";
import arrowUpSvg from "./assets/icons/arrow-up.svg?raw";
import arrowLeftSvg from "./assets/icons/arrow-left.svg?raw";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [bottomOffset, setBottomOffset] = useState<number>(32);
  const [activeTab, setActiveTab] = useState<string>("home");

  // Sync state with clean URL path on load and popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      // Remove trailing slash except for root /
      const relativePath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;

      if (relativePath.startsWith("/daily-thing/")) {
        const rawId = relativePath.replace("/daily-thing/", "");
        const caseId = rawId.replace(/\.html$/, "");
        setCurrentPage("daily-thing");
        setSelectedCaseId(caseId);
      } else if (relativePath.startsWith("/cases/")) {
        const rawId = relativePath.replace("/cases/", "");
        const caseId = rawId.replace(/\.html$/, "");
        setCurrentPage("case-study");
        setSelectedCaseId(caseId);
      } else if (relativePath === "/jobs") {
        setCurrentPage("jobs");
        setSelectedCaseId(null);
      } else if (relativePath === "/about") {
        setCurrentPage("about");
        setSelectedCaseId(null);
      } else {
        setCurrentPage("home");
        setSelectedCaseId(null);
      }
    };

    handleLocationChange();

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

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

  // Dynamic document.title, meta description, canonical, and og:url for SPA SEO
  useEffect(() => {
    let title = "Oleksandr Konovalov — Lead Product Designer";
    let description = "Lead Product Designer. I use Object-Oriented UX to map dense B2B platforms, and data to optimize B2C checkouts. Based in the EU.";
    let canonicalUrl = "https://lexkonovalov.com/";

    if (currentPage === "about") {
      title = "About Lex Konovalov — Lead Product Designer";
      description = "Read about Lead Product Designer Lex Konovalov's professional DNA, pragmatic product design toolkit, and the pre-emptive interview answers regarding time zones, OOUX, and legacy systems.";
      canonicalUrl = "https://lexkonovalov.com/about/";
    } else if (currentPage === "case-study" && selectedCaseId) {
      const caseData = portfolioData.caseStudies.find(c => c.id === selectedCaseId);
      if (caseData) {
        title = `${caseData.pageTitle} — Lex Konovalov`;
        description = caseData.description;
        canonicalUrl = `https://lexkonovalov.com/cases/${selectedCaseId}.html`;
      }
    } else if (currentPage === "daily-thing" && selectedCaseId) {
      const dailyData = portfolioData.dailyThings?.find(d => d.id === selectedCaseId);
      if (dailyData) {
        title = `${dailyData.pageTitle} — Lex Konovalov`;
        description = dailyData.description;
        canonicalUrl = `https://lexkonovalov.com/daily-thing/${selectedCaseId}.html`;
      }
    } else if (currentPage === "jobs") {
      title = "ATS Google Dorking Engine — Lex Konovalov";
      description = "Direct ATS job query builder & boolean Google dorking engine for UX/Product designers.";
      canonicalUrl = "https://lexkonovalov.com/jobs/";
    }

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (currentPage === "jobs") {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else if (robotsMeta) {
      robotsMeta.setAttribute("content", "index, follow");
    }
  }, [currentPage, selectedCaseId]);

  const navigateTo = (page: string, params?: { caseId: string }) => {
    let targetPath = "/";
    if (page === "about") {
      targetPath = "/about/";
    } else if (page === "jobs") {
      targetPath = "/jobs/";
    } else if (page === "daily-thing" && params?.caseId) {
      const cleanId = params.caseId.replace(/\.html$/, "");
      targetPath = `/daily-thing/${cleanId}.html`;
    } else if (page === "case-study" && params?.caseId) {
      const cleanId = params.caseId.replace(/\.html$/, "");
      targetPath = `/cases/${cleanId}.html`;
    }

    window.history.pushState(null, "", targetPath);

    if ((page === "case-study" || page === "daily-thing") && params?.caseId) {
      const cleanId = params.caseId.replace(/\.html$/, "");
      setSelectedCaseId(cleanId);
    } else {
      setSelectedCaseId(null);
    }
    setCurrentPage(page);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectedWorksNav = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage !== "home") {
      window.history.pushState(null, "", "/");
      setCurrentPage("home");
      setSelectedCaseId(null);
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

  const selectedDailyThing = portfolioData.dailyThings.find(
    (d) => d.id === selectedCaseId
  ) || portfolioData.dailyThings[0];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      {/* Floating Navigation Pill */}
      {currentPage !== "case-study" && currentPage !== "daily-thing" && currentPage !== "jobs" ? (
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
      ) : currentPage !== "jobs" ? (
        <button
          id="floating-back-nav"
          className="floating-nav floating-nav--left"
          onClick={() => navigateTo("home")}
        >
          <CustomIcon src={arrowLeftSvg} size={16} />
          <span className="floating-nav__link">Back to Home</span>
        </button>
      ) : null}

      {/* Primary Dynamic Content Frame */}
      <main id="main-content-frame" style={{ flexGrow: 1 }}>
        <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
          <AnimatePresence mode="wait">
            {currentPage === "home" && (
              <motion.div
                key="home"
                initial={false}
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

          {currentPage === "daily-thing" && (
            <motion.div
              key={`daily-${selectedCaseId}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <DailyThing
                dailyThing={selectedDailyThing}
                onBack={() => navigateTo("home")}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === "jobs" && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <JobsApp onBack={() => navigateTo("home")} />
            </motion.div>
          )}
        </AnimatePresence>
        </Suspense>
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
              href="https://drive.google.com/file/d/1FhjXjKfXXz1LNfjsxeG2QOKaDGeAD1hk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link-simple"
              id="footer-link-cv"
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
              href={portfolioData.socialLinks.find((s) => s.name === "LinkedIn")?.url || "https://www.linkedin.com/in/lex-konovalov/"}
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
            className="scroll-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleScrollToTop}
            style={{ bottom: `${bottomOffset}px` }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll to top of page"
          >
            <CustomIcon src={arrowUpSvg} size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
