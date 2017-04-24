import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Foo   = resolve => require.ensure([], () => resolve(require('./Foo')), 'foo');
const Bar = resolve => require.ensure([], () => resolve(require('./Bar')), 'bar');
const Login = resolve => require.ensure([], () => resolve(require('./Login')), 'login');

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Foo},
        {path: '/bar', component: Bar},
        {path: '/login', component: Login},
    ]
});
export default router;