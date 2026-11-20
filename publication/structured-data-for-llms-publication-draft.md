---
url: "https://lexkonovalov.com/glossary/structured-data-for-llms.html"
title: "Structured Data for LLMs and Schema.org | Product Design Glossary"
description: "Learn what JSON-LD and Schema.org tell machines about a web page, how that differs from HTML semantics, and what Google’s AI features require."
canonical: "https://lexkonovalov.com/glossary/structured-data-for-llms.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Structured Data for LLMs and Schema.org | Product Design Glossary", "og:description": "Learn what JSON-LD and Schema.org tell machines about a web page, how that differs from HTML semantics, and what Google’s AI features require.", "og:url": "https://lexkonovalov.com/glossary/structured-data-for-llms.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use structured-data-for-llms as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#webpage",
        "url": "https://lexkonovalov.com/glossary/structured-data-for-llms.html",
        "name": "Structured Data for LLMs and Schema.org | Product Design Glossary",
        "description": "Learn what JSON-LD and Schema.org tell machines about a web page, how that differs from HTML semantics, and what Google’s AI features require.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#breadcrumbs"
        },
        "citation": [
          "https://schema.org/docs/gs.html",
          "https://schema.org/DefinedTerm",
          "https://www.w3.org/TR/json-ld11/",
          "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
          "https://developers.google.com/search/docs/appearance/ai-features"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#term",
        "name": "Structured Data for LLMs",
        "termCode": "structured-data-for-llms",
        "description": "Structured data for LLMs is a broad term for publishing information in a machine-readable format that an AI system or its retrieval tools can use. On the web, one approach is to describe a page’s entities and relationships with the Schema.org vocabulary in JSON-LD.",
        "url": "https://lexkonovalov.com/glossary/structured-data-for-llms.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/structured-data-for-llms.html#breadcrumbs",
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
            "name": "Structured Data for LLMs",
            "item": "https://lexkonovalov.com/glossary/structured-data-for-llms.html"
          }
        ]
      }
    ]
  }
---

# Structured Data for LLMs

Structured data for LLMs is a broad term for publishing information in a machine-readable format that an AI system or its retrieval tools can use. On the web, one approach is to describe a page’s entities and relationships with the Schema.org vocabulary in JSON-LD.

## What can structured data describe?

Schema.org defines types and properties. JSON-LD is a format for expressing that information. A glossary page, for example, can identify its entry as a `DefinedTerm`, give it a name and description, and link it to a `DefinedTermSet`. The description should agree with the visible definition. Whether a particular system reads or uses those fields depends on how that system retrieves and processes pages.

## How is it different from semantic HTML?

JSON-LD can describe what a page is about. Semantic HTML describes the structure and controls that appear on the page. For example, the glossary entry’s JSON-LD can identify a term, while a native HTML button gives the browser the semantics for a control that opens a panel. Both can be useful on the same page.

## Do Google’s AI features need special structured data?

Google says its AI Overviews and AI Mode require no special Schema.org markup. A page needs to be indexed and eligible to appear with a snippet to be eligible as a supporting link. Whether a page appears as a source depends on the system and the query. Keep your visible content clear and use structured data to describe it faithfully.

## Is structured data the same as structured AI output?

[Structured outputs](/glossary/structured-outputs.html) constrain a model's response to a supported schema. Website structured data describes published entities and their relationships. Both can use JSON, but they address different tasks; publishing JSON-LD does not constrain an unrelated model's answer format.

## Related terms

- [llms.txt Proposal](/glossary/llms-txt-proposal.html)
- [Content Modeling](/glossary/content-modeling.html)
- [Knowledge Graphs (AI Context)](/glossary/knowledge-graphs-ai-context.html)
- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)
- [Semantic HTML](/glossary/semantic-html.html)

## Sources

- [Getting Started with Schema.org, Schema.org](https://schema.org/docs/gs.html)
- [DefinedTerm, Schema.org](https://schema.org/DefinedTerm)
- [JSON-LD 1.1, W3C](https://www.w3.org/TR/json-ld11/)
- [Introduction to Structured Data, Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [AI Features and Your Website, Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
