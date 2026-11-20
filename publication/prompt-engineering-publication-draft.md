---
url: "https://lexkonovalov.com/glossary/prompt-engineering.html"
title: "Prompt Engineering: Definition, Example, and Evaluation"
description: "Learn how to improve AI prompts with clear tasks, context, constraints, and examples, then evaluate the results against realistic cases and success criteria."
canonical: "https://lexkonovalov.com/glossary/prompt-engineering.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Prompt Engineering: Definition, Example, and Evaluation", "og:description": "Learn how to improve AI prompts with clear tasks, context, constraints, and examples, then evaluate the results against realistic cases and success criteria.", "og:url": "https://lexkonovalov.com/glossary/prompt-engineering.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use prompt-engineering as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/prompt-engineering.html#webpage",
        "url": "https://lexkonovalov.com/glossary/prompt-engineering.html",
        "name": "Prompt Engineering: Definition, Example, and Evaluation",
        "description": "Learn how to improve AI prompts with clear tasks, context, constraints, and examples, then evaluate the results against realistic cases and success criteria.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/prompt-engineering.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/prompt-engineering.html#breadcrumbs"
        },
        "citation": [
          "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
          "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/prompt-engineering.html#term",
        "name": "Prompt Engineering",
        "termCode": "prompt-engineering",
        "description": "Prompt engineering is the practice of designing and testing the instructions, context, examples, and output requirements given to an AI model to improve its performance on a task. It combines writing a clear request with evaluating the resulting behavior.",
        "url": "https://lexkonovalov.com/glossary/prompt-engineering.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/prompt-engineering.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/prompt-engineering.html#breadcrumbs",
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
            "name": "Prompt Engineering",
            "item": "https://lexkonovalov.com/glossary/prompt-engineering.html"
          }
        ]
      }
    ]
  }
---

# Prompt Engineering

Prompt engineering is the practice of designing and testing the instructions, context, examples, and output requirements given to an AI model to improve its performance on a task. It combines writing a clear request with evaluating the resulting behavior.

A prompt can include a user message, application-level instructions, supplied reference material, and examples. Its effectiveness depends on the model, the task, and the information available.

## Example: summarizing a support ticket

A vague request such as “Summarize this” leaves important choices unspecified. A more useful task description could be:

> Summarize the supplied support ticket for the next agent. Include the reported problem, actions already attempted, current status, and unresolved questions. Use only facts present in the ticket. Label missing information as unknown. Do not infer that an issue is resolved from a proposed fix.

Provide the actual ticket content separately and make the boundary between instructions and reference material clear.

## How to improve a prompt

Start with explicit success criteria. Test representative inputs, inspect failures, and change the prompt to address a specific problem. Examples can clarify an ambiguous format or decision rule.

For the ticket summary, check factual accuracy, omitted actions, invented resolutions, and whether another agent can understand what remains to do.

Keep a small set of test cases, including incomplete and contradictory tickets. Version the prompt and compare results when the model or workflow changes.

## Where the prompt's role ends

Prompt instructions cannot enforce account permissions or replace missing source data. Retrieval, application checks, and tool design may be needed.

Context engineering covers the wider process of assembling and managing what reaches the model. Prompt engineering is one part of that work.

## Related terms

- [Context Engineering](/glossary/context-engineering.html)
- [System Prompts & Guardrails](/glossary/system-prompts-guardrails.html)
- [Generative UI](/glossary/generative-ui.html)
- [Vibe Coding](/glossary/vibe-coding.html)

## Sources

- [Anthropic: Prompt Engineering Overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- [Anthropic: Prompting Best Practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
