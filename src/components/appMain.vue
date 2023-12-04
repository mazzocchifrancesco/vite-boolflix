<script>
import axios from 'axios';
import { store } from "../store.js"
import appCard from "./appCard.vue"



export default {
    components: {
        appCard
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
            let indirizzo = this.store.apiUrl + this.store.apiKey + "&query=ritorno";
            axios.get(indirizzo).then(risultato => {
                this.store.movies = risultato.data.results;
                console.log(risultato.data.results);
            })
        }
    }
}
</script>

<template>
    <appCard v-for="film in store.movies " :info="film" />
</template>

<style scoped></style>
