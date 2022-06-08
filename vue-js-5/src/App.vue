<template>
   
  <div id="app">
      <!-- component -->
      <prop-app v-bind:name="userName" v-bind:client="clientName" v-bind:users="users"></prop-app>
      <br><hr><br>
        <h1>{{title}}</h1>
      <child-app v-on:changeTitle="updateTitle"></child-app>

    
  </div>

</template>

<script>

import PropsApp from './components/PropsApp.vue'
import ChildApp from './components/ChildApp.vue'

export default {
  name: 'App',
  components: {
   'prop-app':PropsApp,
   'child-app':ChildApp,
  },
  data(){
    return {
      userName: "jasan Roy",
      clientName:"steve smith",
      users:[
        {name:'anil',email:'abc@gmail.com'},
        {name:'jeff',email:'abc@gmail.com'},
        {name:'steve',email:'abc@gmail.com'},
        {name:'jony',email:'abc@gmail.com'},
      ],
      title:'props content '
    }
  },
  methods:{
    updateTitle:function (tit){
      this.tit=this.title
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
}

</style>
