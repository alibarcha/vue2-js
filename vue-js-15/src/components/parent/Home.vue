<template>
    <div id="home">
        
        <h2>parent</h2>
        <child-app :getUser="getUser"></child-app>
        <h3>User Name:: {{name}}</h3>
        <br><hr><br>

        <child-app name="steve smith" title="vue developer"> </child-app>
         
           
    </div>
</template>

<script>
import User from '../child/User.vue'
export default {
    name:'Home',
    components:{
        'child-app':User,
    },
      data (){
        return {
            name:''
        }
    },
    methods:{
        getUser(name){
            // alert(name)
            this.name=name

        }
    }

}
</script>

<style scoped>

</style>