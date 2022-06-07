<template>
    <div id="child-two">
        <h3>This is child second component :) </h3>
        <button v-on:click="updateText" v-bind:disabled="disabled">update title</button><br>
        <a href="" >{{title}} : {{"java"}}</a>
        <small>:{{a+b}}</small><br><hr><br>
        <span>{{ok ? "yes -:)" : "No :"}}</span><br>
        <div v-html="html" ></div>
        <span v-text="title"></span>
    </div>
  
</template>

<script>
export default {
    name:'ChildSecond',
    data (){
        return {
            // properties
            title:'Vue Js 2022',
            a:10,
            b:40,
            ok:true,
            html:"<h3>this is heading three..</h3>",
            disabled:false
        }

    },
    methods:{
        // functions
        updateText(){
            this.title="vue is a javascript framework 2022"
            this.ok=!this.ok
        }


    },
    computed:{
        // complex calculations

    },

    props:{
        // props

    }

}
</script>

<style>
#child-two{
    background: lightgreen;
    padding: 20px;
    width: 200px;
    margin: 20px;
}

</style>