import Vue from 'vue'
import './css/index.css';
import Home from './components/Home'
import  router from './routers';
new Vue({
    el: '#app',
    router,
    render: v => v(Home)
});
