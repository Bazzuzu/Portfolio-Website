---
url: "https://lexkonovalov.com/glossary/multimodal-ai.html"
title: "Multimodal AI: Text, Image, and Audio Examples"
description: "Understand multimodal AI through text, image, and audio examples, how it relates to generative AI, and what to verify in a product workflow."
canonical: "https://lexkonovalov.com/glossary/multimodal-ai.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Multimodal AI: Text, Image, and Audio Examples", "og:description": "Understand multimodal AI through text, image, and audio examples, how it relates to generative AI, and what to verify in a product workflow.", "og:url": "https://lexkonovalov.com/glossary/multimodal-ai.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use multimodal-ai as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/multimodal-ai.html#webpage",
        "url": "https://lexkonovalov.com/glossary/multimodal-ai.html",
        "name": "Multimodal AI: Text, Image, and Audio Examples",
        "description": "Understand multimodal AI through text, image, and audio examples, how it relates to generative AI, and what to verify in a product workflow.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/multimodal-ai.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/multimodal-ai.html#breadcrumbs"
        },
        "citation": [
          "https://cloud.google.com/use-cases/multimodal-ai",
          "https://ai.google.dev/gemini-api/docs/image-understanding",
          "https://ai.google.dev/gemini-api/docs/audio"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/multimodal-ai.html#term",
        "name": "Multimodal AI",
        "termCode": "multimodal-ai",
        "description": "Multimodal AI processes or combines information in more than one modality, such as text, images, audio, or video. A multimodal system might answer a written question about a photo or use a spoken request together with information shown on a screen.",
        "url": "https://lexkonovalov.com/glossary/multimodal-ai.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/multimodal-ai.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/multimodal-ai.html#breadcrumbs",
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
            "name": "Multimodal AI",
            "item": "https://lexkonovalov.com/glossary/multimodal-ai.html"
          }
        ]
      }
    ]
  }
---

# Multimodal AI

Multimodal AI processes or combines information in more than one modality, such as text, images, audio, or video. A multimodal system might answer a written question about a photo or use a spoken request together with information shown on a screen.

## What can multimodal AI do?

| Input | Example output |
|---|---|
| A receipt image and a written instruction | A draft expense entry with the merchant, date, currency, and amount. |
| An audio recording and a request for a summary | A written account of the discussion and proposed action items. |
| A screenshot and a written question | An explanation of a visible interface state. |

The supported combinations depend on the model and the application. Check which inputs and outputs the chosen system accepts and evaluate the task you intend to support.

## How does multimodal AI relate to generative AI?

Multimodal describes the types of information a system handles. Generative AI creates content. A system that reads a receipt image and generates a written explanation uses both capabilities. Other multimodal applications may classify content or retrieve matching items.

## Example: Reviewing a receipt in an expense app

An employee uploads a receipt and asks the app to prepare an expense entry. The system sends the image and instructions to a model that supports image input. It presents the extracted fields beside the source image so the employee can correct them before submitting.

Test the flow with blurred images, different layouts, and receipts showing several totals or currencies. Check whether the app identifies missing or ambiguous information and lets the employee resolve it. Measure field correctness and successful submission, including whether the saved amount and currency match the intended expense.

## Related terms

- [AI Agent](/glossary/ai-agent.html)
- [Generative UI](/glossary/generative-ui.html)
- [Semantic Zoom](/glossary/semantic-zoom.html)
- [AI-native Design](/glossary/ai-native-design.html)
- [Context Engineering](/glossary/context-engineering.html)

## Sources

- [Multimodal AI, Google Cloud](https://cloud.google.com/use-cases/multimodal-ai)
- [Image Understanding, Google Gemini API Documentation](https://ai.google.dev/gemini-api/docs/image-understanding)
- [Audio Understanding, Google Gemini API Documentation](https://ai.google.dev/gemini-api/docs/audio)
