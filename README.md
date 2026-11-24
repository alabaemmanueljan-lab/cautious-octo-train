# Personal site

A small static website: plain HTML, CSS and a tiny bit of JavaScript. No build step, no framework.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: intro, selected research, toolkit snapshot, contact |
| `research.html` | All research projects, with expandable method sections |
| `skills.html` | Skills grouped by category |
| `styles.css` | All styling (change colors at the top, in `:root`) |
| `script.js` | Light/dark toggle and footer year |

Files you add yourself (the links already point to these names):

| File | What it is |
|---|---|
| `avatar.jpg` | Your photo (optional; initials show if missing) |
| `cv.pdf` | Your CV |
| `papers/` | PDFs of your research, e.g. `papers/momentum.pdf` |
| `img/` | Charts and figures used in research entries |

## Previewing locally

Open `index.html` in a browser. To test it like a real server, run this in the folder:

    python3 -m http.server 8000

then visit http://localhost:8000

## Updating it

- **Search for `Your Name`, `you@example.com` and `your-username`** and replace them in every HTML file.
- **Add a research project:** open `research.html`, copy a whole `<article class="entry">` block, paste it at the top, change the `id`, text and links. Then add a line for it on `index.html` under "Selected research" if you want it on the home page.
- **Add a chart:** save the image in `img/`, then uncomment the `<figure>` block in an entry and fix the path.
- **Math:** write `$...$` for inline and `$$...$$` for display equations on the research page (rendered with KaTeX from a CDN, so it needs an internet connection when visitors load the page).
- **Skills:** edit the chips (`<li>` items) in `skills.html`.
- The top bar and footer are repeated in each HTML file, so if you change the nav, change it in all three.

## Hosting for free

**GitHub Pages** (simplest):
1. Create a repository, e.g. `your-username.github.io`.
2. Upload all these files to it.
3. In the repository, go to Settings, then Pages, and set the source to the `main` branch.
4. Your site appears at `https://your-username.github.io` within a minute or two.

Netlify, Cloudflare Pages and Vercel also work: drag the folder in and you're done. To use your own domain, add it in the host's settings and point your DNS at it.
