import { createApp } from 'vue'
import App from './App.vue'
import './styles/general.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronLeft, faChevronRight, faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fasStar, farStar, faFaceFrown, faChevronLeft, faChevronRight)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')