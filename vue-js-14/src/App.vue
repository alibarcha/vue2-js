<template>
      <div id="app">
          <h1>Routing in vue</h1>
            <ul>
                <li><router-link to="/">Home</router-link></li> 
                <li><router-link to="/about">About</router-link></li> 
                <li><router-link to="/setting">Setting</router-link></li> 
            </ul>
          <router-view></router-view>
       </div>
</template>

<script>


export default {
  name:"App",
  components: {
  
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