<script setup>
    import { ref } from "vue";

    let number = ref(0);

    setInterval(() => {
        number.value++;
    }, 1000);
</script>

<template>
    <h2>Variable Reactiva</h2>
    <p>Ejecutar una funcion automaticamente</p>
    <h5>{{ number }}</h5>
</template>

<style scoped></style>