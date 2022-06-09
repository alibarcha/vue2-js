<template>
    <div id="formApp">

        <h3>This is Another Submit Form</h3>
        
        <p v-if="error.length">
            <b>please correct the error</b>
            <ul>
                <li v-for="e in error" :key="e.id">
                    {{e}}
                </li>
            </ul>
        </p>

        <form action="" @submit="login">

        <input type="text" placeholder="Enter your Name" id="name" v-model="name">
        <input type="password" placeholder="Enter your password" id="password" v-model="password">

        <button>Submit Form</button>
        </form>
      

    </div>
</template>

<script>
export default {
    name:'FormApp',
    data (){
        return {
            error:[],
            name:null,
            password:null

        }
    },
    methods:{
        login:function(e){
            this.error=[]
            if(this.name && this.password){
                
                console.log("no error in form")
            }
            else{
                console.log("error in form")
            }
            if(!this.name){
                this.error.push("user name must required")
            }
            if(!this.password){
                this.error.push("password is must required")
            }
            console.warn("hello",this.error)

                e.preventDefault()

         
           
        }

    }

}
</script>

<style scoped>
    #formApp{
        background: #eee;
        padding: 30px;
        width: 40%;
        margin: 20px auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h3{
        text-align: center;
    }
    input{
        padding: 15px;
        width: 70%;
        margin: 20px;
    }
    button{
        background: lightgreen;
        padding: 10px 9px;
        width: 110px;
        margin: 10px auto;
        cursor: pointer;
    }
    button:focus{
        background: green;
        color: white;
    }
</style>