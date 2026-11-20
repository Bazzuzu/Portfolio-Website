---
url: "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html"
title: "Knowledge Graphs for AI: Entities, Relationships, and Uses"
description: "Understand knowledge graphs as AI context, with a hotel-booking example, their role in retrieval, and practical checks for sources and relationship quality."
canonical: "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Knowledge Graphs for AI: Entities, Relationships, and Uses", "og:description": "Understand knowledge graphs as AI context, with a hotel-booking example, their role in retrieval, and practical checks for sources and relationship quality.", "og:url": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use knowledge-graphs-ai-context as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html#webpage",
        "url": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html",
        "name": "Knowledge Graphs for AI: Entities, Relationships, and Uses",
        "description": "Understand knowledge graphs as AI context, with a hotel-booking example, their role in retrieval, and practical checks for sources and relationship quality.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/TR/rdf11-primer/",
          "https://microsoft.github.io/graphrag/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html#term",
        "name": "Knowledge Graphs (AI Context)",
        "termCode": "knowledge-graphs-ai-context",
        "description": "A knowledge graph represents entities and the relationships between them in a graph structure, often with properties and identifiers. In AI applications, it can supply structured context for retrieval, reasoning, and explanation.",
        "url": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html#breadcrumbs",
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
            "name": "Knowledge Graphs (AI Context)",
            "item": "https://lexkonovalov.com/glossary/knowledge-graphs-ai-context.html"
          }
        ]
      }
    ]
  }
---

# Knowledge Graphs (AI Context)

A knowledge graph represents entities and the relationships between them in a graph structure, often with properties and identifiers. In AI applications, it can supply structured context for retrieval, reasoning, and explanation.

For example, a graph can connect a hotel to its rooms, a reservation to its guest, and a maintenance issue to the room it affects. Relationships make those connections available for queries.

## Example: finding affected reservations

Suppose room 204 has an unresolved maintenance issue. A hotel tool could follow relationships from that room to overlapping reservations and their assigned guests.

An AI assistant could use the resulting records to explain which reservations need review. The application still needs date logic, current data, and access checks to determine the actual result.

Stable identifiers matter: two guests with the same name should remain distinct entities. Record where important facts came from and when they were updated.

## Knowledge graphs and RAG

A knowledge graph can support retrieval-augmented generation by helping retrieve connected facts. Graphs can also be combined with keyword or vector search.

Microsoft's GraphRAG is one specific approach that builds a graph and community summaries from text. Its architecture does not define every graph-based retrieval system.

RDF is one way to represent graph data; knowledge graphs can also use other data models.

## Check the relationships

Define the meaning and direction of each relationship. Validate extracted entities, duplicate records, and unsupported connections before relying on them.

A graph structures information, including information that may be incomplete or incorrect. Test retrieval quality and the generated answer against the underlying sources. More connections alone do not establish better answers.

## Related terms

- [Conceptual Schema](/glossary/conceptual-schema.html)
- [Domain Context Modeling](/glossary/domain-context-modeling.html)
- [Retrieval-Augmented Generation (RAG)](/glossary/retrieval-augmented-generation-rag.html)
- [Structured Data for LLMs](/glossary/structured-data-for-llms.html)

## Sources

- [W3C: RDF 1.1 Primer](https://www.w3.org/TR/rdf11-primer/)
- [Microsoft: GraphRAG Documentation](https://microsoft.github.io/graphrag/)
