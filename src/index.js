import Vue from 'vue'
import './css/index.css';
import Favlist from './components/Favlist'
import  router from './routers';

Vue.config.debug = true;//开启错误提示
window.onload = function () {
    new Vue({
        router,
        el: '#app',
        data: {
            www: "9999",
            hidden: true,
            list: [
                {item: 111},
                {item: 222},
                {item: 333}
            ]
        },
        methods: {
            click: function () {
                console.log(999)
            }
        },
        mounted:function () {
          console.log("渲染完毕！！！");
          this.click();

        },
        components: {
            'my-component': Favlist
        }
    });
}