// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGQoDpGFa8xO2BcEvR4kYdypvjy4ieCq8',
  authDomain: 'something-special-dddf8.firebaseapp.com',
  projectId: 'something-special-dddf8',
  storageBucket: 'something-special-dddf8.appspot.com',
  messagingSenderId: '253056162141',
  appId: '1:253056162141:web:7a4cd99842a0adf5d130b4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
