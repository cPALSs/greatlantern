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
| `/resources/` | **Resources** — Mid-Autumn Festival Season event list |
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

## Local preview

```bash
cd "Projects - Mid-Autumn Festival/2026/Marketing/maf-site"
python3 -m http.server 8765
```

- http://localhost:8765/
- http://localhost:8765/resources/
- http://localhost:8765/custom-zones/
- http://localhost:8765/fund-the-festival/
- http://localhost:8765/logo-design/

Refresh season events from the landscape Sheet:

```bash
node "Festival Network/scripts/export-glf-season-events.mjs"
```

## Publish

From repo root:

```bash
./scripts/publish_greatlantern_site.sh ~/greatlantern
./scripts/publish_festival_redirect.sh ~/festival
```

Live: https://greatlantern.com

## DNS (greatlantern.com)

Point the domain at GitHub Pages for `cPALSs/greatlantern`:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `cpalss.github.io` |

Then in the repo **Settings → Pages → Custom domain**, enter `greatlantern.com` and enable HTTPS.
