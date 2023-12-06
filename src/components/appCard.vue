<script>
import { store } from "../store.js"

export default {
    name: "appCard",
    props: {
        info: Array,
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
        }
    },
    mounted() {

    }
}

</script>

<template>
    <!-- container riga -->
    <div class="container">
        <!-- titolo con v-for appare quando c'è contenuto nella ricerca -->
        <h2 v-show="store.movie != ''" class="text-uppercase text-white fw-bolder mb-4">{{ title }}</h2>

        <!-- riga elementi -->
        <div id="row" class="row overflow-x-auto flex-nowrap hideScrollBar">

            <!-- card che cicla // mouseover rivela il testo-->
            <div id="card" v-for="(element, index) in info" @mouseover="this.over = index" @mouseleave="this.over = null"
                class="d-flex flex-column flex-wrap position-relative">

                <!-- card contenuto -->
                <div id="content" class="d-flex flex-column overflow-auto hideScrollBar text-white">
                    <!-- titolo -->
                    <p><strong>Titolo:</strong> {{ element.title }}{{ element.name }}</p>
                    <!-- titolo originale -->
                    <p><strong>Titolo originale:</strong> {{ element.original_title }}{{ element.original_name }}</p>
                    <!-- immagine bandierina -->
                    <div class="d-flex align-items-baseline">
                        <p class="me-2"><strong>Lingua:</strong></p>
                        <img id="flag" :src="getImageFlag(element.original_language)" alt="">
                    </div>
                    <!-- stelle voto -->
                    <div id="stelle" class="d-flex align-items-baseline">
                        <p class="fw-bold me-2">Voto:</p>
                        <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 0" />
                        <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 1" />
                        <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 2" />
                        <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 3" />
                        <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 4" />
                    </div>
                    <!-- decrizione che si tronca dopo un tot -->
                    <p>{{ truncateText(element.overview, 200) }}</p>
                </div>
                <!-- copertina a scomparsa -->
                <div id="poster" :class="(this.over == index) ? 'cardActive' : 'cardInactive'"
                    class="position-absolute top-0 start-0 h-100 w-100">
                    <!-- immagine poster -->
                    <img v-if="element.poster_path != null" :src="getImagePoster(element.poster_path)" alt=""
                        class="h-100 w-100">
                    <div class="px-3 bg-black text-white d-flex flex-column align-items-center justify-content-center h-100 w-100 position-absolute top-0 start-0"
                        v-if="element.poster_path == null">
                        <p class="fw-bold text-center">{{ element.title }}{{ element.name }}</p>
                        <p>POSTER MANCANTE</p>
                        <font-awesome-icon icon="face-frown" size="lg" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scooped>
#card {
    margin-right: calc(10% / 3);
    margin-bottom: 1rem;
    height: 30rem;
    width: 21rem;
    background-color: black;
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