<script setup>
    import { ref } from 'vue';
    
    const myValue = ref("Titulo Actual")
</script>

<template>
    <h2>v-model</h2>
    <p>cambiar valor de varios elementos de forma dinamica con un input</p>
    <h5>{{ myValue }}</h5>
    <input type="text" v-model="myValue">
</template>

<style scoped></style>