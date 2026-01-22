<script setup>
    import { ref } from 'vue';
    import HeaderComponent from '../components/HeaderComponent.vue';

    const counter = ref(1);
</script>

<template>
    <HeaderComponent/>

    <h2>HOME</h2>

    <h3 id="counter">Counter: {{ counter }} <button @click="counter++" id="counter-btn">+</button></h3>

</template>

<style scoped>

</style>