import * as types from '../mutation-type';
const state={
    count:0
};
// getters
const getters = {
    countData: state => state.count
};
// actions
const actions={
    login({commit}){
        commit(types.login)
    }
};
// mutations
const mutations = {
[types.login](state){
        state.count++;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}