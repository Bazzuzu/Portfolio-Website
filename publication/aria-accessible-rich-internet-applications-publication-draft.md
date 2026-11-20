---
url: "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html"
title: "What Is ARIA? Roles, States, and Properties | Product Design Glossary"
description: "Understand WAI-ARIA roles, states, and properties. See how aria-expanded describes a disclosure for assistive technology and browser agents."
canonical: "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "What Is ARIA? Roles, States, and Properties | Product Design Glossary", "og:description": "Understand WAI-ARIA roles, states, and properties. See how aria-expanded describes a disclosure for assistive technology and browser agents.", "og:url": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use aria-accessible-rich-internet-applications as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#webpage",
        "url": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html",
        "name": "What Is ARIA? Roles, States, and Properties | Product Design Glossary",
        "description": "Understand WAI-ARIA roles, states, and properties. See how aria-expanded describes a disclosure for assistive technology and browser agents.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#breadcrumbs"
        },
        "citation": [
          "https://www.w3.org/TR/wai-aria-1.2/",
          "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/",
          "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
          "https://playwright.dev/docs/aria-snapshots",
          "https://github.com/web-arena-x/webarena/blob/main/resources/README.md"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#term",
        "name": "ARIA (Accessible Rich Internet Applications)",
        "termCode": "aria-accessible-rich-internet-applications",
        "description": "WAI-ARIA is a W3C specification for exposing the roles, states, and properties of interface elements to assistive technology. It can describe information that native HTML alone does not express, such as whether a custom disclosure is expanded.",
        "url": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#webpage"
        },
        "alternateName": [
          "WAI-ARIA",
          "Accessible Rich Internet Applications"
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
        "@id": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html#breadcrumbs",
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
            "name": "ARIA (Accessible Rich Internet Applications)",
            "item": "https://lexkonovalov.com/glossary/aria-accessible-rich-internet-applications.html"
          }
        ]
      }
    ]
  }
---

# ARIA (Accessible Rich Internet Applications)

WAI-ARIA is a W3C specification for exposing the roles, states, and properties of interface elements to assistive technology. It can describe information that native HTML alone does not express, such as whether a custom disclosure is expanded.

## What do ARIA roles, states, and properties do?

A role identifies what an element is, such as a dialog. A state describes a condition that can change, such as `aria-expanded`. A property describes an aspect or relationship, such as `aria-labelledby`, which points to the text that names an element.

Use native HTML when it provides the semantics and behavior you need. Adding `role="button"` to a `<div>` exposes a role. Keyboard focus and activation still need to be implemented.

## Example: A fare-rules disclosure

A native button labeled “Fare rules” reveals a hidden panel. While the panel is closed, the button has `aria-expanded="false"`. Activating it shows the panel and sets `aria-expanded="true"`. Closing it hides the panel and restores the false state. A native button gives you Enter and Space activation. Your code keeps the visible panel and reported state in sync. You can optionally use `aria-controls` to reference the panel’s ID.

## How do you test the result?

Verify that the button has the right name and state in the accessibility tree. Test it with a keyboard and a screen reader, and confirm that opening and closing the panel updates both the visible content and the exposed state. A Playwright ARIA snapshot can help catch changes in that exposed structure.

An AI browser agent that reads the accessibility tree can use the same role, name, and expanded state to find the button and decide whether to open it. Run the task with the intended agent to check whether it can open the panel and locate a specific rule. Keep that result separate from accessibility testing for people.

## Related terms

- [Semantic HTML](/glossary/semantic-html.html)
- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [Component Architecture](/glossary/component-architecture.html)
- [Headless UI Architecture](/glossary/headless-ui-architecture.html)

## Sources

- [WAI-ARIA 1.2, W3C](https://www.w3.org/TR/wai-aria-1.2/)
- [Read Me First, W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
- [Disclosure Pattern, W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [ARIA Snapshots, Playwright](https://playwright.dev/docs/aria-snapshots)
- [WebArena Agent Execution Traces](https://github.com/web-arena-x/webarena/blob/main/resources/README.md)
