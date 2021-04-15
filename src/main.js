import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyCLG09IE-yLkPNKHJEzitsi8x-nvkzceu4",
    authDomain: "kahovstan.firebaseapp.com",
    projectId: "kahovstan",
    storageBucket: "kahovstan.appspot.com",
    messagingSenderId: "165536707905",
    appId: "1:165536707905:web:71732b1a6663fb622addc0",
    measurementId: "G-85VL1KMK66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App).use(store).use(router).mount('#app')