import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue' // Pastikan komponen Home diimpor

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // Rute home mengarah ke Home.vue
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound // Menangani rute yang tidak ditemukan
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router