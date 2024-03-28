import { slides } from "./data.js";

const {createApp} = Vue;
createApp({
    data() {
      return {
        slides,
        indexofactive : 0
      }
    },
    methods : {

    }
  }).mount('#app');