# SEO program review — Learned Late

**Date:** 2026-08-08T02:45:00Z  
**Previous last_reviewed_at:** _(none — first seed)_  
**Next suggested review:** +30d (~2026-09-07)

## Goal

Organic should produce **AI-service inquiries** (strategy → implementation → engineering) and **AI readiness checklist** downloads—not max impressions from LEGACY fractional CTO / MVP / SAP inventory.

## Product map (routes that matter)

| Route | Role |
|-------|------|
| `/` | Home — AI strategy / implementation / engineering positioning |
| `/services/strategy` | Pillar: find the right AI starting point |
| `/services/implementation` | Pillar: automate real workflows |
| `/services/engineering` | Pillar: custom AI when off-the-shelf fails |
| `/ai-readiness-checklist` | Free lead magnet (GSC residual ~227 impr non-catalog) |
| `/contact` | Primary conversion (no SaaS signup) |
| `/blog/*` | Demand capture → services / checklist / contact |
| `/fractional-cto*`, `/mvp-*`, `/sap-*` | LEGACY commercial pages — do not expand content |

## Desk snapshot

- **GSC totals (desk after collect_gsc 2026-08-08):** ~**1195 impressions / 1 click** catalog; **not_indexed 42**; **striking-distance 0**; live articles **100**.
- **Top pages:** Obsidian (~321 impr / 1 cl), TDD checklist (~289 / 0), MVP / software company / accounting / CTO hire (LEGACY-heavy).
- **Primary / ACTIVE click share:** effectively **~0** of classified demand — Primaries just deployed 2026-08-08.
- **Strategy status:** `content_strategy` **ok**; Primary list intact; clusters ACTIVE×4 + PLANNED ANZ + LEGACY fractional.
- **PostHog (`176201`):** 7d empty; 30d ~27 visitors / ~31 sessions / bounce ~77% — conversion north star thin; use contact/checklist path events when present.

## Changes — project.yaml

| Field | Before | After | Why |
|-------|--------|-------|-----|
| _(none)_ | — | — | Strategy gates already correct (Primary AI ladder; LEGACY fractional/SAP/MVP; do_not_expand intact). No demotions this pass. |

## Changes — seo_program.yaml

- **Created** schema v1 (first seed).
- **Mode:** → **attract** (remaining open Primaries dominate ROI while catalog click share is near-zero on AI ladder).
- **mode_mix_this_month:** attract 3 / harvest 1 / tools 1.
- **Primary backlog:** 5 measuring (readiness + 4 Path B ships) / 5 open uncovered Primaries.
- **Harvest:** TDD measuring; BPA examples + Obsidian + choose-CTO open (light bridges only).
- **Tools:** checklist + three service pillars + contact.
- **Prune:** 1 open `merge_into` (fractional hard cannibal) / 3 open `noindex` (confirm required).

## Prune

- Open `merge_into`: **1** — `fractional-cto-costs-…` → `nz-startups-fractional-cto-guide` (hard cannibal `fractional cto nz`).
- Open `noindex` (confirm required): **3** — MVP guide, free accounting NZ, SAP Joule tutorial.
- Measuring / done preserved: n/a (first seed).

## Metrics scoreboard (direction only this pass)

| Metric | Source | Signal |
|--------|--------|--------|
| gsc_click_share_primary_or_ai_active | gsc | Near 0 — Primaries just live |
| gsc_impression_share_legacy | gsc | High share of top_pages still LEGACY |
| primary_keyword_coverage | catalog | 5/10 heads have live slugs measuring |
| blog_to_contact_or_checklist | posthog | Thin traffic; set baseline post-deploy |
| not_indexed_catalog | gsc | 42 — targeted fixes often no_candidates |

## Recommended weekly modes (next 30d)

1. **Attract (default):** Path B remaining Primaries — where to start with AI, AI strategy for business, when to build custom AI, AI readiness checklist (blog), optional AI implementation for business.
2. **Harvest side-pass:** BPA examples CTA → `/services/implementation`; leave TDD measuring until outcome.
3. **Tools light:** ensure checklist + service pages linked from new Primaries.
4. **Prune side-pass (≤1–2):** fractional merge when ready; noindex rows need human confirm only.
5. **Measure:** due content outcomes from 2026-08-27 / 09-01 / 09-07; indexing outcomes from 2026-08-16.

## Needs your decision

1. **noindex** `how-to-build-an-mvp-for-your-startup-a-founders-step-by-step-guide` — ~85 impr / 0 cl / pos ~91; `confirm: required`.
2. **noindex** `free-accounting-software-nz-guide` — ~80 impr / 0 cl; off-strategy; `confirm: required`.
3. **noindex** `sap-joule-custom-skills-…` — ~23 impr; do_not_expand SAP; `confirm: required`.
4. Optional: approve Path B **merge** fractional costs → NZ fractional guide (hard cannibal).

## Product gaps (not SEO)

- Homepage meta keywords still fractional-CTO/SAP-heavy vs AI ladder.
- robots.txt Cloudflare managed Disallow vs site Allow for GPTBot/ClaudeBot (inversion).
- Multi-host / non-catalog GSC residual (Substack `/p/…`, `/ai-readiness-checklist`).
- CTR `deployment_unverified` mass (~173) — deploy verification path for historical fixes.
- No SaaS signup funnel — contact/checklist is conversion; PostHog events may need alignment.

## Files touched

- `.github/automation/seo_program.yaml` **(created)**
- `.github/automation/project.yaml` unchanged
- `.github/automation/seo_program_review_20260808_024500.md` (this file)
