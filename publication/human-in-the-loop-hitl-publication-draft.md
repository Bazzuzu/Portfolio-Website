---
url: "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html"
title: "Human-in-the-Loop (HITL): Review and Control in AI"
description: "Understand human-in-the-loop AI through a booking approval example, including what reviewers need to see and how a paused task resumes."
canonical: "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Human-in-the-Loop (HITL): Review and Control in AI", "og:description": "Understand human-in-the-loop AI through a booking approval example, including what reviewers need to see and how a paused task resumes.", "og:url": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use human-in-the-loop-hitl as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html#webpage",
        "url": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html",
        "name": "Human-in-the-Loop (HITL): Review and Control in AI",
        "description": "Understand human-in-the-loop AI through a booking approval example, including what reviewers need to see and how a paused task resumes.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html#breadcrumbs"
        },
        "citation": [
          "https://pair.withgoogle.com/chapter/feedback-controls/",
          "https://docs.langchain.com/oss/python/langgraph/interrupts"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html#term",
        "name": "Human-in-the-Loop (HITL)",
        "termCode": "human-in-the-loop-hitl",
        "description": "Human-in-the-loop (HITL) describes a process in which a person contributes judgment, feedback, or approval during an automated task. In an AI product, the person might correct extracted information, review a proposed decision, or authorize an action before it proceeds.",
        "url": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html#webpage"
        },
        "alternateName": [
          "HITL",
          "Human-in-the-Loop"
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
        "@id": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html#breadcrumbs",
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
            "name": "Human-in-the-Loop (HITL)",
            "item": "https://lexkonovalov.com/glossary/human-in-the-loop-hitl.html"
          }
        ]
      }
    ]
  }
---

# Human-in-the-Loop (HITL)

Human-in-the-loop (HITL) describes a process in which a person contributes judgment, feedback, or approval during an automated task. In an AI product, the person might correct extracted information, review a proposed decision, or authorize an action before it proceeds.

## Where does the person enter the loop?

Choose the intervention around the task. Specify what the system prepares, what the person decides, and how their response changes the next step. The reviewer needs enough context to understand the proposed action and its consequences.

## Example: Approving a flight change

An assistant finds an alternative flight and prepares a change. The review shows the original and proposed itineraries, price difference, conditions, and quote expiry. The traveler can approve, edit the request, or cancel.

The workflow pauses while it waits. If the quote expires or the booking changes before approval, the system refreshes the proposal and asks the traveler to review the revised details. On resuming, it records the decision and shows whether the change completed or needs recovery.

## How do you evaluate the review?

Test whether people understand what they are approving, spot a deliberately incorrect detail, and can decline or correct it. Also test timeout, refresh, and failure paths. Record review quality and the outcome of the task. An approval click is one event in the process, and its value depends on whether the person could make an informed decision.

## Related terms

- [Agentic UX](/glossary/agentic-ux.html)
- [Agent Harness](/glossary/agent-harness.html)
- [Operational UX](/glossary/operational-ux.html)
- [Design System Governance](/glossary/design-system-governance.html)

- [Explainable AI](/glossary/explainable-ai.html)

- [Trust Calibration in AI](/glossary/trust-calibration-ai.html)

## Sources

- [Feedback and Control, Google PAIR](https://pair.withgoogle.com/chapter/feedback-controls/)
- [Interrupts, LangGraph](https://docs.langchain.com/oss/python/langgraph/interrupts)
