import * as firebase from 'firebase';

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
firebase.initializeApp(firebaseConfig);

//Export
export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.googleAuthProvider();
