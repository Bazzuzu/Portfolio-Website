---
url: "https://lexkonovalov.com/glossary/structured-outputs.html"
title: "Structured Outputs in AI Explained | Product Design Glossary"
description: "Learn how structured outputs constrain AI response formats, how they differ from JSON mode and tool calling, and why application validation still matters."
canonical: "https://lexkonovalov.com/glossary/structured-outputs.html"
language: "en-US"
categories: ["AI & Agentic Systems"]
topic_cluster: "AI+design"
open_graph: {"og:type": "website", "og:title": "Structured Outputs in AI Explained | Product Design Glossary", "og:description": "Learn how structured outputs constrain AI response formats, how they differ from JSON mode and tool calling, and why application validation still matters.", "og:url": "https://lexkonovalov.com/glossary/structured-outputs.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/tool-calling-function-calling.html", "placement": "Link when distinguishing a formatted answer from a requested operation.", "anchor": "structured outputs"}, {"source": "/glossary/structured-data-for-llms.html", "placement": "Add a short distinction from model response schemas.", "anchor": "Structured Outputs"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/structured-outputs.html#webpage",
        "url": "https://lexkonovalov.com/glossary/structured-outputs.html",
        "name": "Structured Outputs in AI Explained | Product Design Glossary",
        "description": "Learn how structured outputs constrain AI response formats, how they differ from JSON mode and tool calling, and why application validation still matters.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/structured-outputs.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/structured-outputs.html#breadcrumbs"
        },
        "citation": [
          "https://aistudio.google.com/docs/structured-output",
          "https://json-schema.org/understanding-json-schema/reference/object"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/structured-outputs.html#term",
        "name": "Structured Outputs",
        "termCode": "structured-outputs",
        "description": "Structured outputs are model responses constrained to a specified format or schema. They let an application request defined fields and types, such as a reservation identifier and a status, instead of interpreting an unrestricted text answer.",
        "url": "https://lexkonovalov.com/glossary/structured-outputs.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/structured-outputs.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/structured-outputs.html#breadcrumbs",
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
            "name": "Structured Outputs",
            "item": "https://lexkonovalov.com/glossary/structured-outputs.html"
          }
        ]
      }
    ]
  }
---

# Structured Outputs

Structured outputs are model responses constrained to a specified format or schema. They let an application request defined fields and types, such as a reservation identifier and a status, instead of interpreting an unrestricted text answer.

## What does a schema control?

A schema can describe properties, required fields, types, and permitted values. The model API determines which schema features it supports and enforces.

For example, an application might require a string `reservation_id` and a `status` chosen from `confirmed`, `canceled`, or `unknown`. A possible response is:

```json
{
  "reservation_id": "R-104",
  "status": "unknown"
}
```

This is illustrative application data, not evidence that reservation R-104 exists. The schema controls the response's structure. The application still needs to verify the record, source, and current status.

## Structured outputs vs. JSON mode vs. tool calling

| Mechanism | Main purpose |
|---|---|
| JSON mode | Request syntactically valid JSON, subject to the API's behavior |
| Structured outputs | Constrain the response using a supported schema |
| Tool or function calling | Let the model request an application-defined operation |

These mechanisms can be combined in a workflow. A model-generated tool argument is still an input to validate, not permission to perform the operation.

[Structured Data for LLMs](/glossary/structured-data-for-llms.html) is a different topic: publishing machine-readable information about web content, such as Schema.org JSON-LD.

## Example: turning an email into a review form

An operations tool extracts a passenger name and requested travel date from an email. The response uses defined fields and represents missing information explicitly.

The interface shows the original passage beside each extracted value. The operator can correct the form before saving. The server checks formats, record ownership, and any business rules independently.

A date can be a valid string and still be wrong for the reservation. A response that fits the schema can also omit an important qualification from the email.

## What should designers specify?

Design for missing values, unsupported requests, refusals, incomplete responses, and failed validation. Decide which values can be used directly, which need verification, and what users can inspect or edit.

Test meaning as well as formatting. Include ambiguous source text and contradictory records in the evaluation set. A high schema-pass rate says little about whether users receive the correct information.

## Related terms

- [Tool Calling](/glossary/tool-calling-function-calling.html)
- [Generative UI](/glossary/generative-ui.html)
- [AI Grounding](/glossary/ai-grounding.html)
- [Evaluation Harness](/glossary/evaluation-harness-ai-evals.html)

## Sources

- [Structured outputs, Google Gemini documentation](https://aistudio.google.com/docs/structured-output)
- [Objects, Understanding JSON Schema](https://json-schema.org/understanding-json-schema/reference/object)
