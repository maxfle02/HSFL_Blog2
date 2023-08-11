import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Startseite.vue'
import BlogDetail from '../views/BlogDetail.vue'


const routes = [
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
  },

  {
    path: '/bibliothek',
    name: 'bibliothek',
    component: () => import('../views/SavedPosts.vue')
  },
  { path: '/blog/:id', component: BlogDetail }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router