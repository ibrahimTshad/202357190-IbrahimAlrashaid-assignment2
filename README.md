# Ibrahim Alrashaid — Portfolio Assignment 2

A responsive HTML, CSS, and JavaScript portfolio extended from my Assignment 1 website. It keeps my About Me section, five-stage pipelined CPU project, assignment tracker prototype, and contact section while adding useful client-side interaction.

## What changed from Assignment 1

- Filter projects with All, Hardware, and UI Design buttons.
- Search project text live; search and category filters work together.
- See a result count and a friendly empty state with a reset button.
- Validate contact fields with specific error messages and a demo confirmation.
- Keep a light/dark preference in localStorage, with feedback if storage is blocked.
- Use consistent screenshot heights, responsive layouts, hover effects, smooth scrolling, and reduced-motion support.

## Run locally

1. Download the project and keep its folder structure intact.
2. Open `index.html` in a current web browser.
3. No dependencies, build step, API key, or backend are required.

For consistent localStorage behavior, use a local HTTP server (for example, VS Code Live Server). If Python is installed, run `python -m http.server 8000` from the project folder, then open `http://localhost:8000`. Storage behavior for directly opened `file://` pages can vary between browsers.

## Files

```text
assignment-2/
├── index.html
├── css/styles.css
├── js/script.js
├── assets/images/cpu.png
├── assets/images/track.jpeg
├── docs/ai-usage-report.md
├── docs/assignment1-ai-usage-report.md
├── docs/technical-documentation.md
├── README.md
└── .gitignore
```

## Using the features

- Select Hardware to show the CPU or UI Design to show the tracker. All restores both categories.
- Type `Verilog` or `Figma` in search. Search matches project text, ignoring case. Clear the field or use Reset filters when no results match.
- Select Dark mode or Light mode; refresh to check that your selection is retained.
- Submit the contact form empty to see validation. A valid email and a message of at least 10 non-padding characters are required.

**The contact form is a demo. It does not send or save messages.** A successful check explicitly says so. The GitHub profile link is the alternative contact route. No API or database is used.

## Technology and accessibility

Semantic HTML, CSS Grid/Flexbox, CSS custom properties, and plain JavaScript. Controls have visible focus indicators, associated form labels, error descriptions, live status messages, and meaningful image alternative text. Motion is disabled when reduced motion is requested.

## Verification

See [technical documentation](docs/technical-documentation.md) for checks performed and tests still needed. Review this AI-assisted starter and test it on your own devices before submission.

## AI disclosure

ChatGPT assisted with the original Assignment 1 template and this Assignment 2 implementation, debugging, documentation, and browser checks. See the [Assignment 2 usage report](docs/ai-usage-report.md) and the retained [Assignment 1 report](docs/assignment1-ai-usage-report.md).

The separate AI evidence folder is not part of the repository. Complete the conversation exports, record your own edits and tests, and complete the declaration before submitting the evidence ZIP on Blackboard. Do not claim the AI-generated starter is unassisted or already personally verified.

## Author

Ibrahim Alrashaid — [GitHub](https://github.com/ibrahimTshad)
