---
url: "https://lexkonovalov.com/glossary/visual-regression-testing.html"
title: "Visual Regression Testing: UI Baselines | Product Design Glossary"
description: "Learn how visual regression testing compares UI screenshots with approved baselines to catch unintended changes in layout, styling, and component states."
canonical: "https://lexkonovalov.com/glossary/visual-regression-testing.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Visual Regression Testing: UI Baselines | Product Design Glossary", "og:description": "Learn how visual regression testing compares UI screenshots with approved baselines to catch unintended changes in layout, styling, and component states.", "og:url": "https://lexkonovalov.com/glossary/visual-regression-testing.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use visual-regression-testing as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#webpage",
        "url": "https://lexkonovalov.com/glossary/visual-regression-testing.html",
        "name": "Visual Regression Testing: UI Baselines | Product Design Glossary",
        "description": "Learn how visual regression testing compares UI screenshots with approved baselines to catch unintended changes in layout, styling, and component states.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#breadcrumbs"
        },
        "citation": [
          "https://playwright.dev/docs/test-snapshots",
          "https://storybook.js.org/docs/writing-tests/visual-testing"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#term",
        "name": "Visual Regression Testing",
        "termCode": "visual-regression-testing",
        "description": "Visual regression testing compares screenshots of a user interface with approved reference images, called baselines, to flag unexpected changes in appearance. It can catch changes in spacing, layout, typography, and component states after a code update.",
        "url": "https://lexkonovalov.com/glossary/visual-regression-testing.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/visual-regression-testing.html#breadcrumbs",
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
            "name": "Visual Regression Testing",
            "item": "https://lexkonovalov.com/glossary/visual-regression-testing.html"
          }
        ]
      }
    ]
  }
---

# Visual Regression Testing

Visual regression testing compares screenshots of a user interface with approved reference images, called baselines, to flag unexpected changes in appearance. It can catch changes in spacing, layout, typography, and component states after a code update.

## How does visual regression testing work?

1. **Choose a state and approve a baseline.** Capture an intentionally rendered page or component at a specific viewport, with representative content.
2. **Keep the capture environment stable.** Use consistent browser, operating system, fonts, viewport, and test data. Control animations and other changing content where practical.
3. **Review the differences.** Inspect the baseline, new screenshot, and diff. Fix unintended changes and update the baseline only after approving the new appearance.

## Example: A booking-change dialog on mobile

Capture the open dialog at a mobile viewport with a long fare description and both action buttons visible. A change to a shared spacing token pushes the confirmation button below the visible area. The diff flags the layout shift. The reviewer opens the preview to check whether the action remains reachable and whether the new layout is acceptable.

## What should you test alongside screenshots?

Use interaction tests to check whether the dialog opens, the right button submits, and focus returns to the trigger when it closes. A screenshot can show the dialog at one moment. Keyboard and assistive technology checks cover behavior a screenshot cannot capture.

## Related terms

- [Component Architecture](/glossary/component-architecture.html)
- [Design Engineering](/glossary/design-engineering.html)
- [Design-to-Code Workflow](/glossary/design-to-code-workflow.html)

- [Design QA](/glossary/design-qa.html)

## Sources

- [Visual Comparisons, Playwright](https://playwright.dev/docs/test-snapshots)
- [Visual Tests, Storybook](https://storybook.js.org/docs/writing-tests/visual-testing)
