import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB39pnmM37Wy336PdVE1LFVKLYh-407bzg",
  authDomain: "dbturck.firebaseapp.com",
  projectId: "dbturck",
  storageBucket: "dbturck.appspot.com",
  messagingSenderId: "866205299668",
  appId: "1:866205299668:web:5ae9f98ae3e7db9c955c41",
  measurementId: "G-1GVEDM65N9"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
