<script setup>
    let movies = ["Lor of the rings", "Star Wars", "Dune"]
</script>

<template>
    <h2>v-for</h2>
    <p>bucle for para mostrar elementos</p>
    <ul>
        <li v-for="(movie, index) in movies" :key="movie">
            <span>{{ index + 1 }} - {{ movie }}</span>
        </li>
    </ul>
</template>

<style scoped>
    ul {
        list-style: disc;
        flex-direction: column;
    }
    li {
        padding: 2px 0px;
        border: none;
    }
</style>