<template>
    <div>
        <h1 v-show="isLogin">
           Welcome to  {{userName}}
        </h1>
        <form class="login-from" @submit="login(user)" >
            <div class="form-group">
                <span class="form-name"> 用户名：</span> <input type="text" v-model="user.userName">
            </div>
            <div class="form-group">
                <span class="form-name">密码：</span> <input type="password" v-model="user.userPwd">
            </div>
            <div class="form-group">
                <button type="submit" >登录</button>
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
    import {mapGetters,mapActions} from 'vuex';
    export default{

        mounted(){

        },
        computed:mapGetters({
            user:"user",
            userName:"userName",
            isLogin:"isLogin"
        }),
        methods: {
            ...mapActions([
                "submit"
            ]),
            login(user){
                this.fetch.post("http://localhost:8888/post",user).then( (data) =>{
                    this.$store.dispatch('login', data.body.userName)
                });
            }
        }
    }
</script>
