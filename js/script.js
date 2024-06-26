import { slides } from "./data.js";

const {createApp} = Vue;
createApp({
    data() {
      return {
        slides,
        indexofactive : 0,
        poused : null,
      }
    },
    methods : {
        showPrev(){
            this.indexofactive === 0 ? this.indexofactive = slides.length - 1 : this.indexofactive--
        },
        showNext(){
            this.indexofactive === slides.length - 1 ? this.indexofactive = 0 : this.indexofactive++
        },
        showClicked(index){
            this.indexofactive = index
        },
        pouseCarosell (){
            clearInterval(this.poused)
        },
        playCarosell (){
            this.poused = setInterval(this.showNext, 3000)
        }
    },
    mounted () { 
            this.poused = setInterval(this.showNext, 3000);             
    }
  }).mount('#app');