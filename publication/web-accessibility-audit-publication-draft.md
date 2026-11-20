---
url: "https://lexkonovalov.com/glossary/web-accessibility-audit.html"
title: "Web Accessibility Audit: How to Test and Report Findings"
description: "Learn how to scope a web accessibility audit, combine automated and manual tests, sample complete tasks, and write findings developers can reproduce."
canonical: "https://lexkonovalov.com/glossary/web-accessibility-audit.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Web Accessibility Audit: How to Test and Report Findings", "og:description": "Learn how to scope a web accessibility audit, combine automated and manual tests, sample complete tasks, and write findings developers can reproduce.", "og:url": "https://lexkonovalov.com/glossary/web-accessibility-audit.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Register this entry in the glossary index under Design Systems & Engineering and UX & Product Architecture. Use existing category and term-status conventions.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use web-accessibility-audit as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Render all supplied sources and related-term links. Generate Previous/Next navigation through the existing glossary mechanism. The article content is only the Markdown body below the front matter.
  
  Create the glossary entry at https://lexkonovalov.com/glossary/web-accessibility-audit.html. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  Publish this entry alongside the other accessibility cluster entries and the WCAG hub update so internal links resolve on release. Check whether a route already exists before creating it and keep one index entry per term. Use the current glossary index and sitemap generation path.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#webpage",
        "url": "https://lexkonovalov.com/glossary/web-accessibility-audit.html",
        "name": "Web Accessibility Audit: How to Test and Report Findings",
        "description": "Learn how to scope a web accessibility audit, combine automated and manual tests, sample complete tasks, and write findings developers can reproduce.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/test-evaluate/",
          "https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/",
          "https://www.w3.org/WAI/test-evaluate/involving-users/",
          "https://www.w3.org/TR/WCAG22/",
          "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#term",
        "name": "Web Accessibility Audit",
        "termCode": "web-accessibility-audit",
        "description": "A web accessibility audit is a documented evaluation of a website or web app against a defined accessibility standard and scope. It identifies barriers, records how they were found, and gives teams evidence they can use to prioritize fixes and verify changes.",
        "url": "https://lexkonovalov.com/glossary/web-accessibility-audit.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#webpage"
        },
        "alternateName": [
          "Website Accessibility Audit",
          "Accessibility Audit"
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
        "@id": "https://lexkonovalov.com/glossary/web-accessibility-audit.html#breadcrumbs",
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
            "name": "Web Accessibility Audit",
            "item": "https://lexkonovalov.com/glossary/web-accessibility-audit.html"
          }
        ]
      }
    ]
  }
---

# Web Accessibility Audit

A web accessibility audit is a documented evaluation of a website or web app against a defined accessibility standard and scope. It identifies barriers, records how they were found, and gives teams evidence they can use to prioritize fixes and verify changes.

## How do you run a web accessibility audit?

1. **Define the scope and target.** Record the site or release, WCAG version and level or other applicable standard, and the browsers and assistive technologies used for testing.
2. **Sample representative content and complete tasks.** Include common templates, shared components, different states, and critical journeys such as checkout. If a sampled page is part of a process, include the steps needed to complete that process.
3. **Combine automated and manual tests.** Use scans for issues they can identify. Test keyboard operation, focus order, zoom and reflow, labels, errors, and announcements by hand. Include people with disabilities in usability evaluation to understand how barriers affect real tasks.
4. **Report and retest.** Record the affected page or state, environment, steps to reproduce, expected behavior, actual result, user impact, and applicable criterion. Retest the fix across other instances of a shared component.

## Example: A keyboard trap during checkout

| Evidence | Example finding |
|---|---|
| Location and test | Checkout, payment-help dialog. Open it by keyboard and try to close it with the available controls. |
| Actual result and impact | Focus stays inside the dialog. The visible close icon only responds to pointer input, so a keyboard user cannot return to payment. |
| Criterion and fix | WCAG 2.1.2 No Keyboard Trap (Level A). Make the close control keyboard-operable and verify that focus returns to the trigger when the dialog closes. |

The report should identify what the sample covers and any areas that remain untested. A short check of one page can uncover barriers. A conformance evaluation requires a broader review of the defined scope.

## Related terms

- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [Semantic HTML](/glossary/semantic-html.html)
- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)
- [EN 301 549](/glossary/en-301-549.html)
- [ADA Web Accessibility](/glossary/ada-web-accessibility.html)

## Sources

- [Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/)
- [WCAG Evaluation Methodology (WCAG-EM), W3C WAI](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)
- [Involving Users in Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/involving-users/)
- [WCAG 2.2 Recommendation, W3C](https://www.w3.org/TR/WCAG22/)
- [Understanding No Keyboard Trap, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
