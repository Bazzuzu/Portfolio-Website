import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, DailyThing as DailyThingType, CaseStudy as CaseStudyType } from "../data/portfolioData";
import CustomIcon from "./CustomIcon";
import maximizeSvg from "../assets/icons/maximize.svg?raw";
import xSvg from "../assets/icons/x.svg?raw";

interface DailyThingProps {
  dailyThing: DailyThingType;
  onBack: () => void;
  onNavigate: (page: string, params?: { caseId: string }) => void;
}

export default function DailyThing({ dailyThing, onBack, onNavigate }: DailyThingProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Сброс lightbox при смене страницы
  useEffect(() => {
    setLightboxImage(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [dailyThing.id]);

  // Закрытие Lightbox по кнопке ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="case-study--custom-newsletter">
      {/* 1. Header / Hero Section (Title + 2-Column Split) with full-width background */}
      <header className="newsletter-hero-banner">
        <div className="portfolio__container">
          <h1 className="case-study__above-fold-title newsletter-hero-title">
            {dailyThing.pageTitle}
          </h1>
          
          <div className="newsletter-hero-grid">
            <div className="newsletter-hero-left">
              <figure className="discovery-image-container newsletter-phone-mockup">
                <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[0])} title="Click to zoom image">
                  <img src={dailyThing.images[0]} alt="Hero Newsletter Mobile Form" className="discovery-image-card__img" fetchpriority="high" />
                  <div className="discovery-image-card__zoom-indicator">
                    <CustomIcon src={maximizeSvg} size={14} />
                  </div>
                </div>
              </figure>
            </div>
            <div className="newsletter-hero-right">
              <h3 className="newsletter-hero-lead font-body-md">
                I thought this was a 30-minute junior task. I was dead wrong.
              </h3>
              <p className="text-block__body font-body-md text-block__body-secondary">
                Surprisingly, business-class.com had never had a newsletter subscription form. When our marketing department migrated to HubSpot, they decided to make up for lost time – all at once.
              </p>
              <p className="text-block__body font-body-md text-block__body-secondary">
                Their immediate wishlist was massive: inject a promotional SMS-consent checkbox into our primary lead-capture form, build an aggressive hero subscription section, launch an intrusive modal popup, and wedge a subscription widget into the footer.
              </p>
              <p className="text-block__body font-body-md text-block__body-secondary">
                Here is how I navigated this storm to protect our core funnel.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of page contents (will be added block-by-block) */}
      <div className="portfolio__container">
          {/* 2. Section 1: The Veto: Protecting the cash cow */}
          <section className="case-study__discovery">
            <div className="newsletter-grid-split">
              {/* Left Column: Title + Paragraph + Image */}
              <div className="newsletter-col newsletter-col--bottom">
                <div className="text-block">
                  <h2 className="newsletter-section-title">
                    The Veto:<br />
                    Protecting the cash cow
                  </h2>
                  <p className="text-block__body font-body-md text-block__body-secondary">
                    Marketing’s most critical demand was adding a promotional SMS-consent checkbox directly into our primary Quote Request form – the final, most valuable step of our lead-gen funnel where we generate our actual revenue.
                  </p>
                </div>
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[1])} title="Click to zoom image">
                    <img src={dailyThing.images[1]} alt="Fast Checkout vs Validation" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>
              
              {/* Right Column: Image + Bullet list */}
              <div className="newsletter-col">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[2])} title="Click to zoom image">
                    <img src={dailyThing.images[2]} alt="Desktop Subscription Form" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
                <div className="text-block">
                  <ul className="newsletter-bullets">
                    <li>
                      <strong className="bullet-title">The Risk:</strong>
                      <span className="bullet-desc"> Forcing heavy promotional legal text and consent friction onto high-intent users at the ultimate conversion step would trigger immediate form abandonment, tanking our inbound quote volume.</span>
                    </li>
                    <li>
                      <strong className="bullet-title">The Veto:</strong>
                      <span className="bullet-desc"> I blocked the checkbox on this form, backed by checkout drop-off data and strict US TCPA compliance risks ($1,500/SMS fines for forced carrier consent).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-grid-split">
              {/* Left Column: Title + Paragraphs + List + Image */}
              <div className="newsletter-col newsletter-col--bottom">
                <div className="text-block">
                  <h2 className="newsletter-section-title">
                    The Compromise:<br />
                    The Capture Matrix
                  </h2>
                  <p className="text-block__body font-body-md text-block__body-secondary">
                    To satisfy marketing's goals without hurting sales, I designed a decentralized capture matrix outside the core lead-gen funnel.
                  </p>
                  <ul className="newsletter-bullets">
                    <li>
                      <strong className="bullet-title">The Hero:</strong>
                      <span className="bullet-desc"> A high-impact, above-the-fold MVP to capture raw traffic.</span>
                    </li>
                    <li>
                      <strong className="bullet-title">The Popup:</strong>
                      <span className="bullet-desc"> Trigger-controlled display rules (removable on mobile if core metrics dropped).</span>
                    </li>
                    <li>
                      <strong className="bullet-title">The Footer:</strong>
                      <span className="bullet-desc"> A zero-friction, passive capture widget.</span>
                    </li>
                  </ul>
                  <p className="text-block__body font-body-md text-block__body-secondary">
                    But the real UX challenge was Email vs. Phone. Asking for both at once would kill conversion.
                  </p>
                </div>
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[3])} title="Click to zoom image">
                    <img src={dailyThing.images[3]} alt="Newsletter Banner" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>

              {/* Right Column: Active Keyboards Image Only */}
              <div className="newsletter-col newsletter-col--bottom">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[4])} title="Click to zoom image">
                    <img src={dailyThing.images[4]} alt="Mobile Active Keyboards" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </section>

          {/* 4. Section 3: Full Width Image */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <figure className="discovery-image-container newsletter-full-banner">
              <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[5])} title="Click to zoom image">
                <img src={dailyThing.images[5]} alt="Unpublished Drops & Mistake Fares Popup View" className="discovery-image-card__img" loading="lazy" />
                <div className="discovery-image-card__zoom-indicator">
                  <CustomIcon src={maximizeSvg} size={14} />
                </div>
              </div>
            </figure>
          </section>

          {/* 5. Section 4: The Solution: 2-Step Progressive Capture (Step 1) */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-section-header">
              <h2 className="newsletter-section-title text-center">
                The Solution:<br />
                2-Step Progressive Capture
              </h2>
              <p className="newsletter-section-subtitle text-center">
                We secure the baseline lead first, then offer the speed upgrade
              </p>
            </div>

            <div className="newsletter-grid-split">
              {/* Left Column: Text (Centered Vertically) */}
              <div className="newsletter-col newsletter-col--center">
                <div className="text-block">
                  <h3 className="newsletter-subsection-title">
                    Step 1: Email Capture (Secure the Lead)
                  </h3>
                  <p className="text-block__body font-body-md text-block__body-secondary">
                    Sells the value of unpublished drops with social proof (Join 12,500+ insiders).<br />
                    A clear zero-spam footnote protects user trust..
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="newsletter-col">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[6])} title="Click to zoom image">
                    <img src={dailyThing.images[6]} alt="Progressive Capture Step 1" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </section>

          {/* 6. Section 5: The Solution: 2-Step Progressive Capture (Step 2) */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-grid-split">
              {/* Left Column: Text (Centered Vertically) */}
              <div className="newsletter-col newsletter-col--center">
                <div className="text-block">
                  <h3 className="newsletter-subsection-title">
                    Step 2: SMS Acceleration (Optional Upgrade)
                  </h3>
                  <p className="text-block__body font-body-md text-block__body-secondary">
                    Creates high urgency based on speed (Is email too slow?). Users can add their phone for instant alerts, or skip. To comply with TCPA rules, the consent checkbox remains strictly opt-in.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="newsletter-col">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[7])} title="Click to zoom image">
                    <img src={dailyThing.images[7]} alt="Progressive Capture Step 2" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </section>

          {/* 7. Section 6: The Future Roadmap: Onboarding Wizard (Step 1 - Origin) */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-section-header">
              <h2 className="newsletter-section-title text-center">
                The Future Roadmap:<br />
                Onboarding Wizard
              </h2>
              <p className="newsletter-section-subtitle text-center">
                To avoid over-engineering in Phase 1, I designed a 3-step personalization wizard for Phase 2. This allowed engineering to pre-structure HubSpot database properties, preventing expensive CRM restructuring later.
              </p>
            </div>

            <div className="newsletter-grid-split">
              {/* Left Column: Text (Centered Vertically) */}
              <div className="newsletter-col newsletter-col--center">
                <div className="text-block">
                  <h3 className="newsletter-subsection-title">
                    1/3 Origin:
                  </h3>
                  <p className="text-block__body font-body-md text-block__body-secondary">
                    Where do you fly from? (Pre-populated via Geo-IP, e.g., New York (NYC)).
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="newsletter-col">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[8])} title="Click to zoom image">
                    <img src={dailyThing.images[8]} alt="Onboarding Wizard - Origin" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </section>

          {/* 8. Section 7: The Future Roadmap: Onboarding Wizard (Step 2 - Priority) */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-grid-split">
              {/* Left Column: Image */}
              <div className="newsletter-col">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[9])} title="Click to zoom image">
                    <img src={dailyThing.images[9]} alt="Onboarding Wizard - Priority" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>

              {/* Right Column: Text (Centered Vertically) */}
              <div className="newsletter-col newsletter-col--center">
                <div className="text-block">
                  <h3 className="newsletter-subsection-title">
                    2/3 Priority: What is your travel priority?
                  </h3>
                  <ul className="newsletter-bullets">
                    <li>
                      <strong className="bullet-title">Max Savings:</strong>
                      <span className="bullet-desc"> Lowest fares. Flexible routing.</span>
                    </li>
                    <li>
                      <strong className="bullet-title">Best Value:</strong>
                      <span className="bullet-desc"> Sensible layovers, balanced prices.</span>
                    </li>
                    <li>
                      <strong className="bullet-title">Premium Comfort:</strong>
                      <span className="bullet-desc"> Top-tier airlines, business cabins.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Section 8: The Future Roadmap: Onboarding Wizard (Step 3 - Purpose) */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-grid-split">
              {/* Left Column: Text (Centered Vertically) */}
              <div className="newsletter-col newsletter-col--center">
                <div className="text-block">
                  <h3 className="newsletter-subsection-title">
                    3/3 Purpose: What kind of trips do you take?
                  </h3>
                  <ul className="newsletter-bullets">
                    <li>
                      <strong className="bullet-title">Vacation & Leisure:</strong>
                      <span className="bullet-desc"> Beach getaways and holiday escapes.</span>
                    </li>
                    <li>
                      <strong className="bullet-title">Business & Commutes:</strong>
                      <span className="bullet-desc"> Major metro hubs, tight schedules.</span>
                    </li>
                    <li>
                      <strong className="bullet-title">Family & Group:</strong>
                      <span className="bullet-desc"> Multi-ticket bookings, family routes.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="newsletter-col">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[10])} title="Click to zoom image">
                    <img src={dailyThing.images[10]} alt="Onboarding Wizard - Purpose" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </section>

          {/* 10. Section 9: Success Screen */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-grid-split">
              {/* Left Column: Image */}
              <div className="newsletter-col">
                <figure className="discovery-image-container">
                  <div className="discovery-image-card" onClick={() => setLightboxImage(dailyThing.images[11])} title="Click to zoom image">
                    <img src={dailyThing.images[11]} alt="Success Screen - Check Your Inbox" className="discovery-image-card__img" loading="lazy" />
                    <div className="discovery-image-card__zoom-indicator">
                      <CustomIcon src={maximizeSvg} size={14} />
                    </div>
                  </div>
                </figure>
              </div>

              {/* Right Column: Text (Centered Vertically) */}
              <div className="newsletter-col newsletter-col--center">
                <div className="text-block">
                  <p className="text-block__body font-body-md">
                    <strong className="bullet-title">Success Screen: </strong>
                    <span className="bullet-desc">Check your inbox &rarr; Click the verification link to activate your instant alerts. (Shown at the very end of the flow to capture profiling data before the user exits the tab to check their mail).</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 11. Section 10: System Integrity & Accessibility Specs */}
          <section className="case-study__discovery case-study__discovery--subsequent">
            <div className="newsletter-section-header">
              <h2 className="newsletter-section-title text-center">
                System Integrity & Accessibility Specs
              </h2>
            </div>
            
            <div className="newsletter-specs-container">
              <ul className="newsletter-bullets">
                <li>
                  <strong className="bullet-title">Lazy Inline Validation:</strong>
                  <span className="bullet-desc"> Error states trigger strictly on-blur to prevent input interruption.</span>
                </li>
                <li>
                  <strong className="bullet-title">Double-Submission Shield:</strong>
                  <span className="bullet-desc"> CTA buttons transition to disabled with a spinner upon click to prevent database duplicates.</span>
                </li>
                <li>
                  <strong className="bullet-title">Soft Reactivation:</strong>
                  <span className="bullet-desc"> Duplicate sign-ups trigger a friendly reactivation email instead of an angry red error state.</span>
                </li>
              </ul>

              <ul className="newsletter-bullets">
                <li>
                  <strong className="bullet-title">EAA 2026 Compliance:</strong>
                  <span className="bullet-desc"> Structured keyboard focus-trapping for modals, semantic &lt;label&gt; associations, and programmatic aria-invalid bindings.</span>
                </li>
                <li>
                  <strong className="bullet-title">Design Diplomacy:</strong>
                  <span className="bullet-desc"> Presented Figma layouts in a Dual-Viewport Framework (mobile and desktop side-by-side). This accommodated stakeholder desktop-viewing habits while keeping the engineering focus locked onto mobile-first tap targets (70%+ mobile traffic).</span>
                </li>
              </ul>
            </div>
          </section>
      </div>

      {/* Lightbox system overlay for Zooming images */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox lightbox--open"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lightbox__content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Zoomed high-fidelity interface view"
                className="lightbox__image"
              />
              <button
                className="lightbox__close"
                onClick={() => setLightboxImage(null)}
                aria-label="Close zoomed image"
              >
                <CustomIcon src={xSvg} size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
