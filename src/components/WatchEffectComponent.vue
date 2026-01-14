<script setup>
    import { ref, watchEffect } from 'vue';

    const userName = ref("Nombre1");

    const setName = () => {
        userName.value = "Nombre2";
    }

    watchEffect(
        () => {
            console.log("Username modificado to: ", userName.value);
        }
    );
</script>

<template>
    <h3>Hola {{ userName }}</h3>

    <button @click="setName">Cambiar usuario</button>
</template>

<style scoped>

</style>