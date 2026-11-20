---
url: "https://lexkonovalov.com/glossary/section-508.html"
title: "Section 508 Accessibility: Federal ICT and WCAG"
description: "Learn what Section 508 covers, where the federal standards use WCAG 2.0 AA, and how ACRs and VPATs support accessibility procurement."
canonical: "https://lexkonovalov.com/glossary/section-508.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Section 508 Accessibility: Federal ICT and WCAG", "og:description": "Learn what Section 508 covers, where the federal standards use WCAG 2.0 AA, and how ACRs and VPATs support accessibility procurement.", "og:url": "https://lexkonovalov.com/glossary/section-508.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Register this entry in the glossary index under Design Systems & Engineering and UX & Product Architecture. Use existing category and term-status conventions.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use section-508 as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Render all supplied sources and related-term links. Generate Previous/Next navigation through the existing glossary mechanism. The article content is only the Markdown body below the front matter.
  
  Create the glossary entry at https://lexkonovalov.com/glossary/section-508.html. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  Publish this entry alongside the other accessibility cluster entries and the WCAG hub update so internal links resolve on release. Check whether a route already exists before creating it and keep one index entry per term. Use the current glossary index and sitemap generation path.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/section-508.html#webpage",
        "url": "https://lexkonovalov.com/glossary/section-508.html",
        "name": "Section 508 Accessibility: Federal ICT and WCAG",
        "description": "Learn what Section 508 covers, where the federal standards use WCAG 2.0 AA, and how ACRs and VPATs support accessibility procurement.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/section-508.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/section-508.html#breadcrumbs"
        },
        "citation": [
          "https://www.access-board.gov/ict/",
          "https://www.section508.gov/sell/acr/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/section-508.html#term",
        "name": "Section 508",
        "termCode": "section-508",
        "description": "Section 508 of the Rehabilitation Act requires U.S. federal agencies to make covered information and communication technology (ICT) accessible when they develop, procure, maintain, or use it. The Revised Section 508 Standards cover areas such as websites, electronic documents, software, hardware, and support documentation.",
        "url": "https://lexkonovalov.com/glossary/section-508.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/section-508.html#webpage"
        },
        "alternateName": [
          "Rehabilitation Act Section 508",
          "Revised Section 508 Standards"
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
        "@id": "https://lexkonovalov.com/glossary/section-508.html#breadcrumbs",
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
            "name": "Section 508",
            "item": "https://lexkonovalov.com/glossary/section-508.html"
          }
        ]
      }
    ]
  }
---

# Section 508

Section 508 of the Rehabilitation Act requires U.S. federal agencies to make covered information and communication technology (ICT) accessible when they develop, procure, maintain, or use it. The Revised Section 508 Standards cover areas such as websites, electronic documents, software, hardware, and support documentation.

## Which WCAG version does Section 508 use?

The Revised Section 508 Standards incorporate **WCAG 2.0 Level AA (including Level A)** for covered electronic content under E205.4 and for covered software under E207.2, with specified exceptions for some non-web criteria. Additional ICT requirements can apply. Teams using WCAG 2.2 for their own product work should still map evidence to the criteria and clauses the procurement names.

## What are VPATs and ACRs?

An **Accessibility Conformance Report (ACR)** describes how a specific product or version meets applicable accessibility requirements. A **VPAT** is a template vendors can use to prepare that report. An ACR supports procurement review, and its scope and test evidence determine how much the buyer can infer about a real workflow.

## Example: A SaaS tool for a federal agency

A federal agency evaluating a case-management app might request an ACR for the version under consideration. The product team can document keyboard access to the case table, screen reader output for status changes, and the accessibility of generated reports. The agency can review the evidence against the procurement’s requirements and test a representative workflow. Record the product version, test scope, and limitations with enough detail for the agency to assess their impact.

## Related terms

- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [ADA Web Accessibility](/glossary/ada-web-accessibility.html)
- [EN 301 549](/glossary/en-301-549.html)
- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)

## Sources

- [Revised Section 508 Standards, U.S. Access Board](https://www.access-board.gov/ict/)
- [Accessibility Conformance Reports, General Services Administration](https://www.section508.gov/sell/acr/)
