<script setup>
    import { computed, ref } from 'vue';

    const userName = ref("asd");
    const nameLenght = computed(() => {
        return userName.value.length;
    })
</script>

<template>
    <input type="text" v-model="userName">
    <h5>Hola {{ userName }}</h5>
    <h6>el nombre tiene {{ nameLenght }} letras</h6>
</template>

<style scoped>

</style>