import Vue from 'vue';
import App from './App';
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

new Vue({
  render: h => h(App),
}).$mount('#app')