---
url: "https://lexkonovalov.com/glossary/alt-text.html"
title: "Alt Text for Images: WCAG Examples for Websites"
description: "Learn when to write alt text, when to use an empty alt attribute, and how to handle image links, decorative photos, and charts."
canonical: "https://lexkonovalov.com/glossary/alt-text.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Alt Text for Images: WCAG Examples for Websites", "og:description": "Learn when to write alt text, when to use an empty alt attribute, and how to handle image links, decorative photos, and charts.", "og:url": "https://lexkonovalov.com/glossary/alt-text.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Register this entry in the glossary index under Design Systems & Engineering and UX & Product Architecture. Use existing term-status conventions.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use alt-text as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Render all supplied sources and related-term links. Generate Previous/Next navigation through the existing glossary mechanism. The article content is only the Markdown body below the front matter.
  
  Create the glossary entry at https://lexkonovalov.com/glossary/alt-text.html. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Coordinate release of the linked accessibility entries and the WCAG hub update. Expose links once their destination routes resolve. Check whether a route already exists before creating it and keep one index entry per term. Use the current glossary index and sitemap generation path.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/alt-text.html#webpage",
        "url": "https://lexkonovalov.com/glossary/alt-text.html",
        "name": "Alt Text for Images: WCAG Examples for Websites",
        "description": "Learn when to write alt text, when to use an empty alt attribute, and how to handle image links, decorative photos, and charts.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/alt-text.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/alt-text.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
          "https://www.w3.org/WAI/tutorials/images/decision-tree/",
          "https://www.w3.org/WAI/tutorials/images/decorative/",
          "https://www.w3.org/WAI/tutorials/images/functional/",
          "https://www.w3.org/WAI/tutorials/images/complex/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/alt-text.html#term",
        "name": "Alt Text",
        "termCode": "alt-text",
        "description": "Alt text is a short text alternative for an image, usually provided through the HTML `alt` attribute. It conveys the image’s purpose or information in context so people can understand or use the content without seeing the image.",
        "url": "https://lexkonovalov.com/glossary/alt-text.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/alt-text.html#webpage"
        },
        "alternateName": [
          "Alternative Text",
          "Image Alt Text"
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
        "@id": "https://lexkonovalov.com/glossary/alt-text.html#breadcrumbs",
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
            "name": "Alt Text",
            "item": "https://lexkonovalov.com/glossary/alt-text.html"
          }
        ]
      }
    ]
  }
---

# Alt Text

Alt text is a short text alternative for an image, usually provided through the HTML `alt` attribute. It conveys the image’s purpose or information in context so people can understand or use the content without seeing the image.

## What should alt text say?

| Image purpose | Text alternative |
|---|---|
| **Informative** | Convey the detail the image adds to the page. Describe the information someone would miss if the image were unavailable. |
| **Decorative or fully repeated in nearby text** | Use an empty attribute, `alt=""`, for an HTML image that adds no information or action. Screen readers can skip it. |
| **The only content in a link or button** | Name the destination or action. An image that opens a booking should help name the link “View booking.” |
| **Complex, such as a chart or map** | Identify the image in the short alternative and provide its essential details in nearby text, a linked description, or a data table. Pick the format that preserves the information people need. |

## Example: Three images on a hotel page

An atmospheric lobby photo beside an overview may be decorative. A photo that documents the accessible entrance could use “Step-free entrance with automatic sliding doors” if that is what the photo shows and the detail is missing from the text. A thumbnail that is the only content of a link to the full gallery could use “View hotel photos.”

Write the alternative for the role the image plays on each page. If an image sits beside visible text within the same link and adds no useful information, use `alt=""` and let the text name the link. Keep the empty attribute in the HTML. If it is omitted, some screen readers may announce the file name. When reviewing the page, check what a screen reader announces and whether someone can still complete the task with the image unavailable.

## Related terms

- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [Semantic HTML](/glossary/semantic-html.html)
- [Content Modeling](/glossary/content-modeling.html)
- [Web Accessibility Audit](/glossary/web-accessibility-audit.html)

## Sources

- [Understanding Non-text Content, W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [An alt Decision Tree, W3C WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Decorative Images, W3C WAI](https://www.w3.org/WAI/tutorials/images/decorative/)
- [Functional Images, W3C WAI](https://www.w3.org/WAI/tutorials/images/functional/)
- [Complex Images, W3C WAI](https://www.w3.org/WAI/tutorials/images/complex/)
