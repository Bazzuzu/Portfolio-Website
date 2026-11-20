---
url: "https://lexkonovalov.com/glossary/ooux-worked-example.html"
title: "OOUX Worked Example: From Research to a Booking Interface"
description: "Follow an OOUX and ORCA example from a research note through objects, relationships, actions, attributes, interface decisions, and practical usability tasks."
canonical: "https://lexkonovalov.com/glossary/ooux-worked-example.html"
language: "en-US"
open_graph: {"og:type": "website", "og:title": "OOUX Worked Example: From Research to a Booking Interface", "og:description": "Follow an OOUX and ORCA example from a research note through objects, relationships, actions, attributes, interface decisions, and practical usability tasks.", "og:url": "https://lexkonovalov.com/glossary/ooux-worked-example.html", "og:image": "https://lexkonovalov.com/og/home.webp?v=2", "og:image:width": 1200, "og:image:height": 630, "og:site_name": "Lex Konovalov — Portfolio", "og:locale": "en_US"}
publishing_instructions: |
  Create a supporting worked-example guide at https://lexkonovalov.com/glossary/ooux-worked-example.html, using the site's existing styles, content conventions, and source of truth. Check for an equivalent existing route and preserve it if present; update references consistently. This is a supporting page, not an additional glossary term: do not create a DefinedTerm node or increment the term count for it. Render only the Markdown body below front matter. Add it to appropriate navigation and the sitemap.
  
  Apply the supplied exact SEO title, description, canonical, language, and Open Graph values. Override automatic title suffixes and synchronize existing Twitter metadata. Keep one visible H1, readable mobile tables with semantic headers, and descriptive links.
  
  Emit the complete structured_data JSON below as application/ld+json. Merge equivalent nodes by @id; retain domain-level WebSite and Person nodes and the existing glossary DefinedTermSet. Use the supplied WebPage with Article graph. Render visible breadcrumbs that match BreadcrumbList. Use only actual publication history for date fields. Do not add FAQPage or HowTo markup.
  
  Publish after or with the linked OOUX expansion articles. Link this example from the OOUX hub, Object-Oriented UX overview, and ORCA overview where it helps readers follow the method. Preserve existing URLs, metadata, and links while adding those paths. Ensure links do not point to uncreated destinations.
  
  Run the existing site build and verify initial server-returned HTML, direct page loads, rendered content, links, mobile layout, metadata, canonical URLs, and structured data. Check HTTP 200, sitemap inclusion, crawlability, and unintended indexing restrictions. Validate the graph with Schema.org Validator and BreadcrumbList with Google's Rich Results Test. Follow the project's authorized deployment workflow and report any incomplete checks.
structured_data: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://lexkonovalov.com/glossary/ooux-worked-example.html#webpage",
        "url": "https://lexkonovalov.com/glossary/ooux-worked-example.html",
        "name": "OOUX Worked Example: From Research to a Booking Interface",
        "description": "Follow an OOUX and ORCA example from a research note through objects, relationships, actions, attributes, interface decisions, and practical usability tasks.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@id": "https://lexkonovalov.com/#website"
        },
        "breadcrumb": {
          "@id": "https://lexkonovalov.com/glossary/ooux-worked-example.html#breadcrumbs"
        },
        "citation": [
          "https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389",
          "https://www.nngroup.com/articles/usability-testing-101/"
        ],
        "mainEntity": {
          "@id": "https://lexkonovalov.com/glossary/ooux-worked-example.html#article"
        }
      },
      {
        "@type": "Article",
        "@id": "https://lexkonovalov.com/glossary/ooux-worked-example.html#article",
        "url": "https://lexkonovalov.com/glossary/ooux-worked-example.html",
        "headline": "OOUX Worked Example: From Research to a Booking Interface",
        "description": "Follow an OOUX and ORCA example from a research note through objects, relationships, actions, attributes, interface decisions, and practical usability tasks.",
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@id": "https://lexkonovalov.com/glossary/ooux-worked-example.html#webpage"
        },
        "about": [
          {
            "@id": "https://lexkonovalov.com/glossary/object-oriented-ux.html#term"
          },
          {
            "@id": "https://lexkonovalov.com/glossary/orca-framework.html#term"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lexkonovalov.com/glossary/ooux-worked-example.html#breadcrumbs",
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
            "name": "OOUX and ORCA",
            "item": "https://lexkonovalov.com/glossary/ooux/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "OOUX Worked Example: A Booking Workflow",
            "item": "https://lexkonovalov.com/glossary/ooux-worked-example.html"
          }
        ]
      }
    ]
  }
---

# OOUX Worked Example: A Booking Workflow

This illustrative OOUX example follows a travel operations task from a research note to a testable interface. It uses ORCA's Objects, Relationships, Calls-to-Action, and Attributes to make the modeling and design decisions explicit.

The records and rules are fictional. They show one possible product scope, with assumptions that a real team would need to validate.

## Start with a task and evidence

Suppose a research walkthrough includes this statement:

> I find the trip, check which booking the traveler means, and ask the supplier to cancel it. I need to know whether the request is still waiting or the cancellation is complete.

The task is to identify the right booking, request an eligible cancellation, and understand the outcome. [Noun Foraging](/glossary/noun-foraging.html) suggests Trip, Booking, Traveler, and Supplier as candidates.

For this release, the team investigates Trip, Booking, and Traveler as separate record types. It retains supplier identification on a booking and defers a supplier-management workspace. That scope decision would change if operators need to manage supplier records.

## Discovery: build a small model

Trip T-104 has two travelers and two bookings. Booking B-52 is Confirmed; Booking B-53 is Awaiting confirmation.

| Object type | Representative information | Connection or action |
|---|---|---|
| Trip | Trip reference and travel dates | Contains bookings and associated travelers. |
| Booking | Booking reference, status, service date, supplier details | Belongs to one trip; an eligible agent can request cancellation. |
| Traveler | Identity and permitted contact information | Can be associated with multiple trips. |

This model allows a trip with no bookings and requires every booking to belong to one trip. A [Nested Object Matrix](/glossary/nested-object-matrix.html) and [CTA Matrix](/glossary/cta-matrix.html) can investigate relationships and actions systematically.

If eligibility depends on which traveler is covered by a service, the team must model that connection explicitly. Association with the same trip alone does not establish passenger coverage.

## Requirements: make the cancellation rule precise

For the example, the requesting agent must have access, be assigned to the trip, and act on an eligible confirmed booking.

The [object-oriented user story](/glossary/object-oriented-user-stories.html) adds the motivation: the traveler has changed plans, and the agent needs to start the supplier's cancellation process.

The expected sequence is:

1. Show the target booking and relevant conditions for review.
2. Submit an authorized cancellation request.
3. When the request is accepted for processing, show Cancellation pending and its reference.
4. Show Canceled only after the supplier confirms cancellation.

An already-pending request should remain inspectable. A submission timeout requires checking whether the request exists before retrying. If the supplier declines, show the result and current booking state.

Document these outcomes in the [State Transition Matrix](/glossary/state-transition-matrix.html). The application enforces the rules at execution.

## Prioritization: decide what the first release needs

| Decision area | Example choice |
|---|---|
| Objects | Support Trip, Booking, and Traveler; defer supplier profiles. |
| Relationships | Show a trip's bookings and a contextual route from a booking back to its trip. |
| Actions | Make eligible cancellation easy to find and provide access to pending requests. |
| Attributes | Emphasize booking reference, status, and service date in the work queue. |

The supplier confirmation number remains important even if a particular compact queue does not always display it. [Attribute Prioritization](/glossary/attribute-prioritization.html) separates required data from prominence in a view.

## Representation: preserve identity across views

A search result and a trip's booking list both identify B-52 with the same reference and status meaning. The detailed record adds relevant conditions, history, and permitted actions.

The cancellation review repeats the booking identity and proposed operation. Its completion message distinguishes a submitted request from a completed cancellation.

A [Shapeshifter Matrix](/glossary/shapeshifter-matrix.html) records why views differ. The goal is for users to recognize the booking while receiving the detail appropriate to the task.

## Test the model and interface

Populate a [content prototype](/glossary/content-prototyping.html) with the two bookings, an empty trip, and a record with missing conditional data.

Then ask representative users to find B-52 from a supplier message, identify its trip, respond to a cancellation need, and explain the state after submission. Include direct entry through search.

Observe mistaken identities, wrong routes, missed conditions, and misunderstandings about pending outcomes. These are proposed checks, not reported research findings.

Revise the relevant object definition, relationship, action rule, or representation. The [OOUX and ORCA reading path](/glossary/ooux/) links the methods behind each decision.

## Sources

- [Sophia V. Prater: Introducing ORCA](https://medium.com/design-bootcamp/introducing-orca-the-third-diamond-in-your-ux-process-23a1babb0389)
- [Nielsen Norman Group: Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/)
