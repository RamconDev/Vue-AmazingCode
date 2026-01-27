import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
  // https://beeceptor.com/crud-api/
  const API_URL = "https://ca63eb09f8f823f7e80b.free.beeceptor.com/api/notes";

  const notes = ref([]);
  const loading = ref(false);
  const error = ref(false);

  const getNotes = async () => {
    try {
      loading.value = true;

      const response = await fetch(API_URL);
      const data = await response.json();
      notes.value = data;

      loading.value = false;
      error.value = false;
    } catch (e) {
      loading.value = false;
      error.value = true;
    }
  }

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
    loading,
    error,
    addNote,
    getNotes
  }
}, {
  persist: true
});