---
url: "https://lexkonovalov.com/glossary/touch-target-size.html"
title: "Touch Target Size: WCAG Minimums and Spacing"
description: "Learn the WCAG 2.2 minimum target size, when spacing counts, and how to measure the clickable area of small icon buttons in dense interfaces."
canonical: "https://lexkonovalov.com/glossary/touch-target-size.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Touch Target Size: WCAG Minimums and Spacing", "og:description": "Learn the WCAG 2.2 minimum target size, when spacing counts, and how to measure the clickable area of small icon buttons in dense interfaces.", "og:url": "https://lexkonovalov.com/glossary/touch-target-size.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Register this entry in the glossary index under Design Systems & Engineering and UX & Product Architecture. Use existing term-status conventions.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use touch-target-size as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Render all supplied sources and related-term links. Generate Previous/Next navigation through the existing glossary mechanism. The article content is only the Markdown body below the front matter.
  
  Create the glossary entry at https://lexkonovalov.com/glossary/touch-target-size.html. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Coordinate release of the linked accessibility entries and the WCAG hub update. Expose links once their destination routes resolve. Check whether a route already exists before creating it and keep one index entry per term. Use the current glossary index and sitemap generation path.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/touch-target-size.html#webpage",
        "url": "https://lexkonovalov.com/glossary/touch-target-size.html",
        "name": "Touch Target Size: WCAG Minimums and Spacing",
        "description": "Learn the WCAG 2.2 minimum target size, when spacing counts, and how to measure the clickable area of small icon buttons in dense interfaces.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/touch-target-size.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/touch-target-size.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/touch-target-size.html#term",
        "name": "Touch Target Size",
        "termCode": "touch-target-size",
        "description": "Touch target size is the width and height of the area that responds when someone taps or clicks a control. WCAG 2.2 applies its target-size criteria to pointer inputs, including touch and mouse. Measure the interactive area of the control, including any padding that can receive input.",
        "url": "https://lexkonovalov.com/glossary/touch-target-size.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/touch-target-size.html#webpage"
        },
        "alternateName": [
          "Pointer Target Size",
          "Target Size"
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
        "@id": "https://lexkonovalov.com/glossary/touch-target-size.html#breadcrumbs",
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
            "name": "Touch Target Size",
            "item": "https://lexkonovalov.com/glossary/touch-target-size.html"
          }
        ]
      }
    ]
  }
---

# Touch Target Size

Touch target size is the width and height of the area that responds when someone taps or clicks a control. WCAG 2.2 applies its target-size criteria to pointer inputs, including touch and mouse. Measure the interactive area of the control, including any padding that can receive input.

## What target size does WCAG require?

| WCAG criterion | Minimum target size |
|---|---|
| **2.5.8 Target Size (Minimum), Level AA** | **24 × 24 CSS pixels**, unless an exception applies. |
| **2.5.5 Target Size (Enhanced), Level AAA** | **44 × 44 CSS pixels**, with its own exceptions. |

For the AA spacing exception, place an imaginary circle 24 CSS pixels in diameter at the center of each undersized target’s bounding box. Each circle must avoid overlapping another target or the circle around another undersized target. There are separate exceptions for inline targets, a qualifying equivalent control on the same page, targets sized by the browser without author modification, and essential presentation.

## Example: Edit and delete buttons in a table

A booking table has two 16 × 16 CSS-pixel icon buttons on the same row. Their centers are 20 CSS pixels apart, so their 24-pixel circles overlap. The pair fails the spacing check. Moving their centers to 28 CSS pixels apart clears that overlap for the pair. Check other row actions and nearby targets too.

Another option is to keep each icon at 16 × 16 CSS pixels and add 4 CSS pixels of padding on each side of its button to create a 24 × 24 target. Keep the resulting hit areas separate. In a narrow layout, test the rendered controls with both touch and a mouse so you can tell which action each area triggers.

## Related terms

- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [Keyboard Accessibility & Focus Management](/glossary/keyboard-accessibility.html)
- [Zoom, Text Resize & Reflow](/glossary/zoom-text-resize-reflow.html)
- [Design System](/glossary/design-system.html)
- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)

## Sources

- [Understanding Target Size (Minimum), W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Understanding Target Size (Enhanced), W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
