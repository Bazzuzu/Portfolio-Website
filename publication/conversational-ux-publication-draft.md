---
url: "https://lexkonovalov.com/glossary/conversational-ux.html"
title: "Conversational UX: Meaning and Examples | Product Design Glossary"
description: "Learn how conversational UX supports tasks through text or voice, including turn-taking, clarification, correction, and a clear path beyond the chat."
canonical: "https://lexkonovalov.com/glossary/conversational-ux.html"
language: "en-US"
categories: ["UX & Product Architecture", "AI & Agentic Systems"]
topic_cluster: "AI+design"
open_graph: {"og:type": "website", "og:title": "Conversational UX: Meaning and Examples | Product Design Glossary", "og:description": "Learn how conversational UX supports tasks through text or voice, including turn-taking, clarification, correction, and a clear path beyond the chat.", "og:url": "https://lexkonovalov.com/glossary/conversational-ux.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Render only the Markdown body after the closing front-matter delimiter as the approved article. Front matter is implementation data. Use one H1 and existing glossary styling. Add this new entry to the glossary index and the existing category values supplied above; topic_cluster is editorial grouping, not an instruction to rename site-wide categories.
  
  Apply the exact title, description, canonical, language and Open Graph values. Override automatic title suffixes for this page. Synchronize existing Twitter title, description and image fields. Use clean canonical URLs without tracking parameters.
  
  Emit the full structured_data graph below in a script of type application/ld+json. Merge nodes by @id rather than duplicating them. Reuse #term, #terms and #breadcrumbs; use #webpage or consistently reuse the site's equivalent page ID. Keep the existing domain-level WebSite and Person nodes, including https://lexkonovalov.com/#website and https://lexkonovalov.com/#person. Preserve other terms when merging DefinedTermSet. Its name is Product Design Glossary and its ID is distinct from WebSite. Synchronize the DefinedTerm description with the visible opening definition. Do not add FAQPage or HowTo. Fill publication and modification dates only from actual publication history.
  
  Render visible breadcrumbs matching the graph. Preserve all supplied contextual, related-term and source links. Keep Previous/Next navigation. Render tables with semantic headers and make wide tables usable on mobile. Treat code and examples as illustrative; do not execute them as deployment instructions.
  
  Serve this entry at the exact canonical route above after checking for a conflicting existing route or redirect. Preserve all other existing glossary URLs. Make the article and metadata available in initial HTML through the site's existing static generation or prerendering path. Add the canonical to the sitemap; use the actual deployment date for lastmod if maintained.
  
  Implement the specific inbound links listed below in the corresponding source pages, inside relevant existing sections or their Related terms lists. Do not create duplicate paragraphs when that link already exists. New target dependencies must ship together, or in dependency order with links activated when destinations exist.
  
  Run the existing build; inspect generated HTML for the article, one H1, canonical, title, metadata, internal links and JSON-LD. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Check direct page loads, crawlability and unintended noindex/robots restrictions. Follow the project's authorized deployment workflow, then verify the published page. Report checks that cannot be run.
inbound_links: [{"source": "/glossary/agentic-ux.html", "placement": "Link the discussion of conversation as one possible entry point.", "anchor": "conversational UX"}, {"source": "/glossary/generative-ui.html", "placement": "Link where language and interactive controls work together.", "anchor": "conversational UX"}]
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/conversational-ux.html#webpage",
        "url": "https://lexkonovalov.com/glossary/conversational-ux.html",
        "name": "Conversational UX: Meaning and Examples | Product Design Glossary",
        "description": "Learn how conversational UX supports tasks through text or voice, including turn-taking, clarification, correction, and a clear path beyond the chat.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/conversational-ux.html#term"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/conversational-ux.html#breadcrumbs"
        },
        "citation": [
          "https://developers.google.com/assistant/conversation-design/what-is-conversation-design",
          "https://pair.withgoogle.com/chapter/feedback-controls/"
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://lexkonovalov.com/glossary/conversational-ux.html#term",
        "name": "Conversational UX",
        "termCode": "conversational-ux",
        "description": "Conversational UX is the design of experiences in which people interact with a system through exchanges of language, using text, voice, or both. It covers how a conversation starts, progresses, handles misunderstandings, and helps a person complete a task.",
        "url": "https://lexkonovalov.com/glossary/conversational-ux.html",
        "inDefinedTermSet": {
          "@id": "https://lexkonovalov.com/glossary/#terms"
        },
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/conversational-ux.html#webpage"
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
        "@id": "https://lexkonovalov.com/glossary/conversational-ux.html#breadcrumbs",
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
            "name": "Conversational UX",
            "item": "https://lexkonovalov.com/glossary/conversational-ux.html"
          }
        ]
      }
    ]
  }
---

# Conversational UX

Conversational UX is the design of experiences in which people interact with a system through exchanges of language, using text, voice, or both. It covers how a conversation starts, progresses, handles misunderstandings, and helps a person complete a task.

## Conversational UX vs. conversation design

Conversation design focuses on the structure and content of the exchange: prompts, responses, turn-taking, and repair. Conversational UX also includes the surrounding experience, such as discovering capabilities, moving between chat and other controls, and reviewing outcomes.

A conversational interface does not require a generative model. It can use scripted flows, intent recognition, or a combination of techniques.

## Example: changing a travel date

A traveler asks, “Can I move this to Friday?” The system needs to establish which booking and which date the person means.

A useful response might show the identified booking, ask for the missing date, and present available options in a comparison view. Before applying a change, it shows the selected option and any relevant consequences.

If the traveler corrects the date, the system preserves the rest of the useful context. If no options are available, it provides a clear next step rather than restarting the conversation.

## What should designers specify?

| Moment | Design question |
|---|---|
| Entry | What can this system help the person do? |
| Clarification | Which missing detail is necessary now? |
| Response | Does the user need text, a choice, a table, or a form? |
| Correction | Can they change one detail without repeating everything? |
| Completion | Can they tell what happened and what remains? |

Write sample conversations for ordinary and difficult cases. Include ambiguous references, changed intent, interrupted tasks, and failed operations.

Conversation design concerns the exchange's underlying logic, including what happens when the system does not understand a request. Adding a text box or voice input does not define that logic.

## Conversational UX vs. agentic UX

A chat can answer questions without acting on another system. An agent may perform delegated work through chat, a task queue, or another interface.

When conversation leads to action, [agentic UX](/glossary/agentic-ux.html) adds questions about authorization, progress, review, interruption, and recovery.

Use direct controls when they make the task clearer. A calendar or comparison table can complement language; users should not have to describe every precise selection in prose.

## Related terms

- [Agentic UX](/glossary/agentic-ux.html)
- [Generative UI](/glossary/generative-ui.html)
- [AI-native Design](/glossary/ai-native-design.html)
- [Progressive Disclosure](/glossary/progressive-disclosure.html)

## Sources

- [What is conversation design?, Google (legacy guide)](https://developers.google.com/assistant/conversation-design/what-is-conversation-design)
- [Feedback and Control, Google PAIR](https://pair.withgoogle.com/chapter/feedback-controls/)
