<template>
  <div class="case-studies-page">
    <SEOHead
      title="Case Studies – PageSeeds SEO Automation Workflow | LearnedLate"
      description="How I used an SEO automation workflow behind PageSeeds to research keywords, rank opportunities, generate articles, and strengthen internal linking across my own sites."
      url="/case-studies"
      type="article"
    />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-200 mb-6">
            Featured Case Study
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Case Studies
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Starting with the system behind PageSeeds: a repeatable SEO workflow that researches keywords, scores opportunities, drafts articles, and keeps internal linking moving.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.pageseeds.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100"
            >
              Visit PageSeeds
            </a>
            <router-link
              to="/services/seo-automation"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-white px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-gray-900"
            >
              See the Service Version
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Case Study -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
            <div class="p-8 sm:p-10">
              <div class="text-sm font-medium uppercase tracking-[0.18em] text-amber-700 mb-4">
                PageSeeds SEO Workflow
              </div>
              <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                Turning SEO from occasional writing into an operating system
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-6">
                PageSeeds started as an internal answer to a simple problem: I did not need more SEO advice. I needed a system that could tell me what to do next, why it mattered, and how it connected back into the site.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p class="text-sm font-medium text-gray-900 mb-2">The challenge</p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li>Keyword ideas were easy to collect and hard to prioritize.</li>
                    <li>Article creation happened in bursts instead of on a steady cadence.</li>
                    <li>Internal links and content refreshes were the first things to slip.</li>
                    <li>There was no reliable monthly loop from search data to published pages.</li>
                  </ul>
                </div>
                <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p class="text-sm font-medium text-gray-900 mb-2">What changed</p>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li>Keyword research became continuous instead of occasional.</li>
                    <li>Opportunities were ranked before writing started.</li>
                    <li>Drafts and briefs were generated in repo-friendly formats.</li>
                    <li>Interlinking became part of publishing, not cleanup work.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-200 p-8 sm:p-10">
              <div class="text-sm font-medium uppercase tracking-[0.18em] text-gray-500 mb-5">
                Proof From My Own Sites
              </div>
              <div class="space-y-4 mb-6">
                <div
                  v-for="proofPoint in proofPoints"
                  :key="proofPoint.label"
                  class="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <div class="text-3xl font-light text-gray-900 mb-1">{{ proofPoint.value }}</div>
                  <div class="text-sm text-gray-600">{{ proofPoint.label }}</div>
                </div>
              </div>
              <p class="text-sm leading-relaxed text-gray-600">
                These are results from my own properties, not inflated client claims. The point of this case study is that the workflow repeatedly surfaced the next best keyword, the next page to improve, and the next internal link to add.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="py-16 sm:py-20 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              What The Workflow Actually Does
            </h2>
            <p class="text-gray-600 text-lg">
              The useful part was not one article generator. It was the full loop from opportunity discovery to publishing and feedback.
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="workflowStep in workflowSteps"
              :key="workflowStep.step"
              class="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
            >
              <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div class="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white flex-shrink-0">
                  {{ workflowStep.step }}
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-2">{{ workflowStep.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ workflowStep.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Outcome -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Why This Worked
            </h2>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
              The result was not just more content. It was a clearer operating rhythm for SEO: find the next best move, publish it cleanly, then use new data to decide what happens next.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="outcome in outcomes"
              :key="outcome.title"
              class="rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <div class="text-sm font-medium uppercase tracking-[0.16em] text-gray-500 mb-3">{{ outcome.eyebrow }}</div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">{{ outcome.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ outcome.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Site Relationship -->
    <section class="py-16 sm:py-20 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How This Fits The Rest Of The Website
            </h2>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
              This case study matters because the same underlying system appears in three forms across the site: as proof, as a service, and as a productized workflow.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="layer in siteLayers"
              :key="layer.title"
              class="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div class="text-sm font-medium uppercase tracking-[0.16em] text-amber-700 mb-3">{{ layer.eyebrow }}</div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">{{ layer.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4">{{ layer.description }}</p>
              <a
                v-if="layer.href"
                :href="layer.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-gray-900 hover:text-amber-700"
              >
                {{ layer.cta }} →
              </a>
              <router-link
                v-else
                :to="layer.to"
                class="text-sm font-medium text-gray-900 hover:text-amber-700"
              >
                {{ layer.cta }} →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 sm:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Want A Similar SEO System For Your Site?
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed mb-8">
            If your content already lives in Git, Markdown, or a structured CMS, I can adapt the same operating model to your site, your search data, and your publishing workflow.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link
              to="/contact"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100"
            >
              Talk About Your Site
            </router-link>
            <router-link
              to="/services/seo-automation"
              class="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-white px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-gray-900"
            >
              Explore SEO Automation Systems
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'

const proofPoints = [
  {
    value: '100K+',
    label: 'Impressions on Days to Expiry',
  },
  {
    value: '50K+',
    label: 'Impressions on brewedlate.com',
  },
  {
    value: '$0',
    label: 'Ad spend across the sites used to prove the workflow',
  },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Research keywords continuously',
    description:
      'The workflow starts with real site context: search performance, topic clusters, existing content, and adjacent keyword ideas. That creates a live list of opportunities instead of a static spreadsheet.',
  },
  {
    step: '02',
    title: 'Rank opportunities before writing',
    description:
      'Keywords are scored against relevance, difficulty, search volume, and how close an existing page already is to ranking. This is where the system decides what deserves attention next.',
  },
  {
    step: '03',
    title: 'Pick the best next pages',
    description:
      'Rather than chasing everything, the workflow narrows the list to the next best articles, refreshes, and supporting pages. That keeps the monthly SEO plan focused and defensible.',
  },
  {
    step: '04',
    title: 'Generate briefs and draft articles',
    description:
      'Once the priority is clear, the system generates structured article plans and draft content in formats that fit the site and repository. Writing becomes a guided editing task instead of a blank page problem.',
  },
  {
    step: '05',
    title: 'Interlink related pages as part of publishing',
    description:
      'The workflow suggests or inserts internal links between related articles so each new page strengthens the rest of the site. This matters because isolated content rarely compounds well.',
  },
  {
    step: '06',
    title: 'Measure, learn, and repeat',
    description:
      'Fresh rankings and performance data feed back into the next cycle. The result is not one big SEO push. It is a repeatable operating rhythm that gets sharper over time.',
  },
]

const outcomes = [
  {
    eyebrow: 'Operational change',
    title: 'SEO became a monthly system',
    description:
      'The biggest win was consistency. Instead of doing SEO only when there was spare time, the workflow created a repeatable loop for planning, writing, linking, and reviewing.',
  },
  {
    eyebrow: 'Prioritization',
    title: 'The best keywords rose to the top faster',
    description:
      'The workflow reduced guesswork. It became easier to distinguish interesting keywords from the ones most likely to create meaningful movement for the site.',
  },
  {
    eyebrow: 'Site quality',
    title: 'Content stopped behaving like isolated posts',
    description:
      'Because internal linking and content relationships were built into the process, new articles helped older ones and older ones helped new ones. The site started compounding more cleanly.',
  },
  {
    eyebrow: 'Productization',
    title: 'That internal workflow became PageSeeds',
    description:
      'PageSeeds is the clearer product expression of the same idea: review the site, pick the next best work, and turn SEO into an understandable operating rhythm instead of an endless backlog.',
  },
]

const siteLayers = [
  {
    eyebrow: 'Productized proof',
    title: 'PageSeeds',
    description:
      'The product layer. This is where the SEO operating model becomes a clearer offer: next keywords, next pages, and next drafts.',
    href: 'https://www.pageseeds.com/',
    to: '',
    cta: 'Visit PageSeeds',
  },
  {
    eyebrow: 'Done-for-you service',
    title: 'SEO Automation Systems',
    description:
      'The service layer. For teams that want the same kind of workflow adapted to their content model, repository, and Search Console data.',
    href: '',
    to: '/services/seo-automation',
    cta: 'See the service',
  },
  {
    eyebrow: 'DIY workflow',
    title: 'SEO Automation Package',
    description:
      'The implementation layer for developers and hands-on operators who want a packaged version of the workflow inside VS Code.',
    href: '',
    to: '/seo-automation',
    cta: 'See the package',
  },
]
</script>
