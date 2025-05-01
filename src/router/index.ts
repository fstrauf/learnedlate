import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CvPage from '../views/CvPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ProjectDetailPage from '../views/ProjectDetailPage.vue'
import LifeCalendarPage from '../views/LifeCalendarPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/cv',
    name: 'CV',
    component: CvPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetail',
    component: ProjectDetailPage,
    props: true
  },
  {
    path: '/life-calendar',
    name: 'LifeCalendar',
    component: LifeCalendarPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 