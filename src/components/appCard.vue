<script>
import { store } from "../store.js"
import axios from 'axios';



export default {
    name: "appCard",
    props: {
        info: Array,
        movieOrShow: String,
        title: String

    },
    data() {
        return {
            store,
            over: null,
        }
    },
    methods: {

        // recupera immaigni bandiera
        getImageFlag(img) {
            return new URL(`../../node_modules/svg-country-flags/svg/${img}.svg`, import.meta.url).href
        },
        // recupera immaigni poster
        getImagePoster(img) {
            return new URL(store.posterUrl + store.posterSize + img, import.meta.url).href
        },
        // tronca testo e aggiunge puntini dopo N caratteri 
        truncateText(text, length) {
            if (text.length <= length) {
                return text;
            }
            return text.substr(0, length) + '\u2026'
        },
        // repcupera gli attori 
        getActors(movieOrtv, idMovie, nActors, posizione) {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/${movieOrtv}/${idMovie}/credits`,
                params: {
                    language: store.lingua,
                    api_key: store.apiKey
                },
                headers: {
                    accept: 'application/json',
                }
            };
            axios.request(options).then((response) => {
                // creo variabile d'appoggio
                let arrayTemp = [];
                // cambia array a seconda del tipo di contenuto richiesto 
                if (movieOrtv == 'movie') {
                    arrayTemp = response.data.cast;
                    // restituisce N elementi nell'array
                    arrayTemp = arrayTemp.splice(-nActors);
                    // creo un array vuoto lungo un come l'array dei film
                    store.arrayActorsMovie.length = store.movie.length;
                    // creo attore fantasma con messaggio e pusho nell'array attori
                    if (arrayTemp.length == 0) {
                        arrayTemp.push({ original_name: "Informazioni attori mancanti" })
                    }
                    // pusha nella posizione indice l'array in store

                    this.store.arrayActorsMovie[posizione] = arrayTemp;

                }
                else if (movieOrtv == 'tv') {
                    arrayTemp = response.data.cast;
                    arrayTemp = arrayTemp.splice(-nActors);

                    if (arrayTemp.length == 0) {
                        arrayTemp.push({ original_name: "Informazioni attori mancanti" })
                    }
                    this.store.arrayActorsTv[posizione] = arrayTemp;
                };
                // controllo in console 
                console.log(posizione);
                console.log(idMovie);
            }).catch((error) => { console.error(error); });
        },
        //TODO: aggiungere scroll alla pressione continua 
        slideRight(title) {
            document.querySelectorAll('[type=' + title + ']')[0].scrollLeft += 200;
        },
        slideLeft(title) {
            document.querySelectorAll('[type=' + title + ']')[0].scrollLeft -= 200;
        },
    },
    mounted() {

    },
    updated() {
    },
}

</script>

<template>
    <!-- container riga -->
    <div class="container position-relative">


        <!-- riga elementi -->

        <!-- pulsanti slider orizontal bar  -->
        <h2 class="text-uppercase textRed fw-bolder mb-4">
            {{ title }}</h2>
        <div @click="slideLeft(title)" class=" slider position-absolute top-50 start-0 translate-middle">
            <font-awesome-icon icon="chevron-left" size="xl" />
        </div>
        <div @click="slideRight(title)" class=" slider position-absolute top-50 start-100 translate-middle">
            <font-awesome-icon icon="chevron-right" size="xl" />
        </div>
        <div id="row" class="row overflow-x-auto flex-nowrap hideScrollBar gap-3 position-relative" :type="title">



            <!-- CARD che cicla // mouseover rivela il testo-->
            <template v-for="(element, index) in info">
                <!-- restituisce il risultato se qualche genere dell'elemento è contenuto nell'array dei selected -->
                <div id="card"
                    v-if="store.selectedGenresIds.some(r => element.genre_ids.includes(r)) || store.allGenres == true"
                    @mouseover="this.over = index" @mouseleave="this.over = null"
                    class="d-flex flex-column flex-wrap position-relative">

                    <!-- card contenuto -->
                    <div id="content" class="d-flex flex-column overflow-auto text-white hideScrollBar">

                        <!-- titolo -->
                        <p><strong>Titolo:</strong> {{ element.title }}{{ element.name }}</p>

                        <!-- titolo originale -->
                        <p><strong>Titolo originale:</strong> {{ element.original_title }}{{
                element.original_name }}
                        </p>
                        <!-- ciclo tutta la lista dei generi e stampo solo quelli presenti nell'array dei generi del film -->
                        <div class="mb-3">

                            <span class="badge text-bg-secondary ms-1" v-for="genere in store.movieGenres">
                                <span v-if="element.genre_ids.includes(genere.id)">{{ genere.name
                                    }}</span></span>
                        </div>
                        <!-- immagine bandierina -->
                        <div class="d-flex align-items-baseline">
                            <p class="me-2"><strong>Lingua:</strong></p>
                            <img id="flag" :src="getImageFlag(element.original_language)" alt="">
                        </div>

                        <!-- stelle voto -->
                        <div id="stelle" class="d-flex align-items-baseline">
                            <p class="fw-bold me-2">Voto:</p>
                            <font-awesome-icon icon="fa-solid fa-star"
                                v-for="n in Math.ceil(element.vote_average / 2)" />
                            <font-awesome-icon icon="fa-regular fa-star"
                                v-for="n in (5 - Math.ceil(element.vote_average / 2))" />
                        </div>
                        <!-- attori  ---------------------------------------->
                        <div class="d-flex mb-2">
                            <div>
                                <p class="me-2 fw-bold">Attori:</p>

                                <!-- uso click per evitare il ripetersi a ogni "svelamento" della funzione, fixare magari con un array di controllo -->
                                <div @click="getActors(movieOrShow, element.id, 5, index)" class="fw-light click">(show)
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <!-- genero due elenchi e mostro solo quello corretto, DA FIXARE/OTTIMIZZARE -->
                                <span v-if="this.movieOrShow == 'movie'"
                                    v-for="attore in this.store.arrayActorsMovie[index]">{{
                attore.original_name }}</span>
                                <span v-if="this.movieOrShow == 'tv'"
                                    v-for="attore in this.store.arrayActorsTv[index]">{{
                attore.original_name }}</span>
                            </div>

                        </div>
                        <!-- decrizione che si tronca dopo un tot -->
                        <div><span class="fw-bold me-2">Trama:</span>{{ truncateText(element.overview, 200) }}
                        </div>
                    </div>

                    <!-- copertina a scomparsa ------------------------------------------------------------------>
                    <div id="poster" :class="(this.over == index) ? 'cardActive' : 'cardInactive'"
                        class="position-absolute top-0 start-0 h-100 w-100">

                        <!-- immagine poster -->
                        <img v-if="element.poster_path != null" :src="getImagePoster(element.poster_path)" alt=""
                            class="h-100 w-100">

                        <!-- poster fittizio se manca in database ------------------------------------------------------------->
                        <div class="px-3 bg-black text-white d-flex flex-column align-items-center justify-content-center h-100 w-100 position-absolute top-0 start-0"
                            v-if="element.poster_path == null">
                            <p class="fw-bold text-center">{{ element.title }}{{ element.name }}</p>
                            <p>POSTER MANCANTE</p>
                            <font-awesome-icon icon="face-frown" size="lg" />
                        </div>

                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scooped>
/*   */
/**
bottone slider

*TODO: aggiungere effetto al click
**/
.slider {
    width: 3rem;
    z-index: 99999;
    color: #d13b49;
    border-radius: 50%;
    background-color: black;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

#card {
    margin-bottom: 1rem;
    height: 30rem;
    width: 21rem;
    background-color: black;
    z-index: 1;
}

#content {
    padding: 3rem 2rem;
}

.cardActive {
    z-index: -1;
    opacity: 0.2;
}

.cardInactive {
    z-index: 3;
}

.hideScrollBar {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

.click:hover {
    cursor: pointer;
}

/* Hiding scrollbar for Chrome, Safari and Opera */
.hideScrollBar::-webkit-scrollbar {
    display: none;
}

#poster>img {
    aspect-ratio: auto;
    object-fit: cover;
}

#flag {
    width: 2rem;
}
</style>
