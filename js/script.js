import { slides } from "./data.js";

const {createApp} = Vue;
createApp({
    data() {
      return {
        slides,
      }
    },
    methods : {
        
    }
  }).mount('#app');