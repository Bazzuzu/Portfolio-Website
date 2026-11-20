---
url: "https://lexkonovalov.com/glossary/controlled-vocabulary.html"
title: "Controlled Vocabulary: Definition and Product Design Example"
description: "See how a controlled vocabulary keeps product labels, search terms, and content consistent, with a booking-status example and simple governance rules."
canonical: "https://lexkonovalov.com/glossary/controlled-vocabulary.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Controlled Vocabulary: Definition and Product Design Example", "og:description": "See how a controlled vocabulary keeps product labels, search terms, and content consistent, with a booking-status example and simple governance rules.", "og:url": "https://lexkonovalov.com/glossary/controlled-vocabulary.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, AI & Agentic Systems and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use controlled-vocabulary as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/controlled-vocabulary.html#webpage",
        "url": "https://lexkonovalov.com/glossary/controlled-vocabulary.html",
        "name": "Controlled Vocabulary: Definition and Product Design Example",
        "description": "See how a controlled vocabulary keeps product labels, search terms, and content consistent, with a booking-status example and simple governance rules.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/controlled-vocabulary.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/controlled-vocabulary.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/TR/skos-primer/",
          "https://www.w3.org/TR/skos-reference/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/controlled-vocabulary.html#term",
        "name": "Controlled Vocabulary",
        "termCode": "controlled-vocabulary",
        "description": "A controlled vocabulary is a managed set of terms used to describe and organize information consistently. It defines which terms to use, what they mean, and, where useful, how synonyms and related concepts connect.",
        "url": "https://lexkonovalov.com/glossary/controlled-vocabulary.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/controlled-vocabulary.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/controlled-vocabulary.html#breadcrumbs",
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
            "name": "Controlled Vocabulary",
            "item": "https://lexkonovalov.com/glossary/controlled-vocabulary.html"
          }
        ]
      }
    ]
  }
---

# Controlled Vocabulary

A controlled vocabulary is a managed set of terms used to describe and organize information consistently. It defines which terms to use, what they mean, and, where useful, how synonyms and related concepts connect.

In product design, it can support navigation labels, metadata, filters, search, and documentation. W3C's SKOS provides a model for representing concepts, preferred and alternative labels, and relationships between concepts.

## Example: booking statuses

Suppose teams use “confirmed,” “booked,” and “ticketed” inconsistently. A controlled vocabulary could define:

| Term | Meaning in this product |
|---|---|
| Confirmed | The supplier has confirmed the reservation. |
| Ticketed | A ticket has been issued. |
| Canceled | The reservation has been canceled. |

The definitions matter because “confirmed” and “ticketed” describe different states in this example. They should not be merged merely because users sometimes treat them as synonyms.

A separate search alias could help users who type “cancelled” find records labeled “Canceled.” Keep display labels separate from stable internal identifiers.

## How to keep it useful

Start with terms that affect actual tasks. Record each term's definition, scope, accepted alternatives, and owner. Check the language with users and domain experts.

Map the vocabulary to interface labels, content fields, and search behavior. Establish how proposed terms are reviewed and how deprecated terms are redirected or migrated.

A vocabulary can provide consistent labels for AI retrieval and outputs when the application uses it. It does not ensure that a model will interpret every term correctly. Test ambiguous queries and preserve the original meaning when translating or summarizing content.

## Related terms

- [Information Architecture (IA)](/glossary/information-architecture.html)
- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Structured Data for LLMs](/glossary/structured-data-for-llms.html)

## Sources

- [W3C: SKOS Primer](https://www.w3.org/TR/skos-primer/)
- [W3C: SKOS Reference](https://www.w3.org/TR/skos-reference/)
