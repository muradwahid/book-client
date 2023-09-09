// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMhbNdnlT6J__TMLatb-aEy23Q8T3YuzI',
  authDomain: 'book-e39bb.firebaseapp.com',
  projectId: 'book-e39bb',
  storageBucket: 'book-e39bb.appspot.com',
  messagingSenderId: '808019039982',
  appId: '1:808019039982:web:d56281155cca69073305ff',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

