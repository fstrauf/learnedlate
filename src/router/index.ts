import { createRouter, createWebHistory } from 'vue-router'
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

const DEFAULT_TITLE = 'Florian Strauf'

const routes = [
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
        // This will be overridden by the component when the post loads
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
  // {
  //   path: '/project/:slug',
  //   name: 'ProjectDetail',
  //   component: ProjectDetailPage, // This component will be deleted
  //   props: true,
  //   meta: {
  //     title: (to: RouteLocationNormalized) => {
  //       const project = projects.find(p => p.slug === to.params.slug)
  //       return project ? `${project.title} - Project` : 'Project Details'
  //     }
  //   }
  // }, // ProjectDetail route removed
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (typeof to.meta.title === 'function') {
    document.title = `${to.meta.title(to)} | Florian Strauf` || DEFAULT_TITLE
  } else {
    document.title = to.meta.title ? `${to.meta.title}` : DEFAULT_TITLE
  }
})

export default router 