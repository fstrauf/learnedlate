import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CvPage from '../views/CvPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogPostPage from '../views/BlogPostPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import LifeCalendarPage from '../views/LifeCalendarPage.vue'
import ConcentricCirclesPage from '../views/ConcentricCirclesPage.vue'
import LifeBalanceVisualizerPage from '../views/LifeBalanceVisualizerPage.vue'
import NowPage from '../views/NowPage.vue'
import AutomationPage from '../views/AutomationPage.vue'
import MvpDevelopmentPage from '../views/MvpDevelopmentPage.vue'
import FractionalCtoPage from '../views/FractionalCtoPage.vue'
import AiImplementationPage from '../views/AiImplementationPage.vue'
import CheckoutSuccessPage from '../views/CheckoutSuccessPage.vue'
import CheckoutCancelPage from '../views/CheckoutCancelPage.vue'
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
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Home - Florian Strauf' }
  },
  {
    path: '/cv',
    name: 'CV',
    component: CvPage,
    meta: { title: 'CV - Florian Strauf' }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
    meta: { title: 'Services - Florian Strauf' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
    meta: { title: 'Blog - Florian Strauf' }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPostPage,
    props: true,
    meta: {
      title: () => {
        return 'Blog Post - Florian Strauf'
      }
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
    meta: { title: 'Projects - Florian Strauf' }
  },
  {
    path: '/life-calendar',
    name: 'LifeCalendar',
    component: LifeCalendarPage,
    meta: { title: 'Life Calendar - Florian Strauf' }
  },
  {
    path: '/concentric-circles',
    name: 'ConcentricCircles',
    component: ConcentricCirclesPage,
    meta: { title: 'Bubble Biases - Florian Strauf' }
  },
  {
    path: '/life-balance-visualizer',
    name: 'LifeBalanceVisualizer',
    component: LifeBalanceVisualizerPage,
    meta: { title: 'Life Balance Visualizer - Florian Strauf' }
  },
  {
    path: '/now',
    name: 'Now',
    component: NowPage,
    meta: { title: 'Now - Florian Strauf' }
  },
  {
    path: '/automation',
    name: 'Automation',
    component: AutomationPage,
    meta: { title: 'Automation - Save 10+ Hours/Week' }
  },
  {
    path: '/mvp-development',
    name: 'MvpDevelopment',
    component: MvpDevelopmentPage,
    meta: { title: 'MVP Development - Launch Faster' }
  },
  {
    path: '/fractional-cto',
    name: 'FractionalCto',
    component: FractionalCtoPage,
    meta: { title: 'Fractional CTO - Senior Leadership' }
  },
  {
    path: '/ai-implementation',
    name: 'AiImplementation',
    component: AiImplementationPage,
    meta: { title: 'AI Implementation - Practical, Fast ROI' }
  },
  {
    path: '/checkout-success',
    name: 'CheckoutSuccess',
    component: CheckoutSuccessPage,
    meta: { title: 'Payment Successful - Florian Strauf' }
  },
  {
    path: '/checkout-cancel',
    name: 'CheckoutCancel',
    component: CheckoutCancelPage,
    meta: { title: 'Payment Cancelled - Florian Strauf' }
  },
  {
    path: '/seo-automation',
    name: 'SeoAutomation',
    component: SeoAutomationPage,
    meta: { title: 'SEO Automation Package - Florian Strauf' }
  },
  {
    path: '/services/seo-automation',
    name: 'SeoAutomationSystems',
    component: SeoAutomationSystemsPage,
    meta: { title: 'SEO Automation Systems - Florian Strauf' }
  },
  {
    path: '/custom-software-development-company',
    name: 'CustomSoftwareDevelopmentCompany',
    component: CustomSoftwareDevelopmentCompanyPage,
    meta: { title: 'Custom Software Development Company | NZ-Based Team' }
  },
  {
    path: '/custom-software-development-services',
    name: 'CustomSoftwareDevelopmentServices',
    component: CustomSoftwareDevelopmentServicesPage,
    meta: { title: 'Custom Software Development Services | From Idea to Launch' }
  },
  {
    path: '/fractional-cto-services',
    name: 'FractionalCtoServices',
    component: FractionalCtoServicesPage,
    meta: { title: 'Fractional CTO Services | Expert Tech Leadership for Startups' }
  },
  {
    path: '/mvp-development-services',
    name: 'MvpDevelopmentServices',
    component: MvpDevelopmentServicesPage,
    meta: { title: 'MVP Development Services | Build Your Startup MVP in 8 Weeks' }
  },
  {
    path: '/technical-co-founder-vs-fractional-cto',
    name: 'TechnicalCofounderVsFractionalCto',
    component: TechnicalCofounderVsFractionalCtoPage,
    meta: { title: 'Technical Co-Founder vs Fractional CTO: 2025 Guide for Startups' }
  },
  {
    path: '/toptal-alternative-fractional-cto-nz',
    name: 'ToptalAlternative',
    component: ToptalAlternativePage,
    meta: { title: 'Best Toptal Alternative for Fractional CTO Services | LearnedLate' }
  },
  {
    path: '/sap-solution-architecture',
    name: 'SapSolutionArchitecture',
    component: SapSolutionArchitecturePage,
    meta: { title: 'SAP Solution Architecture Services | Enterprise System Design' }
  },
  {
    path: '/sap-custom-development',
    name: 'SapCustomDevelopment',
    component: SapCustomDevelopmentPage,
    meta: { title: 'SAP Custom Development Services | ABAP, Fiori & BTP' }
  },
  {
    path: '/sap-clean-core-extensions',
    name: 'SapCleanCoreExtensions',
    component: SapCleanCoreExtensionsPage,
    meta: { title: 'SAP Clean Core Extensions | BTP Side-by-Side Development Services' }
  },
  {
    path: '/sap-implementation-partner',
    name: 'SapImplementationPartner',
    component: SapImplementationPartnerPage,
    meta: { title: 'SAP Implementation Partner ANZ | Senior Experts, 40% Savings | LearnedLate' }
  },
  {
    path: '/sap-btp-consultant-new-zealand',
    name: 'SapBtpConsultantNz',
    component: SapBtpConsultantNzPage,
    meta: { title: 'SAP BTP Consultant New Zealand | Local Clean Core Expertise' }
  },
  {
    path: '/sap-consulting-firms',
    name: 'SapConsultingFirms',
    component: SapConsultingFirmsPage,
    meta: { title: 'SAP Consulting Firms: ANZ Expert at Big 4 Rates | LearnedLate' }
  },
  {
    path: '/sap-btp-consultant',
    name: 'SapBtpConsultant',
    component: SapBtpConsultantPage,
    meta: { title: 'SAP BTP Consultant | Side-by-Side Extensions & Clean Core' }
  },
  {
    path: '/accenture-alternative-sap-consulting',
    name: 'AccentureAlternative',
    component: AccentureAlternativePage,
    meta: { title: 'Accenture Alternative for SAP | 40-60% Cost Savings | learnedlate' }
  },
  {
    path: '/sap-joule-custom-skills-development',
    name: 'SapJouleCustomSkills',
    component: SapJouleCustomSkillsPage,
    meta: { title: 'SAP Joule Custom Skills Development | AI Agent Implementation' }
  },
  {
    path: '/sap-custom-development-services',
    name: 'SapCustomDevelopmentServices',
    component: SapCustomDevelopmentServicesPage,
    meta: { title: 'SAP Custom Development Services | Clean Core Extensions | ANZ' }
  },
]

export default routes
