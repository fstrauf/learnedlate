import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import StrategyPage from '../views/StrategyPage.vue'
import ImplementationPage from '../views/ImplementationPage.vue'
import EngineeringPage from '../views/EngineeringPage.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogPostPage from '../views/BlogPostPage.vue'
import CaseStudiesPage from '../views/CaseStudiesPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import LifeCalendarPage from '../views/LifeCalendarPage.vue'
import ConcentricCirclesPage from '../views/ConcentricCirclesPage.vue'
import LifeBalanceVisualizerPage from '../views/LifeBalanceVisualizerPage.vue'
import NowPage from '../views/NowPage.vue'
import CvPage from '../views/CvPage.vue'
import CheckoutSuccessPage from '../views/CheckoutSuccessPage.vue'
import CheckoutCancelPage from '../views/CheckoutCancelPage.vue'
import AiReadinessChecklistPage from '../views/AiReadinessChecklistPage.vue'

// Legacy pages - kept for SEO but removed from nav
import MvpDevelopmentPage from '../views/MvpDevelopmentPage.vue'
import FractionalCtoPage from '../views/FractionalCtoPage.vue'
import SeoAutomationPage from '../views/SeoAutomationPage.vue'
import SeoAutomationSystemsPage from '../views/SeoAutomationSystemsPage.vue'
import CustomSoftwareDevelopmentCompanyPage from '../views/CustomSoftwareDevelopmentCompanyPage.vue'
import CustomSoftwareDevelopmentServicesPage from '../views/CustomSoftwareDevelopmentServicesPage.vue'
import FractionalCtoServicesPage from '../views/FractionalCtoServicesPage.vue'
import MvpDevelopmentServicesPage from '../views/MvpDevelopmentServicesPage.vue'
import TechnicalCofounderVsFractionalCtoPage from '../views/TechnicalCofounderVsFractionalCtoPage.vue'
import ToptalAlternativePage from '../views/ToptalAlternativePage.vue'
import SapSolutionArchitecturePage from '../views/SapSolutionArchitecturePage.vue'
import SapCustomDevelopmentPage from '../views/SapCustomDevelopmentPage.vue'
import SapImplementationPartnerPage from '../views/SapImplementationPartnerPage.vue'
import SapBtpConsultantNzPage from '../views/SapBtpConsultantNzPage.vue'
import SapConsultingFirmsPage from '../views/SapConsultingFirmsPage.vue'
import SapCleanCoreExtensionsPage from '../views/SapCleanCoreExtensionsPage.vue'
import SapCustomDevelopmentServicesPage from '../views/SapCustomDevelopmentServicesPage.vue'
import SapJouleCustomSkillsPage from '../views/SapJouleCustomSkillsPage.vue'
import AccentureAlternativePage from '../views/AccentureAlternativePage.vue'
import SapBtpConsultantPage from '../views/SapBtpConsultantPage.vue'

const routes: RouteRecordRaw[] = [
  // Core Pages
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'LearnedLate – AI Strategy, Implementation & Engineering' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: 'About – LearnedLate | AI Strategy, Implementation & Engineering' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { title: 'Get Started – LearnedLate | AI Strategy, Implementation & Engineering' }
  },

  // New service pillar pages
  {
    path: '/services/strategy',
    name: 'Strategy',
    component: StrategyPage,
    meta: { title: 'Strategy – Find the Right Starting Point | LearnedLate' }
  },
  {
    path: '/services/implementation',
    name: 'Implementation',
    component: ImplementationPage,
    meta: { title: 'Implementation – Automate Real Workflows | LearnedLate' }
  },
  {
    path: '/services/engineering',
    name: 'Engineering',
    component: EngineeringPage,
    meta: { title: 'Engineering – Custom AI When Off-the-Shelf Falls Short | LearnedLate' }
  },

  // Redirects from old service URLs to new pillar pages
  {
    path: '/services',
    redirect: '/'
  },
  {
    path: '/services/ai-readiness',
    redirect: '/services/strategy'
  },
  {
    path: '/services/agentic-workflows',
    redirect: '/services/implementation'
  },
  {
    path: '/services/full-stack-delivery',
    redirect: '/services/implementation'
  },
  {
    path: '/services/custom-ai-development',
    redirect: '/services/engineering'
  },
  {
    path: '/ai-readiness-checklist',
    name: 'AiReadinessChecklist',
    component: AiReadinessChecklistPage,
    meta: { title: 'AI Readiness Checklist – Free Download | LearnedLate' }
  },
  
  // Content Pages
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    meta: { title: 'Blog – AI & Business Strategy Insights | LearnedLate' }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPostPage,
    props: true,
    meta: {
      title: () => {
        return 'Blog Post – LearnedLate'
      }
    }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudiesPage,
    meta: { title: 'Case Studies – LearnedLate' }
  },
  
  // Tools (moved from main nav to footer only)
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
    meta: { title: 'Projects – LearnedLate' }
  },
  {
    path: '/life-calendar',
    name: 'LifeCalendar',
    component: LifeCalendarPage,
    meta: { title: 'Life Calendar – LearnedLate' }
  },
  {
    path: '/concentric-circles',
    name: 'ConcentricCircles',
    component: ConcentricCirclesPage,
    meta: { title: 'Bubble Biases – LearnedLate' }
  },
  {
    path: '/life-balance-visualizer',
    name: 'LifeBalanceVisualizer',
    component: LifeBalanceVisualizerPage,
    meta: { title: 'Life Balance Visualizer – LearnedLate' }
  },
  {
    path: '/now',
    name: 'Now',
    component: NowPage,
    meta: { title: 'Now – LearnedLate' }
  },
  
  // Checkout Pages
  {
    path: '/checkout-success',
    name: 'CheckoutSuccess',
    component: CheckoutSuccessPage,
    meta: { title: 'Payment Successful – LearnedLate' }
  },
  {
    path: '/checkout-cancel',
    name: 'CheckoutCancel',
    component: CheckoutCancelPage,
    meta: { title: 'Payment Cancelled – LearnedLate' }
  },
  
  // Legacy Pages (kept for SEO, removed from nav)
  {
    path: '/cv',
    name: 'CV',
    component: CvPage,
    meta: { title: 'CV – LearnedLate' }
  },
  {
    path: '/automation',
    redirect: '/services/implementation'
  },
  {
    path: '/ai-implementation',
    redirect: '/services/implementation'
  },
  {
    path: '/mvp-development',
    name: 'MvpDevelopment',
    component: MvpDevelopmentPage,
    meta: { title: 'MVP Development – LearnedLate' }
  },
  {
    path: '/fractional-cto',
    name: 'FractionalCto',
    component: FractionalCtoPage,
    meta: { title: 'Fractional CTO – LearnedLate' }
  },
  {
    path: '/seo-automation',
    name: 'SeoAutomation',
    component: SeoAutomationPage,
    meta: { title: 'SEO Automation Package – LearnedLate' }
  },
  {
    path: '/services/seo-automation',
    name: 'SeoAutomationSystems',
    component: SeoAutomationSystemsPage,
    meta: { title: 'SEO Automation Systems – LearnedLate' }
  },
  {
    path: '/custom-software-development-company',
    name: 'CustomSoftwareDevelopmentCompany',
    component: CustomSoftwareDevelopmentCompanyPage,
    meta: { title: 'Custom Software Development Company | LearnedLate' }
  },
  {
    path: '/custom-software-development-services',
    name: 'CustomSoftwareDevelopmentServices',
    component: CustomSoftwareDevelopmentServicesPage,
    meta: { title: 'Custom Software Development Services | LearnedLate' }
  },
  {
    path: '/fractional-cto-services',
    name: 'FractionalCtoServices',
    component: FractionalCtoServicesPage,
    meta: { title: 'Fractional CTO Services | LearnedLate' }
  },
  {
    path: '/mvp-development-services',
    name: 'MvpDevelopmentServices',
    component: MvpDevelopmentServicesPage,
    meta: { title: 'MVP Development Services | LearnedLate' }
  },
  {
    path: '/technical-co-founder-vs-fractional-cto',
    name: 'TechnicalCofounderVsFractionalCto',
    component: TechnicalCofounderVsFractionalCtoPage,
    meta: { title: 'Technical Co-Founder vs Fractional CTO | LearnedLate' }
  },
  {
    path: '/toptal-alternative-fractional-cto-nz',
    name: 'ToptalAlternative',
    component: ToptalAlternativePage,
    meta: { title: 'Toptal Alternative for Fractional CTO | LearnedLate' }
  },
  
  // SAP Pages (kept for SEO, removed from nav)
  {
    path: '/sap-solution-architecture',
    name: 'SapSolutionArchitecture',
    component: SapSolutionArchitecturePage,
    meta: { title: 'SAP Solution Architecture | LearnedLate' }
  },
  {
    path: '/sap-custom-development',
    name: 'SapCustomDevelopment',
    component: SapCustomDevelopmentPage,
    meta: { title: 'SAP Custom Development | LearnedLate' }
  },
  {
    path: '/sap-clean-core-extensions',
    name: 'SapCleanCoreExtensions',
    component: SapCleanCoreExtensionsPage,
    meta: { title: 'SAP Clean Core Extensions | LearnedLate' }
  },
  {
    path: '/sap-implementation-partner',
    name: 'SapImplementationPartner',
    component: SapImplementationPartnerPage,
    meta: { title: 'SAP Implementation Partner | LearnedLate' }
  },
  {
    path: '/sap-btp-consultant-new-zealand',
    name: 'SapBtpConsultantNz',
    component: SapBtpConsultantNzPage,
    meta: { title: 'SAP BTP Consultant New Zealand | LearnedLate' }
  },
  {
    path: '/sap-consulting-firms',
    name: 'SapConsultingFirms',
    component: SapConsultingFirmsPage,
    meta: { title: 'SAP Consulting Firms | LearnedLate' }
  },
  {
    path: '/sap-btp-consultant',
    name: 'SapBtpConsultant',
    component: SapBtpConsultantPage,
    meta: { title: 'SAP BTP Consultant | LearnedLate' }
  },
  {
    path: '/accenture-alternative-sap-consulting',
    name: 'AccentureAlternative',
    component: AccentureAlternativePage,
    meta: { title: 'Accenture Alternative for SAP | LearnedLate' }
  },
  {
    path: '/sap-joule-custom-skills-development',
    name: 'SapJouleCustomSkills',
    component: SapJouleCustomSkillsPage,
    meta: { title: 'SAP Joule Custom Skills | LearnedLate' }
  },
  {
    path: '/sap-custom-development-services',
    name: 'SapCustomDevelopmentServices',
    component: SapCustomDevelopmentServicesPage,
    meta: { title: 'SAP Custom Development Services | LearnedLate' }
  },
]

export default routes
