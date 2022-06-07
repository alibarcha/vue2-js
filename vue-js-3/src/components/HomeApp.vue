<template>
    <div id="home-app">
        <h2>home / main components</h2>

        <div id="box">
              <ChildFirst/>
              <ChildSecond/>
             <ChildFirst/>
              <ChildSecond/>

                   <ChildFirst/>
              <ChildSecond/>
             <ChildFirst/>
              <ChildSecond/>
        </div>
       <!-- <ChildSecond/>
       <ChildSecond/> -->
      
    </div>
</template>

<script>
// import 1 child components
import ChildFirst from './ChildFirst.vue'
// import second child component
import ChildSecond from './ChildSecond.vue'
export default {
    name:'HomeApp',
    components :{
        ChildFirst,
        ChildSecond,

    }

}
</script>

<style>
#home-app{
    background: #eee;
    min-height: 100vh;
}
#box{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

</style>