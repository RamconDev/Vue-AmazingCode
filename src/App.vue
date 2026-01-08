<script setup>
    import { ref } from "vue";

    let number = ref(0);

    const addOne = () => {
        number.value++;
    }
</script>

<template>
    <h1>Hola a todos</h1>
    <h2 @click="addOne">{{ number }}</h2>
</template>

<!-- scoped: atributo para que los estilos solo se apliquen a al componente actual -->
<style scoped>
    .title {
        text-transform: uppercase;
        text-decoration: underline;
    }
    h2 {
        cursor: pointer;
    }
</style>