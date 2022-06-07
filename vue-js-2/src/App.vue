<template>
   
  <div id="app">
       <HomeApp/>
  </div>
  

</template>

<script>
   import HomeApp from './components/HomeApp.vue'


export default {
  name: 'App',
  components: {
    HomeApp,

   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
