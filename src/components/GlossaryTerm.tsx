import React, { useEffect, useMemo } from "react";
import {
  glossaryTerms,
  GlossaryTerm as GlossaryTermType,
  getTermBySlug,
} from "../data/glossaryData";
import { renderMarkdownToHtml } from "../utils/markdownRenderer";
import { portfolioData } from "../data/portfolioData";
import Logo from "./Logo";

interface GlossaryTermProps {
  termSlug: string;
  onNavigate?: (page: string, params?: { slug?: string; caseId?: string }) => void;
}

export default function GlossaryTerm({ termSlug, onNavigate }: GlossaryTermProps) {
  const term = useMemo(() => {
    return getTermBySlug(termSlug) || glossaryTerms[0];
  }, [termSlug]);

  const currentIndex = useMemo(() => {
    return glossaryTerms.findIndex((t) => t.slug === term.slug);
  }, [term]);

  const prevTerm = useMemo(() => {
    if (currentIndex <= 0) return null;
    return glossaryTerms[currentIndex - 1];
  }, [currentIndex]);

  const nextTerm = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= glossaryTerms.length - 1) return null;
    return glossaryTerms[currentIndex + 1];
  }, [currentIndex]);

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
      termSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "DefinedTerm",
            "@id": `https://lexkonovalov.com/glossary/${term.slug}.html#term`,
            "name": term.name,
            "termCode": term.slug,
            "description": term.definition,
            "inDefinedTermSet": {
              "@type": "DefinedTermSet",
              "@id": "https://lexkonovalov.com/glossary/#terms",
              "name": "Product Design Glossary",
              "url": "https://lexkonovalov.com/glossary/",
            },
            "url": `https://lexkonovalov.com/glossary/${term.slug}.html`,
          },
          {
            "@type": "BreadcrumbList",
            "@id": `https://lexkonovalov.com/glossary/${term.slug}.html#breadcrumbs`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://lexkonovalov.com/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Product Design Glossary",
                "item": "https://lexkonovalov.com/glossary/",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": term.name,
                "item": `https://lexkonovalov.com/glossary/${term.slug}.html`,
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
  }, [term]);

  // Match related term strings with terms in our canonical database
  const resolveRelatedTerm = (relatedName: string) => {
    const cleanName = relatedName.trim();
    return glossaryTerms.find(
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

    if (href.startsWith("/glossary/") && href.endsWith(".html")) {
      e.preventDefault();
      const slug = href.replace("/glossary/", "").replace(".html", "");
      onNavigate?.("glossary-term", { slug });
    } else if (href === "/glossary/" || href === "/glossary") {
      e.preventDefault();
      onNavigate?.("glossary");
    } else if (href === "/") {
      e.preventDefault();
      onNavigate?.("home");
    }
  };

  return (
    <div className="glossary-term-page">
      {/* Hero Header */}
      <header className="glossary-hero">
        <div className="glossary-container">
          <div className="glossary-hero__header">
            <a
              id="brand-logo-term"
              href="/"
              className="logo"
              aria-label={`${portfolioData.designerName} - Home`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("home");
              }}
            >
              <Logo />
              <span>{portfolioData.designerName}</span>
            </a>
          </div>

          <div className="glossary-hero__content">
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
                    Home
                  </a>
                </li>
                <li className="glossary-breadcrumbs__separator" aria-hidden="true">
                  /
                </li>
                <li className="glossary-breadcrumbs__item">
                  <a
                    href="/glossary/"
                    className="glossary-breadcrumbs__link"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.("glossary");
                    }}
                  >
                    Product Design Glossary
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
          </div>
        </div>
      </header>

      {/* Main Term Article */}
      <main id="main-content-frame">
        <article className="glossary-term-article">
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
                  Definition
                </h2>
                <p className="glossary-term-section__text">{term.definition}</p>
              </section>

              {/* Purpose */}
              <section className="glossary-term-section" aria-labelledby="section-purpose">
                <h2 id="section-purpose" className="glossary-term-section__title">
                  Purpose
                </h2>
                <p className="glossary-term-section__text">{term.purpose}</p>
              </section>

              {/* Key Concepts */}
              {term.keyConcepts && term.keyConcepts.length > 0 && (
                <section className="glossary-term-section" aria-labelledby="section-key-concepts">
                  <h2 id="section-key-concepts" className="glossary-term-section__title">
                    Key Concepts
                  </h2>
                  <div className="glossary-term-key-concepts">
                    {term.keyConcepts.map((concept, idx) => (
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
                  How It Works
                </h2>
                <p className="glossary-term-section__text">{term.howItWorks}</p>
              </section>

              {/* Related Terms */}
              {term.relatedTerms && term.relatedTerms.length > 0 && (
                <section className="glossary-term-section" aria-labelledby="section-related-terms">
                  <h2 id="section-related-terms" className="glossary-term-section__title">
                    Related Terms
                  </h2>
                  <ul className="glossary-term-related-list">
                    {term.relatedTerms.map((relatedName, idx) => {
                      const targetTerm = resolveRelatedTerm(relatedName);
                      return (
                        <li key={idx} className="glossary-term-related-item">
                          <span className="glossary-term-related-bullet" aria-hidden="true">
                            •
                          </span>
                          {targetTerm ? (
                            <a
                              href={`/glossary/${targetTerm.slug}.html`}
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
              {term.sources && term.sources.length > 0 && (
                <section className="glossary-term-section" aria-labelledby="section-sources">
                  <h2 id="section-sources" className="glossary-term-section__title">
                    Sources
                  </h2>
                  <ol className="glossary-term-sources-list">
                    {term.sources.map((source, idx) => (
                      <li key={idx} className="glossary-term-sources-item">
                        {source}
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </>
          )}

          {/* Pagination & Traversal Navigation */}
          <nav className="glossary-term-nav" aria-label="Glossary Navigation">
            <a
              href="/glossary/"
              className="glossary-term-nav__btn"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("glossary");
              }}
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
              <span>Back to Glossary</span>
            </a>

            <div className="glossary-term-nav__pill-group">
              {prevTerm ? (
                <a
                  href={`/glossary/${prevTerm.slug}.html`}
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
                  <span>Previous</span>
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
                  <span>Previous</span>
                </span>
              )}

              <span className="glossary-term-nav__divider" aria-hidden="true" />

              {nextTerm ? (
                <a
                  href={`/glossary/${nextTerm.slug}.html`}
                  className="glossary-term-nav__item"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.("glossary-term", { slug: nextTerm.slug });
                  }}
                  title={nextTerm.name}
                >
                  <span>Next</span>
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
                  <span>Next</span>
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
      </main>
    </div>
  );
}
