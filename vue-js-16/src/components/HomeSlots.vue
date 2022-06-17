<template>
   <div id="home">
      

        <child-slot>
            <!-- img -->
            <template v-slot:imageBox>
                <img src="../assets/Portfolio/01.jpg" alt="">
            </template>
            <!-- title -->
            <template v-slot:title>
                <h2>Special title treatment</h2>
            </template>
                <!-- content -->
            <template v-slot:content>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, et in nulla qui nobis expedita.</p>
                <a v-bind:href="link1">Learn More</a>
            </template>
        </child-slot>

             <child-slot>
            <!-- img -->
            <template v-slot:imageBox>
                <img src="../assets/Portfolio/03.jpg" alt="">
            </template>
            <!-- title -->
            <template v-slot:title>
                <h2>Special title </h2>
            </template>
                <!-- content -->
            <template v-slot:content>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, et in nulla qui nobis expedita.</p>
                 <a v-bind:href="link1">Learn More</a>
            </template>
        </child-slot>

           <child-slot>
            <!-- img -->
            <template v-slot:imageBox>
                <img src="../assets/Portfolio/02.jpg" alt="">
            </template>
            <!-- title -->
            <template v-slot:title>
                <h2>Special title treatment</h2>
            </template>
                <!-- content -->
            <template v-slot:content>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, et in nulla qui nobis expedita.</p>
                 <a v-bind:href="link1">Learn More</a>
            </template>
        </child-slot>

   </div>
</template>

<script>
import Slots from './Slots.vue'
export default {
    name:'HomeSlots',
    components:{
        'child-slot':Slots,
    },
    data(){
        return {
            link1:'https://vuejs.org/guide/essentials/watchers.html#stopping-a-watcher'
        }
    }


}
</script>

<style scoped>
 #home{
    width: 90%;
    margin: 20px auto;
    border: 1px solid lightgreen;
    /* background: #eee; */
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
 }

</style>