---
url: "https://lexkonovalov.com/glossary/wcag-color-contrast.html"
title: "WCAG Color Contrast: Text, Icons, and UI Controls"
description: "Learn WCAG AA contrast ratios for text and interface elements, and see how to test design token pairs across light and dark themes."
canonical: "https://lexkonovalov.com/glossary/wcag-color-contrast.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "WCAG Color Contrast: Text, Icons, and UI Controls", "og:description": "Learn WCAG AA contrast ratios for text and interface elements, and see how to test design token pairs across light and dark themes.", "og:url": "https://lexkonovalov.com/glossary/wcag-color-contrast.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Register this entry in the glossary index under Design Systems & Engineering and UX & Product Architecture. Use existing term-status conventions.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use wcag-color-contrast as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Render all supplied sources and related-term links. Generate Previous/Next navigation through the existing glossary mechanism. The article content is only the Markdown body below the front matter.
  
  Create the glossary entry at https://lexkonovalov.com/glossary/wcag-color-contrast.html. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Coordinate release of the linked accessibility entries and the WCAG hub update. Expose links once their destination routes resolve. Check whether a route already exists before creating it and keep one index entry per term. Use the current glossary index and sitemap generation path.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/wcag-color-contrast.html#webpage",
        "url": "https://lexkonovalov.com/glossary/wcag-color-contrast.html",
        "name": "WCAG Color Contrast: Text, Icons, and UI Controls",
        "description": "Learn WCAG AA contrast ratios for text and interface elements, and see how to test design token pairs across light and dark themes.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/wcag-color-contrast.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/wcag-color-contrast.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/wcag-color-contrast.html#term",
        "name": "WCAG Color Contrast",
        "termCode": "wcag-color-contrast",
        "description": "WCAG color contrast measures the difference in relative luminance between two colors. WCAG uses contrast ratios to set minimums for text and for visual information people need to identify interface controls, states, and graphics.",
        "url": "https://lexkonovalov.com/glossary/wcag-color-contrast.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/wcag-color-contrast.html#webpage"
        },
        "alternateName": [
          "Color Contrast"
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
        "@id": "https://lexkonovalov.com/glossary/wcag-color-contrast.html#breadcrumbs",
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
            "name": "WCAG Color Contrast",
            "item": "https://lexkonovalov.com/glossary/wcag-color-contrast.html"
          }
        ]
      }
    ]
  }
---

# WCAG Color Contrast

WCAG color contrast measures the difference in relative luminance between two colors. WCAG uses contrast ratios to set minimums for text and for visual information people need to identify interface controls, states, and graphics.

## What are the WCAG AA contrast ratios?

| What you are checking | Minimum contrast |
|---|---|
| Standard text and images of text | **4.5:1** against the background under criterion 1.4.3. |
| Large text and images of large text | **3:1** under 1.4.3. Large text is at least 18 pt regular or 14 pt bold, approximately 24 CSS px or 18.7 CSS px, respectively. |
| Visual cues needed to identify a control or state, and parts of graphics needed to understand the content | **3:1** against adjacent colors under criterion 1.4.11, subject to its exceptions. |

Test the rendered foreground against the background it appears on. Placeholder text is subject to the text-contrast requirement. An icon that repeats a visible label may be decorative. For an icon-only button, check the visible icon against its background and give the button an accessible name. Keep a text or shape cue where color alone would convey an error or state.

## Example: Testing a semantic token in two themes

A design system uses `text.secondary` for normal-size text. On a white surface, `#596579` gives a contrast ratio of about **5.90:1**. The same token value on a dark surface, `#171C24`, gives about **2.90:1**, below the 4.5:1 minimum for standard text. Using `#AAB5C5` for `text.secondary` on that dark surface gives about **8.25:1**.

Document which foreground and surface tokens can be paired in each theme. Test those pairs in the components that use them, including relevant states such as errors, selection, and focus. For transparency or gradients, check the actual backgrounds the content can appear against. Use the unrounded ratio for a pass or fail decision.

## Related terms

- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [Keyboard Accessibility & Focus Management](/glossary/keyboard-accessibility.html)
- [Design Tokens](/glossary/design-tokens.html)
- [Semantic Tokens](/glossary/semantic-tokens.html)
- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)

## Sources

- [Understanding Contrast (Minimum), W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Understanding Non-text Contrast, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [Understanding Use of Color, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
