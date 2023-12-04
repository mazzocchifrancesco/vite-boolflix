<script>
import { store } from "../store.js"

export default {
    name: "appCard",
    props: {
        info: Object,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getImageUrl(img) {

            // lang fix
            if (img == 'en') { img = 'gb' };
            if (img == 'ja') { img = 'jp' };
            if (img == 'nb') { img = 'no' };
            if (img == 'da') { img = 'dk' };
            if (img == 'zh') { img = 'cn' };
            if (img == 'te') { img = 'in' };

            return new URL(`../../node_modules/svg-country-flags/svg/${img}.svg`, import.meta.url).href
        }
    }
}

</script>

<template>
    <div id="card" class=" d-flex flex-column flex-wrap bg-white">
        <h4> {{ info.title }}{{ info.name }}</h4>
        <p> {{ info.original_title }}{{ info.original_name }}</p>
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