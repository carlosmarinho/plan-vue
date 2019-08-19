
import api from '../../api/sku';

const state ={
    skuList:[]
};

const getters = {
    allSkus: state => state.skuList,
};

const actions = {
    async fetchSkus({commit}){
        const response = await api.fetchSkus();
        commit('setSkus', response.data);
    }
};

const mutations = {
    setSkus: (state, skus) => {
        state.skuList = skus;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}