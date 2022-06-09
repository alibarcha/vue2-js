<template>
  <div id="signup">
    <h1>Form with checkboxes and radio buttons</h1>
    <!-- form -->
    
    <input type="text" placeholder="Enter Your Name" v-model="signup.username"> <br><br>
    <input type="password" placeholder="Enter Your Password" v-model="signup.password"> <br><br>

    <p>Chosses Hobbies</p>
    <input type="checkbox" id="circket" value="circket" v-model="signup.hobbies">
    <label for="circket"> circket </label>
      <input type="checkbox" id="football" value="football" v-model="signup.hobbies">
    <label for="football"> football </label>

    
    <p>select gender</p>
    <input type="radio" id="male" value="male" name="gender" v-model="signup.gender">
    <label for="male"> male </label>
      <input type="radio" id="female" value="female" name="gender" v-model="signup.gender">
    <label for="female"> female </label>
        <br><br>
    <button v-on:click="submit">Sign Up</button>
  
      <br><br>  <hr> <br>
      <h2>Table of Data</h2>

      <table border="1px"  cellSpacing="0" >
          <thead>
              <tr>
                  <th> Name</th>
                  <th> Password</th>
                  <th> Hobbies</th>
                  <th> Gender</th>
              </tr>
               </thead>
              <tbody>
                  <tr>
                      <td id="name"></td>
                      <td id="pass"></td>
                      <td id="hobb"></td>
                      <td id="gen"></td>
                  </tr>
              </tbody>  
      </table>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
        signup:{
            username:null,
            password:null,
            hobbies:[],
            gender:null,
        }
    };
  },
  methods: {
      submit() {
          console.warn(this.signup)
          document.getElementById("name").innerHTML=this.signup.username;
          document.getElementById("pass").innerHTML=this.signup.password;
          document.getElementById("hobb").innerHTML=this.signup.hobbies;
          document.getElementById("gen").innerHTML=this.signup.gender;
      }
  },
  computed: {},
  props: {},
};
</script>

<style>
h1{
    text-align: center;
    padding: 20px;
}
   #signup{
       background: #eee;
       width: 70%;
       margin: 20px auto;
       padding: 30px;
       text-align: center;
   }
   input[type="text"],input[type="password"]{
       width: 90%;
       padding: 14px;
   }
   p,label{
       padding: 10px;
   }
   button{
       padding: 10px 20px;
       background: lightgreen;
       outline: none;
       border: 1px solid #222;
   }

   table{
       margin: 20px auto;
       width: 70%;
       
   }
  table thead{
       padding: 20px;
       margin: 10px;
       color: red;
   }
   th,td{
       padding: 10px 15px;
   }


</style>