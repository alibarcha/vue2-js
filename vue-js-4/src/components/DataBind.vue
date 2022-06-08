<template>
        <div id="container">
         
            <h2>Data Binding in vue js</h2>
            <input v-model="data" type="text" placeholder="Enter Text here ..">
            <h2>{{data}}</h2>
            <textarea v-model="msg" placeholder="Enter Your Message.."></textarea>
            <h3>{{msg}}</h3>
            
        </div>
</template>

<script>
export default {
    name:'DataBind',
    data (){
        return {
            data:'Enter Text here ..',
            msg:'User Message '

        }
    },
    methods:{

    },
    computed:{

    },
    props:{

    }

}
</script>

<style scoped>
#container{
    background: #eee;
    width: 50%;
    margin: 40px auto;
    padding: 30px;
}
input,textarea{
    padding: 15px;
    width: 100%;
}
h2{
    text-align: center;
    padding: 10px 0;
    color: lightgreen;
    word-break: break-all;
}
h3{
    text-align: left;
    padding: 10px 0;
    color: #222;
    white-space: pre-line;
    word-break: break-all;
}


</style>