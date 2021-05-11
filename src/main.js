

import 'vuetify/dist/vuetify.min.css'


// FontAwesome stuff
import {
  library,
} from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// scss styles
import './styles/main.scss'

// Vue initializations
Vue.use(vuetify)
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(
  faGithub,
  faTwitter,
  faEnvelope,
  faLinkedin,
)

// Vue config
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
