import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDcNsbyjvdMVweK7hpI3sVFlOIlUsdQ5d4",
    authDomain: "e-ride-4-c7ba8.firebaseapp.com",
    projectId: "e-ride-4-c7ba8",
    storageBucket: "e-ride-4-c7ba8.appspot.com",
    messagingSenderId: "625511716619",
    appId: "1:625511716619:web:003103261fb8dfc745b40e"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


