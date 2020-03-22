// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import Firebase from "./firebase" //追加
// Firebase.init(); //追加

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Firebase from "./firebase"

Firebase.init();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')