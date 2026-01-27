<script setup>
import { onMounted } from 'vue';
import CreateNote from '../components/CreateNote.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCardComponent from '../components/NoteCardComponent.vue';
import { useNoteStore } from '../stores/noteStore';

  const noteStore = useNoteStore();

  onMounted(async () => {
    await noteStore.getNotes();
  })
</script>

<template>
  <HeaderComponent/>
  <section id="notes-page">
    <h2>Notes</h2>
    
    <CreateNote></CreateNote>
    <h2 v-if="noteStore.loading">Cargando...</h2>
    <h2 v-if="noteStore.error">Algo ha ido mal</h2>
    <ul v-else class="note-list">
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCardComponent :note="note"></NoteCardComponent>
      </li>
      <li v-if="!noteStore.notes.length" class="empty-msg">
        <p>No hay nada que mostrar, crea una nota.</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  #notes-page {
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;
    }

    .note-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      list-style: none;
    }
  }
</style>