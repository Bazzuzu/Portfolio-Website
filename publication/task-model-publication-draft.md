---
url: "https://lexkonovalov.com/glossary/task-model.html"
title: "Task Model in UX: Definition, Steps, and Example"
description: "Learn how a UX task model captures goals, subtasks, decisions, and exceptions, with an invoice-approval example and a simple way to build one."
canonical: "https://lexkonovalov.com/glossary/task-model.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Task Model in UX: Definition, Steps, and Example", "og:description": "Learn how a UX task model captures goals, subtasks, decisions, and exceptions, with an invoice-approval example and a simple way to build one.", "og:url": "https://lexkonovalov.com/glossary/task-model.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Product Strategy & Growth and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use task-model as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/task-model.html#webpage",
        "url": "https://lexkonovalov.com/glossary/task-model.html",
        "name": "Task Model in UX: Definition, Steps, and Example",
        "description": "Learn how a UX task model captures goals, subtasks, decisions, and exceptions, with an invoice-approval example and a simple way to build one.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/task-model.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/task-model.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/task-analysis/",
          "https://www.w3.org/TR/task-models/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/task-model.html#term",
        "name": "Task Model",
        "termCode": "task-model",
        "description": "A task model is a structured description of the activities people perform to achieve a goal, including subtasks, decisions, dependencies, and relevant conditions. Designers use it to understand the work an interface needs to support.",
        "url": "https://lexkonovalov.com/glossary/task-model.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/task-model.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/task-model.html#breadcrumbs",
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
            "name": "Task Model",
            "item": "https://lexkonovalov.com/glossary/task-model.html"
          }
        ]
      }
    ]
  }
---

# Task Model

A task model is a structured description of the activities people perform to achieve a goal, including subtasks, decisions, dependencies, and relevant conditions. Designers use it to understand the work an interface needs to support.

Task models can range from a simple hierarchy to a formal representation of task relationships. Their value comes from accurately describing the work and its constraints.

## Example: approving an invoice

The goal is to approve a valid invoice for payment. A simplified model might include:

1. Find invoices awaiting review.
2. Check the supplier, amount, and purchase order.
3. Resolve missing information or discrepancies.
4. Approve within the reviewer's authority, or route to an authorized approver.
5. Confirm that the invoice has moved to the correct state.

The model should include exceptions: the invoice may be a duplicate, the purchase order may be missing, or the reviewer may lack approval authority. Some checks can happen independently; approval depends on the required checks being complete.

These relationships inform interface requirements such as visible status, supporting documents, and a clear handoff.

## How to build one

Observe people doing the work and ask about decisions, workarounds, and failures. Identify the goal before documenting the steps. Validate the model with people who actually perform the task.

A user flow describes a route through an interface. A task model can describe work across screens, tools, or offline activities, including work that the future product will support differently.

Use the model to test whether the design covers the task's conditions and recovery paths. Update it when responsibilities or business rules change.

## Related terms

- [Jobs to Be Done (JTBD)](/glossary/jobs-to-be-done-jtbd.html)
- [Mental Model Mapping](/glossary/mental-model-mapping.html)
- [Service Blueprinting](/glossary/service-blueprinting.html)

## Sources

- [Nielsen Norman Group: Task Analysis](https://www.nngroup.com/articles/task-analysis/)
- [W3C: Task Models](https://www.w3.org/TR/task-models/)
