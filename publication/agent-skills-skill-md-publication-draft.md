---
url: "https://lexkonovalov.com/glossary/agent-skills-skill-md.html"
title: "Agent Skills and SKILL.md: Format, Uses, and Example"
description: "Learn what Agent Skills contain, how SKILL.md instructions are discovered, and how skills differ from tools and MCP connections in an AI workflow."
canonical: "https://lexkonovalov.com/glossary/agent-skills-skill-md.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "Agent Skills and SKILL.md: Format, Uses, and Example", "og:description": "Learn what Agent Skills contain, how SKILL.md instructions are discovered, and how skills differ from tools and MCP connections in an AI workflow.", "og:url": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data only. Preserve the existing categories AI & Agentic Systems, Design Systems & Engineering and any existing term status in the page and glossary index.
  
  Apply the exact title, description, canonical, language, and Open Graph values above through the existing template. Override automatic title suffixes for this page. Synchronize existing Twitter title, description, and image fields. Keep tracking parameters out of canonical, Open Graph, and structured-data URLs.
  
  Emit the complete structured_data JSON below inside <script type="application/ld+json"> in the page HTML. Merge nodes by @id with existing markup. Reuse #term, #terms, and #breadcrumbs. Use #webpage for the page, or reuse an existing equivalent page ID and update every reference to it consistently. Keep one authoritative definition per node. Retain the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. The WebSite reference in this graph resolves to that existing site node.
  
  Use Product Design Glossary as the collection name. Preserve the collection’s other terms when merging the DefinedTermSet. Keep its ID distinct from the domain-level WebSite. Keep the term description synchronized with the visible opening paragraph. Use agent-skills-skill-md as termCode. Populate date fields only from actual publication history; preparation dates are not publication dates. Do not add FAQPage or HowTo markup to this article.
  
  Render visible breadcrumbs matching itemListElement in the existing navigation component. Use the existing page styling, one H1, descriptive links, and semantic tables with labeled headers that remain usable on narrow screens. Preserve the supplied sources and all supplied related-term links, plus existing Previous/Next glossary navigation. The article content is only the Markdown body below the front matter.
  
  Serve the page at the existing URL. Verify the glossary index and sitemap include that canonical URL. Update sitemap lastmod to the actual deployment date if maintained. Check direct page loads, the server-returned HTML, and the rendered page for the correct glossary content, metadata, and JSON-LD. Use the existing static generation or prerendering path to expose the article in initial HTML where supported. Check crawlability and unintended indexing restrictions.
  
  Run the existing build and inspect the resulting metadata, internal links, article, and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google’s Rich Results Test. Follow the project’s deployment workflow and authorization, then verify the published page. Report any checks that could not be completed.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html#webpage",
        "url": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html",
        "name": "Agent Skills and SKILL.md: Format, Uses, and Example",
        "description": "Learn what Agent Skills contain, how SKILL.md instructions are discovered, and how skills differ from tools and MCP connections in an AI workflow.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html#breadcrumbs"
        },
        "citation": [
          "https://agentskills.io/home",
          "https://agentskills.io/specification"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html#term",
        "name": "Agent Skills (SKILL.md)",
        "termCode": "agent-skills-skill-md",
        "description": "Agent Skills are reusable packages of instructions and supporting resources that help compatible AI agents perform specific tasks. In the Agent Skills format, each skill is a directory containing a SKILL.md file, with optional scripts, references, and assets.",
        "url": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html#breadcrumbs",
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
            "name": "Agent Skills (SKILL.md)",
            "item": "https://lexkonovalov.com/glossary/agent-skills-skill-md.html"
          }
        ]
      }
    ]
  }
---

# Agent Skills (SKILL.md)

Agent Skills are reusable packages of instructions and supporting resources that help compatible AI agents perform specific tasks. In the Agent Skills format, each skill is a directory containing a SKILL.md file, with optional scripts, references, and assets.

SKILL.md uses YAML frontmatter for metadata, followed by Markdown instructions. The specification requires a name and description. Compatible agents can use the description to identify relevant skills and load further instructions when needed; support depends on the agent implementation.

## Example: preparing a glossary entry

A publication skill could describe when to use it, the required metadata, the site's Markdown format, and the checks needed before publishing. A reference file could contain the site's schema example, while a script validates the completed document.

The instructions should identify the expected input and output, explain how to handle missing information, and state when the agent must stop for a decision. Keep examples specific enough to guide execution.

## Skills, tools, and MCP

These concepts serve different purposes:

- A skill describes a reusable way to complete work.
- A tool exposes an operation the application can execute.
- MCP provides a protocol for connecting an AI application to capabilities such as tools and resources.

A skill can tell an agent how to use a tool supplied through MCP. It does not itself grant access to an account or make an operation safe.

Review scripts and external resources before use. Test the skill with incomplete inputs and realistic failure cases. Version the instructions so a later result can be traced to the procedure used.

## Related terms

- [Model Context Protocol (MCP)](/glossary/model-context-protocol-mcp.html)
- [Agent Harness](/glossary/agent-harness.html)
- [Context Engineering](/glossary/context-engineering.html)
- [Tool Calling (Function Calling)](/glossary/tool-calling-function-calling.html)

## Sources

- [Agent Skills: Overview](https://agentskills.io/home)
- [Agent Skills: Specification](https://agentskills.io/specification)
