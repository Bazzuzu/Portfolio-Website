---
url: "https://lexkonovalov.com/glossary/context-drift.html"
title: "Context Drift in AI Agents: Signs and Practical Checks"
description: "Learn how to recognize context drift in an AI conversation, test lost constraints, and preserve the task state an agent needs."
canonical: "https://lexkonovalov.com/glossary/context-drift.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Context Drift in AI Agents: Signs and Practical Checks", "og:description": "Learn how to recognize context drift in an AI conversation, test lost constraints, and preserve the task state an agent needs.", "og:url": "https://lexkonovalov.com/glossary/context-drift.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use context-drift as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/context-drift.html#webpage",
        "url": "https://lexkonovalov.com/glossary/context-drift.html",
        "name": "Context Drift in AI Agents: Signs and Practical Checks",
        "description": "Learn how to recognize context drift in an AI conversation, test lost constraints, and preserve the task state an agent needs.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/context-drift.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/context-drift.html#breadcrumbs"
        },
        "citation": [
          "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents",
          "https://arxiv.org/abs/2307.03172"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/context-drift.html#term",
        "name": "Context Drift",
        "termCode": "context-drift",
        "description": "Context drift describes an AI conversation or agent gradually losing track of the user’s goal, relevant facts, or earlier constraints. Teams use the term to discuss behavior over an interaction, especially when history, retrieved material, and tool results accumulate.",
        "url": "https://lexkonovalov.com/glossary/context-drift.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/context-drift.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/context-drift.html#breadcrumbs",
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
            "name": "Context Drift",
            "item": "https://lexkonovalov.com/glossary/context-drift.html"
          }
        ]
      }
    ]
  }
---

# Context Drift

Context drift describes an AI conversation or agent gradually losing track of the user’s goal, relevant facts, or earlier constraints. Teams use the term to discuss behavior over an interaction, especially when history, retrieved material, and tool results accumulate.

## What does context drift look like?

An assistant may revert to a rejected option, apply a rule to the wrong record, or continue after the goal has changed. Record the specific failure and the information available at that step. A long conversation can expose such problems, while the same symptom can also come from ambiguous instructions, poor retrieval, or an incorrect tool result.

## Example: A booking assistant forgets a constraint

A traveler asks for a refundable flight arriving before noon. After several alternatives and policy lookups, the assistant recommends a cheaper nonrefundable fare. The team checks whether the refundability requirement remained in the model’s context and whether the tool result described that fare correctly.

A useful task state records the selected traveler, dates, constraints, and unresolved questions. Refresh it when the user changes a requirement. When summarizing history, retain the reason an option was rejected.

## How do you test for drift?

Create a multi-turn task with constraints that remain relevant near the end. Check the final recommendation and intermediate actions against those constraints. Compare context-management changes on the same cases, including a changed requirement and conflicting evidence. Summarization and selective retrieval are approaches to evaluate. Measure whether they preserve the facts the task requires.

## Related terms

- [Context Engineering](/glossary/context-engineering.html)
- [Agent Harness](/glossary/agent-harness.html)
- [Prompt Engineering](/glossary/prompt-engineering.html)

- [Context Window](/glossary/context-window.html)

## Sources

- [Effective Context Engineering for AI Agents, Anthropic](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)
- [Lost in the Middle, Liu et al.](https://arxiv.org/abs/2307.03172)
