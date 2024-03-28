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
        showPrev(){
            this.indexofactive === 0 ? this.indexofactive = slides.length - 1 : this.indexofactive--
        },
        showNext(){
            this.indexofactive === slides.length - 1 ? this.indexofactive = 0 : this.indexofactive++
        }
    }
  }).mount('#app');