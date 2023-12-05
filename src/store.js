import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/",
    apiKey: "73186e0865f544d82855e0f04703c7c6",
    posterUrl: 'https://image.tmdb.org/t/p/',
    posterSize: 'w154',
    searchString: "",
    lingua: 'it-IT',
    movie: [],
    tv: []
})



