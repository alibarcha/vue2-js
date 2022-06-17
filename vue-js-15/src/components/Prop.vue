<template>
    <div id="prop">
        <h2>prop component</h2>
        <!-- <p>{{name}}</p> -->
        <!-- <p>{{field}}</p> -->
       <!-- <h2>{{field }}: prop data</h2>  -->

       <!-- <p>{{boo}}</p> -->

       <!-- <ul>
        <li v-for="user in UsersName" :key="user.id">{{user}}</li>
       </ul> -->
<!-- 
       <ul >
        <li >Car Name: {{ mycar.name}}</li>
        <li >Car color: {{mycar.color}}</li>
        <li >Modal :{{mycar.modal}}</li>
        <li > recommend :{{mycar.recommend}}</li>
       </ul>
          <hr>
       <ul>
        <li v-for="item in mycar" :key="item.id">car {{mycar.name}}</li>
       </ul> -->

        <ul  v-for="user in usersData" :key="user.id">
            <li>User Name : {{user.name }}  User Email ::  {{ user.email}}</li>
            
        </ul>
      
       
        
       
    </div>
</template>

<script>
export default {
    name:'prop',
    props:{
        // name:String
        // field:String
        // boo:String
        // UsersName:Array
        // mycar:Object
        usersData:Array
    }

}
</script>

<style scoped>
 #prop{
    width: 70%;
    border: 1px solid;
    background: #eee;
    margin: 30px auto;
 }

</style>