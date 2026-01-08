<script setup>
    const myId = "patata";
    const myValue = "patata";
</script>

<template>
    <h1 v-bind:id="myId">Hola a todos</h1>
    <h2 :id="myId">Hola a todos</h2>

    <input type="text" :value="myValue">
</template>


<style scoped></style>