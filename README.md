# greatlantern.com — site source

**Public site:** https://greatlantern.com · GitHub Pages repo [`cPALSs/greatlantern`](https://github.com/cPALSs/greatlantern)

**This folder (`Sites/greatlantern`) is the canonical source of truth.** Edit here; push from this git repo when ready.

**Festival Season Network:** https://festival.cpalss.com · repo [`cPALSs/festival`](https://github.com/cPALSs/festival)

Unified Great Lantern Festival hub — logotype home, **About** (story + media + blog), **Production** (team + open roles + volunteering + tools + RFPs on EGLNY), **Resources** (season). No Home nav item. No Visit hub yet (festival paused 2026; no guest-guide page).

## Pages

| URL | Source |
|-----|--------|
| `/` | `index.html` — home via logotype (no Home nav item) |
| `/about/` | Festival story (About umbrella) |
| `/team/` | **Team** — Steering Committee roster — under **Production** |
| `/team/roles/` | **Open roles** — director lanes and how we organize — under **Production** |
| `/production/` | **Production** hub — team, open roles, volunteering, tools, RFPs |
| `/production/volunteer/` | **Volunteering** — skills projects (Logo Design) |
| `/resources/` | **Resources** hub — season calendar |
| `/resources/season/` | **Mid-Autumn Season** calendar — under **Resources** |
| `/resources/media/` | Past season fliers — under **About** |
| `/resources/blog/` | **Blog** — SEO-safe planning notes (generated from shared markdown) — under **About** |
| `/custom-zones/` | **Custom Zones** — named corners — under **Production** |
| `/fund-the-festival/` | **Fund The Festival** — interactive sponsor registry — under **Production** |
| `/fund-the-popups/` | **Fund The Popups** — portable lantern photo activations — under **Production** |
| `/logo-design/` | **Logo Design** — branding brief — under **Production** |
| `/rfp/` | bounce to EGLNY **RFPs** (`eglny.com/rfp/` · local `localhost:8765/rfp/`) |

Legacy redirects (via `clean-urls.js`): `/host.html` → `/custom-zones/`, `/build/` → `/fund-the-festival/`, `/about.html` → `/about/`, `/team.html` → `/team/`.

## Content

- **`data/site.json`** — recruitment + about + resources copy + Custom Zones copy
- **`data/season-events.json`** — Mid-Autumn season list (generated from Autumn landscape Sheet)
- **`data/sku-catalog.json`** — SKU inventory master (vendor Eventeny sync + zone Partnerships quotes)
- **`data/maf-2026.json`** — Fund The Festival data (from `build_maf_budget.py`)
- **`data/popups-2026.json`** — Fund The Popups data (from `build_popup_registry.py`)
- **`data/festivals.json`** — BTF manifest
- **`data/popups-festivals.json`** — Fund The Popups manifest
- **`assets/`** — hero imagery + theme lanterns (`lantern-dark.png` / `lantern-light.png`)
- **`resources/blog/`** — static blog pages (generated; do not edit HTML by hand)

### Blog

Source markdown lives in [`Operations/Festival Network/shared/content/blog/`](../../Festival%20Network/shared/content/blog/). Rebuild after editing:

```bash
node "Operations/Festival Network/scripts/build-festival-site-blog.mjs" --site glf
# or both sites:
npm run blog:build --prefix "Festival Network"
```

The refresh script runs this automatically.

### Local preview

```bash
cd Sites/greatlantern
python3 -m http.server 8765
```

- http://localhost:8765/
- http://localhost:8765/about/
- http://localhost:8765/team/
- http://localhost:8765/team/roles/
- http://localhost:8765/production/
- http://localhost:8765/production/volunteer/
- http://localhost:8765/custom-zones/
- http://localhost:8765/fund-the-festival/
- http://localhost:8765/fund-the-popups/
- http://localhost:8765/logo-design/
- http://localhost:8765/resources/
- http://localhost:8765/resources/season/
- http://localhost:8765/resources/media/
- http://localhost:8765/resources/blog/

Refresh season events from the landscape Sheet:

```bash
node "Operations/Festival Network/scripts/export-glf-season-events.mjs"
```

## Refresh generated data

From monorepo root (writes into this folder; does not push):

```bash
./scripts/publish_greatlantern_site.sh
```

Then commit and push **from this repo** when ready:

```bash
cd Sites/greatlantern
git add -A && git commit -m "Update site" && git push
```

See [`Sites/README.md`](../README.md).

## DNS (greatlantern.com)

Point the domain at GitHub Pages for `cPALSs/greatlantern`:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `cpalss.github.io` |

Then in the repo **Settings → Pages → Custom domain**, enter `greatlantern.com` and enable HTTPS.
