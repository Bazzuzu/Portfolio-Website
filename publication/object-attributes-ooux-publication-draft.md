---
url: "https://lexkonovalov.com/glossary/object-attributes-ooux.html"
title: "Object Attributes in OOUX: Core Content and Metadata"
description: "Learn how OOUX uses core content and metadata, distinguish attributes from related objects, and document field rules with a practical booking example."
canonical: "https://lexkonovalov.com/glossary/object-attributes-ooux.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Object Attributes in OOUX: Core Content and Metadata", "og:description": "Learn how OOUX uses core content and metadata, distinguish attributes from related objects, and document field rules with a practical booking example.", "og:url": "https://lexkonovalov.com/glossary/object-attributes-ooux.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create the new glossary entry at https://lexkonovalov.com/glossary/object-attributes-ooux.html through the existing term template and source of truth. Check for a route conflict before creating it; preserve an equivalent existing route if one is discovered and update references consistently. Register Object Attributes in OOUX in UX & Product Architecture. Use existing term-status conventions, including Proprietary / Framework-Specific where appropriate for an ORCA-specific method. Refresh derived counts and glossary Previous/Next navigation. Render only the Markdown body after the closing front-matter delimiter as the article; front matter is implementation data.
  
  Apply the exact SEO title, description, canonical, language, and Open Graph fields. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical and structured-data URLs. Reuse the existing page styling and one visible H1.
  
  Emit the entire structured_data value below in a script of type application/ld+json. Merge by @id with existing markup: reuse #webpage, #term, #breadcrumbs, and the shared glossary #terms node. Preserve domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve every other term in the DefinedTermSet. Use object-attributes-ooux as termCode and keep the term description identical to the visible opening paragraph. Populate dates only from actual publication history. Do not add FAQPage or HowTo markup.
  
  Render visible breadcrumbs matching BreadcrumbList. Preserve all supplied contextual links, related terms, and sources. Tables need semantic header cells and usable narrow-screen behavior. Publish the twelve OOUX expansion articles together, or publish linked destinations first, so their cross-links resolve. Add one contextual inbound link from each of these existing pages where the topic is discussed: /glossary/object-mapping.html, /glossary/orca-framework.html, /glossary/content-modeling.html. Preserve those pages' URLs, metadata, and existing links; deduplicate equivalent links.
  
  Add the canonical URL to the glossary index and XML sitemap. Use the actual deployment date for sitemap lastmod if maintained. Check HTTP 200, direct page loads, initial server-returned HTML, rendered content, metadata, links, and JSON-LD. Use the site's existing static generation or prerendering path where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing site build. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow, verify the published result, and report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/object-attributes-ooux.html#webpage",
        "url": "https://lexkonovalov.com/glossary/object-attributes-ooux.html",
        "name": "Object Attributes in OOUX: Core Content and Metadata",
        "description": "Learn how OOUX uses core content and metadata, distinguish attributes from related objects, and document field rules with a practical booking example.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/object-attributes-ooux.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/object-attributes-ooux.html#breadcrumbs"
        },
        "citation": [
          "https://alistapart.com/article/object-oriented-ux/",
          "https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/object-attributes-ooux.html#term",
        "name": "Object Attributes in OOUX",
        "termCode": "object-attributes-ooux",
        "description": "Object attributes in Object-Oriented UX (OOUX) are the content and data that describe an object and help people identify, understand, or work with its instances. Examples include a booking reference, status, service date, and description.",
        "url": "https://lexkonovalov.com/glossary/object-attributes-ooux.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/object-attributes-ooux.html#webpage"
        },
        "alternateName": [
          "OOUX attributes"
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
        "@id": "https://lexkonovalov.com/glossary/object-attributes-ooux.html#breadcrumbs",
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
            "name": "Object Attributes in OOUX",
            "item": "https://lexkonovalov.com/glossary/object-attributes-ooux.html"
          }
        ]
      }
    ]
  }
---

# Object Attributes in OOUX

Object attributes in Object-Oriented UX (OOUX) are the content and data that describe an object and help people identify, understand, or work with its instances. Examples include a booking reference, status, service date, and description.

Sophia Prater's object-mapping approach distinguishes core content, such as descriptive text and images, from metadata used to organize information through activities such as sorting and filtering. The distinction concerns how information is used; it does not mean metadata is less important.

## Attribute or related object?

Ask whether the concept needs its own identity, information, relationships, or actions.

A booking's status can be an attribute. A Traveler may need a separate record because agents find the same person across trips and update their contact information. The booking can reference that record.

A supplier name alone does not settle whether Supplier needs to be an object in this product. Investigate whether people need to manage suppliers or only recognize a label.

## Example: defining Booking attributes

The following rules describe an illustrative travel operations product.

| Attribute | Purpose | Rule to clarify |
|---|---|---|
| Booking reference | Identify the record across views | Assigned when the booking is created; remains stable. |
| Status | Understand the current stage and filter a queue | Updated by defined workflow events. |
| Supplier confirmation number | Look up the supplier's confirmed reservation | Required for this product's Confirmed state; absent while awaiting confirmation. |
| Service date | Compare and order upcoming work | Define the relevant local date and time zone where time matters. |
| Internal note | Record operational context | Visible only to permitted staff. |

A required field can depend on state. Requiring a supplier confirmation number when someone first creates a draft would contradict this example's workflow.

## What should attribute requirements record?

Document the meaning, source, accepted values, required conditions, edit permissions, and handling of missing information. Identify who owns a value when several systems display it.

Use realistic records to test the rules: a draft, a confirmed booking, a long reference, and a record with unavailable data. Make sure “unknown” and “not applicable” are distinguishable when they lead to different decisions.

Keep the object map readable and link to detailed requirements as needed. [Attribute prioritization](/glossary/attribute-prioritization.html) then determines which information deserves prominence in each view.

## Related terms

- [Object Mapping](/glossary/object-mapping.html)
- [Object Guide](/glossary/object-guide.html)
- [Attribute Prioritization](/glossary/attribute-prioritization.html)
- [Content Modeling](/glossary/content-modeling.html)

## Sources

- [Sophia V. Prater: Object-Oriented UX](https://alistapart.com/article/object-oriented-ux/)
- [Sophia V. Prater: Prioritizing Prioritization for Product Designers](https://sophiavux.medium.com/prioritizing-prioritization-for-product-designers-91e78a28f62e)
