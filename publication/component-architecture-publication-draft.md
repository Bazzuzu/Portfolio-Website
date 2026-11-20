---
url: "https://lexkonovalov.com/glossary/component-architecture.html"
title: "UI Component Architecture | Product Design Glossary"
description: "Learn how to define a shared UI component’s public API, state, and composition. A dialog example shows where product behavior belongs."
canonical: "https://lexkonovalov.com/glossary/component-architecture.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "UI Component Architecture | Product Design Glossary", "og:description": "Learn how to define a shared UI component’s public API, state, and composition. A dialog example shows where product behavior belongs.", "og:url": "https://lexkonovalov.com/glossary/component-architecture.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use component-architecture as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/component-architecture.html#webpage",
        "url": "https://lexkonovalov.com/glossary/component-architecture.html",
        "name": "UI Component Architecture | Product Design Glossary",
        "description": "Learn how to define a shared UI component’s public API, state, and composition. A dialog example shows where product behavior belongs.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/component-architecture.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/component-architecture.html#breadcrumbs"
        },
        "citation": [
          "https://react.dev/learn/sharing-state-between-components",
          "https://www.radix-ui.com/primitives/docs/components/dialog",
          "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/component-architecture.html#term",
        "name": "Component Architecture",
        "termCode": "component-architecture",
        "description": "Component architecture is how a user interface is divided into components and how those components share data, state, and behavior. In a design system, it defines what a reusable component owns, what its consumers can configure, and how it fits into a larger interaction.",
        "url": "https://lexkonovalov.com/glossary/component-architecture.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/component-architecture.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/component-architecture.html#breadcrumbs",
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
            "name": "Component Architecture",
            "item": "https://lexkonovalov.com/glossary/component-architecture.html"
          }
        ]
      }
    ]
  }
---

# Component Architecture

Component architecture is how a user interface is divided into components and how those components share data, state, and behavior. In a design system, it defines what a reusable component owns, what its consumers can configure, and how it fits into a larger interaction.

## What belongs in a component’s public API?

The public API is the set of inputs, events, and composition points consumers can rely on. For a dialog, it might include a title, content slots, an open state, and a callback for requests to open or close. Document what each option does and the behavior consumers can expect.

Decide where state lives. An uncontrolled dialog manages whether it is open internally. In a controlled dialog, the application supplies the current state and handles requests to change it. Use controlled state when the workflow needs to coordinate opening or closing. For example, the application can close the dialog after a save succeeds.

## Example of a shared dialog

Suppose checkout and account settings both open a modal to review a change.

| Responsibility | Where it belongs |
|---|---|
| Dialog behavior | The shared dialog handles modal focus, keyboard dismissal, and how its title is exposed to assistive technology. |
| Review content | Each product supplies the text, details, and actions for its task. |
| Business outcome | Checkout submits the booking change, shows any error, and closes the dialog after a successful save. |

This boundary lets a product change its workflow without creating a new modal implementation. Review both the isolated component and a real screen. For example, after the dialog closes, check that focus returns to the trigger or another logical element if the trigger is gone.

## When should you add a variant or a separate component?

Add an option when consumers need a supported variation of the same interaction, such as a wider surface for comparison content. Compose the dialog with other components when the layout changes. Give a recurring workflow its own pattern or wrapper when it adds business rules that the base dialog cannot own. Before adding a shared option, try it in the screens that need it. Document the default and what each consumer can configure.

## Related terms

- [Component Libraries](/glossary/component-libraries.html)
- [Headless UI Architecture](/glossary/headless-ui-architecture.html)
- [Web Components](/glossary/web-components.html)
- [Semantic HTML](/glossary/semantic-html.html)

## Sources

- [Sharing State Between Components, React](https://react.dev/learn/sharing-state-between-components)
- [Dialog, Radix Primitives](https://www.radix-ui.com/primitives/docs/components/dialog)
- [Dialog (Modal) Pattern, W3C WAI](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
