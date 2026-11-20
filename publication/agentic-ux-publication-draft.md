---
url: "https://lexkonovalov.com/glossary/agentic-ux.html"
title: "Agentic UX: Designing Control, Progress, and Recovery"
description: "Learn how agentic UX helps people delegate work to AI agents, review proposed actions, track progress, and recover when part of a task fails."
canonical: "https://lexkonovalov.com/glossary/agentic-ux.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Agentic UX: Designing Control, Progress, and Recovery", "og:description": "Learn how agentic UX helps people delegate work to AI agents, review proposed actions, track progress, and recover when part of a task fails.", "og:url": "https://lexkonovalov.com/glossary/agentic-ux.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use agentic-ux as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/agentic-ux.html#webpage",
        "url": "https://lexkonovalov.com/glossary/agentic-ux.html",
        "name": "Agentic UX: Designing Control, Progress, and Recovery",
        "description": "Learn how agentic UX helps people delegate work to AI agents, review proposed actions, track progress, and recover when part of a task fails.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/agentic-ux.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/agentic-ux.html#breadcrumbs"
        },
        "citation": [
          "https://pair.withgoogle.com/chapter/feedback-controls/",
          "https://pair.withgoogle.com/chapter/errors-failing/",
          "https://docs.langchain.com/oss/python/langgraph/interrupts"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/agentic-ux.html#term",
        "name": "Agentic UX",
        "termCode": "agentic-ux",
        "description": "Agentic UX is the design of experiences in which people delegate goals or tasks to AI agents and retain appropriate visibility and control over the work. It covers the interaction before, during, and after an agent takes action.",
        "url": "https://lexkonovalov.com/glossary/agentic-ux.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/agentic-ux.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/agentic-ux.html#breadcrumbs",
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
            "name": "Agentic UX",
            "item": "https://lexkonovalov.com/glossary/agentic-ux.html"
          }
        ]
      }
    ]
  }
---

# Agentic UX

Agentic UX is the design of experiences in which people delegate goals or tasks to AI agents and retain appropriate visibility and control over the work. It covers the interaction before, during, and after an agent takes action.

A conversational interface is one possible entry point. The experience may also include task queues, approval screens, notifications, and activity records.

## Example: updating a set of reservations

An operations manager asks an agent to find reservations affected by a schedule change and prepare customer notifications.

Before work begins, the interface makes the affected date range and intended actions visible. During the task, it distinguishes records being checked from messages awaiting review. Before sending, it lets the manager inspect recipients, content, and exceptions.

If some messages fail, the final state identifies which were sent, which failed, and which have an uncertain outcome. The recovery path should avoid sending successful messages again.

## Design around delegation

Useful questions include:

- What information does the agent need before starting?
- Which actions are already authorized?
- Where can a person inspect, change, or stop the work?
- What happens to completed actions when the task stops?
- How does the user resolve missing information or partial failure?

A stop control needs an accurate explanation of its effect. It may prevent further work without reversing changes already made.

## Evaluate the outcome

Test whether users can understand what happened and take the next appropriate action. Include unexpected results and delayed approvals.

Keep necessary review concise and informative. Approval is useful when the reviewer can identify the target, proposed change, and consequence.

## Related terms

- [Human-in-the-Loop (HITL)](/glossary/human-in-the-loop-hitl.html)
- [Operational UX](/glossary/operational-ux.html)
- [AI-native Design](/glossary/ai-native-design.html)
- [Agent Harness](/glossary/agent-harness.html)

- [Conversational UX](/glossary/conversational-ux.html)

- [AI Transparency](/glossary/ai-transparency.html)

## Sources

- [Google PAIR: Feedback and Control](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Google PAIR: Errors and Graceful Failure](https://pair.withgoogle.com/chapter/errors-failing/)
- [LangChain: Interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts)
