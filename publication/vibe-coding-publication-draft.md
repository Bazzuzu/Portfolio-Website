---
url: "https://lexkonovalov.com/glossary/vibe-coding.html"
title: "Vibe Coding: Meaning, Prototype Example, and Limits"
description: "Understand vibe coding's original meaning, how it differs from broader AI-assisted development, and what a working prototype still needs before release."
canonical: "https://lexkonovalov.com/glossary/vibe-coding.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Vibe Coding: Meaning, Prototype Example, and Limits", "og:description": "Understand vibe coding's original meaning, how it differs from broader AI-assisted development, and what a working prototype still needs before release.", "og:url": "https://lexkonovalov.com/glossary/vibe-coding.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use vibe-coding as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/vibe-coding.html#webpage",
        "url": "https://lexkonovalov.com/glossary/vibe-coding.html",
        "name": "Vibe Coding: Meaning, Prototype Example, and Limits",
        "description": "Understand vibe coding's original meaning, how it differs from broader AI-assisted development, and what a working prototype still needs before release.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/vibe-coding.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/vibe-coding.html#breadcrumbs"
        },
        "citation": [
          "https://x.com/karpathy/status/1886192184808149383",
          "https://simonwillison.net/2025/Mar/19/vibe-coding/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/vibe-coding.html#term",
        "name": "Vibe Coding",
        "termCode": "vibe-coding",
        "description": "Vibe coding is an approach to building software by describing desired behavior to an AI coding tool and iterating on its output with limited attention to the generated code. Andrej Karpathy introduced the term in 2025 to describe this style of experimentation.",
        "url": "https://lexkonovalov.com/glossary/vibe-coding.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/vibe-coding.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/vibe-coding.html#breadcrumbs",
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
            "name": "Vibe Coding",
            "item": "https://lexkonovalov.com/glossary/vibe-coding.html"
          }
        ]
      }
    ]
  }
---

# Vibe Coding

Vibe coding is an approach to building software by describing desired behavior to an AI coding tool and iterating on its output with limited attention to the generated code. Andrej Karpathy introduced the term in 2025 to describe this style of experimentation.

The term is also used more broadly for AI-assisted development. Its original meaning is narrower: accepting and modifying generated software without closely reviewing how the implementation works.

## Example: exploring a scheduling interface

A designer asks an AI tool to build a room-assignment prototype using fictional reservations. They adjust the layout through prompts, try the interactions, and ask the tool to fix visible problems.

That can help the team explore whether a calendar, list, or split view communicates the task clearly. It does not establish that the scheduling rules are complete or that concurrent edits are handled correctly.

Keep the prototype's assumptions visible. For example, it might assume every reservation has an assigned room and ignore maintenance blocks.

## Vibe coding and reviewed development

AI-assisted development also includes workflows in which people inspect changes, understand the implementation, and verify requirements. Describe the actual level of review when discussing the work.

Before turning the scheduling prototype into a service, review data access, business rules, error handling, accessibility, and deployment behavior. Test conflicting bookings and failed saves, and identify who will maintain the code.

## What designers can evaluate

Separate the interaction hypothesis from implementation readiness. Observe whether people understand the prototype and can complete representative tasks.

A fast build can make an idea easier to test. Its value depends on what the team learns and whether the resulting product solves a real problem.

## Related terms

- [Design Engineering](/glossary/design-engineering.html)
- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)
- [Agent Harness](/glossary/agent-harness.html)
- [AI Agent](/glossary/ai-agent.html)

- [AI Prototyping](/glossary/ai-prototyping.html)

## Sources

- [Andrej Karpathy: Original Vibe Coding Post](https://x.com/karpathy/status/1886192184808149383)
- [Simon Willison: Vibe Coding and AI-Assisted Programming](https://simonwillison.net/2025/Mar/19/vibe-coding/)
