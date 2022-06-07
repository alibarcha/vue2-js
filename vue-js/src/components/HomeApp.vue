<template>
    <div>
        <h1>wellcome to vue2 js :) </h1>
        <p>{{data}}</p>
        <h2>{{msg}}</h2>
    </div>


</template>

<script>
  export default {
      name:'HomeApp',
      props : {
          data:String,
          msg:String,
      }
      
  }

</script>

<style scoped>
h1{
    text-decoration-line: underline;
    color: lightgreen ;
}

</style>