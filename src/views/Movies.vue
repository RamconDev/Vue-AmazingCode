<script setup>
    import { ref } from 'vue';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import { useMovieStore } from '../stores/movieStore';

    const movieStore = useMovieStore();
</script>

<template>
    <HeaderComponent/>

    <h2>MOVIES</h2>

    <ul>
        <li  v-for="movie in movieStore.movies" :key="movie.title" class="movie">
            <h2>{{ movie.title }}</h2>
            <p>Director: {{ movie.director }}</p>
            <p>Duration: {{ movie.duration }}</p>
        </li>
    </ul>
</template>

<style scoped>

</style>