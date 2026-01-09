<script setup>
    import HijoComponent from './HijoComponent.vue';

    const variable = "Texto desde una variable"

    const person = {
        name: "hector",
        age: 10
    }
</script>

<template>
    <HijoComponent msg="Mensaje desde padre"></HijoComponent>
    <HijoComponent :msg="variable" :person="person"></HijoComponent>
</template>

<style scoped>

</style>