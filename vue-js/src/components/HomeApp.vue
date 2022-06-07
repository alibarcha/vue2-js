<template>
    <div>
        <h1 v-if="show">wellcome to vue2 js :) </h1>
        <p>{{data}}</p>
        <h2>{{msg}}</h2>
        <button v-on:click="alt()">Click Me</button>
        <br><br>
        <button v-on:click="hello">hello btn</button>
        <br><br>
        <button v-on:click="sum(20,30)">sum btn</button>
       <h4> {{text}}</h4>
    </div>


</template>

<script>
  export default {
      name:'HomeApp',
      data (){
        //   data is used for string,array,boolean,number,object
          return {
              text:'this is random text :)',
            //   show:false,
              show:true

          }

      },
      props : {
        //   props is used for props
          data:String,
          msg:String,
      },
      methods:{
            //  methods is used for functions
          alt:function(){
              alert("hi there")
          },
          hello(){
              console.log("you clicked hello button")
          },

          sum:function(a,b){
              alert(`The sum of ${a} & ${b} is = ${a+b}`)
          }
      },
      computed:{
        //   computed is used for complex calculations

      }
      
  }

</script>

<style scoped>
h1{
    text-decoration-line: underline;
    color: lightgreen ;
}

</style>