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
    import { mapGetters ,mapActions} from 'vuex'

    export  default{
        name: "foo",
        data () {
           return{
               name:"foo"
           }
        },
        computed: mapGetters([
            'count',
            'recentHistory'
        ]),
        methods: mapActions([
            'login'
        ])
    }
</script>