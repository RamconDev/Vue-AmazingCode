<script setup>
    let movies = ["Lor of the rings", "Star Wars", "Dune"]
    let animals = [
    {
        id: 1,
        name: "dog",
    },
    {
        id: 2,
        name: "cat",
    },
    {
        id: 3,
        name: "bird",
    }
]
</script>

<template>
    <h2>v-for</h2>
    <p>bucle for para mostrar elementos</p>
    <ul>
        <li v-for="(movie, index) in movies" :key="movie">
            <span>{{ index + 1 }} - {{ movie }}</span>
        </li>
    </ul>

    <ul>
        <li v-for="animal in animals" :key="animal.id">
            {{ animal.name }}
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