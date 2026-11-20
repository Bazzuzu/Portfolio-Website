---
url: "https://lexkonovalov.com/glossary/information-architecture.html"
title: "Information Architecture (IA): Definition and Examples"
description: "Learn how information architecture organizes content, labels, navigation, and search, with a booking example and methods for testing findability."
canonical: "https://lexkonovalov.com/glossary/information-architecture.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Information Architecture (IA): Definition and Examples", "og:description": "Learn how information architecture organizes content, labels, navigation, and search, with a booking example and methods for testing findability.", "og:url": "https://lexkonovalov.com/glossary/information-architecture.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories UX & Product Architecture, Product Strategy & Growth and term status "Established" in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use information-architecture as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
  
  
  Populate the currently empty Related Terms section with the supplied links.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/information-architecture.html#webpage",
        "url": "https://lexkonovalov.com/glossary/information-architecture.html",
        "name": "Information Architecture (IA): Definition and Examples",
        "description": "Learn how information architecture organizes content, labels, navigation, and search, with a booking example and methods for testing findability.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/information-architecture.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/information-architecture.html#breadcrumbs"
        },
        "citation": [
          "https://www.nngroup.com/articles/ia-vs-navigation/",
          "https://www.nngroup.com/articles/card-sorting-tree-testing-differences/",
          "https://www.nngroup.com/articles/tree-testing/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/information-architecture.html#term",
        "name": "Information Architecture (IA)",
        "termCode": "information-architecture",
        "description": "Information architecture (IA) is the organization and labeling of content and functionality so people can find, understand, and use it. In websites and apps, it connects categories, relationships, labels, navigation, and search to the tasks people need to complete.",
        "url": "https://lexkonovalov.com/glossary/information-architecture.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/information-architecture.html#webpage"
        },
        "alternateName": [
          "IA",
          "Information Architecture"
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
        "@id": "https://lexkonovalov.com/glossary/information-architecture.html#breadcrumbs",
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
            "name": "Information Architecture (IA)",
            "item": "https://lexkonovalov.com/glossary/information-architecture.html"
          }
        ]
      }
    ]
  }
---

# Information Architecture (IA)

Information architecture (IA) is the organization and labeling of content and functionality so people can find, understand, and use it. In websites and apps, it connects categories, relationships, labels, navigation, and search to the tasks people need to complete.

## What does information architecture include?

IA decisions determine where information belongs and how people reach it. A content model identifies the types of information a product contains. A taxonomy groups that information, and labels give those groups names. Navigation, search, and filters provide ways to find it.

For example, a booking product might treat a Trip as a container for flight bookings, traveler details, and documents. An invoice belongs to a booking, and users may also need to find invoices across several trips. That relationship can support both a link on the booking page and a separate invoice search.

## Example: Finding an invoice

A travel team’s portal puts invoices in a section called “Resources.” Research shows that employees look inside their bookings first. The team adds a clearly named Invoices section to each booking and links it from the booking summary. Search can also retrieve invoices by booking reference.

The proposed structure follows the employee’s task and keeps the same invoice accessible through more than one route. Test whether users can find the invoice, recognize the right booking, and retrieve the document.

## How do you evaluate information architecture?

Start with an inventory of the content and the tasks users need to complete. Card sorting can reveal how participants group and name information. Once a hierarchy is proposed, tree testing evaluates whether people can find a destination using its categories and labels. Test the working interface as well to see whether users notice and understand the navigation.

At enterprise scale, IA also needs shared definitions and ownership across products and teams. See [Enterprise Information Architecture](/glossary/enterprise-information-architecture.html) for that broader scope.

## Related terms

- [Enterprise Information Architecture](/glossary/enterprise-information-architecture.html)
- [Wayfinding System](/glossary/wayfinding-system.html)
- [Content Modeling](/glossary/content-modeling.html)
- [Controlled Vocabulary](/glossary/controlled-vocabulary.html)
- [Structural Navigation Model](/glossary/structural-navigation-model.html)

## Sources

- [The Difference Between IA and Navigation, Nielsen Norman Group](https://www.nngroup.com/articles/ia-vs-navigation/)
- [Card Sorting vs. Tree Testing, Nielsen Norman Group](https://www.nngroup.com/articles/card-sorting-tree-testing-differences/)
- [Tree Testing, Nielsen Norman Group](https://www.nngroup.com/articles/tree-testing/)
