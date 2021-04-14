import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {

};

// var firebaseConfig = {
// apiKey: "AIzaSyCLG09IE-yLkPNKHJEzitsi8x-nvkzceu4",
// authDomain: "kahovstan.firebaseapp.com",
// projectId: "kahovstan",
// storageBucket: "kahovstan.appspot.com",
// messagingSenderId: "165536707905",
// appId: "1:165536707905:web:71732b1a6663fb622addc0",
// measurementId: "G-85VL1KMK66"
// };
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);