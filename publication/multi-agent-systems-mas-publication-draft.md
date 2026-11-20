---
url: "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html"
title: "Multi-Agent Systems (MAS): Architecture and Examples"
description: "Understand how multi-agent systems coordinate autonomous agents, with an AI research example, common architectures, and criteria for evaluating results."
canonical: "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Multi-Agent Systems (MAS): Architecture and Examples", "og:description": "Understand how multi-agent systems coordinate autonomous agents, with an AI research example, common architectures, and criteria for evaluating results.", "og:url": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and term status "Established" in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use multi-agent-systems-mas as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Replace the term's complete article and source list. The current Sources section includes unrelated Product Strategy & Growth category text. Keep that copy with its own category if used elsewhere. Add the supplied related links to the empty Related Terms section.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html#webpage",
        "url": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html",
        "name": "Multi-Agent Systems (MAS): Architecture and Examples",
        "description": "Understand how multi-agent systems coordinate autonomous agents, with an AI research example, common architectures, and criteria for evaluating results.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html#breadcrumbs"
        },
        "citation": [
          "https://www.cs.ox.ac.uk/people/michael.wooldridge/pubs/imas/IMAS2e.html",
          "https://www.anthropic.com/research/multi-agent-research-system"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html#term",
        "name": "Multi-Agent Systems (MAS)",
        "termCode": "multi-agent-systems-mas",
        "description": "A multi-agent system (MAS) is a system in which multiple autonomous agents interact to pursue goals in a shared environment. Agents may cooperate, negotiate, or compete. In applications built with language models, agents often divide a task and exchange findings through messages or shared state.",
        "url": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html#webpage"
        },
        "alternateName": [
          "MAS",
          "Multi-Agent Systems",
          "Multiagent Systems"
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
        "@id": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html#breadcrumbs",
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
            "name": "Multi-Agent Systems (MAS)",
            "item": "https://lexkonovalov.com/glossary/multi-agent-systems-mas.html"
          }
        ]
      }
    ]
  }
---

# Multi-Agent Systems (MAS)

A multi-agent system (MAS) is a system in which multiple autonomous agents interact to pursue goals in a shared environment. Agents may cooperate, negotiate, or compete. In applications built with language models, agents often divide a task and exchange findings through messages or shared state.

## How do multi-agent systems work?

Each agent has a goal, information it can access, and actions it can take. The system defines how agents communicate, assign work, resolve disagreements, and decide when to stop. An AI application may use one coordinator to delegate tasks to specialists, or let agents hand work to each other as the task develops.

The agents can use different instructions and tools while sharing the same underlying model. Context engineering determines what each agent receives and what information survives a handoff.

## Example: Researching a travel policy

A coordinator receives a request to compare two travel policies. It assigns each policy to a separate research agent and asks for the relevant passages, their sources, and any gaps. The coordinator combines the findings into a comparison and flags unresolved differences for the user.

This structure is useful when the searches can proceed independently and the findings can be combined. Define which agent owns the final answer and what counts as enough evidence. If one agent fails, the coordinator should identify the missing result before presenting the comparison.

## When should you use multiple agents?

Consider them when a task has separable research directions or needs specialist tools and context. Compare the design with a single-agent baseline on the same tasks. Measure the correctness and completeness of the final result, source quality, task completion, latency, and cost. Inspect handoffs for duplicated work or lost information.

Anthropic’s research system is one published example of an orchestrator coordinating parallel research agents. Its account describes the coordination, evaluation, and operational work involved.

## Related terms

- [AI Agent](/glossary/ai-agent.html)
- [Context Engineering](/glossary/context-engineering.html)
- [Autonomous Workflow Orchestration](/glossary/autonomous-workflow-orchestration.html)
- [Human-in-the-Loop (HITL)](/glossary/human-in-the-loop-hitl.html)
- [Evaluation Harness (AI Evals)](/glossary/evaluation-harness-ai-evals.html)

## Sources

- [An Introduction to MultiAgent Systems, Michael Wooldridge](https://www.cs.ox.ac.uk/people/michael.wooldridge/pubs/imas/IMAS2e.html)
- [How We Built Our Multi-Agent Research System, Anthropic](https://www.anthropic.com/research/multi-agent-research-system)
