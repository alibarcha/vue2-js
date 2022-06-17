<template>
  <div id="app">
    <!-- <home-slot></home-slot> -->
    <br />
    <button v-on:click="comp = 'LoginForm'">Next</button>
    <button v-on:click="comp = 'SignUp'">Default</button>
    <button v-on:click="comp = 'PostData'">Previews</button>
    <br /><br />

    <!-- <component v-bind:is=tab /> -->

    <component v-bind:is="comp" />
  </div>
</template>

<script>
// import HomeSlots from './components/HomeSlots.vue'

// import Java from './components/Java.vue'
// import Node from './components/Node.vue'
// import Php from './components/Php.vue'

import LoginForm from "./components/LoginForm.vue";
import SignUp from "./components/SignUp.vue";
import PostData from "./components/PostData.vue";

export default {
  name: "App",
  components: {
    // 'home-slot':HomeSlots,
    // Java,
    // Node,
    // Php

    LoginForm,
    SignUp,
    PostData,
  },
  data() {
    return {
      // tab:'Java'
      comp: "LoginForm",
    };
  },
  watch: {},
};
</script>

<style scoped>
* {
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