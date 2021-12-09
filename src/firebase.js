import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/analytics";


// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDBU9pTQfGKA5M1P6eFJ8crbAU3k8rOVG8",
  authDomain: "muro-interactivo-d6663.firebaseapp.com",
  projectId: "muro-interactivo-d6663",
  storageBucket: "muro-interactivo-d6663.appspot.com",
  messagingSenderId: "815747818742",
  appId: "1:815747818742:web:0c42b0af43170be218f8d7",
  measurementId: "${config.measurementId}"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();