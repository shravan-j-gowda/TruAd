// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDg48JHRIF2uQyVpQyrNMw74BMic7RW6HI",
    authDomain: "videostore-4cb7b.firebaseapp.com",
    projectId: "videostore-4cb7b",
    storageBucket: "videostore-4cb7b.appspot.com",
    messagingSenderId: "531778929700",
    appId: "1:531778929700:web:7901af87befd59311ec4b1",
    measurementId: "G-P8ET91YLTM"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
