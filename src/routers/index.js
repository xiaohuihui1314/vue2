import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Foo   = resolve => require.ensure([], () => resolve(require('./Foo')), 'foo');
const Bar = resolve => require.ensure([], () => resolve(require('./Bar')), 'bar');

const router = new VueRouter({
    history: true,
    base: __dirname,
    routes: [
        {path: '/', component: Foo},
        {path: '/bar', component: Bar}
    ]
});
export default router;