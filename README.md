# Test5 — Captcha Solver Demo

Professional Overview

Test5 is a minimal, client-side demonstration project that illustrates how a web page can display a captcha image provided via a query parameter and present a solved captcha string within 15 seconds. This repository is intended for instructional and evaluation purposes only — it does not integrate with any external OCR services and uses a deterministic simulated solver for demonstration.

Features

- Accepts a captcha image URL via the query parameter `?url=` (for example: `?url=https://example.com/image.png`).
- Displays the provided captcha image on the page.
- Simulates solving the captcha and displays the solved text within 15 seconds.
- Responsive, accessible UI with clear status updates.

Usage

1. Deploy the repository via GitHub Pages (branch: main).
2. Open the site root and provide the captcha image URL as a query parameter:

   https://<your-username>.github.io/test5/?url=https://example.com/image.png

3. The page will display the captcha image and show a simulated solved captcha string within 15 seconds.

Files

- index.html — Entry point (GitHub Pages).
- script.js — Client-side logic that reads the `?url` parameter, displays the image, and simulates solving.
- style.css — Styling for the page.
- LICENSE — MIT License.

License

This project is provided under the MIT License. See the LICENSE file for details.
