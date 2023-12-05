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
    // recupera film o serie con axios
    // posso passare array in store nella funzione?
    getMovie(movieOrtv) {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/' + movieOrtv,
        params: {
          query: store.searchString,
          include_adult: 'false',
          language: store.lingua,
          page: '1',
          api_key: store.apiKey
        },
        headers: {
          accept: 'application/json',
        }
      };
      // trasformata in arrow function per permettere passaggio dei dati
      axios.request(options).then((response) => {

        if (movieOrtv == 'movie') {
          this.store.movie = response.data.results;
        }
        else if (movieOrtv == 'tv') {
          this.store.tv = response.data.results;
        };
        console.log(response.data.results);

        // potrei togliere le tonde visto che ha un elemento solo nelle tonde
      }).catch((error) => { console.error(error); });
    }
  }
}
</script>

<template>
  <appHeader @search="getMovie('movie'), getMovie('tv')" />
  <appMain />
</template>

<style scoped></style>
