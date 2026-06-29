import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, CaseStudy as CaseStudyType } from "../data/portfolioData";
import CustomIcon from "./CustomIcon";
import chevronLeftSvg from "../assets/icons/chevron-left.svg?raw";
import chevronRightSvg from "../assets/icons/chevron-right.svg?raw";
import maximizeSvg from "../assets/icons/maximize.svg?raw";
import xSvg from "../assets/icons/x.svg?raw";

interface CaseStudyProps {
  caseStudy: CaseStudyType;
  onBack: () => void;
  onNavigate: (page: string, params?: { caseId: string }) => void;
}

export default function CaseStudy({ caseStudy, onBack, onNavigate }: CaseStudyProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const remainingCases = portfolioData.caseStudies.filter((c) => c.id !== caseStudy.id);

  // Сброс активного слайда при смене кейса
  useEffect(() => {
    setActiveSlide(0);
    setLightboxImage(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [caseStudy.id]);

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

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === caseStudy.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? caseStudy.images.length - 1 : prev - 1));
  };

  // Анимационные варианты для текстовых блоков
  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  return (
    <>
      <div className="portfolio__container">
        <div className="case-study">
        {/* Above the Fold Column Layout */}
        <div className="case-study__above-fold">
          <div className="case-study__above-fold-left">
            <h1 id="case-study-header-title" className="case-study__above-fold-title">
              {caseStudy.pageTitle || caseStudy.title}
            </h1>
            <div className="case-study__above-fold-tags">
              {(caseStudy.tags || [caseStudy.tag]).map((tag) => (
                <div key={tag} className="case-study__tag-badge">
                  <span className="case-study__tag-text">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="case-study-meta-grid" className="case-study__above-fold-metadata-grid">
            <div className="case-study-meta-item">
              <div className="case-study-meta-item__header-row">
                <span className="case-study-meta-item__title">My Role</span>
                <span className="case-study-meta-item__line"></span>
              </div>
              <p className="case-study-meta-item__value">{caseStudy.role}</p>
            </div>

            <div className="case-study-meta-item">
              <div className="case-study-meta-item__header-row">
                <span className="case-study-meta-item__title">Scope</span>
                <span className="case-study-meta-item__line"></span>
              </div>
              <p className="case-study-meta-item__value">{caseStudy.scope}</p>
            </div>

            <div className="case-study-meta-item">
              <div className="case-study-meta-item__header-row">
                <span className="case-study-meta-item__title">Status</span>
                <span className="case-study-meta-item__line"></span>
              </div>
              <p className="case-study-meta-item__value">{caseStudy.status}</p>
            </div>

            {caseStudy.businessImpact ? (
              <div className="case-study-meta-item">
                <div className="case-study-meta-item__header-row">
                  <span className="case-study-meta-item__title">Business Impact</span>
                  <span className="case-study-meta-item__line"></span>
                </div>
                <p className="case-study-meta-item__value">{caseStudy.businessImpact}</p>
              </div>
            ) : (
              caseStudy.users && (
                <div className="case-study-meta-item">
                  <div className="case-study-meta-item__header-row">
                    <span className="case-study-meta-item__title">Users</span>
                    <span className="case-study-meta-item__line"></span>
                  </div>
                  <p className="case-study-meta-item__value">{caseStudy.users}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Media Showcase (Hero Image slider with optional captions; inactive/static if single image) */}
        <section id="case-study-showcase" className="media-showcase">
          <div className="slider-container slider-container--no-pointer">
            {caseStudy.images.map((img, index) => (
              <div
                key={index}
                className={`slider-slide ${index === activeSlide ? "slider-slide--active" : ""}`}
              >
                <img
                  src={img}
                  alt={caseStudy.imageCaptions && caseStudy.imageCaptions[index] ? `${caseStudy.title} - ${caseStudy.imageCaptions[index]}` : `${caseStudy.title} screenshot ${index + 1}`}
                  className="slider-image slider-image--standard"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}

            {/* Prev/Next buttons (Hidden if only 1 image exists) */}
            {caseStudy.images.length > 1 && (
              <>
                <button
                  id="slide-prev-btn"
                  className="slider-btn slider-btn--prev"
                  onClick={handlePrevSlide}
                  title="Previous image"
                >
                  <CustomIcon src={chevronLeftSvg} size={20} />
                </button>
                <button
                  id="slide-next-btn"
                  className="slider-btn slider-btn--next"
                  onClick={handleNextSlide}
                  title="Next image"
                >
                  <CustomIcon src={chevronRightSvg} size={20} />
                </button>
              </>
            )}

            {/* Bullets indicators (Hidden if only 1 image exists) */}
            {caseStudy.images.length > 1 && (
              <div className="slider-nav">
                {caseStudy.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide(index);
                    }}
                    className={`slider-bullet ${index === activeSlide ? "slider-bullet--active" : ""}`}
                    title={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Optional Caption directly below the photo */}
          {caseStudy.imageCaptions && caseStudy.imageCaptions[activeSlide] ? (
            <p className="slider-caption">
              {caseStudy.imageCaptions[activeSlide]}
            </p>
          ) : (
            caseStudy.images.length > 1 && (
              <p className="slider-caption">
                Image {activeSlide + 1} of {caseStudy.images.length}
              </p>
            )
          )}
        </section>

        {/* Triple column textual layout: The Challenge, The Solution, The Impact */}
        <motion.section
          id="case-study-trilogy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blockVariants}
          className="case-study-trilogy-section"
        >
          {caseStudy.headline && (
            <h3 className="case-study__trilogy-title font-display-sm">
              {caseStudy.headline}
            </h3>
          )}
          <div className="col-layout-3">
            <div className="text-block">
              <h4 className="text-block__subtitle font-headline-sm">The Challenge:</h4>
              <p className="text-block__body font-body-md text-block__body-secondary">{caseStudy.challenge}</p>
            </div>
            <div className="text-block">
              <h4 className="text-block__subtitle font-headline-sm">The Solution:</h4>
              <p className="text-block__body font-body-md text-block__body-secondary">{caseStudy.solution}</p>
            </div>
            <div className="text-block">
              <h4 className="text-block__subtitle font-headline-sm">The Impact:</h4>
              <p className="text-block__body font-body-md text-block__body-secondary">{caseStudy.impact}</p>
            </div>
          </div>
        </motion.section>

        {/* Dynamic Discovery content blocks (Supporting Layout 3 with multi-image & text permutations) */}
        {(() => {
          const sectionsToRender = caseStudy.discoverySections || (caseStudy.discoveryTitle ? [{
            discoveryTitle: caseStudy.discoveryTitle,
            discoverySubtitle: caseStudy.discoverySubtitle,
            discoveryLeftTitle: caseStudy.discoveryLeftTitle,
            discoveryRightTitle: caseStudy.discoveryRightTitle,
            discoveryLeft: caseStudy.discoveryLeft,
            discoveryRight: caseStudy.discoveryRight,
            discoveryImages: caseStudy.discoveryImages
          }] : []);

          return sectionsToRender.map((section, sIdx) => {
            const hasText = section.discoveryLeft || section.discoveryRight;
            
            return (
              <motion.section
                key={sIdx}
                id={`case-study-discovery-${sIdx}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={blockVariants}
                className={`case-study__discovery ${sIdx > 0 ? "case-study__discovery--subsequent" : ""}`}
              >
                {(section.discoveryTitle || section.discoverySubtitle) && (
                  <div className={`case-study__heading-block ${hasText ? "case-study__heading-block--has-text" : ""}`}>
                    {section.discoveryTitle && (
                      <h2 className={`case-study__section-title font-display-sm ${section.discoverySubtitle ? "case-study__section-title--has-subtitle" : ""}`}>
                        {section.discoveryTitle}
                      </h2>
                    )}
                    {section.discoverySubtitle && (
                      <p className="case-study__discovery-subtitle font-body-md text-block__body-secondary">
                        {section.discoverySubtitle}
                      </p>
                    )}
                  </div>
                )}
                
                {hasText && (
                  <div className={`col-layout-2 ${section.discoveryImages && section.discoveryImages.length > 0 ? "col-layout-2--has-images" : ""}`}>
                    <div className="text-block">
                      {section.discoveryLeftTitle && (
                        <h4 className="text-block__subtitle font-headline-sm">
                          {section.discoveryLeftTitle}
                        </h4>
                      )}
                      {section.discoveryLeft?.split("\n\n").map((para, idx) => (
                        <p key={idx} className="text-block__body font-body-md text-block__body-secondary">
                          {para}
                        </p>
                      ))}
                    </div>
                    <div className="text-block">
                      {section.discoveryRightTitle && (
                        <h4 className="text-block__subtitle font-headline-sm">
                          {section.discoveryRightTitle}
                        </h4>
                      )}
                      {section.discoveryRight?.split("\n\n").map((para, idx) => (
                        <p key={idx} className="text-block__body font-body-md text-block__body-secondary">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Flexible discovery images layout with automatic row grouping and click-to-expand lightbox */}
                {section.discoveryImages && section.discoveryImages.length > 0 && (() => {
                  const images = section.discoveryImages;
                  const rows: React.ReactNode[] = [];
                  let startIndex = 0;

                  // Если общее число нечетное, первая строка содержит 1 изображение во всю ширину
                  if (images.length % 2 !== 0) {
                    const imgUrl = images[0];
                    const caption = section.discoveryImageCaptions?.[0];
                    rows.push(
                      <div key="row-0" className="case-study__discovery-row case-study__discovery-row--single">
                        <figure className="discovery-image-container">
                          <div
                            className="discovery-image-card"
                            onClick={() => setLightboxImage(imgUrl)}
                            title="Click to zoom image"
                          >
                            <img
                              src={imgUrl}
                              alt={section.discoveryImageAlts?.[0] || `${caseStudy.title} - Discovery session main interface layout`}
                              className="discovery-image-card__img"
                              referrerPolicy="no-referrer"
                            />
                            <div className="discovery-image-card__zoom-indicator">
                              <CustomIcon src={maximizeSvg} size={14} />
                            </div>
                          </div>
                          {caption && <figcaption className="discovery-image-caption">{caption}</figcaption>}
                        </figure>
                      </div>
                    );
                    startIndex = 1;
                  }

                  // Остальные изображения группируются по парам
                  for (let i = startIndex; i < images.length; i += 2) {
                    const pair = images.slice(i, i + 2);
                    rows.push(
                      <div key={`row-${i}`} className="case-study__discovery-row case-study__discovery-row--double">
                        {pair.map((imgUrl, pairIdx) => {
                          const globalIdx = i + pairIdx;
                          const caption = section.discoveryImageCaptions?.[globalIdx];
                          return (
                            <figure key={pairIdx} className="discovery-image-container">
                              <div
                                className="discovery-image-card"
                                onClick={() => setLightboxImage(imgUrl)}
                                title="Click to zoom image"
                              >
                                <img
                                  src={imgUrl}
                                  alt={section.discoveryImageAlts?.[globalIdx] || `${caseStudy.title} - Discovery session interface analysis segment ${globalIdx}`}
                                  className="discovery-image-card__img"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="discovery-image-card__zoom-indicator">
                                  <CustomIcon src={maximizeSvg} size={14} />
                                </div>
                              </div>
                              {caption && <figcaption className="discovery-image-caption">{caption}</figcaption>}
                            </figure>
                          );
                        })}
                      </div>
                    );
                  }

                  return (
                    <div className="case-study__discovery-gallery">
                      {rows}
                    </div>
                  );
                })()}
              </motion.section>
            );
          });
        })()}
      </div>
    </div>

    {/* Related Works (Selected Works) section */}
        <motion.section
          id="related-works"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blockVariants}
          className="works-section"
        >
          <div className="home-section-container">
            <div className="section-header">
              <h2 id="section-works-title" className="section-header__title">
                Selected Works
              </h2>
              <p id="section-works-subtitle" className="section-header__subtitle">
                Untangling legacy systems. Scaling UI architecture. Driving B2C revenue.
              </p>
            </div>
  
            <div className="works-grid">
              {remainingCases.map((work: CaseStudyType) => {
                return (
                  <a
                    key={work.id}
                    id={`work-card-${work.id}`}
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
                        src={work.images[0]}
                        alt={work.imgAlt}
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
                  </a>
                );
              })}
            </div>
          </div>
        </motion.section>

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
                alt={`${caseStudy.title} - Zoomed high-fidelity interface view`}
                className="lightbox__image"
                referrerPolicy="no-referrer"
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
    </>
  );
}
