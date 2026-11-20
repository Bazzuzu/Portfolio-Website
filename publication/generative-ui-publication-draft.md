---
url: "https://lexkonovalov.com/glossary/generative-ui.html"
title: "Generative UI: Definition, Examples, and Design Controls"
description: "Learn how generative UI turns AI responses into interactive interfaces, with a booking example and practical controls for consistency and accessibility."
canonical: "https://lexkonovalov.com/glossary/generative-ui.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Generative UI: Definition, Examples, and Design Controls", "og:description": "Learn how generative UI turns AI responses into interactive interfaces, with a booking example and practical controls for consistency and accessibility.", "og:url": "https://lexkonovalov.com/glossary/generative-ui.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use generative-ui as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/generative-ui.html#webpage",
        "url": "https://lexkonovalov.com/glossary/generative-ui.html",
        "name": "Generative UI: Definition, Examples, and Design Controls",
        "description": "Learn how generative UI turns AI responses into interactive interfaces, with a booking example and practical controls for consistency and accessibility.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/generative-ui.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/generative-ui.html#breadcrumbs"
        },
        "citation": [
          "https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces",
          "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/generative-ui.html#term",
        "name": "Generative UI",
        "termCode": "generative-ui",
        "description": "Generative UI is an approach in which AI generates or selects interface elements in response to a user's request and context. The result can include interactive cards, forms, tables, or charts alongside text.",
        "url": "https://lexkonovalov.com/glossary/generative-ui.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/generative-ui.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/generative-ui.html#breadcrumbs",
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
            "name": "Generative UI",
            "item": "https://lexkonovalov.com/glossary/generative-ui.html"
          }
        ]
      }
    ]
  }
---

# Generative UI

Generative UI is an approach in which AI generates or selects interface elements in response to a user's request and context. The result can include interactive cards, forms, tables, or charts alongside text.

Implementations vary. A model might select an approved component and supply its data, or generate a new layout. The AI SDK documents an approach that connects tool results to existing React components. A product can use generative UI while retaining a stable navigation system and design language.

## Example: comparing flight options

A traveler asks for two flights that arrive before noon. The application retrieves available flights and renders comparison cards with arrival times, prices, and fare conditions.

The user can change the dates or open an option's details directly. If the request is ambiguous, the interface asks for the missing constraint. If availability cannot be retrieved, it displays that state instead of inventing a bookable fare.

The useful interaction is the ability to inspect and act on structured information.

## What designers should specify

- Define the components the system can use and the data each requires.
- Distinguish retrieved facts from generated explanations.
- Design loading, empty, error, and partial-result states.
- Preserve labels, focus order, and keyboard operation when content changes.
- Make important status changes available to assistive technology.
- Require the appropriate review before a consequential action.

Test representative requests, including unavailable data and contradictory constraints. Evaluate whether users can complete the task and understand the result. Visual variety alone does not establish that the interface is useful.

## How can schemas constrain generated UI?

A product can use [structured outputs](/glossary/structured-outputs.html) to restrict a model to supported component names and data fields. A controlled renderer then maps those descriptions to approved implementations.

Schema conformance does not establish that a fare is available, a record belongs to the user, or an action is authorized. Validate data and enforce permissions in the application. Test focus, keyboard interaction, and recovery when the generated selection changes.

## Related terms

- [AI-native Design](/glossary/ai-native-design.html)
- [Tool Calling (Function Calling)](/glossary/tool-calling-function-calling.html)
- [Component Architecture](/glossary/component-architecture.html)
- [Model Context Protocol (MCP)](/glossary/model-context-protocol-mcp.html)

- [Conversational UX](/glossary/conversational-ux.html)

## Sources

- [Vercel AI SDK: Generative User Interfaces](https://ai-sdk.dev/docs/ai-sdk-ui/generative-user-interfaces)
- [W3C: Understanding Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
