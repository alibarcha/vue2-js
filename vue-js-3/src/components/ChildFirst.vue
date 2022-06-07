<template>
        <div id="first-child">
            <h2>this is child component</h2>
            <a href="#">{{title}}</a>
            <span>:{{20+10}}</span>
        </div>
</template>

<script>
export default {
    // export child component
    name:'ChildFirst',
    components:{

    },
    data(){
        return {
            title:'javascript'
        }
    },
    props:{

    },
    computed:{

    },
    methods:{

    }

}
</script>

<style>
#first-child{
    background-color: gray;
    padding: 30px;
    width: 300px;
    margin: 20px;
}

</style>