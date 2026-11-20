import React, { useEffect, useMemo } from "react";
import {
  getGlossaryTerms,
  getTermBySlug,
  GlossaryTerm as GlossaryTermType,
} from "../data/glossaryData";
import { renderMarkdownToHtml } from "../utils/markdownRenderer";
import { portfolioData } from "../data/portfolioData";
import Logo from "./Logo";

interface GlossaryTermProps {
  termSlug: string;
  lang?: "en" | "uk";
  onLanguageChange?: (lang: "en" | "uk") => void;
  onNavigate?: (page: string, params?: { slug?: string; caseId?: string }) => void;
}

export default function GlossaryTerm({ termSlug, lang = "en", onLanguageChange, onNavigate }: GlossaryTermProps) {
  const isUk = lang === "uk";
  const allTerms = useMemo(() => getGlossaryTerms(lang), [lang]);

  const term = useMemo(() => {
    return getTermBySlug(termSlug, lang) || allTerms[0];
  }, [termSlug, lang, allTerms]);

  const currentIndex = useMemo(() => {
    return allTerms.findIndex((t) => t.slug === term.slug);
  }, [term, allTerms]);

  const prevTerm = useMemo(() => {
    if (currentIndex <= 0) return null;
    return allTerms[currentIndex - 1];
  }, [currentIndex, allTerms]);

  const nextTerm = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= allTerms.length - 1) return null;
    return allTerms[currentIndex + 1];
  }, [currentIndex, allTerms]);

  // Schema.org DefinedTerm & BreadcrumbList JSON-LD
  useEffect(() => {
    if (!term) return;

    let termSchema: any;
    if (term.structuredDataGraph && term.structuredDataGraph.length > 0) {
      termSchema = {
        "@context": "https://schema.org",
        "@graph": term.structuredDataGraph,
      };
    } else {
      const canonicalBase = isUk ? "https://lexkonovalov.com/uk/glossary/" : "https://lexkonovalov.com/glossary/";
      const canonicalTermUrl = `${canonicalBase}${term.slug}.html`;
      termSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "DefinedTerm",
            "@id": `${canonicalTermUrl}#term`,
            "name": term.name,
            "termCode": term.slug,
            "description": (term as any).definition,
            "inDefinedTermSet": {
              "@type": "DefinedTermSet",
              "@id": `${canonicalBase}#terms`,
              "name": isUk ? "Словник продуктового дизайну" : "Product Design Glossary",
              "url": canonicalBase,
              "inLanguage": isUk ? "uk-UA" : "en-US",
            },
            "url": canonicalTermUrl,
            "inLanguage": isUk ? "uk-UA" : "en-US",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonicalTermUrl}#breadcrumbs`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": isUk ? "Головна" : "Home",
                "item": "https://lexkonovalov.com/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": isUk ? "Словник продуктового дизайну" : "Product Design Glossary",
                "item": canonicalBase,
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": term.name,
                "item": canonicalTermUrl,
              },
            ],
          },
        ],
      };
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "glossary-term-jsonld";
    script.innerHTML = JSON.stringify(termSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("glossary-term-jsonld");
      if (el) el.remove();
    };
  }, [term, isUk]);

  // Match related term strings with terms in our canonical database
  const resolveRelatedTerm = (relatedName: string) => {
    const cleanName = relatedName.trim();
    return allTerms.find(
      (t) =>
        t.name.toLowerCase() === cleanName.toLowerCase() ||
        t.name.toLowerCase().startsWith(cleanName.toLowerCase()) ||
        cleanName.toLowerCase().startsWith(t.name.toLowerCase()) ||
        (Array.isArray(t.alternateName) && t.alternateName.some(a => cleanName.toLowerCase().includes(a.toLowerCase()))) ||
        (typeof t.alternateName === "string" && cleanName.toLowerCase().includes(t.alternateName.toLowerCase())) ||
        t.slug === cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    );
  };

  const handleArticleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;
    const href = target.getAttribute("href");
    if (!href) return;

    if (href.startsWith("/uk/glossary/") && href.endsWith(".html")) {
      e.preventDefault();
      const slug = href.replace("/uk/glossary/", "").replace(".html", "");
      onNavigate?.("glossary-term", { slug });
    } else if (href.startsWith("/glossary/") && href.endsWith(".html")) {
      e.preventDefault();
      const slug = href.replace("/glossary/", "").replace(".html", "");
      onNavigate?.("glossary-term", { slug });
    } else if (href.startsWith("/uk/glossary/ooux/") || href === "/uk/glossary/ooux" || href.startsWith("/glossary/ooux/") || href === "/glossary/ooux") {
      e.preventDefault();
      onNavigate?.("glossary-term", { slug: "ooux" });
    } else if (href === "/uk/glossary/" || href === "/uk/glossary" || href === "/glossary/" || href === "/glossary") {
      e.preventDefault();
      onNavigate?.("glossary");
    } else if (href === "/") {
      e.preventDefault();
      onNavigate?.("home");
    }
  };

  return (
    <div className="glossary-term-page">
      {/* Top Header Block for Logo & Language Switcher */}
      <header className="glossary-header-top">
        <div className="home-section-container">
          <div className="glossary-header-top__inner">
            <a
              id="brand-logo-term"
              href={isUk ? "/uk/glossary/" : "/glossary/"}
              className="logo"
              aria-label={`${portfolioData.designerName} - ${isUk ? "Головна" : "Home"}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("home");
              }}
            >
              <Logo />
              <span>{portfolioData.designerName}</span>
            </a>

            <div className="glossary-lang-switcher" role="group" aria-label={isUk ? "Перемикач мови" : "Language switcher"}>
              <button
                type="button"
                className={`glossary-lang-btn ${!isUk ? "glossary-lang-btn--active" : ""}`}
                onClick={() => onLanguageChange?.("en")}
                aria-pressed={!isUk}
                aria-label="English language"
              >
                EN
              </button>
              <span className="glossary-lang-divider" aria-hidden="true">|</span>
              <button
                type="button"
                className={`glossary-lang-btn ${isUk ? "glossary-lang-btn--active" : ""}`}
                onClick={() => onLanguageChange?.("uk")}
                aria-pressed={isUk}
                aria-label="Українська мова"
              >
                UA
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Term Article */}
      <article className="glossary-term-article">
        <header className="glossary-term-hero">
          {/* Breadcrumb Navigation matching itemListElement */}
          <nav className="glossary-breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li className="glossary-breadcrumbs__item">
                <a
                  href="/"
                  className="glossary-breadcrumbs__link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.("home");
                  }}
                >
                  {isUk ? "Головна" : "Home"}
                </a>
              </li>
              <li className="glossary-breadcrumbs__separator" aria-hidden="true">
                /
              </li>
              <li className="glossary-breadcrumbs__item">
                <a
                  href={isUk ? "/uk/glossary/" : "/glossary/"}
                  className="glossary-breadcrumbs__link"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.("glossary");
                  }}
                >
                  {isUk ? "Словник продуктового дизайну" : "Product Design Glossary"}
                </a>
              </li>
              <li className="glossary-breadcrumbs__separator" aria-hidden="true">
                /
              </li>
              <li className="glossary-breadcrumbs__item" aria-current="page">
                <span>{term.name}</span>
              </li>
            </ol>
          </nav>

          <h1 className="glossary-hero__title">{term.name}</h1>
          <div className="glossary-hero__meta">
            <span>{term.category}</span>
            {term.secondaryCategory && (
              <>
                <span aria-hidden="true">·</span>
                <span>{term.secondaryCategory}</span>
              </>
            )}
          </div>
        </header>

        {term.contentMarkdown ? (
          <div
            className="glossary-term-custom-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(term.contentMarkdown) }}
            onClick={handleArticleLinkClick}
          />
        ) : (
          <>
            {/* Definition */}
            <section className="glossary-term-section" aria-labelledby="section-definition">
              <h2 id="section-definition" className="glossary-term-section__title">
                {isUk ? "Визначення" : "Definition"}
              </h2>
              <p className="glossary-term-section__text">{(term as any).definition}</p>
            </section>

            {/* Purpose */}
            <section className="glossary-term-section" aria-labelledby="section-purpose">
              <h2 id="section-purpose" className="glossary-term-section__title">
                {isUk ? "Призначення" : "Purpose"}
              </h2>
              <p className="glossary-term-section__text">{(term as any).purpose}</p>
            </section>

            {/* Key Concepts */}
            {(term as any).keyConcepts && (term as any).keyConcepts.length > 0 && (
              <section className="glossary-term-section" aria-labelledby="section-key-concepts">
                <h2 id="section-key-concepts" className="glossary-term-section__title">
                  {isUk ? "Ключові концепції" : "Key Concepts"}
                </h2>
                <div className="glossary-term-key-concepts">
                  {(term as any).keyConcepts.map((concept: string, idx: number) => (
                    <span key={idx} className="glossary-term-concept-tag">
                      {concept}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* How It Works */}
            <section className="glossary-term-section" aria-labelledby="section-how-it-works">
              <h2 id="section-how-it-works" className="glossary-term-section__title">
                {isUk ? "Як це працює" : "How It Works"}
              </h2>
              <p className="glossary-term-section__text">{(term as any).howItWorks}</p>
            </section>

            {/* Related Terms */}
            {(term as any).relatedTerms && (term as any).relatedTerms.length > 0 && (
              <section className="glossary-term-section" aria-labelledby="section-related-terms">
                <h2 id="section-related-terms" className="glossary-term-section__title">
                  {isUk ? "Пов'язані терміни" : "Related Terms"}
                </h2>
                <ul className="glossary-term-related-list">
                  {(term as any).relatedTerms.map((relatedName: string, idx: number) => {
                    const targetTerm = resolveRelatedTerm(relatedName);
                    return (
                      <li key={idx} className="glossary-term-related-item">
                        <span className="glossary-term-related-bullet" aria-hidden="true">
                          •
                        </span>
                        {targetTerm ? (
                          <a
                            href={isUk ? `/uk/glossary/${targetTerm.slug}.html` : `/glossary/${targetTerm.slug}.html`}
                            className="glossary-term-related-link"
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate?.("glossary-term", { slug: targetTerm.slug });
                            }}
                          >
                            {targetTerm.name}
                          </a>
                        ) : (
                          <span className="glossary-term-related-link">{relatedName}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            {/* Sources */}
            {(term as any).sources && (term as any).sources.length > 0 && (
              <section className="glossary-term-section" aria-labelledby="section-sources">
                <h2 id="section-sources" className="glossary-term-section__title">
                  {isUk ? "Джерела" : "Sources"}
                </h2>
                <ul className="glossary-term-sources-list">
                  {(term as any).sources.map((source: string, idx: number) => (
                    <li key={idx} className="glossary-term-source-item">
                      {source}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}

        {/* Bottom Pagination & Navigation */}
        <nav
          className="glossary-term-nav"
          aria-label={isUk ? "Навігація між термінами словника" : "Glossary term navigation"}
        >
          <div className="glossary-term-nav__group">
            <a
              href={isUk ? "/uk/glossary/" : "/glossary/"}
              className="glossary-term-nav__back"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("glossary");
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>{isUk ? "До словника" : "Back to Glossary"}</span>
            </a>
          </div>

          <div className="glossary-term-nav__arrows">
            {prevTerm ? (
              <a
                href={isUk ? `/uk/glossary/${prevTerm.slug}.html` : `/glossary/${prevTerm.slug}.html`}
                className="glossary-term-nav__item"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.("glossary-term", { slug: prevTerm.slug });
                }}
                title={prevTerm.name}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>{isUk ? "Попередній" : "Previous"}</span>
              </a>
            ) : (
              <span
                className="glossary-term-nav__item glossary-term-nav__item--disabled"
                aria-disabled="true"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>{isUk ? "Попередній" : "Previous"}</span>
              </span>
            )}

            <span className="glossary-term-nav__divider" aria-hidden="true" />

            {nextTerm ? (
              <a
                href={isUk ? `/uk/glossary/${nextTerm.slug}.html` : `/glossary/${nextTerm.slug}.html`}
                className="glossary-term-nav__item"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.("glossary-term", { slug: nextTerm.slug });
                }}
                title={nextTerm.name}
              >
                <span>{isUk ? "Наступний" : "Next"}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ) : (
              <span
                className="glossary-term-nav__item glossary-term-nav__item--disabled"
                aria-disabled="true"
              >
                <span>{isUk ? "Наступний" : "Next"}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
}
