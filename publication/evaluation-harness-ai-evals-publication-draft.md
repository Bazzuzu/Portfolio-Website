---
url: "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html"
title: "AI Evaluation Harness: Definition, Test Cases, and Example"
description: "Learn how an AI evaluation harness runs test cases, records outcomes, and compares system versions, with a concrete example and guidance on graders."
canonical: "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "AI Evaluation Harness: Definition, Test Cases, and Example", "og:description": "Learn how an AI evaluation harness runs test cases, records outcomes, and compares system versions, with a concrete example and guidance on graders.", "og:url": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use evaluation-harness-ai-evals as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html#webpage",
        "url": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html",
        "name": "AI Evaluation Harness: Definition, Test Cases, and Example",
        "description": "Learn how an AI evaluation harness runs test cases, records outcomes, and compares system versions, with a concrete example and guidance on graders.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html#breadcrumbs"
        },
        "citation": [
          "https://www.anthropic.com/research/demystifying-evals-for-ai-agents",
          "https://docs.langchain.com/langsmith/evaluation"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html#term",
        "name": "Evaluation Harness (AI Evals)",
        "termCode": "evaluation-harness-ai-evals",
        "description": "An evaluation harness is the infrastructure that runs tests for an AI system, records what happened, applies scoring criteria, and aggregates results. Teams use it to compare versions and detect changes in behavior.",
        "url": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html#breadcrumbs",
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
            "name": "Evaluation Harness (AI Evals)",
            "item": "https://lexkonovalov.com/glossary/evaluation-harness-ai-evals.html"
          }
        ]
      }
    ]
  }
---

# Evaluation Harness (AI Evals)

An evaluation harness is the infrastructure that runs tests for an AI system, records what happened, applies scoring criteria, and aggregates results. Teams use it to compare versions and detect changes in behavior.

An evaluation suite is the collection of test cases. The harness executes those cases. An agent harness, by comparison, runs the agent itself; an evaluation can test that runtime and its model together.

## What a useful test includes

A test case needs an input, relevant starting conditions, and explicit success criteria. The harness should capture the outputs and, when relevant, tool calls and changes in the test environment.

Graders can use code, human judgment, or another model. Use a method appropriate to the claim being checked, and calibrate model-based judgments against reviewed examples.

## Example: updating a customer address

An agent is asked to change a test customer's delivery address. A useful evaluation checks that the correct record contains the requested address, unrelated records remain unchanged, and the final message accurately describes the outcome.

The suite should also cover missing address fields, insufficient permissions, and a tool timeout. A successful-sounding reply alone does not prove that the update happened.

## Make comparisons meaningful

Version the cases, prompts, model configuration, tools, and grading rules. Keep initial conditions comparable and run multiple trials when behavior varies.

Report failures by category alongside aggregate scores. Record latency and cost where they matter to the task.

Keep evaluation cases separate from examples used to tune the system. A strong offline score supports a release decision, while production monitoring and user research provide additional evidence about real use.

## Related terms

- [Design Harness](/glossary/design-harness.html)
- [Agent Harness](/glossary/agent-harness.html)
- [Continuous Experimentation](/glossary/continuous-experimentation.html)
- [Visual Regression Testing](/glossary/visual-regression-testing.html)

- [AI Hallucination](/glossary/ai-hallucination.html)

## Sources

- [Anthropic: Demystifying Evals for AI Agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents)
- [LangChain: LangSmith Evaluation](https://docs.langchain.com/langsmith/evaluation)
