<template>
    <div id="home">
        <h1 id="demo">{{name}}</h1>
    </div>
</template>

<script>
export default {
    name:'HomeApp',
    data(){
        return {
            name:'william son'

        }
    },
    methods:{

    },
    // life cycle methods
    beforeCreate(){
        this.name="sam"
        console.warn("before creat",this.name)
        // alert("before created")
    },
    created(){
        // update name
        this.name="steve job"
        console.warn("created",this.name)
       
    },
    beforeMount(){
        console.warn("before mount . html not load" , this.$el,document.getElementById("demo"))
    },
    mounted(){
        // Dom modification in mounted
        console.warn("mounted After html loaded then call mounted ",this.$el,document.getElementById("demo"))
        this.$el.style.background="#eee"
    }

}
</script>

<style>

</style>