<script setup>
    import { reactive } from 'vue';

    const movie = reactive({
        title: "",
        duration: 0,
        director: ""
    });

    const handleSubmit = () => {
        if ( !movie.title || !movie.duration || !movie.director ) {
            alert("Llena todos los campos del formulario");
            return
        }

        console.log(movie);
    }
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="title">Title</label>
            <input v-model="movie.title" type="text" id="title">
        </div>

        <div>
            <label for="duration">Duration</label>
            <input v-model="movie.duration" type="number" id="duration">
        </div>

        <div>
            <label for="director">Director</label>
            <input v-model="movie.director" type="text" id="director">
        </div>

        <div>
            <input type="submit" value="Enviar">
        </div>
    </form>
</template>

<style scoped>
    form div {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
</style>