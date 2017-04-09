import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const Home   = resolve => require.ensure([], () => resolve(require('./Home')), 'home');
const Bar = resolve => require.ensure([], () => resolve(require('./Bar')), 'bar');

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Home},
        {path: '/bar', component: Bar}
    ]
});
export default router;