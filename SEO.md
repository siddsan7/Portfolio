# Personal website: SEO, recruiter visibility, and agent accessibility

## 1. Establish the content before building

- Confirm my professional name, target roles, specialties, preferred public location, and contact information.
- Collect my résumé, LinkedIn, relevant professional profiles, and strongest work samples.
- Identify the searches we want to serve: my name, my name plus role, and my name plus employer or university.
- Use one consistent professional name across the website and external profiles.
- Flag missing facts. Do not invent experience, metrics, testimonials, clients, or credentials.
- Keep factual content easy to update from one maintained source.

## 2. Make the homepage useful to recruiters

Within roughly 10 seconds, a visitor should understand:

- Who I am.
- What I do and specialize in.
- What evidence supports that.
- Where to find my résumé.
- How to contact me.

Requirements:

- Display my full professional name prominently as text.
- Use a specific role description instead of a vague slogan.
- Show two or three strong work examples near the top.
- Make “View work,” “Résumé,” and “Contact” easy to find.
- State availability, location, or work preferences only if I approve them.
- Use clear navigation and readable text on mobile.
- Avoid splash screens, forced introductions, autoplay audio, and interactions that delay access to content.
- Keep essential information accessible without a chatbot.

## 3. Publish evidence, not just claims

For each substantial project, include:

- The problem and intended users.
- My role and personal contribution.
- Relevant dates and project status.
- Constraints and key decisions.
- Results, with context for any measurements.
- Screenshots, demonstrations, publications, or source links where public.
- Team credit and a clear distinction between individual and shared work.

Use relevant skills and role terms naturally in these explanations. Avoid unsupported skill ratings and keyword lists.

Publish only material I have permission to share.

## 4. Use a simple page structure

Start with:

- `/` — identity, professional summary, selected work, and contact.
- `/projects/descriptive-project-name/` — substantial case studies.
- `/resume/` — readable HTML résumé and a downloadable PDF.
- `/about/` — optional, if it adds useful detail.
- `/writing/` — optional, when I have substantive material to publish.

Combine short sections when separate pages would be thin. Give each substantial project a stable URL that can be shared directly.

## 5. Make public content easy to retrieve

- Prefer static generation or server rendering for important content.
- Include the main biography, experience, project text, and links in the initial HTML response.
- Keep core content and navigation usable if JavaScript fails.
- Use real links with `href` attributes.
- Ensure direct visits and refreshes work on every public route.
- Return `200` for valid pages and a real `404` for missing pages.
- Do not require login, cookies, scrolling, or clicks to load essential professional facts.
- Check that hosting protection, bot controls, and rate limits do not block intended readers or legitimate crawlers.

Google recommends checking how search engines see the page, especially when JavaScript is involved. [Google’s developer SEO guidance](https://developers.google.com/search/docs/fundamentals/get-started-developers)

## 6. Implement page metadata and URL rules

- Give each indexable page a unique, descriptive title.
- Use a homepage title such as “Full Name | Role or Specialty.”
- Use project titles such as “Project Name — Case Study | Full Name.”
- Write a useful, unique meta description for each important page.
- Use clear headings, with one obvious main heading.
- Set the correct document language.
- Add a favicon and social preview metadata, including Open Graph title, description, image, and URL.
- Verify preview images work at absolute public URLs.
- Avoid rigid character-count rules that make titles unclear. Search engines can rewrite displayed titles. [Google’s title guidance](https://developers.google.com/search/docs/appearance/title-link)

Choose one primary HTTPS domain. Redirect alternate hosts and URL variants consistently. Use self-referencing canonical URLs on indexable pages, and preserve old links with permanent redirects when paths change. [Google’s canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

## 7. Configure indexing deliberately

- Publish a valid `robots.txt`.
- Publish an XML sitemap containing canonical, public, indexable URLs.
- Use accurate sitemap modification dates; do not reset every date on every build.
- Remove accidental production `noindex` directives.
- Check both HTML directives and HTTP headers.
- Keep staging and private material behind access controls.
- Do not treat `robots.txt` as a privacy mechanism.
- If using `noindex`, allow crawlers to access the page so they can read it. [Google’s indexing directive documentation](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)

Prepare Google Search Console and Bing Webmaster Tools verification. After an approved deployment, submit the sitemap and inspect important URLs. Record any account steps that require my action.

## 8. Explain my identity with structured data

- Add accurate JSON-LD describing me as a `Person`.
- Use a stable identifier such as `https://my-domain.example/#person`.
- Include relevant public facts such as name, URL, image, and description.
- Use `sameAs` for verified profiles that represent me.
- Consider `ProfilePage` on an appropriate profile or About page.
- Use article or other schema types only where they match the actual content.
- Keep structured data consistent with visible text.
- Validate it. Do not promise a knowledge panel or rich result.

Google explicitly documents profile markup for pages focused on a person, including an About Me page. [ProfilePage guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page)

## 9. Support AI search and browser agents

- Write explicit, factual summaries of my role, experience, and projects.
- Use descriptive headings and links so facts are easy to locate.
- Show meaningful dates and keep current and former roles distinct.
- Keep visible content, résumé content, and structured data consistent.
- Make navigation and contact controls usable through standard HTML.
- Use actual buttons, labeled form fields, and clear success or error messages.
- Avoid canvas-only interfaces and unlabeled icon controls.

For crawler policy:

- Allow intended search crawlers, including Googlebot and Bingbot.
- For ChatGPT search visibility, allow `OAI-SearchBot` and check hosting access rules.
- Treat model-training permission as a separate owner decision. OpenAI documents independent controls for `OAI-SearchBot` and `GPTBot`. [Official OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)
- Verify other providers’ current documentation before adding provider-specific rules.
- Never claim that allowing a bot guarantees inclusion.

Do not make `llms.txt`, special AI endpoints, or an MCP server launch requirements. Google says foundational SEO still applies to AI search and explicitly rejects unnecessary AI text files as an optimization requirement. Do not add hidden instructions aimed at influencing recruiting agents. [Google’s AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

## 10. Make the résumé easy to use

- Provide an HTML version and a selectable-text PDF.
- Use a clear filename such as `Full-Name-Resume.pdf`.
- Keep dates, job titles, and achievements consistent across formats.
- Make the PDF readable when printed and easy to extract as text.
- Include working website and professional-profile links.
- Decide deliberately whether the PDF should appear separately in search results.
- Do not publish private address details or references’ contact information.

## 11. Meet accessibility and performance targets

Target WCAG 2.2 AA, with automated checks and manual review:

- Keyboard access and visible focus.
- Logical headings and semantic landmarks.
- Sufficient contrast and usable text zoom.
- Descriptive alternative text for meaningful images.
- Labels and understandable errors for forms.
- Reduced-motion support.
- Captions or transcripts for relevant media.
- No essential information available only through hover.

Automated scores alone do not establish accessibility conformance. [W3C accessibility guidance](https://www.w3.org/WAI/standards-guidelines/wcag/)

Aim for good Core Web Vitals at the 75th percentile of real visits:

- LCP: no more than 2.5 seconds.
- INP: no more than 200 milliseconds.
- CLS: no more than 0.1.

Compress images, reserve image dimensions, minimize JavaScript, limit third-party scripts, and avoid lazy-loading the main above-the-fold image. Use lab tests before launch; report when real-user data is unavailable. [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)

## 12. Keep the site trustworthy and maintainable

- Use HTTPS and keep dependencies maintained.
- Keep secrets out of browser code and the repository.
- If a contact form exists, validate submissions on the server and handle spam, failures, and delivery.
- Provide a direct contact fallback.
- Collect only necessary visitor information.
- Keep analytics lightweight and document what they collect.
- Make content updates simple.
- Document domain ownership, renewal, hosting, and recovery.
- Avoid empty pages, fake freshness, mass-generated articles, paid-link schemes, and keyword stuffing.

## 13. Verify before launch

Provide a short report with evidence for:

- Every intended public route works on direct visit and refresh.
- Main content appears in retrieved HTML.
- Titles, descriptions, canonicals, and social previews are correct.
- Sitemap and crawler rules match the intended policy.
- No production indexing blocks remain.
- Structured data matches visible content.
- Résumé download, links, and contact methods work.
- Keyboard and mobile workflows work.
- Missing pages return `404`.
- Performance and accessibility checks have been run.
- Remaining problems and skipped checks are listed.

Use a person unfamiliar with the site to test this task: “Find my role, inspect one relevant project, download my résumé, and contact me.”

Obtain my review before deployment. After an approved launch, verify the live domain again.

## 14. Separate launch work from ongoing visibility

Owner actions after launch:

- Link the website from LinkedIn and relevant professional profiles.
- Add the URL to my résumé and professional signature.
- Seek accurate links from legitimate employer, university, publication, or event pages where appropriate.
- Keep projects, availability, and experience current.
- Review search indexing and name-query impressions periodically.

Measure success through correct identity, indexed pages, useful recruiter visits, résumé access, and relevant inquiries. Report observations; do not promise a ranking or citation timeline.