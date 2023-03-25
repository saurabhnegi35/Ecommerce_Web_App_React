import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBWYm1GMukqx8TaGcSvDURNHBUmF9MjTBI',
  authDomain: 'ecommerce-f5415.firebaseapp.com',
  projectId: 'ecommerce-f5415',
  storageBucket: 'ecommerce-f5415.appspot.com',
  messagingSenderId: '1072840161813',
  appId: '1:1072840161813:web:4ba87dba90b714b981ac1c',
};

// Initialize Firebase
// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
