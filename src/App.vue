<script setup>
    import VModelComponent from './components/directivas/VModelComponent.vue';
    import VBindComponent from './components/directivas/VBindComponent.vue';
    import ClickComponen from './components/eventos/ClickComponen.vue';
    import VariableReactiva from './components/VariableReactiva.vue';
    import CambiarClasesDinamicamente from './components/CambiarClasesDinamicamente.vue'
    import VIfCopmponen from './components/directivas/VIfCopmponen.vue';
    import VForComponent from './components/directivas/VForComponent.vue';
    import PadreComponent from './components/props/PadreComponent.vue';
    import PadreEventComponent from './components/component-events/PadreEventComponent.vue';
</script>

<template>
    <h2>Componen Event</h2>
    <PadreEventComponent></PadreEventComponent>

    <h2>Props</h2>
    <PadreComponent></PadreComponent>

    <h2>Clases Dinamicas</h2>
    <CambiarClasesDinamicamente></CambiarClasesDinamicamente>

    <h2>Directivas</h2>
    <ul>
        <li>
            <VForComponent></VForComponent>
        </li>
        <li>
            <VIfCopmponen></VIfCopmponen>
        </li>
        <li>
            <VModelComponent></VModelComponent>
        </li>
        <li>
            <VBindComponent></VBindComponent>
        </li>
    </ul>

    <h2>NPI</h2>
    <ul>
        <li>
            <VariableReactiva></VariableReactiva>
        </li>
    </ul>

    <h2>Eventos</h2>
    <ul>
        <li>
            <ClickComponen></ClickComponen>
        </li>
    </ul>
</template>


<style>
    h2 {
        text-decoration: underline;
        text-transform: uppercase;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
    ul li {
        border: 1px solid white;
        padding: 20px;
    }
    ul li p {
        max-width: 300px;
    }
</style>