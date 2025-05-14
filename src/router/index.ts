import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CvPage from '../views/CvPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ProjectDetailPage from '../views/ProjectDetailPage.vue'
import LifeCalendarPage from '../views/LifeCalendarPage.vue'
import ConcentricCirclesPage from '../views/ConcentricCirclesPage.vue'
import { projects } from '../data/projects'

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
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
    meta: { title: 'Projects - Florian Strauf' }
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetail',
    component: ProjectDetailPage,
    props: true,
    meta: {
      title: (to: RouteLocationNormalized) => {
        const project = projects.find(p => p.slug === to.params.slug)
        return project ? `${project.title} - Project` : 'Project Details'
      }
    }
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