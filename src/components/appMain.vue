<script>
import axios from 'axios';
import { store } from "../store.js"
import appCard from "./appCard.vue"



export default {
    components: {
        appCard
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div id="main">

        <div class="container">
            <h2>FILM</h2>
            <div class="row">
                <appCard v-for="film in store.movies " :info="film" />
            </div>
        </div>
    </div>
</template>

<style scoped>
#main {
    background-color: lightslategray;
    padding: 2rem 0;
}
</style>
