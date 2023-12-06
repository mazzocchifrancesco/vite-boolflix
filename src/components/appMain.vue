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
    <div id="main" class="overflow-auto">
        <!-- i valori di movieOrShow devo essere quelli dalla docs dell'API -->
        <!-- film -->
        <appCard :info="store.movie" :movieOrShow="'movie'" :title="'film'" />
        <!-- serie tv -->
        <appCard :info="store.tv" :movieOrShow="'tv'" :title="'serie tv'" />
    </div>
</template>

<style scoped>
#main {
    background-color: rgb(54, 54, 54);
    padding: 2rem 0;
    height: calc(100vh - 5rem);
}
</style>
