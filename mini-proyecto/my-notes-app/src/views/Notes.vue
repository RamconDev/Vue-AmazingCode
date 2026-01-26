<script setup>
import CreateNote from '../components/CreateNote.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCardComponent from '../components/NoteCardComponent.vue';
import { useNoteStore } from '../stores/noteStore';

  const noteStore = useNoteStore();
</script>

<template>
  <HeaderComponent/>
  <section id="notes-page">
    <h2>Notes</h2>
    
    <CreateNote></CreateNote>
    <ul class="note-list">
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCardComponent :note="note"></NoteCardComponent>
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