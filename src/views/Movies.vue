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
            <router-link :to="{ name:'MoviesDetail', params: { movieTitle:movie.title } }">
                Title: {{  movie.title }}
            </router-link>
            <p>Director: {{ movie.director }}</p>
            <p>Duration: {{ movie.duration }}</p>
        </li>
    </ul>
</template>

<style scoped>

</style>