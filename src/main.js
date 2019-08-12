import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueGoogleCharts from 'vue-google-charts';
import Dashboard from './components/Dashboard';
import SkuFilter from './components/SkuFilter';
import Sku from './components/Sku';


Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(VueGoogleCharts);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dashboard },
    { path: '/sku/filter', component: SkuFilter },
    { path: '/sku', component: Sku },

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')