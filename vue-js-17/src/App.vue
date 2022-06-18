<template>
  <div id="app">
      <header-app></header-app>

   
           <router-view></router-view>
     
     
  </div>
</template>

<script>

import Head from './components/Head.vue'

export default {
  name: "App",
  components: {
    'header-app':Head,
  
  },
  data() {
    return {
     
    };
  },

};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
 
}

</style>