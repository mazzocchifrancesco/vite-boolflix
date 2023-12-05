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
        }
    },
    methods: {
        getImageFlag(img) {
            return new URL(`../../node_modules/svg-country-flags/svg/${img}.svg`, import.meta.url).href
        },
        getImagePoster(img) {
            return new URL(store.posterUrl + store.posterSize + img, import.meta.url).href
        },

    },
    mounted() {
    }
}

</script>

<template>
    <div class="container">
        <h2 v-show="store.movie != ''" class="text-uppercase">{{ title }}</h2>
        <div class="row">
            <!-- card che cicla -->
            <div id="card" v-for="element in info " class=" d-flex flex-column flex-wrap bg-white">
                <h4> {{ element.title }}{{ element.name }}</h4>
                <p> {{ element.original_title }}{{ element.original_name }}</p>
                <p> {{ element.original_language }}</p>
                <!-- immagine bandierina -->
                <img id="flag" :src="getImageFlag(element.original_language)" alt="">
                <div id="stelle">
                    <p>{{ element.vote_average }}</p>
                    <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 0" />
                    <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 1" />
                    <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 2" />
                    <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 3" />
                    <font-awesome-icon icon="fa-solid fa-star" v-if="(element.vote_average / 2) > 4" />

                </div>
                <!-- immagine poster -->
                <img v-if="element.poster_path != null" :src="getImagePoster(element.poster_path)" alt="">
            </div>
        </div>
    </div>
</template>
<style scooped>
#card {
    width: 30%;
    margin-right: calc(10% / 3);
    margin-bottom: 1rem;
}

#flag {
    width: 2rem;
}
</style>