<script>
import { store } from "../store.js"

export default {
    name: "appCard",
    props: {
        info: Object,
        title: String
    },
    data() {
        return {
            store,
            x: 5,
        }
    },
    methods: {
        getImageUrl(img) {
            return new URL(`../../node_modules/svg-country-flags/svg/${img}.svg`, import.meta.url).href
        }
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
                <img :src="getImageUrl(element.original_language)" alt="">
                <p>{{ element.vote_average }}</p>
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

img {
    width: 2rem;
}
</style>