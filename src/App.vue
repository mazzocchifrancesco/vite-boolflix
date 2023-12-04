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
    this.getMovie();
  },
  methods: {
    getMovie() {
      let indirizzo = this.store.apiUrl + this.store.apiKey + "&query=" + this.store.searchString;
      axios.get(indirizzo).then(risultato => {
        this.store.movies = risultato.data.results;
        console.log(risultato.data.results);
      })
    }
  }
}
</script>

<template>
  <appHeader @search="getMovie" />
  <appMain />
</template>

<style scoped></style>
