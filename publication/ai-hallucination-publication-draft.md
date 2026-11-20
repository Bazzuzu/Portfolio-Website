---
url: "https://lexkonovalov.com/glossary/ai-hallucination.html"
title: "What Is an AI Hallucination? | Product Design Glossary"
description: "Learn what AI hallucination means, how it differs from other errors, and how product interfaces can help people verify and recover from unsupported output."
canonical: "https://lexkonovalov.com/glossary/ai-hallucination.html"
language: "en-US"
categories: ["AI & Agentic Systems"]
topic_cluster: "AI+design"
open_graph: {"og:type": "website", "og:title": "What Is an AI Hallucination? | Product Design Glossary", "og:description": "Learn what AI hallucination means, how it differs from other errors, and how product interfaces can help people verify and recover from unsupported output.", "og:url": "https://lexkonovalov.com/glossary/ai-hallucination.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/ai-native-design.html", "placement": "Link when describing unsupported generated information.", "anchor": "AI hallucinations"}, {"source": "/glossary/evaluation-harness-ai-evals.html", "placement": "Add a related link for evaluating source support.", "anchor": "AI Hallucination"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/ai-hallucination.html#webpage",
        "url": "https://lexkonovalov.com/glossary/ai-hallucination.html",
        "name": "What Is an AI Hallucination? | Product Design Glossary",
        "description": "Learn what AI hallucination means, how it differs from other errors, and how product interfaces can help people verify and recover from unsupported output.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/ai-hallucination.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/ai-hallucination.html#breadcrumbs"
        },
        "citation": [
          "https://genai.owasp.org/llmrisk/llm092025-misinformation/",
          "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/grounding/overview"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/ai-hallucination.html#term",
        "name": "AI Hallucination",
        "termCode": "ai-hallucination",
        "description": "An AI hallucination is generated content that is presented as factual or source-based but is fabricated, unsupported, or inconsistent with the available evidence. Examples include an invented citation or a reservation detail that does not appear in the supplied record.",
        "url": "https://lexkonovalov.com/glossary/ai-hallucination.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/ai-hallucination.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/ai-hallucination.html#breadcrumbs",
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
            "name": "AI Hallucination",
            "item": "https://lexkonovalov.com/glossary/ai-hallucination.html"
          }
        ]
      }
    ]
  }
---

# AI Hallucination

An AI hallucination is generated content that is presented as factual or source-based but is fabricated, unsupported, or inconsistent with the available evidence. Examples include an invented citation or a reservation detail that does not appear in the supplied record.

## Why can a convincing answer still be wrong?

Generative models produce responses from patterns and the context they receive. Fluent wording is not a verification step.

A model can supply a plausible detail when the required information is missing. It can also misrepresent a retrieved source. Product teams need to evaluate the result against evidence rather than infer correctness from confidence, length, or polished formatting.

Not every incorrect answer has the same cause. A stale database value, a failed calculation, and fabricated supporting evidence require different investigations. Record the observed failure instead of labeling every defect a hallucination.

## Example: an invented refund exception

Suppose a support assistant summarizes a booking's refund conditions. The source says the fare is nonrefundable, but the answer invents a “24-hour exception” without supporting evidence.

A helpful interface lets the user inspect the relevant conditions and request a review. The system should not let that generated statement automatically authorize a refund.

If the source cannot be retrieved, say that the conditions could not be verified. Repeating the same unsupported answer in a more confident tone does not resolve the problem.

## How can a product reduce the impact?

Useful design and implementation choices include:

- Retrieve the information needed for the specific record and question.
- Validate consequential values and actions against authoritative application data.
- Provide relevant evidence where users need to assess a claim.
- Support explicit missing-information and uncertain-result states.
- Give users a practical correction, retry, or escalation path.

[Grounding](/glossary/ai-grounding.html) and validation can help, but no generic disclaimer or single technique makes generated answers universally reliable.

## How should teams evaluate hallucinations?

Build a set of representative tasks with clear criteria for what counts as supported. Include questions with no answer in the available sources, conflicting records, and misleading context.

Check the correctness of claims and the adequacy of citations separately. A source can exist without supporting the answer.

Track the effect on the task, including whether users notice and recover from a problem. Do not report a hallucination rate without stating the dataset, evaluation method, and type of failure counted.

## Related terms

- [AI Grounding](/glossary/ai-grounding.html)
- [Evaluation Harness](/glossary/evaluation-harness-ai-evals.html)
- [Human-in-the-Loop](/glossary/human-in-the-loop-hitl.html)
- [Trust Calibration in AI](/glossary/trust-calibration-ai.html)

## Sources

- [Misinformation, OWASP Gen AI Security Project](https://genai.owasp.org/llmrisk/llm092025-misinformation/)
- [Grounding overview, Google Cloud](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/grounding/overview)
