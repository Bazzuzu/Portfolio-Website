---
url: "https://lexkonovalov.com/glossary/accessibility-wcag.html"
title: "Accessibility & WCAG 2.2 | Product Design Glossary"
description: "Understand WCAG 2.2, the POUR principles, A/AA/AAA levels, and practical checks for contrast, keyboard focus, target size, and accessible forms."
canonical: "https://lexkonovalov.com/glossary/accessibility-wcag.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Accessibility & WCAG 2.2 | Product Design Glossary", "og:description": "Understand WCAG 2.2, the POUR principles, A/AA/AAA levels, and practical checks for contrast, keyboard focus, target size, and accessible forms.", "og:url": "https://lexkonovalov.com/glossary/accessibility-wcag.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, Product Strategy & Growth and term status "Established" in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use accessibility-wcag as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with header cells that work on mobile. Render all supplied links and sources, including Design System Governance from the live page. Keep Previous/Next navigation on the existing glossary mechanism. Coordinate publication with the linked accessibility entries. Publish internal links once their canonical destination routes resolve. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#webpage",
        "url": "https://lexkonovalov.com/glossary/accessibility-wcag.html",
        "name": "Accessibility & WCAG 2.2 | Product Design Glossary",
        "description": "Understand WCAG 2.2, the POUR principles, A/AA/AAA levels, and practical checks for contrast, keyboard focus, target size, and accessible forms.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
          "https://www.w3.org/WAI/fundamentals/accessibility-principles/",
          "https://www.w3.org/TR/WCAG22/",
          "https://www.w3.org/WAI/standards-guidelines/wcag/",
          "https://www.w3.org/WAI/tutorials/forms/notifications/",
          "https://www.w3.org/WAI/test-evaluate/",
          "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
          "https://github.com/web-arena-x/webarena/blob/main/resources/README.md",
          "https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/",
          "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#term",
        "name": "Accessibility and WCAG",
        "alternateName": [
          "Web accessibility and WCAG"
        ],
        "termCode": "accessibility-wcag",
        "description": "Web accessibility means designing and building websites and tools that people with disabilities can use. The Web Content Accessibility Guidelines (WCAG), developed through the W3C Web Accessibility Initiative, provide testable requirements for making web content more accessible.",
        "url": "https://lexkonovalov.com/glossary/accessibility-wcag.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#webpage"
        }
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
        "@id": "https://lexkonovalov.com/glossary/accessibility-wcag.html#breadcrumbs",
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
            "name": "Accessibility and WCAG",
            "item": "https://lexkonovalov.com/glossary/accessibility-wcag.html"
          }
        ]
      }
    ]
  }
---

# Accessibility and WCAG

Web accessibility means designing and building websites and tools that people with disabilities can use. The Web Content Accessibility Guidelines (WCAG), developed through the W3C Web Accessibility Initiative, provide testable requirements for making web content more accessible.

Accessibility addresses visual, auditory, motor, cognitive, and other access needs. WCAG provides a technical baseline; usability testing with people with disabilities helps teams understand barriers in real tasks.

## What are the four WCAG principles?

WCAG organizes its requirements under four principles, often abbreviated **POUR**:

| Principle | What it means in practice |
|---|---|
| Perceivable | Provide information people can perceive, such as [alt text](/glossary/alt-text.html) for meaningful images and captions for video. |
| Operable | Make controls usable with different input methods, including a keyboard. |
| Understandable | Use clear instructions, predictable behavior, and helpful error messages. |
| Robust | Expose content and controls so browsers and assistive technologies can interpret them. |

## What do A, AA, and AAA mean?

These are cumulative conformance levels. **A** covers Level A criteria. **AA** includes A and AA. **AAA** includes all three levels. A conformance claim records the version, level, scope, date, and technologies relied upon. Conformance applies to full pages. When a page is part of a process, such as checkout, every step in that process must conform at the claimed level.

## How do WCAG 2.0, 2.1, and 2.2 differ?

| Version | What it adds or establishes |
|---|---|
| **WCAG 2.0** | The original WCAG 2 baseline, covering areas such as text alternatives, keyboard access, and text contrast. |
| **WCAG 2.1** | Adds criteria for mobile use, low vision, and other access needs, including reflow, non-text contrast, and status messages. |
| **WCAG 2.2** | Adds criteria for focus obscured by overlapping content, minimum pointer target size, alternatives to dragging, and accessible authentication, among others. It removes criterion 4.1.1 Parsing. |

WCAG 2.2 is a W3C Recommendation. WCAG 3 remains a working draft. Record the WCAG version your team targets and the version required by any applicable regulation or contract. If you report against WCAG 2.0 or 2.1, account for their published treatment of 4.1.1 and any reporting requirements.

## How does WCAG relate to accessibility requirements in the EU and U.S.?

Start with the organization, service, and market. Then identify the applicable rule or contract and the technical version it references.

| Product or organization | Where to start |
|---|---|
| Consumer e-commerce or another covered service in the EU | [European Accessibility Act](/glossary/european-accessibility-act.html) and the applicable national law. |
| An EU public sector website or mobile app | The Web Accessibility Directive and its referenced edition of [EN 301 549](/glossary/en-301-549.html). |
| A U.S. state or local government, or a U.S. business covered by the ADA | [ADA Web Accessibility](/glossary/ada-web-accessibility.html). The Title II web rule references WCAG 2.1 AA. Review Title III separately for covered businesses. |
| ICT developed, used, or procured by a U.S. federal agency | [Section 508](/glossary/section-508.html) and the applicable federal ICT requirements. |

## Which WCAG 2.2 checks matter in everyday design?

These examples are a starting point, not a complete audit:

- **Text contrast, 1.4.3 (AA):** Most text needs a contrast ratio of at least 4.5:1 against its background. Large-scale text needs 3:1: at least 18 pt, or 14 pt bold. The criterion includes exceptions, such as logos and inactive controls. See [WCAG Color Contrast](/glossary/wcag-color-contrast.html) for control colors and examples across themes. [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- **Target size, 2.5.8 (AA):** Pointer targets must be at least 24 × 24 CSS pixels unless an exception applies. See [Touch Target Size](/glossary/touch-target-size.html) for the spacing test and a table example. [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- **Focus visibility:** Keyboard focus must be visible under 2.4.7 (AA). Under 2.4.11 (AA), a focused component must not be entirely hidden by author-created content, such as a sticky banner. The separate Focus Appearance criterion, 2.4.13, is AAA. See [Keyboard Accessibility & Focus Management](/glossary/keyboard-accessibility.html) for a dialog example. [Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- **Accessible authentication, 3.3.8 (AA):** If an authentication step asks users to do something like remember or transcribe information, provide an alternative or a mechanism that helps them complete it, unless another specified exception applies. Supporting password managers and paste can help users complete a password step. [Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)

## An accessible form example

Consider a quote-request form with an email field. A persistent label is programmatically associated with the field. Keyboard users can reach it and see focus. If the address is incomplete, the form displays “Enter an email address in the format name@example.com” and programmatically associates that message with the field.

The error message explains the problem without relying on color alone. Previously entered values remain available, and the submission confirmation is perceivable with assistive technology. Test the full submission flow, including errors and confirmation.

See [Accessible Forms](/glossary/accessible-forms.html) for more on labeling fields, correcting errors, and checking submission feedback.

## How should teams test accessibility?

Combine automated checks with manual keyboard and screen reader testing. Check [text resizing and reflow](/glossary/zoom-text-resize-reflow.html) as users enlarge content. Include people with disabilities in usability research, and evaluate complete tasks as well as individual components. For a documented [web accessibility audit](/glossary/web-accessibility-audit.html), record the evaluation scope, evidence, and retest results.

## How do you make an AI interface accessible?

Use semantic headings, named controls, and a logical reading and focus order for generated content. A chat response containing a table or form needs the same accessible structure as other web content. Shared components help only when their configuration and surrounding task also work.

For streaming responses, test how content updates are announced. Avoid repeatedly announcing an entire growing answer or moving focus with every update. Provide a clear way to stop generation and return to the relevant content.

[WCAG status-message guidance](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) applies to qualifying updates such as waiting or completion messages; it does not make every generated paragraph a status message. Test the actual experience with keyboard and assistive technology, including interruptions and errors.

## How does web accessibility relate to AI browser agents?

WCAG addresses access for people with disabilities. Some AI browser agents also inspect the accessibility tree, where they can encounter the same field names, button roles, and control states used by assistive technology. [Semantic HTML](/glossary/semantic-html.html) provides the underlying structure, and [ARIA](/glossary/aria-accessible-rich-internet-applications.html) can describe states that a custom control needs to expose.

For the quote form, test whether a specific agent can find the email field, recover from an invalid address, and recognize a successful submission in a test environment. Record that result separately from human usability and WCAG conformance.

## Related terms

- [Semantic HTML](/glossary/semantic-html.html)
- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)
- [Component Architecture](/glossary/component-architecture.html)
- [Design System](/glossary/design-system.html)
- [Design System Governance](/glossary/design-system-governance.html)

## Sources

- [Introduction to Web Accessibility, W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Accessibility Principles, W3C WAI](https://www.w3.org/WAI/fundamentals/accessibility-principles/)
- [WCAG 2.2 Recommendation, W3C](https://www.w3.org/TR/WCAG22/)
- [WCAG 2 Overview, W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [User Notification: Forms Tutorial, W3C WAI](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [Evaluating Web Accessibility, W3C WAI](https://www.w3.org/WAI/test-evaluate/)
- [WebArena Agent Execution Traces](https://github.com/web-arena-x/webarena/blob/main/resources/README.md)
- [What’s New in WCAG 2.2, W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [Understanding Status Messages, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
