<template>
  <div id="form">
    <h1>Login form</h1>
    <small id="success">Submited form</small>
    <small id="error">Error in form</small>
    <input
      type="text"
      placeholder="Enter your name"
      id="name"
      v-model="login.username"
    />
    <input
      type="password"
      placeholder="Enter your password"
      id="password"
      v-model="login.password"
    />

    <input type="submit" name="submit" id="submit" v-on:click="loginData" />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    loginData() {
      console.log(this.login);
      if (this.login.username && this.login.password) {
        console.log("you enter correct data :)");

        setTimeout(() => {
          document.getElementById("success").style.display = "block";
        }, 1000);
      } else if (this.login.username == null && this.login.password == null) {
        console.log("wrong data");

        setTimeout(() => {
          document.getElementById("error").style.display = "block";
        }, 1000);
      }
    },
  },
  computed: {},
  props: {},
};
</script>

<style scoped>
#form {
  width: 70%;
  background: #eee;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
}
input[type="text"],
input[type="password"] {
  width: 60%;
  padding: 10px;
  margin: 10px;
}
input[type="submit"] {
  padding: 10px 15px;
  background: #222;
  color: white;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
}
#success {
  color: white;
  background: green;
  padding: 2px 130px;
  display: none;
  margin: 5px;
}
#error {
  color: white;
  background: red;
  padding: 2px 130px;
  display: none;
  margin: 5px;
}
</style>