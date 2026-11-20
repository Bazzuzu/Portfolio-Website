---
url: "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html"
title: "Model Context Protocol (MCP): Definition and How It Works"
description: "Understand MCP's host, client, and server architecture, how it exposes tools and resources, and what product teams should define before connecting systems."
canonical: "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Model Context Protocol (MCP): Definition and How It Works", "og:description": "Understand MCP's host, client, and server architecture, how it exposes tools and resources, and what product teams should define before connecting systems.", "og:url": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use model-context-protocol-mcp as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html#webpage",
        "url": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html",
        "name": "Model Context Protocol (MCP): Definition and How It Works",
        "description": "Understand MCP's host, client, and server architecture, how it exposes tools and resources, and what product teams should define before connecting systems.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html#breadcrumbs"
        },
        "citation": [
          "https://modelcontextprotocol.io/docs/learn/architecture",
          "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html#term",
        "name": "Model Context Protocol (MCP)",
        "termCode": "model-context-protocol-mcp",
        "description": "Model Context Protocol (MCP) is an open protocol for connecting AI applications to external capabilities and context through a common client-server interface. MCP servers can expose tools, resources, and prompt templates for compatible applications.",
        "url": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html#webpage"
        },
        "alternateName": [
          "MCP"
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
        "@id": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html#breadcrumbs",
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
            "name": "Model Context Protocol (MCP)",
            "item": "https://lexkonovalov.com/glossary/model-context-protocol-mcp.html"
          }
        ]
      }
    ]
  }
---

# Model Context Protocol (MCP)

Model Context Protocol (MCP) is an open protocol for connecting AI applications to external capabilities and context through a common client-server interface. MCP servers can expose tools, resources, and prompt templates for compatible applications.

It defines how participants exchange information. The AI application determines how to use that information and which operations to permit.

## Host, client, and server

- The host is the AI application that manages the integration.
- A client is the host-side component communicating with an MCP server.
- A server exposes supported capabilities, such as tools or resources.

Servers can run locally or remotely. Available features depend on the implementation and the capabilities supported by both sides.

## Example: checking a support ticket

A support application connects to an MCP server that exposes ticket-search and ticket-update tools. The AI can request ticket data and use the returned records to prepare a response.

The product might permit search while requiring review before posting a reply. The interface should identify the destination ticket and proposed message. The service must enforce access to that ticket when the operation runs.

Connecting a server does not establish that all of its tools are suitable for every user.

## MCP, tool calling, and skills

Tool calling lets a model request an operation with structured arguments. MCP can make tools available through a shared integration protocol. A skill packages procedural instructions that may tell an agent how to use those capabilities.

For a product integration, specify accessible data, permitted actions, review requirements, and failure behavior. Test disconnected servers, expired authorization, and tool errors as part of the user experience.

## Related terms

- [Tool Calling (Function Calling)](/glossary/tool-calling-function-calling.html)
- [Context Engineering](/glossary/context-engineering.html)
- [Agent Skills (SKILL.md)](/glossary/agent-skills-skill-md.html)
- [AI Agent](/glossary/ai-agent.html)

- [Figma MCP Server](/glossary/figma-mcp-server.html)

## Sources

- [Model Context Protocol: Architecture Overview](https://modelcontextprotocol.io/docs/learn/architecture)
- [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
