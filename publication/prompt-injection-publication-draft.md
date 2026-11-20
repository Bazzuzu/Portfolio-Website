---
url: "https://lexkonovalov.com/glossary/prompt-injection.html"
title: "Prompt Injection and AI Workflows | Product Design Glossary"
description: "Understand direct and indirect prompt injection, why instructions alone cannot protect an AI workflow, and how permissions and action review reduce impact."
canonical: "https://lexkonovalov.com/glossary/prompt-injection.html"
language: "en-US"
categories: ["AI & Agentic Systems"]
topic_cluster: "AI+design"
open_graph: {"og:type": "website", "og:title": "Prompt Injection and AI Workflows | Product Design Glossary", "og:description": "Understand direct and indirect prompt injection, why instructions alone cannot protect an AI workflow, and how permissions and action review reduce impact.", "og:url": "https://lexkonovalov.com/glossary/prompt-injection.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/system-prompts-guardrails.html", "placement": "Link when explaining why model instructions do not replace application controls.", "anchor": "prompt injection"}, {"source": "/glossary/tool-calling-function-calling.html", "placement": "Link where tool authorization and untrusted inputs are discussed.", "anchor": "prompt injection"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/prompt-injection.html#webpage",
        "url": "https://lexkonovalov.com/glossary/prompt-injection.html",
        "name": "Prompt Injection and AI Workflows | Product Design Glossary",
        "description": "Understand direct and indirect prompt injection, why instructions alone cannot protect an AI workflow, and how permissions and action review reduce impact.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/prompt-injection.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/prompt-injection.html#breadcrumbs"
        },
        "citation": [
          "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
          "https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/prompt-injection.html#term",
        "name": "Prompt Injection",
        "termCode": "prompt-injection",
        "description": "Prompt injection is an attack that puts instructions into content an AI system processes, attempting to redirect its behavior beyond the intended task. The instructions may come from a direct user input or from an external source such as a document or web page.",
        "url": "https://lexkonovalov.com/glossary/prompt-injection.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/prompt-injection.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/prompt-injection.html#breadcrumbs",
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
            "name": "Prompt Injection",
            "item": "https://lexkonovalov.com/glossary/prompt-injection.html"
          }
        ]
      }
    ]
  }
---

# Prompt Injection

Prompt injection is an attack that puts instructions into content an AI system processes, attempting to redirect its behavior beyond the intended task. The instructions may come from a direct user input or from an external source such as a document or web page.

## Direct vs. indirect prompt injection

A direct injection is supplied through an input to the AI system. An indirect injection arrives through material the system reads while performing another task.

For example, an agent may need to summarize an uploaded document. An instruction embedded in that document can try to make the agent perform an unrelated action. The document is task data; it should not receive the authority of the person who delegated the task.

Prompt injection differs from a hallucination. The central issue is influence over instructions and actions, rather than unsupported generated facts.

## Example: a supplier document in an operations tool

Suppose an assistant reads a supplier's attachment to extract booking details. The attachment also contains instructions to send internal records elsewhere.

A well-designed workflow does not let a document grant new permissions. The application limits which records the assistant can access and which destinations it can use. If a consequential action needs review, the interface shows its actual target, content, and effect.

A confirmation labeled only “Continue?” gives the reviewer little basis for detecting an unintended action.

## What belongs in the product design?

Make permissions and action boundaries understandable. Separate reading a source, preparing a change, and committing that change when their consequences differ.

For consequential operations, provide a review that lets the person inspect the proposed action. Show what completed, what failed, and whether anything may already have changed. Recovery needs to account for partial execution.

The appropriate controls depend on the operation. Requiring confirmation for every harmless step can obscure the decisions that actually need attention.

## Why are system prompts insufficient?

Instructions asking a model to ignore malicious content can be one layer, but they are not a complete security boundary. Access checks, authorization, constrained tools, and output handling must be enforced by the application.

OWASP recommends measures including least-privilege access, separation of external content, and human review for high-risk actions. Test the complete workflow against adversarial inputs as well as ordinary tasks.

Treat a strong-looking refusal or successful demonstration as one observation, not evidence that all prompt injection has been prevented.

## Related terms

- [System Prompts and Guardrails](/glossary/system-prompts-guardrails.html)
- [Tool Calling](/glossary/tool-calling-function-calling.html)
- [Agentic UX](/glossary/agentic-ux.html)
- [Human-in-the-Loop](/glossary/human-in-the-loop-hitl.html)

## Sources

- [Prompt Injection, OWASP Gen AI Security Project](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [Prompt Shields, Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/jailbreak-detection)
