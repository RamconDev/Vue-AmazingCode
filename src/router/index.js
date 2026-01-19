import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import MovieCreate from "../views/MoviesCreate.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/movies",
            name: "Movies",
            component: Movies
        },
        {
            path: "/movies/create",
            name: "MoviesCreate",
            component: MovieCreate
        }
    ]
});

export default router;