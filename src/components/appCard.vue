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
}
</script>

<template>
    <div id="card" class=" d-flex flex-column flex-wrap bg-white">
        <h4> {{ info.title }}</h4>
        <p> {{ info.original_title }}</p>
        <p>{{ info.original_language }}</p>
        <p>{{ info.vote_average }}</p>
    </div>
</template>
<style scooped>
#card {
    width: 30%;
    margin-right: calc(10% / 3);
    margin-bottom: 1rem;
}
</style>