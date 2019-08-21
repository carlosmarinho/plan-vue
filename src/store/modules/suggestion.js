import api from '../../api/suggestion';

const state = {
    suggestionList: [{id: 'carregando...'}]
}

const getters = {
    allSuggestions: state => state.suggestionList
}

const actions = {
    async fetchSuggestions({ commit }){
        const response = await api.fetchSuggestions();
        commit('setSuggestions', response.data);
    }
}

const mutations = {
    setSuggestions: (state, suggestions) => {
        state.suggestionList = suggestions;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}