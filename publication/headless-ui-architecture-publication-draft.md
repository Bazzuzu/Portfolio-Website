---
url: "https://lexkonovalov.com/glossary/headless-ui-architecture.html"
title: "Headless UI Architecture | Product Design Glossary"
description: "Learn what headless UI provides and what your team still owns. A modal dialog example covers focus, labels, styling, and when to choose it."
canonical: "https://lexkonovalov.com/glossary/headless-ui-architecture.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Headless UI Architecture | Product Design Glossary", "og:description": "Learn what headless UI provides and what your team still owns. A modal dialog example covers focus, labels, styling, and when to choose it.", "og:url": "https://lexkonovalov.com/glossary/headless-ui-architecture.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use headless-ui-architecture as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#webpage",
        "url": "https://lexkonovalov.com/glossary/headless-ui-architecture.html",
        "name": "Headless UI Architecture | Product Design Glossary",
        "description": "Learn what headless UI provides and what your team still owns. A modal dialog example covers focus, labels, styling, and when to choose it.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#breadcrumbs"
        },
        "citation": [
          "https://www.radix-ui.com/primitives/docs/components/dialog",
          "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
          "https://react-aria.adobe.com/Modal"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#term",
        "name": "Headless UI Architecture",
        "termCode": "headless-ui-architecture",
        "description": "Headless UI architecture separates reusable interface behavior from the visual design that makes it look and feel like part of a product. A headless component can provide state, keyboard interactions, and accessibility semantics while the consuming team supplies styling and integrates it into the workflow.",
        "url": "https://lexkonovalov.com/glossary/headless-ui-architecture.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/headless-ui-architecture.html#breadcrumbs",
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
            "name": "Headless UI Architecture",
            "item": "https://lexkonovalov.com/glossary/headless-ui-architecture.html"
          }
        ]
      }
    ]
  }
---

# Headless UI Architecture

Headless UI architecture separates reusable interface behavior from the visual design that makes it look and feel like part of a product. A headless component can provide state, keyboard interactions, and accessibility semantics while the consuming team supplies styling and integrates it into the workflow.

## What does a headless component provide?

Libraries expose behavior in different ways. An unstyled component can render elements and connect their behavior. A hook can expose state and interaction properties for the elements the application renders. Check what the library renders and which properties you must pass to your own elements.

## Example of a headless modal dialog

A travel team uses a dialog primitive to review a booking change. Radix Dialog, for example, provides modal focus handling, Escape dismissal, and parts for a title and description. The team supplies the title, fare details, buttons, and visible focus treatment. The booking request and error recovery remain part of the product workflow.

| Layer | What to verify |
|---|---|
| Behavior | Focus moves inside when the modal opens, Tab and Shift+Tab stay inside, and Escape closes it. |
| Content | The dialog has an accessible name, and the text explains what the user is reviewing. |
| Presentation | The contrast and focus indicator work in the actual theme. Longer text and zoom leave the content usable. |
| Integration | Closing usually returns focus to the trigger. If the trigger is gone, focus moves to a logical next element. A failed booking change gets clear feedback. |

A primitive can help implement an accessible pattern. Test the result in context because labels, styling, and the surrounding flow affect whether it works for users.

## When should you choose headless UI?

Use a headless approach when products need to share an interaction but require different visual treatments. It can also help a design system build its own styled wrapper around behavior it trusts. If teams already agree on the appearance and need a ready-to-use control, a styled component library can require less integration work. Compare the effort to implement and test the complete experience in a representative screen.

## Related terms

- [Component Architecture](/glossary/component-architecture.html)
- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [Semantic HTML](/glossary/semantic-html.html)
- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)

- [shadcn/ui](/glossary/shadcn-ui.html)

## Sources

- [Dialog, Radix Primitives](https://www.radix-ui.com/primitives/docs/components/dialog)
- [Dialog (Modal) Pattern, W3C WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Modal, React Aria](https://react-aria.adobe.com/Modal)
