import { createRouter, createWebHashHistory } from 'vue-router'

// 异步组件
const Recommend = () => import('@/views/recommend.vue'/* webpackChunkName: 'recommend' */)
const Singer = () => import('@/views/singer.vue'/* webpackChunkName: 'singer' */)
const TopList = () => import('@/views/top-list.vue'/* webpackChunkName: 'top-list' */)
const Search = () => import('@/views/search.vue'/* webpackChunkName: 'search' */)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
