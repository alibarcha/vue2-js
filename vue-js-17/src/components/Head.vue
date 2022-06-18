<template>
    <header>
           <nav>    
                <router-link to="/profile">Profile</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/blog">Blog</router-link>
            </nav> 
     
    </header>
</template>

<script>
export default {
    name:'Head'

}
</script>

<style scoped>
 header{
    width: 100%;
    background: #3c40c6;  
    padding: 20px;
   
 }
 nav{
     display: flex;
    align-items: center;
    flex-wrap: wrap;  
 }

 a{
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 19px;
    font-weight: 500;
    margin: 0 30px;
    padding: 10px ;
    border-radius: 8px;
 }

 .router-link-active{
  background: lightgreen;
  
}


</style>