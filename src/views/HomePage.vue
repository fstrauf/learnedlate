<template>
  <div class="home-page">
    <SEOHead 
      title="LearnedLate – AI Strategy-to-Execution Consultancy | NZ & Australia"
      description="Don't Get Left Behind by AI. Turn Strategy into Working Systems. For NZ & Australian mid-market businesses ready to move from AI confusion to measurable results."
      url="/"
      type="website"
      :schema="homeSchema"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div class="text-center lg:text-left">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-200">
              <MapPin class="h-4 w-4" />
              Serving New Zealand & Australia
            </div>
            <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Don't Get Left Behind by AI.
              <span class="block text-amber-200">Turn Strategy into Working Systems.</span>
            </h1>
            <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 lg:mx-0 lg:text-xl">
              For ANZ businesses ready to move from AI confusion to measurable outcomes, without vendor theater or pilot purgatory.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button 
                as-child 
                size="lg" 
                class="bg-amber-600 text-white hover:bg-amber-700"
                data-track='{"event":"cta_click","cta_text":"Book a Free AI Readiness Assessment","location":"hero","destination":"/contact"}'
              >
                <router-link to="/contact">
                  Book a Free AI Readiness Assessment
                </router-link>
              </Button>
              <Button 
                as-child 
                size="lg" 
                variant="outline" 
                class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                data-track='{"event":"cta_click","cta_text":"See How It Works","location":"hero","destination":"/services"}'
              >
                <router-link to="/services">
                  See How It Works
                </router-link>
              </Button>
            </div>
            <p class="mt-6 text-sm text-gray-400">
              Strategy + implementation, delivered in one team.
            </p>
          </div>

          <div class="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-gray-400">At a glance</p>
            <div class="space-y-4">
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <TrendingUp class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Business-first sequencing</p>
                  <p class="text-sm text-gray-300">One high-impact workflow, validated in 90 days.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">End-to-end accountability</p>
                  <p class="text-sm text-gray-300">Advisory and implementation without handoff gaps.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <Clock class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Fast start</p>
                  <p class="text-sm text-gray-300">Free readiness assessment in 30min.</p>
                </div>
              </div>
            </div>
            <p class="mt-6 border-t border-white/15 pt-6 text-sm text-gray-300">
              Built for mid-market leadership teams who need measurable progress, not generic AI hype.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Agitation Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- The Stakes -->
            <Card class="h-full border-l-4 border-l-primary/40 bg-primary/[0.02]">
              <CardHeader>
                <CardTitle class="text-xl flex items-center gap-2">
                  <TrendingUp class="w-5 h-5 text-primary/70" />
                  The Stakes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  AI Is Reshaping Your Industry. The Question Is Whether You'll Lead or Lag.
                </p>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-primary/80">+47%</span>
                  <span class="text-sm text-gray-500">ROI for early movers</span>
                </div>
                <div class="flex items-baseline gap-2 mt-2">
                  <span class="text-3xl font-bold text-primary/80">-14% to -43%</span>
                  <span class="text-sm text-gray-500">for late adopters</span>
                </div>
              </CardContent>
            </Card>

            <!-- The Reality -->
            <Card class="h-full border-l-4 border-l-primary/40 bg-primary/[0.02]">
              <CardHeader>
                <CardTitle class="text-xl flex items-center gap-2">
                  <AlertTriangle class="w-5 h-5 text-primary/70" />
                  The Reality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Most AI Projects Fail—Not From Bad Technology, But From Strategic Misalignment
                </p>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-primary/80">95%</span>
                  <span class="text-sm text-gray-500">enterprise pilot failure rate (MIT NANDA 2025)</span>
                </div>
                <div class="flex items-baseline gap-2 mt-2">
                  <span class="text-3xl font-bold text-primary/80">80%+</span>
                  <span class="text-sm text-gray-500">overall AI failure rate (RAND 2024)</span>
                </div>
              </CardContent>
            </Card>

            <!-- The Local Context -->
            <Card class="h-full border-l-4 border-l-primary/40 bg-primary/[0.02]">
              <CardHeader>
                <CardTitle class="text-xl flex items-center gap-2">
                  <MapPin class="w-5 h-5 text-primary/70" />
                  The Local Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  ANZ Businesses Face Unique Challenges
                </p>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <div class="text-2xl font-bold text-primary/80">87%</div>
                    <div class="text-sm text-gray-500">NZ AI adoption</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary/80">12%</div>
                    <div class="text-sm text-gray-500">have scaled it</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary/80">32%</div>
                    <div class="text-sm text-gray-500">skills gap barrier</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary/80">22%</div>
                    <div class="text-sm text-gray-500">data fragmentation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <!-- The Cost of Inaction -->
            <Card class="h-full border-l-4 border-l-amber-300 bg-amber-50/40">
              <CardHeader>
                <CardTitle class="text-xl flex items-center gap-2">
                  <Clock class="w-5 h-5 text-amber-500" />
                  The Cost of Inaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Every Quarter of Delay = Higher Cost to Catch Up
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <ArrowRight class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Competitor advantage compounds
                  </li>
                  <li class="flex items-start gap-2">
                    <ArrowRight class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Efficiency gaps widen
                  </li>
                  <li class="flex items-start gap-2">
                    <ArrowRight class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Top talent goes elsewhere
                  </li>
                  <li class="flex items-start gap-2">
                    <ArrowRight class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    Window for leadership narrows
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Introduction Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Your AI Strategy-to-Execution Partner
            </h2>
            <p class="text-xl text-amber-700 font-medium mb-4">
              We Don't Just Advise. We Build. We Don't Just Code. We Align.
            </p>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Most consultancies leave you with a PowerPoint. Most developers need detailed requirements. We bridge the gap—strategic thinking with hands-on implementation.
            </p>
          </div>

          <!-- Five-Phase Journey -->
          <div class="mb-12">
            <div class="relative">
              <!-- Connecting line -->
              <div class="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200" />
              
              <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div class="relative text-center">
                  <div class="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                    <Search class="w-6 h-6" />
                  </div>
                  <h3 class="font-medium text-gray-900 text-sm mb-1">Discover</h3>
                  <p class="text-xs text-gray-500">1–2 weeks</p>
                </div>
                
                <div class="relative text-center">
                  <div class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                    <Map class="w-6 h-6" />
                  </div>
                  <h3 class="font-medium text-gray-900 text-sm mb-1">Map</h3>
                  <p class="text-xs text-gray-500">2–3 weeks</p>
                </div>
                
                <div class="relative text-center">
                  <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                    <FileText class="w-6 h-6" />
                  </div>
                  <h3 class="font-medium text-gray-900 text-sm mb-1">Plan</h3>
                  <p class="text-xs text-gray-500">2–4 weeks</p>
                </div>
                
                <div class="relative text-center">
                  <div class="w-16 h-16 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                    <Hammer class="w-6 h-6" />
                  </div>
                  <h3 class="font-medium text-gray-900 text-sm mb-1">Build</h3>
                  <p class="text-xs text-gray-500">8–16 weeks</p>
                </div>
                
                <div class="relative text-center">
                  <div class="w-16 h-16 bg-amber-300 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                    <TrendingUp class="w-6 h-6" />
                  </div>
                  <h3 class="font-medium text-gray-900 text-sm mb-1">Optimize</h3>
                  <p class="text-xs text-gray-500">Ongoing</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <Button as-child variant="outline">
              <router-link to="/services/full-stack-delivery">
                Learn More About Our Process
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Help Section (Audience Tiers) -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Who We Help
            </h2>
            <p class="text-gray-600 text-lg">
              Services tailored to your organization's size and maturity
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Growing Teams -->
            <Card class="h-full">
              <CardHeader>
                <div class="text-sm font-medium text-amber-700 mb-2">Growing Teams</div>
                <CardTitle class="text-2xl">&lt; 50 Employees</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <p class="text-gray-600">
                  Focused AI workflow sprints. Fast results, fixed price. NZ government co-funding eligible.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Rapid workflow automation
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Fixed-price engagements
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Minimal disruption
                  </li>
                </ul>
                <div class="pt-4 border-t">
                  <p class="text-sm text-gray-500">Typical engagement: $15K–$50K</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button as-child variant="outline" class="w-full">
                  <router-link to="/services">
                    Learn More
                  </router-link>
                </Button>
              </CardFooter>
            </Card>

            <!-- Mid-Market -->
            <Card class="h-full border-amber-200 ring-2 ring-amber-100">
              <CardHeader>
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium text-amber-700 mb-2">Mid-Market</div>
                  <Badge variant="secondary" class="bg-amber-100 text-amber-800">Primary Focus</Badge>
                </div>
                <CardTitle class="text-2xl">50–500 Employees</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <p class="text-gray-600">
                  Full AI readiness assessment, strategy, and phased implementation.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Comprehensive readiness assessment
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Multi-phase implementation
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Change management support
                  </li>
                </ul>
                <div class="pt-4 border-t">
                  <p class="text-sm text-gray-500">Typical engagement: $50K–$250K</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button as-child class="w-full">
                  <router-link to="/services">
                    Learn More
                  </router-link>
                </Button>
              </CardFooter>
            </Card>

            <!-- Enterprise -->
            <Card class="h-full">
              <CardHeader>
                <div class="text-sm font-medium text-amber-700 mb-2">Enterprise</div>
                <CardTitle class="text-2xl">500+ Employees</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <p class="text-gray-600">
                  Transformation programs with governance frameworks and multi-year roadmaps.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Enterprise governance frameworks
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Multi-year transformation roadmaps
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Executive reporting & board updates
                  </li>
                </ul>
                <div class="pt-4 border-t">
                  <p class="text-sm text-gray-500">Typical engagement: $250K+</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button as-child variant="outline" class="w-full">
                  <router-link to="/services">
                    Learn More
                  </router-link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof & Credibility Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              The ANZ AI Gap—And How We Close It
            </h2>
          </div>
          
          <div class="bg-gray-900 text-white rounded-2xl p-8 sm:p-12">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div class="text-4xl sm:text-5xl font-bold text-amber-300 mb-2">87%</div>
                <p class="text-gray-300 text-sm">of NZ businesses use AI</p>
              </div>
              <div>
                <div class="text-4xl sm:text-5xl font-bold text-amber-200 mb-2">12%</div>
                <p class="text-gray-300 text-sm">have scaled it effectively</p>
              </div>
              <div>
                <div class="text-4xl sm:text-5xl font-bold text-amber-100 mb-2">75%</div>
                <p class="text-gray-300 text-sm">gap we help close</p>
              </div>
            </div>
            <div class="mt-8 pt-8 border-t border-gray-700 text-center">
              <p class="text-gray-300">
                Most businesses are experimenting with AI. Few have turned it into systematic competitive advantage. That's the gap we close.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Our Services
            </h2>
            <p class="text-gray-600 text-lg">
              Four ways we help businesses move from AI confusion to measurable results
            </p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <router-link to="/services/ai-readiness" class="group">
              <Card class="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ClipboardCheck class="w-8 h-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle class="text-lg">AI Readiness Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-gray-600">
                    Know where you stand before you invest. Four-dimension evaluation with written summary.
                  </p>
                </CardContent>
              </Card>
            </router-link>

            <router-link to="/services/agentic-workflows" class="group">
              <Card class="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Bot class="w-8 h-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle class="text-lg">Agentic Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-gray-600">
                    Autonomous AI systems that handle complete business processes end-to-end.
                  </p>
                </CardContent>
              </Card>
            </router-link>

            <router-link to="/services/custom-ai-development" class="group">
              <Card class="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code class="w-8 h-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle class="text-lg">Custom AI Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-gray-600">
                    Tailored solutions when off-the-shelf isn't enough. Built only when justified.
                  </p>
                </CardContent>
              </Card>
            </router-link>

            <router-link to="/services/full-stack-delivery" class="group">
              <Card class="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Layers class="w-8 h-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle class="text-lg">Full-Stack Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-gray-600">
                    End-to-end accountability from strategy through optimization. No handoff gaps.
                  </p>
                </CardContent>
              </Card>
            </router-link>
          </div>

          <div class="text-center mt-8">
            <Button as-child variant="outline">
              <router-link to="/services">
                View All Services
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
                Dual Fluency: Business + Technical
              </h2>
              <blockquote class="text-lg text-gray-600 italic border-l-4 border-amber-400 pl-4 mb-6">
                "We start with your business problem, not a vendor catalog."
              </blockquote>
              <p class="text-gray-600 mb-6">
                Most AI consultancies speak either business or technical. We speak both natively. From C-suite strategy sessions to code reviews—we bridge the gap that kills most AI projects.
              </p>
              <Button as-child variant="outline">
                <router-link to="/about">
                  Learn More About Our Approach
                </router-link>
              </Button>
            </div>
            <div class="bg-white rounded-xl p-8 shadow-sm">
              <h3 class="font-medium text-gray-900 mb-4">Our Background</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-gray-400 rounded-full" />
                  <span class="text-gray-600">Software Development</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-gray-500 rounded-full" />
                  <span class="text-gray-600">Solution Architecture</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-gray-600 rounded-full" />
                  <span class="text-gray-600">Business Strategy</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-amber-600 rounded-full" />
                  <span class="text-gray-900 font-medium">AI Transformation</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t">
                <p class="text-sm text-gray-500">
                  Based in New Zealand, serving Australia and NZ mid-market businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-16 sm:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Start with a Free AI Readiness Assessment
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            30 minutes to understand where you stand, what opportunities exist, and what a practical path forward looks like. No pressure, no obligation—just clarity.
          </p>
          
          <!-- What Happens Next -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8 text-left">
            <div class="bg-white/10 rounded-lg p-4">
              <div class="text-amber-300 font-bold mb-1">1</div>
              <p class="text-sm text-gray-300">Schedule a time</p>
            </div>
            <div class="bg-white/10 rounded-lg p-4">
              <div class="text-amber-300 font-bold mb-1">2</div>
              <p class="text-sm text-gray-300">Brief questionnaire</p>
            </div>
            <div class="bg-white/10 rounded-lg p-4">
              <div class="text-amber-300 font-bold mb-1">3</div>
              <p class="text-sm text-gray-300">30min assessment</p>
            </div>
            <div class="bg-white/10 rounded-lg p-4">
              <div class="text-amber-300 font-bold mb-1">4</div>
              <p class="text-sm text-gray-300">Written summary (48hr)</p>
            </div>
            <div class="bg-white/10 rounded-lg p-4 col-span-2 sm:col-span-1">
              <div class="text-amber-300 font-bold mb-1">5</div>
              <p class="text-sm text-gray-300">Follow-up call</p>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as-child 
              size="lg" 
              class="bg-amber-600 text-white hover:bg-amber-700"
              data-track='{"event":"cta_click","cta_text":"Book a Free AI Readiness Assessment","location":"final_cta","destination":"/contact"}'
            >
              <router-link to="/contact">
                Book a Free AI Readiness Assessment
              </router-link>
            </Button>
            <Button 
              as-child 
              size="lg" 
              variant="outline" 
              class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
              data-track='{"event":"cta_click","cta_text":"Explore Services First","location":"final_cta","destination":"/services"}'
            >
              <router-link to="/services">
                Explore Services First
              </router-link>
            </Button>
          </div>
          <p class="mt-6 text-sm text-gray-500">
            If the answer is "you don't need AI right now," we'll tell you that too.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  TrendingUp,
  AlertTriangle,
  Clock,
  ArrowRight,
  Search,
  Map,
  FileText,
  Hammer,
  Check,
  ClipboardCheck,
  Bot,
  Code,
  Layers,
} from 'lucide-vue-next'

// Schema markup for homepage
const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://learnedlate.com/#website",
    "url": "https://learnedlate.com",
    "name": "LearnedLate",
    "description": "AI strategy-to-execution consultancy for New Zealand and Australian mid-market businesses",
    "inLanguage": "en-NZ",
    "publisher": {
      "@type": "Organization",
      "@id": "https://learnedlate.com/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://learnedlate.com/#organization",
    "name": "LearnedLate",
    "url": "https://learnedlate.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://learnedlate.com/learndlate.png"
    },
    "description": "AI strategy-to-execution consultancy for NZ and Australian mid-market businesses",
    "areaServed": [
      {
        "@type": "Country",
        "name": "New Zealand"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "serviceType": [
      "AI Readiness Assessment",
      "Agentic Workflow Implementation",
      "Custom AI Development",
      "Full-Stack AI Delivery"
    ],
    "sameAs": [
      "https://x.com/learnedlate"
    ]
  }
]
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
  width: 100%;
}

section {
  overflow-x: hidden;
}
</style>
