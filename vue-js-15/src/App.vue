<template>
      <div id="app">
          <h2>send data child to parent in vue 3</h2>

          <!-- component 1 -->
         <parent-app></parent-app>
         <!-- component 2 -->
         <br> <hr><hr><br>

          <h2>Props in vue js</h2>

          <!-- prop component -->
            <!-- string component -->
          <!-- <prop-app name="william son" ></prop-app> -->

          <!-- <prop-app v-bind:field="title" ></prop-app> -->
          <!-- <prop-app :field="title" ></prop-app> -->

          <!-- <prop-app v-bind:boo="male" ></prop-app> -->

          <!-- <prop-app :UsersName="users"></prop-app> -->

          <prop-app v-bind:usersData="users"></prop-app>

       </div>
</template>

<script>
import Home from './components/parent/Home.vue'
import Prop from './components/Prop.vue'

export default {
  name:"App",
  components: {
    'parent-app':Home,
    'prop-app':Prop,
  },
  data(){
    return {
      title:'vue Developer',
        male:false,

        users:['william','elon','steve','jordan'],

        // car:{
        //   name:'maruti',
        //   color:'red',
        //   modal:22,
        //   recommend:true
        // }

        users:[
          {name:'william son',email:'abc@gmail.com'},
          {name:'steve job',email:'cda@gmail.com'},
          {name:'jordan',email:'jor@gmail.com'}
          
       ]

    }
  }
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
 
}

</style>