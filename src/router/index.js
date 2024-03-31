import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import Feed from '../views/Feed.vue'
import NetWork from '../views/NetWork.vue'
import Jobs from '../views/Jobs.vue'
import Chat from '../views/Chat.vue'
import Notices from '../views/Notices.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Profile
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed
  },
  {
    path: '/network',
    name: 'netWork',
    component: NetWork
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/notices',
    name: 'notices',
    component: Notices
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
