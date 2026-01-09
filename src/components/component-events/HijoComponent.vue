<script setup>
    import { ref } from 'vue';

    const emit = defineEmits([
        "login"
    ]);

    const userName = ref("HD");

    const login = () => {
        emit("login", userName.value)
    }
</script>

<template>
    <h4>Componente Hijo</h4>

    <p>nombre de usuario: {{ userName }}</p>

    <button @click="login">Login</button>
</template>

<style scoped>

</style>