import Vue from 'vue'
import App from './Start.vue'
import router from './router'
import BootStrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.use(BootStrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')