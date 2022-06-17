<template>
    <div id="fetch">
        <h3>List of Data</h3>
        <!-- table -->
        <table border="1" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.website}}</td>
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
    name:'FetchApi',
    data(){
        return{
            list:undefined 
        }
    },

    mounted(){
       
            Vue.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                this.list=response.data
                console.log(response.data)
            });      
    }

}
</script>

<style scoped>
table{
    width: 60%;
    margin: 30px auto;
}
th,td{
    padding: 20px;
}

</style>