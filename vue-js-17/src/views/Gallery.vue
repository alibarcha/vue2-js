<template>
   <div id="gallery">
        <h1>Gallery Page Content</h1>
        <div class="container">
            <div class="item"><img src="../assets/Portfolio/01.jpg" alt=""></div>
            <div class="item"><img src="../assets/Portfolio/02.jpg" alt=""></div>
            <div class="item"><img src="../assets/Portfolio/03.jpg" alt=""></div>
            <div class="item"><img src="../assets/Portfolio/04.jpg" alt=""></div>
            <div class="item"><img src="../assets/Portfolio/05.jpg" alt=""></div>
            <div class="item"><img src="../assets/Portfolio/06.jpg" alt=""></div>
        </div>
   </div>
</template>

<script>
export default {
    name:'Gallery'

}
</script>

<style scoped>
  #gallery{
    width: 80%;

    background: #eee;
    margin: auto;
     padding:30px;
    text-align: center;
 }
 
 .container{
    margin:30px auto;
    display: grid;
    grid-template-rows: 220px 220px 220px;
    grid-template-columns: 32% 32% 32%;
    grid-gap: 20px;
 }
 .container .item img{
    width: 100%;
    height: 100%;
 }
@media screen and (max-width:890px) {
.container{
    grid-template-columns: 50% 50% ;
 }
    
}

@media screen and (max-width:670px) {
.container{
    grid-template-columns: 90%  ; 
 }
    
}
</style>