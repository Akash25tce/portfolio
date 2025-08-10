import { createApp } from 'vue'
import App from './App.vue'
import Particles from "vue3-particles";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(Particles) // Add this line
app.mount('#app')