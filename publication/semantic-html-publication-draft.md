---
url: "https://lexkonovalov.com/glossary/semantic-html.html"
title: "Semantic HTML: Accessibility and AI Agents | Product Design Glossary"
description: "Learn how semantic HTML exposes page structure and controls, with practical examples for assistive technology and AI browser agents."
canonical: "https://lexkonovalov.com/glossary/semantic-html.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Semantic HTML: Accessibility and AI Agents | Product Design Glossary", "og:description": "Learn how semantic HTML exposes page structure and controls, with practical examples for assistive technology and AI browser agents.", "og:url": "https://lexkonovalov.com/glossary/semantic-html.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories Design Systems & Engineering, UX & Product Architecture and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use semantic-html as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers and horizontal scroll when needed on mobile. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Render the quote form example as escaped, inert code in a code block. Preserve the literal tags and attributes so readers can copy the example.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/semantic-html.html#webpage",
        "url": "https://lexkonovalov.com/glossary/semantic-html.html",
        "name": "Semantic HTML: Accessibility and AI Agents | Product Design Glossary",
        "description": "Learn how semantic HTML exposes page structure and controls, with practical examples for assistive technology and AI browser agents.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/semantic-html.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/semantic-html.html#breadcrumbs"
        },
        "citation": [
          "https://html.spec.whatwg.org/multipage/sections.html",
          "https://html.spec.whatwg.org/multipage/forms.html",
          "https://www.w3.org/WAI/tutorials/forms/labels/",
          "https://github.com/web-arena-x/webarena/blob/main/resources/README.md",
          "https://developers.google.com/search/docs/appearance/ai-features"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/semantic-html.html#term",
        "name": "Semantic HTML",
        "termCode": "semantic-html",
        "description": "Semantic HTML means choosing HTML elements that describe the purpose of content and controls. Elements such as headings, links, buttons, and form labels give browsers information about a page’s structure and how people can interact with it.",
        "url": "https://lexkonovalov.com/glossary/semantic-html.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/semantic-html.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/semantic-html.html#breadcrumbs",
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
            "name": "Semantic HTML",
            "item": "https://lexkonovalov.com/glossary/semantic-html.html"
          }
        ]
      }
    ]
  }
---

# Semantic HTML

Semantic HTML means choosing HTML elements that describe the purpose of content and controls. Elements such as headings, links, buttons, and form labels give browsers information about a page’s structure and how people can interact with it.

## How does semantic HTML support accessibility?

A browser uses HTML semantics to expose information such as roles, names, and states through its accessibility tree. A screen reader can use that information to identify a button or navigate by headings. An `<a href>` is a link to a destination. A native `<button>` is a control for an action and provides keyboard focus and activation by default. A generic `<div>` with a click handler needs extra work to provide comparable behavior.

## Example: A quote request

```html
<form action="/quote" method="post">
  <label for="quote-email">Email address</label>
  <input id="quote-email" name="email" type="email" required>
  <button type="submit">Request a quote</button>
</form>
```

The label names the field, and the button text describes what happens next. In a real flow, test whether users can recover from validation errors and perceive the submission confirmation.

## How does this help AI browser agents?

Some browser agents use the accessibility tree to inspect a page. The WebArena benchmark, for example, records accessibility-tree observations alongside the agent’s actions. An agent using that view can look for an email field and a “Request a quote” button. Other agents may inspect the DOM or work from screenshots, so test the full task with the agent you care about.

Search discovery is a separate issue. For Google Search’s AI features, a supporting page must be indexed and eligible to appear with a snippet. Google requires no special markup for these features, and it selects supporting pages separately for each response.

## Related terms

- [Accessibility and WCAG](/glossary/accessibility-wcag.html)
- [ARIA (Accessible Rich Internet Applications)](/glossary/aria-accessible-rich-internet-applications.html)
- [Web Components](/glossary/web-components.html)
- [Structured Data for LLMs](/glossary/structured-data-for-llms.html)

## Sources

- [Sections, WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/sections.html)
- [Forms, WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/forms.html)
- [Labeling Controls, W3C WAI](https://www.w3.org/WAI/tutorials/forms/labels/)
- [WebArena Agent Execution Traces](https://github.com/web-arena-x/webarena/blob/main/resources/README.md)
- [AI Features and Your Website, Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
