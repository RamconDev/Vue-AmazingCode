<script setup>
    let condition = false;
    let condition2 = true;
</script>

<template>
    <h2>v-if</h2>
    <p>Condicionales para mostrar contenido dinamicamente</p>

    <span>Condicion 1: {{ condition }}</span>
    <span>Condicion 2: {{ condition2 }}</span>

    <h5 v-if="condition">Se cumple la condicion 1</h5>
    <h5 v-else-if="condition2">No Se cumple la condicion 1 pero si la 2</h5>
    <h5 v-else>No se cumplen las condiciones</h5>
</template>

<style scoped>
    span {
        display: block;
    }
</style>