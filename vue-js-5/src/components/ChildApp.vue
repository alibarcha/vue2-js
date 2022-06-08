<template>
   <div id="root">
       <button v-on:click="updateTitle">Update parent Title</button>
   </div>
</template>

<script>
export default {
    name:'ChildApp',
    data(){
        return {

        }
    },

    props:{

    },
    methods:{
        updateTitle:function(){
            // console.warn("this is warning")
            this.$emit('changeTitle','parent props updated')
        }

    }

}
</script>

<style>

</style>