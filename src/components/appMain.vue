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
        //TODO: aggiungere scroll alla pressione continua 
        slideRight(title) {
            document.querySelectorAll('[type=' + title + ']')[0].scrollLeft += 200;
        },
        slideLeft(title) {
            document.querySelectorAll('[type=' + title + ']')[0].scrollLeft -= 200;
        }
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
            <div class="position-relative">

                <!-- titolo con v-for appare quando c'è contenuto nell'array -->
                <h2 v-show="store.movie.length > 0" class="text-uppercase textRed fw-bolder mb-4">FILM</h2>
                <appCard :info="store.movie" :movieOrShow="'movie'" :title="'film'" />
                <div v-show="store.movie.length > 0" @click="slideLeft('film')"
                    class=" slider position-absolute top-50 start-0 translate-middle">
                    <font-awesome-icon icon="chevron-left" size="xl" />
                </div>
                <div v-show="store.movie.length > 0" @click="slideRight('film')"
                    class=" slider position-absolute top-50 start-100 translate-middle">
                    <font-awesome-icon icon="chevron-right" size="xl" />
                </div>
            </div>
            <!-- serie tv -->
            <!-- titolo con v-for appare quando c'è contenuto nell'array -->
            <div class="position-relative">
                <h2 v-show="store.tv.length > 0 != ''" class="text-uppercase textRed fw-bolder mb-4">SERIE TV</h2>
                <appCard :info="store.tv" :movieOrShow="'tv'" :title="'serietv'" />
                <div v-show="store.tv.length > 0" @click="slideLeft('serietv')"
                    class=" slider position-absolute top-50 start-0 translate-middle">
                    <font-awesome-icon icon="chevron-left" size="xl" />
                </div>
                <div v-show="store.tv.length > 0" @click="slideRight('serietv')"
                    class=" slider position-absolute top-50 start-100 translate-middle">
                    <font-awesome-icon icon="chevron-right" size="xl" />
                </div>
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

/*   */
/**
bottone slider

*TODO: aggiungere effetto al click
**/
.slider {
    width: 3rem;
    z-index: 99999;
    color: #d13b49;
    border-radius: 50%;
    background-color: black;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
