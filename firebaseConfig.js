// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCredential } from 'firebase/auth';
import { WebAuthnAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCS_xLPCTdAv25N1WwEFAh_a0fFs8rTweI",
    authDomain: "expo-app-ba6f8.firebaseapp.com",
    projectId: "expo-app-ba6f8",
    storageBucket: "expo-app-ba6f8.appspot.com",
    messagingSenderId: "546584592394",
    appId: "1:546584592394:web:e7d14bfda7d8b6443adff3",
    measurementId: "G-3PFYZZ0CR3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
