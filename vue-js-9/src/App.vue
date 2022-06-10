<template>
  <div id="App">
        <h1>Filters are used for text formating in vue js</h1>
       <!-- <login-app></login-app> -->
       <!-- <FormApp/> -->
       <h1>{{title | capitalize | repeat}}</h1>
       <h2>{{msg | ucase}}</h2>
       <h4>amount: {{amount | currency}}</h4>
        <h5>lowerCase:: {{text | lower}}</h5>
       {{msg | capitalize }} <br>
       {{msg | repeat }}
     
  </div>
</template>

<script>

// import LoginForm from "./components/LoginForm.vue"
// import FormApp from './components/FormApp.vue'
export default {
  components: {
    // 'login-app':LoginForm,
    // FormApp,
  },
  data (){
    return {
      title:'william son',
      msg:'wellcome to vue js',
      amount:100,
      text:'JAVASCRIPT 2022'
    }
  },
  // filters in vue
  filters:{
    capitalize:function(e){
        return e.toUpperCase()
    },
    repeat:function(e){
      return  ` ${e.repeat(5)}`

    }
  }
 
}

</script>

<style>


</style>