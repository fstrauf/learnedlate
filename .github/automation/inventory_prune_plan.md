# Inventory prune plan (Issue #10)

Written plan for consolidating content-farm inventory after the body-fix wave.  
**This PR executes only the runway calculator family (ids 64 / 74 / 82).**  
Apr 2026 AI serial (84–93), soft AI near-dups, and remaining `do_not_expand` mesh are **documented for later waves — do not mass-kill in this PR**.

## GSC snapshot (source of truth for status)

| Field | Value |
|-------|--------|
| Source file | `.github/automation/gsc_collection.json` (operator host copy; gitignored artifacts) |
| Collected at | **2026-07-28T18:36:56+00:00** |
| Site | `sc-domain:learnedlate.com` |
| Sitemap URL count (at collect) | 114 |
| Counts | indexed_pass **74**, not_indexed_discovered **31**, not_indexed_crawled **4**, not_indexed_other **5** |

Coverage states used below map to GSC URL Inspection / index coverage:

- **Submitted and indexed** → treat as equity worth consolidating *onto*
- **Discovered - currently not indexed** → prefer merge into an indexed peer when near-dup; keep only if unique intent

## Process guards

1. **No new articles** targeting `project.yaml` / `.github/automation/project.md` **Do Not Expand Keywords** without explicit human override. Those keywords are docs-only blockers for expansion (fractional CTO, interim CTO, NZ startup CTO pricing, MVP development for startups, SAP clean core / BTP / Joule / S/4HANA, Days to Expiry, options trading).
2. **Do not re-implement #8** exact pairs (fractional CTO cost twin, healthcare twin already deleted + 301’d). Remaining fractional / MVP / SAP mesh is a **later wave**.
3. Prefer **indexed keepers** when consolidating near-dups so 301 equity lands on a live index URL.
4. Pattern for executed consolidations (match #8):
   - Delete loser MDX
   - Remove loser entry from root `articles.json`
   - Permanent 301 in `vercel.json` (one non-slash source; global trailing-slash redirect covers twins)
   - Retarget internal links → keeper
   - Regenerate `public/sitemap.xml`

---

## Wave 0 — shipped in this PR: Runway calculator family (×3)

| id | slug | GSC (2026-07-28) | Action | Notes |
|----|------|------------------|--------|-------|
| **64** | `startup_runway_calculator_how_to_plan_your_cash_runway_nz_focused_template` | **Submitted and indexed** | **KEEP** (hub) | NZ-focused template; solid body (~2.2k words MDX). Light merge of unique GST timing / R&D credit / contractor rate notes from 082. |
| **74** | `startup_cash_runway_calculator_template_free_download_plan_your_burn_rate_in_minutes` | **Submitted and indexed** | **merge+301 → 64** | Near-dup free-download angle; equity consolidates to indexed keeper. |
| **82** | `startup_runway_calculator_nz_template_plan_your_cash_runway_with_local_currency` | **Discovered - currently not indexed** | **merge+301 → 64** | More words but cannibal of 64; not indexed so low equity loss. |

### Keeper + redirects (executed)

- **Keeper URL:** `/blog/startup_runway_calculator_how_to_plan_your_cash_runway_nz_focused_template`
- **301 sources:**
  - `/blog/startup_cash_runway_calculator_template_free_download_plan_your_burn_rate_in_minutes` → keeper
  - `/blog/startup_runway_calculator_nz_template_plan_your_cash_runway_with_local_currency` → keeper
- **Deleted MDX:** `074_…mdx`, `082_…mdx`
- **articles.json:** ids 74 and 82 removed; internal_links retargeted/deduped to id 64
- **Published count:** 99 → **97** (−2)

---

## Wave 1 (later) — Apr 2026 AI serial (ids 84–93)

Document only. **Do not execute mass prune of 84–93 in this PR.**

| id | slug | GSC (2026-07-28) | Planned action | Rationale |
|----|------|------------------|----------------|-----------|
| 84 | `ai_and_automation` | Discovered - not indexed | **merge+301** → `ai-automation` (90) or stronger unique guide | Near-dup of serial hub intent; not indexed. |
| 85 | `ai_chat_bot_for_business` | Discovered - not indexed | **keep** (or soft demote if thin post-#3) | Unique chatbot implementation intent. |
| 86 | `ai_for_small_business` | **Submitted and indexed** | **keep** | GTM-adjacent SMB; indexed equity. |
| 87 | `ai-governance-strategy` | **Submitted and indexed** | **keep** | Unique governance angle. |
| 88 | `automation-of-workflow` | **Submitted and indexed** | **keep** | Workflow GTM-aligned. |
| 89 | `business-ideas-for-ai` | **Submitted and indexed** | **keep** | Unique ideas-list intent. |
| 90 | `ai-automation` | Discovered - not indexed | **keep** as serial hub | Already has vercel alias `/blog/090_ai_automation` → `/blog/ai-automation`. Hub for near-dup AI automation intent even if not yet indexed. |
| 91 | `091_ai_in_automation` | Discovered - not indexed | **merge+301** → `/blog/ai-automation` | Prefix-slug near-dup of 90. |
| 92 | `092_ai_automation_job` | **Submitted and indexed** | **keep** | Career/jobs intent differs. |
| 93 | `093_best_ai_tool_for_business` | Discovered - not indexed | **keep for now** (soft demote later) | Tool-selection intent; reassess after body quality pass. |

### Suggested later-wave merge map (AI serial)

```
84  ai_and_automation          ──301──►  /blog/ai-automation  (90)
91  091_ai_in_automation       ──301──►  /blog/ai-automation  (90)
85, 86, 87, 88, 89, 90, 92, 93  keep (with optional soft demote on 85/93)
```

---

## Soft AI near-dups outside Apr serial (keep vs demote)

Do **not** mass-kill GTM-aligned workflow posts.

### Keep (GTM-aligned / unique)

| id (approx) | slug / topic | GSC note | Why keep |
|-------------|--------------|----------|----------|
| 72 | AI automation for trades businesses | (not re-listed in GSC filter; inventory keep) | Vertical GTM |
| 14 | business-process-automation-examples | Submitted and indexed | BPA examples |
| 3 | no-code-automation-for-small-business | Submitted and indexed | No-code entry |
| 4 | ai-tools-for-business-automation | Submitted and indexed | Tools list GTM |
| 35 | 2025-06-22-bay-of-plenty-businesses-ai-automation | Submitted and indexed | Regional BoP |
| 22 | 2025-08-01-simple-automation-workflows | Submitted and indexed | Simple workflows |
| 34 | 2025-06-22-business-process-automation-small-business-guide | Submitted and indexed | SMB BPA guide |

### Demote / later merge candidates (later wave — do not mass-kill now)

| id (approx) | slug | GSC (2026-07-28) | Later action |
|-------------|------|------------------|--------------|
| 99 | `intelligent-process-automation` (IPA) | Discovered - not indexed | Soft demote or merge into stronger BPA/automation hub |
| 101 | `intelligent-robotic-process-automation` (IRPA) | Discovered - not indexed | Soft demote / merge |
| 100 | `ai-automation-training` | Discovered - not indexed | Soft demote / merge into training or hub |
| 51 | `ai_automation_for_small_business_owners_2025_implementation_playbook` | Discovered - not indexed | Later wave demote/merge; playbook not indexed |
| 5 | `what-is-business-process-automation` | Discovered - not indexed | Later wave; glossary-style near-dup of BPA guides |

---

## do_not_expand mesh (fractional / MVP / SAP) — later waves only

Exact pairs already owned by **#8** (shipped):

- Loser healthcare twin → keeper healthcare (id 77 path)
- Loser `fractional_cto_costs_in_new_zealand_2025_pricing_guide_for_nz_startups` → `2025-06-22-nz-startups-fractional-cto-guide`

**Remaining mesh (do not expand; future prune/merge only with human override):**

| Cluster | Examples in inventory | Guidance |
|---------|----------------------|----------|
| Fractional CTO | cost guides, roles, SaaS, hire timing, part-time rates, co-founder vs fractional | No new articles on DNE keywords. Future waves may merge thin cost twins only; do not re-open #8 pairs. |
| MVP | 8-week guide, cost breakdown, how-to-build, SaaS budget | No new “MVP development for startups” expansion. Link equity toward strongest existing guides; no mass delete without audit. |
| SAP | clean core, BTP, Joule, S/4HANA, implementation partner | DNE keywords — service pages may remain; do not spawn new blog inventory. |

**Coordination:** This PR must **not** re-implement #8 exact fractional/healthcare pairs. Link retargets for runway only.

---

## Execution checklist (runway family — this PR)

- [x] Light-merge unique NZ notes (GST cash timing, R&D credit lag, contractor rates) into id 64
- [x] Delete `074_…mdx` and `082_…mdx`
- [x] Remove ids 74 and 82 from `articles.json`
- [x] Retarget internal_links + MDX refs → keeper 64
- [x] Add permanent 301s in `vercel.json`
- [x] Regenerate sitemap (`node scripts/generate-sitemap.js`) — loser slugs absent; 97 article routes
- [x] `node scripts/verify-links.js` clean

## Open follow-ups (not this PR)

1. Execute Wave 1 AI serial merges (84 → 90, 91 → 90) after confirming 90 body quality.
2. Soft-demote IPA/IRPA/training/playbook/what-is-bpa once GTM hubs absorb any unique paragraphs.
3. Separate audit of residual fractional/MVP/SAP mesh vs service-page cannibalization (no new DNE keyword articles).
4. Re-pull GSC after runway 301s settle; confirm 74 equity transfers to 64 and 82 drops from discovery queue.
