<script setup>
    import { ref } from 'vue';

    const movies = ref([
        {
            title: "The Lord Of The Rings",
            duration: "201 min",
            director: "Peter Jackson"
        },
        {
            title: "Inception",
            duration: "148 min",
            director: "Christopher Nolan"
        },
        {
            title: "Interstellar",
            duration: "169 min",
            director: "Christopher Nolan"
        }
    ])
</script>

<template>
    <h1>MOVIES</h1>
    <ul>
        <li  v-for="movie in movies" :key="movie.title" class="movie">
            <h2>{{ movie.title }}</h2>
            <p>Director: {{ movie.director }}</p>
            <p>Duration: {{ movie.duration }}</p>
        </li>
    </ul>
</template>

<style scoped>

</style>