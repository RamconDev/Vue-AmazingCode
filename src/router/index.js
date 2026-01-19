import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import MovieCreate from "../views/MovieCreate.vue";

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
            name: "movies",
            component: Movies
        },
        {
            path: "/movies/create",
            name: "moviesCreate",
            component: MovieCreate
        }
    ]
});

export default router;