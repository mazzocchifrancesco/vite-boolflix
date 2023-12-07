<script>
import { store } from "../store.js"


export default {
    name: "appHeader",
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchString);
            this.$emit("search");
        },
        selectGenres(genere, indice) {

            if (store.selectedGenres.includes(genere, indice)) {
                store.selectedGenres.splice(indice, 1, undefined);
            }
            store.selectedGenres[indice] = genere;
        }
    }
}
</script>

<template>
    <nav class="bg-danger d-flex justify-content-between align-items-center px-5">
        <!-- logo -->
        <h1 class="fw-bolder text-white">Boolflix</h1>
        <!-- genres bar -->
        <div id="buttonContainer" class="d-flex flex-wrap gap-1 p-3">
            <!-- genero l'elenco dei bottoni  -->
            <button @click="selectGenres(genere, index)" class="btn btn-secondary p-1"
                v-for="(genere, index) in store.movieGenres"> {{ genere.name }}</button>
        </div>
        <!-- searchbar -->
        <div class="d-flex align-items-center" role="search">
            <!-- i due elementi che servono l'emit devono stare nello stesso contenitore, altrimenti dichiaro nell'export gli emit  -->
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                v-model="this.store.searchString">
            <button @click="search" class="btn btn-secondary" type="submit">Search</button>
        </div>
    </nav>
</template>

<style scoped>
nav {
    height: 5rem;
}
</style>
