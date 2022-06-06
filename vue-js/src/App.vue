<template>
      <!-- root element -->
  <div id="app">
        <home-app data="This is prop data." msg="this is message one prop :)"></home-app>
        <home-app msg="this is mseeage props"></home-app>
        <br><hr><br>
        <app-vue></app-vue>
  </div>
  

</template>

<script>
    // import components
  import HomeApp from './components/HomeApp.vue'
  import AppVue from './components/AppVue.vue'


export default {
  name: 'App',
  components: {
    "home-app":HomeApp,
    'app-vue':AppVue
  }
}
</script>

<style>
    /* global styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
