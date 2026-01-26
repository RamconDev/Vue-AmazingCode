<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/noteStore';

const noteStore = useNoteStore();

const handleSubmit = () => {
  noteStore.addNote(title.value);
  title.value = "";
};

  const title = ref("");
</script>

<template>
  <section>
    <form class="note-form" @submit.prevent="handleSubmit">
      <input type="text" class="note-title" placeholder="Nueva nota" v-model="title">
      <button class="create-button">+</button>
    </form>
  </section>
</template>

<style scoped>
  section {
    padding: 30px 0px;
    form {
      display: flex;
      gap: 10px;
    }
  }
</style>