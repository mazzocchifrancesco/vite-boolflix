import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fasStar, farStar, faFaceFrown)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')