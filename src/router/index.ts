import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/select',
      name: 'select',
      // route level code-splitting
      // this generates a separate chunk (Select.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SelectView.vue'),
    },
    {
      path: '/input',
      name: 'input',
      // route level code-splitting
      // this generates a separate chunk (Input.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InputView.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      // route level code-splitting
      // this generates a separate chunk (Input.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CalendarView.vue'),
    },
    {
      path: '/timePicker',
      name: 'timePicker',
      // route level code-splitting
      // this generates a separate chunk (Input.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TimePicker.vue'),
    },
    {
      path: '/enhancedSelect',
      name: 'enhancedSelect',
      // route level code-splitting
      // this generates a separate chunk (Input.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EnhancedSelectView.vue'),
    },
    {
      path: '/dialog',
      name: 'dialog',
      // route level code-splitting
      // this generates a separate chunk (Input.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DialogView.vue'),
    },
    {
      path: '/print',
      name: 'print',
      // route level code-splitting
      // this generates a separate chunk (Input.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/printView.vue'),
    },
  ],
})

export default router
