import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import Logo from "./Logo";
import CustomIcon from "./CustomIcon";
import portraitImg from "../assets/images/profile/portrait.jpg";
import workspaceImg from "../assets/images/profile/workspace.jpg";

import downloadSvg from "../assets/icons/download.svg?raw";
import checkCircleSvg from "../assets/icons/check-circle.svg?raw";
import shipSvg from "../assets/icons/My Pragmatic Toolkit/Ship Measure Iterate.svg?raw";
import compassSvg from "../assets/icons/My Pragmatic Toolkit/Architecture Before Pixels.svg?raw";
import workflowSvg from "../assets/icons/My Pragmatic Toolkit/Modular Design Process.svg?raw";
import zapSvg from "../assets/icons/My Pragmatic Toolkit/Rapid AI Prototyping.svg?raw";
import brainSvg from "../assets/icons/My Pragmatic Toolkit/Cognitive Minimalism.svg?raw";
import lineChartSvg from "../assets/icons/My Pragmatic Toolkit/Obsessive Data Coverage.svg?raw";
import layersSvg from "../assets/icons/My Pragmatic Toolkit/Semantic Design Systems.svg?raw";
import timerSvg from "../assets/icons/My Pragmatic Toolkit/The Quantum Physics of Time.svg?raw";
import accessibilitySvg from "../assets/icons/My Pragmatic Toolkit/Embracing Legacy Systems.svg?raw";

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [cvSuccessMessage, setCvSuccessMessage] = useState(false);
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
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

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setCvSuccessMessage(true);
    setTimeout(() => {
      setCvSuccessMessage(false);
    }, 4500);
  };

  const toggleFaqItem = (index: number) => {
    setExpandedIndices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "What is your core design specialization?",
      answer: "I am a Senior Product Designer specializing in Travel Tech, Enterprise SaaS, and B2B Operational UX (ERPs). I focus on translating complex database logic into highly efficient, keyboard-first interfaces."
    },
    {
      question: "How does your marketing background influence your UX decisions?",
      answer: "It aligns design decisions with business KPIs. Under my 'Metrics over Pixels' philosophy, I design to improve business metrics like Revenue Per User (RPU) and operational efficiency."
    },
    {
      question: "What is your experience with travel industry infrastructure (GDS)?",
      answer: "I have hands-on experience with GDS (Amadeus, Sabre), PNR lifecycles, and post-booking operations (ticketing, refunds, ADMs), turning legacy constraints into frictionless user experiences."
    },
    {
      question: "Are you legally authorized to work in the EU or Germany?",
      answer: "Yes, I am based in Spain with EU Temporary Protection. I am eligible for fast-track work authorization in Germany under Paragraph 24 (§ 24 AufenthG), requiring no standard visa sponsorship."
    },
    {
      question: "How do you collaborate with engineering teams?",
      answer: "I build tokenized Design Systems for engineering autonomy and build functional prototypes in code (using Cursor/AI IDEs) to validate complex logic before development."
    },
    {
      question: "How do you approach design trade-offs and tight deadlines?",
      answer: "I prioritize utility and velocity over perfection. I would rather ship a solid, validated MVP and iterate based on real-world data than spend months polishing a hypothesis in isolation."
    }
  ];

  const leftColItems = faqItems.slice(0, 3).map((item, idx) => ({ ...item, globalIndex: idx }));
  const rightColItems = faqItems.slice(3, 6).map((item, idx) => ({ ...item, globalIndex: idx + 3 }));

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="about-container-outer"
    >
      {/* Top Header Block for Logo */}
      <header className="about-header-top">
        <div className="home-section-container">
          {/* Logo Above the Fold */}
          <motion.a 
            id="brand-logo-about"
            href="#"
            className="logo"
            variants={itemVariants}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate("home");
            }}
          >
            <Logo />
            <span>{portfolioData.designerName}</span>
          </motion.a>
        </div>
      </header>

      {/* Section 1: Above the Fold (ATF) - The Professional DNA */}
      <section id="about-atf-section" className="about-section about-atf-section">
        <div className="home-section-container">
          <motion.h1
            variants={itemVariants}
            className="about-atf-title"
          >
            The Professional DNA
          </motion.h1>

          <div className="about-atf-grid">
            {/* Left Column: Portrait and Download CV Button */}
            <div className="about-atf-left">
              <motion.div variants={itemVariants} className="about-atf-photo-wrapper">
                <img
                  src={portraitImg}
                  alt="Lex Konovalov"
                  className="about-atf-photo-img"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="about-cv-button-container">
                <a
                  href="#"
                  onClick={handleDownloadCV}
                  className="about-atf-cv-btn"
                  id="btn-about-cv"
                >
                  <span>My CV</span>
                  <CustomIcon src={downloadSvg} size={16} />
                </a>
                <AnimatePresence>
                  {cvSuccessMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="about-cv-notif"
                    >
                      <CustomIcon src={checkCircleSvg} size={14} />
                      <span>Oleksandr_Konovalov_CV.pdf downloaded!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Column: Bio Backstory and details */}
            <div className="about-atf-right">
              <motion.h2 variants={itemVariants} className="about-atf-subtitle">
                Marketing Roots & Systemic Thinking
              </motion.h2>
              <motion.p variants={itemVariants} className="about-atf-paragraph">
                My product design career started in 2017, but my foundation was built in marketing for major automotive brands. That background wired my brain to rely on historical data, potential metrics, and strict processes to manage high-volume workloads.
              </motion.p>
              <motion.p variants={itemVariants} className="about-atf-paragraph">
                Understanding target audiences directly translated into user-centric design, while my need for structural order led me to adopt Object-Oriented UX (OOUX) via IxDF early in my career. I don't just draw screens; I design for measurable business outcomes.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Expertise */}
      <section id="about-expertise-section" className="about-section about-expertise-section">
        <div className="home-section-container">
          <motion.h2 variants={itemVariants} className="about-expertise-title">
            Core Expertise: B2B Architecture & B2C Conversion
          </motion.h2>

          <div className="about-expertise-grid">
            {/* Left Column */}
            <div className="about-expertise-col">
              <div className="about-expertise-item">
                <motion.h3 variants={itemVariants} className="about-expertise-subtitle">
                  CRO & Lead Generation
                </motion.h3>
                <motion.p variants={itemVariants} className="about-expertise-paragraph">
                  The other half of my expertise is Conversion Rate Optimization, shaped by my work at Lemonfrog, Fareportal, and Business Class. I treat CRO like a detective story—relying on heatmaps, traffic sources, and fighting for strict analytics coverage across all interfaces.
                </motion.p>
                <motion.p variants={itemVariants} className="about-expertise-paragraph">
                  I focus on measurable impact. At Fareportal, iterative design and close collaboration with marketing helped scale the CheapOair Android app revenue from $500k to $3M/month. Recently at Business Class, optimizing the core funnel yielded a +27% conversion lift on mobile (which accounted for &gt;70% of traffic), followed by an additional +12% global lift in the next phase.
                </motion.p>
              </div>

              <div className="about-expertise-item">
                <motion.h3 variants={itemVariants} className="about-expertise-subtitle">
                  Live Prototyping & AI Systems
                </motion.h3>
                <motion.p variants={itemVariants} className="about-expertise-paragraph">
                  Recently, I’ve shifted to live prototyping. By combining solid OOUX artifacts with an AI-optimized design system, I can build detailed, functional prototypes in minutes, not hours. This drastically accelerates alignment between product stakeholders and engineering.
                </motion.p>
              </div>
            </div>

            {/* Right Column */}
            <div className="about-expertise-col">
              <div className="about-expertise-item">
                <motion.h3 variants={itemVariants} className="about-expertise-subtitle">
                  Untangling Complex B2B Systems
                </motion.h3>
                <motion.p variants={itemVariants} className="about-expertise-paragraph">
                  Currently, I design core internal tools in TravelTech: complex ERPs, B2B platforms, and Salesforce customizations (navigating legacy SLDS constraints). This is where OOUX is critical. TravelTech involves incredibly dense objects and massive state machines interacting across multiple departments. When designing for 400+ internal agents, even a fractional improvement in Error Rate or Task Completeness translates to massive operational ROI.
                </motion.p>
              </div>

              <div className="about-expertise-item">
                <motion.h3 variants={itemVariants} className="about-expertise-subtitle">
                  Location & Cross-Border Collaboration
                </motion.h3>
                <motion.p variants={itemVariants} className="about-expertise-paragraph">
                  Based in the Valencia Region, Spain 🇪🇺 for the last 4 years. I am open to relocation within Spain or the broader EU.
                </motion.p>
                <motion.p variants={itemVariants} className="about-expertise-paragraph">
                  I have extensive experience bridging time zones and working asynchronously. At Fareportal, I collaborated daily with the New York office from Europe, and currently, I manage stakeholders based in Florida. I treat time differences as a process feature, not a bug—utilizing async handoffs and overlapping hours for critical syncs to ensure uninterrupted delivery for US and EU teams.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.5: Workspace Setup */}
      <section id="about-workspace-section" className="about-workspace-section">
        <motion.div variants={itemVariants} className="about-workspace-container">
          <img
            src={workspaceImg}
            alt="Oleksandr's Workspace Setup"
            className="about-workspace-image"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Section 2.6: My Pragmatic Toolkit */}
      <section id="about-toolkit-section" className="about-toolkit-section">
        <div className="about-toolkit-container">
          <div className="about-toolkit-header">
            <motion.h2 variants={itemVariants} className="about-toolkit-title">
              My Pragmatic Toolkit
            </motion.h2>
            <motion.p variants={itemVariants} className="about-toolkit-subtitle">
              Real-world product design is messy. Instead of forcing textbook frameworks like the "Double Diamond," I use a modular toolkit adapted to your actual constraints and legacy code.
            </motion.p>
          </div>

          <div className="about-toolkit-grid">
            {/* Item 1 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={shipSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Ship, Measure, Iterate</h3>
              <p className="about-toolkit-item-desc">
                Perfect is the enemy of shipped. I prefer releasing fast, gathering live analytics, and iterating over endless polishing.
              </p>
            </motion.div>

            {/* Item 2 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={compassSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Architecture Before Pixels</h3>
              <p className="about-toolkit-item-desc">
                Products start in documentation. OOUX mapping builds a solid foundation, solving complex backend logic before UI design.
              </p>
            </motion.div>

            {/* Item 3 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={workflowSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Modular Design Process</h3>
              <p className="about-toolkit-item-desc">
                Textbook processes fail in reality. I adapt to the chaos. If deep user interviews are blocked for months, we skip, build, and test live.
              </p>
            </motion.div>

            {/* Item 4 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={zapSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Rapid AI Prototyping</h3>
              <p className="about-toolkit-item-desc">
                In 2026, live prototypes are the ultimate communication tool. It's the cheapest, fastest way to align stakeholders or kill a bad idea early.
              </p>
            </motion.div>

            {/* Item 5 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={brainSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Cognitive Minimalism</h3>
              <p className="about-toolkit-item-desc">
                Like specialty coffee, UI copy is best served black. I write pragmatic, minimalist text to cut the noise and reduce cognitive friction.
              </p>
            </motion.div>

            {/* Item 6 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={lineChartSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Obsessive Data Coverage</h3>
              <p className="about-toolkit-item-desc">
                The best time to integrate analytics is day one. Every tracked input directly improves the quality of our CRO and product decisions.
              </p>
            </motion.div>

            {/* Item 7 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={layersSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Semantic Design Systems</h3>
              <p className="about-toolkit-item-desc">
                A strong token foundation scales infinitely. I build systems readable by LLMs and developers, ensuring strict EU a11y compliance by default.
              </p>
            </motion.div>

            {/* Item 8 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={timerSvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">The Quantum Physics of Time</h3>
              <p className="about-toolkit-item-desc">
                A task takes exactly as much time as you give it. I focus on strict scoping and pragmatic delivery to prevent endless design loops.
              </p>
            </motion.div>

            {/* Item 9 */}
            <motion.div variants={itemVariants} className="about-toolkit-item">
              <div className="about-toolkit-icon-wrapper">
                <CustomIcon src={accessibilitySvg} size={32} className="about-toolkit-icon" />
              </div>
              <h3 className="about-toolkit-item-title">Embracing Legacy Systems</h3>
              <p className="about-toolkit-item-desc">
                You can't always rewrite the backend. Whether facing SLDS v1 or ancient .NET, I find elegant solutions within strict constraints.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Pre-Emptive Interview */}
      <section id="about-faq-section" className="about-section">
        <div className="home-section-container">
          <div className="section-header">
            <motion.h2 variants={itemVariants} className="section-header__title">
              The Pre-Emptive Interview
            </motion.h2>
            <motion.p variants={itemVariants} className="section-header__subtitle">
              Let's save us both some calendar space. Here are the direct answers to the operational, technical, and logistical questions design leads ask me most.
            </motion.p>
          </div>

          <div className="about-faq-grid">
            {faqItems.map((item, idx) => {
              const isExpanded = expandedIndices[idx];
              return (
                <div key={idx} className="about-faq-item">
                  <button
                    className="about-faq-item__header"
                    onClick={() => toggleFaqItem(idx)}
                    aria-expanded={isExpanded}
                  >
                    <span className="about-faq-item__question">{item.question}</span>
                    <span className="about-faq-item__toggle">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s var(--motion-duration-normal) var(--motion-easing-standard)"
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.215, 0.610, 0.355, 1.000] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="about-faq-item__answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </motion.div>
  );
}
