<template id="template-home">
    <div>

        <router-view class="view"></router-view>
        <ul>
            <li>
                <router-link to="/">/</router-link>
            </li>
            <li>
                <router-link to="/bar">/bar</router-link>
            </li>
            <li>
                <router-link to="/login">/login</router-link>
            </li>
        </ul>
        <section>
            <p>{{a}}</p>
            <p>{{b}}</p>
            <p>{{count}}</p>
            <input type="text" v-model="a">
            <input type="text" v-model="b">
            <button type="button" @click="btn">提交</button>
            <A :home-a="a"/>
            <B/>
        </section>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex';
    import A from './A';
    import B from './B';
    export default{
        data(){
            return {
                a: 999
            }
        },
        mounted: function () {
            this.b = this.a
        },
        computed:mapGetters({
            count:"homeCount"
        }),
        methods: {
            btn(){
                this.$store.dispatch('btn',{a:1})
            }
        },
        components: {
            A, B
        }
    }
</script>