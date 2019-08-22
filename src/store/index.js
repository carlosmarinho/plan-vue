import Vuex from 'vuex';
import Vue from 'vue';
import sku from './modules/sku';
import suggestion from './modules/suggestion';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        sku,
        suggestion,
    }
});