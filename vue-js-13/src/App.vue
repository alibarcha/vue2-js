<template>
      <div id="app">
        <!-- header -->
          <app-header></app-header>
            <!-- routing tag -->
          <router-view></router-view>
        

       </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name:"App",
  components: {
    'app-header':Header,

  },
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