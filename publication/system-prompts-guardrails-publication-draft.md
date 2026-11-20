---
url: "https://lexkonovalov.com/glossary/system-prompts-guardrails.html"
title: "System Prompts and Guardrails: Instructions and Checks"
description: "Learn how system prompts guide AI behavior and how application guardrails check inputs, outputs, and actions, with a booking workflow example."
canonical: "https://lexkonovalov.com/glossary/system-prompts-guardrails.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "System Prompts and Guardrails: Instructions and Checks", "og:description": "Learn how system prompts guide AI behavior and how application guardrails check inputs, outputs, and actions, with a booking workflow example.", "og:url": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use system-prompts-guardrails as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html#webpage",
        "url": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html",
        "name": "System Prompts and Guardrails: Instructions and Checks",
        "description": "Learn how system prompts guide AI behavior and how application guardrails check inputs, outputs, and actions, with a booking workflow example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html#breadcrumbs"
        },
        "citation": [
          "https://docs.langchain.com/oss/python/langchain/guardrails",
          "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html#term",
        "name": "System Prompts & Guardrails",
        "termCode": "system-prompts-guardrails",
        "description": "System prompts provide application-level instructions that guide an AI model’s behavior. Guardrails are additional controls that check or constrain inputs, outputs, and actions around the model. Together they help define how an AI feature is expected to operate.",
        "url": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html#breadcrumbs",
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
            "name": "System Prompts & Guardrails",
            "item": "https://lexkonovalov.com/glossary/system-prompts-guardrails.html"
          }
        ]
      }
    ]
  }
---

# System Prompts & Guardrails

System prompts provide application-level instructions that guide an AI model’s behavior. Guardrails are additional controls that check or constrain inputs, outputs, and actions around the model. Together they help define how an AI feature is expected to operate.

## What belongs in each layer?

A prompt can explain the assistant’s role, response format, and how to handle missing information. Application controls can validate structured output, restrict available tools, check authorization, and pause an operation for review.

The system should enforce permissions at the point where an action is executed. Retrieved text and model output can contain misleading instructions, so the application needs a defined way to handle them.

## Example: Preparing a flight change

A booking assistant is instructed to explain available options and identify uncertain conditions. Its tools can retrieve a booking and prepare a quote. The application checks that the requesting user can access the booking and that the quote is still current.

Before executing the change, the workflow presents the proposed itinerary and price for approval. The execution service validates the approved operation and returns its actual result.

## How do you evaluate the controls?

Test ordinary requests, malformed outputs, stale quotes, unauthorized records, and retrieved text that tries to redirect the assistant. Check the behavior of the complete workflow, including what the user sees when a check fails. Record whether the controls prevented the invalid action and whether the user could recover.

## Related terms

- [Context Engineering](/glossary/context-engineering.html)
- [Agent Harness](/glossary/agent-harness.html)
- [Design Harness](/glossary/design-harness.html)
- [Prompt Engineering](/glossary/prompt-engineering.html)

- [Prompt Injection](/glossary/prompt-injection.html)

## Sources

- [Guardrails, LangChain](https://docs.langchain.com/oss/python/langchain/guardrails)
- [Prompt Injection, OWASP Gen AI Security Project](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
