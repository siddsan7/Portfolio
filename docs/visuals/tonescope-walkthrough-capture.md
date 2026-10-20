# ToneScope offline assistant walkthrough capture

These three screenshots show the actual native JUCE/WebView2 React interface at `https://juce.backend/`, not a browser shim or fabricated result. Each is 3200 × 2200 pixels from a 1600 × 1100 CSS viewport at device pixel ratio 2, encoded as lossless WebP.

1. `public/assets/walkthroughs/tonescope-proposal.webp`: a bounded offline request, “Make this passage 2 dB louder,” produces a measured candidate for the selected 0–8 second guitar passage. Native output remains 0 dB before explicit acceptance. The candidate reports RMS −22.53 dBFS and sample peak −6.67 dBFS.
2. `public/assets/walkthroughs/tonescope-preview.webp`: actual candidate preview, current-settings/suggestion comparison controls, and explicit Apply. Native preview was observed in both candidate and baseline states. Preview leaves the committed output control at 0 dB. RMS matching is off; this is raw-gain comparison. Playback was paused for capture. The product retains a “reconstructing exact source history” status during this isolated hardware-free preview; this is not evidence of physical playback or listening quality.
3. `public/assets/walkthroughs/tonescope-undo.webp`: after Apply set native output to +2 dB, one Undo restored 0 dB. The final screenshot focuses the restored Output control. All other native controls were identical before/after Apply, and the entire control array matched baseline after Undo. Redo became available after Undo. The stale proposal was invalidated with “Session changed. Ask again for a current measured proposal.”

## Identity and boundaries

- Binary: existing installed private `0.1.0-demo-pr8-1c32a38`, compiled from clean commit `1c32a38875ebf08d81b8e0f2bc5f95233b06cc0d`.
- Binary SHA256: `46cce292231590b78b888ff33026864a25f0f1b232c738290af7b01e54fbefcb`.
- Source: existing local `artifacts/demo-pr8-1c32a38/listening/original-2.wav`, 48 kHz stereo, approximately 27.33 seconds, with only 0–8 seconds selected. Compressor, EQ, and drive remained bypassed for this level-only request.
- This is the offline deterministic rules assistant. No paid provider or hardware was used. It does not establish live-model effectiveness, perceptual loudness, or preferred sound.
- No audio was exported or copied into Portfolio. Only screenshots and this capture note are intended for integration.
- The existing normal ToneScope process (PID 48120) was preserved. The capture used a unique test instance, isolated assistant data and WebView folders under this worktree `.build`, and its process was closed afterward.
- No ToneScope source files were edited. Native baseline/proposal/candidate/baseline-preview/Apply/Undo snapshots and capture scripts were preserved in Portfolio's ignored `output/tonescope-native-audit` before archiving the isolated capture worktree.

## Attribution

The displayed recording is from Guitar-TECHS, `P3_music/audio/directinput/directinput_08.wav`. Pedroza, Hegel, et al., *Guitar-TECHS: An Electric Guitar Dataset Covering Techniques, Musical Excerpts, Chords and Scales Using a Diverse Array of Hardware*, ICASSP 2025, DOI `10.1109/ICASSP49660.2025.10887996`. [Source dataset](https://zenodo.org/records/14963133), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Screenshots display measured UI traces from this recording and the +2 dB candidate; no audio redistribution or endorsement is implied.

## Checks

All three final screenshots were inspected visually. Their native dimensions were verified with Sharp. Native snapshots verified committed output 0 → +2 → 0 dB and exact full-control restoration after Undo. The proposal and preview show real measured candidate evidence; the final frame shows the restored output control. Product build tests were not run because no product code changed; integration gates belong to the main Portfolio change.
