import * as types from '../mutation-type';
const state = {
    user:{
        userName:"",
        userPwd:"",
    },
    isLogin:false,
    userName:"",
    count: 0
};
// getters
const getters = {
    countData: state => state.count,
    userName: state => state.userName,
    isLogin: state => state.isLogin,
    user: state => state.user,

};
// actions

const actions = {
    login({commit},userName){
        commit(types.login,{userName})
    },
    submit({commit}){
        commit(types.submit)
    }
};
// mutations
const mutations = {
    [types.login](state,{userName}){
        state.userName=userName;
        state.isLogin=true;
    },
    [types.submit](state){
        state.count++;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}