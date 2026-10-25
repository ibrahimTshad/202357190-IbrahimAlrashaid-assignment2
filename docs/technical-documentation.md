# Technical Documentation — Assignment 2

## Overview and baseline

The project extends the provided Assignment 1 HTML, stylesheet, JavaScript, and screenshots. The original sections and project descriptions remain. Assignment 2 adds filtering/search, contact-form validation, empty states, storage feedback, transitions, and a consistent responsive layout. It remains a static site with no runtime dependencies or backend.

## Responsibilities

| File | Responsibility |
| --- | --- |
| `index.html` | Content, project categories, accessible controls, form fields and status areas |
| `css/styles.css` | Theme variables, Grid/Flexbox layout, image dimensions, interaction states and motion preferences |
| `js/script.js` | Theme preference, filter/search state, validation and copyright year |
| `assets/images/` | The two original project screenshots |

The script uses `defer` so initialization runs after HTML parsing. An immediately invoked function keeps its variables out of the global namespace.

## Dynamic project filtering

Each `.project-card` has a `data-category`: `hardware` or `design`. Each filter button has a corresponding `data-filter`, including `all`.

`updateProjects()` combines two conditions: selected category and case-insensitive search text. A card is visible only if both match. Visibility uses the HTML `hidden` property, with a CSS rule ensuring it is not overridden by layout styles. This also removes hidden cards from normal keyboard/accessibility navigation.

The function updates the live result count, selected button's `aria-pressed` state, and empty-state visibility. Reset restores All, clears the query, and focuses search. Controls are initially hidden and revealed after successful initialization, while project content is readable without JavaScript.

## Theme data handling

The existing `theme` localStorage key is reused. Only `dark` and `light` are accepted as stored values. Without a valid stored selection, the theme follows the OS color preference. An automatic OS preference is not saved as an explicit selection; subsequent OS changes are respected until the visitor chooses a theme.

`applyTheme()` changes the root `data-theme` attribute and the button label/state. CSS custom properties supply the colors. Storage reads/writes are protected with try/catch. If storage fails, the theme still changes for the current visit and a live message explains that saving is unavailable.

Only the theme is stored. Searches, names, email addresses, and message text are not saved by application code. Browser autofill is separate from application storage.

## Form validation and feedback

The form is clearly labeled as a demo. Its button starts disabled and is enabled after the JavaScript submit handler is installed, preventing accidental normal submission if JavaScript is unavailable. The script turns off native submission validation in favor of consistent custom errors; HTML still documents constraints with `required`, `type`, `minlength`, and `maxlength`.

On submit, `preventDefault()` blocks transmission. Values are trimmed for validation. Name and email must not be empty; email is checked through the browser's `typeMismatch`; the trimmed message must contain at least 10 characters. Maximum lengths are also enforced. Errors appear next to their fields, `aria-invalid` is updated, a summary is announced, and focus moves to the first invalid field.

A valid submission produces a personalized confirmation explicitly stating that nothing was sent or saved. Input edits clear that field's old error and the old summary. Text is inserted using `textContent`, not `innerHTML`, so entered markup is not interpreted.

## Layout, images, and animation

The content width is limited to 1100px. Grid places two project cards side by side on wide screens and one column at widths of 650px or below. Navigation and filters wrap. Form controls use border-box sizing and full container width.

Both project screenshots use a 280px-high frame on desktop and a 240px-high frame on mobile. `object-fit: contain` preserves the complete screenshots without distortion; different source proportions may leave empty space inside the frames. Old conflicting `.project-card img` rules have been replaced by one shared `.project-image` rule.

Buttons and cards use short transitions; form feedback uses a small fade/slide animation. A reduced-motion media query disables animations/transitions and smooth scrolling. Labels, semantic headings, a skip link, keyboard-focus indicators, live regions, and image alternative text support accessibility.

## Checks performed by the AI assistant — 25 October 2026

Browser checks in the available Chrome preview confirmed:

- Initial load shows both projects and their loaded screenshots.
- Hardware filtering shows one project and updates the selected state/count.
- An unmatched query shows zero projects and a helpful empty-state message.
- Reset restores both projects and clears search.
- Empty form submission produces three specific errors.
- Invalid email and a short message produce appropriate errors.
- Valid test input produces the honest demo confirmation without navigation.
- A selected dark theme persists after reloading.
- Both screenshot frames measure 280px high at a viewport width of 1363px, without horizontal page overflow.

These are assistant checks, not a claim of student testing or complete browser certification. Browser-extension warnings were observed; these are separate from application behavior.

## Student checks still required

1. Test at approximately 375px, 768px, and desktop widths: no overflow, usable navigation, equal image frames, and stacked mobile cards.
2. Test UI Design, All, case-insensitive search, positive search matches, and combined category/search behavior.
3. Check both themes, keyboard-only navigation, visible focus, and reduced-motion settings.
4. Try whitespace-only input, correcting errors, and text containing HTML characters.
5. Test unavailable localStorage: switching should still work and explain saving failure.
6. Repeat core checks in a second browser and inspect for application errors or missing assets.
7. Run from the final downloaded folder and the repository's deployed version if used.

Record actual results and failures rather than marking tests complete without running them.

## Limitations and setup

Open `index.html` locally or use a local HTTP server for consistent storage behavior. No API loading indicator is needed because the site makes no API requests. There is no email delivery, database, authentication, or separate project-detail page. LocalStorage may be restricted by browser settings. Screenshot files could be compressed later if needed. Documentation describes this generated version and must be updated if the student changes behavior.
