<template>
        <header>
            <h2>The Net Ninja </h2>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
              
            </ul>
            <button>Login</button>
     
        </header>
</template>

<script>
export default {
    name:'Home'

}
</script>

<style scoped>
    header{
        background: #222;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        min-height: 80px;
        widows: 100%;
    }
    h2{
        color: lightgreen;
        word-spacing: 8px;
        font-family: serif;
        font-size: 30px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 18px;
        
    }
    ul li {
         list-style: none;
         font-size: 20px;
         margin: 0 24px;
         padding: 8px 14px;
         color: white ;
         text-decoration: none;
         position: relative;
    
    }
  
      ul li::after{
        content: "";
        position: absolute;
        bottom: 0px;
        left: 12px;
        width: 0px;
        background: lightgreen;
        height: 2px;  
        border-radius: 30px;   
     } 
         ul li:hover::after{
        width: 65px;  
        transition-property: all;
        transition-duration: 1s;
     } 
    button{
        background: lightgreen;
        color: white;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        padding: 10px 20px;
    }
</style>