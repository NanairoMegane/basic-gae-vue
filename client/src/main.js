import Vue from 'vue'
import App from './Start.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
