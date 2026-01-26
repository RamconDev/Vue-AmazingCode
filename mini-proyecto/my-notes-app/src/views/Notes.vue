<script setup>
import { useNoteStore } from '../stores/noteStore';

  const noteStore = useNoteStore();
</script>

<template>
  <section id="notes-page">
    <h2>Notes</h2>
    <ul class="note-list">
      <li v-for="note in noteStore.notes" :key="note.id">
        {{ note.title }}
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
      font-family: 'Courier New', Courier, monospace;
      font-size: 16px;
      text-align: center;
      text-transform: uppercase;
    }

    .note-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      list-style: none;
      li {
        border: 1px solid grey;
        border-radius: 8px;
        padding: 12px 15px;
      }
    }
  }
</style>