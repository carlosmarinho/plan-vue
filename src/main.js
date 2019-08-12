import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueGoogleCharts from 'vue-google-charts';
import Dashboard from './components/Dashboard';
import SkuFilter from './components/SkuFilter';

Vue.use(VueRouter);
Vue.use(VueGoogleCharts);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dashboard },
    { path: '/sku/filter', component: SkuFilter },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')