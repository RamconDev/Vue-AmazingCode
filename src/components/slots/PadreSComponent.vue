<script setup>
    import HijoSComponent from './HijoSComponent.vue';
</script>

<template>
    <section>
        <h3>Componente Padre</h3>

        <p>enviar codigo html desde el componente padre al hijo</p>
        
        <HijoSComponent>
            <h5>Contenido desde el padre como slot</h5>
        </HijoSComponent>

        <HijoSComponent>
            <template v-slot:bottom>
                <h5>BOTTOM</h5>
            </template>
            
            <template v-slot:top>
                <h5>TOP</h5>
            </template>
        </HijoSComponent>
    </section>
</template>

<style scoped>

</style>