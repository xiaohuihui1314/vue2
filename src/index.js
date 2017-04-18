import Vue from 'vue'
import './css/index.css';
import Home from './components/Home'
import  router from './routers';
import  store from './store';
new Vue({
    el: '#app',
    router,
    store,
    render: v => v(Home)
});
