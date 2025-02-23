import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/homeHome.vue'
import AboutView from './pages/aboutAbout.vue'
import Form from './pages/formForm.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/form', component: Form }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app');
// createApp(App).use(router).mount('#app')