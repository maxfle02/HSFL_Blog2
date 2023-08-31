import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Startseite.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Login from '../views/LoginView.vue' // Füge den Import für die Login-Komponente hinzu

const routes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/WriteBlog.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
  },
  {
    path: '/bibliothek',
    name: 'bibliothek',
    component: () => import('../views/SavedPosts.vue')
  },
  { path: '/blog/:id', component: BlogDetail },
  { path: '/login', name: 'login', component: Login } // Füge die neue Login-Route hinzu
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
