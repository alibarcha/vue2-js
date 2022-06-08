<template>
   
  <div id="app">
    <data-app></data-app>

    <!-- prop component -->

    <prop-app data="this is prop text" text="this is text props"></prop-app>
     
    
  </div>

</template>

<script>
  import DataBind from './components/DataBind.vue'
  import PropsApp from './components/PropsApp.vue'



export default {
  name: 'App',
  components: {
    'data-app':DataBind,
    'prop-app':PropsApp,
    
  
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
