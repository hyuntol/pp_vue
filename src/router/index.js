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
  ],
})

export default router

export const headerNav = [
  {
      title: "intro",
      url: "#intro",
  },
  {
      title: "skill",
      url: "#skill",
  },
  {
      title: "site",
      url: "#site",
  },
  {
      title: "portfolio",
      url: "#port",
  },
  {
      title: "contact",
      url: "#contact",
  },
];
