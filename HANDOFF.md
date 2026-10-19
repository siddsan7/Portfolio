# Portfolio handoff

Updated 2026-10-19. The redesign runs from `redesign.html` and `src/redesign/`, with build-time static React rendering. See README.md for architecture, content locations and routes; docs/verification/report.md for measured results and remaining release work.

The approved visual direction, Karrik, palette and project order are implemented. All artwork is original conceptual SVG and visibly labeled. The supplied résumé was retrieved through its public download URL and visually checked; education and experience are in one local source. The public PDF is a clean concise edition generated from the HTML page. Owner confirmed sole authorship of all three featured projects and requested no dates.

Three independent council reviewers reviewed design/UX, SEO/routing, and recruiter/content/accessibility code. Their concrete findings were fixed and re-reviewed. No external deployment or DNS operation is authorized. Owner specifically authorized PR merge after this council review; earlier merge-review restrictions are superseded for this redesign only.

Existing unrelated changes in the old app remain untouched and unstaged. The old runtime is retained as source history. Do not run or expand it as a second live site. Build uses the original dependency lockfile; audit tools are external and optional.

Run lint, build and static contracts after relevant edits. Browser/PDF checks must run after the build completes; never rebuild dist while capturing. Preview-indexing checks restore production output. Check the selectable PDF and annotations after any résumé change; regenerate the PDF and social PNG with qa-browser --assets, then rebuild. Test passive section tracking, keyboard focus and reduced motion if the header changes.

No fabricated dates, metrics, external demos, employment affiliation or production-readiness claims. Current project evidence and limitations remain linked in the case studies. Label future screenshots with actual provenance before changing conceptual captions. Beatpad stays deferred from featured work.
