<script setup>
    import { ref } from 'vue';

    let number = ref(0);

    const addOne = () => {
        number.value++;
    }
</script>

<template>
    <h2>Evento Click</h2>
    <p>Agregar evento click para ejecutar funcion</p>
    <h4>{{ number }}</h4>
    <h3 class="pointer" @click="addOne">Click Aqui (sumar 1)</h3>
</template>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>