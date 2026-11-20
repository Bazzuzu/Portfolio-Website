---
url: "https://lexkonovalov.com/glossary/keyboard-accessibility.html"
title: "Keyboard Accessibility & Focus Management | WCAG"
description: "Learn how to test keyboard access, focus order, visible focus, and focus return with a practical modal dialog example."
canonical: "https://lexkonovalov.com/glossary/keyboard-accessibility.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Keyboard Accessibility & Focus Management | WCAG", "og:description": "Learn how to test keyboard access, focus order, visible focus, and focus return with a practical modal dialog example.", "og:url": "https://lexkonovalov.com/glossary/keyboard-accessibility.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Register this entry in the glossary index under Design Systems & Engineering and UX & Product Architecture. Use existing term-status conventions.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use keyboard-accessibility as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Render all supplied sources and related-term links. Generate Previous/Next navigation through the existing glossary mechanism. The article content is only the Markdown body below the front matter.
  
  Create the glossary entry at https://lexkonovalov.com/glossary/keyboard-accessibility.html. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Coordinate release of the linked accessibility entries and the WCAG hub update. Expose links once their destination routes resolve. Check whether a route already exists before creating it and keep one index entry per term. Use the current glossary index and sitemap generation path.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#webpage",
        "url": "https://lexkonovalov.com/glossary/keyboard-accessibility.html",
        "name": "Keyboard Accessibility & Focus Management | WCAG",
        "description": "Learn how to test keyboard access, focus order, visible focus, and focus return with a practical modal dialog example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
          "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
          "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#term",
        "name": "Keyboard Accessibility & Focus Management",
        "termCode": "keyboard-accessibility",
        "description": "Keyboard accessibility lets people navigate and operate an interface through a keyboard interface. Focus management determines which element receives keyboard input as people move through the page, open a dialog, or return to their task.",
        "url": "https://lexkonovalov.com/glossary/keyboard-accessibility.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#webpage"
        },
        "alternateName": [
          "Keyboard Accessibility",
          "Focus Management"
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
        "@id": "https://lexkonovalov.com/glossary/keyboard-accessibility.html#breadcrumbs",
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
            "name": "Keyboard Accessibility & Focus Management",
            "item": "https://lexkonovalov.com/glossary/keyboard-accessibility.html"
          }
        ]
      }
    ]
  }
---

# Keyboard Accessibility & Focus Management

Keyboard accessibility lets people navigate and operate an interface through a keyboard interface. Focus management determines which element receives keyboard input as people move through the page, open a dialog, or return to their task.

## What should you test?

| Check | What to look for |
|---|---|
| **Keyboard operation and exit (2.1.1 and 2.1.2, A)** | Reach and use controls without a mouse. Follow the expected keys for each widget. Make sure users can leave any component they enter. |
| **Focus order (2.4.3, A)** | When navigating sequentially, focus follows an order that preserves meaning and operation. Start from a logical document order. |
| **Visible focus (2.4.7, AA)** | The user can see which control currently has keyboard focus. Check default and custom focus styles. |
| **Focus not obscured** | Under WCAG 2.2 criterion 2.4.11 (AA), content created by the site must leave at least part of the focused component visible. Test sticky headers, bottom bars, and overlays while tabbing. |

## Example: A booking-change dialog

1. Tab to the **Change booking** button and activate it. Focus moves inside the modal to a sensible starting point, such as the heading for a long dialog or the safer action for a hard-to-reverse change.
2. Use **Tab** and **Shift+Tab** to move between controls. Sequential focus stays inside the open modal. Check that the dialog’s sticky footer does not cover focused controls in the scrolling content.
3. Press **Escape** or use the visible close control. Focus normally returns to **Change booking**. If the trigger no longer exists or the user’s action leads to a different logical location, move focus to an appropriate element in that flow.

A modal can keep focus inside while it is open and still provide a keyboard way out. The modal pattern depends on a working exit and sensible focus placement after closing.

## Where should teams start?

Use native buttons and links for common actions and navigation. For a custom widget, confirm its expected keyboard interaction and test it in context. Check focus return in the product as well as the component preview. In the product, the trigger might disappear when the booking changes.

## Related terms

- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [Accessible Forms](/glossary/accessible-forms.html)
- [WCAG Color Contrast](/glossary/wcag-color-contrast.html)
- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)
- [Headless UI Architecture](/glossary/headless-ui-architecture.html)
- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)

## Sources

- [Understanding Keyboard, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [Understanding No Keyboard Trap, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [Understanding Focus Order, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [Understanding Focus Visible, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [Understanding Focus Not Obscured (Minimum), W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [Modal Dialog Pattern, W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
