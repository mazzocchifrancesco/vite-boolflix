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
    <div class="d-flex">
        <p> {{ info.title }}</p>

    </div>
</template>
<style scooped></style>