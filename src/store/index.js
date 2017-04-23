import vue  from 'vue';
import vuex from 'vuex';
import login from './modules/login';

vue.use(vuex);
// state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态
// Actions 即是定义提交触发更改信息的描述，常见的例子有从服务端获取数据，
// 在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。
// 可以在组件中使用dispatch来发出 Actions
// 调用 mutations 是唯一允许更新应用状态的地方
// Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 数据 中筛选出已完成的项目列表：
// modules 对象允许将单一的 Store 拆分为多个 Store 的同时保存在单一的状态树中。
// 随着应用复杂度的增加，这种拆分能够更好地组织代码，更多细节参考这里。
const store=new vuex.Store({
    modules: {
        login
    }
});
export  default  store;