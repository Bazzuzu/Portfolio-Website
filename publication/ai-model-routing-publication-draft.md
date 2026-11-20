---
url: "https://lexkonovalov.com/glossary/ai-model-routing.html"
title: "AI Model Routing Explained | Product Design Glossary"
description: "Learn how model routing selects a model for a task, how it differs from fallback and multi-agent workflows, and which tradeoffs affect the user experience."
canonical: "https://lexkonovalov.com/glossary/ai-model-routing.html"
language: "en-US"
categories: ["AI & Agentic Systems"]
topic_cluster: "AI+design"
open_graph: {"og:type": "website", "og:title": "AI Model Routing Explained | Product Design Glossary", "og:description": "Learn how model routing selects a model for a task, how it differs from fallback and multi-agent workflows, and which tradeoffs affect the user experience.", "og:url": "https://lexkonovalov.com/glossary/ai-model-routing.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/ai-unit-economics.html", "placement": "Link where model selection affects total cost per completed task.", "anchor": "model routing"}, {"source": "/glossary/agent-harness.html", "placement": "Add a related link on choosing the model used by a workflow.", "anchor": "Model Routing"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/ai-model-routing.html#webpage",
        "url": "https://lexkonovalov.com/glossary/ai-model-routing.html",
        "name": "AI Model Routing Explained | Product Design Glossary",
        "description": "Learn how model routing selects a model for a task, how it differs from fallback and multi-agent workflows, and which tradeoffs affect the user experience.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/ai-model-routing.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/ai-model-routing.html#breadcrumbs"
        },
        "citation": [
          "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-routing.html",
          "https://platform.claude.com/docs/en/build-with-claude/context-windows"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/ai-model-routing.html#term",
        "name": "Model Routing",
        "termCode": "ai-model-routing",
        "description": "Model routing selects which AI model should handle a request or a step in a workflow. The routing policy can consider task requirements, quality, latency, cost, availability, and data-handling constraints.",
        "url": "https://lexkonovalov.com/glossary/ai-model-routing.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/ai-model-routing.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/ai-model-routing.html#breadcrumbs",
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
            "name": "Model Routing",
            "item": "https://lexkonovalov.com/glossary/ai-model-routing.html"
          }
        ]
      }
    ]
  }
---

# Model Routing

Model routing selects which AI model should handle a request or a step in a workflow. The routing policy can consider task requirements, quality, latency, cost, availability, and data-handling constraints.

## How does model routing work?

An application evaluates a request and chooses among supported models. The decision may follow explicit rules or use a learned prediction about which model is suitable.

For example, a rule may send a short classification task to one model and a complex document comparison to another. A commercial router may support only particular models or families. Amazon Bedrock's documented intelligent prompt routing is one specific implementation, not a universal routing specification.

## Routing vs. fallback vs. multi-agent systems

| Mechanism | Main decision |
|---|---|
| Model routing | Which model is suitable for this request or step? |
| Fallback | What should happen if the preferred path is unavailable or fails? |
| Multi-agent orchestration | Which agent does which part of a larger task? |

A workflow can use all three. Changing the model does not necessarily create a new agent, and delegating to several agents does not guarantee that different models are involved.

## Example: an assisted support workflow

Suppose a product first classifies a message, then drafts a reply using verified booking details. The two steps may have different quality, context, and latency requirements.

The team evaluates each route with representative messages, languages, and failure cases. If the drafting route fails, the product may offer a manual workflow or another evaluated route.

A fallback must preserve authorization and relevant context. Retrying after an uncertain action result also needs protection against duplicating the action.

## What matters to the user experience?

Keep the product's promises consistent across supported routes. Check differences in response format, source handling, refusal behavior, speed, and available tools.

Model names are useful only when they help the user make a meaningful choice or understand a limitation. A simple task interface may not need a model selector.

Measure cost per successful task alongside quality and latency. A cheaper request can produce a more expensive workflow if it causes more retries, corrections, or support.

Reevaluate routing when models or task distributions change. Results from a benchmark do not automatically describe the product's actual users and requests.

## Related terms

- [AI Unit Economics](/glossary/ai-unit-economics.html)
- [Evaluation Harness](/glossary/evaluation-harness-ai-evals.html)
- [Multi-Agent Systems](/glossary/multi-agent-systems-mas.html)
- [Agent Harness](/glossary/agent-harness.html)

## Sources

- [Understanding intelligent prompt routing, Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-routing.html)
- [Context windows, Anthropic](https://platform.claude.com/docs/en/build-with-claude/context-windows)
