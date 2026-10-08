# Program ledger: learnedlate

> Generated from the PageSeeds program ledger (SQLite). Do not edit; this file is never read back.

## Plans

none

## Open bets

### `conversion-posthog-restore-20261009` (conversion)

- Status: pending
- Hypothesis: Restoring SPA pageview capture (removed in 9c68978 on 2026-07-18) and routing custom conversion events through the posthog-js module instance instead of window.posthog will make blog_to_contact_or_checklist measurable again, with pageviews and contact/checklist events landing in PostHog 176201 within 14 days of deploy.
- Opened: 2026-10-09
- Not before: 2026-10-23
- Check date: 2026-10-23
- Links: issues: fstrauf/learnedlate#33

| Metric | Baseline | Target | Reading | Verdict |
|---|---|---|---|---|
| blog_to_contact_or_checklist | unmeasurable: last PostHog event 2026-09-03; 0 $pageview since 2026-07; 0 custom conversion events in 180d | >=1 $pageview/day on www + contact_form_submitted / lead_magnet_signup / cta_click recorded on prod; rate judged on 8-week window after deploy | - | pending |

## Graded bets

none

## Metrics

| Metric | Window | Source | Baseline | Latest |
|---|---|---|---|---|
| blog_to_contact_or_checklist | 56d | posthog | unavailable (2026-10-09) | unavailable (2026-10-09) |
| gsc_click_share_primary_or_ai_active | 28d | gsc | 0 (2026-10-09) | 0 (2026-10-09) |
| gsc_tape_clicks | 7d | gsc | 2 (2026-05-03) | 2 (2026-09-27) |
| gsc_tape_impressions | 7d | gsc | 693 (2026-05-03) | 334 (2026-09-27) |
| not_indexed_catalog | point | gsc | 42 (2026-10-09) | 42 (2026-10-09) |
| primary_keyword_coverage | point | other | 9 (2026-10-09) | 9 (2026-10-09) |

### Snapshot history

| Id | Metric | Window | As of | Value | Entry | Note | State |
|---|---|---|---|---|---|---|---|
| 1 | gsc_tape_clicks | 7d | 2026-05-03 | 2 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 2 | gsc_tape_impressions | 7d | 2026-05-03 | 693 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 3 | gsc_tape_clicks | 7d | 2026-05-10 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 4 | gsc_tape_impressions | 7d | 2026-05-10 | 743 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 5 | gsc_tape_clicks | 7d | 2026-05-17 | 7 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 6 | gsc_tape_impressions | 7d | 2026-05-17 | 1119 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 7 | gsc_tape_clicks | 7d | 2026-05-24 | 5 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 8 | gsc_tape_impressions | 7d | 2026-05-24 | 776 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 9 | gsc_tape_clicks | 7d | 2026-05-31 | 3 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 10 | gsc_tape_impressions | 7d | 2026-05-31 | 755 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 11 | gsc_tape_clicks | 7d | 2026-06-07 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 12 | gsc_tape_impressions | 7d | 2026-06-07 | 530 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 13 | gsc_tape_clicks | 7d | 2026-06-14 | 1 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 14 | gsc_tape_impressions | 7d | 2026-06-14 | 523 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 15 | gsc_tape_clicks | 7d | 2026-06-21 | 2 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 16 | gsc_tape_impressions | 7d | 2026-06-21 | 576 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 17 | gsc_tape_clicks | 7d | 2026-06-28 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 18 | gsc_tape_impressions | 7d | 2026-06-28 | 415 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 19 | gsc_tape_clicks | 7d | 2026-07-05 | 3 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 20 | gsc_tape_impressions | 7d | 2026-07-05 | 560 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 21 | gsc_tape_clicks | 7d | 2026-07-12 | 2 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 22 | gsc_tape_impressions | 7d | 2026-07-12 | 938 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 23 | gsc_tape_clicks | 7d | 2026-07-19 | 1 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 24 | gsc_tape_impressions | 7d | 2026-07-19 | 631 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 25 | gsc_tape_clicks | 7d | 2026-07-26 | 2 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 26 | gsc_tape_impressions | 7d | 2026-07-26 | 415 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 27 | gsc_tape_clicks | 7d | 2026-08-02 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 28 | gsc_tape_impressions | 7d | 2026-08-02 | 506 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 29 | gsc_tape_clicks | 7d | 2026-08-09 | 2 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 30 | gsc_tape_impressions | 7d | 2026-08-09 | 632 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 31 | gsc_tape_clicks | 7d | 2026-08-16 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 32 | gsc_tape_impressions | 7d | 2026-08-16 | 990 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 33 | gsc_tape_clicks | 7d | 2026-08-23 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 34 | gsc_tape_impressions | 7d | 2026-08-23 | 807 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 35 | gsc_tape_clicks | 7d | 2026-08-30 | 2 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 36 | gsc_tape_impressions | 7d | 2026-08-30 | 877 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 37 | gsc_tape_clicks | 7d | 2026-09-06 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 38 | gsc_tape_impressions | 7d | 2026-09-06 | 715 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 39 | gsc_tape_clicks | 7d | 2026-09-13 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 40 | gsc_tape_impressions | 7d | 2026-09-13 | 745 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 41 | gsc_tape_clicks | 7d | 2026-09-20 | 4 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 42 | gsc_tape_impressions | 7d | 2026-09-20 | 449 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 43 | gsc_tape_clicks | 7d | 2026-09-27 | 2 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 44 | gsc_tape_impressions | 7d | 2026-09-27 | 334 | - | sum of gsc_page_daily page rows, Mon-Sun, complete weeks only | - |
| 318 | gsc_click_share_primary_or_ai_active | 28d | 2026-10-09 | 0 | 2026-10-09 growth_review | 0 of 4 catalog clicks on Primary/ACTIVE AI ladder slugs (site-overview 28d; GSC data to 2026-10-04). N=4, too small to read a share. | - |
| 319 | primary_keyword_coverage | point | 2026-10-09 | 9 | 2026-10-09 growth_review | Primaries live 200 index,follow with >=4 inbound src files on origin/master (9 measuring); 1 open Primary (ai readiness checklist) has no blog slug. Outcome reviews mostly insufficient_data. | - |
| 320 | not_indexed_catalog | point | 2026-10-09 | 42 | 2026-10-09 growth_review | pageseeds-cli indexing-status: 72 indexed / 114 URLs; 31 discovered, 4 crawled, 7 other | - |
| 321 | blog_to_contact_or_checklist | 56d | 2026-10-09 | unavailable | 2026-10-09 growth_review | Unavailable: PostHog 176201 received 6 events in 56d (last 2026-09-03), 0 $pageview since 2026-07 and 0 custom conversion events ever; see #33 | - |

## Entries

### 2026-10-09 (growth_review)

- Learning: Fresh-start baseline (empty ledger, operator confirmed). The north star blog_to_contact_or_checklist has been unmeasurable since 2026-07-18: commit 9c68978 removed manual $pageview capture, and every custom conversion event goes through window.posthog, which never received an event in 180d. Catalog 28d GSC: 786 impr / 4 clicks, and 0 of the 4 clicks reached Primary/AI ladder pages. All 9 measuring Primaries are live (index,follow; 4-11 inbound files each) but rank on page 4-8. One bet opened (measurement, bottleneck #1, #33). Phase 1b: (1) the AI readiness cluster is the biggest unserved demand, ~1.1k impr/90d split across /ai-readiness-checklist (pos ~37) and the legacy /blog/099_ai_readiness_assessment URL (pos 65-75), so the 301 099->clean is the highest-leverage SEO fix and belongs to weekly-seo; (2) the ai-strategy-for-business cluster gets ~560 impr/90d at pos 52-80, so it has demand but no authority; (3) land-but-no-next-step could not be measured because PostHog is dark.
- Standing constraint: Do not judge conversion until PostHog pageviews + conversion events have flowed for 8 weeks after #33 deploys. Weekly-seo owns page tactics (readiness 301 equity, CTA bridges).
- Anomalies: PostHog 176201 last event 2026-09-03; 0 $pageview since 2026-07. Local checkout master is behind origin (dfabe00 vs a272910) and its working-tree articles.json shows 4 Primaries as draft; origin/master has all 9 published, so catalog drift may recur. The not_indexed catalog is still 42 (31 discovered-not-indexed) despite the 2026-08-30 commit claiming 42->8. 68 of 102 live articles have 0 impressions in 28d. The weekly-seo issue #22 (2026-09-03) is stale and unworked.
