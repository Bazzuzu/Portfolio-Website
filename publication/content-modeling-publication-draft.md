---
url: "https://lexkonovalov.com/glossary/content-modeling.html"
title: "Content Modeling: Types, Fields, and Reusable Content"
description: "Learn how content modeling defines types, fields, relationships, and validation rules, with an example of room content reused across a hotel site."
canonical: "https://lexkonovalov.com/glossary/content-modeling.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Content Modeling: Types, Fields, and Reusable Content", "og:description": "Learn how content modeling defines types, fields, relationships, and validation rules, with an example of room content reused across a hotel site.", "og:url": "https://lexkonovalov.com/glossary/content-modeling.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use content-modeling as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/content-modeling.html#webpage",
        "url": "https://lexkonovalov.com/glossary/content-modeling.html",
        "name": "Content Modeling: Types, Fields, and Reusable Content",
        "description": "Learn how content modeling defines types, fields, relationships, and validation rules, with an example of room content reused across a hotel site.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/content-modeling.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/content-modeling.html#breadcrumbs"
        },
        "citation": [
          "https://www.contentful.com/help/content-models/content-modelling-basics/",
          "https://www.contentful.com/help/references/",
          "https://www.contentful.com/help/fields/available-validations/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/content-modeling.html#term",
        "name": "Content Modeling",
        "termCode": "content-modeling",
        "description": "Content modeling defines the types of content a product needs, the fields that describe them, and how they relate to one another. A content model also records rules that help editors create consistent entries and lets products reuse that content across pages and channels.",
        "url": "https://lexkonovalov.com/glossary/content-modeling.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/content-modeling.html#webpage"
        },
        "alternateName": [
          "Content Modelling",
          "Content Model"
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
        "@id": "https://lexkonovalov.com/glossary/content-modeling.html#breadcrumbs",
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
            "name": "Content Modeling",
            "item": "https://lexkonovalov.com/glossary/content-modeling.html"
          }
        ]
      }
    ]
  }
---

# Content Modeling

Content modeling defines the types of content a product needs, the fields that describe them, and how they relate to one another. A content model also records rules that help editors create consistent entries and lets products reuse that content across pages and channels.

## What does a content model include?

| Part | Example decision |
|---|---|
| Content type | Represent a hotel’s Room Type as a reusable type of content. |
| Fields | Store the room type’s name, capacity, description, and photos. |
| References | Link the room type to Hotel and Amenity entries. |
| Validation | Require a name and capacity, and restrict an Amenity reference to the appropriate content type. |

The model describes the structure. An entry contains the actual content, such as the description and photos for a Family Room.

## Example: Reusing room content on a hotel site

A hotel uses the same Family Room content in a results card and a room detail page. The card shows the name, capacity, and lead photo. The detail page uses those fields plus the description, gallery, and amenity references.

Both views read the same room entry. Updating a shared Amenity entry gives consuming views a consistent source for its wording. Publishing and delivery determine when that update appears. The implementation controls which fields are displayed and how.

Treat the current price and availability as booking data with their own update requirements. The content model can identify the room type that the booking system uses when it returns those values.

## How do you develop a content model?

Inventory representative content and discuss publishing needs with editors, designers, and developers. Define the types and references, then test them with realistic entries. Include a room with a long name, missing optional content, and localized text if the product supports it.

Have an editor create and update an entry, then review it in each consuming view. Check whether the model supports the intended content without duplicating information or forcing editors to use a field for an unrelated purpose.

## Related terms

- [Object Mapping](/glossary/object-mapping.html)
- [Structured Data for LLMs](/glossary/structured-data-for-llms.html)
- [Headless UI Architecture](/glossary/headless-ui-architecture.html)
- [Information Architecture (IA)](/glossary/information-architecture.html)

## Sources

- [Content Modeling Basics, Contentful](https://www.contentful.com/help/content-models/content-modelling-basics/)
- [References, Contentful](https://www.contentful.com/help/references/)
- [Available Validations, Contentful](https://www.contentful.com/help/fields/available-validations/)
