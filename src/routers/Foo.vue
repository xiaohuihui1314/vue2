<template>
    <div>
        <h2>hello world!</h2>
        <p>
            {{name}}
            {{$store.state.loginData.isLogin}}<br>
            {{$store.state.count}}
        </p>
        <form class="login-from" >
            <div class="form-group">
              <span class="form-name"> 用户名：</span> <input type="text">
            </div>
            <div class="form-group">
                <span class="form-name">密码：</span> <input type="password">
            </div>
            <div class="form-group">
                <button type="button" @click="login">登录</button>
            </div>
        </form>
    </div>
</template>
<style>
    .login-from{
        width: 500px;
        margin: 0 auto;
        padding: 25px;
    }
    .form-group{
        margin-bottom: 25px;
    }
</style>
<script>
    import {mapActions} from 'vuex'
    //后续在组件中使用的过程中，如果想要获取对应的状态你就可以直接使用this.$store.state获取，
    // 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
    //mapGetters工具函数会将store中的getter映射到局部计算属性中。
    //mapActions与mapMutations类似，也是绑定在组件的methods上的,如果选择直接触发的话，使用this.$store.dispatch(actionName)方法。
    //mapMutations直接将触发函数映射到methods上，这样就能在元素事件绑定上直接使用了
    export  default{
        name: "foo",
        data () {
           return{
               name:"foo"
           }
        },
        methods: mapActions([
            'login'
        ])
    }
</script>