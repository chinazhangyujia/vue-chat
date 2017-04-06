import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import App from './App'

Vue.use(MuseUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
