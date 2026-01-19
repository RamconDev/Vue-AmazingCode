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
        <div class="field">
            <label for="title">Title</label>
            <input v-model="movie.title" type="text" id="title">
        </div>

        <div class="field">
            <label for="duration">Duration</label>
            <input v-model="movie.duration" type="number" id="duration">
        </div>

        <div class="field">
            <label for="director">Director</label>
            <input v-model="movie.director" type="text" id="director">
        </div>

        <div class="submit">
            <input type="submit" value="Enviar">
        </div>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-width: 500px;
        margin: auto;
    }
    form .field {
        display: grid;
        grid-template-columns: 120px auto;
        gap: 10px;
    }
    form .submit input {
        width: 100%;
    }
</style>