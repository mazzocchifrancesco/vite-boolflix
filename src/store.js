import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=",
    apiKey: "73186e0865f544d82855e0f04703c7c6",
    searchString: "",
    movies: [],
    // imgString: `../../node_modules/svg-country-flags/svg/en.svg`
})