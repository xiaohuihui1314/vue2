import * as types from '../mutation-type';
const state = {
    count: 111
};
// getters
const getters = {
    homeCount: count => state.count,
};
// actions

const actions = {

    btn({commit},data){
        commit(types.addCount,{data})
    }
};
// mutations
const mutations = {
    [types.addCount](state,{data}){
        console.log(data)
        state.count++;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}