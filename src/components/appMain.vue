<script>
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
        <!-- film -->
        <appCard :info="store.movie" :title="'film'" />
        <!-- serie tv -->
        <appCard :info="store.tv" :title="'serie tv'" />
    </div>
</template>

<style scoped>
#main {
    background-color: lightslategray;
    padding: 2rem 0;
}
</style>
