import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Impor router yang sudah Anda buat

createApp(App)
  .use(router)
  .mount('#app')