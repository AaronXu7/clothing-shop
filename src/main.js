import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'

import toast from 'common-cpn/toast'

Vue.config.productionTip = false

Vue.use(toast)

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
