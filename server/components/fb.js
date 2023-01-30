// Import the functions you need from the SDKs you need
const {initializeApp} = require("firebase/app")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXF8axm53br145O8KK4wKMM-yU0hUIyHU",
  authDomain: "three-idiots-kurly.firebaseapp.com",
  databaseURL: "https://three-idiots-kurly-default-rtdb.firebaseio.com",
  projectId: "three-idiots-kurly",
  storageBucket: "three-idiots-kurly.appspot.com",
  messagingSenderId: "482929565090",
  appId: "1:482929565090:web:c5c58ea1460f9fc141e6fb",
  measurementId: "G-J9QZ737RK8"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

module.exports = {fb}