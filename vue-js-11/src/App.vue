<template>
      <div id="app">
        <h1>Fetch Data from API </h1>
        <fetchApi/>
        <FetchApp/>
    
       </div>
</template>

<script>

import FetchApi from './components/FetchApi.vue'
import FetchApp from './components/FetchApp.vue'
export default {
  components: {
    FetchApi,
    FetchApp
  
  },
  data (){
    return {
     
  
    }
  
  },
     methods : {
     

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