<template>
     <div id="container">
            <h2>This is Props component.</h2>
            <span>{{data}} {{text}}</span>

            <h3>props second data</h3>
            <span>{{user}}</span>
            
     </div>
</template>

<script>
export default {
    name:'PropsApp',
    data(){
        return {
            userData:'user prop data'

        }
    },
    props:{
        data:String,
        text:String,
        user:String
    },
    methods:{

    },
    computed:{

    }
}
</script>

<style>

</style>