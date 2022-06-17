<template>
    <div id="child">
        <p>child component</p>
        <button v-on:click="getUser(userName)">send user name in to parent component</button>
       <h3>{{name}}</h3> 
       <h4>{{title}}</h4>
    </div>
</template>

<script>
export default {
    name:'User',

    data (){
        return{ 
            userName:'william son'
        }
    },
    props:{
        getUser:Function,
        name:String,
        title:String  
    }

}
</script>

<style scoped>
#child{
    border: 1px solid green;
    padding: 10px;
}

</style>