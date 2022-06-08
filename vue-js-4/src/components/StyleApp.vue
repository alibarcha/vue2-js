<template>
    <div id="main">
        <h2>style component</h2>
        <h3 class="head3">Styling in css</h3>
        <h4 style="color:red">this is another styling in vue js</h4>
        <h5 v-bind:title="title">this is other styling stratigi in vue</h5>

        <h3 v-bind:style="{color:'red'}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, eum!</h3>
        <span v-bind:style="{background:'#eee',padding:'10px'}">Lorem ipsum dolor sit amet.</span>
            <br>
        <h5 v-bind:style="{color:colorKey}">Lorem ipsum dolor sit amet.</h5>

        <p v-bind:class="'container'">Lorem ipsum dolor sit amet.</p>
        <small v-bind:class="[ok? 'yes':'No']">this is small tag</small>
    </div>
</template>

<script>
export default {
    name:'StyleApp',
    components:{

    },
    data (){
        return {
            title:'vue 2 js course',
            colorKey:'green',
            ok:false
       
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
.head3{
    color: lightblue;
}

</style>