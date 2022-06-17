<template>
     <div id="main">
            <h2>Form data </h2>

            <form id="form" action="" method="post" v-on:submit="submitData">
                <input type="text" placeholder="Title" v-model="items.title">
                <input type="text" placeholder="Authore" v-model="items.author">
                <button type="submit">Post Data</button>
            </form>
           <p> <b>Title:</b> {{items.title}}</p>  
           <p><b>Author:</b> {{items.author}}</p>
     </div>
</template>


<script>
 
 import Vue from 'vue'
 import VueAxios from 'vue-axios'
 import axios from 'axios'
 Vue.use(VueAxios,axios)

export default {
    name:'PostData',
    data(){
        return {
            items:{
                title:null,
                author:null,
            }
        }
    },
    methods:{
       submitData(e){

            this.axios.post('http://localhost:3000/posts',this.post)
            .then(function (result){
                console.log(result)
            })

           console.warn(this.items)
            e.preventDefault()
       }

    }

}
</script>

<style scoped>
 #form{
    display: flex;
    flex-direction: column;
    background: #eee;
    width: 50%;
    margin: 20px auto;
    /* align-items: center; */
    padding: 25px;
 }
 input{
    padding: 15px;
    margin: 20px 0;
 }
 button{
    background: #222;
    color: white;
    padding: 15px 0;
    cursor: pointer;
    margin-top: 10px;
 }


</style>