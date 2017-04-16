<template id="template-home">
    <div>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/bar">/bar</router-link></li>
        </ul>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
    export default{


    }
</script>
