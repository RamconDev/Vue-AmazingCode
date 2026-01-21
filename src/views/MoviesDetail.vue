<script setup>
    import { useRoute } from 'vue-router';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import { useMovieStore } from '../stores/movieStore';
    import { watch } from 'vue';
    
    const route = useRoute();
    const movieStore = useMovieStore();

    let movieTitle = route.params.movieTitle;
    let movie = movieStore.getMovie(movieTitle);

    watch(
        () => route.params.movieTitle,
        () => {
            movieTitle = route.params.movieTitle;
            movie = movieStore.getMovie(movieTitle)
        }
    )
</script>

<template>
    <HeaderComponent/>

    <h2 v-if="!movie">La pelicula no existe.</h2>
    <div v-else>
        <h2>Title: {{  movie.title }}</h2>
        <h3>Director: {{ movie.director }}</h3>
        <h3>Duration: {{ movie.duration }}</h3>
    </div>

    <div>
        <router-link :to="{ name:'MoviesDetail', params: { movieTitle:'Up' } }">
            Title: {{  'Up' }}
        </router-link>
    </div>
</template>

<style scoped>

</style>