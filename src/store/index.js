import Vuex from 'vuex';
import Vue from 'vue';
import sku from './modules/sku';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        sku,
    }
});