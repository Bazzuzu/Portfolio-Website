---
url: "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html"
title: "Retrieval-Augmented Generation (RAG): How It Works"
description: "Learn how RAG retrieves source material before generating an answer, with a policy example and checks for permissions, evidence, freshness, and citations."
canonical: "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Retrieval-Augmented Generation (RAG): How It Works", "og:description": "Learn how RAG retrieves source material before generating an answer, with a policy example and checks for permissions, evidence, freshness, and citations.", "og:url": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use retrieval-augmented-generation-rag as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html#webpage",
        "url": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html",
        "name": "Retrieval-Augmented Generation (RAG): How It Works",
        "description": "Learn how RAG retrieves source material before generating an answer, with a policy example and checks for permissions, evidence, freshness, and citations.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html#breadcrumbs"
        },
        "citation": [
          "https://arxiv.org/abs/2005.11401",
          "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html#term",
        "name": "Retrieval-Augmented Generation (RAG)",
        "termCode": "retrieval-augmented-generation-rag",
        "description": "Retrieval-augmented generation (RAG) is an approach that retrieves relevant information from an external source and supplies it to a generative model to help produce an answer. It connects generation with a searchable body of evidence.",
        "url": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html#webpage"
        },
        "alternateName": [
          "RAG"
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
        "@id": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html#breadcrumbs",
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
            "name": "Retrieval-Augmented Generation (RAG)",
            "item": "https://lexkonovalov.com/glossary/retrieval-augmented-generation-rag.html"
          }
        ]
      }
    ]
  }
---

# Retrieval-Augmented Generation (RAG)

Retrieval-augmented generation (RAG) is an approach that retrieves relevant information from an external source and supplies it to a generative model to help produce an answer. It connects generation with a searchable body of evidence.

The original RAG research combined a language model with retrieved documents. Current implementations vary and can use keyword, vector, hybrid, or graph-based retrieval. A vector database is one possible component.

## How RAG works

A typical application interprets the user's question, retrieves relevant material, and provides selected results as context for generation. It may also rerank results and attach source references.

Retrieval quality and answer quality need separate evaluation: the application can find the right document but summarize it incorrectly, or produce a plausible answer from the wrong document.

## Example: answering a cancellation question

A traveler asks whether a booking can be canceled without a fee. The application retrieves the terms associated with that booking and any relevant current policy.

A useful answer identifies the applicable conditions and links to the supporting text. If the retrieved material does not establish the answer, the product should communicate that gap and provide a next step.

A citation is useful only when the cited material supports the associated statement.

## Product and content checks

Keep documents current, record their scope and effective dates, and enforce access before material reaches the model. Test questions whose answers are missing, ambiguous, or spread across sources.

RAG supplies information at runtime. Fine-tuning changes model parameters; the approaches can be combined.

Retrieval does not guarantee factual answers or remove prompt-injection risks from external content. Evaluate both the evidence selected and the claims generated from it.

## Related terms

- [Context Engineering](/glossary/context-engineering.html)
- [Knowledge Graphs (AI Context)](/glossary/knowledge-graphs-ai-context.html)
- [Structured Data for LLMs](/glossary/structured-data-for-llms.html)
- [AI Agent](/glossary/ai-agent.html)

- [AI Grounding](/glossary/ai-grounding.html)

## Sources

- [Lewis et al.: Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401)
- [Microsoft: Retrieval-Augmented Generation Overview](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)
