import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'


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

//อ้างอิง ตัว ออเทน กับ ไฟสโตวื
const auth = firebase.auth();
auth.onAuthStateChanged (user => {
  if (user) {
    console.log('user login',user)
  } else {
    console.log('user logOut')
  }
  
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
