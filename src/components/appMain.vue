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
    <appCard v-for="film in store.movies " :info="film" />
</template>

<style scoped></style>
