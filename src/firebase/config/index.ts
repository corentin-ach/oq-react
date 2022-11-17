// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDYLmj_CX0T2twv7Svb3yStARu8hKHuvhY',
  authDomain: 'ocean-quality.firebaseapp.com',
  projectId: 'ocean-quality',
  storageBucket: 'ocean-quality.appspot.com',
  messagingSenderId: '380664517429',
  appId: '1:380664517429:web:5c3cf4cac813d6a3cb727c',
  measurementId: 'G-X11QX0W9WV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// eslint-disable-next-line import/prefer-default-export
export { db };
