# LearnedLate Site Rework Specification

## Goal

Simplify the site to Tenex-level clarity: fewer pages, problem-first messaging, no jargon, no wasted reading time. Reframe services as three broad capabilities (mirroring Tenex's Strategy / Transformation / Engineering), each with its own detail page. Replace testimonials with a "proof by building" reference story (PageSeeds + SEO automation). Remove the ANZ geographic qualifier entirely.

---

## Site Architecture

### Current State (50+ pages, 4 service pages, legacy SEO routes)

```
/ .......................... Homepage (long, process-heavy)
/about ..................... About
/contact ................... Contact / intake form
/services .................. Services hub
/services/ai-readiness ..... AI Readiness Assessment
/services/agentic-workflows  AI Workflow Automation
/services/custom-ai-dev .... Custom AI Development
/services/full-stack-delivery Delivery Partnership
/blog, /blog/:slug ......... Blog
/case-studies ............... Case Studies
/ai-readiness-checklist ..... Lead magnet
+ 45 legacy SEO routes (hidden from nav)
```

### Target State (5 primary pages + blog + legacy routes preserved)

```
/ .......................... Homepage (hero + 3 pillars + proof story + FAQ + CTA)
/services/strategy ......... Strategy & Assessment detail page
/services/implementation ... Implementation & Automation detail page
/services/engineering ...... Engineering & Custom Build detail page
/about ..................... About (simplified)
/contact ................... Get Started / intake form (keep as-is, minor copy tweaks)
/blog, /blog/:slug ......... Blog (keep, but deprioritise in nav)
```

**What happens to existing pages:**

| Current page | Action |
|---|---|
| `/services` (hub) | Remove. Homepage now shows the three pillars with direct links to detail pages. |
| `/services/ai-readiness` | Content folds into `/services/strategy` |
| `/services/agentic-workflows` | Content folds into `/services/implementation` |
| `/services/custom-ai-development` | Content folds into `/services/engineering` |
| `/services/full-stack-delivery` | Relevant parts fold into `/services/implementation` (scaled delivery) and `/services/engineering` (build work) |
| `/case-studies` | Remove from nav. Keep route, redirect or link from proof story section if useful. |
| `/ai-readiness-checklist` | Keep route for lead capture but remove from primary nav. |
| 45 legacy SEO routes | Keep routes, keep hidden from nav (no change). |

### Primary Navigation

```
Home | Strategy | Implementation | Engineering | About | Get Started
```

Blog accessible via footer or secondary nav. No services hub page.

---

## Homepage Specification

### Hero Section

**Goal:** Problem-first. State what's at stake, then the promise. No geographic qualifier. No process language.

**Direction:**

> **Headline:** "Turn AI from buzzword into business results."
>
> **Subheadline:** "Most AI projects stall between strategy and production. We take yours from first assessment to working system."
>
> **CTA:** "Get Started" (links to /contact)
> **Secondary CTA:** "See how it works" (scrolls to pillars)

**What to remove from current hero:**
- "ANZ mid-market teams" qualifier
- "one working business system" framing (too narrow/method-focused)
- Regional badges

### Three Pillars Section

Display as three cards, directly mirroring Tenex's layout. Each card: bold title, one-sentence problem statement, two-sentence description, "Learn more" link to detail page.

| Pillar | Title | Problem hook | Description | Links to |
|---|---|---|---|---|
| 1 | **Strategy** | "Most companies don't know where to start with AI." | We audit your operations, surface the highest-impact use cases, and give you a clear plan — not a 200-slide deck. | `/services/strategy` |
| 2 | **Implementation** | "Strategy without execution is expensive shelf-ware." | We automate real workflows, connect your existing systems, and pilot in production — so you see results, not just recommendations. | `/services/implementation` |
| 3 | **Engineering** | "Off-the-shelf tools don't solve every problem." | When standard tools fall short, we build custom AI solutions and provide ongoing engineering support. You get working software, not prototypes. | `/services/engineering` |

### Proof Story Section (replaces testimonials)

**Concept:** Instead of client testimonials (which we don't have), show a "built it, proved it" reference story. This doubles as a credibility signal and a concrete example of how automation works.

**Title:** "We build what we sell."

**Content direction:**

> We automated our own SEO pipeline — from keyword research to content generation to publishing — using the same approach we bring to client work.
>
> The result: 200k+ search impressions across multiple sites, $0 ad spend, fully automated content workflows.
>
> The system became [PageSeeds](https://www.pageseeds.com/) — a product used by founders and small businesses to grow their search visibility.

**Supporting elements:**
- Screenshot or chart showing the Google Search Console growth curve
- Link to the full story: [blog post](https://blog.learnedlate.com/p/i-dont-think-content-seo-is-dead)
- Link to PageSeeds: [pageseeds.com](https://www.pageseeds.com/)
- Brief callout: "This is what we mean by implementation. Strategy → automation → working system."

### FAQ Section

Place on homepage. 5-6 questions that handle buying objections directly. Plain language, short answers.

| Question | Answer direction |
|---|---|
| **How is this different from a consulting engagement that ends with a slide deck?** | We build and ship. Every engagement includes implementation, not just recommendations. If it doesn't reach production, we haven't done our job. |
| **What does it cost?** | It depends on scope. Strategy engagements start in the low thousands. Implementation and engineering are scoped per project. We'll give you a clear number after one conversation. |
| **How long does a typical engagement take?** | Strategy: 1-2 weeks. Implementation: 2-6 weeks to a working pilot. Engineering: ongoing, scoped in sprints. |
| **Do you replace our internal team or work alongside them?** | Alongside. We plug into your existing tools and processes. The goal is to leave your team more capable, not dependent. |
| **What kind of companies do you work with?** | Mostly mid-market teams (50-500 people) who know AI matters but need help going from interest to working system. We also work with smaller founder-led companies on specific automation projects. |
| **What if we're not ready for AI yet?** | That's what the strategy assessment is for. If the answer is "not yet," we'll tell you that — and what to focus on first. |

### Final CTA Section

Simple. One line + one button.

> **"Let's figure out where AI fits."**
> [Get Started] → /contact

---

## Service Detail Page: Strategy (`/services/strategy`)

### Structure (single page, top to bottom)

```
Hero
  → Problem statement + promise
  → CTA: "Get Started"

What We Do
  → Assessment scope: operations audit, use case identification, ROI mapping
  → Deliverables: prioritised use cases, readiness score, risk register, action plan
  → Plain language, no framework jargon

How It Works
  → Step 1: Discovery conversation (we learn your business)
  → Step 2: Assessment (scored evaluation, 1-2 weeks)
  → Step 3: Written recommendation with clear next steps

Who This Is For
  → Teams unsure where to start
  → Leadership that needs a business case before committing budget
  → Organisations with scattered AI experiments but no cohesion

FAQ (2-3 questions specific to strategy)

CTA: "Get Started"
```

### Messaging principles
- Lead with the problem ("Most AI strategies fail because they start too broad")
- No mention of "four dimensions" or "scored readiness view" — just plain outcomes
- Assessment is the entry point, not the product. Frame it as: "We'll tell you exactly what to do first."

---

## Service Detail Page: Implementation (`/services/implementation`)

### Structure

```
Hero
  → Problem statement + promise
  → CTA: "Get Started"

What We Do
  → Workflow automation: map a process, build the automation, connect systems, pilot live
  → System integration: works with your existing stack (APIs, databases, email, Slack, etc.)
  → Scaled delivery: when the project spans multiple teams or systems, we coordinate end-to-end

How It Works
  → Step 1: Map the workflow (what's manual, what's slow, what breaks)
  → Step 2: Build and integrate (2-3 weeks to a working pilot)
  → Step 3: Rollout and expand (if the pilot works, we keep going)

What You Get
  → Less manual work, faster turnaround, better visibility
  → Concrete examples: "Reporting that took 4 hours now runs in minutes"
  → Link to proof story (SEO automation / PageSeeds)

Who This Is For
  → Teams with a specific bottleneck worth fixing
  → Organisations that have done the strategy work and need execution
  → Multi-system environments that need coordination

FAQ (2-3 questions)

CTA: "Get Started"
```

### Messaging principles
- This page absorbs current AI Workflow Automation + Delivery Partnership content
- Frame "delivery partnership" not as a separate tier but as what happens when implementation scales
- Avoid "agentic" — say "automated" or "AI-powered"

---

## Service Detail Page: Engineering (`/services/engineering`)

### Structure

```
Hero
  → Problem statement + promise
  → CTA: "Get Started"

What We Believe
  → Off-the-shelf first. Custom only when it matters.
  → "If a commercial tool solves it, use it. We don't build for the sake of building."

What We Build
  → Custom AI solutions (when domain-specific logic or hard integrations require it)
  → Full-stack application development
  → Model fine-tuning and custom tooling
  → Ongoing engineering support

How We Work
  → Scoping: prove the gap, define narrow build, stage delivery
  → Sprints: regular cycles, clear deliverables
  → Communication: shared channels, check-ins, transparent progress

Who This Is For
  → Teams that need capabilities standard tools can't provide
  → Products with AI at the core
  → Organisations that need ongoing engineering capacity

FAQ (2-3 questions)

CTA: "Get Started"
```

### Messaging principles
- Absorbs current Custom AI Development page
- Position as the "build" arm, same way Tenex positions AI Engineering
- Outcome-based framing: what gets shipped, not how clever the tech is

---

## About Page (`/about`)

### Simplify to:

```
What We Believe
  → 3-4 numbered beliefs (mirror Tenex's "What we believe" format)
  → Example:
    1. AI changes how businesses operate. That's already happening.
    2. Most companies need help going from interest to implementation.
    3. Strategy without execution is wasted money.
    4. The best results come from one team that handles planning, building, and rollout.

Founder Section
  → Brief bio. Dual fluency: business strategy + hands-on engineering.
  → No CV-style listing. One paragraph max.

CTA: "Get Started"
```

**Remove:** Lengthy background, CV link from primary nav, detailed methodology explanation.

---

## Contact / Get Started Page (`/contact`)

**Keep as-is.** The current intake form works. Minor adjustments:

- Update page headline to match new messaging (problem-first, not process-first)
- Ensure the "which service" options reflect new pillar names: Strategy / Implementation / Engineering / Not sure
- Keep it as the single intake point for all CTAs across the site

---

## Blog

- Keep all existing posts and routes
- Move from primary nav to footer or secondary nav
- Blog remains the SEO engine but shouldn't distract from the service-focused primary navigation

---

## Global Copy Guidelines

### Do

- Lead with the problem, then the solution
- Use plain, direct language
- Write for someone scanning, not reading
- One CTA per section
- Short paragraphs (2-3 sentences max)
- Concrete outcomes over abstract claims

### Don't

- Use jargon: "agentic," "vendor theater," "pilot purgatory," "competitive differentiation," "dual fluency"
- Mention geographic focus (remove all ANZ references)
- Describe methodology before value
- Repeat the same claim across pages ("strategy to execution," "full accountability," "measurable outcomes")
- Add qualifiers that narrow the audience prematurely

### Tone

Calm, competent, direct. Senior professional, not growth hacker. Respect the reader's time.

### Copy transformation examples

| Before | After |
|---|---|
| "AI Readiness Assessment with scored evaluation across four dimensions" | "We'll tell you exactly where to start and what to skip" |
| "Agentic workflow automation with system integration" | "We automate the work your team shouldn't be doing by hand" |
| "Delivery Partnership across multiple systems and stakeholders" | "One team that handles planning, building, and rollout" |
| "For ANZ mid-market teams that need a clear starting point" | "For teams that know AI matters but need help making it work" |
| "vendor theater" | (just don't say it) |
| "Turn AI Into One Working Business System" | "Turn AI from buzzword into business results" |

---

## Implementation Priority

| # | Task | Scope |
|---|---|---|
| 1 | Rewrite Homepage | New hero, 3 pillar cards, proof story section, FAQ, final CTA |
| 2 | Create `/services/strategy` | New page, absorbs AI Readiness Assessment content |
| 3 | Create `/services/implementation` | New page, absorbs Workflow Automation + Delivery Partnership |
| 4 | Create `/services/engineering` | New page, absorbs Custom AI Development |
| 5 | Simplify About page | Trim to beliefs + founder bio |
| 6 | Update navigation | Home, Strategy, Implementation, Engineering, About, Get Started |
| 7 | Update contact page copy | New pillar names in form options, updated headline |
| 8 | Update routes | New routes, redirects from old service URLs |
| 9 | Move blog to footer nav | Remove from primary navigation |
| 10 | Strip ANZ references site-wide | All pages, all components |

---

## What We're NOT Changing

- **Contact/intake form** — works well, keep the single-form approach
- **Blog content and routes** — SEO value preserved
- **Legacy SEO routes** — stay hidden but routed
- **Design system** — dark theme, amber accents, glass cards, calm aesthetic all stay
- **Lead magnet (AI Readiness Checklist)** — keep the route, just remove from primary nav
- **Tech stack** — Vue, Vite, SSR, Vercel — no changes
