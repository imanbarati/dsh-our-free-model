# Handoff — English UI localization

## Goal

Add an English-language option to the standalone Our Free Model desktop console while keeping Simplified Chinese as the default.

## Changes

- Added packages/standalone/frontend/locale.mjs with a shared Simplified Chinese-to-English UI dictionary, dynamic-label rules, a persistent locale preference, and a DOM observer that localizes text added by React after navigation or refresh.
- Added an English / 中文 toggle to the console top bar and login screen. The preference is stored in local storage.
- Added translations for the principal navigation, login, overview, clients and subscriptions, providers, library, model catalog, settings, plugins, routing, usage, API connection, and desktop update surfaces.
- The translator skips code blocks, scripts, styles, text areas, SVG content, and explicitly excluded content. Unknown strings and user-supplied model or plugin names remain unchanged.
- Added scripts/locale-ui-test.mjs with focused checks for static labels, dynamic pagination/count labels, cooldown messages, and the default Chinese locale.

## How to verify

Run from the repository root:

    node scripts/locale-ui-test.mjs
    npm run build:standalone-ui
    npm run typecheck:standalone

Launch the standalone desktop app, switch languages from the login screen or top bar, navigate across the main pages, and restart the app to confirm that the selected language persists.

## Scope and notes

- Simplified Chinese remains the default for existing users.
- This change targets the standalone desktop console. The DSH plugin's separately embedded web UI and remote marketplace/news content are not rewritten.
- The language switch changes UI text and selected accessibility/placeholder attributes; it does not translate user content or remote provider metadata.
- The v2.9.1 release tag and published binaries are not modified. This proposal targets the upstream main branch for a subsequent release.

## Validation status

The locale test script is included but was not executed in this remote GitHub editing session. Run the commands above in CI or a local checkout before merging.
