# Dispatcher OS high-resolution screenshot

This capture supersedes the pixel dimensions and encoding details in `dispatcher-capture.md`.

- Source: `C:/Users/sidds/OneDrive/Documents/GitHub/TruckerPathPM`.
- Source HEAD: `0a4eb4ebd0e2666529958b12229d2c8d05c43e20`.
- Route: `http://localhost:3034/reports`.
- Source was copied into `Portfolio/.build/dispatcher-retina-source`; existing dependencies were reused through a junction. No original source changes, dependency install, UI edits, or content edits.
- Browser: headless Microsoft Edge via Playwright.
- Viewport: 1600 × 1000 CSS pixels; device scale factor 2. Screenshot: 3200 × 2000 raster pixels.
- The existing “AI insights & to-do” button was clicked, then `#todo` scrolled into view. Capture waited for fonts and all six Leaflet tile images to load successfully.
- Output: `public/assets/screenshots/dispatcher-insights.webp`, 581,280 bytes, losslessly encoded from the direct Playwright PNG with bundled Sharp. No resizing, cropping, sharpening, or compositing.
- Shows ranked dispatch tasks, operational reasons, fleet map with OpenStreetMap attribution, and proactive alerts. Visually inspected after encoding. No browser page errors.
- All operational figures, confidence scores, driver identities, tasks, and fleet positions are existing seeded prototype scenario data, not production outcomes or measured model quality. The source dashboard's Demo mode badge is above this scrolled scene. Keep the visible portfolio caption identifying seeded scenario data and demo metrics.
- Capture server stopped after verification. Temporary script, PNG, and machine-readable evidence are in `.build` and can be removed by the normal portfolio build.
