import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  getGlossaryCategories,
  getGlossaryTerms,
  GlossaryTerm,
} from "../data/glossaryData";
import { portfolioData } from "../data/portfolioData";
import Logo from "./Logo";

interface GlossaryHubProps {
  lang?: "en" | "ua";
  onLanguageChange?: (lang: "en" | "ua") => void;
  onNavigate?: (page: string, params?: { slug?: string; caseId?: string }) => void;
}

const ALPHABET_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ALPHABET_UA = [
  "А","Б","В","Г","Ґ","Д","Е","Є","Ж","З","И","І","Ї","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ю","Я",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

export default function GlossaryHub({ lang = "en", onLanguageChange, onNavigate }: GlossaryHubProps) {
  const isUa = lang === "ua";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => getGlossaryCategories(lang), [lang]);
  const allTerms = useMemo(() => getGlossaryTerms(lang), [lang]);
  const alphabet = isUa ? ALPHABET_UA : ALPHABET_EN;

  // Global keyboard shortcut: Cmd+K / Ctrl+K to focus search, Esc to clear
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === searchInputRef.current) {
        setSearchQuery("");
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter terms by query and category
  const filteredTerms = useMemo(() => {
    let result = allTerms;

    if (selectedCategory) {
      result = result.filter(
        (t) =>
          t.category.toLowerCase() === selectedCategory.toLowerCase() ||
          t.secondaryCategory?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.slug.toLowerCase().includes(q) ||
          (t.alternateName && (Array.isArray(t.alternateName) ? t.alternateName.some(a => a.toLowerCase().includes(q)) : t.alternateName.toLowerCase().includes(q))) ||
          t.keyConcepts.some((k) => k.toLowerCase().includes(q))
      );
    }

    return [...result].sort((a, b) => a.name.localeCompare(b.name, isUa ? "uk" : "en"));
  }, [allTerms, searchQuery, selectedCategory, isUa]);

  // Group filtered terms by first letter
  const groupedTerms = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((term) => {
      const char = term.name.trim().charAt(0).toUpperCase();
      const key = /[A-ZА-ЯЄІЇҐ]/.test(char) ? char : "#";
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(term);
    });
    return map;
  }, [filteredTerms]);

  // Letters that currently have available terms in this view
  const availableLetters = useMemo(() => {
    return new Set(Object.keys(groupedTerms));
  }, [groupedTerms]);

  // Schema.org Structured Data for DefinedTermSet
  useEffect(() => {
    const canonicalHubUrl = isUa ? "https://lexkonovalov.com/ua/glossary/" : "https://lexkonovalov.com/glossary/";
    const termSetSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": `${canonicalHubUrl}#terms`,
          "name": isUa ? "Словник продуктового дизайну" : "Product Design Glossary",
          "description": isUa
            ? `Канонічна таксономія зі ${allTerms.length} термінів, що охоплює UX та архітектуру продукту, дизайн-системи та інженерію, ШІ та агентні системи, а також продуктову стратегію та зростання.`
            : `A canonical ${allTerms.length}-term taxonomy covering UX & Product Architecture, Design Systems & Engineering, AI & Agentic Systems, and Product Strategy & Growth.`,
          "url": canonicalHubUrl,
          "inLanguage": isUa ? "uk-UA" : "en-US",
          "isPartOf": {
            "@id": "https://lexkonovalov.com/#website"
          },
          "hasDefinedTerm": allTerms.map((t) => ({
            "@type": "DefinedTerm",
            "@id": `${isUa ? "https://lexkonovalov.com/ua/glossary/" : "https://lexkonovalov.com/glossary/"}${t.slug}.html#term`,
            "name": t.name,
            "termCode": t.slug,
            "description": t.definition,
            "url": `${isUa ? "https://lexkonovalov.com/ua/glossary/" : "https://lexkonovalov.com/glossary/"}${t.slug}.html`,
          })),
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalHubUrl}#breadcrumbs`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": isUa ? "Головна" : "Home",
              "item": "https://lexkonovalov.com/",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": isUa ? "Словник продуктового дизайну" : "Product Design Glossary",
              "item": canonicalHubUrl,
            },
          ],
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "glossary-hub-jsonld";
    script.innerHTML = JSON.stringify(termSetSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("glossary-hub-jsonld");
      if (el) el.remove();
    };
  }, [allTerms, isUa]);

  const handleLetterClick = (e: React.MouseEvent, letter: string) => {
    e.preventDefault();
    const target = document.getElementById(`letter-${letter}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategoryToggle = (categoryName: string) => {
    setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <div className="glossary-page">
      {/* Hero Section */}
      <header className="glossary-hero">
        <div className="home-section-container">
          {/* Top Brand Logo & Language Switcher */}
          <div className="glossary-hero__header">
            <a
              id="brand-logo-glossary"
              href={isUa ? "/ua/glossary/" : "/glossary/"}
              className="logo"
              aria-label={`${portfolioData.designerName} - ${isUa ? "Головна" : "Home"}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("home");
              }}
            >
              <Logo />
              <span>{portfolioData.designerName}</span>
            </a>

            <div className="glossary-lang-switcher" role="group" aria-label={isUa ? "Перемикач мови" : "Language switcher"}>
              <button
                type="button"
                className={`glossary-lang-btn ${!isUa ? "glossary-lang-btn--active" : ""}`}
                onClick={() => onLanguageChange?.("en")}
                aria-pressed={!isUa}
                aria-label="English language"
              >
                EN
              </button>
              <span className="glossary-lang-divider" aria-hidden="true">|</span>
              <button
                type="button"
                className={`glossary-lang-btn ${isUa ? "glossary-lang-btn--active" : ""}`}
                onClick={() => onLanguageChange?.("ua")}
                aria-pressed={isUa}
                aria-label="Українська мова"
              >
                UA
              </button>
            </div>
          </div>

          <div className="glossary-hero__content">
            {/* Semantic Breadcrumbs */}
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
                    {isUa ? "Головна" : "Home"}
                  </a>
                </li>
                <li className="glossary-breadcrumbs__separator" aria-hidden="true">
                  /
                </li>
                <li className="glossary-breadcrumbs__item" aria-current="page">
                  <span className="glossary-breadcrumbs__current">
                    {isUa ? "Словник продуктового дизайну" : "Product Design Glossary"}
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="glossary-hero__title">
              {isUa ? "Словник продуктового дизайну" : "Product Design Glossary"}
            </h1>
            <p className="glossary-hero__description">
              {isUa
                ? "Канонічна таксономія зі 176 термінів, що охоплює UX та архітектуру продукту, дизайн-системи та інженерію, ШІ та агентні системи, а також продуктову стратегію та зростання."
                : "A curated collection of concepts, methods and technologies across UX architecture, design engineering, AI and product strategy."}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="glossary-main">
        <div className="glossary-container">
          {/* Search Input Bar */}
          <div className="glossary-search-wrapper" role="search">
            <div className="glossary-search-bar">
              <span className="glossary-search-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                ref={searchInputRef}
                type="search"
                className="glossary-search-input"
                placeholder={isUa ? "Пошук термінів, концепцій та акронімів... (⌘K)" : "Search terms, concepts and acronyms... (⌘K)"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label={isUa ? "Пошук по словнику" : "Search glossary terms"}
                autoComplete="off"
                spellCheck="false"
              />
              {searchQuery ? (
                <button
                  type="button"
                  className="glossary-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label={isUa ? "Очистити запит" : "Clear search query"}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              ) : (
                <span className="glossary-search-shortcut" aria-hidden="true">
                  ⌘K
                </span>
              )}
            </div>
          </div>

          {/* 4 Category Cards */}
          <section className="glossary-categories" aria-label={isUa ? "Категорії продуктового дизайну" : "Product Design Domains"}>
            <div className="glossary-categories__grid">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`glossary-category-card ${
                      isActive ? "glossary-category-card--active" : ""
                    }`}
                    onClick={() => handleCategoryToggle(cat.name)}
                    aria-pressed={isActive}
                  >
                    <h2 className="glossary-category-card__title">{cat.name}</h2>
                    <div className="glossary-category-card__meta">
                      <span className="glossary-category-card__count">
                        {isUa ? `${cat.count} термінів` : `${cat.count} terms`}
                      </span>
                      <span className="glossary-category-card__action">
                        {isUa
                          ? (isActive ? "Відфільтровано ✓" : "Докладніше ↗")
                          : (isActive ? "Filtered ✓" : "Explore ↗")}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <hr className="glossary-divider" aria-hidden="true" />

          {/* Browse A-Z Section */}
          <section className="glossary-browse" aria-label={isUa ? "За алфавітом" : "Browse A-Z"}>
            <div className="glossary-browse__header">
              <h2 className="glossary-browse__title">
                {isUa ? "За алфавітом" : "Browse A–Z"}
              </h2>
              {(selectedCategory || searchQuery) && (
                <div className="glossary-browse__filter-status">
                  <span>
                    {isUa
                      ? `Показано ${filteredTerms.length} з ${allTerms.length} термінів`
                      : `Showing ${filteredTerms.length} of ${allTerms.length} terms`}
                  </span>
                  <button
                    type="button"
                    className="glossary-browse__reset-btn"
                    onClick={handleResetFilters}
                  >
                    {isUa ? "Скинути фільтри" : "Reset filters"}
                  </button>
                </div>
              )}
            </div>

            {/* Alphabet Navigation Bar */}
            <nav className="glossary-alphabet-bar" aria-label={isUa ? "Алфавітна навігація" : "Alphabetical navigation"}>
              <ul className="glossary-alphabet-bar__list">
                {alphabet.map((letter, idx) => {
                  const hasTerms = availableLetters.has(letter);
                  return (
                    <React.Fragment key={letter}>
                      <li>
                        {hasTerms ? (
                          <a
                            href={`#letter-${letter}`}
                            className="glossary-alphabet-btn"
                            onClick={(e) => handleLetterClick(e, letter)}
                            aria-label={`${isUa ? "Перейти до літери" : "Jump to letter"} ${letter}`}
                          >
                            {letter}
                          </a>
                        ) : (
                          <span
                            className="glossary-alphabet-btn glossary-alphabet-btn--disabled"
                            aria-disabled="true"
                          >
                            {letter}
                          </span>
                        )}
                      </li>
                      {idx < alphabet.length - 1 && (
                        <li className="glossary-alphabet-sep" aria-hidden="true" />
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </nav>
          </section>

          {/* Terms Directory Columns */}
          <section className="glossary-directory" aria-label={isUa ? "Каталог термінів" : "Glossary Terms Directory"}>
            {filteredTerms.length === 0 ? (
              <div className="glossary-empty">
                <h3 className="glossary-empty__title">
                  {isUa ? "Термінів не знайдено" : "No terms found"}
                </h3>
                <p className="glossary-empty__text">
                  {isUa
                    ? `Жоден термін не відповідає "${searchQuery}"${selectedCategory ? ` у категорії ${selectedCategory}` : ""}.`
                    : `No concepts matched "${searchQuery}"${selectedCategory ? ` in ${selectedCategory}` : ""}.`}
                </p>
                <button
                  type="button"
                  className="glossary-empty__reset-btn"
                  onClick={handleResetFilters}
                >
                  {isUa ? "Очистити пошук та фільтри" : "Clear search and filters"}
                </button>
              </div>
            ) : (
              <div className="glossary-directory__columns">
                {Object.keys(groupedTerms)
                  .sort((a, b) => a.localeCompare(b, isUa ? "uk" : "en"))
                  .map((letter) => (
                    <div
                      key={letter}
                      id={`letter-${letter}`}
                      className="glossary-letter-group"
                    >
                      <header className="glossary-letter-group__header">
                        <h3 className="glossary-letter-group__letter">{letter}</h3>
                      </header>
                      <ul className="glossary-letter-group__list">
                        {groupedTerms[letter].map((term) => (
                          <li key={term.slug} className="glossary-letter-group__item">
                            <a
                              href={isUa ? `/ua/glossary/${term.slug}.html` : `/glossary/${term.slug}.html`}
                              className="glossary-letter-group__link"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate?.("glossary-term", { slug: term.slug });
                              }}
                            >
                              <span>{term.name}</span>
                              {searchQuery && (
                                <span className="glossary-letter-group__badge">
                                  {term.category}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}
