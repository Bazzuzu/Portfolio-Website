---
url: "https://lexkonovalov.com/glossary/design-critique.html"
title: "Design Critique: Purpose and Process | Product Design Glossary"
description: "Learn how to run a useful design critique with a clear question, evidence-based feedback, and recorded next steps, without turning it into a preference vote."
canonical: "https://lexkonovalov.com/glossary/design-critique.html"
language: "en-US"
categories: ["UX & Product Architecture", "Design Systems & Engineering"]
topic_cluster: "Design OPS"
open_graph: {"og:type": "website", "og:title": "Design Critique: Purpose and Process | Product Design Glossary", "og:description": "Learn how to run a useful design critique with a clear question, evidence-based feedback, and recorded next steps, without turning it into a preference vote.", "og:url": "https://lexkonovalov.com/glossary/design-critique.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/designops.html", "placement": "Link where design reviews and decision responsibilities are discussed.", "anchor": "design critiques"}, {"source": "/glossary/design-strategy-alignment.html", "placement": "Add a related link about reviewing proposals against goals and evidence.", "anchor": "Design Critique"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/design-critique.html#webpage",
        "url": "https://lexkonovalov.com/glossary/design-critique.html",
        "name": "Design Critique: Purpose and Process | Product Design Glossary",
        "description": "Learn how to run a useful design critique with a clear question, evidence-based feedback, and recorded next steps, without turning it into a preference vote.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/design-critique.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/design-critique.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/design-critiques/",
          "https://www.gov.uk/service-manual/user-research/analyse-a-research-session"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/design-critique.html#term",
        "name": "Design Critique",
        "termCode": "design-critique",
        "description": "A design critique is a structured discussion intended to improve a design by examining how well it addresses a stated problem. Participants give feedback on the work and its reasoning, using the goals, evidence, and constraints relevant to the project.",
        "url": "https://lexkonovalov.com/glossary/design-critique.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/design-critique.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/design-critique.html#breadcrumbs",
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
            "name": "Design Critique",
            "item": "https://lexkonovalov.com/glossary/design-critique.html"
          }
        ]
      }
    ]
  }
---

# Design Critique

A design critique is a structured discussion intended to improve a design by examining how well it addresses a stated problem. Participants give feedback on the work and its reasoning, using the goals, evidence, and constraints relevant to the project.

## What should a critique accomplish?

Bring a specific question, such as whether an operations screen makes urgent exceptions visible. Share the audience, task, stage of work, known constraints, and decisions that remain open.

The group should understand what kind of feedback can change the design now. Reviewing a low-fidelity flow for color polish is unlikely to answer a question about its information structure.

## A lightweight critique process

| Step | What to do |
|---|---|
| Frame | Explain the task, evidence, constraints, and review question |
| Inspect | Let people understand the proposal and ask clarifying questions |
| Discuss | Connect observations to goals and likely user effects |
| Decide next steps | Separate fixes, alternatives, and questions needing research |

Name the decision owner. A critique can inform a decision without requiring a vote or unanimous agreement.

## Example: reviewing a dense operations table

Suppose the question is whether an operator can identify bookings awaiting a time-sensitive action.

“Make the status brighter” is a proposed solution. “The pending action is hidden among several unrelated status labels” identifies a problem to investigate.

The team can compare options: clearer grouping, a dedicated action field, filtering, or different emphasis. It checks these against realistic records and the operator's task.

Record assumptions that need user research. A room of colleagues agreeing that an option feels clearer does not establish that operators can use it successfully.

## Critique vs. usability testing vs. approval

A critique draws on the participants' expertise and available evidence. Usability testing observes representative people attempting tasks. Approval authorizes a decision or release.

These activities may inform one another, but they answer different questions. Make their purpose explicit so a critique is not treated as completed user validation.

## How do you make feedback actionable?

Describe the observation, its relevance, and the uncertainty. Ask why a decision was made before proposing a replacement. Focus on the work rather than the designer.

Keep a concise record of the decision, rationale, owner, and next action. When the group disagrees, identify what evidence could resolve the disagreement. This gives the next review a concrete starting point.

## Related terms

- [DesignOps](/glossary/designops.html)
- [Design QA](/glossary/design-qa.html)
- [Product Discovery](/glossary/product-discovery.html)
- [Design Strategy Alignment](/glossary/design-strategy-alignment.html)

## Sources

- [Design Critiques: Encourage a Positive Culture to Improve Products, NN/g](https://www.nngroup.com/articles/design-critiques/)
- [Analyse a research session, GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/analyse-a-research-session)
