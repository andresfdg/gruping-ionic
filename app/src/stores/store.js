/* eslint-disable */
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      server: "https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws",
      auth: localStorage.getItem("type"),
      tiendas: "",
    };
  },

  actions: {
    increase(payload) {
      this.counter += payload;
    },
  },

  getters: {},
});

export default useStore;
