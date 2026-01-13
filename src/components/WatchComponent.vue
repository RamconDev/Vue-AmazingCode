<script setup>
    import { ref, watch } from 'vue';

    const userName = ref({
        name: "Jose"
    });

    const setName = () => {
         userName.value.name = "Maria"
    }

    watch(userName, (newValue, oldValue) => {
        console.log("Codigo Ejecutado",newValue,oldValue)
    },
    {
        immediate: true,
        deep: true
    });
</script>

<template>
    <h3>Hola {{ userName.name }}</h3>
    <button @click="setName">Cambiar usuario</button>
</template>

<style scoped>

</style>