<script>
import { store } from "../store.js"


export default {
    name: "appHeader",
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchString);
            this.$emit("search");
        }
    }
}
</script>

<template>
    <nav class="bg-danger d-flex justify-content-between align-items-center px-5">
        <h3>Boolflix</h3>


        <form class="d-flex align-items-center" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                v-model="this.store.searchString">
            <button @click="search" class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </nav>
</template>

<style scoped>
nav {
    height: 4rem;
}
</style>
