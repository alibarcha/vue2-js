<template>
      <div id="app">

        <home-slot></home-slot>


       </div>
</template>

<script>
import HomeSlots from './components/HomeSlots.vue'

export default {
  name:"App",
  components: {
    'home-slot':HomeSlots,
   
   
  },
  data(){
    return {
      name:'william son'
    
    }
  },
  watch:{
   
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