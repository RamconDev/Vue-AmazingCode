<script setup>
</script>

<template>
    <section>
        <h3>Componente Hijo</h3>

        <slot name="top"></slot>

        <slot>
            <span><strong>Texto por defecto del slot</strong></span>
        </slot>

        <slot name="bottom"></slot>
    </section>
</template>

<style scoped>

</style>