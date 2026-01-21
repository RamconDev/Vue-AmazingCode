import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore("MovieStore", () => {
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
    ]);

    const addMovie = (movie) => movies.value.push(movie)

    const getMovie = (movieTitle) => {
        return movies.value.find((movie) => movie.title === movieTitle);
    }

    return {
        movies,
        addMovie,
        getMovie
    }
}, {
    persist: true
});