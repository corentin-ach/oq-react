// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'ocean-quality.firebaseapp.com',
  projectId: 'ocean-quality',
  storageBucket: 'ocean-quality.appspot.com',
  messagingSenderId: '380664517429',
  appId: '1:380664517429:web:5c3cf4cac813d6a3cb727c',
  measurementId: 'G-Y13RTCQJF3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// eslint-disable-next-line import/prefer-default-export
export { db, auth };
