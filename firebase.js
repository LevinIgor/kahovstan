import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCLG09IE-yLkPNKHJEzitsi8x-nvkzceu4",
    authDomain: "kahovstan.firebaseapp.com",
    databaseURL: "https://kahovstan-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kahovstan",
    storageBucket: "kahovstan.appspot.com",
    messagingSenderId: "165536707905",
    appId: "1:165536707905:web:71732b1a6663fb622addc0",
    measurementId: "G-85VL1KMK66"
}
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore();

export default firebase;