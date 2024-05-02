import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useScrollPositionStore = defineStore('scrollPosition', () => {
  const x = ref(0);
  const y = ref(0);
  return { x, y };
});
