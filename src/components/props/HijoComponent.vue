<script setup>
    defineProps({
        msg: String,
        // person: Object
        person: {
            name: String,
            age: Number
        }
    })
</script>

<template>
    <div class="hijo">
        <h5>** Componente Hijo **</h5>
    
        <p>{{ msg }}</p>

        <div v-if="person">
            <ul>
                <li>Name: {{ person.name }}</li>
                <li>Age: {{ person.age }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .hijo {
        border: 1px solid white;
        max-width: 300px;
    }
</style>