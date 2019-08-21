import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueGoogleCharts from 'vue-google-charts';
import Dashboard from './components/Dashboard';
import SkuFilter from './components/SkuFilter';
import Sku from './components/Sku';
import SuggestFilter from './components/SuggestFilter';
import Suggestion from './components/Suggestion';



Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(VueGoogleCharts);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Dashboard },
    { path: '/sku/filter', component: SkuFilter },
    /* { path: '/sku', component: Sku },*/
    {path: "/sku", name:"sku", component: Sku,  props: true},
    { path: '/suggest/filter', component: SuggestFilter },
    {path: "/suggest", name:"suggest", component: Suggestion,  props: true}

  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')