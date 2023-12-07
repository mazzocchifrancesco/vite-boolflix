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
                // lo sostituisco con valore non "rimosso"" 
                store.selectedGenres[indice] = 'rimosso';
                store.selectedGenresIds[indice] = 'rimosso';
            }
            else {
                // assegno l'oggetto a quella posizione
                store.selectedGenres[indice] = genere;
                store.selectedGenresIds[indice] = genere.id;

            }
            store.allGenres = false;
        },
        allGenresBtn() {
            store.allGenres = false;
        }
    }
}
</script>

<template>
    <nav class="bg-danger d-flex justify-content-between align-items-center px-5">
        <!-- logo -->
        <h1 class="fw-bolder text-white">Boolflix</h1>

        <!-- dropdown generi -->
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Seleziona i generi
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" @click="selectGenres(genere, index)"
                        v-for="(genere, index) in store.movieGenres">{{ genere.name }}</a></li>
            </ul>
        </div>


        <!-- bottone tutti i generi già cliccato -->
        <div>
            <input type="checkbox" class="btn-check" id="btn-check" checked autocomplete="off">
            <label @click="allGenresBtn()" class="btn btn-primary" for="btn-check">Tutti i generi</label>
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
