<template>
   
  <div id="app">

      <home-app ></home-app>
      <ChildFirst/>
      <ChildSecond/>
      
     


  </div>
  

</template>

<script>
  // main component
import HomeApp from './components/HomeApp.vue'

import ChildFirst from './components/ChildFirst.vue'

import ChildSecond from './components/ChildSecond.vue'



export default {
  name: 'App',
  components: {
    'home-app':HomeApp,
    ChildFirst,
    ChildSecond,
  
  
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
