<script setup>

</script>

<template>
    <header class="header">
        <h1>Movies</h1>
        <nav>
            <ul class="nav-list">
                <li>
                    <router-link class="" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="" to="/movies">Movies</router-link>
                </li>
                <li>
                    <router-link class="" :to="{ name: 'MoviesCreate' }">Create Movie</router-link>
                </li>
            </ul>
        </nav>
    </header>    
</template>

<style scoped>
    header {
        display: grid;
        grid-template-columns:  200px auto;
    }
    header h1 {
        padding: 0;
        margin: 0;
    }
    
    header nav {
        margin: auto;
    }
    header nav ul li {
        border: none;
        background-color: white;
    }
    ul li a {
        color: #1f1f1f;
        font-weight: 700;
        transition: color .2s;
    }
    ul li a:hover {
        color: grey;
    }
</style>
