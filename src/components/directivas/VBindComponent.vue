<script setup>
    const attDinamico = "patata";
</script>

<template>
    <h2>v-bind</h2>
    <p>Agregar atributos de manera dinamica</p>
    <span>clase</span>
    <h5 v-bind:class="attDinamico">h5 con clase dinamica</h5>
    <h4 :id="attDinamico">h4 con id dinamico</h4>

    <input type="text" :value="attDinamico">
</template>

<style scoped>

</style>