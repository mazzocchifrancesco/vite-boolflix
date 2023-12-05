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
        getImageFlag(img) {
            return new URL(`../../node_modules/svg-country-flags/svg/${img}.svg`, import.meta.url).href
        },
        getImagePoster(img) {
            return new URL(store.posterUrl + store.posterSize + img, import.meta.url).href
        },

        // scroll orizontale 
        scroll(id) {
            const scrollContainer = document.getElementsById(id);

            scrollContainer.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                scrollContainer.scrollBy({
                    left: evt.deltaY < 0 ? -30 : 30,
                });
            });
        }

    },
    mounted() {

    }
}

</script>

<template>
    <div class="container">
        <h2 v-show="store.movie != ''" class="text-uppercase text-white fw-bolder mb-4">{{ title }}</h2>

        <!-- riga elementi -->
        <div id="row" class="row overflow-x-auto flex-nowrap @wheel=">

            <!-- card che cicla -->
            <div id="card" v-for="(element, index) in info" @mouseover="this.over = index" @mouseleave="this.over = null"
                class="d-flex flex-column flex-wrap position-relative">

                <!-- card contenuto -->
                <div id="content" class="d-flex flex-column overflow-auto">
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
                    <!-- decrizione -->
                    <p>{{ element.overview }}</p>
                </div>
                <!-- copertina a scomparsa -->
                <div id="poster" v-if="this.over != index" class="position-absolute top-0 start-0 h-100 w-100">
                    <!-- immagine poster -->
                    <img v-if="element.poster_path != null" :src="getImagePoster(element.poster_path)" alt=""
                        class="h-100 w-100">
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
    background-color: lightgrey;
}

#content {
    padding: 3rem 2rem;
    /* Hiding scrollbar for IE, Edge and Firefox */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

/* Hiding scrollbar for Chrome, Safari and Opera */
#content::-webkit-scrollbar {
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