# ToneScope screenshot density

The case-study image `public/assets/screenshots/tonescope.webp` is a fresh capture of the actual embedded JUCE/WebView2 frontend at `https://juce.backend/`. It is not an enlarged copy of the previous screenshot.

- CSS viewport: 1600 × 1100; device pixel ratio: 2; captured raster: 3200 × 2200.
- Lossless WebP encoded with bundled Sharp. Text, controls, waveforms, and spectrum come from the running product.
- Private installed build: `0.1.0-demo-pr8-1c32a38`, clean compiled commit `1c32a38875ebf08d81b8e0f2bc5f95233b06cc0d`.
- Guitar source: ToneScope's existing `artifacts/demo-pr8-1c32a38/listening/original-2.wav`, 27.33 seconds, 48 kHz, stereo.
- Full-band compressor enabled: threshold −30 dBFS, ratio 4:1, attack 10 ms, release 150 ms, knee 6 dB, makeup 0 dB. EQ and drive bypassed.
- Selection: 0–8 seconds. Manual soft mark: 5–6 seconds; hard mark: 0–1 second. Native measured dry RMS contrast is approximately 5.25 dB; no listening preference is claimed.

The existing user app was preserved. Capture used its own instance identifier, recovery directory, and WebView user-data directory under Portfolio `.build`. The capture instance was closed after use. No hardware or paid provider calls were used.

Verified the 1× display-size rendering and a native 2× compressor detail crop visually. Both show crisp type and controls. Capture geometry and native state are retained in ignored `.build/tonescope-retina-evidence.json`; raw PNG, 1× inspection image, detail crop, and capture script are there too.
