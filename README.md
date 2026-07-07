# greatlantern.com — site source (monorepo)

**Public site:** https://greatlantern.com · GitHub Pages repo [`cPALSs/greatlantern`](https://github.com/cPALSs/greatlantern)

**Legacy redirect:** https://festival.cpalss.com → greatlantern.com (path preserved) · repo [`cPALSs/festival`](https://github.com/cPALSs/festival)

Unified Great Lantern Festival hub — clean URLs, no `.html` in public paths.

## Pages

| URL | Source |
|-----|--------|
| `/` | `index.html` (redirects `/index.html` → `/`) |
| `/team/` | `team/index.html` |
| `/about/` | `about/index.html` |
| `/resources/` | **Resources** hub — season calendar and blog |
| `/resources/season/` | **Mid-Autumn Festival Season** calendar |
| `/resources/blog/` | **Blog** — SEO-safe planning notes (generated from shared markdown) |
| `/custom-zones/` | **Custom Zones** — hero, prompts, examples, desktop TOC |
| `/fund-the-festival/` | **Fund The Festival** — interactive sponsor registry |
| `/logo-design/` | **Logo Design** — official branding brief + human-artistry audit trail |

Legacy redirects (via `clean-urls.js`): `/host.html` → `/custom-zones/`, `/build/` → `/fund-the-festival/`, `/about.html` → `/about/`, `/team.html` → `/team/`.

## Content

- **`data/site.json`** — recruitment + about + resources copy + Custom Zones copy
- **`data/season-events.json`** — Mid-Autumn season list (generated from Autumn landscape Sheet)
- **`data/sku-catalog.json`** — SKU inventory master (vendor Eventeny sync + zone Partnerships quotes)
- **`data/maf-2026.json`** — Fund The Festival data (from `build_maf_budget.py`)
- **`data/festivals.json`** — BTF manifest
- **`assets/custom-zones-hero.webp`** — Custom Zones hero image (replace with photography when ready)
- **`resources/blog/`** — static blog pages (generated; do not edit HTML by hand)

### Blog

Source markdown lives in [`Festival Network/shared/content/blog/`](../../../../Festival%20Network/shared/content/blog/). Rebuild after editing:

```bash
node "Festival Network/scripts/build-festival-site-blog.mjs" --site glf
# or both sites:
npm run blog:build --prefix "Festival Network"
```

The publish script runs this automatically before rsync.

Refresh season events from the landscape Sheet:

```bash
cd "Projects - Mid-Autumn Festival/2026/Marketing/maf-site"
python3 -m http.server 8765
```

- http://localhost:8765/
- http://localhost:8765/resources/
- http://localhost:8765/resources/season/
- http://localhost:8765/resources/blog/
- http://localhost:8765/custom-zones/
- http://localhost:8765/fund-the-festival/
- http://localhost:8765/logo-design/

Refresh season events from the landscape Sheet:

```bash
node "Festival Network/scripts/export-glf-season-events.mjs"
```

## Publish

From monorepo root (rsyncs this folder → [`Sites/greatlantern`](../../../../Sites/greatlantern); edit **here**, not in `Sites/`):

```bash
./scripts/publish_greatlantern_site.sh
./scripts/publish_festival_redirect.sh   # only when redirect copy changes
cd Sites/greatlantern && git add -A && git commit -m "Update site" && git push
```

Live: https://greatlantern.com · see [`Sites/README.md`](../../../../Sites/README.md)

## DNS (greatlantern.com)

Point the domain at GitHub Pages for `cPALSs/greatlantern`:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `cpalss.github.io` |

Then in the repo **Settings → Pages → Custom domain**, enter `greatlantern.com` and enable HTTPS.
