<script>
import { store } from "../store.js"

export default {
    name: "appCard",
    props: {
        info: Object
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getImageUrl(name) {
            if (name == "en") {
                name = 'gb';
            };
            return new URL(`../../node_modules/svg-country-flags/svg/${name}.svg`, import.meta.url).href
        }
    }
}

</script>

<template>
    <div id="card" class=" d-flex flex-column flex-wrap bg-white">
        <h4> {{ info.title }}</h4>
        <p> {{ info.original_title }}</p>
        <p> {{ info.original_language }}</p>

        <img :src="getImageUrl(info.original_language)" alt=aaaaa>
        <p>{{ info.vote_average }}</p>
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