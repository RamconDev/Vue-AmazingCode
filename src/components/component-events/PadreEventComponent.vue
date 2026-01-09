<script setup>
    import { ref } from 'vue';
    import HijoComponent from './HijoComponent.vue';

    const name = ref("");

    const setName = (e) => {
        name.value = e;
    }
</script>

<template>
    <h5>Hola {{ name }}</h5>

    <HijoComponent @login="setName"></HijoComponent>
</template>

<style scoped>

</style>