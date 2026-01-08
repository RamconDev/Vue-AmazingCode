<script setup>
    let status = true;
</script>

<template>
    <!-- Clase con condiciones If ternario -->
    <span v-bind:class="status ? 'active' : 'unactive'"></span>

    <!-- Varias clases condicionadas -->
    <span v-bind:class="{ unactive: true, active: !false }"></span>
</template>

<style scoped>
    .unactive {
        border-radius: 50%;
        display: inline-block;
        background-color: black;
        height: 80px;
        width: 80px;
    }
    .active {
        border-radius: 50%;
        display: inline-block;
        background-color: yellow;
        height: 80px;
        width: 80px;
    }
</style>