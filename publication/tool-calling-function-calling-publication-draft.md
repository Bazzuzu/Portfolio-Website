---
url: "https://lexkonovalov.com/glossary/tool-calling-function-calling.html"
title: "Tool Calling (Function Calling): How It Works and Examples"
description: "Learn how tool calling turns a model's request into an application operation, with a flight-search example and checks for arguments, access, and results."
canonical: "https://lexkonovalov.com/glossary/tool-calling-function-calling.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Tool Calling (Function Calling): How It Works and Examples", "og:description": "Learn how tool calling turns a model's request into an application operation, with a flight-search example and checks for arguments, access, and results.", "og:url": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use tool-calling-function-calling as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html#webpage",
        "url": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html",
        "name": "Tool Calling (Function Calling): How It Works and Examples",
        "description": "Learn how tool calling turns a model's request into an application operation, with a flight-search example and checks for arguments, access, and results.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html#breadcrumbs"
        },
        "citation": [
          "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
          "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html#term",
        "name": "Tool Calling (Function Calling)",
        "termCode": "tool-calling-function-calling",
        "description": "Tool calling, also called function calling, lets an AI model request a defined operation using structured arguments. Application code or a provider-hosted service executes the operation and returns a result that the model can use.",
        "url": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html#webpage"
        },
        "alternateName": [
          "Function calling",
          "Tool use"
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
        "@id": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html#breadcrumbs",
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
            "name": "Tool Calling (Function Calling)",
            "item": "https://lexkonovalov.com/glossary/tool-calling-function-calling.html"
          }
        ]
      }
    ]
  }
---

# Tool Calling (Function Calling)

Tool calling, also called function calling, lets an AI model request a defined operation using structured arguments. Application code or a provider-hosted service executes the operation and returns a result that the model can use.

A tool might retrieve records, calculate a value, search available inventory, or update a system. The model's request and the actual execution are separate steps.

## How it works

For an application-defined tool, a typical sequence is:

1. The application supplies a tool name, description, and input schema.
2. The model requests the tool with arguments.
3. The application validates the request and checks authorization.
4. The application executes the permitted operation.
5. The result or error is returned for the next response.

Provider-hosted tools can manage execution within the provider's service. The surrounding product still needs to define its permitted scope.

## Example: checking flight availability

A traveler asks for flights from Madrid to Rome on a specified date. The model requests the search tool with the route and date.

The tool returns available options and relevant fare data. The interface can render those results as comparison cards. If the destination or date is unclear, the application should obtain the missing information before running a consequential operation.

A separate booking tool would need its own requirements and authorization.

## What to check

Validate arguments against both the schema and business rules. A correctly formatted date can still be outside the supported booking window.

Inspect tool errors and unknown outcomes before retrying a write. Use returned evidence when reporting success. Structured arguments improve integration, but they do not establish that the operation is authorized or that its result is correct.

## Related terms

- [Model Context Protocol (MCP)](/glossary/model-context-protocol-mcp.html)
- [Generative UI](/glossary/generative-ui.html)
- [Agent Harness](/glossary/agent-harness.html)
- [Agentic AI](/glossary/agentic-ai.html)

- [Structured Outputs](/glossary/structured-outputs.html)

- [Prompt Injection](/glossary/prompt-injection.html)

## Sources

- [Anthropic: Tool Use Overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
- [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
