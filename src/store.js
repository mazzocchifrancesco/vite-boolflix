import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/",
    apiKey: "73186e0865f544d82855e0f04703c7c6",
    searchString: "",
    movie: [],
    tv: []
})



