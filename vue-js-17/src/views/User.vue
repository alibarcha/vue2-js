<template>
    <div id="user">
        <h2>User Component</h2>
        <h3>User ID is {{userId}}</h3>
    </div>
</template>

<script>
export default {
    name:'User',
    data(){
        return {
            userId:this.$route.params.id
        }
    }

}
</script>

<style>

</style>