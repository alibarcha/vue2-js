<template>
    <div id="slot">
        <div class="card">
            <slot name="imageBox"></slot>
            <slot name="title"></slot>
            <hr>
            <slot name="content"></slot>
        </div>

      
       
    </div>
</template>

<script>
export default {
  name:'Slots',
}
</script>

<style scoped>
.card{
   /* border: 1px solid lightgreen;
   outline: 1px dotted #222; */
   width: 350px;
   padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  height: 430px;
}
.card:hover{
    transition-property: all;
    transition-duration: .2s;
    transition-timing-function: linear;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    
}
img{
    width: 100%;
    cursor: pointer;
}
h2{
    text-transform: capitalize;
    padding: 10px;
}
p{
    text-transform: capitalize;
    text-align: left;
    padding: 10px 0;
    line-height: 25px;
}
a{
    background: lightgreen;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 0;
    /* margin: 8px; */
    display: block;
    text-decoration: none;
    width: 60%;
}
</style>