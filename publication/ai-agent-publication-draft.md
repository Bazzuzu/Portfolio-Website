---
url: "https://lexkonovalov.com/glossary/ai-agent.html"
title: "AI Agent: Definition, How It Works, and Product Example"
description: "Learn what an AI agent does, how an LLM-based agent uses tools and feedback, and which task boundaries product designers need to make explicit."
canonical: "https://lexkonovalov.com/glossary/ai-agent.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "AI Agent: Definition, How It Works, and Product Example", "og:description": "Learn what an AI agent does, how an LLM-based agent uses tools and feedback, and which task boundaries product designers need to make explicit.", "og:url": "https://lexkonovalov.com/glossary/ai-agent.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use ai-agent as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/ai-agent.html#webpage",
        "url": "https://lexkonovalov.com/glossary/ai-agent.html",
        "name": "AI Agent: Definition, How It Works, and Product Example",
        "description": "Learn what an AI agent does, how an LLM-based agent uses tools and feedback, and which task boundaries product designers need to make explicit.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/ai-agent.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/ai-agent.html#breadcrumbs"
        },
        "citation": [
          "https://arxiv.org/abs/2210.03629",
          "https://www.anthropic.com/research/building-effective-agents"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/ai-agent.html#term",
        "name": "AI Agent",
        "termCode": "ai-agent",
        "description": "An AI agent is a system that observes information about its environment and chooses actions toward a goal. In current LLM-based products, an agent often uses a language model to decide which tools to call, inspect the results, and select a next step.",
        "url": "https://lexkonovalov.com/glossary/ai-agent.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/ai-agent.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/ai-agent.html#breadcrumbs",
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
            "name": "AI Agent",
            "item": "https://lexkonovalov.com/glossary/ai-agent.html"
          }
        ]
      }
    ]
  }
---

# AI Agent

An AI agent is a system that observes information about its environment and chooses actions toward a goal. In current LLM-based products, an agent often uses a language model to decide which tools to call, inspect the results, and select a next step.

The broader AI concept also includes systems built without language models. An agent's autonomy depends on the decisions and actions its application permits.

## How an LLM-based agent works

A typical interaction includes a goal, available context, a set of permitted tools, and a loop that evaluates tool results before continuing or stopping. Persistent memory and multiple cooperating agents are optional design choices.

ReAct is one research approach that interleaves reasoning and actions. It illustrates how a model can interact with external information while working through a task; it is not a requirement for every agent.

## Example: investigating a delayed order

A support agent receives an order reference, retrieves the order, checks shipment tracking, and summarizes the available evidence. It may ask for clarification if the reference matches more than one order.

The application can allow these read operations while requiring an authorized person to approve a replacement shipment. A tool result should establish whether the replacement was actually created.

## What designers should define

Specify the task boundary, available actions, stopping conditions, and escalation path. Make progress and important outcomes visible to the user.

Test missing data, tool failures, and ambiguous requests. A plausible final message is insufficient evidence of success when the task requires a change in another system.

## Related terms

- [Agentic AI](/glossary/agentic-ai.html)
- [Agent Harness](/glossary/agent-harness.html)
- [Model Context Protocol (MCP)](/glossary/model-context-protocol-mcp.html)
- [Tool Calling (Function Calling)](/glossary/tool-calling-function-calling.html)

## Sources

- [Yao et al.: ReAct](https://arxiv.org/abs/2210.03629)
- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
