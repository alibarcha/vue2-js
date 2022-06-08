<template>
     <div id="container">
         <!-- props data -->
            <h2>user :{{name}}</h2>
            <h2>client: {{client}}</h2>

            <h3 v-for="user in users" :key="user.id">
                {{user.name}}  --  {{user.email}}
            </h3>
     </div>
</template>

<script>
export default {
    name:'PropsApp',
    data(){
        return {
           

        }
    },
  
    props:['name','client','users'],
    methods:{

    },
    computed:{

    }
}
</script>

<style>

</style>