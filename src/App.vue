<script setup>
    import HeaderComponent from "./components/HeaderComponent.vue"
    console.log('Probando')
</script>

<template>
    <HeaderComponent></HeaderComponent>
</template>

<!-- scoped: atributo para que los estilos solo se apliquen a al componente actual -->
<style scoped>
    .title {
        text-transform: uppercase;
        text-decoration: underline;
    }
</style>