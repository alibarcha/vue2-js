<template>
  <div id="app">
    <!-- **************Life cycle methods,hooks in vue ************ -->
        <h1>before create</h1>
      <HomeApp/>
      <h2>after creat</h2>
     
  </div>
</template>

<script>

// import LoginForm from "./components/LoginForm.vue"
// import FormApp from './components/FormApp.vue'

import HomeApp from './components/HomeApp.vue'
export default {
  components: {
    // 'login-app':LoginForm,
    // FormApp,
    HomeApp,
  },
  data (){
    return {
  
    }
  },
  /*
   beforeCreate(){
     console.log("before create")
   },
   created(){
     console.log("created")
   },
   beforeMount(){
     console.log("before mount")
   },
   mounted(){
     console.log("mounted")
   }*/
 
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