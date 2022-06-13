<template>
    <div id="pnf">
        <h1>404</h1>
        <br>
        <h3>File not found || Page not found</h3>
        <br><br>
        <p>The site configured at this address does not contain the requested file.</p>
        <br><br>
        <p>If this is your site, make sure that the filename case matches the URL.
        For root URLs (like <small>http://example.com/</small>) you must provide an index.html file.</p>
        <br><br>
        <a href="">Read the full documentation</a><br>
        <p> for more information about using <b>GitHub Pages.</b></p>

    </div>
</template>

<script>
export default {
    name:'PageNotFound'
}
</script>

<style scoped>
h1{
    font-size: 70px;
    font-weight: 100;
}
body{
    background: #eee;
}
 #pnf{
    width: 40%;
    text-align: center;
    margin: 80px auto;
 }
 p{
    color: rgba(0, 0, 0, 0.5);
 }

</style>