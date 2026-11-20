---
url: "https://lexkonovalov.com/glossary/agent-harness.html"
title: "Agent Harness: Definition, Components, and Example"
description: "Understand the runtime around an AI agent, including tool execution, state, permissions, and recovery, with a practical customer-support example."
canonical: "https://lexkonovalov.com/glossary/agent-harness.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Agent Harness: Definition, Components, and Example", "og:description": "Understand the runtime around an AI agent, including tool execution, state, permissions, and recovery, with a practical customer-support example.", "og:url": "https://lexkonovalov.com/glossary/agent-harness.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use agent-harness as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/agent-harness.html#webpage",
        "url": "https://lexkonovalov.com/glossary/agent-harness.html",
        "name": "Agent Harness: Definition, Components, and Example",
        "description": "Understand the runtime around an AI agent, including tool execution, state, permissions, and recovery, with a practical customer-support example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/agent-harness.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/agent-harness.html#breadcrumbs"
        },
        "citation": [
          "https://www.anthropic.com/research/managed-agents",
          "https://www.anthropic.com/research/effective-harnesses-for-long-running-agents"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/agent-harness.html#term",
        "name": "Agent Harness",
        "termCode": "agent-harness",
        "description": "An agent harness is the runtime and supporting infrastructure that enables an AI model to operate as an agent. It manages the interaction between model calls, tools, task state, and the execution environment.",
        "url": "https://lexkonovalov.com/glossary/agent-harness.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/agent-harness.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/agent-harness.html#breadcrumbs",
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
            "name": "Agent Harness",
            "item": "https://lexkonovalov.com/glossary/agent-harness.html"
          }
        ]
      }
    ]
  }
---

# Agent Harness

An agent harness is the runtime and supporting infrastructure that enables an AI model to operate as an agent. It manages the interaction between model calls, tools, task state, and the execution environment.

The exact boundary varies by implementation. In Anthropic's Managed Agents architecture, the harness runs the loop that calls the model and routes tool calls, while sessions and sandboxes are separate abstractions.

## What it can include

Depending on the application, a harness may provide:

- Tool definitions, argument checks, and execution.
- Context assembly and state persistence.
- Access controls and approval checkpoints.
- Time limits, budgets, and stopping rules.
- Logs, error handling, and recovery behavior.

Some of these capabilities may live in connected services. A harness needs to coordinate with them rather than assume that a model instruction enforces them.

## Example: a support task across sessions

An agent investigates a customer issue and prepares a proposed account correction. Its harness records completed steps, preserves the relevant identifiers, and pauses before a write operation that needs approval.

If the session is interrupted, the resumed run checks the saved state and current account data. It should determine whether an earlier action completed before attempting it again.

For this task, a useful completion record identifies the requested correction, the verified outcome, and any unresolved issue.

## What to evaluate

Test the complete runtime with expired access, failed tools, and interrupted sessions. Evaluate whether it preserves the user's scope and recovers without repeating consequential actions.

The model's capabilities and the harness's behavior both affect the resulting product experience.

## Related terms

- [Design Harness](/glossary/design-harness.html)
- [AI Agent](/glossary/ai-agent.html)
- [Context Engineering](/glossary/context-engineering.html)
- [Tool Calling (Function Calling)](/glossary/tool-calling-function-calling.html)

- [Model Routing](/glossary/ai-model-routing.html)

## Sources

- [Anthropic: Scaling Managed Agents](https://www.anthropic.com/research/managed-agents)
- [Anthropic: Effective Harnesses for Long-Running Agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)
