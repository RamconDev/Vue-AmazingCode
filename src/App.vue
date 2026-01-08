<script setup>
    import { ref } from "vue";

    let number = ref(0);

    setInterval(() => {
        number.value++;
    }, 1000);
</script>

<template>
    <h1>Hola a todos</h1>
    <h2>{{ number }}</h2>
</template>

<!-- scoped: atributo para que los estilos solo se apliquen a al componente actual -->
<style scoped>
    .title {
        text-transform: uppercase;
        text-decoration: underline;
    }
</style>