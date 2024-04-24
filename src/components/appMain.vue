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
    methods: {

    }
}
</script>

<template>
    <div id="main" class="overflow-auto">
        <div class="text-white d-flex justify-content-center">
            <template v-for="(id, index) in store.selectedGenres">
                <p v-if="id != null" class="mx-2 fs-5 badge text-bg-secondary">{{ id.name
                    }}
                </p>
            </template>
        </div>
        <!-- i valori di movieOrShow devo essere quelli dalla docs dell'API -->
        <div class="container">

            <!-- film -->
            <div>

                <!-- titolo con v-for appare quando c'è contenuto nell'array -->

                <appCard :info="store.movie" :movieOrShow="'movie'" :title="'film'" />

            </div>
            <!-- serie tv -->
            <!-- titolo con v-for appare quando c'è contenuto nell'array -->
            <div>

                <appCard :info="store.tv" :movieOrShow="'tv'" :title="'serietv'" />

            </div>

        </div>
    </div>
</template>

<style scoped>
#main {
    background-color: rgb(54, 54, 54);
    padding: 2rem 0;
    height: calc(100vh - 5rem);
}
</style>
