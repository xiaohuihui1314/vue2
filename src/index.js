import Vue from 'vue'
import './css/index.css';
import Home from './components/Home'
import  router from './routers';
import  store from './store';
import  Customplugin from './Custom-plugin';
Vue.use(Customplugin);
new Vue({
    el: '#app',
    router,
    store,
    render: v => v(Home)
});
