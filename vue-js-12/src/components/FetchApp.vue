<template>
    <div id="Api">
            <h3>second fetch api component</h3>

            <table border="1" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in users" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.userId}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.body}}</td>
                    </tr>
                </tbody>

            </table>

    </div>
</template>

<script>

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios'

Vue.use(VueAxios,axios)
export default {
    name:'FetchApp',
    data(){
        return {
            users:undefined

        }
    },

    mounted() {
        Vue.axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.users=response.data
            console.log(response.data)
        });

    }
}
</script>

<style scoped>
 table{
     background: #eee;
     width: 80%;
     margin: 30px auto;
 }
 th,td{
     padding: 20px;
 }
 table thead{
     background: lightgreen;
 }
 table tr:nth-of-type(even){
     background: white;
 }
    
</style>