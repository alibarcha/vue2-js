<template>
    <div id="App">
        <table border="1" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>contact</th>
                </tr>
            </thead>
           
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.contact}}</td>
                </tr>
                
            </tbody>
        </table>

        <br><hr><br>

        <table border="1px solid">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Student email</th>
                    <th>Student contact</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stu in students"  :key="stu.id">
                    <td>{{stu.id}}</td>
                    <td>{{stu.stuName}}</td>
                    <td>{{stu.email}}</td>
                    <td>{{stu.contact}}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
export default {
    name:'HomeApp',
    data(){
        return {
            users:[
                {id:1,name:'william',email:'abc@gmail.com',contact:29203808},
                {id:2,name:'son',email:'gfjh@gmail.com',contact:33212108},
                {id:3,name:'steve',email:'cde@gmail.com',contact:123303808},
                {id:4,name:'elon',email:'xyz@gmail.com',contact:444303808},
                {id:5,name:'elon',email:'xyz@gmail.com',contact:444303808},
                {id:6,name:'joy',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'jeff',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'jordan',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'samin',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'roof',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'criss',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'luook',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'nayam',email:'snsk@gmail.com',contact:444303808},
                {id:6,name:'swis',email:'snsk@gmail.com',contact:444303808},
            ],

            students:[
                {id:202,stuName:'william',email:'abc@gmail',contact:82922},
                {id:202,stuName:'elon',email:'abc@gmail',contact:82922},
                {id:202,stuName:'musk',email:'abc@gmail',contact:82922},
                {id:202,stuName:'joy',email:'abc@gmail',contact:82922},
            ]

            

        }
    },
    methods:{

    },
    computed :{

    },
    props :{

    }

}
</script>

<style>
table{
    /* border: 1px solid; */
    width: 70%;
    margin: 20px auto;
    background: #eee;

}

</style>