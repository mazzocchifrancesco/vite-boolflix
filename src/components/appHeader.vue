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
            // controllo se in quella posizione è già presente l'oggetto con quel genere
            if (store.selectedGenres[indice] == genere) {
                // lo sostituisco con valore non definito 
                store.selectedGenres[indice] = undefined;
                store.selectedGenresIds[indice] = null;
            }
            else {
                // assegno l'oggetto a quella posizione
                store.selectedGenres[indice] = genere;
                store.selectedGenresIds[indice] = genere.id;

            }
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
