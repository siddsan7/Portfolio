# Dispatcher OS screenshot capture

- Source: C:/Users/sidds/OneDrive/Documents/GitHub/TruckerPathPM
- Source HEAD: 0a4eb4ebd0e2666529958b12229d2c8d05c43e20 (read from .git/refs/heads/main).
- Isolated source copy: Portfolio/.build/dispatcher-source. Original source repo unchanged; existing node_modules reused via junction. No dependency install.
- Route: http://localhost:3034/reports
- Browser: Playwright with headless Microsoft Edge; 1600 x 1000 CSS pixels, device scale factor 1.
- Selected image: public/assets/screenshots/dispatcher-insights.webp (112664 bytes, lossless encoding of the original 260461-byte PNG). The actual AI insights navigation was clicked, then #todo scrolled into view. Shows ranked tasks, operational reasons, fleet map with loaded OpenStreetMap tiles and attribution, and proactive alerts.
- An alternative dashboard overview was inspected but not retained in public assets.
- Both images inspected visually. No page errors captured. No content or UI styles altered for screenshots.
- These are screenshots of the existing demo-first prototype. /api/dispatcher-hq directly returns createDemoDispatcherSnapshot(). Figures, confidence scores, driver identities, tasks, and fleet states are seeded scenario data; they are not measured production outcomes or validated model quality. Map tiles are real, loaded tiles. The source component says "Compact live preview" but this run uses seeded fleet positions. Keep the portfolio caption explicit about demo data.
- The primary image starts below the source dashboard's Demo mode badge because it focuses on the actual AI board. Add a visible caption identifying it as a seeded prototype.
- Raw page text/error capture and capture script were temporary `.build` artifacts. Final portfolio builds clear that directory; this note preserves the reproduction details.
