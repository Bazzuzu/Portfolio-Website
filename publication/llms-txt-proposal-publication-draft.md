---
url: "https://lexkonovalov.com/glossary/llms-txt-proposal.html"
title: "llms.txt: Proposal, File Format, and SEO Expectations"
description: "Learn what the llms.txt proposal does, how its Markdown overview links to useful content, and why it is optional for Google's AI search features."
canonical: "https://lexkonovalov.com/glossary/llms-txt-proposal.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "llms.txt: Proposal, File Format, and SEO Expectations", "og:description": "Learn what the llms.txt proposal does, how its Markdown overview links to useful content, and why it is optional for Google's AI search features.", "og:url": "https://lexkonovalov.com/glossary/llms-txt-proposal.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use llms-txt-proposal as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/llms-txt-proposal.html#webpage",
        "url": "https://lexkonovalov.com/glossary/llms-txt-proposal.html",
        "name": "llms.txt: Proposal, File Format, and SEO Expectations",
        "description": "Learn what the llms.txt proposal does, how its Markdown overview links to useful content, and why it is optional for Google's AI search features.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/llms-txt-proposal.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/llms-txt-proposal.html#breadcrumbs"
        },
        "citation": [
          "https://llmstxt.org/",
          "https://developers.google.com/search/docs/appearance/ai-features"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/llms-txt-proposal.html#term",
        "name": "llms.txt Proposal",
        "termCode": "llms-txt-proposal",
        "description": "llms.txt is a proposal for providing a concise Markdown overview that helps AI agents find and use a website's content. The file can summarize a site or section, explain important context, and link to relevant resources.",
        "url": "https://lexkonovalov.com/glossary/llms-txt-proposal.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/llms-txt-proposal.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/llms-txt-proposal.html#breadcrumbs",
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
            "name": "llms.txt Proposal",
            "item": "https://lexkonovalov.com/glossary/llms-txt-proposal.html"
          }
        ]
      }
    ]
  }
---

# llms.txt Proposal

llms.txt is a proposal for providing a concise Markdown overview that helps AI agents find and use a website's content. The file can summarize a site or section, explain important context, and link to relevant resources.

It is a community proposal rather than a universal requirement for AI systems or search engines. Whether an agent reads it depends on that agent's behavior.

## What the file contains

The proposal specifies a project or site name as an H1, with optional summary text, explanatory content, and sections of descriptive links. Its current version permits files at the site root or within a section, such as a documentation directory.

It also recommends clean Markdown versions of relevant pages and link relations that help clients discover those versions.

## Example: a product design glossary

A glossary could provide a short explanation of its scope and grouped links to core terms, such as OOUX, accessibility, and design tokens. Each link description should explain what information is available.

If Markdown page versions are offered, keep them synchronized with the public articles. A stale summary or broken link can make the file less useful.

## Does llms.txt improve SEO?

Google states that no new AI text files or special schema.org markup are required for inclusion in AI Overviews or AI Mode. Publishing llms.txt does not guarantee indexing, ranking improvements, or citations.

For a small site, consider it an optional documentation experiment. First maintain useful visible content, discoverable internal links, and correct indexing controls.

If implemented, test whether agents can answer representative questions using the file and its links. Review actual usage where observable rather than assuming a search benefit.

## Related terms

- [Structured Data for LLMs](/glossary/structured-data-for-llms.html)
- [Content Modeling](/glossary/content-modeling.html)
- [Context Engineering](/glossary/context-engineering.html)

## Sources

- [Jeremy Howard: The llms.txt Proposal, v2](https://llmstxt.org/)
- [Google Search Central: AI Features and Your Website](https://developers.google.com/search/docs/appearance/ai-features)
