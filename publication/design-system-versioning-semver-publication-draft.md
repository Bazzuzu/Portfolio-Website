---
url: "https://lexkonovalov.com/glossary/design-system-versioning-semver.html"
title: "Design System Versioning and SemVer | Product Design Glossary"
description: "Apply SemVer to a design system package with a declared public API. See major, minor, and patch dialog changes and how to plan a migration."
canonical: "https://lexkonovalov.com/glossary/design-system-versioning-semver.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Design System Versioning and SemVer | Product Design Glossary", "og:description": "Apply SemVer to a design system package with a declared public API. See major, minor, and patch dialog changes and how to plan a migration.", "og:url": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use design-system-versioning-semver as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Replace the article content and source list in the term's data. The current Sources text includes unrelated AI & Agentic Systems category copy. Keep that copy out of the term's article and source list. Preserve the category introduction on its own page or section if applicable.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html",
        "name": "Design System Versioning and SemVer | Product Design Glossary",
        "description": "Apply SemVer to a design system package with a declared public API. See major, minor, and patch dialog changes and how to plan a migration.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#breadcrumbs"
        },
        "citation": [
          "https://semver.org/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#term",
        "name": "Design System Versioning & SemVer",
        "termCode": "design-system-versioning-semver",
        "description": "Design system versioning helps teams identify releases and understand what changes when they upgrade a shared system. Semantic Versioning (SemVer) is one scheme for versioning software packages based on changes to a declared public API.",
        "url": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#webpage"
        },
        "alternateName": [
          "Design System Versioning"
        ]
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://lexkonovalov.com/glossary/#terms",
        "name": "Product Design Glossary",
        "url": "https://lexkonovalov.com/glossary/",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lexkonovalov.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Product Design Glossary",
            "item": "https://lexkonovalov.com/glossary/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Design System Versioning & SemVer",
            "item": "https://lexkonovalov.com/glossary/design-system-versioning-semver.html"
          }
        ]
      }
    ]
  }
---

# Design System Versioning & SemVer

Design system versioning helps teams identify releases and understand what changes when they upgrade a shared system. Semantic Versioning (SemVer) is one scheme for versioning software packages based on changes to a declared public API.

## What counts as the public API?

Document which component exports, props, supported behaviors, and token names consumers can rely on. This is the compatibility contract for the package. Decide whether particular visual behavior is part of that contract and describe other visible changes in the release notes.

Design files and code can have different release schedules. Map a design library update to its matching code release when their changes are meant to be used together, and tell teams where to check compatibility.

## Major, minor, and patch examples

For a stable package at `2.4.1`, treat each row as a separate release example.

| Change | Next version | Why |
|---|---|---|
| Fix a dialog bug so focus returns to the trigger as documented | `2.4.2` | Backward-compatible bug fix |
| Add an optional wide dialog variant and keep the current default | `2.5.0` | Backward-compatible addition |
| Remove a documented dialog prop | `3.0.0` | Breaking change to the public API |

A token color update does not automatically determine the version bump. Check the compatibility contract first. A change that breaks a declared guarantee needs a major bump even if it only changes a value. Communicate visible changes in any release. For example, removing a documented token name is different from correcting its value to match the documented design.

## How do you plan a breaking change?

If you are renaming a public prop, add the replacement while keeping the old prop working. Mark the old one deprecated in a minor release and explain how to migrate. Agree on the deprecation window and check representative products before removing it in a major release.

Publish migration notes with the affected consumers, a before-and-after example, and any manual checks. For a shared dialog, include a keyboard test in a real flow. For a prop rename, show the replacement prop and explain when teams can remove the old one from their code.

## Component lifecycle and release notes

Teams can label components experimental, supported, deprecated, or retired, with explicit meanings for each status. These lifecycle labels describe support expectations; they are not a replacement for the package's compatibility policy.

Release notes should explain the user or consumer effect, the required action, and where to find a [migration plan](/glossary/design-system-migration.html). For example: “The next major release removes the old dialog width prop. Use the size option shown in the migration example, then check narrow layouts and long content.”

Keep planned removal conditions distinct from the date an old component actually disappears. Record who can help consumers resolve a blocker.

## Related terms

- [Design System Governance](/glossary/design-system-governance.html)
- [Component Architecture](/glossary/component-architecture.html)
- [DesignOps](/glossary/designops.html)

## Sources

- [Semantic Versioning 2.0.0](https://semver.org/)
