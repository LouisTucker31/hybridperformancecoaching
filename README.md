# Hybrid Performance Coaching

Vanilla HTML / CSS / JS. No build step, no dependencies. Open `index.html` in a browser.

## Structure

```
hpc/
├── index.html              # Home
├── 404.html
├── css/style.css           # All styling + design tokens
├── js/
│   ├── main.js             # Injects shared header/footer + nav
│   └── forms.js            # Form validation + submit handling
├── pages/
│   ├── about.html
│   ├── coaching.html       # Includes the apply form
│   ├── plans.html
│   ├── tools.html          # Free tools hub
│   └── contact.html
└── tools/
    ├── pace-calculator.html
    ├── fuel-calculator.html
    └── strava-prompt.html
```

## Shared header & footer
Defined once in `js/main.js` and injected into the `#site-header` / `#site-footer`
placeholders on every page. Edit the nav/footer there and it updates everywhere.
They're embedded in JS (not fetched) so the site works when opened directly from a
`file://` URL, and identically on GitHub Pages.

## Forms
Front-end only right now (validate + show a success message, send nothing).
To go live: open `js/forms.js`, set `USE_ENDPOINT = true` and paste your
Formspree/Getform URL into `ENDPOINT`.

## Design
White background, one evergreen accent (`--accent` in `css/style.css`), Inter,
compact type scale. To change the accent, edit `--accent` / `--accent-dark` /
`--accent-soft` at the top of the stylesheet.

## Deploy to GitHub Pages
Push the folder, then Settings → Pages → deploy from `main`, root. All paths are
relative so it works from a project subpath.

## Before going live
- [x] Add real Instagram / Strava links (contact page)
- [x] Wire up the forms (`js/forms.js`)
- [x] Add a real email address
- [x] Add a favicon
```
