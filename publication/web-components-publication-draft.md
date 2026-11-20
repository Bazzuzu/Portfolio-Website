---
url: "https://lexkonovalov.com/glossary/web-components.html"
title: "Web Components: Definition, Building Blocks, and UX Checks"
description: "Understand Web Components, custom elements, Shadow DOM, and templates, with a design-system example and checks for accessibility and framework integration."
canonical: "https://lexkonovalov.com/glossary/web-components.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Web Components: Definition, Building Blocks, and UX Checks", "og:description": "Understand Web Components, custom elements, Shadow DOM, and templates, with a design-system example and checks for accessibility and framework integration.", "og:url": "https://lexkonovalov.com/glossary/web-components.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use web-components as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/web-components.html#webpage",
        "url": "https://lexkonovalov.com/glossary/web-components.html",
        "name": "Web Components: Definition, Building Blocks, and UX Checks",
        "description": "Understand Web Components, custom elements, Shadow DOM, and templates, with a design-system example and checks for accessibility and framework integration.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/web-components.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/web-components.html#breadcrumbs"
        },
        "citation": [
          "https://developer.mozilla.org/en-US/docs/Web/API/Web_components",
          "https://html.spec.whatwg.org/multipage/custom-elements.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/web-components.html#term",
        "name": "Web Components",
        "termCode": "web-components",
        "description": "Web Components are web platform technologies for building reusable custom interface elements with encapsulated behavior and, when needed, internal markup and styles. They let developers define elements that can be used in HTML alongside built-in elements.",
        "url": "https://lexkonovalov.com/glossary/web-components.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/web-components.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/web-components.html#breadcrumbs",
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
            "name": "Web Components",
            "item": "https://lexkonovalov.com/glossary/web-components.html"
          }
        ]
      }
    ]
  }
---

# Web Components

Web Components are web platform technologies for building reusable custom interface elements with encapsulated behavior and, when needed, internal markup and styles. They let developers define elements that can be used in HTML alongside built-in elements.

They can support a shared component library across applications. The integration still needs testing with each application's framework, rendering approach, and accessibility requirements.

## Main building blocks

- Custom elements define new HTML elements and their lifecycle behavior.
- Shadow DOM can provide a separate internal DOM tree and style encapsulation.
- HTML templates provide reusable markup, while slots allow content to be inserted into a component's Shadow DOM.

A custom element does not have to use every technology in this group. For example, using Shadow DOM is an implementation choice.

## Example: a shared booking-status element

A design system could expose a booking-status element that accepts a defined status value and renders the approved label and visual treatment.

Its contract should document accepted values, updates, accessible output, and theming. If the status is unknown, the element should display an appropriate fallback rather than imply that the booking is confirmed.

For interactive components, the contract also needs events, focus behavior, keyboard operation, and disabled states.

## Design-system checks

Verify accessible names, roles, and states in the assembled page. A custom element name does not automatically provide the semantics of a native button or form control.

Test forms, focus movement, styling hooks, and event handling in consuming applications. Prefer native HTML behavior where it meets the requirement, and document additional behavior where custom implementation is necessary.

Encapsulation can help manage component internals, but it does not remove integration or maintenance work.

## Related terms

- [Component Architecture](/glossary/component-architecture.html)
- [Design System](/glossary/design-system.html)
- [Semantic HTML](/glossary/semantic-html.html)
- [Headless UI Architecture](/glossary/headless-ui-architecture.html)

## Sources

- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [WHATWG: Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html)
