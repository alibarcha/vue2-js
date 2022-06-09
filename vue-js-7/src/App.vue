<template>
  <div id="App">
  
    <signup-app></signup-app>
  </div>
</template>

<script>
import SignUp from "./components/SignUp.vue";
export default {
  components: {
    "signup-app": SignUp,
  },
  data() {
    return {};
  },

  // ***************** life cycle hooks in vue js *********************
  beforeCreate: function () {
    console.log("before created");
  },
  created: function () {
    console.log("created");
  },
  beforeMount: function () {
    console.log("before mount");
  },
  mounted: function () {
    console.log("mounted");
  },
  beforeUpdate: function () {
    console.log("before update");
  },
  updated: function () {
    console.log("update");
  },
  beforeDestroy: function () {
    console.log("before destroy");
  },
  destroyed: function () {
    console.log("destroyed");
  },
};
</script>

<style>
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