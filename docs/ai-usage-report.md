# AI Usage Report — Assignment 2

**Name:** Ibrahim Alrashaid  
**Student ID:** [ENTER STUDENT ID]  
**Report updated:** 25 October 2026

## 1. Tools Used and Use Cases

I used ChatGPT, including the Codex assistant, to support the development of my portfolio. The exact model version was not independently recorded. AI assistance included substantial code generation, explanations, debugging, code review, and documentation drafting; it was not limited to proofreading or minor suggestions.

### Assignment 1 baseline

My Assignment 2 website builds on an AI-assisted Assignment 1 portfolio. Earlier assistance included creating the initial HTML template, explaining repository requirements, troubleshooting dark mode and file paths, adjusting images, reviewing project markup, and drafting documentation. The two featured projects are my five-stage pipelined CPU and assignment tracker prototype. The original Assignment 1 AI report is retained separately in the project documentation.

### Assignment 2 implementation

After I supplied the assignment instructions and my existing files, the assistant generated a separate Assignment 2 starter. It included:

- Project category buttons and live text search, including combined filtering, a result count, an empty state, and a reset button.
- Contact-form validation with field-specific errors and a confirmation explaining that the form is a demo and does not send or save messages.
- Theme preference handling through localStorage, including feedback when storage is unavailable.
- Consolidated screenshot sizing, responsive CSS, hover transitions, form-feedback animation, and reduced-motion support.
- An updated README, technical documentation, AI-report draft, and a separate evidence starter with original generated artifacts.

The assistant performed browser checks on the generated starter. Those checks are distinguished from my own testing below.

## 2. Usage Log

The Assignment 2 work and subsequent troubleshooting took place in the same conversation thread. C01 therefore covers that complete conversation, including follow-up questions; these were not separate conversations. Any additional AI conversations or tools used outside this thread must be added before submission.

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
| --- | --- | --- | --- | --- | --- |
| C01 | ChatGPT / Codex; exact model version not independently recorded | 2026-10-25 for Assignment 2 work; earlier Assignment 1 context is in the same thread | Interpret requirements; generate the Assignment 2 starter; review code; explain filtering, storage, errors and animation; troubleshoot theme persistence; prepare documentation | `index.html`, `css/styles.css`, `js/script.js`, `.gitignore`, `README.md`, and documentation under `docs/` | I supplied my existing project and participated in follow-up troubleshooting. After an explicit light-theme CSS rule was suggested, I confirmed that both light and dark modes persisted after refreshing. The assistant's separate checks are listed below. Other student changes and tests should be added only if actually completed. |
| A01 | ChatGPT / Codex; exact model version not independently recorded | 2026-10-25 | Generate the original Assignment 2 project and documentation before student edits | Original snapshot in the evidence starter at `artifacts/A01/` | Preserve this snapshot unchanged. It records the AI-generated baseline rather than claiming the student authored the entire implementation. |
| A02 | ChatGPT / Codex; exact model version not independently recorded | 2026-10-25 | Produce this updated AI usage report following theme troubleshooting | `docs/ai-usage-report.md` | This report is also AI-assisted. Preserve its original downloaded version in the evidence folder before making personal corrections. |

## 3. Benefits and Challenges

AI helped turn the requirements into concrete features and provided explanations of how HTML, CSS, and JavaScript work together. It also helped compare possible ways to meet the data-handling requirement: saving a theme preference, validating a form, or saving a message draft. A saved message draft was discussed as an option, but this report does not claim that it was implemented.

Some suggestions required further investigation rather than immediate acceptance. Earlier image-sizing changes produced screenshots that were too large or had inconsistent heights. The generated Assignment 2 version used equal-height frames and `object-fit: contain` to preserve complete screenshots.

During follow-up testing, I reported that light mode did not remain selected while dark mode did. The assistant reviewed my uploaded JavaScript and found that its theme-saving logic worked in a simulated environment. It requested browser storage checks and suggested an explicit CSS rule for the light theme if the saved value and appearance differed. I subsequently confirmed that both themes worked correctly after refreshing. The exact original cause was not conclusively established, and the assistant did not inspect my final edited stylesheet.

## 4. Learning Outcomes and Review

The explanations and troubleshooting covered these concepts:

- localStorage keeps a small preference, such as `theme`, between page loads; it is separate from the currently applied HTML attribute.
- A stored preference and the visible theme must both be checked when diagnosing persistence problems.
- CSS custom properties define shared colors, while `data-theme` selects the active theme.
- Category and search conditions can be combined to show only matching project cards.
- Clear feedback should explain both the problem and the next action, such as entering a longer message or resetting a search.
- A CSS transition animates a change between states; reduced-motion support avoids forcing unnecessary motion.
- Saving a message in localStorage does not deliver it to the website owner.

These are the concepts addressed during the review, not a substitute for demonstrating understanding. Before submission, I must be able to explain the code and revise any part of this report that does not accurately reflect my understanding or work.

## 5. Verification and Responsible Use

### My confirmed testing

I confirmed in the conversation that selecting light mode and refreshing kept the page light, and selecting dark mode and refreshing kept the page dark. I also supplied my JavaScript and a developer-tools screenshot during troubleshooting.

### Assistant testing

The assistant checked the generated starter's category filtering, unmatched search and empty state, reset control, combined UI Design/case-insensitive search, empty/invalid/valid form feedback, dark-theme persistence, loaded images, and equal desktop image heights. It also checked JavaScript syntax and local resource paths. Later, it tested the uploaded theme script's save/restore behavior using a simulated browser environment. These are assistant checks, not claims that I personally ran them.

Mobile/tablet layouts, a second browser, and the final edited project's remaining features still need student verification unless completed and recorded separately. This report does not certify those tests as passed.

I will keep the AI-generated baseline and distinguish it from my own edits. I must not describe the complete starter as independently written, claim unperformed testing, or submit code that I cannot explain. Further changes and tests must be recorded accurately.

## 6. Evidence and Required Declaration

The separate AI evidence ZIP must contain the complete, unedited conversation export under `conversations/` and original intermediate outputs under `artifacts/`. This report is a summary, not a replacement for those conversations. The evidence starter does not contain an authentic exported conversation until I add it. Any other AI work used must also be included. Logs and the evidence ZIP must not be committed to the public repository.

**Before submitting:** enter the student ID, verify the evidence is complete, review this AI-drafted report, and complete the declaration details only when all its claims are true. The declaration below is provided as the required text, not as an already completed attestation.

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Ibrahim Alrashaid  
**Student ID:** [ENTER STUDENT ID]  
**Declaration date:** [COMPLETE AFTER REVIEWING THE REPORT AND EVIDENCE]
