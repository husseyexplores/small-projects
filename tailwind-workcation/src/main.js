import Vue from 'vue'
import Homepage from './pages/Homepage.vue'
import Listings from './pages/Listings.vue'
import NotFound from './pages/404.vue'
// import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

export const routes = {
  '/': Homepage,
  '/listings': Listings,
}

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    },
  },
  render(h) {
    return h(this.ViewComponent)
  },
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
