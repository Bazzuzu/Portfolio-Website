# Product Design Glossary — publication files

This folder contains the final publication sources: 176 glossary terms and two supporting OOUX pages. Each publication source ends in `-publication-draft.md`. This README is an instruction file and must not become a website page.

## Apply the Markdown files

1. Inspect the destination project's existing routing, page templates, glossary index, sitemap, and structured-data setup.
2. Use each file's front matter as implementation data and its Markdown body as the approved visible content. Follow that file's specific publishing instructions.
3. Take the destination URL from the supplied `url` and `canonical` fields. Do not derive routes from filenames: some filenames intentionally differ from their public slugs. Preserve existing URLs and any existing redirects.
4. Apply the title, meta description, language, Open Graph and existing Twitter metadata. Keep the existing site styling, navigation, and page-level features.
5. Emit the supplied `structured_data` JSON-LD and merge existing nodes by `@id`. Retain shared WebSite, Person and glossary collection identities. Do not replace the supplied graph with a generic schema template.
6. Keep contextual links, related terms, source links and breadcrumbs. Apply any specified inbound links without duplicating links already present. The two OOUX supporting pages have their own routes and instructions.
7. Add new destinations and update changed pages in the index and sitemap. Use actual publication history for dates; file preparation dates are not publication dates.

## Verify before completing publication

Run the project's build. Check generated and rendered HTML, direct page loads, canonical URLs, metadata, JSON-LD, internal links, mobile tables and navigation. Validate the structured data with the appropriate validators.

If deploying in stages, publish linked new destinations first or activate their links when those pages exist. Do not leave links pointing to unshipped pages.

Follow the project's authorized deployment workflow, verify the deployed result, and report any checks that could not be completed.

The folder contains publication sources and this instruction file. Editorial notes, research plans, keyword tables and archives are kept separately.

