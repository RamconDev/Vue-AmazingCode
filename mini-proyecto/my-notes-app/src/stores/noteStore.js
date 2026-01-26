import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
  const notes = ref([
    {
      id: "1",
      title: "Ir al médico",
      marked: false
    },
    {
      id: "2",
      title: "Contraseña del wifi: 123456",
      marked: false
    },
  ]);

  const createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  const addNote = (title) => {
    notes.value.unshift({
      id: createId,
      title: title,
      marked: false
    });
  }

  return {
    notes,
    addNote
  }
})