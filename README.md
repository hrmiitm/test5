# Test5 Captcha Solver Demo

MIT Licensed

Overview
This repository hosts a minimal client-side web page that displays a captcha image from a URL and simulates solving it within 15 seconds. The page reads a URL parameter ?url=... which points to an image (for example, image.png). It then renders the image and shows a simulated solved captcha text after a short delay.

Live Demo
- Index page: https://<your-username>.github.io/test5/
- Usage: Open the page and provide a captcha image URL via the query parameter, e.g. ?url=https://example.com/image.png

How it works
- index.html loads style.css and script.js.
- script.js reads the ?url parameter, displays the image, and shows a simulated result within 1-15 seconds.
- The simulated captcha text is randomly generated to illustrate a successful solve.

Files
- index.html: Entry point for the static site.
- style.css: Page styling.
- script.js: Client-side logic to display image and simulate solving.
- README.md: This document.

Deployment
- This project is ready to be published via GitHub Pages. Ensure GitHub Pages is enabled for the repository and serving from the main branch (or gh-pages as configured).

License
This project is MIT licensed. See LICENSE or the header in each file for details.
