<template>
<div>
    <h1> A template</h1>
    <h2>{{name}}</h2>
    <h2>{{homeA}}</h2>
</div>
</template>
<script>
    export default{
        props: ['home-a'],
        data(){
            return{
                name:"welcome to A template"
            }
        }
    }
</script>
