<template>
    <div>
        <button v-on:click="display()">Toggle Menu</button>
        <h2 v-if="show">conditions in vue js :  This is vue js paragraph</h2>
        <h2 v-else>this is else options</h2>
        <br><hr><br>

        <h3 v-if="open">this is another condition</h3>
        <h4 v-else>else if condition here</h4>

    </div>
  
</template>

<script>
export default {
    name:'AppVue',
    data (){
        return {
            show:true,
            // show:false,

            // open:true,
            open:false
        }
    },
    methods : {
     display:function (){
         this.show=!this.show
     }
    }
}
</script>

<style>

</style>