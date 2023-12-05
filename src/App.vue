<script>
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'
import { store } from "./store.js"
import axios from 'axios';



export default {
  components: {
    appHeader,
    appMain
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
  },
  methods: {
    getMovie(movieOrtv) {
      let indirizzo = this.store.apiUrl + movieOrtv + "?api_key=" + this.store.apiKey + "&query=" + this.store.searchString + "&language=it-IT";
      axios.get(indirizzo).then(risultato => {
        // rimuovere if se possibile mettere una variabile passata dalla funzione
        if (movieOrtv == 'movie') {
          this.store.movie = risultato.data.results;
        }
        else if (movieOrtv == 'tv') {
          this.store.tv = risultato.data.results;
        };
        console.log(risultato.data.results);
      })
    }
  }
}
</script>

<template>
  <appHeader @search="getMovie('movie'), getMovie('tv')" />
  <appMain />
</template>

<style scoped></style>
